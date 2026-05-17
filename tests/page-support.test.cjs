const assert = require("node:assert/strict");
const test = require("node:test");

const pageSupport = require("../src/utils/page-support.js");

test("recognizes supported YouTube video and Shorts pages", () => {
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), true);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://www.youtube.com/shorts/dQw4w9WgXcQ"), true);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://m.youtube.com/shorts/dQw4w9WgXcQ"), true);
});

test("rejects non-video YouTube and non-YouTube pages", () => {
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://www.youtube.com/results?search_query=test"), false);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("https://example.com/watch?v=dQw4w9WgXcQ"), false);
  assert.equal(pageSupport.isSupportedYouTubeVideoUrl("not a url"), false);
});
