const assert = require("node:assert/strict");
const test = require("node:test");

const channel = require("../src/utils/channel.js");

function createAnchor(href, title, thumbnailUrl, options = {}) {
  const card = options.cardTitle
    ? {
        querySelector(selector) {
          if (selector === "#video-title, #video-title-link, a#video-title-link, yt-formatted-string#video-title") {
            return {
              getAttribute(name) {
                return name === "title" ? options.cardTitle : "";
              },
              textContent: options.cardTitle
            };
          }

          return null;
        }
      }
    : null;

  return {
    getAttribute(name) {
      if (name === "href") {
        return href;
      }

      if (name === "title") {
        return title || "";
      }

      return "";
    },
    closest(selector) {
      if (options.isChannelCard === false) {
        return null;
      }

      if (
        selector ===
        "ytd-rich-item-renderer, ytd-rich-grid-media, ytd-rich-grid-slim-media, ytd-grid-video-renderer"
      ) {
        return card || {};
      }

      return null;
    },
    querySelector(selector) {
      if (selector === "img" && thumbnailUrl) {
        return {
          currentSrc: thumbnailUrl,
          src: thumbnailUrl
        };
      }

      return null;
    },
    textContent: title || ""
  };
}

test("extracts visible channel videos in DOM order without duplicates", () => {
  const fakeDocument = {
    querySelectorAll(selector) {
      assert.equal(selector, "a[href]");

      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "Video One", "https://img/one.jpg"),
        createAnchor("/shorts/abcdefghijk", "Short One", "https://img/short.jpg"),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Duplicate")
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@demo/videos"),
    [
      {
        videoId: "dQw4w9WgXcQ",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "Video One",
        thumbnailUrl: "https://img/one.jpg",
        isShort: false
      },
      {
        videoId: "abcdefghijk",
        url: "https://www.youtube.com/shorts/abcdefghijk",
        title: "Short One",
        thumbnailUrl: "https://img/short.jpg",
        isShort: true
      }
    ]
  );
});

test("prefers the channel card title over duplicate thumbnail-link text", () => {
  const fakeDocument = {
    querySelectorAll() {
      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "17:47", "https://img/one.jpg", {
          cardTitle: "Best Electric Cars in 2026"
        }),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Best Electric Cars in 2026", "", {
          cardTitle: "Best Electric Cars in 2026"
        }),
        createAnchor("/watch?v=abcdefghijk", "Sidebar recommendation", "", {
          isChannelCard: false
        })
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@demo/videos"),
    [
      {
        videoId: "dQw4w9WgXcQ",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "Best Electric Cars in 2026",
        thumbnailUrl: "https://img/one.jpg",
        isShort: false
      }
    ]
  );
});

test("falls back to an untitled label when no real title is available", () => {
  const fakeDocument = {
    querySelectorAll() {
      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "17:47", "https://img/one.jpg")
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@demo/videos"),
    [
      {
        videoId: "dQw4w9WgXcQ",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        title: "",
        thumbnailUrl: "https://img/one.jpg",
        isShort: false
      }
    ]
  );
});

test("preserves partial scan state while adding newly visible videos", () => {
  const state = channel.createChannelScanState();

  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "bbbbbbbbbbb", title: "Second" }
  ]);

  state.status = "scanning";
  state.processedVideoIds.aaaaaaaaaaa = true;
  state.successes.push({ videoId: "aaaaaaaaaaa" });
  state.queue.shift();

  channel.cancelChannelScanState(state);
  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "ccccccccccc", title: "Third" }
  ]);

  assert.equal(state.status, "cancelled");
  assert.deepEqual(state.queue.map((video) => video.videoId), ["bbbbbbbbbbb", "ccccccccccc"]);
  assert.deepEqual(state.successes.map((video) => video.videoId), ["aaaaaaaaaaa"]);
});

