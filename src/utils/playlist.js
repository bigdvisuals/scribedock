(function attachPlaylistHelpers(root) {
  "use strict";

  var PLAYLIST_ROOT_SELECTOR = [
    "ytd-playlist-video-list-renderer",
    "ytd-playlist-panel-renderer",
    "#playlist",
    "ytd-playlist-panel-video-renderer"
  ].join(", ");
  var PLAYLIST_VIDEO_LINK_SELECTOR = 'a[href*="/watch?v="]';
  var PLAYLIST_VIDEO_CARD_SELECTOR = [
    "ytd-playlist-video-renderer",
    "ytd-playlist-panel-video-renderer",
    "yt-lockup-view-model",
    "ytd-video-renderer"
  ].join(", ");

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function normalizeAnchorUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).toString();
    } catch (error) {
      return "";
    }
  }

  function getPlaylistIdFromUrl(urlValue) {
    var url;

    try {
      url = new URL(urlValue);
    } catch (error) {
      return "";
    }

    return url.searchParams.get("list") || "";
  }

  function detectPlaylistPage(urlValue) {
    return Boolean(getPlaylistIdFromUrl(urlValue));
  }

  function getVideoIdFromUrl(urlValue) {
    var youtube = root.YTTranscriptYouTube;

    if (!youtube || typeof youtube.getVideoIdFromUrl !== "function") {
      return null;
    }

    return youtube.getVideoIdFromUrl(urlValue);
  }

  function getPlaylistRoots(documentValue) {
    var roots = [];
    var firstRoot;

    if (!documentValue || typeof documentValue.querySelector !== "function") {
      return roots;
    }

    firstRoot = documentValue.querySelector(PLAYLIST_ROOT_SELECTOR);

    if (firstRoot) {
      roots.push(firstRoot);
    }

    roots.push(documentValue);
    return roots;
  }

  function queryVideoAnchors(rootValue) {
    if (!rootValue || typeof rootValue.querySelectorAll !== "function") {
      return [];
    }

    try {
      return Array.prototype.slice.call(
        rootValue.querySelectorAll(PLAYLIST_VIDEO_LINK_SELECTOR)
      );
    } catch (error) {
      return [];
    }
  }

  function isPlaylistLinkForCurrentPage(urlValue, playlistId) {
    var linkPlaylistId = getPlaylistIdFromUrl(urlValue);

    if (!playlistId) {
      return Boolean(linkPlaylistId);
    }

    return linkPlaylistId === playlistId;
  }

  function getPlaylistIndexFromUrl(urlValue, fallbackIndex) {
    var url;
    var parsedIndex;

    try {
      url = new URL(urlValue);
      parsedIndex = Number(url.searchParams.get("index"));
    } catch (error) {
      parsedIndex = 0;
    }

    return Number.isFinite(parsedIndex) && parsedIndex > 0
      ? parsedIndex
      : fallbackIndex;
  }

  function cleanVideoTitle(value) {
    var title = normalizeText(value);

    if (/^\d{1,2}:\d{2}(?::\d{2})?$/.test(title)) {
      return "";
    }

    return title;
  }

  function getAnchorTitle(anchor, card) {
    var titleElement = card && typeof card.querySelector === "function"
      ? card.querySelector(
          "#video-title, #video-title-link, a#video-title-link, yt-formatted-string#video-title, .title"
        )
      : null;

    return cleanVideoTitle(
      (titleElement &&
        typeof titleElement.getAttribute === "function" &&
        titleElement.getAttribute("title")) ||
      (titleElement && titleElement.textContent) ||
      (anchor &&
        typeof anchor.getAttribute === "function" &&
        (anchor.getAttribute("title") || anchor.getAttribute("aria-label"))) ||
      (anchor && anchor.textContent) ||
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

    return image && (image.currentSrc || image.src)
      ? image.currentSrc || image.src
      : "";
  }

  function extractPlaylistVideoLinks(documentValue, baseUrl) {
    var playlistId = getPlaylistIdFromUrl(baseUrl);
    var seenVideoIds = {};
    var videos = [];
    var roots = getPlaylistRoots(documentValue);

    roots.some(function extractFromRoot(rootValue) {
      var anchors = queryVideoAnchors(rootValue);

      anchors.forEach(function addAnchor(anchor) {
        var href = anchor && typeof anchor.getAttribute === "function"
          ? anchor.getAttribute("href")
          : "";
        var url = normalizeAnchorUrl(href, baseUrl);
        var videoId = getVideoIdFromUrl(url);
        var card;

        if (
          !videoId ||
          seenVideoIds[videoId] ||
          !isPlaylistLinkForCurrentPage(url, playlistId)
        ) {
          return;
        }

        card = anchor && typeof anchor.closest === "function"
          ? anchor.closest(PLAYLIST_VIDEO_CARD_SELECTOR)
          : null;
        seenVideoIds[videoId] = true;
        videos.push({
          videoId: videoId,
          url: url,
          title: getAnchorTitle(anchor, card),
          thumbnailUrl: getAnchorThumbnailUrl(anchor, card),
          index: getPlaylistIndexFromUrl(url, videos.length + 1)
        });
      });

      return videos.length > 0;
    });

    return videos;
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

  function getPlaylistMetadataFromDocument(documentValue) {
    var titleElement = queryFirst(documentValue, [
      "ytd-playlist-header-renderer h1",
      "ytd-playlist-header-renderer #title",
      "ytd-playlist-sidebar-primary-info-renderer h1",
      "ytd-playlist-panel-renderer #title",
      "#playlist #title"
    ]);

    return {
      playlistTitle: normalizeText(titleElement && titleElement.textContent)
    };
  }

  function mergePlaylistVideos(state, videos) {
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

  function createPlaylistScanState() {
    return {
      playlistUrl: "",
      playlistTitle: "",
      playlistId: "",
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

  function addVideosToPlaylistScanState(state, videos) {
    var safeState = state || createPlaylistScanState();
    var merged = mergePlaylistVideos(safeState, videos);

    safeState.discoveredVideos = merged.discoveredVideos;
    merged.newVideos.forEach(function queueVideo(video) {
      safeState.queuedVideoIds[video.videoId] = true;
      safeState.queue.push(video);
    });

    return merged.newVideos;
  }

  function cancelPlaylistScanState(state) {
    var safeState = state || createPlaylistScanState();

    safeState.status = "cancelled";
    safeState.currentVideo = null;

    return safeState;
  }

  function requeueUnprocessedPlaylistVideo(state, video) {
    if (
      !video ||
      !video.videoId ||
      state.processedVideoIds[video.videoId] ||
      state.queuedVideoIds[video.videoId]
    ) {
      state.currentVideo = null;
      return;
    }

    state.queuedVideoIds[video.videoId] = true;
    state.queue.unshift(video);
    state.currentVideo = null;
  }

  function addPlaylistScanResult(state, video, result) {
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
      reason: result && result.reason
        ? result.reason
        : "No YouTube transcript is available for this video."
    });
  }

  async function runPlaylistScanQueue(state, options) {
    var safeState = state || createPlaylistScanState();
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
        requeueUnprocessedPlaylistVideo(safeState, video);
        onStateChange();
        return safeState;
      }

      addPlaylistScanResult(safeState, video, result);
      safeState.currentVideo = null;
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

  function getScrollablePlaylistContainer(documentValue) {
    return queryFirst(documentValue, [
      "ytd-playlist-video-list-renderer #contents",
      "ytd-playlist-panel-renderer #items",
      "#playlist #items"
    ]);
  }

  async function scanPlaylistVideos(documentValue, baseUrl, options) {
    var safeOptions = options || {};
    var maxScrolls = Number(safeOptions.maxScrolls) || 18;
    var waitMs = Number(safeOptions.waitMs) || 250;
    var delay = safeOptions.delay || function defaultDelay(ms) {
      return new Promise(function resolveDelay(resolve) {
        root.setTimeout(resolve, ms);
      });
    };
    var shouldContinue = safeOptions.shouldContinue || function alwaysContinue() {
      return true;
    };
    var scrollRoot =
      safeOptions.scrollRoot ||
      getScrollablePlaylistContainer(documentValue) ||
      (documentValue && documentValue.scrollingElement) ||
      root.document && root.document.scrollingElement;
    var previousCount = -1;
    var stableCount = 0;
    var videos = extractPlaylistVideoLinks(documentValue, baseUrl);
    var scrollIndex;

    for (scrollIndex = 0; scrollIndex < maxScrolls; scrollIndex += 1) {
      if (!shouldContinue()) {
        break;
      }

      if (!scrollRoot || videos.length === previousCount) {
        stableCount += 1;
      } else {
        stableCount = 0;
      }

      if (stableCount >= 2) {
        break;
      }

      previousCount = videos.length;

      try {
        if (scrollRoot && typeof scrollRoot.scrollTo === "function") {
          scrollRoot.scrollTo(0, scrollRoot.scrollHeight || 0);
        } else if (scrollRoot) {
          scrollRoot.scrollTop = scrollRoot.scrollHeight || scrollRoot.scrollTop || 0;
        }
      } catch (error) {}

      await delay(waitMs);

      if (!shouldContinue()) {
        break;
      }

      videos = extractPlaylistVideoLinks(documentValue, baseUrl);
    }

    return videos;
  }

  var api = {
    addVideosToPlaylistScanState: addVideosToPlaylistScanState,
    cancelPlaylistScanState: cancelPlaylistScanState,
    createPlaylistScanState: createPlaylistScanState,
    detectPlaylistPage: detectPlaylistPage,
    extractPlaylistVideoLinks: extractPlaylistVideoLinks,
    getPlaylistIdFromUrl: getPlaylistIdFromUrl,
    getPlaylistMetadataFromDocument: getPlaylistMetadataFromDocument,
    mergePlaylistVideos: mergePlaylistVideos,
    runPlaylistScanQueue: runPlaylistScanQueue,
    scanPlaylistVideos: scanPlaylistVideos
  };

  root.YTTranscriptPlaylist = api;

  if (typeof module !== "undefined" && module.exports) {
    root.YTTranscriptYouTube = root.YTTranscriptYouTube || require("./youtube.js");
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
