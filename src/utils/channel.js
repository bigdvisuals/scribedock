(function attachChannelHelpers(root) {
  "use strict";

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function isDurationText(value) {
    return /^\d{1,2}:\d{2}(?::\d{2})?$/.test(normalizeText(value));
  }

  function cleanVideoTitle(value) {
    var title = normalizeText(value);

    if (!title || isDurationText(title)) {
      return "";
    }

    return title;
  }

  var CHANNEL_VIDEO_CANDIDATE_SELECTOR = [
    'a[href*="/watch?v="]',
    'a[href*="/shorts/"]'
  ].join(", ");
  var CHANNEL_VIDEO_CARD_SELECTOR =
    "ytd-rich-item-renderer, ytd-rich-grid-media, ytd-rich-grid-slim-media, ytd-grid-video-renderer, ytd-video-renderer";
  var CHANNEL_ACTIVE_TAB_SELECTOR = [
    'yt-tab-shape[aria-selected="true"]',
    'yt-tab-shape[aria-current="page"]',
    "yt-tab-shape[selected]",
    "yt-tab-shape[tab-title].yt-tab-shape-wiz__tab--tab-selected",
    'tp-yt-paper-tab[aria-selected="true"]',
    "tp-yt-paper-tab.iron-selected",
    '[role="tab"][aria-selected="true"]',
    '[role="tab"][aria-current="page"]'
  ].join(", ");

  function normalizeAnchorUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).toString();
    } catch (error) {
      return "";
    }
  }

  function getVideoInfoFromUrl(urlValue) {
    var youtube = root.YTTranscriptYouTube;
    var url;
    var videoId;
    var pathParts;

    if (!youtube || typeof youtube.getVideoIdFromUrl !== "function") {
      return null;
    }

    videoId = youtube.getVideoIdFromUrl(urlValue);

    if (!videoId) {
      return null;
    }

    try {
      url = new URL(urlValue);
      pathParts = url.pathname.split("/").filter(Boolean);
    } catch (error) {
      return null;
    }

    return {
      videoId: videoId,
      isShort: pathParts[0] === "shorts"
    };
  }

  function getChannelTabFromUrl(urlValue) {
    var url;
    var pathParts;

    try {
      url = new URL(urlValue);
      pathParts = url.pathname.split("/").filter(Boolean);
    } catch (error) {
      return "videos";
    }

    return pathParts[1] === "shorts" ? "shorts" : "videos";
  }

  function getChannelContentRoot(documentValue) {
    return queryFirst(documentValue, [
      "ytd-browse[page-subtype=\"channels\"]",
      "ytd-browse",
      "ytd-rich-grid-renderer",
      "ytd-two-column-browse-results-renderer",
      "#contents"
    ]) || documentValue;
  }

  function getChannelVideoLinkSelector(channelTab) {
    return channelTab === "shorts"
      ? 'a[href*="/shorts/"]'
      : 'a[href*="/watch?v="]';
  }

  function queryVideoAnchors(rootValue, selector) {
    if (!rootValue || typeof rootValue.querySelectorAll !== "function") {
      return [];
    }

    try {
      return Array.prototype.slice.call(rootValue.querySelectorAll(selector));
    } catch (error) {
      return [];
    }
  }

  function getChannelVideoAnchors(documentValue, channelTab) {
    var selector = getChannelVideoLinkSelector(channelTab);
    var contentRoot = getChannelContentRoot(documentValue);
    var anchors = queryVideoAnchors(contentRoot, selector);

    if (anchors.length === 0 && contentRoot !== documentValue) {
      anchors = queryVideoAnchors(documentValue, selector);
    }

    return anchors;
  }

  function matchesChannelTab(videoInfo, channelTab) {
    if (!videoInfo) {
      return false;
    }

    return channelTab === "shorts" ? videoInfo.isShort : !videoInfo.isShort;
  }

  function getActiveChannelTabFromDocument(documentValue) {
    var activeTab;
    var label;

    if (!documentValue || typeof documentValue.querySelector !== "function") {
      return "";
    }

    activeTab = documentValue.querySelector(CHANNEL_ACTIVE_TAB_SELECTOR);

    if (!activeTab) {
      return "";
    }

    label = normalizeText(
      (typeof activeTab.getAttribute === "function" &&
        (activeTab.getAttribute("tab-title") ||
          activeTab.getAttribute("title") ||
          activeTab.getAttribute("aria-label"))) ||
        activeTab.textContent ||
        ""
    ).toLowerCase();

    if (label.indexOf("shorts") !== -1) {
      return "shorts";
    }

    if (label.indexOf("videos") !== -1) {
      return "videos";
    }

    return "";
  }

  function getAnchorCard(anchor) {
    return anchor && typeof anchor.closest === "function"
      ? anchor.closest(CHANNEL_VIDEO_CARD_SELECTOR)
      : null;
  }

  function getAnchorTitle(anchor, card) {
    var titleElement;

    if (!anchor) {
      return "";
    }

    titleElement =
      card && typeof card.querySelector === "function"
        ? card.querySelector(
            "#video-title, #video-title-link, a#video-title-link, yt-formatted-string#video-title",
          )
        : null;

    return cleanVideoTitle(
      (titleElement &&
        typeof titleElement.getAttribute === "function" &&
        titleElement.getAttribute("title")) ||
      (titleElement && titleElement.textContent) ||
      (typeof anchor.getAttribute === "function" && anchor.getAttribute("title")) ||
      (typeof anchor.getAttribute === "function" && anchor.getAttribute("aria-label")) ||
      anchor.textContent ||
      ""
    );
  }

  function getAnchorThumbnailUrl(anchor, card) {
    var image = card && typeof card.querySelector === "function"
      ? card.querySelector("img")
      : null;

    if (!image && anchor && typeof anchor.querySelector === "function") {
      image = anchor.querySelector("img");
    }

    return image && (image.currentSrc || image.src) ? image.currentSrc || image.src : "";
  }

  function extractVisibleChannelVideos(documentValue, baseUrl) {
    var channelTab = getChannelTabFromUrl(baseUrl);
    var anchors = getChannelVideoAnchors(documentValue, channelTab);
    var seenVideoIds = {};
    var videos = [];

    anchors.forEach(function addAnchor(anchor) {
      var href = anchor && typeof anchor.getAttribute === "function"
        ? anchor.getAttribute("href")
        : "";
      var url = normalizeAnchorUrl(href, baseUrl);
      var info = getVideoInfoFromUrl(url);
      var card = getAnchorCard(anchor);

      if (
        !info ||
        !matchesChannelTab(info, channelTab) ||
        seenVideoIds[info.videoId]
      ) {
        return;
      }

      seenVideoIds[info.videoId] = true;
      videos.push({
        videoId: info.videoId,
        url: url,
        title: getAnchorTitle(anchor, card),
        thumbnailUrl: getAnchorThumbnailUrl(anchor, card),
        isShort: info.isShort
      });
    });

    return videos;
  }

  function mergeChannelVideos(state, videos) {
    var safeState = state || {};
    var discoveredVideos = Array.isArray(safeState.discoveredVideos)
      ? safeState.discoveredVideos.slice()
      : [];
    var processedVideoIds = safeState.processedVideoIds || {};
    var queuedVideoIds = safeState.queuedVideoIds || {};
    var seenVideoIds = {};
    var newVideos = [];

    discoveredVideos.forEach(function rememberVideo(video) {
      if (video && video.videoId) {
        seenVideoIds[video.videoId] = true;
      }
    });

    (Array.isArray(videos) ? videos : []).forEach(function mergeVideo(video) {
      if (!video || !video.videoId || seenVideoIds[video.videoId]) {
        return;
      }

      seenVideoIds[video.videoId] = true;
      discoveredVideos.push(video);

      if (!processedVideoIds[video.videoId] && !queuedVideoIds[video.videoId]) {
        newVideos.push(video);
      }
    });

    return {
      discoveredVideos: discoveredVideos,
      newVideos: newVideos
    };
  }

  function createChannelScanState() {
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
      status: "idle"
    };
  }

  function addVideosToScanState(state, videos) {
    var safeState = state || createChannelScanState();
    var merged = mergeChannelVideos(safeState, videos);

    safeState.discoveredVideos = merged.discoveredVideos;
    merged.newVideos.forEach(function queueVideo(video) {
      safeState.queuedVideoIds[video.videoId] = true;
      safeState.queue.push(video);
    });

    return merged.newVideos;
  }

  function cancelChannelScanState(state) {
    var safeState = state || createChannelScanState();

    safeState.status = "cancelled";
    safeState.currentVideo = null;

    return safeState;
  }

  function pauseChannelScanState(state) {
    var safeState = state || createChannelScanState();

    if (safeState.status === "scanning") {
      safeState.status = "pausing";
    }

    return safeState;
  }

  function resumeChannelScanState(state) {
    var safeState = state || createChannelScanState();

    if (safeState.status === "paused") {
      safeState.status = "scanning";
    }

    return safeState;
  }

  function getChannelFailureReason(result) {
    return result && result.reason
      ? result.reason
      : "No YouTube transcript is available for this video.";
  }

  function addChannelScanResult(state, video, result) {
    state.processedVideoIds[video.videoId] = true;

    if (result && result.ok) {
      state.successes.push({
        videoId: video.videoId,
        title: video.title || "",
        url: video.url || "",
        rows: result.rows,
        transcriptLanguage: result.transcriptLanguage || "",
        source: result.source || ""
      });
      return;
    }

    state.failures.push({
      videoId: video.videoId,
      title: video.title || "",
      url: video.url || "",
      reason: getChannelFailureReason(result)
    });
  }

  async function runChannelScanQueue(state, options) {
    var safeState = state || createChannelScanState();
    var safeOptions = options || {};
    var fetchTranscript = safeOptions.fetchTranscript;
    var onStateChange = safeOptions.onStateChange || function noop() {};
    var delay = safeOptions.delay || function noDelay() {
      return Promise.resolve();
    };
    var shouldContinue = safeOptions.shouldContinue || function alwaysContinue() {
      return true;
    };
    var video;
    var result;

    if (typeof fetchTranscript !== "function") {
      throw new Error("fetchTranscript is required");
    }

    while (
      safeState.status === "scanning" &&
      safeState.queue.length > 0 &&
      shouldContinue()
    ) {
      video = safeState.queue.shift();

      if (!video || safeState.processedVideoIds[video.videoId]) {
        continue;
      }

      delete safeState.queuedVideoIds[video.videoId];
      safeState.currentVideo = video;
      onStateChange();

      try {
        result = await fetchTranscript(video);
      } catch (error) {
        result = {
          ok: false,
          reason: error && error.message ? error.message : "Transcript fetch failed"
        };
      }

      if (!shouldContinue() || safeState.status === "cancelled") {
        return safeState;
      }

      addChannelScanResult(safeState, video, result);
      safeState.currentVideo = null;

      if (safeState.status === "pausing") {
        safeState.status = "paused";
        onStateChange();
        return safeState;
      }

      onStateChange();

      if (safeState.queue.length > 0) {
        await delay();
      }
    }

    if (safeState.status === "pausing") {
      safeState.currentVideo = null;
      safeState.status = "paused";
      onStateChange();
    } else if (safeState.status === "scanning" && shouldContinue()) {
      safeState.currentVideo = null;
      safeState.status = "completed";
      onStateChange();
    }

    return safeState;
  }

  function queryFirst(documentValue, selectors) {
    var index;
    var found;

    if (!documentValue || typeof documentValue.querySelector !== "function") {
      return null;
    }

    for (index = 0; index < selectors.length; index += 1) {
      found = documentValue.querySelector(selectors[index]);

      if (found) {
        return found;
      }
    }

    return null;
  }

  function isValidAvatarUrl(urlValue) {
    var value = String(urlValue || "").trim();

    if (!value) {
      return false;
    }

    if (/^data:|^blob:/i.test(value)) {
      return false;
    }

    return value.indexOf("i.ytimg.com") === -1;
  }

  function getAvatarUrlFromImage(image) {
    if (!image) {
      return "";
    }

    if (isValidAvatarUrl(image.currentSrc)) {
      return image.currentSrc;
    }

    if (isValidAvatarUrl(image.src)) {
      return image.src;
    }

    return "";
  }

  function getChannelAvatarUrlFromDocument(documentValue) {
    var selectors = [
      "yt-page-header-renderer #avatar img",
      "yt-page-header-renderer yt-avatar-shape img",
      "yt-page-header-renderer yt-decorated-avatar-view-model img",
      "yt-page-header-renderer yt-img-shadow img",
      "ytd-c4-tabbed-header-renderer #avatar img",
      "ytd-c4-tabbed-header-renderer yt-avatar-shape img",
      "ytd-c4-tabbed-header-renderer yt-img-shadow img",
      "ytd-channel-header-renderer #avatar img",
      "ytd-channel-header-renderer yt-avatar-shape img",
      "ytd-channel-header-renderer yt-img-shadow img",
      "#channel-header img",
      "#page-header #avatar img",
      "#page-header yt-avatar-shape img"
    ];
    var index;
    var image;
    var avatarUrl;

    if (!documentValue || typeof documentValue.querySelector !== "function") {
      return "";
    }

    for (index = 0; index < selectors.length; index += 1) {
      image = documentValue.querySelector(selectors[index]);
      avatarUrl = getAvatarUrlFromImage(image);

      if (avatarUrl) {
        return avatarUrl;
      }
    }

    return "";
  }

  function getChannelMetadataFromDocument(documentValue) {
    var titleElement = queryFirst(documentValue, [
      "yt-page-header-renderer h1",
      "yt-page-header-renderer #page-header #title",
      "yt-page-header-renderer [role=\"heading\"]",
      "yt-page-header-renderer #title",
      "ytd-channel-header-renderer #channel-name #text",
      "ytd-channel-header-renderer #channel-name",
      "ytd-c4-tabbed-header-renderer #channel-name"
    ]);

    return {
      channelName: normalizeText(titleElement && titleElement.textContent),
      channelAvatarUrl: getChannelAvatarUrlFromDocument(documentValue)
    };
  }

  function getChannelPageReadiness(documentValue, baseUrl) {
    var metadata = getChannelMetadataFromDocument(documentValue);
    var expectedTab = getChannelTabFromUrl(baseUrl);
    var activeTab = getActiveChannelTabFromDocument(documentValue);
    var visibleVideos = extractVisibleChannelVideos(documentValue, baseUrl);
    var channelNameFound = Boolean(metadata.channelName);
    var hasExpectedActiveTab = activeTab === expectedTab;
    var validCardsFound = visibleVideos.length > 0;

    return {
      channelName: metadata.channelName,
      channelAvatarUrl: metadata.channelAvatarUrl,
      expectedTab: expectedTab,
      activeTab: activeTab,
      hasChannelHeader: channelNameFound,
      hasExpectedActiveTab: hasExpectedActiveTab,
      channelNameFound: channelNameFound,
      expectedTabFound: hasExpectedActiveTab,
      validCardsFound: validCardsFound,
      visibleVideoCount: visibleVideos.length,
      urlTabType: expectedTab,
      activeTabType: activeTab,
      visibleVideos: visibleVideos,
      isReady:
        channelNameFound &&
        validCardsFound
    };
  }

  var api = {
    addVideosToScanState: addVideosToScanState,
    cancelChannelScanState: cancelChannelScanState,
    cleanVideoTitle: cleanVideoTitle,
    createChannelScanState: createChannelScanState,
    extractVisibleChannelVideos: extractVisibleChannelVideos,
    getActiveChannelTabFromDocument: getActiveChannelTabFromDocument,
    getChannelPageReadiness: getChannelPageReadiness,
    getChannelMetadataFromDocument: getChannelMetadataFromDocument,
    mergeChannelVideos: mergeChannelVideos,
    pauseChannelScanState: pauseChannelScanState,
    resumeChannelScanState: resumeChannelScanState,
    runChannelScanQueue: runChannelScanQueue
  };

  root.YTTranscriptChannel = api;

  if (typeof module !== "undefined" && module.exports) {
    root.YTTranscriptYouTube = root.YTTranscriptYouTube || require("./youtube.js");
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