test("pause waits for the current item, then leaves the remaining queue untouched", async () => {
  const state = channel.createChannelScanState();
  const started = [];
  let finishFirst;

  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "bbbbbbbbbbb", title: "Second" }
  ]);
  state.status = "scanning";

  const scanPromise = channel.runChannelScanQueue(state, {
    fetchTranscript(video) {
      started.push(video.videoId);

      if (video.videoId === "aaaaaaaaaaa") {
        return new Promise((resolve) => {
          finishFirst = resolve;
        });
      }

      return Promise.resolve({ ok: true, rows: [] });
    }
  });

  channel.pauseChannelScanState(state);
  assert.equal(state.status, "pausing");
  finishFirst({ ok: true, rows: [] });
  await scanPromise;

  assert.deepEqual(started, ["aaaaaaaaaaa"]);
  assert.equal(state.status, "paused");
  assert.deepEqual(state.successes.map((video) => video.videoId), ["aaaaaaaaaaa"]);
  assert.deepEqual(state.queue.map((video) => video.videoId), ["bbbbbbbbbbb"]);
});

test("resume continues the remaining queue without rescanning completed videos", async () => {
  const state = channel.createChannelScanState();
  const started = [];

  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "bbbbbbbbbbb", title: "Second" }
  ]);
  state.status = "paused";
  state.processedVideoIds.aaaaaaaaaaa = true;
  state.successes.push({ videoId: "aaaaaaaaaaa" });
  state.queue.shift();

  channel.resumeChannelScanState(state);
  await channel.runChannelScanQueue(state, {
    fetchTranscript(video) {
      started.push(video.videoId);
      return Promise.resolve({ ok: true, rows: [] });
    }
  });

  assert.deepEqual(started, ["bbbbbbbbbbb"]);
  assert.equal(state.status, "completed");
  assert.deepEqual(state.successes.map((video) => video.videoId), ["aaaaaaaaaaa", "bbbbbbbbbbb"]);
});

test("cancel remains separate from pause and keeps partial results", async () => {
  const state = channel.createChannelScanState();

  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "bbbbbbbbbbb", title: "Second" }
  ]);
  state.status = "scanning";
  state.successes.push({ videoId: "alreadydone" });

  channel.cancelChannelScanState(state);
  await channel.runChannelScanQueue(state, {
    fetchTranscript() {
      throw new Error("cancelled scans must not continue");
    }
  });

  assert.equal(state.status, "cancelled");
  assert.deepEqual(state.successes.map((video) => video.videoId), ["alreadydone"]);
  assert.deepEqual(state.queue.map((video) => video.videoId), ["aaaaaaaaaaa", "bbbbbbbbbbb"]);
});

test("extracts the main channel page avatar before generic images", () => {
  const realAvatar = {
    currentSrc: "https://yt3.ggpht.com/real-avatar=s176-c-k-c0x00ffffff-no-rj",
    src: "https://yt3.ggpht.com/real-avatar=s176-c-k-c0x00ffffff-no-rj"
  };
  const unrelatedImage = {
    currentSrc: "https://i.ytimg.com/banner.jpg",
    src: "https://i.ytimg.com/banner.jpg"
  };
  const titleElement = {
    textContent: "Channel Name"
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "yt-page-header-renderer #avatar img") {
        return realAvatar;
      }

      if (selector === "yt-img-shadow img, #avatar img") {
        return unrelatedImage;
      }

      if (selector === "ytd-channel-name #text, #channel-name #text, yt-page-header-renderer #page-header #title") {
        return titleElement;
      }

      return null;
    }
  };

  assert.deepEqual(channel.getChannelMetadataFromDocument(fakeDocument), {
    channelName: "Channel Name",
    channelAvatarUrl: realAvatar.currentSrc
  });
});

test("returns an empty channel avatar when no real avatar exists", () => {
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "ytd-channel-name #text, #channel-name #text, yt-page-header-renderer #page-header #title") {
        return { textContent: "Channel Name" };
      }

      return null;
    }
  };

  assert.deepEqual(channel.getChannelMetadataFromDocument(fakeDocument), {
    channelName: "Channel Name",
    channelAvatarUrl: ""
  });
});
