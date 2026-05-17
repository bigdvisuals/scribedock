(function attachPageSupportHelpers(root) {
  "use strict";

  function isSupportedYouTubeVideoUrl(urlValue) {
    var youtube = root.YTTranscriptYouTube;

    if (!youtube || typeof youtube.getVideoIdFromUrl !== "function") {
      return false;
    }

    return youtube.getVideoIdFromUrl(urlValue) !== null;
  }

  var api = {
    isSupportedYouTubeVideoUrl: isSupportedYouTubeVideoUrl
  };

  root.YTTranscriptPageSupport = api;

  if (typeof module !== "undefined" && module.exports) {
    root.YTTranscriptYouTube = root.YTTranscriptYouTube || require("./youtube.js");
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
