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
      isYouTubePage: true
    }
  );
  assert.deepEqual(
    pageSupport.getPageContextFromUrl("https://www.youtube.com/@clearvaluetax"),
    {
      mode: "CHANNEL_MODE",
      isYouTubePage: true
    }
  );
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/c/ClearValueTax"), true);
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/channel/UC123456"), true);
  assert.equal(pageSupport.isSupportedYouTubeChannelUrl("https://www.youtube.com/user/clearvaluetax"), true);
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
