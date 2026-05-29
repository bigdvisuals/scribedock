const assert = require("node:assert/strict");
const test = require("node:test");

const channel = require("../src/utils/channel.js");
const activeChannelTabSelector = [
  'yt-tab-shape[aria-selected="true"]',
  'yt-tab-shape[aria-current="page"]',
  "yt-tab-shape[selected]",
  "yt-tab-shape[tab-title].yt-tab-shape-wiz__tab--tab-selected",
  'tp-yt-paper-tab[aria-selected="true"]',
  "tp-yt-paper-tab.iron-selected",
  '[role="tab"][aria-selected="true"]',
  '[role="tab"][aria-current="page"]'
].join(", ");

function createAnchor(href, title, thumbnailUrl, options = {}) {
  const card = options.isChannelCard === false
    ? null
    : {
        querySelector(selector) {
          if (selector === "#video-title, #video-title-link, a#video-title-link, yt-formatted-string#video-title") {
            return {
              getAttribute(name) {
                return name === "title" ? options.cardTitle || "" : "";
              },
              textContent: options.cardTitle || ""
            };
          }

          if (selector === "img" && options.cardThumbnailUrl) {
            return {
              currentSrc: options.cardThumbnailUrl,
              src: options.cardThumbnailUrl
            };
          }

          return null;
        }
      };

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
        "ytd-rich-item-renderer, ytd-rich-grid-media, ytd-rich-grid-slim-media, ytd-grid-video-renderer, ytd-video-renderer"
      ) {
        return card;
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

test("on the Videos tab, extracts only visible watch-page channel videos without duplicates", () => {
  const fakeDocument = {
    querySelector() {
      return null;
    },
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href*="/watch?v="]');

      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "17:47", "", {
          cardTitle: "Rich item video",
          cardThumbnailUrl: "https://img/rich.jpg"
        }),
        createAnchor("/watch?v=aaaaaaaaaaa", "Grid video", "https://img/grid.jpg", {
          cardTitle: "Grid video"
        }),
        createAnchor("/watch?v=bbbbbbbbbbb", "Rich grid video", "https://img/rich-grid.jpg", {
          cardTitle: "Rich grid video"
        }),
        createAnchor("/watch?v=ccccccccccc", "List video", "https://img/list.jpg", {
          cardTitle: "List video"
        }),
        createAnchor("/shorts/abcdefghijk", "Short One", "https://img/short.jpg", {
          cardTitle: "Short One"
        }),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Duplicate", "", {
          cardTitle: "Duplicate"
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
        title: "Rich item video",
        thumbnailUrl: "https://img/rich.jpg",
        isShort: false
      },
      {
        videoId: "aaaaaaaaaaa",
        url: "https://www.youtube.com/watch?v=aaaaaaaaaaa",
        title: "Grid video",
        thumbnailUrl: "https://img/grid.jpg",
        isShort: false
      },
      {
        videoId: "bbbbbbbbbbb",
        url: "https://www.youtube.com/watch?v=bbbbbbbbbbb",
        title: "Rich grid video",
        thumbnailUrl: "https://img/rich-grid.jpg",
        isShort: false
      },
      {
        videoId: "ccccccccccc",
        url: "https://www.youtube.com/watch?v=ccccccccccc",
        title: "List video",
        thumbnailUrl: "https://img/list.jpg",
        isShort: false
      }
    ]
  );
});

test("on the Shorts tab, extracts only visible Shorts links without duplicates", () => {
  const fakeDocument = {
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/shorts/abcdefghijk", "Short One", "https://img/short-one.jpg", {
          cardTitle: "Short One"
        }),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Regular video", "https://img/video.jpg", {
          cardTitle: "Regular video"
        }),
        createAnchor("/shorts/abcdefghijk", "Duplicate Short", "", {
          cardTitle: "Duplicate Short"
        }),
        createAnchor("/shorts/lmnopqrstuv", "Short Two", "https://img/short-two.jpg", {
          cardTitle: "Short Two"
        })
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@demo/shorts"),
    [
      {
        videoId: "abcdefghijk",
        url: "https://www.youtube.com/shorts/abcdefghijk",
        title: "Short One",
        thumbnailUrl: "https://img/short-one.jpg",
        isShort: true
      },
      {
        videoId: "lmnopqrstuv",
        url: "https://www.youtube.com/shorts/lmnopqrstuv",
        title: "Short Two",
        thumbnailUrl: "https://img/short-two.jpg",
        isShort: true
      }
    ]
  );
});

