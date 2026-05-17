(function startYouTubeTranscriptExtension() {
  "use strict";

  if (window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__) {
    return;
  }

  window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__ = true;

  var PANEL_ID = "yt-transcript-helper-panel";
  var TOGGLE_ID = "yt-transcript-helper-toggle";
  var NAVIGATION_DEBOUNCE_MS = 150;
  var TRANSCRIPT_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
  var TRANSCRIPT_REQUEST_TIMEOUT_MS = 8000;
  var TRANSCRIPT_PIPELINE_TIMEOUT_MS = 15000;
  var AVAILABILITY_TIMEOUT_MS = 8000;
  var STATE_RESPONSE_CACHE_WAIT_MS = 150;
  var STATE_RESPONSE_METADATA_WAIT_MS = 650;
  var STORAGE_OPERATION_TIMEOUT_MS = 500;
  var NATIVE_TRANSCRIPT_FALLBACK_TIMEOUT_MS = 8000;
  var lastUrl = window.location.href;
  var currentVideoId = null;
  var renderTimerId = null;
  var availabilityRequestId = 0;
  var transcriptRequestId = 0;
  var currentCaptionTracks = [];
  var currentAvailableLanguages = [];
  var currentTranscriptRows = [];
  var currentSearchQuery = "";
  var currentTranscriptApiKey = null;
  var currentCaptionSource = "";
  var currentTranscriptStatus = "checking";
  var currentTranscriptError = "";
  var currentTranscriptTitle = "";
  var currentVideoMetadata = {
    videoId: null,
    title: "",
    channelName: "",
  };
  var currentCacheReadPromise = null;
  var currentPrefetchPromise = null;
  var currentMetadataPromise = null;
  var metadataRequestId = 0;
  var currentLoadStartedAt = 0;
  var hasRenderedFirstTranscriptForVideo = false;

  function getYouTubeHelpers() {
    return window.YTTranscriptYouTube;
  }

  function getNavigationHelpers() {
    return window.YTTranscriptNavigation;
  }

  function getSidebarHelpers() {
    return window.YTTranscriptSidebar;
  }

  function getTranscriptHelpers() {
    return window.YTTranscriptTranscript;
  }

  function getExportHelpers() {
    return window.YTTranscriptExport;
  }

  function notifyRuntime(message) {
    var runtimeMessage = window.YTTranscriptRuntimeMessage;

    if (
      runtimeMessage &&
      typeof runtimeMessage.sendRuntimeMessageSafely === "function"
    ) {
      runtimeMessage.sendRuntimeMessageSafely(window, message);
      return;
    }

    try {
      if (
        chrome &&
        chrome.runtime &&
        chrome.runtime.id &&
        typeof chrome.runtime.sendMessage === "function"
      ) {
        var sendResult = chrome.runtime.sendMessage(message);

        if (sendResult && typeof sendResult.catch === "function") {
          sendResult.catch(function ignoreRuntimeMessageError() {});
        }
      }
    } catch (error) {}
  }

  function createElement(tagName, className, textContent) {
    var element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  function removeFloatingPanelElements() {
    var existingPanel = document.getElementById(PANEL_ID);
    var existingToggle = document.getElementById(TOGGLE_ID);

    if (existingPanel) {
      existingPanel.remove();
    }

    if (existingToggle) {
      existingToggle.remove();
    }
  }

  function removePanel() {
    removeFloatingPanelElements();

    availabilityRequestId += 1;
    transcriptRequestId += 1;
    currentCaptionTracks = [];
    currentAvailableLanguages = [];
    currentTranscriptRows = [];
    currentSearchQuery = "";
    currentTranscriptApiKey = null;
    currentCaptionSource = "";
    currentVideoId = null;
    currentTranscriptStatus = "checking";
    currentTranscriptError = "";
    currentTranscriptTitle = "";
    currentVideoMetadata = {
      videoId: null,
      title: "",
      channelName: "",
    };
    currentCacheReadPromise = null;
    currentPrefetchPromise = null;
    currentMetadataPromise = null;
    metadataRequestId += 1;
    currentLoadStartedAt = 0;
    hasRenderedFirstTranscriptForVideo = false;
  }

  function showPanel() {
    var panel = document.getElementById(PANEL_ID);
    var toggle = document.getElementById(TOGGLE_ID);

    if (panel) {
      panel.classList.remove("yt-transcript-helper-panel-hidden");
    }

    if (toggle) {
      toggle.hidden = true;
    }
  }

  function hidePanel() {
    var panel = document.getElementById(PANEL_ID);
    var toggle = document.getElementById(TOGGLE_ID);

    if (panel) {
      panel.classList.add("yt-transcript-helper-panel-hidden");
    }

    if (toggle) {
      toggle.hidden = false;
    }
  }

  function updatePanelContent(videoId, shouldResetTranscriptState) {
    var videoIdElement = document.querySelector(
      "[data-yt-transcript-video-id]",
    );
    var titleElement = document.querySelector(
      "[data-yt-transcript-video-title]",
    );
    var statusLabelElement = document.querySelector(
      "[data-yt-transcript-status-label]",
    );
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var resetTranscriptState = shouldResetTranscriptState !== false;
    var helpers = getYouTubeHelpers();
    var sidebar = getSidebarHelpers();
    var videoTitle = helpers ? helpers.getCurrentVideoTitle(document) : "";
    var shell =
      sidebar && typeof sidebar.createSidebarShellState === "function"
        ? sidebar.createSidebarShellState(videoId, videoTitle)
        : {
            videoId: videoId,
            videoTitle: videoTitle || "Current YouTube video",
            statusLabel: "Status",
            statusMessage: "Checking transcript availability...",
            transcriptPlaceholder:
              "Transcript will appear here after the next phase.",
          };

    currentTranscriptTitle = videoTitle || currentTranscriptTitle;

    if (videoIdElement) {
      videoIdElement.textContent = shell.videoId;
    }

    if (titleElement) {
      titleElement.textContent =
        videoTitle || currentTranscriptTitle || shell.videoTitle;
    }

    if (!resetTranscriptState) {
      return;
    }

    if (statusLabelElement) {
      statusLabelElement.textContent = shell.statusLabel;
    }

    if (statusMessageElement) {
      statusMessageElement.textContent = shell.statusMessage;
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.textContent = shell.transcriptPlaceholder;
    }

    if (transcriptStateElement) {
      transcriptStateElement.textContent = "Not loaded";
    }
  }

  function clearLanguageOptions() {
    var languageWrap = document.querySelector(
      "[data-yt-transcript-language-wrap]",
    );
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );

    if (languageWrap) {
      languageWrap.hidden = true;
    }

    if (languageSelect) {
      languageSelect.textContent = "";
    }
  }

  function setLanguageOptions(languages) {
    var languageWrap = document.querySelector(
      "[data-yt-transcript-language-wrap]",
    );
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );

    if (!languageWrap || !languageSelect) {
      return;
    }

    languageSelect.textContent = "";

    if (!Array.isArray(languages) || languages.length === 0) {
      languageWrap.hidden = true;
      return;
    }

    languages.forEach(function addLanguageOption(language, index) {
      var option = document.createElement("option");
      var kindLabel = language.isAutoGenerated ? "Auto-generated" : "Manual";

      option.value = String(index);
      option.textContent = language.isTranslated
        ? language.label
        : language.label + " - " + kindLabel;
      languageSelect.appendChild(option);
    });

    languageWrap.hidden = false;
  }

  function setTranscriptControlsEnabled(isEnabled) {
    var searchInput = document.querySelector("[data-yt-transcript-search]");
    var actionButtons = document.querySelectorAll(
      "[data-yt-transcript-action]",
    );

    if (searchInput) {
      searchInput.disabled = !isEnabled;
    }

    actionButtons.forEach(function updateButton(button) {
      button.disabled = !isEnabled;
    });
  }

  function clearTranscriptRows() {
    var rowsElement = document.querySelector("[data-yt-transcript-rows]");

    if (rowsElement) {
      rowsElement.textContent = "";
    }
  }

  function showTranscriptMessage(message, stateText) {
    var statusBox = document.querySelector("[data-yt-transcript-status]");
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );

    clearTranscriptRows();

    if (transcriptStateElement) {
      transcriptStateElement.textContent = stateText || "Not loaded";
    }

    if (statusMessageElement && stateText) {
      statusMessageElement.textContent = stateText;
    }

    if (statusBox && (stateText === "No transcript" || stateText === "Error")) {
      statusBox.setAttribute("data-state", "error");
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = false;
      transcriptPlaceholderElement.textContent = message;
    }
  }

  function renderTranscriptRows(rows) {
    var rowsElement = document.querySelector("[data-yt-transcript-rows]");
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var query = currentSearchQuery.trim().toLowerCase();
    var visibleRows = Array.isArray(rows)
      ? rows.filter(function filterRow(row) {
          return (
            !query ||
            row.text.toLowerCase().indexOf(query) !== -1 ||
            row.timestamp.indexOf(query) !== -1
          );
        })
      : [];
    var fragment = document.createDocumentFragment();

    if (!rowsElement) {
      return;
    }

    rowsElement.textContent = "";

    if (visibleRows.length === 0) {
      if (transcriptStateElement) {
        transcriptStateElement.textContent =
          rows.length > 0 ? "No matches" : "Empty";
      }

      if (transcriptPlaceholderElement) {
        transcriptPlaceholderElement.hidden = false;
        transcriptPlaceholderElement.textContent =
          rows.length > 0
            ? "No transcript rows match your search."
            : "No readable transcript rows were found.";
      }

      return;
    }

    visibleRows.forEach(function addTranscriptRow(row) {
      var rowElement = createElement("div", "yt-transcript-helper-row");
      var timestampButton = createElement(
        "button",
        "yt-transcript-helper-row-time",
        row.timestamp,
      );
      var textElement = createElement(
        "span",
        "yt-transcript-helper-row-text",
        row.text,
      );

      timestampButton.type = "button";
      timestampButton.setAttribute(
        "data-yt-transcript-start",
        String(row.startSeconds),
      );
      timestampButton.setAttribute("aria-label", "Jump to " + row.timestamp);
      rowElement.appendChild(timestampButton);
      rowElement.appendChild(textElement);
      fragment.appendChild(rowElement);
    });

    rowsElement.appendChild(fragment);

    if (transcriptStateElement) {
      transcriptStateElement.textContent = query
        ? visibleRows.length + " matches"
        : rows.length + " rows";
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = true;
    }

    markFirstTranscriptRender(currentCaptionSource || "render");
  }

  function getSelectedTrack() {
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );
    var selectedIndex = languageSelect ? Number(languageSelect.value || 0) : 0;

    if (Number.isNaN(selectedIndex)) {
      selectedIndex = 0;
    }

    return (
      currentCaptionTracks[selectedIndex] || currentCaptionTracks[0] || null
    );
  }

  function getTranscriptDebugOptions() {
    var isEnabled = false;

    try {
      isEnabled =
        window.localStorage &&
        window.localStorage.getItem("ytTranscriptHelperDebug") === "true";
    } catch (error) {
      isEnabled = false;
    }

    if (
      !isEnabled ||
      !window.console ||
      typeof window.console.debug !== "function"
    ) {
      return undefined;
    }

    return {
      debugLogger: function debugLogger(message) {
        window.console.debug("[YT Transcript Helper] " + message);
      },
    };
  }

  function logTranscriptDebug(message) {
    var options = getTranscriptDebugOptions();

    if (!options || typeof options.debugLogger !== "function") {
      return;
    }

    options.debugLogger(message);
  }

  function getNow() {
    return window.performance && typeof window.performance.now === "function"
      ? window.performance.now()
      : Date.now();
  }

  function logTranscriptPerformance(label, startTime, detail) {
    var duration = Math.round((getNow() - startTime) * 10) / 10;

    if (!window.console || typeof window.console.debug !== "function") {
      return;
    }

    window.console.debug(
      "[YT Transcript Perf] " +
        label +
        ": " +
        duration +
        "ms" +
        (detail ? " (" + detail + ")" : ""),
    );
  }

  function markFirstTranscriptRender(source) {
    if (hasRenderedFirstTranscriptForVideo || !currentLoadStartedAt) {
      return;
    }

    hasRenderedFirstTranscriptForVideo = true;
    logTranscriptPerformance(
      "total time to first transcript render",
      currentLoadStartedAt,
      source ? "source=" + source : "",
    );
  }

  function promiseWithTimeout(promise, timeoutMs, message) {
    return new Promise(function withTimeout(resolve, reject) {
      var timerId = window.setTimeout(function handleTimeout() {
        reject(new Error(message || "Request timed out"));
      }, timeoutMs);

      Promise.resolve(promise).then(
        function handleResolve(value) {
          window.clearTimeout(timerId);
          resolve(value);
        },
        function handleReject(error) {
          window.clearTimeout(timerId);
          reject(error);
        },
      );
    });
  }

  function createFetchWithTimeout(fetchFn) {
    if (typeof fetchFn !== "function") {
      return null;
    }

    return function fetchWithTimeout(url, options) {
      return promiseWithTimeout(
        fetchFn(url, options),
        TRANSCRIPT_REQUEST_TIMEOUT_MS,
        "YouTube transcript request timed out",
      );
    };
  }

  function getTranscriptStorageArea() {
    try {
      if (chrome && chrome.storage && chrome.storage.session) {
        return chrome.storage.session;
      }

      if (chrome && chrome.storage && chrome.storage.local) {
        return chrome.storage.local;
      }
    } catch (error) {}

    return null;
  }

  function storageGet(area, key) {
    return new Promise(function getFromStorage(resolve) {
      var didResolve = false;
      var timeoutId = window.setTimeout(function handleStorageTimeout() {
        finish({});
      }, STORAGE_OPERATION_TIMEOUT_MS);

      function finish(value) {
        if (didResolve) {
          return;
        }

        didResolve = true;
        window.clearTimeout(timeoutId);
        resolve(value || {});
      }

      try {
        var result = area.get(key, finish);

        if (result && typeof result.then === "function") {
          result.then(finish).catch(function handleStorageError() {
            finish({});
          });
        }
      } catch (error) {
        finish({});
      }
    });
  }

  function storageSet(area, value) {
    return new Promise(function setInStorage(resolve) {
      var didResolve = false;
      var timeoutId = window.setTimeout(finish, STORAGE_OPERATION_TIMEOUT_MS);

      function finish() {
        if (didResolve) {
          return;
        }

        didResolve = true;
        window.clearTimeout(timeoutId);
        resolve();
      }

      try {
        var result = area.set(value, finish);

        if (result && typeof result.then === "function") {
          result.then(finish).catch(finish);
        }
      } catch (error) {
        finish();
      }
    });
  }

  function createCacheKey(videoId, language, targetLanguage) {
    var transcript = getTranscriptHelpers();

    if (
      transcript &&
      typeof transcript.createTranscriptCacheKey === "function"
    ) {
      return transcript.createTranscriptCacheKey(
        videoId,
        language,
        targetLanguage,
      );
    }

    return [
      "transcript",
      videoId || "",
      language || "auto",
      targetLanguage || "none",
    ].join(":");
  }

  function getTrackCacheLanguage(track, useDefaultLanguage) {
    if (useDefaultLanguage) {
      return "auto";
    }

    if (!track) {
      return "auto";
    }

    return track.isTranslated
      ? track.sourceLanguageCode || track.languageCode || "auto"
      : track.languageCode || "auto";
  }

  function getTrackCacheTargetLanguage(track, useDefaultLanguage) {
    if (useDefaultLanguage || !track || !track.isTranslated) {
      return "none";
    }

    return track.translationLanguageCode || "none";
  }

  function getCacheKeyForTrack(videoId, track, useDefaultLanguage) {
    return createCacheKey(
      videoId,
      getTrackCacheLanguage(track, useDefaultLanguage),
      getTrackCacheTargetLanguage(track, useDefaultLanguage),
    );
  }

  async function readTranscriptCache(videoId, language, targetLanguage) {
    var storageArea = getTranscriptStorageArea();
    var transcript = getTranscriptHelpers();
    var cacheKey = createCacheKey(videoId, language, targetLanguage);
    var startTime = getNow();
    var storedValue;
    var entry;

    if (!storageArea) {
      logTranscriptPerformance("cache read time", startTime, "storage=none");
      return null;
    }

    storedValue = await storageGet(storageArea, cacheKey);
    entry = storedValue && storedValue[cacheKey];
    logTranscriptPerformance("cache read time", startTime, "key=" + cacheKey);

    if (
      transcript &&
      typeof transcript.isTranscriptCacheEntryFresh === "function" &&
      transcript.isTranscriptCacheEntryFresh(
        entry,
        Date.now(),
        TRANSCRIPT_CACHE_TTL_MS,
      )
    ) {
      return {
        key: cacheKey,
        entry: entry,
      };
    }

    return null;
  }

  async function writeTranscriptCache(cacheKey, entry) {
    var storageArea = getTranscriptStorageArea();
    var value = {};

    if (!storageArea || !cacheKey || !entry) {
      return;
    }

    value[cacheKey] = entry;
    await storageSet(storageArea, value);
  }

  function getCurrentTitleForCache() {
    return (
      currentVideoMetadata.title ||
      currentTranscriptTitle ||
      "Current YouTube video"
    );
  }

  function createTranscriptCacheEntry(rows, selectedTrack, source) {
    return {
      videoId: currentVideoId,
      rows: Array.isArray(rows) ? rows : [],
      tracks: currentCaptionTracks,
      availableLanguages: currentAvailableLanguages,
      title: getCurrentTitleForCache(),
      selectedTrack: selectedTrack || null,
      source: source || currentCaptionSource || "unknown",
      timestamp: Date.now(),
    };
  }

  function updateTranscriptTitle(title) {
    var titleElement = document.querySelector(
      "[data-yt-transcript-video-title]",
    );

    currentTranscriptTitle = title || currentTranscriptTitle;

    if (titleElement && currentTranscriptTitle) {
      titleElement.textContent = currentTranscriptTitle;
    }
  }

  function waitForCurrentVideoMetadata(videoId, previousTitle) {
    var helpers = getYouTubeHelpers();
    var requestId = metadataRequestId + 1;

    metadataRequestId = requestId;

    currentMetadataPromise = (async function loadVideoMetadata() {
      var metadata;

      if (
        helpers &&
        typeof helpers.waitForVideoMetadata === "function"
      ) {
        metadata = await helpers.waitForVideoMetadata(videoId, previousTitle, {
          document: document,
          getPlayerResponse: function getPlayerResponse() {
            return window.ytInitialPlayerResponse || null;
          },
        });
      } else {
        metadata = {
          title: "",
          channelName: "",
        };
      }

      if (requestId !== metadataRequestId || currentVideoId !== videoId) {
        return null;
      }

      currentVideoMetadata = {
        videoId: videoId,
        title: metadata && metadata.title ? metadata.title : "Unknown video",
        channelName:
          metadata && metadata.channelName ? metadata.channelName : "",
      };
      currentTranscriptTitle = currentVideoMetadata.title;
      notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });

      return currentVideoMetadata;
    })();

    return currentMetadataPromise;
  }

  function applyCachedTranscript(cacheResult) {
    var entry = cacheResult && cacheResult.entry;
    var statusBox = document.querySelector("[data-yt-transcript-status]");
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );

    if (!entry || !Array.isArray(entry.rows) || entry.rows.length === 0) {
      return false;
    }

    currentCaptionTracks = Array.isArray(entry.tracks) ? entry.tracks : [];
    currentAvailableLanguages = Array.isArray(entry.availableLanguages)
      ? entry.availableLanguages
      : [];
    currentTranscriptRows = entry.rows;
    currentTranscriptStatus = "loaded";
    currentTranscriptError = "";
    currentCaptionSource = entry.source || "cache";
    currentSearchQuery = "";

    updateTranscriptTitle(entry.title);
    setLanguageOptions(currentCaptionTracks);
    renderTranscriptRows(currentTranscriptRows);
    setTranscriptControlsEnabled(true);

    if (statusBox) {
      statusBox.setAttribute("data-state", "available");
    }

    if (statusMessageElement) {
      statusMessageElement.textContent = "Loaded from cache";
    }

    if (transcriptStateElement) {
      transcriptStateElement.textContent = currentTranscriptRows.length + " rows";
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = true;
    }

    markFirstTranscriptRender("cache");
    notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
    return true;
  }

  function createPerformanceLogger(videoId) {
    return function performanceLogger(label, duration, detail) {
      if (!window.console || typeof window.console.debug !== "function") {
        return;
      }

      window.console.debug(
        "[YT Transcript Perf] " +
          label +
          ": " +
          Math.round(Number(duration || 0) * 10) / 10 +
          "ms" +
          " (videoId=" +
          (videoId || "unknown") +
          (detail ? ", " + detail : "") +
          ")",
      );
    };
  }

  function fetchAndRenderSelectedTranscript(options) {
    var safeOptions = options || {};
    var transcript = getTranscriptHelpers();
    var selectedTrack = getSelectedTrack();
    var requestId = transcriptRequestId + 1;
    var baseFetchFn = window.fetch ? window.fetch.bind(window) : null;
    var fetchFn = createFetchWithTimeout(baseFetchFn);
    var useDefaultCacheKey = safeOptions.useDefaultCacheKey === true;
    var cacheKey = getCacheKeyForTrack(
      currentVideoId,
      selectedTrack,
      useDefaultCacheKey,
    );
    var debugOptions = getTranscriptDebugOptions();
    var performanceLogger = createPerformanceLogger(currentVideoId);
    var searchInput = document.querySelector("[data-yt-transcript-search]");

    transcriptRequestId = requestId;
    currentTranscriptRows = [];
    currentSearchQuery = "";
    currentTranscriptStatus = "loading";
    currentTranscriptError = "";
    setTranscriptControlsEnabled(false);

    if (searchInput) {
      searchInput.value = "";
    }

    currentPrefetchPromise = (async function loadTranscriptRows() {
      var cachedTranscript;
      var fetchStartTime;
      var result;
      var cacheEntry;
      var exactCacheKey;
      var statusBox;
      var statusMessageElement;

      if (!selectedTrack) {
        showTranscriptMessage(
          "No transcript available for this video",
          "No captions",
        );
        return null;
      }

      if (!safeOptions.skipCacheRead) {
        cachedTranscript = await readTranscriptCache(
          currentVideoId,
          getTrackCacheLanguage(selectedTrack, useDefaultCacheKey),
          getTrackCacheTargetLanguage(selectedTrack, useDefaultCacheKey),
        );

        if (requestId !== transcriptRequestId) {
          return null;
        }

        if (cachedTranscript && applyCachedTranscript(cachedTranscript)) {
          return cachedTranscript;
        }
      }

      logTranscriptDebug("Selected video ID: " + (currentVideoId || "unknown"));
      logTranscriptDebug(
        "Caption track source: " + (currentCaptionSource || "unknown"),
      );
      logTranscriptDebug(
        "Selected caption track: " +
          'label="' +
          (selectedTrack.label || "unknown") +
          '", ' +
          'language="' +
          (selectedTrack.languageCode || "unknown") +
          '", ' +
          'kind="' +
          (selectedTrack.kind || "unknown") +
          '"',
      );

      showTranscriptMessage("Loading transcript rows...", "Loading");

      if (
        !transcript ||
        typeof transcript.fetchTranscriptRowsWithFallbacks !== "function"
      ) {
        currentTranscriptStatus = "error";
        showTranscriptMessage(
          "Transcript loading is not available in this build.",
          "Error",
        );
        notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
        return null;
      }

      try {
        fetchStartTime = getNow();
        result = await promiseWithTimeout(
          transcript.fetchTranscriptRowsWithFallbacks({
            videoId: currentVideoId,
            track: selectedTrack,
            tracks: currentCaptionTracks,
            fetchFn: fetchFn,
            apiKey: currentTranscriptApiKey,
            nativeTranscriptFetcher: function nativeTranscriptFetcher() {
              return fetchNativeTranscriptRows(transcript);
            },
            debugLogger: debugOptions && debugOptions.debugLogger,
            performanceLogger: performanceLogger,
          }),
          TRANSCRIPT_PIPELINE_TIMEOUT_MS,
          "Transcript loading timed out",
        );
        logTranscriptPerformance(
          "transcript fetch time",
          fetchStartTime,
          "source=" + ((result && result.source) || "unknown"),
        );

        if (requestId !== transcriptRequestId) {
          return null;
        }

        if (!result || !result.ok) {
          currentTranscriptStatus = "error";
          currentTranscriptError = selectedTrack.isTranslated
            ? (selectedTrack.label || selectedTrack.language || "translation") +
              " translation is not available for this video."
            : "No YouTube transcript is available for this video.\nAudio transcription can be added later.";
          currentTranscriptRows = [];
          setTranscriptControlsEnabled(false);
          showTranscriptMessage(currentTranscriptError, "No transcript");
          notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
          return null;
        }

        currentTranscriptStatus = "loaded";
        currentTranscriptError = "";
        currentCaptionSource = result.source || currentCaptionSource;
        logTranscriptDebug("Transcript rows loaded from: " + result.source);
        currentTranscriptRows = result.rows;
        renderTranscriptRows(currentTranscriptRows);
        setTranscriptControlsEnabled(true);

        statusBox = document.querySelector("[data-yt-transcript-status]");
        statusMessageElement = document.querySelector(
          "[data-yt-transcript-status-message]",
        );

        if (statusBox) {
          statusBox.setAttribute("data-state", "available");
        }

        if (statusMessageElement) {
          statusMessageElement.textContent = "Transcript loaded";
        }

        cacheEntry = createTranscriptCacheEntry(
          result.rows,
          selectedTrack,
          result.source,
        );
        await writeTranscriptCache(cacheKey, cacheEntry);

        if (useDefaultCacheKey) {
          exactCacheKey = getCacheKeyForTrack(
            currentVideoId,
            selectedTrack,
            false,
          );

          if (exactCacheKey !== cacheKey) {
            await writeTranscriptCache(exactCacheKey, cacheEntry);
          }
        }

        notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
        return result;
      } catch (error) {
        if (requestId !== transcriptRequestId) {
          return null;
        }

        logTranscriptDebug(
          "Transcript pipeline failed: " +
            (error && error.message ? error.message : "Unknown error"),
        );
        currentTranscriptStatus = "error";
        currentTranscriptError = selectedTrack.isTranslated
          ? "English translation is not available for this video."
          : "No YouTube transcript is available for this video.\nAudio transcription can be added later.";
        currentTranscriptRows = [];
        setTranscriptControlsEnabled(false);
        showTranscriptMessage(currentTranscriptError, "No transcript");
        notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
        return null;
      }
    })();

    return currentPrefetchPromise;
  }

  function getNativeTranscriptRows(transcript) {
    if (
      !transcript ||
      typeof transcript.parseNativeTranscriptRowsFromDocument !== "function"
    ) {
      return [];
    }

    try {
      return transcript.parseNativeTranscriptRowsFromDocument(document);
    } catch (error) {
      logTranscriptDebug(
        "Native transcript parser failed: " +
          (error && error.message ? error.message : "Unknown error"),
      );
      return [];
    }
  }

  function normalizeElementText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getClickableElements() {
    return Array.prototype.slice.call(
      document.querySelectorAll("button, [role=\"button\"], tp-yt-paper-button"),
    );
  }

  function isElementVisible(element) {
    var rect;

    if (!element || typeof element.getBoundingClientRect !== "function") {
      return false;
    }

    rect = element.getBoundingClientRect();

    return rect.width > 0 && rect.height > 0;
  }

  function findClickableByLabels(labels) {
    var normalizedLabels = labels.map(normalizeElementText);
    var elements = getClickableElements();
    var visibleMatch = null;
    var firstMatch = null;

    elements.some(function findElement(element) {
      var text = normalizeElementText(element.textContent);
      var ariaLabel = normalizeElementText(element.getAttribute("aria-label"));
      var title = normalizeElementText(element.getAttribute("title"));
      var matches = normalizedLabels.some(function matchesLabel(label) {
        return text === label || ariaLabel === label || title === label;
      });

      if (!matches) {
        return false;
      }

      if (!firstMatch) {
        firstMatch = element;
      }

      if (isElementVisible(element)) {
        visibleMatch = element;
        return true;
      }

      return false;
    });

    return visibleMatch || firstMatch;
  }

  function findNativeTranscriptButton(label) {
    return findClickableByLabels([label]);
  }

  function waitForNativeTranscriptButton(label, timeoutMs) {
    return new Promise(function waitForButton(resolve) {
      var observer = null;
      var timeoutId = null;

      function finish(button) {
        if (observer) {
          observer.disconnect();
        }

        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }

        resolve(button || null);
      }

      function checkButton() {
        var button = findNativeTranscriptButton(label);

        if (button) {
          finish(button);
        }
      }

      timeoutId = window.setTimeout(function handleTimeout() {
        finish(null);
      }, timeoutMs || 1500);

      if (window.MutationObserver && document.body) {
        observer = new MutationObserver(checkButton);
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }

      checkButton();
    });
  }

  function clickElement(element) {
    if (!element || typeof element.click !== "function") {
      return false;
    }

    try {
      if (typeof element.scrollIntoView === "function") {
        element.scrollIntoView({
          block: "center",
          inline: "nearest",
        });
      }
    } catch (error) {}

    element.click();
    return true;
  }

  async function expandDescriptionForTranscriptButton() {
    var expandButton = findClickableByLabels([
      "...more",
      "…more",
      "more",
      "show more",
      "show more description",
    ]);

    if (!expandButton) {
      return null;
    }

    logTranscriptDebug("Expanding YouTube description to find transcript button");
    clickElement(expandButton);

    return waitForNativeTranscriptButton("Show transcript", 1500);
  }

  function waitForNativeTranscriptRows(transcript) {
    return new Promise(function waitForRows(resolve) {
      var observer = null;
      var timeoutId = null;

      function finish(rows) {
        if (observer) {
          observer.disconnect();
        }

        if (timeoutId) {
          window.clearTimeout(timeoutId);
        }

        resolve(rows);
      }

      function checkRows() {
        var rows = getNativeTranscriptRows(transcript);

        if (rows.length > 0) {
          finish(rows);
        }
      }

      timeoutId = window.setTimeout(function handleNativeTranscriptTimeout() {
        finish(getNativeTranscriptRows(transcript));
      }, NATIVE_TRANSCRIPT_FALLBACK_TIMEOUT_MS);

      if (window.MutationObserver && document.body) {
        observer = new MutationObserver(checkRows);
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });
      }

      checkRows();
    });
  }

  async function openNativeTranscriptPanel() {
    var showButton = findNativeTranscriptButton("Show transcript");

    if (!showButton) {
      showButton = await expandDescriptionForTranscriptButton();
    }

    if (!showButton) {
      showButton = await waitForNativeTranscriptButton("Show transcript", 1000);
    }

    if (!showButton) {
      logTranscriptDebug(
        "Native transcript fallback skipped: Show transcript button was not found",
      );
      return false;
    }

    logTranscriptDebug(
      "Timedtext was empty; opening YouTube native transcript panel fallback",
    );

    return clickElement(showButton);
  }

  function closeNativeTranscriptPanel() {
    var closeButton = findNativeTranscriptButton("Close transcript");

    clickElement(closeButton);
  }

  async function fetchNativeTranscriptRows(transcript) {
    var rows = getNativeTranscriptRows(transcript);
    var openedNativePanel = false;

    if (rows.length > 0) {
      logTranscriptDebug(
        "Native transcript panel already has " + rows.length + " rows",
      );
      return rows;
    }

    openedNativePanel = await openNativeTranscriptPanel();

    if (!openedNativePanel) {
      return [];
    }

    rows = await waitForNativeTranscriptRows(transcript);
    logTranscriptDebug("Native transcript fallback rows: " + rows.length);

    if (openedNativePanel) {
      closeNativeTranscriptPanel();
    }

    return rows;
  }

  function handleSearchInput(event) {
    currentSearchQuery = event.target.value || "";
    renderTranscriptRows(currentTranscriptRows);
  }

  function jumpToTranscriptTime(startSeconds) {
    var video = document.querySelector("video");
    var safeSeconds = Number(startSeconds);

    if (!video || Number.isNaN(safeSeconds)) {
      return;
    }

    video.currentTime = safeSeconds;

    var playResult = video.play();

    if (playResult && typeof playResult.catch === "function") {
      playResult.catch(function ignorePlayError() {
        // Browsers can block autoplay. Seeking still works without playback.
      });
    }
  }

  function setTranscriptStateText(text) {
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );

    if (transcriptStateElement) {
      transcriptStateElement.textContent = text;
    }
  }

  function handleTranscriptClick(event) {
    var target = event.target;

    if (!target || !target.matches("[data-yt-transcript-start]")) {
      return;
    }

    jumpToTranscriptTime(target.getAttribute("data-yt-transcript-start"));
  }

  async function copyTextToClipboard(text) {
    var textarea;
    var copied;

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    copied = document.execCommand("copy");
    textarea.remove();

    if (!copied) {
      throw new Error("Copy command failed");
    }

    return true;
  }

  async function copyTranscriptToClipboard() {
    var exportHelpers = getExportHelpers();
    var helpers = getYouTubeHelpers();
    var videoTitle = helpers
      ? helpers.getCurrentVideoTitle(document)
      : "YouTube transcript";
    var text;

    if (
      !exportHelpers ||
      typeof exportHelpers.buildPlainTextTranscript !== "function" ||
      currentTranscriptRows.length === 0
    ) {
      return;
    }

    text = exportHelpers.buildPlainTextTranscript(
      videoTitle,
      window.location.href,
      currentTranscriptRows,
    );
    await copyTextToClipboard(text);
    setTranscriptStateText("Copied");
  }

  function exportTranscript(format) {
    var exportHelpers = getExportHelpers();
    var helpers = getYouTubeHelpers();
    var videoTitle = helpers
      ? helpers.getCurrentVideoTitle(document)
      : "YouTube transcript";
    var isMarkdown = format === "markdown";
    var fileName;
    var text;

    if (!exportHelpers || currentTranscriptRows.length === 0) {
      return;
    }

    if (isMarkdown) {
      text = exportHelpers.buildMarkdownTranscript(
        videoTitle,
        window.location.href,
        currentTranscriptRows,
      );
      fileName = exportHelpers.createSafeFileName(videoTitle, "md");
    } else {
      text = exportHelpers.buildPlainTextTranscript(
        videoTitle,
        window.location.href,
        currentTranscriptRows,
      );
      fileName = exportHelpers.createSafeFileName(videoTitle, "txt");
    }

    exportHelpers.downloadTextFile(fileName, text, document);
  }

  function handleTranscriptAction(event) {
    var action =
      event.target && event.target.getAttribute("data-yt-transcript-action");

    if (!action) {
      return;
    }

    if (action === "copy") {
      copyTranscriptToClipboard().catch(function handleCopyError() {
        showTranscriptMessage(
          "Copy failed. Your browser may have blocked clipboard access.",
          "Error",
        );
      });
    } else if (action === "txt") {
      exportTranscript("txt");
    } else if (action === "markdown") {
      exportTranscript("markdown");
    }
  }

  function applyTranscriptAvailabilityResult(result, options) {
    var safeResult = result || {};
    var safeOptions = options || {};
    var status = safeResult.status || "failed";
    var message = safeResult.message || "Transcript detection failed";
    var statusBox = document.querySelector("[data-yt-transcript-status]");
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var transcriptStateText = "Not loaded";
    var placeholderText = "Transcript will appear here after the next phase.";
    var preserveTranscriptRows = safeOptions.preserveTranscriptRows === true;

    if (status === "checking") {
      currentCaptionTracks = [];
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "checking";
      transcriptRequestId += 1;
      transcriptStateText = "Checking";
      placeholderText = "Looking for caption tracks...";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    } else if (status === "available") {
      currentCaptionTracks = Array.isArray(safeResult.tracks)
        ? safeResult.tracks
        : [];
      currentAvailableLanguages = Array.isArray(safeResult.languages)
        ? safeResult.languages
        : [];
      currentTranscriptApiKey = safeResult.apiKey || null;
      currentCaptionSource = safeResult.source || "";
      if (preserveTranscriptRows && currentTranscriptRows.length > 0) {
        currentTranscriptStatus = "loaded";
        transcriptStateText = currentTranscriptRows.length + " rows";
        placeholderText = "";
      } else {
        currentTranscriptRows = [];
        currentSearchQuery = "";
        currentTranscriptStatus = "loading";
        transcriptStateText = "Available";
        placeholderText = "Transcript detected. Loading rows...";
      }
      setLanguageOptions(currentCaptionTracks);
    } else if (status === "unavailable") {
      currentCaptionTracks = [];
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "unavailable";
      transcriptRequestId += 1;
      transcriptStateText = "No captions";
      placeholderText =
        "No YouTube transcript is available for this video. Audio transcription can be added later.";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    } else {
      currentCaptionTracks = [];
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "error";
      transcriptRequestId += 1;
      transcriptStateText = "Error";
      placeholderText =
        "No YouTube transcript is available for this video. Audio transcription can be added later.";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    }

    if (statusBox) {
      statusBox.setAttribute("data-state", status);
    }

    if (statusMessageElement) {
      statusMessageElement.textContent = message;
    }

    if (transcriptStateElement) {
      transcriptStateElement.textContent = transcriptStateText;
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = preserveTranscriptRows && status === "available";
      transcriptPlaceholderElement.textContent = placeholderText;
    }

    if (status === "available" && !preserveTranscriptRows) {
      fetchAndRenderSelectedTranscript({
        useDefaultCacheKey: true,
        skipCacheRead: true,
      });
    }
  }

  function startTranscriptAvailabilityCheck(videoId) {
    var transcript = getTranscriptHelpers();
    var requestId = availabilityRequestId + 1;
    var fetchFn = createFetchWithTimeout(
      window.fetch ? window.fetch.bind(window) : null,
    );
    var availabilityPromise;

    availabilityRequestId = requestId;
    currentLoadStartedAt = getNow();
    hasRenderedFirstTranscriptForVideo = false;

    if (
      transcript &&
      typeof transcript.createCheckingAvailabilityResult === "function"
    ) {
      applyTranscriptAvailabilityResult(
        transcript.createCheckingAvailabilityResult(),
      );
    } else {
      applyTranscriptAvailabilityResult({
        status: "checking",
        message: "Checking transcript availability...",
        tracks: [],
        languages: [],
      });
    }

    if (
      !transcript ||
      typeof transcript.detectTranscriptAvailability !== "function"
    ) {
      applyTranscriptAvailabilityResult({
        status: "failed",
        message: "Transcript detection failed",
        tracks: [],
        languages: [],
      });
      return;
    }

    currentCacheReadPromise = readTranscriptCache(videoId, "auto", "none");
    availabilityPromise = promiseWithTimeout(
      transcript.detectTranscriptAvailability({
        videoId: videoId,
        document: document,
        fetchFn: fetchFn,
      }),
      AVAILABILITY_TIMEOUT_MS,
      "Transcript availability check timed out",
    );

    currentPrefetchPromise = (async function prefetchTranscript() {
      var cachedTranscript = await currentCacheReadPromise;
      var renderedFromCache = false;
      var result;

      if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
        return null;
      }

      if (cachedTranscript) {
        renderedFromCache = applyCachedTranscript(cachedTranscript);
      }

      try {
        result = await availabilityPromise;

        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return null;
        }

        if (renderedFromCache && (!result || result.status !== "available")) {
          return result;
        }

        applyTranscriptAvailabilityResult(result, {
          preserveTranscriptRows: renderedFromCache,
        });
        return result;
      } catch (error) {
        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return null;
        }

        if (!renderedFromCache) {
          applyTranscriptAvailabilityResult({
            status: "failed",
            message: "Transcript detection failed",
            tracks: [],
            languages: [],
          });
        }

        return null;
      }
    })();
  }

  function createToggleButton() {
    var toggle = document.getElementById(TOGGLE_ID);

    if (toggle) {
      return toggle;
    }

    toggle = createElement(
      "button",
      "yt-transcript-helper-toggle",
      "Transcript",
    );
    toggle.id = TOGGLE_ID;
    toggle.type = "button";
    toggle.hidden = true;
    toggle.addEventListener("click", showPanel);
    document.documentElement.appendChild(toggle);

    return toggle;
  }

  function createPanel(videoId) {
    var panel = document.getElementById(PANEL_ID);
    var helpers = getYouTubeHelpers();
    var sidebar = getSidebarHelpers();
    var videoTitle = helpers ? helpers.getCurrentVideoTitle(document) : "";
    var shell =
      sidebar && typeof sidebar.createSidebarShellState === "function"
        ? sidebar.createSidebarShellState(videoId, videoTitle)
        : {
            extensionName: "YouTube Transcript Helper",
            videoId: videoId,
            videoTitle: videoTitle || "Current YouTube video",
            statusLabel: "Status",
            statusMessage: "Checking transcript availability...",
            transcriptTitle: "Transcript",
            transcriptPlaceholder:
              "Transcript will appear here after the next phase.",
            search: {
              placeholder: "Search will work after transcripts load",
              disabled: true,
            },
            actions: [
              { label: "Copy", disabled: true },
              { label: "TXT", disabled: true },
              { label: "Markdown", disabled: true },
            ],
          };

    if (panel) {
      updatePanelContent(videoId, true);
      showPanel();
      return panel;
    }

    panel = createElement("aside", "yt-transcript-helper-panel");
    panel.id = PANEL_ID;
    panel.setAttribute("aria-label", "YouTube transcript helper panel");

    var header = createElement("div", "yt-transcript-helper-header");
    var titleWrap = createElement("div", "yt-transcript-helper-title-wrap");
    var heading = createElement(
      "h2",
      "yt-transcript-helper-heading",
      shell.extensionName,
    );
    var subtitle = createElement(
      "p",
      "yt-transcript-helper-subtitle",
      "Transcript sidebar",
    );
    var closeButton = createElement(
      "button",
      "yt-transcript-helper-icon-button",
      "X",
    );

    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close transcript panel");
    closeButton.addEventListener("click", hidePanel);

    titleWrap.appendChild(heading);
    titleWrap.appendChild(subtitle);
    header.appendChild(titleWrap);
    header.appendChild(closeButton);

    var body = createElement("div", "yt-transcript-helper-body");
    var status = createElement("div", "yt-transcript-helper-status");
    var statusHeader = createElement(
      "div",
      "yt-transcript-helper-status-header",
    );
    var statusLabel = createElement(
      "span",
      "yt-transcript-helper-status-label",
      shell.statusLabel,
    );
    var statusMessage = createElement(
      "span",
      "yt-transcript-helper-status-message",
      shell.statusMessage,
    );
    var videoIdRow = createElement("div", "yt-transcript-helper-video-id-row");
    var videoIdLabel = createElement(
      "span",
      "yt-transcript-helper-video-id-label",
      "Video ID",
    );
    var statusValue = createElement(
      "code",
      "yt-transcript-helper-video-id",
      shell.videoId,
    );
    var languageWrap = createElement("label", "yt-transcript-helper-language");
    var languageLabel = createElement(
      "span",
      "yt-transcript-helper-language-label",
      "Language",
    );
    var languageSelect = createElement(
      "select",
      "yt-transcript-helper-language-select",
    );

    status.setAttribute("data-yt-transcript-status", "true");
    status.setAttribute("data-state", "checking");
    statusLabel.setAttribute("data-yt-transcript-status-label", "true");
    statusMessage.setAttribute("data-yt-transcript-status-message", "true");
    statusValue.setAttribute("data-yt-transcript-video-id", "true");
    languageWrap.setAttribute("data-yt-transcript-language-wrap", "true");
    languageSelect.setAttribute("data-yt-transcript-language-select", "true");
    languageSelect.setAttribute("aria-label", "Transcript language");
    languageSelect.addEventListener("change", function handleLanguageChange() {
      fetchAndRenderSelectedTranscript({
        useDefaultCacheKey: false,
      });
    });
    languageWrap.hidden = true;
    statusHeader.appendChild(statusLabel);
    statusHeader.appendChild(statusMessage);
    videoIdRow.appendChild(videoIdLabel);
    videoIdRow.appendChild(statusValue);
    languageWrap.appendChild(languageLabel);
    languageWrap.appendChild(languageSelect);
    status.appendChild(statusHeader);
    status.appendChild(videoIdRow);
    status.appendChild(languageWrap);

    var videoTitleElement = createElement(
      "p",
      "yt-transcript-helper-video-title",
      shell.videoTitle,
    );
    videoTitleElement.setAttribute("data-yt-transcript-video-title", "true");

    var toolbar = createElement("div", "yt-transcript-helper-toolbar");
    var searchInput = createElement("input", "yt-transcript-helper-search");
    var actions = createElement("div", "yt-transcript-helper-actions");

    searchInput.type = "search";
    searchInput.placeholder = shell.search.placeholder;
    searchInput.disabled = shell.search.disabled;
    searchInput.setAttribute("aria-label", "Search transcript");
    searchInput.setAttribute("data-yt-transcript-search", "true");
    searchInput.addEventListener("input", handleSearchInput);

    shell.actions.forEach(function addActionButton(action) {
      var button = createElement(
        "button",
        "yt-transcript-helper-secondary-button",
        action.label,
      );
      button.type = "button";
      button.disabled = action.disabled;
      button.setAttribute(
        "data-yt-transcript-action",
        action.label.toLowerCase(),
      );
      button.addEventListener("click", handleTranscriptAction);
      actions.appendChild(button);
    });

    toolbar.appendChild(searchInput);
    toolbar.appendChild(actions);

    var transcript = createElement(
      "section",
      "yt-transcript-helper-transcript",
    );
    var transcriptHeader = createElement(
      "div",
      "yt-transcript-helper-transcript-header",
    );
    var transcriptTitle = createElement(
      "h3",
      "yt-transcript-helper-transcript-title",
      shell.transcriptTitle,
    );
    var transcriptState = createElement(
      "span",
      "yt-transcript-helper-transcript-state",
      "Not loaded",
    );
    var transcriptPlaceholder = createElement(
      "p",
      "yt-transcript-helper-transcript-placeholder",
      shell.transcriptPlaceholder,
    );
    var transcriptRows = createElement("div", "yt-transcript-helper-rows");

    transcriptState.setAttribute("data-yt-transcript-state", "true");
    transcriptPlaceholder.setAttribute(
      "data-yt-transcript-placeholder",
      "true",
    );
    transcriptRows.setAttribute("data-yt-transcript-rows", "true");
    transcriptRows.addEventListener("click", handleTranscriptClick);
    transcriptHeader.appendChild(transcriptTitle);
    transcriptHeader.appendChild(transcriptState);
    transcript.appendChild(transcriptHeader);
    transcript.appendChild(transcriptPlaceholder);
    transcript.appendChild(transcriptRows);

    body.appendChild(status);
    body.appendChild(videoTitleElement);
    body.appendChild(toolbar);
    body.appendChild(transcript);
    panel.appendChild(header);
    panel.appendChild(body);

    document.documentElement.appendChild(panel);
    createToggleButton();
    updatePanelContent(videoId);

    return panel;
  }

  function renderForCurrentPage() {
    var helpers = getYouTubeHelpers();
    var navigation = getNavigationHelpers();
    var detectionStartTime = getNow();
    var detectedVideoId;
    var previousVideoId = currentVideoId;

    if (!helpers) {
      return;
    }

    var action;
    detectedVideoId = helpers.getCurrentVideoId(
      document,
      window.location.href,
    );
    logTranscriptPerformance(
      "video ID detection time",
      detectionStartTime,
      detectedVideoId ? "videoId=" + detectedVideoId : "no video",
    );

    if (navigation && typeof navigation.getPageAction === "function") {
      action = navigation.getPageAction(
        currentVideoId,
        window.location.href,
        function getDetectedVideoId() {
          return detectedVideoId;
        },
      );
    } else {
      action = detectedVideoId
        ? { type: "render", videoId: detectedVideoId }
        : { type: "remove", videoId: null };
    }

    if (action.type === "remove") {
      removePanel();
      return;
    }

    currentVideoId = action.videoId;

    if (action.videoId && action.videoId !== previousVideoId) {
      var previousTitle =
        currentVideoMetadata.title || currentTranscriptTitle || "";

      currentTranscriptTitle = "";
      currentVideoMetadata = {
        videoId: action.videoId,
        title: "",
        channelName: "",
      };
      waitForCurrentVideoMetadata(action.videoId, previousTitle);
      notifyRuntime({
        type: "VIDEO_CHANGED",
        videoId: action.videoId,
      });
    }

    if (action.type === "keep") {
      return;
    }

    removeFloatingPanelElements();
    startTranscriptAvailabilityCheck(action.videoId);
  }

  function scheduleRenderForCurrentPage() {
    if (renderTimerId) {
      window.clearTimeout(renderTimerId);
    }

    renderTimerId = window.setTimeout(function runScheduledRender() {
      renderTimerId = null;
      renderForCurrentPage();
    }, NAVIGATION_DEBOUNCE_MS);
  }

  function handlePossibleNavigation() {
    if (lastUrl === window.location.href) {
      return;
    }

    lastUrl = window.location.href;
    scheduleRenderForCurrentPage();
  }

  function handleYouTubeNavigationFinish() {
    lastUrl = window.location.href;
    scheduleRenderForCurrentPage();
    notifyRuntime({ type: "YT_TRANSCRIPT_NAVIGATED" });
  }

  function patchHistoryMethod(methodName) {
    var originalMethod = window.history[methodName];

    if (typeof originalMethod !== "function") {
      return;
    }

    window.history[methodName] = function patchedHistoryMethod() {
      var result = originalMethod.apply(this, arguments);
      window.dispatchEvent(new Event("yt-transcript-helper-location-change"));
      return result;
    };
  }

  function listenForYouTubeNavigation() {
    patchHistoryMethod("pushState");
    patchHistoryMethod("replaceState");

    window.addEventListener("popstate", handlePossibleNavigation);
    window.addEventListener(
      "yt-navigate-finish",
      handleYouTubeNavigationFinish,
    );
    document.addEventListener(
      "yt-navigate-finish",
      handleYouTubeNavigationFinish,
    );
    window.addEventListener(
      "yt-page-data-updated",
      handleYouTubeNavigationFinish,
    );
    document.addEventListener(
      "yt-page-data-updated",
      handleYouTubeNavigationFinish,
    );
    window.addEventListener(
      "yt-transcript-helper-location-change",
      handlePossibleNavigation,
    );
  }

  function buildTranscriptStateResponse() {
    var metadataReady =
      currentVideoMetadata.videoId === currentVideoId &&
      Boolean(currentVideoMetadata.title);
    var selectedTrack = getSelectedTrack();

    return {
      videoId: currentVideoId,
      videoTitle: metadataReady ? currentVideoMetadata.title : "",
      channelName: metadataReady ? currentVideoMetadata.channelName : "",
      captionLabel:
        selectedTrack && selectedTrack.label ? selectedTrack.label : "",
      status: metadataReady ? currentTranscriptStatus : "loading",
      error: currentTranscriptError,
      rows: metadataReady ? currentTranscriptRows : [],
      tracks: currentCaptionTracks,
      availableLanguages: currentAvailableLanguages,
    };
  }

  async function settleFastCacheForStateResponse() {
    var cachedTranscript;

    if (!currentCacheReadPromise || currentTranscriptStatus === "loaded") {
      return;
    }

    try {
      cachedTranscript = await promiseWithTimeout(
        currentCacheReadPromise,
        STATE_RESPONSE_CACHE_WAIT_MS,
        "Cache read did not finish before state response",
      );

      if (cachedTranscript && currentTranscriptStatus !== "loaded") {
        applyCachedTranscript(cachedTranscript);
      }
    } catch (error) {}
  }

  async function settleFastMetadataForStateResponse() {
    if (!currentMetadataPromise || currentVideoMetadata.title) {
      return;
    }

    try {
      await promiseWithTimeout(
        currentMetadataPromise,
        STATE_RESPONSE_METADATA_WAIT_MS,
        "Metadata did not finish before state response",
      );
    } catch (error) {}
  }

  chrome.runtime.onMessage.addListener(function handleMessage(message, sender, sendResponse) {
    if (!message) return;

    if (message.type === "GET_TRANSCRIPT_STATE") {
      Promise.all([
        settleFastCacheForStateResponse(),
        settleFastMetadataForStateResponse(),
      ]).then(function sendStateResponse() {
        sendResponse(buildTranscriptStateResponse());
      });
      return true;
    }

    if (message.type === "GET_CURRENT_TIME") {
      var video = document.querySelector("video");
      sendResponse({ currentTime: video ? video.currentTime : -1 });
      return true;
    }

    if (message.type === "JUMP_TO_TIME") {
      jumpToTranscriptTime(message.time);
      sendResponse({ success: true });
      return true;
    }

    if (message.type === "YT_TRANSCRIPT_TOGGLE_PANEL") {
      sendResponse({ success: false });
      return true;
    }
  });

  listenForYouTubeNavigation();
  renderForCurrentPage();
})();
