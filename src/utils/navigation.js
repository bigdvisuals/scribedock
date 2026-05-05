(function attachNavigationHelpers(root) {
  "use strict";

  function getPageAction(previousVideoId, nextUrl, getVideoIdFromUrl) {
    if (typeof getVideoIdFromUrl !== "function") {
      return {
        type: "remove",
        videoId: null
      };
    }

    var nextVideoId = getVideoIdFromUrl(nextUrl);

    if (!nextVideoId) {
      return {
        type: "remove",
        videoId: null
      };
    }

    if (nextVideoId === previousVideoId) {
      return {
        type: "keep",
        videoId: nextVideoId
      };
    }

    return {
      type: "render",
      videoId: nextVideoId
    };
  }

  var api = {
    getPageAction: getPageAction
  };

  root.YTTranscriptNavigation = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
