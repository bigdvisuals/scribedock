document.addEventListener('DOMContentLoaded', () => {
  const CONTENT_SCRIPT_FILES = [
    'src/utils/youtube.js',
    'src/utils/page-support.js',
    'src/utils/navigation.js',
    'src/utils/transcript.js',
    'src/utils/channel.js',
    'src/utils/export.js',
    'src/utils/runtime-message.js',
    'src/content/content.js'
  ];
  const CONTENT_CSS_FILES = [];

  const elements = {
    header: document.getElementById('video-header'),
    title: document.getElementById('video-title'),
    channel: document.getElementById('video-channel'),
    status: document.getElementById('transcript-status'),
    languageControl: document.getElementById('language-control'),
    languageTrigger: document.getElementById('language-trigger'),
    languageTriggerLabel: document.getElementById('language-trigger-label'),
    languageMenu: document.getElementById('language-menu'),
    languagePill: document.getElementById('language-pill'),
    languageNote: document.getElementById('language-note'),
    panelStatus: document.getElementById('panel-status'),
    currentTimePill: document.getElementById('current-time-pill'),
    toolbar: document.getElementById('toolbar'),
    searchInput: document.getElementById('search-input'),
    searchCount: document.getElementById('search-count'),
    btnCopy: document.getElementById('btn-copy'),
    btnDownloadTxt: document.getElementById('btn-download-txt'),
    transcriptShell: document.getElementById('transcript-shell'),
    transcriptContainer: document.getElementById('transcript-container'),
    btnJumpCurrent: document.getElementById('btn-jump-current'),
    footer: document.getElementById('panel-footer'),
    lineCount: document.getElementById('line-count'),
    followStatus: document.getElementById('follow-status'),
    footerTime: document.getElementById('footer-time'),
    stateNotYoutube: document.getElementById('state-not-youtube'),
    stateChannelMode: document.getElementById('state-channel-mode'),
    stateLoading: document.getElementById('state-loading'),
    stateNoTranscript: document.getElementById('state-no-transcript'),
    stateError: document.getElementById('state-error'),
    errorMessage: document.getElementById('error-message'),
    btnRetry: document.getElementById('btn-retry'),
    channelAvatarFallback: document.getElementById('channel-avatar-fallback'),
    channelAvatar: document.getElementById('channel-avatar'),
    channelName: document.getElementById('channel-name'),
    channelStatusPill: document.getElementById('channel-status-pill'),
    channelVisibleCount: document.getElementById('channel-visible-count'),
    channelHelperText: document.getElementById('channel-helper-text'),
    channelProgress: document.getElementById('channel-progress'),
    channelProgressFill: document.getElementById('channel-progress-fill'),
    channelProgressLabel: document.getElementById('channel-progress-label'),
    channelCurrentVideo: document.getElementById('channel-current-video'),
    channelSuccessCount: document.getElementById('channel-success-count'),
    channelFailureCount: document.getElementById('channel-failure-count'),
    channelSummary: document.getElementById('channel-summary'),
    btnScanVisibleVideos: document.getElementById('btn-scan-visible-videos'),
    btnPauseChannelScan: document.getElementById('btn-pause-channel-scan'),
    btnResumeChannelScan: document.getElementById('btn-resume-channel-scan'),
    btnCancelChannelScan: document.getElementById('btn-cancel-channel-scan'),
    btnDownloadChannelZip: document.getElementById('btn-download-channel-zip')
  };

  let currentTabId = null;
  let pollInterval = null;
  let activeStartSeconds = -1;
  let stateRefreshTimer = null;
  let loadStartedAt = 0;
  let activeLoadId = 0;
  let lastRenderedSignature = '';
  let isAutoScrollEnabled = true;
  let isProgrammaticScroll = false;
  let lastActiveRowStart = null;
  let currentActiveRow = null;
  let programmaticScrollTimer = null;
  let languageOptions = [];
  let isLanguageMenuOpen = false;
  let focusedLanguageOptionIndex = -1;
  const sidePanelState = {
    videoId: null,
    title: '',
    channel: '',
    captionLabel: '',
    selectedTrackIndex: -1,
    selectionMode: 'auto',
    languageNotice: '',
    rows: [],
    status: 'not-youtube',
    mode: 'UNSUPPORTED_MODE',
    channelContext: null,
    channelScanState: null
  };
  const STATE_REFRESH_INTERVAL_MS = 250;
  const MAX_LOADING_MS = 15000;
  const COMMON_LANGUAGE_PRIORITY = [
    'en',
    'es',
    'fr',
    'de',
    'pt',
    'hi',
    'zh',
    'ja',
    'ko'
  ];

  function showState(stateName) {
    sidePanelState.status = stateName;

    if (stateName !== 'loaded' && pollInterval) {
      clearInterval(pollInterval);
      pollInterval = null;
    }

    elements.stateNotYoutube.hidden = stateName !== 'not-youtube';
    elements.stateChannelMode.hidden = stateName !== 'channel';
    elements.stateLoading.hidden = stateName !== 'loading';
    elements.stateNoTranscript.hidden = stateName !== 'no-transcript';
    elements.stateError.hidden = stateName !== 'error';
    if (elements.transcriptShell) {
      elements.transcriptShell.hidden = stateName !== 'loaded';
    } else {
      elements.transcriptContainer.hidden = stateName !== 'loaded';
    }

    if (elements.footer) {
      elements.footer.hidden = stateName !== 'loaded';
    }

    if (stateName !== 'loaded') {
      hideJumpToCurrentButton();
    }
    
    const showHeaderAndToolbar = stateName === 'loaded' || stateName === 'no-transcript' || stateName === 'loading';
    elements.header.hidden = !showHeaderAndToolbar;
    elements.toolbar.hidden = !showHeaderAndToolbar;
    
    elements.btnCopy.disabled = stateName !== 'loaded';
    elements.btnDownloadTxt.disabled = stateName !== 'loaded';

    if (elements.panelStatus) {
      const labelByState = {
        loaded: 'Ready',
        loading: 'Loading',
        'no-transcript': 'No transcript',
        error: 'Error',
        'not-youtube': 'Waiting',
        channel: 'Channel'
      };
      elements.panelStatus.textContent = labelByState[stateName] || 'Ready';
    }
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
    sidePanelState.selectedTrackIndex = -1;
    sidePanelState.selectionMode = 'auto';
    sidePanelState.languageNotice = '';
    sidePanelState.rows = [];
    activeStartSeconds = -1;
    lastRenderedSignature = '';
    lastActiveRowStart = null;
    currentActiveRow = null;
    setAutoScrollEnabled(true);

    elements.title.textContent = 'Loading video...';
    elements.channel.textContent = '';
    elements.status.textContent = 'Loading transcript...';
    renderLanguageControl([], -1, 'auto', '');
    elements.searchInput.value = '';
    elements.transcriptContainer.innerHTML = '';
    updateVisibleRowMeta(0, 0);
    updateCurrentTime(0);
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

  function buildRenderSignature(rows, query) {
    return [
      sidePanelState.videoId || '',
      sidePanelState.captionLabel || '',
      getRowsSignature(rows),
      query || ''
    ].join('::');
  }

  function getTrackLabel(track) {
    const transcriptHelpers = window.YTTranscriptTranscript;

    if (transcriptHelpers && typeof transcriptHelpers.getTrackLabel === 'function') {
      return transcriptHelpers.getTrackLabel(track);
    }

    return (track && (track.label || track.languageCode)) || 'Unknown language';
  }

  function getTrackLanguageCode(track) {
    const transcriptHelpers = window.YTTranscriptTranscript;
    const languageCode = track && track.isTranslated
      ? track.translationLanguageCode || track.languageCode
      : track && track.languageCode;

    if (transcriptHelpers && typeof transcriptHelpers.normalizeLanguageCode === 'function') {
      return transcriptHelpers.normalizeLanguageCode(languageCode);
    }

    return languageCode || '';
  }

  function getTrackBaseLanguageCode(track) {
    const transcriptHelpers = window.YTTranscriptTranscript;
    const languageCode = getTrackLanguageCode(track);

    if (transcriptHelpers && typeof transcriptHelpers.getBaseLanguageCode === 'function') {
      return transcriptHelpers.getBaseLanguageCode(languageCode);
    }

    return languageCode.split('-')[0] || '';
  }

  function createTrackLanguageOption(track, index) {
    return {
      value: String(index),
      trackIndex: index,
      label: getTrackLabel(track),
      languageCode: getTrackBaseLanguageCode(track)
    };
  }

  function getOrderedLanguageOptions(tracks, selectedTrackIndex, selectionMode) {
    const safeTracks = Array.isArray(tracks) ? tracks : [];
    const availableOptions = safeTracks.map(createTrackLanguageOption);
    const currentSelectedOption = availableOptions.find((option) => option.trackIndex === selectedTrackIndex) || null;
    const preferredOption = selectionMode === 'preferred' ? currentSelectedOption : null;
    const priorityLanguageCodes = COMMON_LANGUAGE_PRIORITY.slice();
    const orderedOptions = [];
    const seenValues = new Set();

    function pushUniqueOption(option) {
      if (!option || seenValues.has(option.value)) {
        return;
      }

      seenValues.add(option.value);
      orderedOptions.push(option);
    }

    pushUniqueOption(currentSelectedOption);
    pushUniqueOption(preferredOption);

    priorityLanguageCodes.forEach((languageCode) => {
      availableOptions
        .filter((option) => option.languageCode === languageCode)
        .sort((left, right) => left.label.localeCompare(right.label))
        .forEach(pushUniqueOption);
    });

    availableOptions
      .filter((option) => !seenValues.has(option.value))
      .sort((left, right) => left.label.localeCompare(right.label))
      .forEach(pushUniqueOption);

    return orderedOptions;
  }

  function getSelectedLanguageValue() {
    return sidePanelState.selectionMode === 'auto'
      ? 'auto'
      : String(sidePanelState.selectedTrackIndex >= 0 ? sidePanelState.selectedTrackIndex : 0);
  }

  function getLanguageOptionIndexByValue(value) {
    return languageOptions.findIndex((option) => option.value === value);
  }

  function focusLanguageOption(index) {
    const options = Array.from(elements.languageMenu.querySelectorAll('.language-option'));

    if (options.length === 0) {
      return;
    }

    focusedLanguageOptionIndex = Math.max(0, Math.min(index, options.length - 1));
    options.forEach((option, optionIndex) => {
      option.classList.toggle('is-focused', optionIndex === focusedLanguageOptionIndex);
    });
    options[focusedLanguageOptionIndex].focus();
  }

  function closeLanguageMenu({ restoreFocus = false } = {}) {
    if (!elements.languageControl || !elements.languageTrigger || !elements.languageMenu) {
      return;
    }

    isLanguageMenuOpen = false;
    focusedLanguageOptionIndex = -1;
    elements.languageControl.classList.remove('is-open');
    elements.languageTrigger.setAttribute('aria-expanded', 'false');
    elements.languageMenu.hidden = true;

    if (restoreFocus) {
      elements.languageTrigger.focus();
    }
  }

  function openLanguageMenu({ focus = 'selected' } = {}) {
    if (!elements.languageControl || !elements.languageTrigger || !elements.languageMenu || languageOptions.length === 0) {
      return;
    }

    isLanguageMenuOpen = true;
    elements.languageControl.classList.add('is-open');
    elements.languageTrigger.setAttribute('aria-expanded', 'true');
    elements.languageMenu.hidden = false;

    const selectedIndex = getLanguageOptionIndexByValue(getSelectedLanguageValue());
    const nextIndex = focus === 'last'
      ? languageOptions.length - 1
      : focus === 'first'
        ? 0
        : Math.max(selectedIndex, 0);

    focusLanguageOption(nextIndex);
  }

  async function applyLanguageSelection(value) {
    if (value === 'auto') {
      await sendMessageToTab({ type: 'SET_TRANSCRIPT_MODE_AUTO' });
    } else {
      await sendMessageToTab({
        type: 'SET_TRANSCRIPT_TRACK',
        trackIndex: Number(value)
      });
    }

    closeLanguageMenu({ restoreFocus: true });
    loadTranscriptState({ expectedVideoId: sidePanelState.videoId });
  }

  function renderLanguageMenu() {
    if (!elements.languageMenu) {
      return;
    }

    const selectedValue = getSelectedLanguageValue();
    elements.languageMenu.innerHTML = '';

    languageOptions.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'language-option';
      button.dataset.value = option.value;
      button.setAttribute('role', 'option');
      button.setAttribute('aria-selected', String(option.value === selectedValue));
      button.textContent = option.label;
      button.addEventListener('click', () => {
        applyLanguageSelection(option.value);
      });
      elements.languageMenu.appendChild(button);
    });
  }

  function renderLanguageControl(tracks, selectedTrackIndex, selectionMode, languageNotice) {
    const safeTracks = Array.isArray(tracks) ? tracks : [];

    if (elements.languageNote) {
      elements.languageNote.textContent = languageNotice || '';
      elements.languageNote.hidden = !languageNotice;
    }

    if (safeTracks.length === 0) {
      if (elements.languageControl) {
        elements.languageControl.hidden = true;
      }
      closeLanguageMenu();

      if (elements.languagePill) {
        elements.languagePill.hidden = true;
        elements.languagePill.textContent = '';
      }

      return;
    }

    if (safeTracks.length === 1) {
      if (elements.languageControl) {
        elements.languageControl.hidden = true;
      }
      closeLanguageMenu();

      if (elements.languagePill) {
        elements.languagePill.textContent = getTrackLabel(safeTracks[0]);
        elements.languagePill.hidden = false;
      }

      return;
    }

    const selectedTrack = safeTracks[selectedTrackIndex];
    sidePanelState.selectedTrackIndex = selectedTrackIndex;
    sidePanelState.selectionMode = selectionMode === 'preferred' ? 'preferred' : 'auto';
    languageOptions = [
      {
        value: 'auto',
        label: 'Auto / Best match',
        trackIndex: -1,
        languageCode: ''
      },
      ...getOrderedLanguageOptions(safeTracks, selectedTrackIndex, sidePanelState.selectionMode)
    ];

    if (elements.languageTriggerLabel) {
      elements.languageTriggerLabel.textContent = sidePanelState.selectionMode === 'auto'
        ? 'Auto / Best match'
        : getTrackLabel(selectedTrack);
    }

    renderLanguageMenu();

    if (elements.languageControl) {
      elements.languageControl.hidden = false;
    }

    if (elements.languagePill) {
      elements.languagePill.hidden = true;
      elements.languagePill.textContent = '';
    }
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

  async function getPageContextFromTab() {
    let state = await sendMessageToTab({ type: 'GET_PAGE_CONTEXT' });

    if (!state) {
      const injected = await injectContentAssets();

      if (injected) {
        state = await sendMessageToTab({ type: 'GET_PAGE_CONTEXT' });
      }
    }

    return state;
  }

  async function getChannelScanStateFromTab() {
    return sendMessageToTab({ type: 'GET_CHANNEL_SCAN_STATE' });
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

  function getRowEndSeconds(rows, index) {
    const row = rows[index];
    const nextRow = rows[index + 1];
    const durationSeconds = Number(row && row.durationSeconds);

    if (Number.isFinite(durationSeconds) && durationSeconds > 0) {
      return row.startSeconds + durationSeconds;
    }

    if (nextRow && Number.isFinite(nextRow.startSeconds)) {
      return nextRow.startSeconds;
    }

    return Number.POSITIVE_INFINITY;
  }

  function activateTranscriptRow(rowElement, startSeconds) {
    sendMessageToTab({ type: 'JUMP_TO_TIME', time: startSeconds });
    activeStartSeconds = startSeconds;
    updateCurrentTime(activeStartSeconds);
    updateActiveHighlight(activeStartSeconds);
    resumeAutoScroll(rowElement);
  }

  function renderRows(rows, query = '') {
    elements.transcriptContainer.innerHTML = '';
    const frag = document.createDocumentFragment();
    const lowerQuery = query.toLowerCase().trim();

    let visibleRows = 0;
    currentActiveRow = null;
    lastActiveRowStart = null;

    rows.forEach((row, index) => {
      if (lowerQuery && !row.text.toLowerCase().includes(lowerQuery) && !formatTimestamp(row.startSeconds).includes(lowerQuery)) {
        return;
      }
      const div = document.createElement('div');
      div.className = 'transcript-row';
      div.dataset.start = row.startSeconds;
      div.dataset.end = getRowEndSeconds(rows, index);
      div.tabIndex = 0;
      div.setAttribute('role', 'button');
      div.setAttribute('aria-label', `Jump to ${formatTimestamp(row.startSeconds)}: ${row.text}`);
      div.title = 'Jump to this point in the video';
      
      const timeSpan = document.createElement('div');
      timeSpan.className = 'row-timestamp';
      timeSpan.textContent = formatTimestamp(row.startSeconds);
      
      const textSpan = document.createElement('div');
      textSpan.className = 'row-text';
      textSpan.textContent = row.text;

      div.appendChild(timeSpan);
      div.appendChild(textSpan);
      
      div.addEventListener('click', () => {
        activateTranscriptRow(div, row.startSeconds);
      });
      div.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activateTranscriptRow(div, row.startSeconds);
        }
      });

      frag.appendChild(div);
      visibleRows += 1;
    });

    elements.transcriptContainer.appendChild(frag);
    updateVisibleRowMeta(visibleRows, lowerQuery ? visibleRows : 0);
    updateActiveHighlight(activeStartSeconds);
  }

  function updateVisibleRowMeta(visibleRows, matchCount) {
    if (elements.lineCount) {
      elements.lineCount.textContent = `${visibleRows} lines`;
    }

    if (elements.searchCount) {
      elements.searchCount.textContent = `${matchCount} ${matchCount === 1 ? 'match' : 'matches'}`;
    }
  }

  function hideJumpToCurrentButton() {
    if (elements.btnJumpCurrent) {
      elements.btnJumpCurrent.hidden = true;
    }
  }

  function showJumpToCurrentButton() {
    if (elements.btnJumpCurrent && sidePanelState.status === 'loaded') {
      elements.btnJumpCurrent.hidden = false;
    }
  }

  function setAutoScrollEnabled(enabled) {
    isAutoScrollEnabled = enabled;

    if (enabled) {
      hideJumpToCurrentButton();
    } else {
      showJumpToCurrentButton();
    }

    if (elements.followStatus) {
      elements.followStatus.textContent = enabled ? 'Transcript ready' : 'Auto-scroll paused';
    }
  }

  function markProgrammaticScroll() {
    isProgrammaticScroll = true;

    if (programmaticScrollTimer) {
      clearTimeout(programmaticScrollTimer);
    }

    programmaticScrollTimer = setTimeout(() => {
      isProgrammaticScroll = false;
      programmaticScrollTimer = null;
    }, 700);
  }

  function scrollRowIntoView(row, block = 'center') {
    if (!row) return;
    markProgrammaticScroll();
    row.scrollIntoView({ behavior: 'smooth', block });
  }

  function resumeAutoScroll(row = elements.transcriptContainer.querySelector('.active-row')) {
    setAutoScrollEnabled(true);

    if (row && !isElementInViewport(row)) {
      scrollRowIntoView(row);
    }
  }

  function updateActiveHighlight(currentTimeSeconds) {
    if (currentTimeSeconds < 0) return;
    
    const rows = elements.transcriptContainer.querySelectorAll('.transcript-row');
    let activeRow = null;

    for (const row of rows) {
      const start = parseFloat(row.dataset.start);
      const end = parseFloat(row.dataset.end);
      if (currentTimeSeconds >= start && currentTimeSeconds < end) {
        activeRow = row;
        break;
      }
    }

    const nextActiveRowStart = activeRow ? activeRow.dataset.start : null;
    const activeRowChanged = nextActiveRowStart !== lastActiveRowStart;
    lastActiveRowStart = nextActiveRowStart;

    if (activeRowChanged) {
      if (currentActiveRow) {
        currentActiveRow.classList.remove('active-row');
      }

      if (activeRow) {
        activeRow.classList.add('active-row');
      }

      currentActiveRow = activeRow;
    }

    if (activeRow && activeRowChanged && isAutoScrollEnabled && !isElementInViewport(activeRow)) {
      scrollRowIntoView(activeRow);
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
      updateCurrentTime(activeStartSeconds);
      updateActiveHighlight(activeStartSeconds);
    }
  }

  function updateCurrentTime(seconds) {
    const timestamp = formatTimestamp(seconds);

    if (elements.currentTimePill) {
      elements.currentTimePill.textContent = timestamp;
    }

    if (elements.footerTime) {
      elements.footerTime.textContent = timestamp;
    }
  }

  function startPolling() {
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = setInterval(pollCurrentTime, 1000);
  }

  function showChannelAvatarFallback() {
    elements.channelAvatar.hidden = true;
    elements.channelAvatarFallback.hidden = false;
  }

  function showChannelAvatarImage() {
    if (!elements.channelAvatar.getAttribute('src')) {
      showChannelAvatarFallback();
      return;
    }

    elements.channelAvatar.hidden = false;
    elements.channelAvatarFallback.hidden = true;
  }

  function renderChannelAvatar(avatarUrl) {
    const safeAvatarUrl = avatarUrl || '';
    const currentAvatarUrl = elements.channelAvatar.getAttribute('src') || '';

    if (!safeAvatarUrl) {
      elements.channelAvatar.removeAttribute('src');
      showChannelAvatarFallback();
      return;
    }

    elements.channelAvatar.hidden = true;
    elements.channelAvatarFallback.hidden = true;

    if (currentAvatarUrl !== safeAvatarUrl) {
      elements.channelAvatar.src = safeAvatarUrl;
      return;
    }

    if (elements.channelAvatar.complete && elements.channelAvatar.naturalWidth > 0) {
      showChannelAvatarImage();
    }
  }

  function renderChannelMode(pageContext, scanState) {
    const safePageContext = pageContext || {};
    const safeScanState = scanState || {
      status: 'idle',
      discoveredCount: 0,
      queuedCount: 0,
      completedCount: 0,
      successCount: 0,
      failureCount: 0,
      currentVideo: null
    };
    const totalCount = Math.max(
      safeScanState.discoveredCount || 0,
      safePageContext.visibleVideoCount || 0
    );
    const completedCount = safeScanState.completedCount || 0;
    const successCount = safeScanState.successCount || 0;
    const failureCount = safeScanState.failureCount || 0;
    const progressPercent = totalCount > 0
      ? Math.min(100, Math.round((completedCount / totalCount) * 100))
      : 0;
    const isScanning = safeScanState.status === 'scanning';
    const isPausing = safeScanState.status === 'pausing';
    const isPaused = safeScanState.status === 'paused';
    const hasAnyResults = successCount > 0 || failureCount > 0;
    const isCancelled = safeScanState.status === 'cancelled';
    const isCompleted = safeScanState.status === 'completed';
    const showProgress = isScanning || isPausing || isPaused || isCancelled || isCompleted || hasAnyResults;
    const isPartialExport = isPaused || isCancelled;

    sidePanelState.mode = 'CHANNEL_MODE';
    sidePanelState.channelContext = safePageContext;
    sidePanelState.channelScanState = safeScanState;

    elements.channelName.textContent = safePageContext.channelName || 'YouTube channel';
    elements.channelVisibleCount.textContent = String(safePageContext.visibleVideoCount || 0);
    elements.channelStatusPill.textContent = isScanning
      ? 'Scanning'
      : isPausing
        ? 'Pausing...'
        : isPaused
          ? 'Paused'
      : isCancelled
        ? 'Cancelled'
        : 'Ready';

    renderChannelAvatar(safePageContext.channelAvatarUrl);

    elements.channelProgress.hidden = !showProgress;
    elements.channelProgressFill.style.width = `${progressPercent}%`;
    elements.channelProgressLabel.textContent = `${isPaused ? 'Paused' : isCancelled ? 'Stopped' : 'Scanning'} ${completedCount} of ${totalCount}`;
    elements.channelCurrentVideo.textContent =
      safeScanState.currentVideo && safeScanState.currentVideo.title
        ? safeScanState.currentVideo.title
        : '';
    elements.channelSuccessCount.textContent = `${successCount} available`;
    elements.channelFailureCount.textContent = `${failureCount} unavailable`;

    elements.btnScanVisibleVideos.disabled = isScanning || isPausing || isPaused || safePageContext.visibleVideoCount === 0;
    elements.btnPauseChannelScan.hidden = !isScanning;
    elements.btnResumeChannelScan.hidden = !isPaused;
    elements.btnCancelChannelScan.hidden = !(isScanning || isPausing || isPaused);
    elements.btnDownloadChannelZip.hidden = !hasAnyResults;
    elements.btnDownloadChannelZip.disabled = successCount === 0;
    elements.btnDownloadChannelZip.textContent = isPartialExport
      ? 'Download partial ZIP'
      : 'Download transcripts ZIP';

    if (isScanning || isPausing) {
      elements.channelHelperText.textContent = 'Some videos may not have transcripts.';
      elements.channelSummary.hidden = true;
      elements.channelSummary.textContent = '';
      return;
    }

    if (isPaused || isCancelled) {
      elements.channelHelperText.textContent = 'Partial export includes transcripts found so far.';
    } else {
      elements.channelHelperText.textContent = safePageContext.visibleVideoCount > 0
        ? 'Transcripts will be downloaded only when available.'
        : 'Scroll the channel page to load more videos, then scan again.';
    }

    if (!hasAnyResults) {
      elements.channelSummary.hidden = true;
      elements.channelSummary.textContent = '';
      return;
    }

    elements.channelSummary.hidden = false;
    elements.channelSummary.textContent = isPaused
      ? `Scan paused. ${successCount} available transcripts can be downloaded now.`
      : isCancelled
      ? `Scan cancelled. ${successCount} available transcripts can still be downloaded.`
      : `Scan complete. ${successCount} available transcripts, ${failureCount} unavailable.`;
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

    if (!tab || !tab.url || !pageSupport) {
      clearStateRefreshTimer();
      sidePanelState.videoId = null;
      sidePanelState.title = '';
      sidePanelState.channel = '';
      sidePanelState.captionLabel = '';
      sidePanelState.selectedTrackIndex = -1;
      sidePanelState.selectionMode = 'auto';
      sidePanelState.languageNotice = '';
      sidePanelState.rows = [];
      renderLanguageControl([], -1, 'auto', '');
      showState('not-youtube');
      return;
    }

    currentTabId = tab.id;
    const urlContext = pageSupport.getPageContextFromUrl(tab.url);

    if (urlContext.mode === 'CHANNEL_MODE') {
      const pageContext = await getPageContextFromTab();

      if (loadId !== activeLoadId) return;

      if (!pageContext || pageContext.mode !== 'CHANNEL_MODE') {
        clearStateRefreshTimer();
        elements.errorMessage.textContent = 'Could not connect to this YouTube channel page. Please refresh.';
        showState('error');
        return;
      }

      const scanState = await getChannelScanStateFromTab();

      if (loadId !== activeLoadId) return;

      renderLanguageControl([], -1, 'auto', '');
      renderChannelMode(pageContext, scanState);
      showState('channel');
      return;
    }

    if (urlContext.mode !== 'VIDEO_MODE') {
      clearStateRefreshTimer();
      sidePanelState.videoId = null;
      sidePanelState.title = '';
      sidePanelState.channel = '';
      sidePanelState.captionLabel = '';
      sidePanelState.selectedTrackIndex = -1;
      sidePanelState.selectionMode = 'auto';
      sidePanelState.languageNotice = '';
      sidePanelState.rows = [];
      sidePanelState.mode = urlContext.mode;
      renderLanguageControl([], -1, 'auto', '');
      showState('not-youtube');
      return;
    }

    sidePanelState.mode = 'VIDEO_MODE';
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
    sidePanelState.selectedTrackIndex = Number.isInteger(state.selectedTrackIndex)
      ? state.selectedTrackIndex
      : -1;
    sidePanelState.selectionMode = state.selectionMode === 'preferred'
      ? 'preferred'
      : 'auto';
    sidePanelState.languageNotice = state.languageNotice || '';

    elements.title.textContent = sidePanelState.title;
    elements.channel.textContent = sidePanelState.channel;
    renderLanguageControl(
      state.tracks,
      sidePanelState.selectedTrackIndex,
      sidePanelState.selectionMode,
      sidePanelState.languageNotice
    );

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
      const selectedTrack = state.tracks && state.tracks[sidePanelState.selectedTrackIndex];
      const trackLabel = state.captionLabel || getTrackLabel(selectedTrack);
      sidePanelState.captionLabel = trackLabel;
      elements.status.textContent = 'Transcript: ' + trackLabel;
      const renderSignature = buildRenderSignature(sidePanelState.rows, elements.searchInput.value);

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
    lastRenderedSignature = buildRenderSignature(sidePanelState.rows, e.target.value);
  });

  elements.channelAvatar.addEventListener('load', showChannelAvatarImage);
  elements.channelAvatar.addEventListener('error', showChannelAvatarFallback);

  elements.languageTrigger.addEventListener('click', () => {
    if (isLanguageMenuOpen) {
      closeLanguageMenu({ restoreFocus: true });
      return;
    }

    openLanguageMenu();
  });

  elements.languageTrigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openLanguageMenu({ focus: 'first' });
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openLanguageMenu({ focus: 'last' });
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isLanguageMenuOpen) {
        closeLanguageMenu({ restoreFocus: true });
      } else {
        openLanguageMenu();
      }
    }
  });

  elements.languageMenu.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusLanguageOption((focusedLanguageOptionIndex + 1) % languageOptions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusLanguageOption(
        focusedLanguageOptionIndex <= 0
          ? languageOptions.length - 1
          : focusedLanguageOptionIndex - 1
      );
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusLanguageOption(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusLanguageOption(languageOptions.length - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeLanguageMenu({ restoreFocus: true });
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const focusedOption = languageOptions[focusedLanguageOptionIndex];

      if (focusedOption) {
        applyLanguageSelection(focusedOption.value);
      }
    }
  });

  document.addEventListener('click', (event) => {
    if (!isLanguageMenuOpen || !elements.languageControl.contains(event.target)) {
      if (isLanguageMenuOpen) {
        closeLanguageMenu();
      }
    }
  });

  elements.transcriptContainer.addEventListener('scroll', () => {
    if (sidePanelState.status !== 'loaded' || isProgrammaticScroll) return;
    setAutoScrollEnabled(false);
  });

  ['wheel', 'touchmove'].forEach(eventName => {
    elements.transcriptContainer.addEventListener(eventName, () => {
      isProgrammaticScroll = false;
    }, { passive: true });
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

  function exportTxtTranscript() {
    if (!sidePanelState.rows.length) return;

    const title = elements.title.textContent || 'transcript';
    const exportHelpers = window.YTTranscriptExport;
    const text = exportHelpers.buildPlainTextTranscript(title, '', sidePanelState.rows);
    const filename = exportHelpers.createSafeFileName(title, 'txt');

    exportHelpers.downloadTextFile(filename, text, document);
  }

  elements.btnDownloadTxt.addEventListener('click', () => {
    exportTxtTranscript();
  });

  elements.btnScanVisibleVideos.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'SCAN_CHANNEL_TRANSCRIPTS' });
    loadTranscriptState();
  });

  elements.btnPauseChannelScan.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'PAUSE_CHANNEL_SCAN' });
    loadTranscriptState();
  });

  elements.btnResumeChannelScan.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'RESUME_CHANNEL_SCAN' });
    loadTranscriptState();
  });

  elements.btnCancelChannelScan.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'CANCEL_CHANNEL_SCAN' });
    loadTranscriptState();
  });

  async function downloadChannelZip() {
    const exportData = await sendMessageToTab({ type: 'GET_CHANNEL_EXPORT_DATA' });
    const exportHelpers = window.YTTranscriptExport;
    const zipCtor = window.JSZip;

    if (
      !exportData ||
      !Array.isArray(exportData.successes) ||
      exportData.successes.length === 0 ||
      typeof zipCtor !== 'function'
    ) {
      return;
    }

    const downloadedAt = new Date().toISOString();
    const zip = new zipCtor();
    const successfulVideos = exportData.successes.map((video, index) => {
      const filename = exportHelpers.createChannelTranscriptFileName(index + 1, video.title, video.videoId);

      return {
        ...video,
        index: index + 1,
        filename
      };
    });

    successfulVideos.forEach((video) => {
      zip.file(
        video.filename,
        exportHelpers.buildChannelTranscriptFile(video, exportData.channelName, downloadedAt)
      );
    });
    zip.file('manifest.json', exportHelpers.buildChannelManifest({
      channelName: exportData.channelName,
      channelUrl: exportData.channelUrl,
      exportedAt: downloadedAt,
      totalDiscoveredVideos: exportData.discoveredCount,
      scanStatus: exportData.status,
      preferredTranscriptLanguage: exportData.preferredTranscriptLanguage,
      successes: successfulVideos,
      failures: exportData.failures
    }));
    zip.file('failed-videos.txt', exportHelpers.buildFailedVideosReport(exportData.failures));

    const blob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE'
    });

    exportHelpers.downloadBlobFile(
      exportHelpers.createChannelZipFileName(exportData.channelName),
      blob,
      document
    );
  }

  elements.btnDownloadChannelZip.addEventListener('click', () => {
    downloadChannelZip();
  });

  elements.btnJumpCurrent.addEventListener('click', () => {
    resumeAutoScroll();
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

    if (
      message &&
      (
        message.type === 'YT_TRANSCRIPT_NAVIGATED' ||
        message.type === 'YT_TRANSCRIPT_STATE_CHANGED' ||
        message.type === 'YT_CHANNEL_SCAN_STATE_CHANGED'
      )
    ) {
      loadTranscriptState({ expectedVideoId: sidePanelState.videoId });
    }
  });

  loadTranscriptState();
});
