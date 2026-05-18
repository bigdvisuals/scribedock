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
const sidePanelCss = fs.readFileSync(
  path.join(__dirname, "..", "src", "sidepanel", "sidepanel.css"),
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

test("side panel exposes language selection controls and automatic mode wiring", () => {
  assert.match(sidePanelHtml, /id="language-trigger"/);
  assert.match(sidePanelHtml, /id="language-menu"/);
  assert.match(sidePanelHtml, /id="language-pill"/);
  assert.match(sidePanelHtml, /id="language-note"/);
  assert.match(sidePanelScript, /Auto \/ Best match/);
  assert.match(sidePanelScript, /SET_TRANSCRIPT_TRACK/);
  assert.match(sidePanelScript, /SET_TRANSCRIPT_MODE_AUTO/);
  assert.match(sidePanelScript, /function renderLanguageControl/);
});

test("side panel renders channel mode without removing the transcript reader path", () => {
  assert.match(sidePanelHtml, /id="state-channel-mode"/);
  assert.match(sidePanelHtml, />CHANNEL MODE</);
  assert.match(sidePanelHtml, /id="channel-avatar"/);
  assert.match(sidePanelHtml, /id="channel-avatar-fallback"/);
  assert.match(sidePanelHtml, /id="btn-scan-visible-videos"/);
  assert.match(sidePanelHtml, /id="btn-pause-channel-scan"/);
  assert.match(sidePanelHtml, /id="btn-resume-channel-scan"/);
  assert.match(sidePanelHtml, /id="btn-download-channel-zip"/);
  assert.match(sidePanelScript, /function renderChannelMode/);
  assert.match(sidePanelScript, /urlContext\.mode === 'CHANNEL_MODE'/);
  assert.match(sidePanelScript, /showState\('channel'\)/);
  assert.match(sidePanelScript, /showState\('loaded'\)/);
});

test("side panel keeps channel mode and language selector message contracts together", () => {
  assert.match(sidePanelScript, /GET_PAGE_CONTEXT/);
  assert.match(sidePanelScript, /SCAN_CHANNEL_TRANSCRIPTS/);
  assert.match(sidePanelScript, /GET_CHANNEL_SCAN_STATE/);
  assert.match(sidePanelScript, /GET_CHANNEL_EXPORT_DATA/);
  assert.match(sidePanelScript, /PAUSE_CHANNEL_SCAN/);
  assert.match(sidePanelScript, /RESUME_CHANNEL_SCAN/);
  assert.match(sidePanelScript, /SET_TRANSCRIPT_TRACK/);
  assert.match(sidePanelScript, /SET_TRANSCRIPT_MODE_AUTO/);
});

test("side panel labels partial exports clearly when scans are paused or cancelled", () => {
  assert.match(sidePanelScript, /Partial export includes transcripts found so far\./);
  assert.match(sidePanelScript, /Download partial ZIP/);
  assert.match(sidePanelScript, /safeScanState\.status === 'paused'/);
  assert.match(sidePanelScript, /safeScanState\.status === 'cancelled'/);
});

test("side panel renders real channel avatars and falls back on missing or broken images", () => {
  assert.match(sidePanelScript, /function renderChannelAvatar/);
  assert.match(sidePanelScript, /elements\.channelAvatar\.addEventListener\('load'/);
  assert.match(sidePanelScript, /elements\.channelAvatar\.addEventListener\('error'/);
  assert.match(sidePanelScript, /elements\.channelAvatarFallback\.hidden = false;/);
  assert.match(sidePanelScript, /elements\.channelAvatar\.hidden = true;/);
});

test("channel mode header uses one fixed avatar slot instead of two visible avatar columns", () => {
  assert.match(
    sidePanelHtml,
    /<div class="channel-avatar-slot">\s*<div id="channel-avatar-fallback"[\s\S]*?<img id="channel-avatar"/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-avatar-slot\s*\{[\s\S]*?width:\s*38px;[\s\S]*?height:\s*38px;/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-avatar,\s*\.channel-avatar-fallback\s*\{[\s\S]*?position:\s*absolute;[\s\S]*?inset:\s*0;/,
  );
});

test("channel avatar fallback and image can be hidden independently", () => {
  assert.match(
    sidePanelCss,
    /\.channel-avatar\[hidden\],\s*\.channel-avatar-fallback\[hidden\]\s*\{\s*display:\s*none;\s*\}/,
  );
});

test("renderChannelAvatar keeps the image hidden while loading and shows only the fallback when no URL exists", () => {
  assert.match(
    sidePanelScript,
    /if \(!safeAvatarUrl\) \{[\s\S]*?elements\.channelAvatar\.removeAttribute\('src'\);[\s\S]*?showChannelAvatarFallback\(\);[\s\S]*?return;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.channelAvatar\.hidden = true;[\s\S]*?elements\.channelAvatarFallback\.hidden = true;/,
  );
});

test("channel avatar load and error handlers never leave both avatar states visible", () => {
  assert.match(
    sidePanelScript,
    /function showChannelAvatarImage\(\) \{[\s\S]*?elements\.channelAvatar\.hidden = false;[\s\S]*?elements\.channelAvatarFallback\.hidden = true;/,
  );
  assert.match(
    sidePanelScript,
    /function showChannelAvatarFallback\(\) \{[\s\S]*?elements\.channelAvatar\.hidden = true;[\s\S]*?elements\.channelAvatarFallback\.hidden = false;/,
  );
});

test("side panel uses a custom accessible language listbox instead of a native select", () => {
  assert.doesNotMatch(sidePanelHtml, /<select[^>]+id="language-select"/);
  assert.match(sidePanelHtml, /aria-haspopup="listbox"/);
  assert.match(sidePanelHtml, /role="listbox"/);
  assert.match(sidePanelScript, /function openLanguageMenu/);
  assert.match(sidePanelScript, /function closeLanguageMenu/);
  assert.match(sidePanelScript, /event\.key === 'ArrowDown'/);
  assert.match(sidePanelScript, /event\.key === 'ArrowUp'/);
  assert.match(sidePanelScript, /event\.key === 'Escape'/);
});

test("side panel orders available language options by selection, preference, priority, then label", () => {
  assert.match(sidePanelScript, /const COMMON_LANGUAGE_PRIORITY = \[/);
  assert.match(sidePanelScript, /function getOrderedLanguageOptions/);
  assert.match(sidePanelScript, /currentSelectedOption/);
  assert.match(sidePanelScript, /preferredOption/);
  assert.match(sidePanelScript, /priorityLanguageCodes/);
  assert.match(sidePanelScript, /\.sort\(\(left, right\) => left\.label\.localeCompare\(right\.label\)\)/);
});
