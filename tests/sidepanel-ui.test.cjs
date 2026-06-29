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

function getCssRule(selector) {
  const ruleStart = sidePanelCss.indexOf(`${selector} {`);
  assert.notEqual(ruleStart, -1, `Missing CSS rule for ${selector}`);
  const ruleEnd = sidePanelCss.indexOf("\n}", ruleStart);
  assert.notEqual(ruleEnd, -1, `Missing CSS rule end for ${selector}`);
  return sidePanelCss.slice(ruleStart, ruleEnd + 2);
}

function getSupportLinks() {
  return sidePanelHtml.match(/<a\b(?=[^>]*\bdata-support-link\b)[^>]*>[\s\S]*?<\/a>/g) || [];
}

function getSupportNudgeMarkup() {
  const start = sidePanelHtml.indexOf('<div class="support-nudge-card" id="support-nudge-card"');
  assert.notEqual(start, -1, "Missing support nudge card");
  const end = sidePanelHtml.indexOf('<div class="content-region">', start);
  assert.notEqual(end, -1, "Missing support nudge card boundary");
  return sidePanelHtml.slice(start, end);
}

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
  assert.match(sidePanelHtml, /id="btn-export-toggle"/);
  assert.match(
    sidePanelHtml,
    /id="btn-export-toggle"[\s\S]*aria-haspopup="menu"[\s\S]*aria-expanded="false"[\s\S]*aria-controls="export-menu"/,
  );
  assert.match(sidePanelHtml, />Download</);
  assert.match(sidePanelHtml, /id="export-menu"/);
  assert.match(sidePanelHtml, /id="btn-download-txt"/);
  assert.match(sidePanelHtml, /id="btn-download-md"/);
  assert.match(sidePanelHtml, /id="btn-download-json"/);
  assert.match(sidePanelHtml, />TXT</);
  assert.match(sidePanelHtml, />Markdown</);
  assert.match(sidePanelHtml, />JSON data</);
  assert.doesNotMatch(sidePanelHtml, /id="btn-more-downloads"/);
});

