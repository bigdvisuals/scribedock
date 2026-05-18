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

    if (pathParts.length === 0) {
      return false;
    }

    if (pathParts[0][0] === "@") {
      return pathParts.length === 1 ||
        (pathParts.length === 2 && pathParts[1] === "videos");
    }

    return (
      (pathParts[0] === "c" || pathParts[0] === "channel" || pathParts[0] === "user") &&
      pathParts.length === 2
    );
  }

  function getPageContextFromUrl(urlValue) {
    if (isSupportedYouTubeVideoUrl(urlValue)) {
      return {
        mode: "VIDEO_MODE",
        isYouTubePage: true
      };
    }

    if (isSupportedYouTubeChannelUrl(urlValue)) {
      return {
        mode: "CHANNEL_MODE",
        isYouTubePage: true
      };
    }

    return {
      mode: "UNSUPPORTED_MODE",
      isYouTubePage: isYouTubeUrl(urlValue)
    };
  }

  var api = {
    getPageContextFromUrl: getPageContextFromUrl,
    isSupportedYouTubeChannelUrl: isSupportedYouTubeChannelUrl,
    isSupportedYouTubeVideoUrl: isSupportedYouTubeVideoUrl,
    isYouTubeUrl: isYouTubeUrl
  };

  root.YTTranscriptPageSupport = api;

  if (typeof module !== "undefined" && module.exports) {
    root.YTTranscriptYouTube = root.YTTranscriptYouTube || require("./youtube.js");
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
