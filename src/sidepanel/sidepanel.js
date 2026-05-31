document.addEventListener('DOMContentLoaded', () => {
  const CONTENT_SCRIPT_FILES = [
    'src/utils/youtube.js',
    'src/utils/page-support.js',
    'src/utils/navigation.js',
    'src/utils/transcript.js',
    'src/utils/channel.js',
    'src/utils/playlist.js',
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
    btnExportToggle: document.getElementById('btn-export-toggle'),
    exportMenuWrap: document.querySelector('.export-menu-wrap'),
    exportMenu: document.getElementById('export-menu'),
    btnDownloadTxt: document.getElementById('btn-download-txt'),
    btnDownloadMd: document.getElementById('btn-download-md'),
    btnDownloadJson: document.getElementById('btn-download-json'),
    transcriptShell: document.getElementById('transcript-shell'),
    transcriptContainer: document.getElementById('transcript-container'),
    btnJumpCurrent: document.getElementById('btn-jump-current'),
    footer: document.getElementById('panel-footer'),
    lineCount: document.getElementById('line-count'),
    followStatus: document.getElementById('follow-status'),
    footerTime: document.getElementById('footer-time'),
    stateNotYoutube: document.getElementById('state-not-youtube'),
    stateChannelMode: document.getElementById('state-channel-mode'),
    statePlaylistMode: document.getElementById('state-playlist-mode'),
    stateLoading: document.getElementById('state-loading'),
    stateNoTranscript: document.getElementById('state-no-transcript'),
    noTranscriptMessage: document.getElementById('no-transcript-message'),
    stateError: document.getElementById('state-error'),
    errorMessage: document.getElementById('error-message'),
    btnRetry: document.getElementById('btn-retry'),
    channelAvatarFallback: document.getElementById('channel-avatar-fallback'),
    channelAvatar: document.getElementById('channel-avatar'),
    channelModeLabel: document.getElementById('channel-mode-label'),
    channelTabBadge: document.getElementById('channel-tab-badge'),
    channelName: document.getElementById('channel-name'),
    channelStatusPill: document.getElementById('channel-status-pill'),
    channelVisibleKind: document.getElementById('channel-visible-kind'),
    channelVisibleCount: document.getElementById('channel-visible-count'),
    channelHelperText: document.getElementById('channel-helper-text'),
    channelNoteText: document.getElementById('channel-note-text'),
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
    btnDownloadChannelZip: document.getElementById('btn-download-channel-zip'),
    playlistTitle: document.getElementById('playlist-title'),
    playlistStatusPill: document.getElementById('playlist-status-pill'),
    playlistVisibleCount: document.getElementById('playlist-visible-count'),
    playlistHelperText: document.getElementById('playlist-helper-text'),
    playlistProgress: document.getElementById('playlist-progress'),
    playlistProgressFill: document.getElementById('playlist-progress-fill'),
    playlistProgressLabel: document.getElementById('playlist-progress-label'),
    playlistCurrentVideo: document.getElementById('playlist-current-video'),
    playlistSuccessCount: document.getElementById('playlist-success-count'),
    playlistFailureCount: document.getElementById('playlist-failure-count'),
    playlistSummary: document.getElementById('playlist-summary'),
    playlistCurrentVideoSection: document.getElementById('playlist-current-video-section'),
    btnDownloadPlaylistCurrentVideo: document.getElementById('btn-download-playlist-current-video'),
    btnScanPlaylist: document.getElementById('btn-scan-playlist'),
    btnCancelPlaylistOperation: document.getElementById('btn-cancel-playlist-operation'),
    btnDownloadPlaylistZip: document.getElementById('btn-download-playlist-zip')
  };

  let currentTabId = null;
  let activeLoadContext = { tabId: null, videoId: null };
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
  let isExportMenuOpen = false;
  let focusedLanguageOptionIndex = -1;
  const sidePanelState = {
    videoId: null,
    videoUrl: '',
    title: '',
    channel: '',
    captionLabel: '',
    languageCode: '',
    source: '',
    selectedTrackIndex: -1,
    selectionMode: 'auto',
    languageNotice: '',
    rows: [],
    status: 'not-youtube',
    mode: 'UNSUPPORTED_MODE',
    channelContext: null,
    channelScanState: null,
    playlistContext: null,
    playlistScanState: null
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
    elements.statePlaylistMode.hidden = stateName !== 'playlist';
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
    
    const exportDisabled = stateName !== 'loaded';
    elements.btnCopy.disabled = exportDisabled;
    elements.btnExportToggle.disabled = exportDisabled;
    elements.btnDownloadTxt.disabled = exportDisabled;
    elements.btnDownloadMd.disabled = exportDisabled;
    elements.btnDownloadJson.disabled = exportDisabled;

    if (exportDisabled) {
      closeExportMenu();
    }

    if (elements.panelStatus) {
      const labelByState = {
        loaded: 'Ready',
        loading: 'Loading',
        'no-transcript': 'No transcript',
        error: 'Error',
        'not-youtube': 'Waiting',
        channel: 'Channel',
        playlist: 'Playlist'
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

  function resetVideoReaderState(videoId) {
    sidePanelState.videoId = videoId || null;
    sidePanelState.videoUrl = '';
    sidePanelState.title = '';
    sidePanelState.channel = '';
    sidePanelState.captionLabel = '';
    sidePanelState.languageCode = '';
    sidePanelState.source = '';
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
  }

  function renderVideoLoading(videoId) {
    clearStateRefreshTimer();
    resetVideoReaderState(videoId);
    elements.title.textContent = 'Loading current video...';
    elements.status.textContent = 'Loading current video...';
    showState('loading');
  }

  function renderCurrentPageLoading() {
    clearStateRefreshTimer();
    resetVideoReaderState(null);
    elements.title.textContent = 'Loading current page...';
    elements.status.textContent = 'Loading current page...';
    showState('loading');
  }

  function renderNotYouTubeState() {
    clearStateRefreshTimer();
    resetVideoReaderState(null);
    showState('not-youtube');
  }

  function getExportMenuItems() {
    if (!elements.exportMenu) {
      return [];
    }

    return Array.from(elements.exportMenu.querySelectorAll('.export-menu-item:not(:disabled)'));
  }

  function focusExportMenuItem(index) {
    const menuItems = getExportMenuItems();

    if (menuItems.length === 0) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, menuItems.length - 1));
    menuItems[nextIndex].focus();
  }

  function closeExportMenu({ restoreFocus = false } = {}) {
    if (elements.exportMenu) {
      isExportMenuOpen = false;
      elements.exportMenu.classList.remove('is-open');
      elements.exportMenu.hidden = true;
    }

    if (elements.btnExportToggle) {
      elements.btnExportToggle.setAttribute('aria-expanded', 'false');

      if (restoreFocus) {
        elements.btnExportToggle.focus();
      }
    }
  }

  function openExportMenu({ focus = 'first' } = {}) {
    if (!elements.exportMenu || elements.btnExportToggle.disabled) {
      return;
    }

    isExportMenuOpen = true;
    elements.exportMenu.classList.add('is-open');
    elements.exportMenu.hidden = false;
    elements.btnExportToggle.setAttribute('aria-expanded', 'true');

    if (focus === 'last') {
      focusExportMenuItem(getExportMenuItems().length - 1);
    } else if (focus === 'first') {
      focusExportMenuItem(0);
    }
  }

  function toggleExportMenu() {
    if (!elements.exportMenu || elements.btnExportToggle.disabled) {
      return;
    }

    if (isExportMenuOpen) {
      closeExportMenu();
    } else {
      openExportMenu({ focus: 'none' });
    }
  }

  function scheduleStateRefresh(loadId, loadContext) {
    clearStateRefreshTimer();

    if (Date.now() - loadStartedAt >= MAX_LOADING_MS) {
      elements.errorMessage.textContent = 'Transcript loading timed out. Try reloading the YouTube tab.';
      showState('error');
      return;
    }

    stateRefreshTimer = setTimeout(() => {
      loadTranscriptState({
        loadId,
        preserveState: true,
        expectedTabId: loadContext && loadContext.tabId,
        expectedVideoId: loadContext && loadContext.videoId
      });
    }, STATE_REFRESH_INTERVAL_MS);
  }

  function scheduleChannelStateRefresh(loadId, loadContext) {
    clearStateRefreshTimer();

    stateRefreshTimer = setTimeout(() => {
      loadTranscriptState({
        loadId,
        preserveState: true,
        expectedTabId: loadContext && loadContext.tabId,
        expectedVideoId: loadContext && loadContext.videoId
      });
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

  async function getTabById(tabId) {
    return new Promise((resolve) => {
      if (!tabId || !chrome.tabs.get) {
        resolve(null);
        return;
      }

      chrome.tabs.get(tabId, (tab) => {
        if (chrome.runtime.lastError) {
          resolve(null);
          return;
        }

        resolve(tab || null);
      });
    });
  }

  function getVideoIdFromTab(tab) {
    const youtube = window.YTTranscriptYouTube;

    if (!tab || !tab.url || !youtube || typeof youtube.getVideoIdFromUrl !== 'function') {
      return null;
    }

    return youtube.getVideoIdFromUrl(tab.url);
  }

  function isCurrentLoadContext(loadContext) {
    if (!loadContext || loadContext.tabId !== currentTabId) {
      return false;
    }

    if (!loadContext.videoId) {
      return true;
    }

    return sidePanelState.videoId === loadContext.videoId;
  }

  function isMessageFromCurrentTab(sender) {
    if (!sender || !sender.tab || typeof sender.tab.id !== 'number') {
      return true;
    }

    if (currentTabId === null) {
      return true;
    }

    if (sender.tab.id !== currentTabId) {
      return false;
    }

    return true;
  }

  async function syncToActiveTab(tabId) {
    const tab = tabId ? await getTabById(tabId) : await getActiveTab();
    const pageSupport = window.YTTranscriptPageSupport;
    const tabVideoId = getVideoIdFromTab(tab);
    const urlContext = tab && tab.url && pageSupport
      ? pageSupport.getPageContextFromUrl(tab.url)
      : null;

    currentTabId = tab && tab.id ? tab.id : null;
    activeLoadId += 1;
    activeLoadContext = {
      tabId: currentTabId,
      videoId: tabVideoId || null
    };

    if (!tab || !tab.url || !urlContext || urlContext.mode === 'UNSUPPORTED_MODE') {
      renderNotYouTubeState();
      loadTranscriptState({ expectedTabId: currentTabId });
      return;
    }

    if (tabVideoId) {
      renderVideoLoading(tabVideoId);
      loadTranscriptState({ expectedTabId: tab.id, expectedVideoId: tabVideoId });
      return;
    }

    renderCurrentPageLoading();
    loadTranscriptState({ expectedTabId: tab.id });
  }

  function normalizeContextUrl(urlValue) {
    try {
      const url = new URL(urlValue);
      return `${url.origin}${url.pathname}${url.search}`;
    } catch (error) {
      return '';
    }
  }

  function getChannelHandleFromUrl(urlValue) {
    const pageSupport = window.YTTranscriptPageSupport;

    if (pageSupport && typeof pageSupport.getChannelHandleFromUrl === 'function') {
      return pageSupport.getChannelHandleFromUrl(urlValue);
    }

    try {
      const pathParts = new URL(urlValue).pathname.split('/').filter(Boolean);

      if (pathParts[0] && pathParts[0][0] === '@') {
        return decodeURIComponent(pathParts[0].slice(1)).toLowerCase();
      }
    } catch (error) {}

    return '';
  }

  function buildLoadingChannelContext(tab, urlContext) {
    return {
      mode: 'CHANNEL_MODE',
      isYouTubePage: true,
      currentUrl: tab && tab.url ? tab.url : '',
      channelHandleFromUrl:
        (urlContext && urlContext.channelHandle) ||
        (tab && tab.url ? getChannelHandleFromUrl(tab.url) : ''),
      channelTab: (urlContext && urlContext.channelTab) || 'videos',
      channelName: '',
      channelNameFromDom: '',
      channelAvatarUrl: '',
      channelAvatarFromDom: '',
      channelLoadStatus: 'settling',
      channelLoadMessage: 'Channel detected - waiting for videos to load...',
      visibleVideoCount: 0
    };
  }

  function isCurrentChannelContext(pageContext, tab) {
    const activeUrl = tab && tab.url ? tab.url : '';
    const activeHandle = getChannelHandleFromUrl(activeUrl);
    const responseUrl = pageContext && pageContext.currentUrl ? pageContext.currentUrl : '';
    const responseHandle = pageContext && pageContext.channelHandleFromUrl
      ? pageContext.channelHandleFromUrl
      : getChannelHandleFromUrl(responseUrl);

    if (!pageContext || pageContext.mode !== 'CHANNEL_MODE' || !activeUrl) {
      return false;
    }

    if (tab.id !== currentTabId) {
      return false;
    }

    if (responseUrl && normalizeContextUrl(responseUrl) !== normalizeContextUrl(activeUrl)) {
      return false;
    }

    if (activeHandle && responseHandle && activeHandle !== responseHandle) {
      return false;
    }

    return true;
  }

  function isCurrentChannelScanState(scanState, tab) {
    if (!scanState || !scanState.channelUrl) {
      return true;
    }

    return normalizeContextUrl(scanState.channelUrl) === normalizeContextUrl(tab && tab.url);
  }

  function sendMessageToTab(message, tabId = currentTabId) {
    return new Promise((resolve) => {
      if (!tabId) return resolve(null);
      chrome.tabs.sendMessage(tabId, message, (response) => {
        if (chrome.runtime.lastError) {
          resolve(null);
        } else {
          resolve(response);
        }
      });
    });
  }

  function handleStaleTranscriptState(loadId, loadContext) {
    elements.status.textContent = 'Waiting for the current YouTube video...';
    elements.errorMessage.textContent = 'The YouTube page changed before the transcript finished loading.';
    showState('loading');
    scheduleStateRefresh(loadId, loadContext);
  }

  function injectContentAssets(tabId = currentTabId) {
    if (!tabId || !chrome.scripting) {
      return Promise.resolve(false);
    }

    const cssPromises = CONTENT_CSS_FILES.map(file => {
      return chrome.scripting.insertCSS({
        target: { tabId },
        files: [file]
      }).catch(() => null);
    });

    return Promise.all(cssPromises)
      .then(() => chrome.scripting.executeScript({
        target: { tabId },
        files: CONTENT_SCRIPT_FILES
      }))
      .then(() => true)
      .catch(() => false);
  }

  async function getTranscriptStateFromTab(tabId = currentTabId) {
    let state = await sendMessageToTab({ type: 'GET_TRANSCRIPT_STATE' }, tabId);

    if (!state) {
      const injected = await injectContentAssets(tabId);

      if (injected) {
        state = await sendMessageToTab({ type: 'GET_TRANSCRIPT_STATE' }, tabId);
      }
    }

    return state;
  }

  async function getPageContextFromTab(tabId = currentTabId) {
    let state = await sendMessageToTab({ type: 'GET_PAGE_CONTEXT' }, tabId);

    if (!state) {
      const injected = await injectContentAssets(tabId);

      if (injected) {
        state = await sendMessageToTab({ type: 'GET_PAGE_CONTEXT' }, tabId);
      }
    }

    return state;
  }

  async function getChannelScanStateFromTab(tabId = currentTabId) {
    return sendMessageToTab({ type: 'GET_CHANNEL_SCAN_STATE' }, tabId);
  }

  async function getPlaylistScanStateFromTab(tabId = currentTabId) {
    return sendMessageToTab({ type: 'GET_PLAYLIST_SCAN_STATE' }, tabId);
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
      currentVideo: null,
      canCancel: false
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
    const availableCount = successCount;
    const transcriptLabel = availableCount === 1 ? 'transcript' : 'transcripts';
    const isScanning = safeScanState.status === 'scanning';
    const isPausing = safeScanState.status === 'pausing';
    const isPaused = safeScanState.status === 'paused';
    const isReady = safeScanState.status === 'idle';
    const hasAnyResults = successCount > 0 || failureCount > 0;
    const isCancelled = safeScanState.status === 'cancelled';
    const isCompleted = safeScanState.status === 'completed';
    const isSettling = safePageContext.channelLoadStatus === 'settling';
    const isTimedOut = safePageContext.channelLoadStatus === 'timeout';
    const showProgress = totalCount > 0 || isScanning || isPausing || isPaused || isCancelled || isCompleted || hasAnyResults;
    const isPartialExport = isPaused || isCancelled;
    const isShortsTab = safePageContext.channelTab === 'shorts';
    const canDownloadTranscripts = availableCount > 0;
    const canScanNewlyLoaded = isCompleted && safePageContext.visibleVideoCount > (safeScanState.discoveredCount || 0);
    const shouldShowScanAction = isSettling || isReady || canScanNewlyLoaded || isCancelled;
    const shouldShowDownloadAction = !isSettling && (isScanning || isPausing || isPaused || isCancelled || isCompleted);
    const itemLabel = isShortsTab ? 'Shorts' : 'videos';
    const channelLoadMessage = safePageContext.channelLoadMessage || (
      isSettling
        ? 'Channel detected - waiting for videos to load...'
        : isTimedOut
          ? 'Only some videos may be loaded. Scroll down or refresh if needed.'
          : `Visible videos found: ${safePageContext.visibleVideoCount || 0}`
    );
    const canUseVisibleVideos = !isSettling && safePageContext.visibleVideoCount > 0;
    const canPauseChannelScan = !isSettling && isScanning;
    const canResumeChannelScan = !isSettling && isPaused;
    const canCancelChannelScan = !isSettling && (isScanning || isPausing || isPaused);
    const scanStatusLabel = isScanning
      ? 'Scanning'
      : isPausing
        ? 'Pausing'
        : isPaused
          ? 'Paused'
          : isCompleted
            ? 'Complete'
            : isCancelled
              ? 'Cancelled'
              : 'Ready';
    const channelProgressLabel = isSettling
      ? 'Channel detected - waiting for videos to load...'
      : isScanning
        ? `Scanning — ${completedCount} / ${totalCount}`
        : isPausing
          ? `Pausing — ${completedCount} / ${totalCount} scanned`
          : isPaused
            ? `Paused — ${completedCount} / ${totalCount} scanned`
            : isCompleted
              ? `Done — ${availableCount} ${transcriptLabel} ready`
              : isCancelled
                ? `Stopped — ${completedCount} / ${totalCount} scanned`
                : 'Ready to scan';

    sidePanelState.mode = 'CHANNEL_MODE';
    sidePanelState.channelContext = safePageContext;
    sidePanelState.channelScanState = safeScanState;

    elements.channelTabBadge.textContent = isShortsTab ? 'Shorts' : 'Videos';
    elements.channelName.textContent = safePageContext.channelName || (isSettling ? 'Loading channel...' : 'YouTube channel');
    elements.channelVisibleKind.textContent = itemLabel;
    elements.channelVisibleCount.textContent = isSettling
      ? '...'
      : String(safePageContext.visibleVideoCount || 0);
    elements.channelNoteText.innerHTML = isShortsTab
      ? 'Scanning visible Shorts only.<br>Scroll down to load more.'
      : 'Scanning visible videos only.<br>Scroll down to load more.';
    elements.channelStatusPill.textContent = isSettling
      ? 'Loading'
      : isTimedOut
        ? 'Partial'
        : scanStatusLabel;

    renderChannelAvatar(safePageContext.channelAvatarUrl);

    elements.channelProgress.hidden = !(showProgress || isSettling);
    elements.channelProgressFill.style.width = `${progressPercent}%`;
    elements.channelProgressLabel.textContent = channelProgressLabel;
    elements.channelCurrentVideo.textContent =
      safeScanState.currentVideo && safeScanState.currentVideo.title
        ? safeScanState.currentVideo.title
        : '';
    elements.channelSuccessCount.textContent = `${successCount} available`;
    elements.channelFailureCount.textContent = `${failureCount} unavailable`;

    elements.btnScanVisibleVideos.hidden = !shouldShowScanAction;
    elements.btnScanVisibleVideos.disabled = !canUseVisibleVideos;
    elements.btnScanVisibleVideos.textContent = isCompleted
      ? 'Scan newly loaded'
      : isShortsTab
        ? 'Scan visible Shorts'
        : 'Scan visible videos';
    elements.btnScanVisibleVideos.title = isCompleted
      ? isShortsTab
        ? 'Scan newly loaded Shorts'
        : 'Scan newly loaded channel videos'
      : isShortsTab
        ? 'Scan currently visible Shorts'
        : 'Scan currently visible channel videos';
    elements.btnPauseChannelScan.hidden = !canPauseChannelScan;
    elements.btnPauseChannelScan.disabled = !canPauseChannelScan;
    elements.btnResumeChannelScan.hidden = !canResumeChannelScan;
    elements.btnResumeChannelScan.disabled = !canResumeChannelScan;
    elements.btnCancelChannelScan.hidden = !canCancelChannelScan;
    elements.btnCancelChannelScan.disabled = !canCancelChannelScan;
    elements.btnDownloadChannelZip.hidden = !canDownloadTranscripts || !shouldShowDownloadAction;
    elements.btnDownloadChannelZip.disabled = !canDownloadTranscripts;
    elements.btnDownloadChannelZip.textContent = isPartialExport
      ? 'Download partial ZIP'
      : `Download ${availableCount} ${isShortsTab ? 'Shorts ' : ''}${transcriptLabel}`;

    if (isSettling) {
      elements.channelHelperText.textContent = channelLoadMessage;
      elements.channelSummary.hidden = true;
      elements.channelSummary.textContent = '';
      return;
    }

    if (isScanning || isPausing) {
      elements.channelHelperText.textContent = isShortsTab
        ? 'Some Shorts may not have transcripts.'
        : 'Some videos may not have transcripts.';
      elements.channelSummary.hidden = true;
      elements.channelSummary.textContent = '';
      return;
    }

    if (isPaused || isCancelled) {
      elements.channelHelperText.textContent = "Download what's ready so far.";
    } else if (isTimedOut) {
      elements.channelHelperText.textContent = channelLoadMessage;
    } else {
      elements.channelHelperText.textContent = safePageContext.visibleVideoCount > 0
        ? 'Transcripts will be downloaded only when available.'
        : isShortsTab
          ? 'Scroll the Shorts tab to load more Shorts, then scan again.'
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

  function renderPlaylistMode(pageContext, scanState) {
    const safePageContext = pageContext || {};
    const safeScanState = scanState || {
      status: 'idle',
      discoveredCount: safePageContext.visibleVideoCount || 0,
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
    const isCancelled = safeScanState.status === 'cancelled';
    const isCompleted = safeScanState.status === 'completed';
    const hasCurrentVideo = Boolean(safePageContext.videoId);
    const hasAnyResults = successCount > 0 || failureCount > 0;
    const canDownloadTranscripts = successCount > 0;
    const canCancelPlaylist = Boolean(safeScanState.canCancel) || isScanning;
    const showProgress = totalCount > 0 || isScanning || isCompleted || hasAnyResults;
    const playlistTitle = safePageContext.playlistTitle || 'YouTube playlist';
    const scanStatusLabel = isScanning
      ? 'Scanning'
      : isCancelled
        ? 'Canceled'
      : isCompleted
        ? 'Complete'
        : 'Ready';
    const progressLabel = isScanning
      ? `Downloading ${completedCount} / ${totalCount}`
      : isCancelled
        ? 'Playlist download canceled'
      : isCompleted
        ? `Skipped ${failureCount} unavailable transcripts`
        : totalCount > 0
          ? `Found ${totalCount} videos`
          : 'Scanning playlist...';

    sidePanelState.mode = 'PLAYLIST_MODE';
    sidePanelState.playlistContext = safePageContext;
    sidePanelState.playlistScanState = safeScanState;

    elements.playlistCurrentVideoSection.hidden = !hasCurrentVideo;
    elements.btnDownloadPlaylistCurrentVideo.disabled = !hasCurrentVideo;
    elements.btnDownloadPlaylistCurrentVideo.textContent = 'Download current transcript';
    elements.playlistTitle.textContent = playlistTitle;
    elements.playlistVisibleCount.textContent = String(totalCount || 0);
    elements.playlistStatusPill.textContent = scanStatusLabel;
    elements.playlistProgress.hidden = !showProgress;
    elements.playlistProgressFill.style.width = `${progressPercent}%`;
    elements.playlistProgressLabel.textContent = progressLabel;
    elements.playlistCurrentVideo.textContent =
      safeScanState.currentVideo && safeScanState.currentVideo.title
        ? safeScanState.currentVideo.title
        : '';
    elements.playlistSuccessCount.textContent = `${successCount} downloaded`;
    elements.playlistFailureCount.textContent = `${failureCount} skipped`;
    elements.btnScanPlaylist.disabled = isScanning;
    elements.btnScanPlaylist.textContent = isCompleted ? 'Scan playlist again' : 'Scan playlist';
    elements.btnDownloadPlaylistZip.hidden = !canDownloadTranscripts;
    elements.btnDownloadPlaylistZip.disabled = isScanning || !canDownloadTranscripts;
    elements.btnDownloadPlaylistZip.textContent = 'Download playlist ZIP';
    elements.btnCancelPlaylistOperation.hidden = !canCancelPlaylist;
    elements.btnCancelPlaylistOperation.disabled = !canCancelPlaylist;

    if (isScanning) {
      elements.playlistHelperText.textContent = `Downloading ${completedCount} / ${totalCount}`;
      elements.playlistSummary.hidden = true;
      elements.playlistSummary.textContent = '';
      return;
    }

    if (isCancelled) {
      elements.playlistHelperText.textContent = 'Playlist download canceled';
      elements.playlistSummary.hidden = !hasAnyResults;
      elements.playlistSummary.textContent = hasAnyResults
        ? `Playlist download canceled. ${successCount} downloaded, ${failureCount} skipped.`
        : '';
      return;
    }

    elements.playlistHelperText.textContent = totalCount > 0
      ? `Found ${totalCount} videos. Missing transcripts will be listed in the ZIP report.`
      : 'Scan the playlist to download available transcripts.';

    if (!hasAnyResults) {
      elements.playlistSummary.hidden = true;
      elements.playlistSummary.textContent = '';
      return;
    }

    elements.playlistSummary.hidden = false;
    elements.playlistSummary.textContent =
      `Playlist scan complete. ${successCount} downloaded, ${failureCount} skipped.`;
  }

  async function loadTranscriptState(options = {}) {
    const loadId = options.loadId || activeLoadId + 1;
    const expectedTabId = options.expectedTabId || currentTabId;
    const expectedVideoId = options.expectedVideoId || sidePanelState.videoId;
    let loadContext = {
      tabId: expectedTabId,
      videoId: expectedVideoId || null
    };

    if (!options.loadId) {
      activeLoadId = loadId;
      activeLoadContext = loadContext;
      loadStartedAt = Date.now();
      lastRenderedSignature = '';
    }

    if (!options.preserveState) {
      showState('loading');
    }

    const tab = await getActiveTab();
    const pageSupport = window.YTTranscriptPageSupport;

    if (loadId !== activeLoadId) return;

    if (expectedTabId && (!tab || tab.id !== expectedTabId)) {
      return;
    }

    if (!tab || !tab.url || !pageSupport) {
      renderNotYouTubeState();
      return;
    }

    currentTabId = tab.id;
    const urlContext = pageSupport.getPageContextFromUrl(tab.url);
    const tabVideoId = getVideoIdFromTab(tab);
    loadContext = {
      tabId: tab.id,
      videoId: urlContext.mode === 'VIDEO_MODE' ? tabVideoId : null
    };

    if (!options.loadId) {
      activeLoadContext = loadContext;
    }

    if (urlContext.mode === 'CHANNEL_MODE') {
      const pageContext = await getPageContextFromTab(tab.id);

      if (loadId !== activeLoadId || !isCurrentLoadContext(loadContext)) return;

      if (!pageContext || pageContext.mode !== 'CHANNEL_MODE') {
        clearStateRefreshTimer();
        elements.errorMessage.textContent = 'Could not connect to this YouTube channel page. Please refresh.';
        showState('error');
        return;
      }

      if (!isCurrentChannelContext(pageContext, tab)) {
        renderLanguageControl([], -1, 'auto', '');
        renderChannelMode(buildLoadingChannelContext(tab, urlContext), null);
        showState('channel');
        scheduleChannelStateRefresh(loadId, loadContext);
        return;
      }

      const scanState = await getChannelScanStateFromTab(tab.id);

      if (loadId !== activeLoadId || !isCurrentLoadContext(loadContext)) return;

      renderLanguageControl([], -1, 'auto', '');
      renderChannelMode(pageContext, isCurrentChannelScanState(scanState, tab) ? scanState : null);
      showState('channel');

      if (pageContext.channelLoadStatus === 'settling') {
        scheduleChannelStateRefresh(loadId, loadContext);
      } else {
        clearStateRefreshTimer();
      }

      return;
    }

    if (urlContext.mode === 'PLAYLIST_MODE') {
      const pageContext = await getPageContextFromTab(tab.id);

      if (loadId !== activeLoadId || !isCurrentLoadContext(loadContext)) return;

      if (!pageContext || pageContext.mode !== 'PLAYLIST_MODE') {
        clearStateRefreshTimer();
        elements.errorMessage.textContent = 'Could not connect to this YouTube playlist page. Please refresh.';
        showState('error');
        return;
      }

      const scanState = await getPlaylistScanStateFromTab(tab.id);

      if (loadId !== activeLoadId || !isCurrentLoadContext(loadContext)) return;

      renderLanguageControl([], -1, 'auto', '');
      renderPlaylistMode(pageContext, scanState);
      showState('playlist');

      if (scanState && scanState.status === 'scanning') {
        scheduleChannelStateRefresh(loadId, loadContext);
      } else {
        clearStateRefreshTimer();
      }

      return;
    }

    if (urlContext.mode !== 'VIDEO_MODE') {
      resetVideoReaderState(null);
      sidePanelState.mode = urlContext.mode;
      showState('not-youtube');
      return;
    }

    sidePanelState.mode = 'VIDEO_MODE';

    if (!sidePanelState.videoId || sidePanelState.videoId !== tabVideoId) {
      renderVideoLoading(tabVideoId);
    }

    const state = await getTranscriptStateFromTab(tab.id);

    if (loadId !== activeLoadId || !isCurrentLoadContext(loadContext)) return;
    
    if (!state) {
      // Content script might not be ready or injected
      clearStateRefreshTimer();
      elements.errorMessage.textContent = 'Could not connect to YouTube page. Please refresh.';
      showState('error');
      return;
    }

    if (state.videoId !== tabVideoId) {
      handleStaleTranscriptState(loadId, loadContext);
      return;
    }

    if (
      (expectedVideoId && state.videoId !== expectedVideoId) ||
      (sidePanelState.videoId && state.videoId !== sidePanelState.videoId)
    ) {
      handleStaleTranscriptState(loadId, loadContext);
      return;
    }

    if (!state.videoTitle && state.status === 'loading') {
      elements.status.textContent = 'Loading transcript...';
      showState('loading');
      scheduleStateRefresh(loadId, loadContext);
      return;
    }

    sidePanelState.videoId = state.videoId || tabVideoId;
    sidePanelState.videoUrl = state.videoUrl || (sidePanelState.videoId ? `https://www.youtube.com/watch?v=${sidePanelState.videoId}` : '');
    sidePanelState.title = state.videoTitle || 'Unknown video';
    sidePanelState.channel = state.channelName || '';
    sidePanelState.languageCode = state.languageCode || '';
    sidePanelState.source = state.source || '';
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
      elements.noTranscriptMessage.textContent = state.error || 'This video does not expose a transcript right now.';
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
      scheduleStateRefresh(loadId, loadContext);
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

  function exportTxtTranscriptFromState(state, fallbackTitle = 'transcript') {
    const safeState = state || {};
    const rows = Array.isArray(safeState.rows) ? safeState.rows : [];

    if (!rows.length) return false;

    const title = safeState.videoTitle || fallbackTitle || 'transcript';
    const exportHelpers = window.YTTranscriptExport;
    const text = exportHelpers.buildPlainTextTranscript(title, safeState.videoUrl || '', rows);
    const filename = exportHelpers.createSafeFileName(title, 'txt');

    exportHelpers.downloadTextFile(filename, text, document);
    return true;
  }

  function buildCurrentExportState() {
    return {
      videoTitle: sidePanelState.title || elements.title.textContent || 'transcript',
      videoId: sidePanelState.videoId || '',
      videoUrl: sidePanelState.videoUrl || (sidePanelState.videoId ? `https://www.youtube.com/watch?v=${sidePanelState.videoId}` : ''),
      channelName: sidePanelState.channel || '',
      captionLabel: sidePanelState.captionLabel || '',
      languageCode: sidePanelState.languageCode || '',
      source: sidePanelState.source || '',
      rows: sidePanelState.rows
    };
  }

  function exportTxtTranscript() {
    closeExportMenu();
    exportTxtTranscriptFromState(buildCurrentExportState());
  }

  function exportMarkdownTranscript() {
    const safeState = buildCurrentExportState();
    const rows = Array.isArray(safeState.rows) ? safeState.rows : [];

    closeExportMenu();
    if (!rows.length) return;

    const title = safeState.videoTitle || 'transcript';
    const exportHelpers = window.YTTranscriptExport;
    const markdown = exportHelpers.buildMarkdownTranscript(title, safeState.videoUrl || '', rows);

    exportHelpers.downloadTextFile(
      exportHelpers.createSafeFileName(title, 'md'),
      markdown,
      document
    );
  }

  function exportJsonTranscript() {
    const safeState = buildCurrentExportState();
    const rows = Array.isArray(safeState.rows) ? safeState.rows : [];

    closeExportMenu();
    if (!rows.length) return;

    const title = safeState.videoTitle || 'transcript';
    const exportHelpers = window.YTTranscriptExport;
    const json = exportHelpers.buildJsonTranscriptExport({
      title,
      videoId: safeState.videoId || '',
      url: safeState.videoUrl || '',
      channel: safeState.channelName || '',
      languageLabel: safeState.captionLabel || '',
      languageCode: safeState.languageCode || '',
      source: safeState.source || '',
      exportedAt: new Date().toISOString(),
      rows
    });

    exportHelpers.downloadTextFile(
      exportHelpers.createSafeFileName(title, 'json'),
      json,
      document,
      'application/json;charset=utf-8'
    );
  }

  elements.btnExportToggle.addEventListener('click', toggleExportMenu);

  elements.btnExportToggle.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openExportMenu({ focus: 'first' });
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      openExportMenu({ focus: 'last' });
    } else if (event.key === 'Escape' && isExportMenuOpen) {
      event.preventDefault();
      closeExportMenu({ restoreFocus: true });
    }
  });

  elements.exportMenu.addEventListener('keydown', (event) => {
    const menuItems = getExportMenuItems();
    const currentIndex = menuItems.indexOf(document.activeElement);

    if (menuItems.length === 0) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      focusExportMenuItem(currentIndex >= 0 ? (currentIndex + 1) % menuItems.length : 0);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      focusExportMenuItem(currentIndex <= 0 ? menuItems.length - 1 : currentIndex - 1);
    } else if (event.key === 'Home') {
      event.preventDefault();
      focusExportMenuItem(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      focusExportMenuItem(menuItems.length - 1);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeExportMenu({ restoreFocus: true });
    }
  });

  elements.exportMenuWrap.addEventListener('focusout', (event) => {
    if (
      isExportMenuOpen &&
      elements.exportMenuWrap &&
      !elements.exportMenuWrap.contains(event.relatedTarget)
    ) {
      closeExportMenu();
    }
  });

  elements.btnDownloadTxt.addEventListener('click', () => {
    exportTxtTranscript();
  });

  elements.btnDownloadMd.addEventListener('click', () => {
    exportMarkdownTranscript();
  });

  elements.btnDownloadJson.addEventListener('click', () => {
    exportJsonTranscript();
  });

  document.addEventListener('click', (event) => {
    if (
      isExportMenuOpen &&
      elements.exportMenuWrap &&
      !elements.exportMenuWrap.contains(event.target)
    ) {
      closeExportMenu();
    }
  });

  async function downloadCurrentPlaylistVideoTranscript() {
    const originalText = elements.btnDownloadPlaylistCurrentVideo.textContent;

    elements.btnDownloadPlaylistCurrentVideo.disabled = true;
    elements.btnDownloadPlaylistCurrentVideo.textContent = 'Preparing...';

    try {
      const state = await getTranscriptStateFromTab();

      if (state && state.status === 'loaded' && exportTxtTranscriptFromState(state, state.videoTitle)) {
        elements.playlistHelperText.textContent = 'Current video transcript downloaded.';
        return;
      }

      if (state && state.status === 'unavailable') {
        elements.playlistHelperText.textContent = 'This video does not expose a transcript right now.';
        return;
      }

      elements.playlistHelperText.textContent = 'Current video transcript is still loading. Try again in a moment.';
    } finally {
      elements.btnDownloadPlaylistCurrentVideo.disabled = false;
      elements.btnDownloadPlaylistCurrentVideo.textContent = originalText;
    }
  }

  elements.btnDownloadPlaylistCurrentVideo.addEventListener('click', () => {
    downloadCurrentPlaylistVideoTranscript();
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
    zip.file('README.txt', exportHelpers.buildChannelReadme({
      channelName: exportData.channelName,
      channelUrl: exportData.channelUrl,
      exportedAt: downloadedAt,
      scanStatus: exportData.status,
      totalVisibleVideos: exportData.discoveredCount,
      successes: successfulVideos,
      failures: exportData.failures
    }));
    zip.file('failed-videos.txt', exportHelpers.buildFailedVideosReport(exportData.failures));

    const blob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE'
    });

    exportHelpers.downloadBlobFile(
      exportHelpers.createChannelZipFileName(exportData.channelName, exportData.channelTab),
      blob,
      document
    );
  }

  elements.btnDownloadChannelZip.addEventListener('click', () => {
    downloadChannelZip();
  });

  elements.btnScanPlaylist.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'SCAN_PLAYLIST_TRANSCRIPTS' });
    loadTranscriptState();
  });

  elements.btnCancelPlaylistOperation.addEventListener('click', async () => {
    await sendMessageToTab({ type: 'CANCEL_PLAYLIST_OPERATION' });
    loadTranscriptState();
  });

  async function downloadPlaylistZip() {
    if (sidePanelState.playlistScanState && sidePanelState.playlistScanState.status === 'scanning') {
      return;
    }

    const exportData = await sendMessageToTab({ type: 'GET_PLAYLIST_EXPORT_DATA' });
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
      const filename = exportHelpers.createPlaylistTranscriptFileName(index + 1, video.title);

      return {
        ...video,
        index: index + 1,
        filename
      };
    });

    successfulVideos.forEach((video) => {
      zip.file(
        video.filename,
        exportHelpers.buildChannelTranscriptFile(video, exportData.playlistTitle, downloadedAt)
      );
    });
    zip.file('manifest.json', exportHelpers.buildPlaylistManifest({
      playlistTitle: exportData.playlistTitle,
      playlistUrl: exportData.playlistUrl,
      exportedAt: downloadedAt,
      totalVideosFound: exportData.discoveredCount,
      successes: successfulVideos,
      failures: exportData.failures
    }));
    zip.file('failed-videos.txt', exportHelpers.buildFailedVideosReport(exportData.failures));

    const blob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE'
    });

    exportHelpers.downloadBlobFile(
      exportHelpers.createPlaylistZipFileName(exportData.playlistTitle),
      blob,
      document
    );
  }

  elements.btnDownloadPlaylistZip.addEventListener('click', () => {
    downloadPlaylistZip();
  });

  elements.btnJumpCurrent.addEventListener('click', () => {
    resumeAutoScroll();
  });

  elements.btnRetry.addEventListener('click', loadTranscriptState);

  // Listen for active tab and navigation updates so the panel never reuses another tab's video state.
  chrome.tabs.onActivated.addListener((activeInfo) => {
    syncToActiveTab(activeInfo.tabId);
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const isCurrentTab = tabId === currentTabId;
    const isActiveTab = Boolean(tab && tab.active);

    if ((isCurrentTab || isActiveTab) && (changeInfo.url || changeInfo.status === 'complete')) {
      syncToActiveTab(tabId);
    }
  });

  // Also listen for messages from content script about SPA navigation or state changes
  chrome.runtime.onMessage.addListener((message, sender) => {
    if (!isMessageFromCurrentTab(sender)) {
      return;
    }

    if (message && message.type === 'VIDEO_CHANGED') {
      const senderVideoId = sender && sender.tab ? getVideoIdFromTab(sender.tab) : null;

      if (senderVideoId && message.videoId && senderVideoId !== message.videoId) {
        return;
      }

      activeLoadId += 1;
      renderVideoLoading(message.videoId);
      loadTranscriptState({
        expectedTabId: sender && sender.tab ? sender.tab.id : currentTabId,
        expectedVideoId: message.videoId
      });
      return;
    }

    if (
      message &&
      (
        message.type === 'YT_TRANSCRIPT_NAVIGATED' ||
        message.type === 'YT_TRANSCRIPT_STATE_CHANGED' ||
        message.type === 'YT_CHANNEL_SCAN_STATE_CHANGED' ||
        message.type === 'YT_PLAYLIST_SCAN_STATE_CHANGED'
      )
    ) {
      loadTranscriptState({
        expectedTabId: sender && sender.tab ? sender.tab.id : currentTabId
      });
    }
  });

  syncToActiveTab();
});
