(function attachPageSupportHelpers(root) {
  "use strict";

  function isSupportedYouTubeVideoUrl(urlValue) {
    var youtube = root.YTTranscriptYouTube;

    if (!youtube || typeof youtube.getVideoIdFromUrl !== "function") {
      return false;
    }

    return youtube.getVideoIdFromUrl(urlValue) !== null;
  }

  function isYouTubeUrl(urlValue) {
    var url;
    var hostname;

    try {
      url = new URL(urlValue);
      hostname = url.hostname.toLowerCase();
    } catch (error) {
      return false;
    }

    return hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "m.youtube.com";
  }

  function isSupportedYouTubeChannelUrl(urlValue) {
    return getChannelTabFromUrl(urlValue) !== null;
  }

  function getPlaylistIdFromUrl(urlValue) {
    var url;

    if (!isYouTubeUrl(urlValue)) {
      return "";
    }

    try {
      url = new URL(urlValue);
    } catch (error) {
      return "";
    }

    return url.searchParams.get("list") || "";
  }

  function isValidVideoId(videoId) {
    return Boolean(videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId));
  }

  function getWatchVideosQueueInfoFromUrl(urlValue) {
    var url;
    var rawVideoIds;
    var seenVideoIds = {};
    var videoIds = [];

    if (!isYouTubeUrl(urlValue)) {
      return {
        videoIds: [],
        title: ""
      };
    }

    try {
      url = new URL(urlValue);
    } catch (error) {
      return {
        videoIds: [],
        title: ""
      };
    }

    if (url.pathname !== "/watch_videos") {
      return {
        videoIds: [],
        title: ""
      };
    }

    rawVideoIds = url.searchParams.get("video_ids") || "";
    rawVideoIds.split(",").forEach(function addVideoId(videoId) {
      var safeVideoId = String(videoId || "").trim();

      if (!isValidVideoId(safeVideoId) || seenVideoIds[safeVideoId]) {
        return;
      }

      seenVideoIds[safeVideoId] = true;
      videoIds.push(safeVideoId);
    });

    return {
      videoIds: videoIds,
      title: String(url.searchParams.get("title") || "").replace(/\s+/g, " ").trim()
    };
  }

  function isYouTubeShowUrl(urlValue) {
    var url;
    var pathParts;

    if (!isYouTubeUrl(urlValue)) {
      return false;
    }

    try {
      url = new URL(urlValue);
    } catch (error) {
      return false;
    }

    pathParts = url.pathname.split("/").filter(Boolean);

    return pathParts[0] === "show" && pathParts.length >= 2;
  }

  function getShowPageKeyFromUrl(urlValue) {
    var url;

    try {
      url = new URL(urlValue);
    } catch (error) {
      return "show:";
    }

    return "show:" + url.pathname;
  }

  function isSupportedYouTubePlaylistUrl(urlValue) {
    return Boolean(
      getPlaylistIdFromUrl(urlValue) ||
      getWatchVideosQueueInfoFromUrl(urlValue).videoIds.length > 0 ||
      isYouTubeShowUrl(urlValue)
    );
  }

  function getChannelHandleFromUrl(urlValue) {
    var url;
    var pathParts;

    if (!isYouTubeUrl(urlValue)) {
      return "";
    }

    try {
      url = new URL(urlValue);
    } catch (error) {
      return "";
    }

    pathParts = url.pathname.split("/").filter(Boolean);

    if (pathParts.length === 0) {
      return "";
    }

    if (pathParts[0][0] === "@") {
      return decodeURIComponent(pathParts[0].slice(1)).toLowerCase();
    }

    if (
      (pathParts[0] === "c" || pathParts[0] === "channel" || pathParts[0] === "user") &&
      pathParts.length >= 2
    ) {
      return decodeURIComponent(pathParts[1]).toLowerCase();
    }

    return "";
  }

  function getChannelTabFromUrl(urlValue) {
    var url;
    var pathParts;

    if (!isYouTubeUrl(urlValue)) {
      return null;
    }

    try {
      url = new URL(urlValue);
    } catch (error) {
      return null;
    }

    pathParts = url.pathname.split("/").filter(Boolean);

    if (pathParts.length === 0) {
      return null;
    }

    if (pathParts[0][0] === "@") {
      if (pathParts.length === 1 || (pathParts.length === 2 && pathParts[1] === "videos")) {
        return "videos";
      }

      if (pathParts.length === 2 && pathParts[1] === "shorts") {
        return "shorts";
      }

      return null;
    }

    if (
      (pathParts[0] === "c" || pathParts[0] === "channel" || pathParts[0] === "user") &&
      pathParts.length === 2
    ) {
      return "videos";
    }

    return null;
  }

  function getPageContextFromUrl(urlValue) {
    var playlistId = getPlaylistIdFromUrl(urlValue);
    var queueInfo = getWatchVideosQueueInfoFromUrl(urlValue);
    var videoId;

    if (queueInfo.videoIds.length > 0) {
      return {
        mode: "PLAYLIST_MODE",
        isYouTubePage: true,
        playlistId: "",
        sourceType: "queue",
        pageKey: "queue:" + queueInfo.videoIds.join(","),
        playlistTitle: queueInfo.title || "YouTube video queue"
      };
    }

    if (isYouTubeShowUrl(urlValue)) {
      return {
        mode: "PLAYLIST_MODE",
        isYouTubePage: true,
        playlistId: "",
        sourceType: "show",
        pageKey: getShowPageKeyFromUrl(urlValue)
      };
    }

    if (playlistId) {
      videoId = isSupportedYouTubeVideoUrl(urlValue)
        ? root.YTTranscriptYouTube.getVideoIdFromUrl(urlValue)
        : null;

      return videoId
        ? {
            mode: "PLAYLIST_MODE",
            isYouTubePage: true,
            playlistId: playlistId,
            videoId: videoId
          }
        : {
            mode: "PLAYLIST_MODE",
            isYouTubePage: true,
            playlistId: playlistId
          };
    }

    if (isSupportedYouTubeVideoUrl(urlValue)) {
      return {
        mode: "VIDEO_MODE",
        isYouTubePage: true
      };
    }

    if (isSupportedYouTubeChannelUrl(urlValue)) {
      return {
        mode: "CHANNEL_MODE",
        isYouTubePage: true,
        channelTab: getChannelTabFromUrl(urlValue),
        channelHandle: getChannelHandleFromUrl(urlValue)
      };
    }

    return {
      mode: "UNSUPPORTED_MODE",
      isYouTubePage: isYouTubeUrl(urlValue)
    };
  }

  var api = {
    getChannelHandleFromUrl: getChannelHandleFromUrl,
    getPageContextFromUrl: getPageContextFromUrl,
    getChannelTabFromUrl: getChannelTabFromUrl,
    getPlaylistIdFromUrl: getPlaylistIdFromUrl,
    getWatchVideosQueueInfoFromUrl: getWatchVideosQueueInfoFromUrl,
    isSupportedYouTubeChannelUrl: isSupportedYouTubeChannelUrl,
    isSupportedYouTubePlaylistUrl: isSupportedYouTubePlaylistUrl,
    isSupportedYouTubeVideoUrl: isSupportedYouTubeVideoUrl,
    isYouTubeUrl: isYouTubeUrl
  };

  root.YTTranscriptPageSupport = api;

  if (typeof module !== "undefined" && module.exports) {
    root.YTTranscriptYouTube = root.YTTranscriptYouTube || require("./youtube.js");
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
