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

  function isValidVideoId(videoId) {
    return Boolean(videoId && /^[a-zA-Z0-9_-]{11}$/.test(videoId));
  }

  function getVideoIdFromDocument(documentValue) {
    var doc = documentValue || root.document;
    var flexy;
    var videoId;

    if (!doc || typeof doc.querySelector !== "function") {
      return null;
    }

    flexy = doc.querySelector("ytd-watch-flexy[video-id]");
    videoId =
      flexy && typeof flexy.getAttribute === "function"
        ? flexy.getAttribute("video-id")
        : null;

    return isValidVideoId(videoId) ? videoId : null;
  }

  function getCurrentVideoId(documentValue, urlValue) {
    return (
      getVideoIdFromUrl(
        urlValue || (root.location && root.location.href),
      ) || getVideoIdFromDocument(documentValue)
    );
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function getDocumentTitle(documentValue) {
    var doc = documentValue || root.document;

    return doc && doc.title
      ? normalizeText(doc.title.replace(/\s*-\s*YouTube\s*$/, ""))
      : "";
  }

  function getVideoMetadataCandidate(
    documentValue,
    playerResponse,
    videoId,
    previousTitle,
  ) {
    var doc = documentValue || root.document;
    var responseDetails =
      playerResponse &&
      playerResponse.videoDetails &&
      playerResponse.videoDetails.videoId === videoId
        ? playerResponse.videoDetails
        : null;
    var matchingFlexy =
      doc && typeof doc.querySelector === "function"
        ? doc.querySelector('ytd-watch-flexy[video-id="' + videoId + '"]')
        : null;
    var heading =
      matchingFlexy && doc
        ? doc.querySelector(
            "h1.ytd-watch-metadata yt-formatted-string, h1 yt-formatted-string, h1",
          )
        : null;
    var channelElement =
      matchingFlexy && doc
        ? doc.querySelector("#owner #channel-name a, ytd-video-owner-renderer a")
        : null;
    var titleFromResponse = responseDetails
      ? normalizeText(responseDetails.title)
      : "";
    var titleFromDom = heading ? normalizeText(heading.textContent) : "";
    var titleFromDocument = matchingFlexy ? getDocumentTitle(doc) : "";
    var title = titleFromResponse || titleFromDom || titleFromDocument;
    var previous = normalizeText(previousTitle);
    var channelName = responseDetails
      ? normalizeText(responseDetails.author)
      : channelElement
        ? normalizeText(channelElement.textContent)
        : "";

    if (!title || title === previous || title === "YouTube") {
      return null;
    }

    if (!responseDetails && !matchingFlexy) {
      return null;
    }

    return {
      title: title,
      channelName: channelName,
    };
  }

  async function waitForVideoMetadata(videoId, previousTitle, options) {
    var safeOptions = options || {};
    var documentValue = safeOptions.document || root.document;
    var getPlayerResponse =
      typeof safeOptions.getPlayerResponse === "function"
        ? safeOptions.getPlayerResponse
        : function getRootPlayerResponse() {
            return root.ytInitialPlayerResponse || null;
          };
    var now =
      typeof safeOptions.now === "function"
        ? safeOptions.now
        : function getNow() {
            return Date.now();
          };
    var sleep =
      typeof safeOptions.sleep === "function"
        ? safeOptions.sleep
        : function sleepFor(ms) {
            return new Promise(function resolveAfterDelay(resolve) {
              root.setTimeout(resolve, ms);
            });
          };
    var initialDelayMs =
      typeof safeOptions.initialDelayMs === "number"
        ? safeOptions.initialDelayMs
        : 500;
    var pollIntervalMs =
      typeof safeOptions.pollIntervalMs === "number"
        ? safeOptions.pollIntervalMs
        : 200;
    var timeoutMs =
      typeof safeOptions.timeoutMs === "number" ? safeOptions.timeoutMs : 5000;
    var startTime = now();
    var candidate;

    if (initialDelayMs > 0) {
      await sleep(initialDelayMs);
    }

    while (now() - startTime < timeoutMs) {
      candidate = getVideoMetadataCandidate(
        documentValue,
        getPlayerResponse(),
        videoId,
        previousTitle,
      );

      if (candidate) {
        return candidate;
      }

      await sleep(pollIntervalMs);
    }

    candidate = getDocumentTitle(documentValue);

    return {
      title:
        candidate && candidate !== normalizeText(previousTitle)
          ? candidate
          : "Unknown video",
      channelName: "",
    };
  }

  function getCurrentVideoTitle(documentValue) {
    var doc = documentValue || root.document;

    if (!doc) {
      return "";
    }

    var heading = doc.querySelector("h1 yt-formatted-string, h1");
    var metaTitle = doc.querySelector('meta[property="og:title"]');
    var title = "";

    if (heading && heading.textContent) {
      title = heading.textContent;
    } else if (metaTitle && metaTitle.content) {
      title = metaTitle.content;
    } else if (doc.title) {
      title = doc.title.replace(/\s*-\s*YouTube\s*$/, "");
    }

    return title.trim();
  }

  var api = {
    getVideoIdFromUrl: getVideoIdFromUrl,
    getVideoIdFromDocument: getVideoIdFromDocument,
    isYouTubeWatchPage: isYouTubeWatchPage,
    getCurrentVideoId: getCurrentVideoId,
    getCurrentVideoTitle: getCurrentVideoTitle,
    getVideoMetadataCandidate: getVideoMetadataCandidate,
    waitForVideoMetadata: waitForVideoMetadata
  };

  root.YTTranscriptYouTube = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
