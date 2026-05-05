const assert = require("node:assert/strict");
const test = require("node:test");

const navigation = require("../src/utils/navigation.js");
const sidebar = require("../src/utils/sidebar.js");
const youtube = require("../src/utils/youtube.js");

test("gets the video ID from a normal YouTube watch URL", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("gets the video ID when a watch URL has extra query parameters", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=PL123&t=42s");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("gets the video ID from youtube.com without the www prefix", () => {
  const videoId = youtube.getVideoIdFromUrl("https://youtube.com/watch?v=dQw4w9WgXcQ");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("gets the video ID from mobile YouTube watch URLs", () => {
  const videoId = youtube.getVideoIdFromUrl("https://m.youtube.com/watch?v=dQw4w9WgXcQ");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("returns null for the YouTube homepage", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/");

  assert.equal(videoId, null);
});

test("returns null for YouTube search results", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/results?search_query=javascript");

  assert.equal(videoId, null);
});

test("gets the video ID from a YouTube Shorts URL", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/shorts/dQw4w9WgXcQ");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("gets the video ID from a YouTube Shorts URL with extra path or query data", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/shorts/dQw4w9WgXcQ?feature=share");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("gets the video ID from mobile YouTube Shorts URLs", () => {
  const videoId = youtube.getVideoIdFromUrl("https://m.youtube.com/shorts/dQw4w9WgXcQ?feature=share");

  assert.equal(videoId, "dQw4w9WgXcQ");
});

test("returns null for YouTube embed pages", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/embed/dQw4w9WgXcQ");

  assert.equal(videoId, null);
});

test("returns null when the watch URL is missing a video ID", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/watch");

  assert.equal(videoId, null);
});

test("returns null when the video ID is too short", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/watch?v=abc123");

  assert.equal(videoId, null);
});

test("returns null when the video ID contains unsafe characters", () => {
  const videoId = youtube.getVideoIdFromUrl("https://www.youtube.com/watch?v=dQw4w9WgXc!");

  assert.equal(videoId, null);
});

test("returns null for a non-YouTube URL", () => {
  const videoId = youtube.getVideoIdFromUrl("https://example.com/watch?v=dQw4w9WgXcQ");

  assert.equal(videoId, null);
});

test("detects whether a URL is a supported YouTube video page", () => {
  assert.equal(youtube.isYouTubeWatchPage("https://www.youtube.com/watch?v=dQw4w9WgXcQ"), true);
  assert.equal(youtube.isYouTubeWatchPage("https://www.youtube.com/shorts/dQw4w9WgXcQ"), true);
  assert.equal(youtube.isYouTubeWatchPage("https://www.youtube.com/results?search_query=test"), false);
});

test("navigation asks to render when entering a normal video page", () => {
  const action = navigation.getPageAction(
    null,
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "render", videoId: "dQw4w9WgXcQ" });
});

test("navigation asks to render when entering a YouTube Shorts page", () => {
  const action = navigation.getPageAction(
    null,
    "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "render", videoId: "dQw4w9WgXcQ" });
});

test("navigation asks to render when moving from one video to another", () => {
  const action = navigation.getPageAction(
    "aaaaaaaaaaa",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "render", videoId: "dQw4w9WgXcQ" });
});

test("navigation asks to remove when leaving a normal video page", () => {
  const action = navigation.getPageAction(
    "dQw4w9WgXcQ",
    "https://www.youtube.com/",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "remove", videoId: null });
});

test("navigation asks to remove on YouTube search results", () => {
  const action = navigation.getPageAction(
    "dQw4w9WgXcQ",
    "https://www.youtube.com/results?search_query=javascript",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "remove", videoId: null });
});

test("navigation keeps the current panel when the video ID did not change", () => {
  const action = navigation.getPageAction(
    "dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s",
    youtube.getVideoIdFromUrl
  );

  assert.deepEqual(action, { type: "keep", videoId: "dQw4w9WgXcQ" });
});

test("sidebar shell keeps the current video ID visible for testing", () => {
  const shell = sidebar.createSidebarShellState("dQw4w9WgXcQ", "Example Video");

  assert.equal(shell.videoId, "dQw4w9WgXcQ");
  assert.equal(shell.videoTitle, "Example Video");
});

test("sidebar shell includes disabled transcript controls for this phase", () => {
  const shell = sidebar.createSidebarShellState("dQw4w9WgXcQ", "Example Video");

  assert.equal(shell.search.disabled, true);
  assert.deepEqual(
    shell.actions.map((action) => ({ label: action.label, disabled: action.disabled })),
    [
      { label: "Copy", disabled: true },
      { label: "TXT", disabled: true },
      { label: "Markdown", disabled: true }
    ]
  );
});

test("sidebar shell explains that transcripts are not loaded yet", () => {
  const shell = sidebar.createSidebarShellState("dQw4w9WgXcQ", "");

  assert.equal(shell.statusLabel, "Status");
  assert.equal(shell.statusMessage, "Checking transcript availability...");
  assert.equal(shell.transcriptPlaceholder, "Transcript will appear here after the next phase.");
});
