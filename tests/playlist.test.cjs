const assert = require("node:assert/strict");
const test = require("node:test");

const playlist = require("../src/utils/playlist.js");

function createAnchor(href, title, options = {}) {
  const card = options.noCard
    ? null
    : {
        querySelector(selector) {
          if (selector.indexOf("video-title") !== -1 || selector === "#video-title") {
            return {
              textContent: options.cardTitle || title || "",
              getAttribute(name) {
                return name === "title" ? options.cardTitle || title || "" : "";
              }
            };
          }

          if (selector === "img" && options.thumbnailUrl) {
            return {
              currentSrc: options.thumbnailUrl,
              src: options.thumbnailUrl
            };
          }

          return null;
        }
      };

  return {
    textContent: title || "",
    getAttribute(name) {
      if (name === "href") {
        return href;
      }

      if (name === "title" || name === "aria-label") {
        return title || "";
      }

      return "";
    },
    closest() {
      return card;
    },
    querySelector(selector) {
      if (selector === "img" && options.thumbnailUrl) {
        return {
          currentSrc: options.thumbnailUrl,
          src: options.thumbnailUrl
        };
      }

      return null;
    }
  };
}

test("detects playlist-capable URLs", () => {
  assert.equal(
    playlist.detectPlaylistPage("https://www.youtube.com/playlist?list=PLabc123"),
    true
  );
  assert.equal(
    playlist.detectPlaylistPage("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLabc123"),
    true
  );
  assert.equal(
    playlist.detectPlaylistPage("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
    false
  );
});

test("extracts playlist video links in order and removes duplicates", () => {
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "ytd-playlist-video-list-renderer, ytd-playlist-panel-renderer, #playlist, ytd-playlist-panel-video-renderer") {
        return null;
      }

      return null;
    },
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href*="/watch?v="]');

      return [
        createAnchor("/watch?v=aaaaaaaaaaa&list=PLdemo&index=1", "First video", {
          cardTitle: "First video",
          thumbnailUrl: "https://img/one.jpg"
        }),
        createAnchor("/watch?v=bbbbbbbbbbb&list=PLdemo&index=2", "Second video", {
          cardTitle: "Second video"
        }),
        createAnchor("/watch?v=aaaaaaaaaaa&list=PLdemo&index=1", "Duplicate first"),
        createAnchor("/watch?v=ccccccccccc", "Recommendation without list"),
        createAnchor("/shorts/ddddddddddd", "Short not in playlist")
      ];
    }
  };

  assert.deepEqual(
    playlist.extractPlaylistVideoLinks(fakeDocument, "https://www.youtube.com/playlist?list=PLdemo"),
    [
      {
        videoId: "aaaaaaaaaaa",
        url: "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo&index=1",
        title: "First video",
        thumbnailUrl: "https://img/one.jpg",
        index: 1
      },
      {
        videoId: "bbbbbbbbbbb",
        url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo&index=2",
        title: "Second video",
        thumbnailUrl: "",
        index: 2
      }
    ]
  );
});

test("uses watch-page playlist sidebar links when available", () => {
  const playlistPanel = {
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href*="/watch?v="]');

      return [
        createAnchor("/watch?v=aaaaaaaaaaa&list=PLdemo&index=1", "First"),
        createAnchor("/watch?v=bbbbbbbbbbb&list=PLdemo&index=2", "Second")
      ];
    }
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "ytd-playlist-video-list-renderer, ytd-playlist-panel-renderer, #playlist, ytd-playlist-panel-video-renderer") {
        return playlistPanel;
      }

      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=recommend01", "Recommendation")
      ];
    }
  };

  assert.deepEqual(
    playlist.extractPlaylistVideoLinks(fakeDocument, "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo"),
    [
      {
        videoId: "aaaaaaaaaaa",
        url: "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo&index=1",
        title: "First",
        thumbnailUrl: "",
        index: 1
      },
      {
        videoId: "bbbbbbbbbbb",
        url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo&index=2",
        title: "Second",
        thumbnailUrl: "",
        index: 2
      }
    ]
  );
});

test("playlist scan queue records skipped transcripts without crashing", async () => {
  const state = playlist.createPlaylistScanState();

  playlist.addVideosToPlaylistScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "Available", url: "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo" },
    { videoId: "bbbbbbbbbbb", title: "Unavailable", url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo" }
  ]);
  state.status = "scanning";

  await playlist.runPlaylistScanQueue(state, {
    fetchTranscript(video) {
      if (video.videoId === "aaaaaaaaaaa") {
        return Promise.resolve({
          ok: true,
          rows: [{ timestamp: "0:01", text: "Hello" }],
          transcriptLanguage: "English"
        });
      }

      return Promise.resolve({
        ok: false,
        reason: "No caption tracks found"
      });
    }
  });

  assert.equal(state.status, "completed");
  assert.deepEqual(state.successes.map((video) => video.videoId), ["aaaaaaaaaaa"]);
  assert.deepEqual(state.failures, [
    {
      videoId: "bbbbbbbbbbb",
      title: "Unavailable",
      url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo",
      reason: "No caption tracks found"
    }
  ]);
});

test("playlist scan queue stops after cancel and keeps the active video retryable", async () => {
  const state = playlist.createPlaylistScanState();
  const fetchedVideoIds = [];

  playlist.addVideosToPlaylistScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First video", url: "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo" },
    { videoId: "bbbbbbbbbbb", title: "Second video", url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo" }
  ]);
  state.status = "scanning";

  await playlist.runPlaylistScanQueue(state, {
    fetchTranscript(video) {
      fetchedVideoIds.push(video.videoId);
      state.status = "cancelled";
      return Promise.resolve({
        ok: true,
        rows: [{ timestamp: "0:01", text: "Ignored after cancel" }],
        transcriptLanguage: "English"
      });
    }
  });

  assert.deepEqual(fetchedVideoIds, ["aaaaaaaaaaa"]);
  assert.equal(state.successes.length, 0);
  assert.equal(state.failures.length, 0);
  assert.equal(state.queue[0].videoId, "aaaaaaaaaaa");
  assert.equal(state.queue[1].videoId, "bbbbbbbbbbb");
  assert.equal(state.currentVideo, null);
});

test("playlist scrolling scan stops when cancellation says not to continue", async () => {
  let delayCalls = 0;
  let shouldContinueCalls = 0;
  const fakeDocument = {
    scrollingElement: {
      scrollHeight: 500,
      scrollTo() {}
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    }
  };

  await playlist.scanPlaylistVideos(
    fakeDocument,
    "https://www.youtube.com/playlist?list=PLdemo",
    {
      maxScrolls: 10,
      delay() {
        delayCalls += 1;
        return Promise.resolve();
      },
      shouldContinue() {
        shouldContinueCalls += 1;
        return delayCalls === 0;
      }
    }
  );

  assert.equal(delayCalls, 1);
  assert.ok(shouldContinueCalls >= 1);
});
