const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const contentScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "content", "content.js"),
  "utf8",
);

function createFakeTimerRuntime() {
  let now = 0;
  let nextTimerId = 1;
  const timers = new Map();

  function setTimer(callback, delayMs, intervalMs) {
    const id = nextTimerId;
    nextTimerId += 1;
    timers.set(id, {
      callback,
      time: now + Number(delayMs || 0),
      intervalMs
    });
    return id;
  }

  function clearTimer(id) {
    timers.delete(id);
  }

  function runUntil(targetTime) {
    let nextEntry;

    while (true) {
      nextEntry = null;

      timers.forEach((timer, id) => {
        if (timer.time <= targetTime && (!nextEntry || timer.time < nextEntry.timer.time)) {
          nextEntry = { id, timer };
        }
      });

      if (!nextEntry) {
        now = targetTime;
        return;
      }

      now = nextEntry.timer.time;
      timers.delete(nextEntry.id);
      nextEntry.timer.callback();

      if (nextEntry.timer.intervalMs !== null && nextEntry.timer.intervalMs !== undefined) {
        nextEntry.timer.time = now + nextEntry.timer.intervalMs;
        timers.set(nextEntry.id, nextEntry.timer);
      }
    }
  }

  return {
    get now() {
      return now;
    },
    setTimeout(callback, delayMs) {
      return setTimer(callback, delayMs, null);
    },
    setInterval(callback, delayMs) {
      return setTimer(callback, delayMs, Number(delayMs || 0));
    },
    clearTimeout: clearTimer,
    clearInterval: clearTimer,
    advanceBy(delayMs) {
      runUntil(now + delayMs);
    }
  };
}

function createFakeChannelAnchor(href, title) {
  const card = {
    querySelector(selector) {
      if (selector.indexOf("video-title") !== -1) {
        return {
          textContent: title,
          getAttribute(name) {
            return name === "title" ? title : "";
          }
        };
      }

      if (selector === "img") {
        return {
          currentSrc: "https://img.example/" + title.toLowerCase().replace(/\s+/g, "-") + ".jpg",
          src: ""
        };
      }

      return null;
    }
  };

  return {
    textContent: title,
    getAttribute(name) {
      return name === "href" ? href : "";
    },
    closest() {
      return card;
    },
    querySelector() {
      return null;
    }
  };
}

function createFakeChannelRoot(anchors) {
  return {
    querySelectorAll(selector) {
      return selector === 'a[href*="/watch?v="]' ? anchors : [];
    }
  };
}

