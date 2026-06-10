const assert = require("node:assert/strict");
const test = require("node:test");

const pageSupport = require("../src/utils/page-support.js");

test("recognizes supported YouTube video and Shorts pages", () => {
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), true);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://www.youtube.com/shorts/dQw4w9WgXcQ"), true);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://m.youtube.com/shorts/dQw4w9WgXcQ"), true);
});

test("classifies channel URL shapes as channel mode", () => {
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/@clearvaluetax/videos"),
    {
      mode: "CHANNEL_MODE",
      isYouTubePage: true,
      channelTab: "videos",
      channelHandle: "clearvaluetax"
    }
  );
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/@clearvaluetax/shorts"),
    {
      mode: "CHANNEL_MODE",
      isYouTubePage: true,
      channelTab: "shorts",
      channelHandle: "clearvaluetax"
    }
  );
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/@clearvaluetax"),
    {
      mode: "CHANNEL_MODE",
      isYouTubePage: true,
      channelTab: "videos",
      channelHandle: "clearvaluetax"
    }
  );
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/c/ClearValueTax"), true);
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/channel/UC123456"), true);
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/user/clearvaluetax"), true);
  assert.equal(pageSupport.getChannelHandleFromUrl("https://www.youtube.com/@humphrey/videos"), "humphrey");
});

test("classifies playlist URL shapes as playlist mode before plain video mode", () => {
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/playlist?list=PLdemo"),
    {
      mode: "PLAYLIST_MODE",
      isYouTubePage: true,
      playlistId: "PLdemo"
    }
  );
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PLdemo"),
    {
      mode: "PLAYLIST_MODE",
      isYouTubePage: true,
      playlistId: "PLdemo",
      videoId: "dQw4w9WgXcQ"
    }
  );
});

test("classifies watch_videos queues as playlist-like mode with a stable page key", () => {
  assert.deepEqual(
    pageSupport.getPageContextFromUrl(
      "https://www.youtube.com/watch_videos?video_ids=VfohKtPKzeo%2CBXOYyhVRQV0%2CVfohKtPKzeo&title=Next+Level+Kitchen+%E2%80%A2+Top+episodes+for+you"
    ),
    {
      mode: "PLAYLIST_MODE",
      isYouTubePage: true,
      playlistId: "",
      sourceType: "queue",
      pageKey: "queue:VfohKtPKzeo,BXOYyhVRQV0",
      playlistTitle: "Next Level Kitchen • Top episodes for you"
    }
  );
});

test("classifies YouTube show pages as playlist-like mode", () => {
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/show/SCdemoEpisodes"),
    {
      mode: "PLAYLIST_MODE",
      isYouTubePage: true,
      playlistId: "",
      sourceType: "show",
      pageKey: "show:/show/SCdemoEpisodes"
    }
  );
});

test("classifies unsupported YouTube and non-YouTube pages neutrally", () => {
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/results?search_query=test"),
    {
      mode: "UNSUPPORTED_MODE",
      isYouTubePage: true
    }
  );
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://example.com/"),
    {
      mode: "UNSUPPORTED_MODE",
      isYouTubePage: false
    }
  );
});
