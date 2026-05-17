const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const sidePanelScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "sidepanel", "sidepanel.js"),
  "utf8",
);
const sidePanelHtml = fs.readFileSync(
  path.join(__dirname, "..", "src", "sidepanel", "sidepanel.html"),
  "utf8",
);

test("side panel guards optional footer elements before using them", () => {
  assert.match(sidePanelScript, /if \(elements\.footer\) \{/);
  assert.match(sidePanelScript, /if \(elements\.lineCount\) \{/);
});

test("side panel does not expose AI-only controls", () => {
  assert.doesNotMatch(sidePanelHtml, />Summary</);
  assert.doesNotMatch(sidePanelHtml, />Key Points</);
  assert.doesNotMatch(sidePanelHtml, />Quiz</);
  assert.doesNotMatch(sidePanelHtml, />Ask</);
});

test("side panel uses one integrated app shell with reader-first actions", () => {
  assert.match(sidePanelHtml, /class="app-shell"/);
  assert.match(sidePanelHtml, /class="shell-main"/);
  assert.match(sidePanelHtml, /class="toolbar-actions"/);
  assert.match(sidePanelHtml, /id="btn-download-txt"/);
  assert.match(sidePanelHtml, />Download TXT</);
  assert.doesNotMatch(sidePanelHtml, /id="btn-more-downloads"/);
  assert.doesNotMatch(sidePanelHtml, /class="dropdown-menu"/);
});

test("side panel supports pausing and resuming transcript auto-scroll", () => {
  assert.match(sidePanelHtml, /id="btn-jump-current"/);
  assert.match(sidePanelHtml, /Jump to current/);
  assert.match(sidePanelScript, /let isAutoScrollEnabled = true;/);
  assert.match(sidePanelScript, /elements\.transcriptContainer\.addEventListener\('scroll'/);
  assert.match(sidePanelScript, /function resumeAutoScroll/);
  assert.match(sidePanelScript, /activeRowChanged && isAutoScrollEnabled/);
});

test("side panel keeps search rendering stable between state refreshes", () => {
  assert.match(sidePanelScript, /function buildRenderSignature/);
  assert.match(
    sidePanelScript,
    /lastRenderedSignature = buildRenderSignature\(sidePanelState\.rows, e\.target\.value\);/,
  );
});

test("side panel keeps zero-duration transcript rows highlightable", () => {
  assert.match(sidePanelScript, /function getRowEndSeconds/);
  assert.match(sidePanelScript, /nextRow && Number\.isFinite\(nextRow\.startSeconds\)/);
  assert.match(sidePanelScript, /Number\.POSITIVE_INFINITY/);
});

test("side panel exposes subtle search guidance and keyboard-friendly rows", () => {
  assert.match(sidePanelHtml, /class="keyboard-hint"/);
  assert.match(sidePanelHtml, />Ctrl\+F</);
  assert.match(sidePanelHtml, /id="btn-jump-current"[^>]*title="Jump to current transcript row"/);
  assert.match(sidePanelHtml, /id="btn-retry"[^>]*title="Retry loading transcript"/);
  assert.match(sidePanelScript, /div\.tabIndex = 0;/);
  assert.match(sidePanelScript, /div\.setAttribute\('role', 'button'\);/);
  assert.match(sidePanelScript, /div\.addEventListener\('keydown'/);
});