test("prefers the channel card title over duplicate thumbnail-link text", () => {
  const channelContent = {
    querySelectorAll() {
      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "17:47", "https://img/one.jpg", {
          cardTitle: "Best Electric Cars in 2026"
        }),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Best Electric Cars in 2026", "", {
          cardTitle: "Best Electric Cars in 2026"
        })
      ];
    }
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "#contents") {
        return channelContent;
      }

      return null;
    },
    querySelectorAll() {
      return [
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

test("ignores non-video and navigation links while keeping valid visible videos", () => {
  const channelContent = {
    querySelectorAll() {
      return [
        createAnchor("/playlist?list=PL123", "Playlist", "https://img/playlist.jpg"),
        createAnchor("/@demo", "Channel home", "https://img/channel.jpg"),
        createAnchor("/watch?v=dQw4w9WgXcQ", "Valid video", "https://img/valid.jpg", {
          cardTitle: "Valid video"
        })
      ];
    }
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "#contents") {
        return channelContent;
      }

      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=abcdefghijk", "Sidebar recommendation", "https://img/sidebar.jpg", {
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
        title: "Valid video",
        thumbnailUrl: "https://img/valid.jpg",
        isShort: false
      }
    ]
  );
});

test("falls back to an untitled label when no real title is available", () => {
  const fakeDocument = {
    querySelector() {
      return null;
    },
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

test("pause during the delay between videos settles into paused state", async () => {
  const state = channel.createChannelScanState();
  const started = [];
  let releaseDelay;

  channel.addVideosToScanState(state, [
    { videoId: "aaaaaaaaaaa", title: "First" },
    { videoId: "bbbbbbbbbbb", title: "Second" }
  ]);
  state.status = "scanning";

  const scanPromise = channel.runChannelScanQueue(state, {
    fetchTranscript(video) {
      started.push(video.videoId);
      return Promise.resolve({ ok: true, rows: [] });
    },
    delay() {
      return new Promise((resolve) => {
        releaseDelay = resolve;
      });
    }
  });

  await Promise.resolve();
  channel.pauseChannelScanState(state);
  assert.equal(state.status, "pausing");
  releaseDelay();
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

test("pause and resume also continue a Shorts queue from the remaining item", async () => {
  const state = channel.createChannelScanState();
  const started = [];
  let finishFirst;

  channel.addVideosToScanState(state, [
    { videoId: "abcdefghijk", title: "Short One", isShort: true },
    { videoId: "lmnopqrstuv", title: "Short Two", isShort: true }
  ]);
  state.status = "scanning";

  const pausePromise = channel.runChannelScanQueue(state, {
    fetchTranscript(video) {
      started.push(video.videoId);

      if (video.videoId === "abcdefghijk") {
        return new Promise((resolve) => {
          finishFirst = resolve;
        });
      }

      return Promise.resolve({ ok: true, rows: [] });
    }
  });

  channel.pauseChannelScanState(state);
  finishFirst({ ok: true, rows: [] });
  await pausePromise;

  channel.resumeChannelScanState(state);
  await channel.runChannelScanQueue(state, {
    fetchTranscript(video) {
      started.push(video.videoId);
      return Promise.resolve({ ok: true, rows: [] });
    }
  });

  assert.deepEqual(started, ["abcdefghijk", "lmnopqrstuv"]);
  assert.equal(state.status, "completed");
  assert.deepEqual(state.successes.map((video) => video.videoId), ["abcdefghijk", "lmnopqrstuv"]);
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

      if (selector === "yt-page-header-renderer #page-header #title") {
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

test("extracts channel metadata only from the current channel header", () => {
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "ytd-channel-name #text, #channel-name #text, yt-page-header-renderer #page-header #title") {
        return { textContent: "English At The Ready" };
      }

      if (selector === "yt-page-header-renderer #page-header #title") {
        return { textContent: "Humphrey Yang" };
      }

      if (selector === "yt-page-header-renderer #avatar img") {
        return {
          currentSrc: "https://img/humphrey-avatar.jpg",
          src: "https://img/humphrey-avatar.jpg"
        };
      }

      return null;
    }
  };

  assert.deepEqual(channel.getChannelMetadataFromDocument(fakeDocument), {
    channelName: "Humphrey Yang",
    channelAvatarUrl: "https://img/humphrey-avatar.jpg"
  });
});

test("returns an empty channel avatar when no real avatar exists", () => {
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "yt-page-header-renderer #page-header #title") {
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

test("reports channel readiness only after the expected tab and videos are present", () => {
  const videosTab = {
    textContent: "Videos",
    getAttribute(name) {
      return name === "aria-selected" ? "true" : "";
    }
  };
  const titleElement = {
    textContent: "Channel Name"
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "yt-page-header-renderer #page-header #title") {
        return titleElement;
      }

      if (selector === activeChannelTabSelector) {
        return videosTab;
      }

      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "Ready video", "https://img/ready.jpg", {
          cardTitle: "Ready video"
        })
      ];
    }
  };

  assert.deepEqual(
    channel.getChannelPageReadiness(fakeDocument, "https://www.youtube.com/@demo/videos"),
    {
      channelName: "Channel Name",
      channelAvatarUrl: "",
      expectedTab: "videos",
      activeTab: "videos",
      hasChannelHeader: true,
      hasExpectedActiveTab: true,
      channelNameFound: true,
      expectedTabFound: true,
      validCardsFound: true,
      visibleVideoCount: 1,
      urlTabType: "videos",
      activeTabType: "videos",
      visibleVideos: [
        {
          videoId: "dQw4w9WgXcQ",
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          title: "Ready video",
          thumbnailUrl: "https://img/ready.jpg",
          isShort: false
        }
      ],
      isReady: true
    }
  );
});

test("accepts URL-matching videos as ready even when YouTube active tab markup is wrong", () => {
  const shortsTab = {
    textContent: "Shorts",
    getAttribute(name) {
      return name === "aria-selected" ? "true" : "";
    }
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "yt-page-header-renderer #page-header #title") {
        return { textContent: "Channel Name" };
      }

      if (selector === activeChannelTabSelector) {
        return shortsTab;
      }

      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=dQw4w9WgXcQ", "Old video", "https://img/old.jpg", {
          cardTitle: "Old video"
        })
      ];
    }
  };

  const readiness = channel.getChannelPageReadiness(fakeDocument, "https://www.youtube.com/@demo/videos");

  assert.equal(readiness.expectedTab, "videos");
  assert.equal(readiness.activeTab, "shorts");
  assert.equal(readiness.hasExpectedActiveTab, false);
  assert.equal(readiness.channelNameFound, true);
  assert.equal(readiness.expectedTabFound, false);
  assert.equal(readiness.validCardsFound, true);
  assert.equal(readiness.visibleVideoCount, 1);
  assert.equal(readiness.urlTabType, "videos");
  assert.equal(readiness.activeTabType, "shorts");
  assert.equal(readiness.isReady, true);
});