function createContentRuntimeHarness() {
  const timerRuntime = createFakeTimerRuntime();
  const runtimeMessages = [];
  const runtimeListeners = [];
  const eventListeners = {};
  const documentEventListeners = {};
  const homeRoot = createFakeChannelRoot([
    createFakeChannelAnchor("/watch?v=homefeed001", "Homepage Feed Video")
  ]);
  const channelRoot = createFakeChannelRoot([
    createFakeChannelAnchor("/watch?v=channel0001", "Channel Video One"),
    createFakeChannelAnchor("/watch?v=channel0002", "Channel Video Two")
  ]);
  let currentPage = "home";
  let channelHeaderName = "Channel Name";
  let broadChannelName = "Channel Name";
  let staleWatchFlexyVideoId = "";

  class FakeMutationObserver {
    constructor(callback) {
      this.callback = callback;
      this.target = null;
    }

    observe(target) {
      this.target = target;
    }

    disconnect() {
      this.target = null;
    }
  }

  const fakeDocument = {
    documentElement: { nodeName: "HTML" },
    body: { nodeName: "BODY" },
    querySelector(selector) {
      if (selector === "video") {
        return null;
      }

      if (selector === "ytd-watch-flexy[video-id]") {
        return staleWatchFlexyVideoId
          ? {
              getAttribute(name) {
                return name === "video-id" ? staleWatchFlexyVideoId : null;
              }
            }
          : null;
      }

      if (selector.indexOf('ytd-watch-flexy[video-id="') === 0) {
        return selector === `ytd-watch-flexy[video-id="${staleWatchFlexyVideoId}"]`
          ? {}
          : null;
      }

      if (selector === "h1.ytd-watch-metadata yt-formatted-string, h1 yt-formatted-string, h1") {
        return currentPage === "channel" && staleWatchFlexyVideoId
          ? { textContent: channelHeaderName }
          : null;
      }

      if (selector === "ytd-browse, ytd-two-column-browse-results-renderer, #contents") {
        return currentPage === "channel" ? channelRoot : homeRoot;
      }

      if (selector === 'ytd-browse[page-subtype="channels"]') {
        return currentPage === "channel" ? channelRoot : null;
      }

      if (
        selector === "ytd-browse" ||
        selector === "ytd-rich-grid-renderer" ||
        selector === "ytd-two-column-browse-results-renderer" ||
        selector === "#contents"
      ) {
        return currentPage === "channel" ? channelRoot : homeRoot;
      }

      if (selector === "ytd-channel-name #text, #channel-name #text, yt-page-header-renderer #page-header #title") {
        return currentPage === "channel" ? { textContent: broadChannelName } : null;
      }

      if (selector === "yt-page-header-renderer #page-header #title") {
        return currentPage === "channel" ? { textContent: channelHeaderName } : null;
      }

      if (selector === "yt-page-header-renderer h1" || selector === "ytd-c4-tabbed-header-renderer #channel-name") {
        return null;
      }

      if (selector === "yt-page-header-renderer #avatar img") {
        return currentPage === "channel"
          ? { currentSrc: "https://img.example/avatar.jpg", src: "" }
          : null;
      }

      if (selector.indexOf("yt-tab-shape") !== -1 || selector.indexOf('[role="tab"]') !== -1) {
        return currentPage === "channel"
          ? {
              textContent: "Videos",
              getAttribute(name) {
                return name === "aria-selected" ? "true" : "";
              }
            }
          : null;
      }

      return null;
    },
    querySelectorAll(selector) {
      return (currentPage === "channel" ? channelRoot : homeRoot).querySelectorAll(selector);
    },
    addEventListener(type, listener) {
      documentEventListeners[type] = documentEventListeners[type] || [];
      documentEventListeners[type].push(listener);
    }
  };

  const context = {
    URL,
    console: {
      debug() {},
      error() {},
      warn() {}
    },
    document: fakeDocument,
    location: { href: "https://www.youtube.com/" },
    navigator: { languages: ["en-US"], language: "en-US" },
    localStorage: {
      getItem() {
        return "";
      }
    },
    performance: {
      now() {
        return timerRuntime.now;
      }
    },
    MutationObserver: FakeMutationObserver,
    Event: class FakeEvent {
      constructor(type) {
        this.type = type;
      }
    },
    history: {
      pushState() {},
      replaceState() {}
    },
    addEventListener(type, listener) {
      eventListeners[type] = eventListeners[type] || [];
      eventListeners[type].push(listener);
    },
    dispatchEvent(event) {
      (eventListeners[event.type] || []).forEach((listener) => listener(event));
    },
    setTimeout: timerRuntime.setTimeout,
    clearTimeout: timerRuntime.clearTimeout,
    setInterval: timerRuntime.setInterval,
    clearInterval: timerRuntime.clearInterval,
    fetch: null,
    ytInitialPlayerResponse: null,
    chrome: {
      runtime: {
        id: "test-extension",
        sendMessage(message) {
          runtimeMessages.push(message);
        },
        onMessage: {
          addListener(listener) {
            runtimeListeners.push(listener);
          }
        }
      }
    }
  };

  context.window = context;
  context.globalThis = context;
  vm.createContext(context);

  function runScript(relativePath) {
    vm.runInContext(
      fs.readFileSync(path.join(__dirname, "..", relativePath), "utf8"),
      context,
      { filename: relativePath }
    );
  }

  return {
    runtimeMessages,
    installScripts() {
      runScript(path.join("src", "utils", "youtube.js"));
      runScript(path.join("src", "utils", "navigation.js"));
      runScript(path.join("src", "utils", "page-support.js"));
      runScript(path.join("src", "utils", "channel.js"));
      runScript(path.join("src", "content", "content.js"));
    },
    sendMessage(message) {
      let response;
      assert.ok(runtimeListeners.length > 0, "content script message listener should be installed");
      runtimeListeners[0](message, {}, (value) => {
        response = value;
      });
      return response;
    },
    sendMessageAsync(message) {
      assert.ok(runtimeListeners.length > 0, "content script message listener should be installed");

      return new Promise((resolve) => {
        runtimeListeners[0](message, {}, resolve);
      });
    },
    navigateTo(url) {
      context.location.href = url;
      context.dispatchEvent({ type: "yt-transcript-helper-location-change" });
    },
    setVideoMetadata(videoId, title, channelName) {
      context.ytInitialPlayerResponse = {
        videoDetails: {
          videoId,
          title,
          author: channelName || ""
        }
      };
    },
    clearVideoMetadata() {
      context.ytInitialPlayerResponse = null;
    },
    setStaleWatchFlexyVideoId(videoId) {
      staleWatchFlexyVideoId = videoId || "";
    },
    replaceHomepageDomWithChannelDom() {
      currentPage = "channel";
    },
    setChannelHeaderName(name) {
      channelHeaderName = name;
    },
    setBroadChannelName(name) {
      broadChannelName = name;
    },
    advanceBy(delayMs) {
      timerRuntime.advanceBy(delayMs);
    }
  };
}