test("side panel does not duplicate the native Chrome side-panel header", () => {
  assert.doesNotMatch(sidePanelHtml, /class="app-bar"/);
  assert.doesNotMatch(sidePanelHtml, /YouTube Transcript Helper/);
  assert.doesNotMatch(sidePanelHtml, /id="btn-close-panel"/);
  assert.doesNotMatch(sidePanelCss, /\.app-bar\s*\{/);
  assert.doesNotMatch(sidePanelCss, /\.icon-btn\s*\{/);
  assert.doesNotMatch(sidePanelScript, /btnClosePanel/);
});

test("side panel shell uses the framed working reader design", () => {
  const containerRule = getCssRule(".panel-container");
  const appShellRule = getCssRule(".app-shell");

  assert.match(containerRule, /padding:\s*0;/);
  assert.match(appShellRule, /border:\s*1px solid rgba\(105,\s*159,\s*135,\s*0\.34\);/);
  assert.match(appShellRule, /border-radius:\s*14px;/);
});

test("side panel uses the ScribeDock brand without changing local privacy copy", () => {
  assert.match(sidePanelHtml, /<title>ScribeDock<\/title>/);
  assert.match(sidePanelHtml, /class="header-label">ScribeDock</);
  assert.match(sidePanelHtml, /src="\.\.\/icons\/scribedock-48\.png"/);
  assert.match(sidePanelHtml, /ScribeDock turns transcripts into clean, searchable text\./);
  assert.match(
    sidePanelHtml,
    /Works only on YouTube\. Transcript text stays local unless you copy or download it\./,
  );
});

test("side panel footer keeps status text and jump action on one clean row", () => {
  assert.match(
    sidePanelCss,
    /\.footer-status\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) auto;/,
  );
  assert.match(
    sidePanelCss,
    /\.footer-group span\s*\{[\s\S]*?white-space:\s*nowrap;/,
  );
  assert.match(
    sidePanelCss,
    /#follow-status\s*\{[\s\S]*?text-overflow:\s*ellipsis;/,
  );
  assert.match(
    sidePanelCss,
    /\.jump-current-btn\s*\{[\s\S]*?margin:\s*0;[\s\S]*?min-height:\s*26px;[\s\S]*?white-space:\s*nowrap;/,
  );
});

test("side panel exposes visible support links safely", () => {
  const supportLinks = getSupportLinks();
  const channelModeStart = sidePanelHtml.indexOf('<div class="channel-state" id="state-channel-mode" hidden>');
  const playlistModeStart = sidePanelHtml.indexOf('<div class="playlist-state" id="state-playlist-mode" hidden>');
  const loadingStateStart = sidePanelHtml.indexOf('<div class="empty-state" id="state-loading" hidden>');
  const channelModeMarkup = sidePanelHtml.slice(channelModeStart, playlistModeStart);
  const playlistModeMarkup = sidePanelHtml.slice(playlistModeStart, loadingStateStart);

  assert.ok(supportLinks.length >= 2, "Expected multiple support links");
  assert.equal((sidePanelHtml.match(/<div class="support-card">/g) || []).length, 2);
  assert.match(channelModeMarkup, /<div class="channel-actions">[\s\S]*?<\/div>\s*<div class="support-card">/);
  assert.match(playlistModeMarkup, /<div class="channel-actions">[\s\S]*?<\/div>\s*<div class="support-card">/);
  assert.match(sidePanelHtml, /<strong>ScribeDock is free\.<\/strong>/);
  assert.match(sidePanelHtml, /<span>Support helps fund fixes and better exports\.<\/span>/);
  assert.doesNotMatch(sidePanelHtml, /id="support-link"/);

  supportLinks.forEach((supportLink) => {
    assert.match(supportLink, /href="https:\/\/ko-fi\.com\/scribedock"/);
    assert.match(supportLink, /target="_blank"/);
    assert.match(supportLink, /rel="noopener noreferrer"/);
  });

  assert.match(sidePanelScript, /const SUPPORT_URL = 'https:\/\/ko-fi\.com\/scribedock';/);
  assert.match(
    sidePanelScript,
    /supportLinks: Array\.from\(document\.querySelectorAll\('\[data-support-link\]'\)\)/,
  );
  assert.match(
    sidePanelScript,
    /elements\.supportLinks\.forEach\(\(supportLink\) => \{[\s\S]*?supportLink\.href = SUPPORT_URL;[\s\S]*?supportLink\.target = '_blank';[\s\S]*?supportLink\.rel = 'noopener noreferrer';/,
  );
  assert.match(sidePanelCss, /\.support-card\s*\{/);
  assert.match(sidePanelCss, /\.support-card-copy\s*\{/);
  assert.match(sidePanelCss, /\.support-card-link\s*\{/);
  assert.match(sidePanelCss, /\.support-link\s*\{/);
});

test("side panel shows a one-time post-download support nudge safely", () => {
  const supportNudgeMarkup = getSupportNudgeMarkup();

  assert.match(sidePanelHtml, /id="support-nudge-video-slot"/);
  assert.match(sidePanelHtml, /id="support-nudge-channel-slot"/);
  assert.match(sidePanelHtml, /id="support-nudge-playlist-slot"/);
  assert.match(
    supportNudgeMarkup,
    /id="support-nudge-card"[\s\S]*role="status"[\s\S]*aria-live="polite"[\s\S]*hidden/,
  );
  assert.match(supportNudgeMarkup, /ScribeDock saved you time\?/);
  assert.match(
    supportNudgeMarkup,
    /Support future fixes and better exports, or send an idea for what to improve next\./,
  );
  assert.match(
    supportNudgeMarkup,
    /data-support-nudge-action="support"[\s\S]*href="https:\/\/ko-fi\.com\/scribedock"[\s\S]*target="_blank"[\s\S]*rel="noopener noreferrer"/,
  );
  assert.match(
    supportNudgeMarkup,
    /data-feedback-link[\s\S]*data-support-nudge-action="feedback"[\s\S]*href="https:\/\/ko-fi\.com\/scribedock"[\s\S]*target="_blank"[\s\S]*rel="noopener noreferrer"/,
  );
  assert.match(supportNudgeMarkup, /aria-label="Suggest an idea or support ScribeDock on Ko-fi"/);
  assert.match(supportNudgeMarkup, /id="btn-support-nudge-dismiss"[\s\S]*>Not now<\/button>/);
  assert.doesNotMatch(sidePanelHtml, /role="dialog"/);

  assert.match(sidePanelScript, /const SUPPORT_NUDGE_DOWNLOAD_THRESHOLD = 2;/);
  assert.match(sidePanelScript, /const SUPPORT_NUDGE_STORAGE_KEY = 'scribedockSupportNudge';/);
  assert.match(sidePanelScript, /return chrome\.storage\.local;/);
  assert.match(sidePanelScript, /downloadCount: supportNudgeState\.downloadCount/);
  assert.match(sidePanelScript, /hasShown: supportNudgeState\.hasShown/);
  assert.match(sidePanelScript, /storageArea\.get\(\[SUPPORT_NUDGE_STORAGE_KEY\]/);
  assert.match(sidePanelScript, /storageArea\.set\(\{\s*\[SUPPORT_NUDGE_STORAGE_KEY\]:/);
  assert.match(sidePanelScript, /function renderSupportNudge/);
  assert.match(sidePanelScript, /function recordSuccessfulDownloadForSupportNudge/);
  assert.match(sidePanelScript, /supportNudgeState\.downloadCount \+= 1;/);
  assert.match(sidePanelScript, /supportNudgeState\.downloadCount >= SUPPORT_NUDGE_DOWNLOAD_THRESHOLD/);
  assert.match(sidePanelScript, /function markSupportNudgeShown/);
  assert.match(sidePanelScript, /supportNudgeState\.hasShown = true;/);
  assert.match(sidePanelScript, /recordSuccessfulDownloadForSupportNudge\(\);/);
  assert.match(sidePanelCss, /\.support-nudge-card\s*\{/);
  assert.match(sidePanelCss, /\.support-nudge-card\[hidden\]\s*\{/);
  assert.match(sidePanelCss, /\.support-nudge-actions\s*\{/);
});

test("side panel visual system uses colorful app-style accent tokens", () => {
  assert.match(sidePanelCss, /--accent-blue:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--accent-purple:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--accent-pink:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--accent-lime:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--brand-gradient:\s*linear-gradient\(135deg,/);
  assert.match(sidePanelCss, /--glow-color:\s*rgba\(/);
});

test("side panel uses edge-to-edge layout for main sections", () => {
  const headerRule = getCssRule(".video-header");
  const toolbarRule = getCssRule(".toolbar");
  const transcriptRule = getCssRule(".transcript-container");

  assert.match(headerRule, /margin:\s*0;/);
  assert.match(headerRule, /border-radius:\s*0;/);
  assert.match(headerRule, /border-bottom:/);
  assert.match(toolbarRule, /margin:\s*0;/);
  assert.match(toolbarRule, /border-radius:\s*0;/);
  assert.match(transcriptRule, /margin:\s*0;/);
  assert.match(transcriptRule, /border-radius:\s*0;/);
});

test("side panel export formats render in normal toolbar flow", () => {
  const exportMenuRule = getCssRule(".export-menu");

  assert.match(
    sidePanelCss,
    /\.toolbar-actions\s*\{[\s\S]*?display:\s*grid;[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\) minmax\(0,\s*1fr\);/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu-wrap\s*\{[\s\S]*?position:\s*relative;[\s\S]*?display:\s*block;/,
  );
  assert.match(
    exportMenuRule,
    /position:\s*absolute;/,
  );
  assert.match(
    exportMenuRule,
    /top:\s*calc\(100% \+ 7px\);/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu-item\s*\{[\s\S]*?white-space:\s*nowrap;/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu-item:focus:not\(:focus-visible\)\s*\{[\s\S]*?box-shadow:\s*none;/,
  );
  assert.doesNotMatch(exportMenuRule, /position:\s*fixed;/);
  assert.doesNotMatch(exportMenuRule, /^\s*transform:/m);
});

test("export menu is hidden by default and only visible when explicitly opened", () => {
  assert.match(sidePanelHtml, /<div id="export-menu" class="export-menu" role="menu" hidden>/);
  assert.match(
    sidePanelCss,
    /\.export-menu\s*\{[\s\S]*?display:\s*none;[\s\S]*?pointer-events:\s*none;/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu\.is-open\s*\{[\s\S]*?display:\s*grid;[\s\S]*?pointer-events:\s*auto;/,
  );
  assert.doesNotMatch(
    getCssRule(".export-menu"),
    /display:\s*grid;/,
  );
});

test("export menu tracks open state and toggles only from the Download button", () => {
  assert.match(sidePanelScript, /let isExportMenuOpen = false;/);
  assert.match(sidePanelScript, /exportMenuWrap: document\.querySelector\('\.export-menu-wrap'\)/);
  assert.match(
    sidePanelScript,
    /function openExportMenu[\s\S]*?isExportMenuOpen = true;[\s\S]*?elements\.exportMenu\.classList\.add\('is-open'\);[\s\S]*?elements\.exportMenu\.hidden = false;/,
  );
  assert.match(
    sidePanelScript,
    /function closeExportMenu[\s\S]*?isExportMenuOpen = false;[\s\S]*?elements\.exportMenu\.classList\.remove\('is-open'\);[\s\S]*?elements\.exportMenu\.hidden = true;/,
  );
  assert.match(
    sidePanelScript,
    /function toggleExportMenu[\s\S]*?if \(isExportMenuOpen\) \{[\s\S]*?closeExportMenu\(\);[\s\S]*?\} else \{[\s\S]*?openExportMenu\(\{ focus: 'none' \}\);/,
  );
  assert.match(sidePanelScript, /elements\.btnExportToggle\.addEventListener\('click', toggleExportMenu\);/);

  const copyClickStart = sidePanelScript.indexOf("elements.btnCopy.addEventListener('click'");
  const copyClickEnd = sidePanelScript.indexOf("function exportTxtTranscriptFromState", copyClickStart);
  const copyClickBody = sidePanelScript.slice(copyClickStart, copyClickEnd);

  assert.doesNotMatch(copyClickBody, /openExportMenu|toggleExportMenu/);
});

test("export menu closes after selecting any export format", () => {
  const txtExportBody = sidePanelScript.slice(
    sidePanelScript.indexOf("function exportTxtTranscript()"),
    sidePanelScript.indexOf("function exportMarkdownTranscript()"),
  );
  const markdownExportBody = sidePanelScript.slice(
    sidePanelScript.indexOf("function exportMarkdownTranscript()"),
    sidePanelScript.indexOf("function exportJsonTranscript()"),
  );
  const jsonExportBody = sidePanelScript.slice(
    sidePanelScript.indexOf("function exportJsonTranscript()"),
    sidePanelScript.indexOf("elements.btnExportToggle.addEventListener"),
  );

  assert.match(txtExportBody, /closeExportMenu\(\);/);
  assert.match(markdownExportBody, /closeExportMenu\(\);/);
  assert.match(jsonExportBody, /closeExportMenu\(\);/);
  assert.match(sidePanelScript, /elements\.btnDownloadTxt\.addEventListener\('click', \(\) => \{[\s\S]*?exportTxtTranscript\(\);/);
  assert.match(sidePanelScript, /elements\.btnDownloadMd\.addEventListener\('click', \(\) => \{[\s\S]*?exportMarkdownTranscript\(\);/);
  assert.match(sidePanelScript, /elements\.btnDownloadJson\.addEventListener\('click', \(\) => \{[\s\S]*?exportJsonTranscript\(\);/);
});

test("export menu closes on outside click, Escape, and focus leaving the menu area", () => {
  assert.match(
    sidePanelScript,
    /document\.addEventListener\('click', \(event\) => \{[\s\S]*?isExportMenuOpen[\s\S]*?!elements\.exportMenuWrap\.contains\(event\.target\)[\s\S]*?closeExportMenu\(\);/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnExportToggle\.addEventListener\('keydown'[\s\S]*?event\.key === 'Escape' && isExportMenuOpen[\s\S]*?closeExportMenu\(\{ restoreFocus: true \}\);/,
  );
  assert.match(
    sidePanelScript,
    /elements\.exportMenu\.addEventListener\('keydown'[\s\S]*?event\.key === 'Escape'[\s\S]*?closeExportMenu\(\{ restoreFocus: true \}\);/,
  );
  assert.match(
    sidePanelScript,
    /elements\.exportMenuWrap\.addEventListener\('focusout'[\s\S]*?!elements\.exportMenuWrap\.contains\(event\.relatedTarget\)[\s\S]*?closeExportMenu\(\);/,
  );
});

test("side panel scan and transcript states use readable highlights", () => {
  assert.match(
    sidePanelCss,
    /\.channel-progress-fill\s*\{[\s\S]*?background:/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-metrics span\s*\{[\s\S]*?border-radius:\s*999px;/,
  );
  assert.match(
    sidePanelCss,
    /\.transcript-row\.active-row\s*\{[\s\S]*?background:/,
  );
  assert.match(
    sidePanelCss,
    /\.row-timestamp\s*\{[\s\S]*?border-radius:\s*999px;/,
  );
});

test("side panel JSON export uses metadata and downloads a json file", () => {
  assert.match(sidePanelScript, /function exportJsonTranscript/);
  assert.match(sidePanelScript, /buildJsonTranscriptExport/);
  assert.match(sidePanelScript, /createSafeFileName\(title, 'json'\)/);
  assert.match(sidePanelScript, /languageCode: safeState\.languageCode \|\| ''/);
  assert.match(sidePanelScript, /source: safeState\.source \|\| ''/);
});

test("export menu keeps button state in sync and supports keyboard navigation", () => {
  assert.match(sidePanelScript, /function openExportMenu/);
  assert.match(sidePanelScript, /function closeExportMenu/);
  assert.match(sidePanelScript, /function focusExportMenuItem/);
  assert.match(
    sidePanelScript,
    /elements\.btnExportToggle\.setAttribute\('aria-expanded', 'true'\);/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnExportToggle\.setAttribute\('aria-expanded', 'false'\);/,
  );
  assert.match(sidePanelScript, /elements\.btnExportToggle\.focus\(\);/);
  assert.match(
    sidePanelScript,
    /elements\.exportMenu\.addEventListener\('keydown'/,
  );
  assert.match(sidePanelScript, /event\.key === 'Escape'/);
  assert.match(sidePanelScript, /event\.key === 'ArrowDown'/);
  assert.match(sidePanelScript, /event\.key === 'ArrowUp'/);
  assert.match(sidePanelScript, /event\.key === 'Home'/);
  assert.match(sidePanelScript, /event\.key === 'End'/);
});

test("export menu uses polished styling and readable focus states", () => {
  assert.match(
    sidePanelCss,
    /\.export-menu\s*\{[\s\S]*?top:\s*calc\(100% \+ 7px\);[\s\S]*?margin-top:\s*0;[\s\S]*?padding:\s*5px;[\s\S]*?border:\s*1px solid var\(--border-default\);[\s\S]*?border-radius:\s*12px;[\s\S]*?backdrop-filter:\s*blur\(12px\);/,
  );
  assert.doesNotMatch(getCssRule(".export-menu"), /radial-gradient|::before|::after/);
  assert.match(
    sidePanelCss,
    /\.export-menu-item\s*\{[\s\S]*?min-height:\s*30px;[\s\S]*?justify-content:\s*flex-start;[\s\S]*?padding:\s*6px 9px;[\s\S]*?border-radius:\s*8px;[\s\S]*?background:\s*transparent;/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu-item:hover,\s*\.export-menu-item:focus-visible\s*\{[\s\S]*?background:\s*var\(--surface-control\);/,
  );
  assert.match(
    sidePanelCss,
    /\.export-menu-item:focus-visible\s*\{[\s\S]*?outline:\s*2px solid var\(--focus-ring\);/,
  );
});

test("side panel uses a soft reader palette instead of neon lime", () => {
  assert.match(sidePanelCss, /--surface-canvas:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--canvas:\s*var\(--surface-canvas\);/);
  assert.match(sidePanelCss, /--glass:\s*rgba\(/);
  assert.match(sidePanelCss, /--accent:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--accent-soft:\s*rgba\(/);
  assert.match(sidePanelCss, /--accent-ring:\s*rgba\(/);
  assert.match(sidePanelCss, /--text-primary:\s*#[0-9a-fA-F]{6};/);
  assert.match(sidePanelCss, /--border-subtle:\s*rgba\(/);
  assert.match(sidePanelCss, /--disabled-text:\s*rgba\(/);
  assert.doesNotMatch(sidePanelCss, /#b6ff00/i);
  assert.doesNotMatch(sidePanelCss, /--lime\b/);
  assert.doesNotMatch(sidePanelCss, /182,\s*255,\s*0/);
});

test("transcript reader uses muted timestamps and a soft active highlight", () => {
  const transcriptRowRule = getCssRule(".transcript-row");
  const rowTextRule = getCssRule(".row-text");

  assert.match(
    transcriptRowRule,
    /grid-template-columns:\s*48px minmax\(0,\s*1fr\);/,
  );
  assert.match(transcriptRowRule, /gap:\s*10px;/);
  assert.match(transcriptRowRule, /margin-bottom:\s*4px;/);
  assert.match(transcriptRowRule, /padding:\s*9px 10px;/);
  assert.match(rowTextRule, /line-height:\s*1\.5;/);
  assert.match(
    sidePanelCss,
    /\.row-timestamp\s*\{[\s\S]*?color:/,
  );
  assert.match(
    sidePanelCss,
    /\.transcript-row\.active-row\s*\{[\s\S]*?background:/,
  );
  assert.match(
    sidePanelCss,
    /\.transcript-row\.active-row\s*\{[\s\S]*?border-color:/,
  );
  assert.doesNotMatch(sidePanelCss, /\.transcript-row\.active-row::before/);
});

test("side panel explains supported pages and local transcript privacy", () => {
  assert.match(sidePanelHtml, /Open a YouTube video, channel, or playlist/);
  assert.match(
    sidePanelHtml,
    /Works only on YouTube\. Transcript text stays local unless you copy or download it\./,
  );
  assert.match(
    sidePanelCss,
    /\.empty-state-title\s*\{[\s\S]*?max-width:\s*230px;/,
  );
});

test("side panel supports pausing and resuming transcript auto-scroll", () => {
  assert.match(sidePanelHtml, /id="btn-jump-current"/);
  assert.match(sidePanelHtml, /Jump to current/);
  assert.match(sidePanelScript, /let isAutoScrollEnabled = true;/);
  assert.match(
    sidePanelScript,
    /elements\.transcriptContainer\.addEventListener\('scroll'/,
  );
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
  assert.match(
    sidePanelScript,
    /nextRow && Number\.isFinite\(nextRow\.startSeconds\)/,
  );
  assert.match(sidePanelScript, /Number\.POSITIVE_INFINITY/);
});

test("side panel looks ahead when choosing the active transcript row", () => {
  assert.match(sidePanelScript, /const TRANSCRIPT_SYNC_OFFSET_SECONDS = 0\.35;/);
  assert.match(
    sidePanelScript,
    /const adjustedTimeSeconds = currentTimeSeconds \+ TRANSCRIPT_SYNC_OFFSET_SECONDS;/,
  );
  assert.match(sidePanelScript, /start <= adjustedTimeSeconds/);
  assert.match(
    sidePanelScript,
    /activeRow = row;[\s\S]*?} else \{[\s\S]*?break;/,
  );
  assert.doesNotMatch(sidePanelScript, /currentTimeSeconds >= start && currentTimeSeconds < end/);
});

test("side panel locks clicked transcript rows during manual seeks", () => {
  assert.match(sidePanelScript, /let manualSeekLockUntil = 0;/);
  assert.match(sidePanelScript, /const MANUAL_SEEK_LOCK_MS = 700;/);
  assert.match(
    sidePanelScript,
    /manualSeekLockUntil = Date\.now\(\) \+ MANUAL_SEEK_LOCK_MS;/,
  );
  assert.match(
    sidePanelScript,
    /setActiveTranscriptRow\(rowElement\);[\s\S]*?sendMessageToTab\(\{ type: 'JUMP_TO_TIME', time: startSeconds \}\);/,
  );
  assert.match(
    sidePanelScript,
    /if \(Date\.now\(\) >= manualSeekLockUntil\) \{[\s\S]*?updateActiveHighlight\(activeStartSeconds\);/,
  );
});

test("side panel exposes subtle search guidance and keyboard-friendly rows", () => {
  assert.match(sidePanelHtml, /class="keyboard-hint"/);
  assert.match(sidePanelHtml, />Ctrl\+F</);
  assert.match(
    sidePanelHtml,
    /id="btn-jump-current"[^>]*title="Jump to current transcript row"/,
  );
  assert.match(
    sidePanelHtml,
    /id="btn-retry"[^>]*title="Retry loading transcript"/,
  );
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

test("side panel language selector stays compact and uses a restrained dropdown", () => {
  const languageTriggerRule = getCssRule(".language-trigger");
  const languageMenuRule = getCssRule(".language-menu");
  const languageOptionRule = getCssRule(".language-option");

  assert.match(languageTriggerRule, /max-width:\s*min\(190px,\s*calc\(100vw - 72px\)\);/);
  assert.match(languageTriggerRule, /min-height:\s*26px;/);
  assert.match(languageTriggerRule, /border-radius:\s*12px;/);
  assert.match(languageTriggerRule, /padding:\s*4px 26px 4px 10px;/);
  assert.match(languageMenuRule, /width:\s*var\(--language-menu-width,\s*min\(240px,\s*calc\(100vw - 32px\)\)\);/);
  assert.match(languageMenuRule, /min-width:\s*190px;/);
  assert.match(languageMenuRule, /max-width:\s*calc\(100vw - 32px\);/);
  assert.match(languageMenuRule, /border-radius:\s*12px;/);
  assert.match(languageMenuRule, /overflow-y:\s*auto;/);
  assert.match(languageOptionRule, /min-height:\s*30px;/);
  assert.match(languageOptionRule, /border-radius:\s*8px;/);
});

test("side panel language dropdown is not clipped by the header or toolbar", () => {
  const headerRule = getCssRule(".video-header");
  const languageRowRule = getCssRule(".language-row");
  const languageControlOpenRule = getCssRule(".language-control.is-open");
  const languageMenuRule = getCssRule(".language-menu");

  assert.match(headerRule, /overflow:\s*visible;/);
  assert.doesNotMatch(headerRule, /overflow:\s*hidden;/);
  assert.match(headerRule, /z-index:\s*30;/);
  assert.match(languageRowRule, /overflow:\s*visible;/);
  assert.match(languageControlOpenRule, /z-index:\s*70;/);
  assert.match(languageMenuRule, /position:\s*fixed;/);
  assert.match(languageMenuRule, /z-index:\s*80;/);
  assert.match(languageMenuRule, /top:\s*var\(--language-menu-top,\s*0\);/);
  assert.match(languageMenuRule, /left:\s*var\(--language-menu-left,\s*16px\);/);
  assert.match(languageMenuRule, /max-height:\s*var\(--language-menu-max-height,/);
  assert.match(sidePanelScript, /function positionLanguageMenu/);
  assert.match(sidePanelScript, /getBoundingClientRect\(\)/);
  assert.match(sidePanelScript, /window\.addEventListener\('resize', positionLanguageMenu\);/);
});

test("side panel status dot lives inside the status pill, not the transcript label", () => {
  assert.doesNotMatch(sidePanelCss, /\.header-label::before\s*\{/);
  assert.match(sidePanelCss, /\.status-pill::before\s*\{/);
});

test("side panel status pills use state classes for reduced-motion-safe pulse behavior", () => {
  assert.match(sidePanelScript, /function setStatusPillState/);
  assert.match(sidePanelScript, /classList\.remove\('is-ready', 'is-loading', 'is-scanning', 'is-error'\)/);
  assert.match(sidePanelScript, /classList\.add\(`is-\$\{statusState\}`\)/);
  assert.match(sidePanelCss, /\.status-pill\.is-ready::before\s*\{[\s\S]*?animation:\s*statusReadyPulse 2\.1s ease-in-out infinite;/);
  assert.match(sidePanelCss, /\.status-pill\.is-loading::before,\s*\.status-pill\.is-scanning::before\s*\{[\s\S]*?animation:\s*statusActivePulse 1\.35s ease-in-out infinite;/);
  assert.match(sidePanelCss, /\.status-pill\.is-error::before\s*\{[\s\S]*?animation:\s*none;/);
  assert.match(sidePanelCss, /@keyframes statusReadyPulse/);
  assert.match(sidePanelCss, /@keyframes statusActivePulse/);
  assert.match(
    sidePanelCss,
    /@media \(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*?\.status-pill::before,[\s\S]*?animation:\s*none;/,
  );
});

test("side panel renders channel mode without removing the transcript reader path", () => {
  assert.match(sidePanelHtml, /id="state-channel-mode"/);
  assert.match(sidePanelHtml, /id="channel-mode-label"/);
  assert.match(sidePanelHtml, /id="channel-tab-badge"/);
  assert.match(sidePanelHtml, /id="channel-avatar"/);
  assert.match(sidePanelHtml, /id="channel-avatar-fallback"/);
  assert.match(sidePanelHtml, /id="channel-visible-kind"/);
  assert.match(sidePanelHtml, /id="channel-note-text"/);
  assert.match(sidePanelHtml, /id="btn-scan-visible-videos"/);
  assert.match(sidePanelHtml, /id="btn-pause-channel-scan"/);
  assert.match(sidePanelHtml, /id="btn-resume-channel-scan"/);
  assert.match(sidePanelHtml, /id="btn-download-channel-zip"/);
  assert.match(sidePanelScript, /function renderChannelMode/);
  assert.match(sidePanelScript, /urlContext\.mode === 'CHANNEL_MODE'/);
  assert.match(sidePanelScript, /showState\('channel'\)/);
  assert.match(sidePanelScript, /showState\('loaded'\)/);
});

test("side panel renders playlist mode with separate controls", () => {
  assert.match(sidePanelHtml, /id="state-playlist-mode"/);
  assert.match(
    sidePanelHtml,
    /id="playlist-mode-label"[\s\S]*?>Playlist</,
  );
  assert.match(sidePanelHtml, /id="playlist-current-video-section"/);
  assert.match(sidePanelHtml, />Download current transcript</);
  assert.match(sidePanelHtml, /id="btn-download-playlist-current-video"/);
  assert.match(sidePanelHtml, /id="playlist-title"/);
  assert.match(sidePanelHtml, /id="playlist-visible-count"/);
  assert.match(sidePanelHtml, /id="btn-scan-playlist"/);
  assert.match(sidePanelHtml, />Scan playlist</);
  assert.match(sidePanelHtml, /id="btn-cancel-playlist-operation"/);
  assert.match(sidePanelHtml, /id="btn-download-playlist-zip"/);
  assert.match(sidePanelHtml, /id="bulk-export-format"/);
  assert.match(sidePanelHtml, />Download playlist ZIP</);
  assert.match(sidePanelScript, /function renderPlaylistMode/);
  assert.match(sidePanelScript, /urlContext\.mode === 'PLAYLIST_MODE'/);
  assert.match(sidePanelScript, /showState\('playlist'\)/);
  assert.match(sidePanelScript, /GET_PLAYLIST_SCAN_STATE/);
  assert.match(sidePanelScript, /SCAN_PLAYLIST_TRANSCRIPTS/);
  assert.match(sidePanelScript, /CANCEL_PLAYLIST_OPERATION/);
  assert.match(sidePanelScript, /GET_PLAYLIST_EXPORT_DATA/);
  assert.match(sidePanelScript, /Download playlist ZIP/);
  assert.match(sidePanelCss, /\.playlist-state\s*\{/);
});

test("playlist watch pages expose both current-video and playlist actions", () => {
  const renderPlaylistBody = sidePanelScript.slice(
    sidePanelScript.indexOf("function renderPlaylistMode"),
    sidePanelScript.indexOf("async function loadTranscriptState"),
  );

  assert.match(renderPlaylistBody, /safePageContext\.videoId/);
  assert.match(
    renderPlaylistBody,
    /elements\.playlistCurrentVideoSection\.hidden = !hasCurrentVideo/,
  );
  assert.match(renderPlaylistBody, /Download current transcript/);
  assert.match(
    sidePanelScript,
    /function downloadCurrentPlaylistVideoTranscript/,
  );
  assert.match(sidePanelScript, /getTranscriptStateFromTab\(\)/);
  assert.match(sidePanelScript, /exportTxtTranscriptFromState/);
});

test("playlist mode disables duplicate starts and shows cancel while running", () => {
  const renderPlaylistBody = sidePanelScript.slice(
    sidePanelScript.indexOf("function renderPlaylistMode"),
    sidePanelScript.indexOf("async function loadTranscriptState"),
  );

  assert.match(
    renderPlaylistBody,
    /const canCancelPlaylist = Boolean\(safeScanState\.canCancel\) \|\| isScanning/,
  );
  assert.match(
    renderPlaylistBody,
    /elements\.btnScanPlaylist\.disabled = isScanning/,
  );
  assert.match(
    renderPlaylistBody,
    /elements\.btnDownloadPlaylistZip\.disabled = isScanning \|\| !canDownloadTranscripts/,
  );
  assert.match(
    renderPlaylistBody,
    /elements\.btnCancelPlaylistOperation\.hidden = !canCancelPlaylist/,
  );
  assert.match(renderPlaylistBody, /Playlist download canceled/);
});

test("side panel keeps channel guidance short and clean", () => {
  assert.match(
    sidePanelScript,
    /\['Scanning visible videos only\.', 'Scroll down to load more\.'\]/,
  );
  assert.match(
    sidePanelScript,
    /\['Scanning visible Shorts only\.', 'Scroll down to load more\.'\]/,
  );
  assert.match(sidePanelScript, /function setLineBreakText/);
  assert.doesNotMatch(sidePanelScript, /channelNoteText\.innerHTML/);
});

test("bulk ZIP downloads expose format choice and guarded preparing states", () => {
  assert.match(sidePanelHtml, /id="bulk-export-format"[\s\S]*class="bulk-format-trigger"/);
  assert.match(sidePanelHtml, /id="bulk-export-format-menu"[\s\S]*class="bulk-format-menu"/);
  assert.match(sidePanelHtml, /data-format="txt">TXT<\/button>/);
  assert.match(sidePanelHtml, /data-format="md">MD<\/button>/);
  assert.match(sidePanelHtml, /data-format="json">JSON<\/button>/);
  assert.doesNotMatch(sidePanelHtml, /class="bulk-export-format"/);
  assert.match(sidePanelScript, /isPreparingZip:\s*false/);
  assert.match(sidePanelScript, /function setBulkExportFormat/);
  assert.match(sidePanelScript, /toggleBulkFormatMenu/);
  assert.match(sidePanelScript, /Preparing ZIP\.\.\./);
  assert.match(sidePanelScript, /BULK_ZIP_TRANSCRIPTS_PER_PART = 100/);
  assert.match(sidePanelScript, /createBulkZipParts/);
  assert.match(sidePanelScript, /Preparing ZIP part/);
  assert.match(sidePanelScript, /Downloading ZIP/);
  assert.match(sidePanelScript, /showZipDownloadError/);
  assert.match(sidePanelScript, /downloadBlobWithChromeDownloads/);
  assert.match(sidePanelScript, /await exportHelpers\.downloadBlobWithChromeDownloads/);
  assert.match(sidePanelScript, /try\s*\{[\s\S]*?zip\.generateAsync/);
  assert.match(sidePanelScript, /catch \(error\)/);
  assert.match(sidePanelCss, /\.bulk-format-menu\s*\{[\s\S]*?top:\s*calc\(100% \+ 7px\);/);
  assert.doesNotMatch(sidePanelCss, /\.bulk-format-menu\s*\{[\s\S]*?bottom:\s*calc\(100% \+ 7px\);/);
});

test("side panel shows channel loading and timeout states before allowing a scan", () => {
  assert.match(
    sidePanelScript,
    /safePageContext\.channelLoadStatus === 'settling'/,
  );
  assert.match(
    sidePanelScript,
    /safePageContext\.channelLoadStatus === 'timeout'/,
  );
  assert.match(
    sidePanelScript,
    /Channel detected - waiting for videos to load\.\.\./,
  );
  assert.match(
    sidePanelScript,
    /Only some videos may be loaded\. Scroll down or refresh if needed\./,
  );
  assert.match(
    sidePanelScript,
    /const canUseVisibleVideos = !isSettling && safePageContext\.visibleVideoCount > 0;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnScanVisibleVideos\.disabled = !canUseVisibleVideos;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.channelStatusPill\.textContent = isSettling/,
  );
  assert.match(sidePanelScript, /const channelProgressLabel = isSettling/);
  assert.match(
    sidePanelScript,
    /Channel detected - waiting for videos to load/,
  );
  assert.doesNotMatch(
    sidePanelScript,
    /elements\.channelProgressLabel\.textContent = isScanning[\s\S]*: 'Ready to scan';/,
  );
});

test("side panel ignores stale channel responses that do not match the active tab URL handle", () => {
  assert.match(sidePanelScript, /function getChannelHandleFromUrl/);
  assert.match(sidePanelScript, /function isCurrentChannelContext/);
  assert.match(sidePanelScript, /pageContext\.currentUrl/);
  assert.match(sidePanelScript, /pageContext\.channelHandleFromUrl/);
  assert.match(
    sidePanelScript,
    /if \(!isCurrentChannelContext\(pageContext, tab\)\) \{/,
  );
  assert.match(
    sidePanelScript,
    /scheduleChannelStateRefresh\(loadId, loadContext\);/,
  );
});

test("side panel syncs immediately when the active browser tab changes", () => {
  assert.match(sidePanelScript, /chrome\.tabs\.onActivated\.addListener/);
  assert.match(sidePanelScript, /function syncToActiveTab/);
  assert.match(sidePanelScript, /expectedTabId:/);
  assert.match(
    sidePanelScript,
    /renderVideoLoading\(tabVideoId\);[\s\S]*loadTranscriptState\(\{ expectedTabId: tab\.id, expectedVideoId: tabVideoId \}\)/,
  );
});

test("side panel ignores runtime messages sent by inactive YouTube tabs", () => {
  assert.match(
    sidePanelScript,
    /chrome\.runtime\.onMessage\.addListener\(\(message, sender\) =>/,
  );
  assert.match(sidePanelScript, /function isMessageFromCurrentTab/);
  assert.match(sidePanelScript, /sender\.tab\.id !== currentTabId/);
});

test("side panel rejects stale transcript responses by tab id and video id", () => {
  assert.match(sidePanelScript, /function isCurrentLoadContext/);
  assert.match(sidePanelScript, /options\.expectedTabId/);
  assert.match(sidePanelScript, /state\.videoId !== tabVideoId/);
  assert.match(
    sidePanelScript,
    /if \(loadId !== activeLoadId \|\| !isCurrentLoadContext\(loadContext\)\) return;/,
  );
});

test("disabled primary channel actions are visually muted and resume is only available when paused", () => {
  assert.match(
    sidePanelScript,
    /const canResumeChannelScan = !isSettling && isPaused;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnResumeChannelScan\.hidden = !canResumeChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnResumeChannelScan\.disabled = !canResumeChannelScan;/,
  );
  assert.match(sidePanelCss, /\.action-btn\.primary:disabled\s*\{/);
  assert.match(sidePanelCss, /\.channel-main-action:disabled\s*\{/);
});

test("settling channel pages hide stale active scan controls", () => {
  assert.match(
    sidePanelScript,
    /const canPauseChannelScan = !isSettling && isScanning;/,
  );
  assert.match(
    sidePanelScript,
    /const canResumeChannelScan = !isSettling && isPaused;/,
  );
  assert.match(
    sidePanelScript,
    /const canCancelChannelScan = !isSettling && \(isScanning \|\| isPausing \|\| isPaused\);/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnPauseChannelScan\.hidden = !canPauseChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnPauseChannelScan\.disabled = !canPauseChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnCancelChannelScan\.hidden = !canCancelChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnCancelChannelScan\.disabled = !canCancelChannelScan;/,
  );
});

test("side panel uses a compact tab badge for videos versus Shorts", () => {
  assert.match(sidePanelHtml, /id="channel-mode-label"[\s\S]*?>Channel</);
  assert.match(sidePanelHtml, /id="playlist-mode-label"[\s\S]*?>Playlist</);
  assert.match(sidePanelHtml, /class="channel-tab-badge">Playlist</);
  assert.match(
    sidePanelScript,
    /elements\.channelTabBadge\.textContent = isShortsTab \? 'Shorts' : 'Videos';/,
  );
  assert.match(sidePanelScript, /safePageContext\.channelTab === 'shorts'/);
  assert.match(sidePanelCss, /\.channel-mode-row\s*\{/);
  assert.match(sidePanelCss, /\.channel-tab-badge\s*\{/);
});

test("side panel keeps toolbar actions usable in narrow panels", () => {
  assert.match(sidePanelCss, /@media \(max-width:\s*360px\)/);
  assert.match(
    sidePanelCss,
    /@media \(max-width:\s*360px\)[\s\S]*?\.toolbar-actions\s*\{[\s\S]*?width:\s*100%;/,
  );
  assert.doesNotMatch(sidePanelCss, /@media \(max-width:\s*360px\)[\s\S]*?\.export-menu\s*\{[\s\S]*?grid-column:/);
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

test("channel ZIP export keeps manifest and failed reports while adding a README", () => {
  assert.match(sidePanelScript, /zip\.file\('README\.txt'/);
  assert.match(sidePanelScript, /zip\.file\('manifest\.json'/);
  assert.match(sidePanelScript, /zip\.file\('failed-videos\.txt'/);
});

test("side panel labels partial exports clearly when scans are paused or cancelled", () => {
  assert.match(sidePanelScript, /Download what's ready so far\./);
  assert.match(sidePanelScript, /Download partial ZIP/);
  assert.match(sidePanelScript, /safeScanState\.status === 'paused'/);
  assert.match(sidePanelScript, /safeScanState\.status === 'cancelled'/);
});

test("side panel uses state-based channel actions and cleaner progress labels", () => {
  assert.match(sidePanelScript, /Ready to scan/);
  assert.match(
    sidePanelScript,
    /Scanning — \$\{completedCount\} \/ \$\{totalCount\}/,
  );
  assert.match(
    sidePanelScript,
    /Paused — \$\{completedCount\} \/ \$\{totalCount\} scanned/,
  );
  assert.match(
    sidePanelScript,
    /Done — \$\{availableCount\} \$\{transcriptLabel\} ready/,
  );
  assert.match(
    sidePanelScript,
    /const canScanNewlyLoaded = isCompleted && safePageContext\.visibleVideoCount > \(safeScanState\.discoveredCount \|\| 0\);/,
  );
  assert.match(
    sidePanelScript,
    /const shouldShowScanAction = isSettling \|\| isReady \|\| canScanNewlyLoaded \|\| isCancelled;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnScanVisibleVideos\.hidden = !shouldShowScanAction;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnPauseChannelScan\.hidden = !canPauseChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnResumeChannelScan\.hidden = !canResumeChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnCancelChannelScan\.hidden = !canCancelChannelScan;/,
  );
  assert.match(
    sidePanelScript,
    /elements\.btnDownloadChannelZip\.hidden = !canDownloadTranscripts \|\| !shouldShowDownloadAction;/,
  );
  assert.match(sidePanelScript, /`Scan newly loaded \$\{itemLabel\}`/);
  assert.match(
    sidePanelScript,
    /`Download \$\{availableCount\} \$\{isShortsTab \? 'Shorts ' : ''\}\$\{transcriptLabel\}`/,
  );
});

test("channel action buttons separate the main action from secondary controls", () => {
  assert.match(sidePanelHtml, /class="action-btn primary channel-main-action"/);
  assert.match(sidePanelHtml, /class="action-btn quiet-danger"/);
  assert.match(sidePanelHtml, /class="channel-secondary-actions"/);
  assert.match(
    sidePanelHtml,
    /class="action-btn primary-soft channel-download-action"/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-actions\s*\{[\s\S]*?display:\s*grid;[\s\S]*?gap:\s*8px;/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-main-action,\s*\.channel-download-action\s*\{[\s\S]*?width:\s*100%;/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-secondary-actions\s*\{[\s\S]*?display:\s*flex;[\s\S]*?gap:\s*10px;/,
  );
  assert.match(sidePanelCss, /\.action-btn\.quiet-danger\s*\{/);
});

test("side panel renders real channel avatars and falls back on missing or broken images", () => {
  assert.match(sidePanelScript, /function renderChannelAvatar/);
  assert.match(sidePanelScript, /function updateChannelAvatarFallback/);
  assert.match(
    sidePanelScript,
    /elements\.channelAvatar\.addEventListener\('load'/,
  );
  assert.match(
    sidePanelScript,
    /elements\.channelAvatar\.addEventListener\('error'/,
  );
  assert.match(
    sidePanelScript,
    /elements\.channelAvatarFallback\.hidden = false;/,
  );
  assert.match(sidePanelScript, /elements\.channelAvatar\.hidden = true;/);
});

test("side panel rejects stale non-video responses by page key", () => {
  assert.match(sidePanelScript, /pageKey:/);
  assert.match(sidePanelScript, /loadContext\.pageKey/);
  assert.match(sidePanelScript, /activeLoadContext\.pageKey/);
});

test("channel avatar fallback displays initials from the channel name", () => {
  assert.match(sidePanelScript, /function getChannelInitials/);
  assert.match(sidePanelScript, /return initials \|\| 'YT';/);
  assert.match(
    sidePanelScript,
    /elements\.channelAvatarFallback\.textContent = getChannelInitials\(channelName\);/,
  );
  assert.match(
    sidePanelScript,
    /updateChannelAvatarFallback\(safePageContext\.channelName\);[\s\S]*?renderChannelAvatar\(safePageContext\.channelAvatarUrl\);/,
  );
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

test("side panel uses a clear two-pixel keyboard focus outline", () => {
  assert.match(sidePanelCss, /\.action-btn:focus-visible,/);
  assert.match(sidePanelCss, /\.language-option:focus-visible,/);
  assert.match(sidePanelCss, /\.transcript-row:focus-visible/);
  assert.match(sidePanelCss, /outline:\s*2px solid var\(--focus-ring\);/);
  assert.match(sidePanelCss, /outline-offset:\s*2px;/);
});

test("side panel orders available language options by selection, preference, priority, then label", () => {
  assert.match(sidePanelScript, /const COMMON_LANGUAGE_PRIORITY = \[/);
  assert.match(sidePanelScript, /function getOrderedLanguageOptions/);
  assert.match(sidePanelScript, /currentSelectedOption/);
  assert.match(sidePanelScript, /preferredOption/);
  assert.match(sidePanelScript, /priorityLanguageCodes/);
  assert.match(
    sidePanelScript,
    /\.sort\(\(left, right\) => left\.label\.localeCompare\(right\.label\)\)/,
  );
});
