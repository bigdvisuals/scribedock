(function attachYouTubeHelpers(root) {
  "use strict";

  function getVideoIdFromUrl(urlValue) {
    if (!urlValue) {
      return null;
    }

    let url;

    try {
      url = new URL(urlValue);
    } catch (error) {
      return null;
    }

    var hostname = url.hostname.toLowerCase();
    var isNormalYouTubeHost = hostname === "youtube.com" || hostname === "www.youtube.com" || hostname === "m.youtube.com";

    if (!isNormalYouTubeHost) {
      return null;
    }

    var videoId = null;

    if (url.pathname === "/watch") {
      videoId = url.searchParams.get("v");
    } else {
      var pathParts = url.pathname.split("/").filter(Boolean);

      if (pathParts[0] === "shorts") {
        videoId = pathParts[1] || null;
      }
    }

    if (!videoId || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return null;
    }

    return videoId;
  }

  function isYouTubeWatchPage(urlValue) {
    return getVideoIdFromUrl(urlValue) !== null;
  }

  function getCurrentVideoId() {
    return getVideoIdFromUrl(root.location && root.location.href);
  }

  function getCurrentVideoTitle(documentValue) {
    var doc = documentValue || root.document;

    if (!doc) {
      return "";
    }

    var metaTitle = doc.querySelector('meta[property="og:title"]');
    var heading = doc.querySelector("h1 yt-formatted-string, h1");
    var title = "";

    if (metaTitle && metaTitle.content) {
      title = metaTitle.content;
    } else if (heading && heading.textContent) {
      title = heading.textContent;
    } else if (doc.title) {
      title = doc.title.replace(/\s*-\s*YouTube\s*$/, "");
    }

    return title.trim();
  }

  var api = {
    getVideoIdFromUrl: getVideoIdFromUrl,
    isYouTubeWatchPage: isYouTubeWatchPage,
    getCurrentVideoId: getCurrentVideoId,
    getCurrentVideoTitle: getCurrentVideoTitle
  };

  root.YTTranscriptYouTube = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