test("content script keeps the side-panel runtime message contract", () => {
  assert.match(contentScript, /message\.type === "PING"/);
  assert.match(contentScript, /message\.type === "GET_PAGE_CONTEXT"/);
  assert.match(contentScript, /message\.type === "GET_CHANNEL_VIDEOS"/);
  assert.match(contentScript, /message\.type === "SCAN_CHANNEL_TRANSCRIPTS"/);
  assert.match(contentScript, /message\.type === "GET_CHANNEL_SCAN_STATE"/);
  assert.match(contentScript, /message\.type === "GET_CHANNEL_EXPORT_DATA"/);
  assert.match(contentScript, /message\.type === "PAUSE_CHANNEL_SCAN"/);
  assert.match(contentScript, /message\.type === "RESUME_CHANNEL_SCAN"/);
  assert.match(contentScript, /message\.type === "CANCEL_CHANNEL_SCAN"/);
  assert.match(contentScript, /message\.type === "GET_TRANSCRIPT_STATE"/);
  assert.match(contentScript, /message\.type === "GET_CURRENT_TIME"/);
  assert.match(contentScript, /message\.type === "JUMP_TO_TIME"/);
  assert.match(contentScript, /message\.type === "SET_TRANSCRIPT_TRACK"/);
  assert.match(contentScript, /message\.type === "SET_TRANSCRIPT_MODE_AUTO"/);
  assert.match(contentScript, /message\.type === "GET_PLAYLIST_SCAN_STATE"/);
  assert.match(contentScript, /message\.type === "SCAN_PLAYLIST_TRANSCRIPTS"/);
  assert.match(contentScript, /message\.type === "CANCEL_PLAYLIST_OPERATION"/);
  assert.match(contentScript, /message\.type === "GET_PLAYLIST_EXPORT_DATA"/);
});

test("content script uses ScribeDock debug branding with the old flag as a fallback", () => {
  assert.match(contentScript, /getItem\("scribedockDebug"\)/);
  assert.match(contentScript, /getItem\("ytTranscriptHelperDebug"\)/);
  assert.match(contentScript, /\[ScribeDock\]/);
});

test("content script saves explicit language choices and clears them in auto mode", () => {
  assert.match(contentScript, /savePreferredTranscriptLanguage\(preferredLanguageCode\)/);
  assert.match(contentScript, /clearPreferredTranscriptLanguage\(\)/);
  assert.match(contentScript, /function selectTranscriptTrackByIndex/);
  assert.match(contentScript, /function selectAutomaticTranscriptTrack/);
});

test("channel scans reuse the saved transcript language preference before falling back", () => {
  const fetchChannelTranscriptBody = contentScript.slice(
    contentScript.indexOf("async function fetchChannelTranscript"),
    contentScript.indexOf("async function runChannelScan"),
  );

  assert.match(fetchChannelTranscriptBody, /getPreferredTranscriptLanguage\(\)/);
  assert.match(fetchChannelTranscriptBody, /preferredLanguageCode,/);
});

