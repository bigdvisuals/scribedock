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

  function isSupportedYouTubePlaylistUrl(urlValue) {
    return Boolean(getPlaylistIdFromUrl(urlValue));
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
    var videoId;

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
