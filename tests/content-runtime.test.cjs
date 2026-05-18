const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const contentScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "content", "content.js"),
  "utf8",
);

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

test("channel export data includes scan status and preferred language context", () => {
  const exportBuilderBody = contentScript.slice(
    contentScript.indexOf("function buildChannelExportDataResponse"),
    contentScript.indexOf("function notifyChannelScanStateChanged"),
  );

  assert.match(exportBuilderBody, /status: channelScanState\.status/);
  assert.match(exportBuilderBody, /preferredTranscriptLanguage:/);
  assert.match(exportBuilderBody, /discoveredCount:/);
});

test("content script never falls back to the first caption track after selection exists", () => {
  assert.doesNotMatch(contentScript, /currentCaptionTracks\[0\]/);
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

test("content script does not request native-panel rows for an explicit selected track", () => {
  assert.doesNotMatch(contentScript, /nativeTranscriptFetcher:\s*function nativeTranscriptFetcher/);
});
