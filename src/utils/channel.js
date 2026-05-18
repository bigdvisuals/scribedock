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

  function getAnchorTitle(anchor) {
    var card;
    var titleElement;

    if (!anchor) {
      return "";
    }

    card =
      typeof anchor.closest === "function"
        ? anchor.closest(
            "ytd-rich-item-renderer, ytd-rich-grid-media, ytd-rich-grid-slim-media, ytd-grid-video-renderer",
          )
        : null;
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

  function getAnchorThumbnailUrl(anchor) {
    var image = anchor && typeof anchor.querySelector === "function"
      ? anchor.querySelector("img")
      : null;

    return image && (image.currentSrc || image.src) ? image.currentSrc || image.src : "";
  }

  function extractVisibleChannelVideos(documentValue, baseUrl) {
    var anchors = documentValue && typeof documentValue.querySelectorAll === "function"
      ? Array.prototype.slice.call(documentValue.querySelectorAll("a[href]"))
      : [];
    var seenVideoIds = {};
    var videos = [];

    anchors.forEach(function addAnchor(anchor) {
      var href = anchor && typeof anchor.getAttribute === "function"
        ? anchor.getAttribute("href")
        : "";
      var url = normalizeAnchorUrl(href, baseUrl);
      var info = getVideoInfoFromUrl(url);
      var card =
        anchor && typeof anchor.closest === "function"
          ? anchor.closest(
              "ytd-rich-item-renderer, ytd-rich-grid-media, ytd-rich-grid-slim-media, ytd-grid-video-renderer",
            )
          : null;

      if (
        !info ||
        (typeof anchor.closest === "function" && !card) ||
        seenVideoIds[info.videoId]
      ) {
        return;
      }

      seenVideoIds[info.videoId] = true;
      videos.push({
        videoId: info.videoId,
        url: url,
        title: getAnchorTitle(anchor),
        thumbnailUrl: getAnchorThumbnailUrl(anchor),
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

    if (safeState.status === "scanning" && shouldContinue()) {
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

  function getChannelMetadataFromDocument(documentValue) {
    var titleElement = queryFirst(documentValue, [
      "ytd-channel-name #text, #channel-name #text, yt-page-header-renderer #page-header #title",
      "yt-page-header-renderer h1",
      "ytd-c4-tabbed-header-renderer #channel-name"
    ]);
    var avatarElement = queryFirst(documentValue, [
      "yt-page-header-renderer #avatar img",
      "ytd-c4-tabbed-header-renderer #avatar img",
      "ytd-channel-header-renderer #avatar img",
      "#page-header #avatar img",
      "#avatar img",
      "yt-img-shadow img"
    ]);

    return {
      channelName: normalizeText(titleElement && titleElement.textContent),
      channelAvatarUrl: avatarElement && (avatarElement.currentSrc || avatarElement.src)
        ? avatarElement.currentSrc || avatarElement.src
        : ""
    };
  }

  var api = {
    addVideosToScanState: addVideosToScanState,
    cancelChannelScanState: cancelChannelScanState,
    cleanVideoTitle: cleanVideoTitle,
    createChannelScanState: createChannelScanState,
    extractVisibleChannelVideos: extractVisibleChannelVideos,
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