test("LeonidKimMD videos page shape is ready with visible watch links and weird tab markup", () => {
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "yt-page-header-renderer #page-header #title") {
        return { textContent: "Leonid Kim MD" };
      }

      if (selector === activeChannelTabSelector) {
        return { textContent: "Latest", getAttribute() { return ""; } };
      }

      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=aaaaaaaaaaa", "Video One", "https://img/one.jpg", {
          isChannelCard: false
        }),
        createAnchor("/watch?v=bbbbbbbbbbb", "Video Two", "https://img/two.jpg", {
          isChannelCard: false
        }),
        createAnchor("/shorts/ccccccccccc", "Short One", "https://img/short.jpg", {
          isChannelCard: false
        })
      ];
    }
  };

  const readiness = channel.getChannelPageReadiness(
    fakeDocument,
    "https://www.youtube.com/@LeonidKimMD/videos"
  );

  assert.equal(readiness.isReady, true);
  assert.equal(readiness.visibleVideoCount, 2);
  assert.deepEqual(
    readiness.visibleVideos.map((video) => video.videoId),
    ["aaaaaaaaaaa", "bbbbbbbbbbb"]
  );
});

test("counts valid channel video links without known YouTube renderer wrappers", () => {
  const fakeDocument = {
    querySelector(selector) {
      return null;
    },
    querySelectorAll() {
      return [
        createAnchor("/watch?v=aaaaaaaaaaa", "Video One", "https://img/one.jpg", {
          isChannelCard: false
        }),
        createAnchor("/watch?v=bbbbbbbbbbb", "Video Two", "https://img/two.jpg", {
          isChannelCard: false
        }),
        createAnchor("/shorts/ccccccccccc", "Short One", "https://img/short.jpg", {
          isChannelCard: false
        })
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@demo/videos").map((video) => ({
      videoId: video.videoId,
      isShort: video.isShort
    })),
    [
      { videoId: "aaaaaaaaaaa", isShort: false },
      { videoId: "bbbbbbbbbbb", isShort: false }
    ]
  );
});

test("falls back to the document when the first channel content root has no video links", () => {
  const emptyContentsRoot = {
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href*="/watch?v="]');
      return [];
    }
  };
  const fakeDocument = {
    querySelector(selector) {
      if (selector === "#contents") {
        return emptyContentsRoot;
      }

      return null;
    },
    querySelectorAll(selector) {
      assert.equal(selector, 'a[href*="/watch?v="]');
      return [
        createAnchor("/watch?v=aaaaaaaaaaa", "Video One", "https://img/one.jpg", {
          isChannelCard: false
        }),
        createAnchor("/watch?v=bbbbbbbbbbb", "Video Two", "https://img/two.jpg", {
          isChannelCard: false
        })
      ];
    }
  };

  assert.deepEqual(
    channel.extractVisibleChannelVideos(fakeDocument, "https://www.youtube.com/@humphrey/videos").map((video) => video.videoId),
    ["aaaaaaaaaaa", "bbbbbbbbbbb"]
  );
});
