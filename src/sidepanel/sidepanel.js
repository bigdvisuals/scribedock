document.addEventListener('DOMContentLoaded', () => {
  const CONTENT_SCRIPT_FILES = [
    'src/utils/youtube.js',
    'src/utils/navigation.js',
    'src/utils/transcript.js',
    'src/utils/export.js',
    'src/utils/sidebar.js',
    'src/utils/runtime-message.js',
    'src/content/content.js'
  ];
  const CONTENT_CSS_FILES = [];

  const elements = {
    header: document.getElementById('video-header'),
    title: document.getElementById('video-title'),
    channel: document.getElementById('video-channel'),
    status: document.getElementById('transcript-status'),
    langSelect: document.getElementById('language-select'),
    toolbar: document.getElementById('toolbar'),
    searchInput: document.getElementById('search-input'),
    btnCopy: document.getElementById('btn-copy'),
    btnDownload: document.getElementById('btn-download'),
    dropdownItems: document.querySelectorAll('.dropdown-item'),
    transcriptContainer: document.getElementById('transcript-container'),
    stateNotYoutube: document.getElementById('state-not-youtube'),
    stateLoading: document.getElementById('state-loading'),
    stateNoTranscript: document.getElementById('state-no-transcript'),
    stateError: document.getElementById('state-error'),
    errorMessage: document.getElementById('error-message'),
    btnRetry: document.getElementById('btn-retry')
  };

  let currentTabId = null;
  let pollInterval = null;
  let activeStartSeconds = -1;
  let stateRefreshTimer = null;
  let loadStartedAt = 0;
  let activeLoadId = 0;
  let lastRenderedSignature = '';
  const sidePanelState = {
    videoId: null,
    title: '',
    channel: '',
    captionLabel: '',
    rows: [],
    status: 'not-youtube'
  };
  const STATE_REFRESH_INTERVAL_MS = 250;
  const MAX_LOADING_MS = 15000;

  function showState(stateName) {
    sidePanelState.status = stateName;

    if (stateName !== 'loaded' && pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }

    elements.stateNotYoutube.hidden = stateName !== 'not-youtube';
    elements.stateLoading.hidden = stateName !== 'loading';
    elements.stateNoTranscript.hidden = stateName !== 'no-transcript';
    elements.stateError.hidden = stateName !== 'error';
    elements.transcriptContainer.hidden = stateName !== 'loaded';
    
    const showHeaderAndToolbar = stateName === 'loaded' || stateName === 'no-transcript' || stateName === 'loading';
    elements.header.hidden = !showHeaderAndToolbar;
    elements.toolbar.hidden = !showHeaderAndToolbar;
    
    elements.btnCopy.disabled = stateName !== 'loaded';
    elements.btnDownload.disabled = stateName !== 'loaded';
  }

  function clearStateRefreshTimer() {
    if (stateRefreshTimer) {
      clearTimeout(stateRefreshTimer);
      stateRefreshTimer = null;
    }
  }

  function renderVideoLoading(videoId) {
    clearStateRefreshTimer();
    sidePanelState.videoId = videoId || null;
    sidePanelState.title = '';
    sidePanelState.channel = '';
    sidePanelState.captionLabel = '';
    sidePanelState.rows = [];
    activeStartSeconds = -1;
    lastRenderedSignature = '';

    elements.title.textContent = 'Loading video...';
    elements.channel.textContent = '';
    elements.status.textContent = 'Loading transcript...';
    elements.searchInput.value = '';
    elements.transcriptContainer.innerHTML = '';
    showState('loading');
  }

  function scheduleStateRefresh(loadId) {
    clearStateRefreshTimer();

    if (Date.now() - loadStartedAt >= MAX_LOADING_MS) {
      elements.errorMessage.textContent = 'Transcript loading timed out. Try reloading the YouTube tab.';
      showState('error');
      return;
    }

    stateRefreshTimer = setTimeout(() => {
      loadTranscriptState({ loadId, preserveState: true });
    }, STATE_REFRESH_INTERVAL_MS);
  }

  function getRowsSignature(rows) {
    if (!Array.isArray(rows) || rows.length === 0) {
      return 'empty';
    }

    const first = rows[0];
    const last = rows[rows.length - 1];

    return [
      rows.length,
      first.startSeconds,
      first.text,
      last.startSeconds,
      last.text
    ].join('|');
  }

  async function getActiveTab() {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        resolve(tabs[0] || null);
      });
    });
  }

  function sendMessageToTab(message) {
    return new Promise((resolve) => {
      if (!currentTabId) return resolve(null);
      chrome.tabs.sendMessage(currentTabId, message, (response) => {
        if (chrome.runtime.lastError) {
          resolve(null);
        } else {
          resolve(response);
        }
      });
    });
  }

  function injectContentAssets() {
    if (!currentTabId || !chrome.scripting) {
      return Promise.resolve(false);
    }

    const cssPromises = CONTENT_CSS_FILES.map(file => {
      return chrome.scripting.insertCSS({
        target: { tabId: currentTabId },
        files: [file]
      }).catch(() => null);
    });

    return Promise.all(cssPromises)
      .then(() => chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        files: CONTENT_SCRIPT_FILES
      }))
      .then(() => true)
      .catch(() => false);
  }

  async function getTranscriptStateFromTab() {
    let state = await sendMessageToTab({ type: 'GET_TRANSCRIPT_STATE' });

    if (!state) {
      const injected = await injectContentAssets();

      if (injected) {
        state = await sendMessageToTab({ type: 'GET_TRANSCRIPT_STATE' });
      }
    }

    return state;
  }

  function formatTimestamp(seconds) {
    const safeSeconds = Math.max(0, Math.floor(Number(seconds) || 0));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const secs = safeSeconds % 60;
    const minStr = String(minutes).padStart(hours > 0 ? 2 : 1, '0');
    const secStr = String(secs).padStart(2, '0');
    return hours > 0 ? `${hours}:${minStr}:${secStr}` : `${minStr}:${secStr}`;
  }

  function renderRows(rows, query = '') {
    elements.transcriptContainer.innerHTML = '';
    const frag = document.createDocumentFragment();
    const lowerQuery = query.toLowerCase().trim();

    rows.forEach(row => {
      if (lowerQuery && !row.text.toLowerCase().includes(lowerQuery) && !formatTimestamp(row.startSeconds).includes(lowerQuery)) {
        return;
      }
      const div = document.createElement('div');
      div.className = 'transcript-row';
      div.dataset.start = row.startSeconds;
      div.dataset.end = row.startSeconds + row.durationSeconds;
      
      const timeSpan = document.createElement('div');
      timeSpan.className = 'row-timestamp';
      timeSpan.textContent = formatTimestamp(row.startSeconds);
      
      const textSpan = document.createElement('div');
      textSpan.className = 'row-text';
      textSpan.textContent = row.text;

      div.appendChild(timeSpan);
      div.appendChild(textSpan);
      
      div.addEventListener('click', () => {
        sendMessageToTab({ type: 'JUMP_TO_TIME', time: row.startSeconds });
      });

      frag.appendChild(div);
    });

    elements.transcriptContainer.appendChild(frag);
    updateActiveHighlight(activeStartSeconds);
  }

  function updateActiveHighlight(currentTimeSeconds) {
    if (currentTimeSeconds < 0) return;
    
    const rows = elements.transcriptContainer.querySelectorAll('.transcript-row');
    let activeRow = null;

    rows.forEach(row => {
      const start = parseFloat(row.dataset.start);
      const end = parseFloat(row.dataset.end);
      if (currentTimeSeconds >= start && currentTimeSeconds < end) {
        row.classList.add('active-row');
        activeRow = row;
      } else {
        row.classList.remove('active-row');
      }
    });

    if (activeRow && !isElementInViewport(activeRow)) {
      activeRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const containerRect = elements.transcriptContainer.getBoundingClientRect();
    return (
      rect.top >= containerRect.top &&
      rect.bottom <= containerRect.bottom
    );
  }

  async function pollCurrentTime() {
    if (document.hidden) return; // don't poll if panel is not visible
    const res = await sendMessageToTab({ type: 'GET_CURRENT_TIME' });
    if (res && typeof res.currentTime === 'number') {
      activeStartSeconds = res.currentTime;
      updateActiveHighlight(activeStartSeconds);
    }
  }

  function startPolling() {
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = setInterval(pollCurrentTime, 1000);
  }

  async function loadTranscriptState(options = {}) {
    const loadId = options.loadId || activeLoadId + 1;
    const expectedVideoId = options.expectedVideoId || sidePanelState.videoId;

    if (!options.loadId) {
      activeLoadId = loadId;
      loadStartedAt = Date.now();
      lastRenderedSignature = '';
    }

    if (!options.preserveState) {
      showState('loading');
    }

    const tab = await getActiveTab();
    const pageSupport = window.YTTranscriptPageSupport;

    if (loadId !== activeLoadId) return;

    if (!tab || !tab.url || !pageSupport || !pageSupport.isSupportedYouTubeVideoUrl(tab.url)) {
      clearStateRefreshTimer();
      sidePanelState.videoId = null;
      sidePanelState.title = '';
      sidePanelState.channel = '';
      sidePanelState.captionLabel = '';
      sidePanelState.rows = [];
      showState('not-youtube');
      return;
    }

    currentTabId = tab.id;
    const tabVideoId = window.YTTranscriptYouTube.getVideoIdFromUrl(tab.url);

    if (!sidePanelState.videoId || sidePanelState.videoId !== tabVideoId) {
      renderVideoLoading(tabVideoId);
    }

    const state = await getTranscriptStateFromTab();

    if (loadId !== activeLoadId) return;
    
    if (!state) {
      // Content script might not be ready or injected
      clearStateRefreshTimer();
      elements.errorMessage.textContent = 'Could not connect to YouTube page. Please refresh.';
      showState('error');
      return;
    }

    if (
      (expectedVideoId && state.videoId !== expectedVideoId) ||
      (sidePanelState.videoId && state.videoId !== sidePanelState.videoId)
    ) {
      return;
    }

    if (!state.videoTitle && state.status === 'loading') {
      elements.status.textContent = 'Loading transcript...';
      showState('loading');
      scheduleStateRefresh(loadId);
      return;
    }

    sidePanelState.videoId = state.videoId || tabVideoId;
    sidePanelState.title = state.videoTitle || 'Unknown video';
    sidePanelState.channel = state.channelName || '';

    elements.title.textContent = sidePanelState.title;
    elements.channel.textContent = sidePanelState.channel;

    if (state.status === 'unavailable') {
      clearStateRefreshTimer();
      elements.status.textContent = 'No transcript available';
      showState('no-transcript');
    } else if (state.status === 'error') {
      clearStateRefreshTimer();
      elements.errorMessage.textContent = state.error || 'Failed to load transcript.';
      showState('error');
    } else if (state.status === 'loaded' && state.rows && state.rows.length > 0) {
      clearStateRefreshTimer();
      sidePanelState.rows = state.rows;
      const trackLabel = state.captionLabel || ((state.tracks && state.tracks[0]) ? state.tracks[0].label : 'Auto-generated English');
      sidePanelState.captionLabel = trackLabel;
      elements.status.textContent = 'Transcript: ' + trackLabel;
      const renderSignature = [
        state.videoId || '',
        trackLabel,
        getRowsSignature(sidePanelState.rows),
        elements.searchInput.value || ''
      ].join('::');

      if (renderSignature !== lastRenderedSignature) {
        renderRows(sidePanelState.rows, elements.searchInput.value);
        lastRenderedSignature = renderSignature;
      }

      showState('loaded');
      startPolling();
    } else {
      elements.status.textContent = state.status === 'loading' ? 'Loading transcript...' : 'Checking...';
      showState('loading');
      scheduleStateRefresh(loadId);
    }
  }

  elements.searchInput.addEventListener('input', (e) => {
    renderRows(sidePanelState.rows, e.target.value);
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      e.preventDefault();
      elements.searchInput.focus();
    }
  });

  elements.btnCopy.addEventListener('click', async () => {
    if (!sidePanelState.rows.length) return;
    const text = window.YTTranscriptExport.buildPlainTextTranscript(elements.title.textContent, '', sidePanelState.rows);
    try {
      await navigator.clipboard.writeText(text);
      const originalText = elements.btnCopy.textContent;
      elements.btnCopy.textContent = 'Copied!';
      setTimeout(() => { elements.btnCopy.textContent = originalText; }, 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  });

  elements.dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
      if (!sidePanelState.rows.length) return;
      const format = item.dataset.format;
      const title = elements.title.textContent || 'transcript';
      const exportHelpers = window.YTTranscriptExport;
      let text = '';
      let filename = exportHelpers.createSafeFileName(title, format);

      if (format === 'txt') {
        text = exportHelpers.buildPlainTextTranscript(title, '', sidePanelState.rows);
      } else if (format === 'md') {
        text = exportHelpers.buildMarkdownTranscript(title, '', sidePanelState.rows);
      } else if (format === 'srt') {
        text = exportHelpers.buildSrtTranscript(sidePanelState.rows);
      } else if (format === 'vtt') {
        text = exportHelpers.buildVttTranscript(sidePanelState.rows);
      }

      exportHelpers.downloadTextFile(filename, text, document);
    });
  });

  elements.btnRetry.addEventListener('click', loadTranscriptState);

  // Listen for navigation updates from background or tab
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tabId === currentTabId && changeInfo.status === 'complete') {
      loadTranscriptState();
    }
  });

  // Also listen for messages from content script about SPA navigation or state changes
  chrome.runtime.onMessage.addListener((message) => {
    if (message && message.type === 'VIDEO_CHANGED') {
      activeLoadId += 1;
      renderVideoLoading(message.videoId);
      loadTranscriptState({ expectedVideoId: message.videoId });
      return;
    }

    if (message && (message.type === 'YT_TRANSCRIPT_NAVIGATED' || message.type === 'YT_TRANSCRIPT_STATE_CHANGED')) {
      loadTranscriptState({ expectedVideoId: sidePanelState.videoId });
    }
  });

  loadTranscriptState();
});