test("channel transcript fetching reuses the extracted video ID for Shorts and watch URLs", () => {
  const fetchChannelTranscriptBody = contentScript.slice(
    contentScript.indexOf("async function fetchChannelTranscript"),
    contentScript.indexOf("async function runChannelScan"),
  );

  assert.match(fetchChannelTranscriptBody, /getCaptionTracksFromWatchPageFetch\(\s*video\.videoId,/);
  assert.match(fetchChannelTranscriptBody, /fetchTranscriptRowsWithFallbacks\(\{\s*videoId: video\.videoId,/);
});

test("playlist transcript fetching reuses the channel transcript pipeline", () => {
  assert.match(contentScript, /async function fetchPlaylistTranscript\(video\)/);
  assert.match(contentScript, /return fetchChannelTranscript\(video, playlistScanState\);/);
});

test("playlist SPA navigation resets stale playlist state", () => {
  assert.match(contentScript, /function resetPlaylistScanState/);
  assert.match(contentScript, /handlePlaylistNavigationForCurrentUrl\("navigation", routeInfo\)/);
  assert.match(contentScript, /context\.mode !== "PLAYLIST_MODE"/);
});

test("playlist scan state exposes cancelability and current watch video context", () => {
  const pageContextBody = contentScript.slice(
    contentScript.indexOf("function buildPageContextResponse"),
    contentScript.indexOf("function buildChannelVideosResponse"),
  );
  const playlistStateBody = contentScript.slice(
    contentScript.indexOf("function buildPlaylistScanStateResponse"),
    contentScript.indexOf("function buildPlaylistExportDataResponse"),
  );

  assert.match(pageContextBody, /videoId: playlistContext\.videoId \|\| ""/);
  assert.match(playlistStateBody, /canCancel: playlistScanState\.status === "scanning"/);
  assert.match(playlistStateBody, /videosFound:/);
  assert.match(playlistStateBody, /downloadedCount:/);
  assert.match(playlistStateBody, /skippedCount:/);
  assert.match(playlistStateBody, /currentTitle:/);
});

test("playlist cancellation uses request invalidation and notifies the side panel", () => {
  assert.match(contentScript, /function cancelPlaylistOperation/);
  assert.match(contentScript, /playlistScanRequestId \+= 1;/);
  assert.match(contentScript, /playlistScanState\.status = "cancelled"/);
  assert.match(contentScript, /notifyPlaylistScanStateChanged\(\);/);
});

test("playlist scan startup prevents duplicate jobs while one is active", () => {
  const startPlaylistBody = contentScript.slice(
    contentScript.indexOf("function startPlaylistScan"),
    contentScript.indexOf("function getSelectedTrack"),
  );

  assert.match(startPlaylistBody, /if \(playlistScanState\.status === "scanning"\) \{/);
  assert.match(startPlaylistBody, /return buildPlaylistScanStateResponse\(\);/);
  assert.match(startPlaylistBody, /playlistScanState\.status = "scanning"/);
});

test("channel export data includes scan status and preferred language context", () => {
  const exportBuilderBody = contentScript.slice(
    contentScript.indexOf("function buildChannelExportDataResponse"),
    contentScript.indexOf("function notifyChannelScanStateChanged"),
  );

  assert.match(exportBuilderBody, /status: channelScanState\.status/);
  assert.match(exportBuilderBody, /preferredTranscriptLanguage:/);
  assert.match(exportBuilderBody, /discoveredCount:/);
  assert.match(exportBuilderBody, /channelTab:/);
});

test("content script never falls back to the first caption track after selection exists", () => {
  assert.doesNotMatch(contentScript, /currentCaptionTracks\[0\]/);
});

test("content script only applies cached transcript rows for the current video id", () => {
  const applyCachedTranscriptBody = contentScript.slice(
    contentScript.indexOf("function applyCachedTranscript"),
    contentScript.indexOf("function createPerformanceLogger"),
  );

  assert.match(applyCachedTranscriptBody, /entry\.videoId !== currentVideoId/);
  assert.match(applyCachedTranscriptBody, /return false;/);
});

test("changing explicit or automatic transcript selection reloads rows", () => {
  assert.match(
    contentScript,
    /async function selectTranscriptTrackByIndex[\s\S]*fetchAndRenderSelectedTranscript\(\);/,
  );
  assert.match(
    contentScript,
    /async function selectAutomaticTranscriptTrack[\s\S]*fetchAndRenderSelectedTranscript\(\);/,
  );
  assert.match(
    contentScript,
    /function fetchAndRenderSelectedTranscript[\s\S]*currentTranscriptRows = \[\];[\s\S]*currentTranscriptStatus = "loading";/,
  );
});

test("channel page context uses current header identity instead of stale card identity", () => {
  const harness = createContentRuntimeHarness();
  harness.setChannelHeaderName("Humphrey Yang");
  harness.setBroadChannelName("English At The Ready");
  harness.replaceHomepageDomWithChannelDom();
  harness.installScripts();

  harness.navigateTo("https://www.youtube.com/@humphrey/videos");
  harness.advanceBy(1200);

  const pageContext = harness.sendMessage({ type: "GET_PAGE_CONTEXT" });
  assert.equal(pageContext.currentUrl, "https://www.youtube.com/@humphrey/videos");
  assert.equal(pageContext.channelHandleFromUrl, "humphrey");
  assert.equal(pageContext.channelNameFromDom, "Humphrey Yang");
  assert.equal(pageContext.channelName, "Humphrey Yang");
  assert.notEqual(pageContext.channelName, "English At The Ready");
  assert.equal(pageContext.visibleVideoCount, 2);
});

test("content script wires guarded native fallback for direct single-video transcripts", () => {
  assert.match(
    contentScript,
    /nativeTranscriptFetcher:\s*shouldUseNativeTranscriptFallback\(selectedTrack\)\s*\?\s*function nativeTranscriptFetcher\(\)/,
  );
  assert.match(
    contentScript,
    /var requestVideoId = currentVideoId;/,
  );
  assert.match(
    contentScript,
    /return fetchNativeTranscriptRows\(transcript, requestId, requestVideoId\);/,
  );
  assert.match(
    contentScript,
    /function isTranscriptRequestStale\(requestId, videoId\)/,
  );
});

test("content script skips native fallback for translated tracks and exposes export metadata", () => {
  assert.match(
    contentScript,
    /function shouldUseNativeTranscriptFallback\(track\)[\s\S]*isTranslatedTrack\(track\)/,
  );
  assert.match(
    contentScript,
    /videoUrl: currentVideoId\s*\?\s*"https:\/\/www\.youtube\.com\/watch\?v=" \+ currentVideoId\s*:\s*""/,
  );
  assert.match(contentScript, /languageCode: selectedTrack \? getEffectiveTrackLanguageCode\(selectedTrack\) : ""/);
  assert.match(contentScript, /source: currentCaptionSource \|\| ""/);
});

test("content script handles stale transcript state intentionally", () => {
  assert.match(
    contentScript,
    /"The YouTube page changed before the transcript finished loading\."/,
  );
});

test("content script closes native transcript panel even when native fallback becomes stale", () => {
  const nativeFallbackBody = contentScript.slice(
    contentScript.indexOf("async function fetchNativeTranscriptRows"),
    contentScript.indexOf("function jumpToTranscriptTime"),
  );

  assert.match(nativeFallbackBody, /try \{/);
  assert.match(nativeFallbackBody, /finally \{/);
  assert.match(nativeFallbackBody, /if \(openedNativePanel\) \{[\s\S]*closeNativeTranscriptPanel\(\);/);
});

test("channel SPA navigation resets stale state and waits for a settled DOM before showing counts", () => {
  assert.match(contentScript, /CHANNEL_DOM_QUIET_MS = 650/);
  assert.match(contentScript, /CHANNEL_READY_TIMEOUT_MS = 9000/);
  assert.match(contentScript, /CHANNEL_LOW_COUNT_RETRY_MS = 1000/);
  assert.match(contentScript, /URL_CHANGE_FALLBACK_INTERVAL_MS = 500/);
  assert.match(contentScript, /new MutationObserver\(handleChannelDomMutation\)/);
  assert.match(contentScript, /window\.setInterval\(handlePossibleNavigation, URL_CHANGE_FALLBACK_INTERVAL_MS\)/);
  assert.match(contentScript, /function resetChannelPageState/);
  assert.match(contentScript, /function startChannelPageSettling/);
  assert.match(contentScript, /function finishChannelPageSettling/);
  assert.match(contentScript, /channelPageState\.status !== "ready" && channelPageState\.status !== "timeout"/);
});

test("channel page context exposes loading, ready, and timeout messages for the side panel", () => {
  const pageContextBody = contentScript.slice(
    contentScript.indexOf("function buildPageContextResponse"),
    contentScript.indexOf("function buildChannelVideosResponse"),
  );

  assert.match(pageContextBody, /channelLoadStatus:/);
  assert.match(pageContextBody, /channelLoadMessage:/);
  assert.match(contentScript, /Channel detected - waiting for videos to load\.\.\./);
  assert.match(contentScript, /Visible videos found:/);
  assert.match(contentScript, /Only some videos may be loaded\. Scroll down or refresh if needed\./);
});

test("channel readiness diagnostics are throttled and include safe check fields", () => {
  assert.match(contentScript, /function buildChannelReadinessDiagnostics/);
  assert.match(contentScript, /function logChannelReadinessDiagnostics/);
  assert.match(contentScript, /lastChannelReadinessDiagnosticSignature/);
  assert.match(contentScript, /channelNameFound:/);
  assert.match(contentScript, /expectedTabFound:/);
  assert.match(contentScript, /validCardsFound:/);
  assert.match(contentScript, /validVideoLinksFound:/);
  assert.match(contentScript, /visibleVideoCount:/);
  assert.match(contentScript, /urlTabType:/);
  assert.match(contentScript, /activeTabType:/);
  assert.match(contentScript, /previousUrl:/);
  assert.match(contentScript, /newUrl:/);
  assert.match(contentScript, /previousPageType:/);
  assert.match(contentScript, /newPageType:/);
  assert.match(contentScript, /loadStatus:/);
  assert.match(contentScript, /\[YT Transcript Channel\] readiness/);
});

test("channel timeout marks ready when channel name and URL-matching video links exist", () => {
  const timeoutBody = contentScript.slice(
    contentScript.indexOf("function evaluateChannelPageReadiness"),
    contentScript.indexOf("function startChannelPageSettling"),
  );

  assert.match(timeoutBody, /timedOut && readiness\.channelNameFound && readiness\.validCardsFound/);
  assert.match(timeoutBody, /finishChannelPageSettling\("ready", readiness\)/);
});

test("low initial channel counts do not keep a valid channel page stuck settling", () => {
  const readinessBody = contentScript.slice(
    contentScript.indexOf("function evaluateChannelPageReadiness"),
    contentScript.indexOf("function startChannelPageSettling"),
  );
  const oldBlockingLowCountPattern =
    /readiness\.isReady[\s\S]*?count <= 2[\s\S]*?notifyChannelPageStateChanged\(\);\s*return;\s*}\s*if \(readiness\.isReady\)/;

  assert.doesNotMatch(readinessBody, oldBlockingLowCountPattern);
  assert.match(readinessBody, /if \(readiness\.isReady\) \{/);
  assert.match(readinessBody, /scheduleLowInitialCountRefresh\(requestId, count\)/);
});

test("homepage feed to channel SPA navigation re-checks after the old feed DOM is replaced", () => {
  const harness = createContentRuntimeHarness();
  harness.installScripts();

  assert.equal(
    harness.sendMessage({ type: "GET_PAGE_CONTEXT" }).mode,
    "UNSUPPORTED_MODE",
  );

  harness.navigateTo("https://www.youtube.com/@demo/videos");

  let pageContext = harness.sendMessage({ type: "GET_PAGE_CONTEXT" });
  assert.equal(pageContext.mode, "CHANNEL_MODE");
  assert.equal(pageContext.channelLoadStatus, "settling");
  assert.equal(pageContext.visibleVideoCount, 0);

  harness.advanceBy(650);
  pageContext = harness.sendMessage({ type: "GET_PAGE_CONTEXT" });
  assert.equal(pageContext.channelLoadStatus, "settling");
  assert.equal(pageContext.visibleVideoCount, 0);

  harness.replaceHomepageDomWithChannelDom();
  harness.advanceBy(600);

  pageContext = harness.sendMessage({ type: "GET_PAGE_CONTEXT" });
  assert.equal(pageContext.channelLoadStatus, "ready");
  assert.equal(pageContext.channelName, "Channel Name");
  assert.equal(pageContext.visibleVideoCount, 2);

  const channelVideos = harness.sendMessage({ type: "GET_CHANNEL_VIDEOS" });
  assert.deepEqual(
    Array.from(channelVideos.videos, (video) => video.videoId),
    ["channel0001", "channel0002"],
  );
});

test("channel page to video page navigation exposes the current video title", async () => {
  const harness = createContentRuntimeHarness();
  const videoId = "vidnav00001";

  harness.installScripts();
  harness.navigateTo("https://www.youtube.com/@demo/videos");
  harness.replaceHomepageDomWithChannelDom();
  harness.advanceBy(700);
  assert.equal(harness.sendMessage({ type: "GET_PAGE_CONTEXT" }).channelName, "Channel Name");

  harness.setVideoMetadata(
    videoId,
    "My App Failed - My Brutal 6 Months Building a Startup",
    "Current Video Channel"
  );
  harness.navigateTo("https://www.youtube.com/watch?v=" + videoId);
  harness.advanceBy(800);
  await Promise.resolve();
  await Promise.resolve();

  const state = await harness.sendMessageAsync({ type: "GET_TRANSCRIPT_STATE" });
  assert.equal(state.videoId, videoId);
  assert.equal(state.videoTitle, "My App Failed - My Brutal 6 Months Building a Startup");
  assert.notEqual(state.videoTitle, "Channel Name");
});

test("channel back-forward navigation does not keep channel title as video title", async () => {
  const harness = createContentRuntimeHarness();
  const videoId = "backforw001";
  const videoTitle = "The Current Video Title";

  harness.installScripts();
  harness.navigateTo("https://www.youtube.com/@demo/videos");
  harness.replaceHomepageDomWithChannelDom();
  harness.advanceBy(700);
  assert.equal(harness.sendMessage({ type: "GET_PAGE_CONTEXT" }).channelName, "Channel Name");

  harness.setVideoMetadata(videoId, videoTitle, "Current Video Channel");
  harness.navigateTo("https://www.youtube.com/watch?v=" + videoId);
  harness.advanceBy(800);
  await Promise.resolve();
  await Promise.resolve();

  let state = await harness.sendMessageAsync({ type: "GET_TRANSCRIPT_STATE" });
  assert.equal(state.videoId, videoId);
  assert.equal(state.videoTitle, videoTitle);

  harness.clearVideoMetadata();
  harness.setStaleWatchFlexyVideoId(videoId);
  harness.navigateTo("https://www.youtube.com/@demo/videos");
  harness.advanceBy(800);
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(harness.sendMessage({ type: "GET_PAGE_CONTEXT" }).mode, "CHANNEL_MODE");

  harness.setVideoMetadata(videoId, videoTitle, "Current Video Channel");
  harness.navigateTo("https://www.youtube.com/watch?v=" + videoId);
  harness.advanceBy(800);
  await Promise.resolve();
  await Promise.resolve();

  state = await harness.sendMessageAsync({ type: "GET_TRANSCRIPT_STATE" });
  assert.equal(state.videoId, videoId);
  assert.equal(state.videoTitle, videoTitle);
  assert.notEqual(state.videoTitle, "Channel Name");
});

test("playlist page to video page navigation exposes the current video title", async () => {
  const harness = createContentRuntimeHarness();
  const videoId = "plnav000001";

  harness.installScripts();
  harness.navigateTo("https://www.youtube.com/playlist?list=PLdemo");
  assert.equal(harness.sendMessage({ type: "GET_PAGE_CONTEXT" }).mode, "PLAYLIST_MODE");

  harness.setVideoMetadata(videoId, "Current Playlist Video", "Current Video Channel");
  harness.navigateTo("https://www.youtube.com/watch?v=" + videoId);
  harness.advanceBy(800);
  await Promise.resolve();
  await Promise.resolve();

  const state = await harness.sendMessageAsync({ type: "GET_TRANSCRIPT_STATE" });
  assert.equal(state.videoId, videoId);
  assert.equal(state.videoTitle, "Current Playlist Video");
  assert.notEqual(state.videoTitle, "YouTube playlist");
});
