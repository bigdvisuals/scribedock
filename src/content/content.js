(function startYouTubeTranscriptExtension() {
  "use strict";

  if (window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__) {
    return;
  }

  window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__ = true;

  var NAVIGATION_DEBOUNCE_MS = 150;
  var TRANSCRIPT_CACHE_TTL_MS = 24 * 60 * 60 * 1000;
  var TRANSCRIPT_REQUEST_TIMEOUT_MS = 8000;
  var TRANSCRIPT_PIPELINE_TIMEOUT_MS = 15000;
  var AVAILABILITY_TIMEOUT_MS = 8000;
  var STATE_RESPONSE_CACHE_WAIT_MS = 150;
  var STATE_RESPONSE_METADATA_WAIT_MS = 650;
  var STORAGE_OPERATION_TIMEOUT_MS = 500;
  var NATIVE_TRANSCRIPT_FALLBACK_TIMEOUT_MS = 8000;
  var CHANNEL_SCAN_DELAY_MS = 1000;
  var lastUrl = window.location.href;
  var currentVideoId = null;
  var renderTimerId = null;
  var availabilityRequestId = 0;
  var transcriptRequestId = 0;
  var currentCaptionTracks = [];
  var currentSelectedTrackIndex = -1;
  var currentAvailableLanguages = [];
  var currentTranscriptRows = [];
  var currentTranscriptApiKey = null;
  var currentCaptionSource = "";
  var currentTranscriptStatus = "checking";
  var currentTranscriptError = "";
  var currentPreferredTranscriptLanguageCode = "";
  var currentSelectionMode = "auto";
  var currentLanguageNotice = "";
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
  var channelScanRequestId = 0;
  var channelScanState = createInitialChannelScanState();

  function getYouTubeHelpers() {
    return window.YTTranscriptYouTube;
  }

  function getNavigationHelpers() {
    return window.YTTranscriptNavigation;
  }

  function getPageSupportHelpers() {
    return window.YTTranscriptPageSupport;
  }

  function getTranscriptHelpers() {
    return window.YTTranscriptTranscript;
  }

  function getChannelHelpers() {
    return window.YTTranscriptChannel;
  }

  function createInitialChannelScanState() {
    var channel = getChannelHelpers();

    if (channel && typeof channel.createChannelScanState === "function") {
      return channel.createChannelScanState();
    }

    return {
      channelUrl: "",
      channelName: "",
      channelAvatarUrl: "",
      discoveredVideos: [],
      processedVideoIds: {},
      queuedVideoIds: {},
      queue: [],
      successes: [],
      failures: [],
      currentVideo: null,
      preferredTranscriptLanguage: "",
      status: "idle",
    };
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

  function removePanel() {
    availabilityRequestId += 1;
    transcriptRequestId += 1;
    currentCaptionTracks = [];
    currentSelectedTrackIndex = -1;
    currentAvailableLanguages = [];
    currentTranscriptRows = [];
    currentTranscriptApiKey = null;
    currentCaptionSource = "";
    currentVideoId = null;
    currentTranscriptStatus = "checking";
    currentTranscriptError = "";
    currentPreferredTranscriptLanguageCode = "";
    currentSelectionMode = "auto";
    currentLanguageNotice = "";
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

  function getPageContext() {
    var pageSupport = getPageSupportHelpers();

    if (
      pageSupport &&
      typeof pageSupport.getPageContextFromUrl === "function"
    ) {
      return pageSupport.getPageContextFromUrl(window.location.href);
    }

    return {
      mode: currentVideoId ? "VIDEO_MODE" : "UNSUPPORTED_MODE",
      isYouTubePage: true,
    };
  }

  function getVisibleChannelVideos() {
    var channel = getChannelHelpers();

    if (!channel || typeof channel.extractVisibleChannelVideos !== "function") {
      return [];
    }

    return channel.extractVisibleChannelVideos(document, window.location.href);
  }

  function getCurrentChannelMetadata() {
    var channel = getChannelHelpers();

    if (
      !channel ||
      typeof channel.getChannelMetadataFromDocument !== "function"
    ) {
      return {
        channelName: "",
        channelAvatarUrl: "",
      };
    }

    return channel.getChannelMetadataFromDocument(document);
  }

  function resetChannelScanState() {
    channelScanRequestId += 1;
    channelScanState = createInitialChannelScanState();
  }

  function syncChannelScanContext() {
    var context = getPageContext();
    var metadata;

    if (context.mode !== "CHANNEL_MODE") {
      if (
        channelScanState.status !== "idle" ||
        channelScanState.discoveredVideos.length > 0
      ) {
        resetChannelScanState();
      }

      return context;
    }

    if (
      channelScanState.channelUrl &&
      channelScanState.channelUrl !== window.location.href
    ) {
      resetChannelScanState();
    }

    metadata = getCurrentChannelMetadata();
    channelScanState.channelUrl = window.location.href;
    channelScanState.channelName =
      metadata.channelName || channelScanState.channelName;
    channelScanState.channelAvatarUrl =
      metadata.channelAvatarUrl || channelScanState.channelAvatarUrl;

    return context;
  }

  function buildPageContextResponse() {
    var context = syncChannelScanContext();
    var videos;

    if (context.mode !== "CHANNEL_MODE") {
      return {
        mode: context.mode,
        isYouTubePage: context.isYouTubePage,
      };
    }

    videos = getVisibleChannelVideos();

    return {
      mode: context.mode,
      isYouTubePage: context.isYouTubePage,
      channelUrl: channelScanState.channelUrl,
      channelName: channelScanState.channelName,
      channelAvatarUrl: channelScanState.channelAvatarUrl,
      visibleVideoCount: videos.length,
    };
  }

  function buildChannelVideosResponse() {
    var context = syncChannelScanContext();
    var videos =
      context.mode === "CHANNEL_MODE" ? getVisibleChannelVideos() : [];

    return {
      mode: context.mode,
      channelUrl: channelScanState.channelUrl,
      channelName: channelScanState.channelName,
      channelAvatarUrl: channelScanState.channelAvatarUrl,
      videos: videos,
    };
  }

  function buildChannelScanStateResponse() {
    return {
      status: channelScanState.status,
      channelUrl: channelScanState.channelUrl,
      channelName: channelScanState.channelName,
      channelAvatarUrl: channelScanState.channelAvatarUrl,
      discoveredCount: channelScanState.discoveredVideos.length,
      queuedCount: channelScanState.queue.length,
      completedCount:
        channelScanState.successes.length + channelScanState.failures.length,
      successCount: channelScanState.successes.length,
      failureCount: channelScanState.failures.length,
      currentVideo: channelScanState.currentVideo,
    };
  }

  function buildChannelExportDataResponse() {
    return {
      channelUrl: channelScanState.channelUrl,
      channelName: channelScanState.channelName,
      channelAvatarUrl: channelScanState.channelAvatarUrl,
      status: channelScanState.status,
      discoveredCount: channelScanState.discoveredVideos.length,
      preferredTranscriptLanguage:
        channelScanState.preferredTranscriptLanguage || "",
      successes: channelScanState.successes.slice(),
      failures: channelScanState.failures.slice(),
    };
  }

  function notifyChannelScanStateChanged() {
    notifyRuntime({ type: "YT_CHANNEL_SCAN_STATE_CHANGED" });
  }

  function delay(ms) {
    return new Promise(function resolveAfterDelay(resolve) {
      window.setTimeout(resolve, ms);
    });
  }

  function addVisibleVideosToChannelScan() {
    var channel = getChannelHelpers();
    var videos = getVisibleChannelVideos();

    if (!channel || typeof channel.addVideosToScanState !== "function") {
      return [];
    }

    return channel.addVideosToScanState(channelScanState, videos);
  }

  function getChannelFailureReason(result) {
    return result && result.reason
      ? result.reason
      : "No YouTube transcript is available for this video.";
  }

  async function fetchChannelTranscript(video) {
    var transcript = getTranscriptHelpers();
    var fetchFn = createFetchWithTimeout(
      window.fetch ? window.fetch.bind(window) : null,
    );
    var trackSource;
    var preferredLanguageCode = "";
    var selectedTrack;
    var result;

    if (
      !transcript ||
      typeof transcript.getCaptionTracksFromWatchPageFetch !== "function" ||
      typeof transcript.fetchTranscriptRowsWithFallbacks !== "function"
    ) {
      return {
        ok: false,
        reason: "Transcript loading is not available in this build.",
      };
    }

    trackSource = await transcript.getCaptionTracksFromWatchPageFetch(
      video.videoId,
      fetchFn,
    );

    if (!trackSource || !trackSource.ok) {
      return {
        ok: false,
        reason: getChannelFailureReason(trackSource),
      };
    }

    if (
      typeof transcript.getPreferredTranscriptLanguage === "function"
    ) {
      preferredLanguageCode =
        (await transcript.getPreferredTranscriptLanguage()) || "";
    }
    channelScanState.preferredTranscriptLanguage = preferredLanguageCode;

    selectedTrack =
      typeof transcript.selectBestTranscriptTrack === "function"
        ? transcript.selectBestTranscriptTrack(
            trackSource.tracks,
            preferredLanguageCode,
            getBrowserLanguageCodes(),
          )
        : trackSource.tracks[0] || null;

    if (!selectedTrack) {
      return {
        ok: false,
        reason: "No caption tracks found",
      };
    }

    result = await transcript.fetchTranscriptRowsWithFallbacks({
      videoId: video.videoId,
      track: selectedTrack,
      tracks: trackSource.tracks,
      fetchFn: fetchFn,
      apiKey: trackSource.apiKey,
    });

    if (!result || !result.ok) {
      return {
        ok: false,
        reason: getChannelFailureReason(result),
      };
    }

    return {
      ok: true,
      rows: result.rows,
      transcriptLanguage: getTrackDisplayLabel(selectedTrack),
      source: result.source || trackSource.source || "",
    };
  }

  async function runChannelScan(requestId) {
    var channel = getChannelHelpers();

    if (!channel || typeof channel.runChannelScanQueue !== "function") {
      return;
    }

    await channel.runChannelScanQueue(channelScanState, {
      fetchTranscript: fetchChannelTranscript,
      delay: function delayBetweenVideos() {
        return delay(CHANNEL_SCAN_DELAY_MS);
      },
      onStateChange: notifyChannelScanStateChanged,
      shouldContinue: function shouldContinueChannelScan() {
        return (
          requestId === channelScanRequestId &&
          getPageContext().mode === "CHANNEL_MODE"
        );
      },
    });
  }

  function startChannelScan() {
    var context = syncChannelScanContext();
    var newVideos;

    if (context.mode !== "CHANNEL_MODE") {
      return buildChannelScanStateResponse();
    }

    newVideos = addVisibleVideosToChannelScan();

    if (channelScanState.status !== "scanning") {
      channelScanState.status = "scanning";
      channelScanRequestId += 1;
      notifyChannelScanStateChanged();
      runChannelScan(channelScanRequestId);
    } else if (newVideos.length > 0) {
      notifyChannelScanStateChanged();
    }

    return buildChannelScanStateResponse();
  }

  function cancelChannelScan() {
    var channel = getChannelHelpers();

    channelScanRequestId += 1;

    if (channel && typeof channel.cancelChannelScanState === "function") {
      channel.cancelChannelScanState(channelScanState);
    } else {
      channelScanState.status = "cancelled";
      channelScanState.currentVideo = null;
    }

    notifyChannelScanStateChanged();

    return buildChannelScanStateResponse();
  }

  function pauseChannelScan() {
    var channel = getChannelHelpers();

    if (channel && typeof channel.pauseChannelScanState === "function") {
      channel.pauseChannelScanState(channelScanState);
    } else if (channelScanState.status === "scanning") {
      channelScanState.status = "pausing";
    }

    notifyChannelScanStateChanged();
    return buildChannelScanStateResponse();
  }

  function resumeChannelScan() {
    var channel = getChannelHelpers();
    var context = syncChannelScanContext();

    if (context.mode !== "CHANNEL_MODE") {
      return buildChannelScanStateResponse();
    }

    addVisibleVideosToChannelScan();

    if (channel && typeof channel.resumeChannelScanState === "function") {
      channel.resumeChannelScanState(channelScanState);
    } else if (channelScanState.status === "paused") {
      channelScanState.status = "scanning";
    }

    if (channelScanState.status === "scanning") {
      channelScanRequestId += 1;
      notifyChannelScanStateChanged();
      runChannelScan(channelScanRequestId);
    }

    return buildChannelScanStateResponse();
  }

  function getSelectedTrack() {
    return currentCaptionTracks[currentSelectedTrackIndex] || null;
  }

  function getBrowserLanguageCodes() {
    var browserLanguages = [];

    if (window.navigator) {
      if (Array.isArray(window.navigator.languages)) {
        browserLanguages = browserLanguages.concat(window.navigator.languages);
      }

      if (window.navigator.language) {
        browserLanguages.push(window.navigator.language);
      }
    }

    return browserLanguages;
  }

  function getEffectiveTrackLanguageCode(track) {
    var transcript = getTranscriptHelpers();

    if (!track) {
      return "";
    }

    if (
      transcript &&
      typeof transcript.normalizeLanguageCode === "function"
    ) {
      return transcript.normalizeLanguageCode(
        track.isTranslated
          ? track.translationLanguageCode || track.languageCode
          : track.languageCode,
      );
    }

    return track.isTranslated
      ? track.translationLanguageCode || track.languageCode || ""
      : track.languageCode || "";
  }

  function getTrackDisplayLabel(track) {
    var transcript = getTranscriptHelpers();

    if (
      transcript &&
      typeof transcript.getTrackLabel === "function"
    ) {
      return transcript.getTrackLabel(track);
    }

    return (track && (track.label || track.languageCode)) || "";
  }

  function getLanguageNameForCode(languageCode) {
    var transcript = getTranscriptHelpers();

    if (
      transcript &&
      typeof transcript.getTrackLabel === "function"
    ) {
      return transcript.getTrackLabel({
        languageCode: languageCode,
        kind: "manual",
      });
    }

    return languageCode || "Unknown language";
  }

  function tracksMatchLanguage(track, languageCode) {
    var transcript = getTranscriptHelpers();
    var trackLanguageCode = getEffectiveTrackLanguageCode(track);
    var normalizedLanguageCode;

    if (!trackLanguageCode || !languageCode) {
      return false;
    }

    if (
      transcript &&
      typeof transcript.normalizeLanguageCode === "function" &&
      typeof transcript.getBaseLanguageCode === "function"
    ) {
      normalizedLanguageCode = transcript.normalizeLanguageCode(languageCode);

      return (
        trackLanguageCode === normalizedLanguageCode ||
        transcript.getBaseLanguageCode(trackLanguageCode) ===
          transcript.getBaseLanguageCode(normalizedLanguageCode)
      );
    }

    return trackLanguageCode === languageCode;
  }

  function hasEnglishTrack() {
    var transcript = getTranscriptHelpers();

    if (
      transcript &&
      typeof transcript.isEnglishTrack === "function"
    ) {
      return currentCaptionTracks.some(transcript.isEnglishTrack);
    }

    return currentCaptionTracks.some(function findEnglishTrack(track) {
      return getEffectiveTrackLanguageCode(track).split("-")[0] === "en";
    });
  }

  function getUniqueTrackLanguageCount() {
    var seen = {};
    var count = 0;

    currentCaptionTracks.forEach(function countLanguage(track) {
      var languageCode = getEffectiveTrackLanguageCode(track);

      if (!languageCode || seen[languageCode]) {
        return;
      }

      seen[languageCode] = true;
      count += 1;
    });

    return count;
  }

  function buildLanguageNotice(preferredLanguageCode, selectedTrack) {
    var selectedLanguageName;

    if (!selectedTrack) {
      return "";
    }

    selectedLanguageName = getLanguageNameForCode(
      getEffectiveTrackLanguageCode(selectedTrack),
    );

    if (
      preferredLanguageCode &&
      !tracksMatchLanguage(selectedTrack, preferredLanguageCode)
    ) {
      return (
        getLanguageNameForCode(preferredLanguageCode) +
        " unavailable. Showing " +
        selectedLanguageName +
        "."
      );
    }

    if (!hasEnglishTrack() && !tracksMatchLanguage(selectedTrack, "en")) {
      return getUniqueTrackLanguageCount() === 1
        ? "English transcript unavailable. Showing " +
            selectedLanguageName +
            "."
        : "English unavailable. Showing " + selectedLanguageName + ".";
    }

    return "";
  }

  function findTrackIndex(track) {
    return currentCaptionTracks.indexOf(track);
  }

  async function selectBestTrackForCurrentVideo() {
    var transcript = getTranscriptHelpers();
    var selectionVideoId = currentVideoId;
    var preferredLanguageCode = "";
    var selectedTrack;

    if (
      transcript &&
      typeof transcript.getPreferredTranscriptLanguage === "function"
    ) {
      preferredLanguageCode =
        (await transcript.getPreferredTranscriptLanguage()) || "";
    }

    if (selectionVideoId !== currentVideoId) {
      return null;
    }

    currentPreferredTranscriptLanguageCode = preferredLanguageCode;
    currentSelectionMode = preferredLanguageCode ? "preferred" : "auto";

    selectedTrack =
      transcript &&
      typeof transcript.selectBestTranscriptTrack === "function"
        ? transcript.selectBestTranscriptTrack(
            currentCaptionTracks,
            preferredLanguageCode,
            getBrowserLanguageCodes(),
          )
        : null;

    currentSelectedTrackIndex = findTrackIndex(selectedTrack);
    currentLanguageNotice = buildLanguageNotice(
      preferredLanguageCode,
      selectedTrack,
    );

    return selectedTrack;
  }

  async function selectTranscriptTrackByIndex(trackIndex) {
    var transcript = getTranscriptHelpers();
    var nextTrackIndex = Number(trackIndex);
    var selectedTrack;
    var preferredLanguageCode;

    if (
      !Number.isInteger(nextTrackIndex) ||
      nextTrackIndex < 0 ||
      nextTrackIndex >= currentCaptionTracks.length
    ) {
      return false;
    }

    currentSelectedTrackIndex = nextTrackIndex;
    selectedTrack = getSelectedTrack();
    preferredLanguageCode = getEffectiveTrackLanguageCode(selectedTrack);
    currentPreferredTranscriptLanguageCode = preferredLanguageCode;
    currentSelectionMode = "preferred";
    currentLanguageNotice = "";

    if (
      transcript &&
      typeof transcript.savePreferredTranscriptLanguage === "function"
    ) {
      await transcript.savePreferredTranscriptLanguage(preferredLanguageCode);
    }

    fetchAndRenderSelectedTranscript();
    notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
    return true;
  }

  async function selectAutomaticTranscriptTrack() {
    var transcript = getTranscriptHelpers();
    var selectedTrack;

    currentPreferredTranscriptLanguageCode = "";
    currentSelectionMode = "auto";

    if (
      transcript &&
      typeof transcript.clearPreferredTranscriptLanguage === "function"
    ) {
      await transcript.clearPreferredTranscriptLanguage();
    }

    selectedTrack =
      transcript &&
      typeof transcript.selectBestTranscriptTrack === "function"
        ? transcript.selectBestTranscriptTrack(
            currentCaptionTracks,
            "",
            getBrowserLanguageCodes(),
          )
        : null;

    currentSelectedTrackIndex = findTrackIndex(selectedTrack);
    currentLanguageNotice = buildLanguageNotice("", selectedTrack);

    fetchAndRenderSelectedTranscript();
    notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
    return Boolean(selectedTrack);
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

  function createCacheKey(videoId, track) {
    var transcript = getTranscriptHelpers();

    if (
      transcript &&
      typeof transcript.createTranscriptCacheKey === "function"
    ) {
      return transcript.createTranscriptCacheKey(videoId, track);
    }

    return [
      "transcript",
      videoId || "",
      track && track.isTranslated
        ? track.sourceLanguageCode || track.languageCode || "auto"
        : track && track.languageCode
          ? track.languageCode
          : "auto",
      track && track.vssId ? track.vssId : "none",
      track && track.kind ? track.kind : "none",
      track && track.isTranslated ? "translated" : "direct",
      track && track.isTranslated
        ? track.translationLanguageCode || track.languageCode || "none"
        : "none",
      "",
    ].join(":");
  }

  function getCacheKeyForTrack(videoId, track) {
    return createCacheKey(videoId, track);
  }

  async function readTranscriptCache(cacheKey) {
    var storageArea = getTranscriptStorageArea();
    var transcript = getTranscriptHelpers();
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

  function getTrackDebugBaseUrl(track) {
    var url;
    var lang;
    var targetLanguage;

    if (!track || !track.baseUrl) {
      return "unknown";
    }

    try {
      url = new URL(track.baseUrl);
      lang = url.searchParams.get("lang") || "";
      targetLanguage = url.searchParams.get("tlang") || "";

      return (
        url.origin +
        url.pathname +
        "?lang=" +
        (lang || "unknown") +
        (targetLanguage ? "&tlang=" + targetLanguage : "")
      );
    } catch (error) {
      return "unparseable";
    }
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
    currentTranscriptTitle = title || currentTranscriptTitle;
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

    if (!entry || !Array.isArray(entry.rows) || entry.rows.length === 0) {
      return false;
    }

    if (currentCaptionTracks.length === 0) {
      currentCaptionTracks = Array.isArray(entry.tracks) ? entry.tracks : [];
    }

    if (currentAvailableLanguages.length === 0) {
      currentAvailableLanguages = Array.isArray(entry.availableLanguages)
        ? entry.availableLanguages
        : [];
    }

    currentTranscriptRows = entry.rows;
    currentTranscriptStatus = "loaded";
    currentTranscriptError = "";
    currentCaptionSource = entry.source || "cache";
    logTranscriptDebug("Transcript rows loaded from cache key: " + cacheResult.key);

    updateTranscriptTitle(entry.title);

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
    var cacheKey = getCacheKeyForTrack(currentVideoId, selectedTrack);
    var debugOptions = getTranscriptDebugOptions();
    var performanceLogger = createPerformanceLogger(currentVideoId);

    transcriptRequestId = requestId;
    currentTranscriptRows = [];
    currentTranscriptStatus = "loading";
    currentTranscriptError = "";

    currentPrefetchPromise = (async function loadTranscriptRows() {
      var cachedTranscript;
      var fetchStartTime;
      var result;
      var cacheEntry;
      if (!selectedTrack) {
        currentTranscriptStatus = "unavailable";
        currentTranscriptError = "No transcript available for this video";
        notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
        return null;
      }

      if (!safeOptions.skipCacheRead) {
        currentCacheReadPromise = readTranscriptCache(cacheKey);
        cachedTranscript = await currentCacheReadPromise;

        if (requestId !== transcriptRequestId) {
          return null;
        }

        if (cachedTranscript && applyCachedTranscript(cachedTranscript)) {
          return cachedTranscript;
        }
      }

      logTranscriptDebug("Selected video ID: " + (currentVideoId || "unknown"));
      logTranscriptDebug("Selected track index: " + currentSelectedTrackIndex);
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
      logTranscriptDebug(
        "Selected caption track URL: " + getTrackDebugBaseUrl(selectedTrack),
      );

      if (
        !transcript ||
        typeof transcript.fetchTranscriptRowsWithFallbacks !== "function"
      ) {
        currentTranscriptStatus = "error";
        currentTranscriptError = "Transcript loading is not available in this build.";
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
          notifyRuntime({ type: "YT_TRANSCRIPT_STATE_CHANGED" });
          return null;
        }

        currentTranscriptStatus = "loaded";
        currentTranscriptError = "";
        currentCaptionSource = result.source || currentCaptionSource;
        logTranscriptDebug("Transcript rows loaded from: " + result.source);
        currentTranscriptRows = result.rows;
        markFirstTranscriptRender(currentCaptionSource || "render");

        cacheEntry = createTranscriptCacheEntry(
          result.rows,
          selectedTrack,
          result.source,
        );
        await writeTranscriptCache(cacheKey, cacheEntry);

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

  async function applyTranscriptAvailabilityResult(result, options) {
    var safeResult = result || {};
    var safeOptions = options || {};
    var status = safeResult.status || "failed";
    var preserveTranscriptRows = safeOptions.preserveTranscriptRows === true;

    if (status === "checking") {
      currentCaptionTracks = [];
      currentSelectedTrackIndex = -1;
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "checking";
      currentLanguageNotice = "";
      transcriptRequestId += 1;
    } else if (status === "available") {
      currentCaptionTracks = Array.isArray(safeResult.tracks)
        ? safeResult.tracks
        : [];
      currentAvailableLanguages = Array.isArray(safeResult.languages)
        ? safeResult.languages
        : [];
      currentTranscriptApiKey = safeResult.apiKey || null;
      currentCaptionSource = safeResult.source || "";
      await selectBestTrackForCurrentVideo();
      if (preserveTranscriptRows && currentTranscriptRows.length > 0) {
        currentTranscriptStatus = "loaded";
      } else {
        currentTranscriptRows = [];
        currentTranscriptStatus = "loading";
      }
    } else if (status === "unavailable") {
      currentCaptionTracks = [];
      currentSelectedTrackIndex = -1;
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "unavailable";
      currentLanguageNotice = "";
      transcriptRequestId += 1;
    } else {
      currentCaptionTracks = [];
      currentSelectedTrackIndex = -1;
      currentAvailableLanguages = [];
      currentTranscriptRows = [];
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      currentTranscriptStatus = "error";
      currentLanguageNotice = "";
      transcriptRequestId += 1;
    }

    if (status === "available" && !preserveTranscriptRows) {
      fetchAndRenderSelectedTranscript();
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

    currentCacheReadPromise = null;
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
      var result;

      if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
        return null;
      }

      try {
        result = await availabilityPromise;

        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return null;
        }

        await applyTranscriptAvailabilityResult(result);
        return result;
      } catch (error) {
        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return null;
        }

        await applyTranscriptAvailabilityResult({
          status: "failed",
          message: "Transcript detection failed",
          tracks: [],
          languages: [],
        });

        return null;
      }
    })();
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
      captionLabel: selectedTrack ? getTrackDisplayLabel(selectedTrack) : "",
      status: metadataReady ? currentTranscriptStatus : "loading",
      error: currentTranscriptError,
      rows: metadataReady ? currentTranscriptRows : [],
      tracks: currentCaptionTracks,
      availableLanguages: currentAvailableLanguages,
      selectedTrackIndex: currentSelectedTrackIndex,
      selectionMode: currentSelectionMode,
      languageNotice: currentLanguageNotice,
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

    if (message.type === "PING") {
      sendResponse({ ok: true });
      return true;
    }

    if (message.type === "GET_PAGE_CONTEXT") {
      sendResponse(buildPageContextResponse());
      return true;
    }

    if (message.type === "GET_CHANNEL_VIDEOS") {
      sendResponse(buildChannelVideosResponse());
      return true;
    }

    if (message.type === "SCAN_CHANNEL_TRANSCRIPTS") {
      sendResponse(startChannelScan());
      return true;
    }

    if (message.type === "GET_CHANNEL_SCAN_STATE") {
      sendResponse(buildChannelScanStateResponse());
      return true;
    }

    if (message.type === "GET_CHANNEL_EXPORT_DATA") {
      sendResponse(buildChannelExportDataResponse());
      return true;
    }

    if (message.type === "PAUSE_CHANNEL_SCAN") {
      sendResponse(pauseChannelScan());
      return true;
    }

    if (message.type === "RESUME_CHANNEL_SCAN") {
      sendResponse(resumeChannelScan());
      return true;
    }

    if (message.type === "CANCEL_CHANNEL_SCAN") {
      sendResponse(cancelChannelScan());
      return true;
    }

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

    if (message.type === "SET_TRANSCRIPT_TRACK") {
      selectTranscriptTrackByIndex(message.trackIndex).then(function handleTrackSelection(success) {
        sendResponse({ success: success });
      });
      return true;
    }

    if (message.type === "SET_TRANSCRIPT_MODE_AUTO") {
      selectAutomaticTranscriptTrack().then(function handleAutomaticSelection(success) {
        sendResponse({ success: success });
      });
      return true;
    }

  });

  listenForYouTubeNavigation();
  renderForCurrentPage();
})();
