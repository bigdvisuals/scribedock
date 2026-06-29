const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const rootDir = path.join(__dirname, "..");
const welcomeDir = path.join(rootDir, "src", "welcome");
const welcomeHtmlPath = path.join(welcomeDir, "welcome.html");
const welcomeCssPath = path.join(welcomeDir, "welcome.css");
const welcomeJsPath = path.join(welcomeDir, "welcome.js");

const welcomeHtml = fs.readFileSync(welcomeHtmlPath, "utf8");
const welcomeCss = fs.readFileSync(welcomeCssPath, "utf8");
const welcomeScript = fs.readFileSync(welcomeJsPath, "utf8");

function getWelcomeLinks() {
  return welcomeHtml.match(/<a\b[^>]*>/g) || [];
}

test("welcome page files live under src so release packaging includes them", () => {
  assert.ok(fs.existsSync(welcomeHtmlPath));
  assert.ok(fs.existsSync(welcomeCssPath));
  assert.ok(fs.existsSync(welcomeJsPath));
});

test("welcome page presents the compact first-install guide", () => {
  assert.match(welcomeHtml, /<title>Welcome to ScribeDock<\/title>/);
  assert.match(welcomeHtml, /<h1 id="welcome-title">Welcome to ScribeDock<\/h1>/);
  assert.match(welcomeHtml, /Turn YouTube videos into searchable, downloadable transcripts/);
  assert.match(welcomeHtml, /What it does/);
  assert.match(welcomeHtml, /How to use it/);
  assert.match(welcomeHtml, /Pro tips/);
  assert.match(welcomeHtml, /Privacy and trust/);
  assert.match(welcomeHtml, /Goal \/ context \/ process \/ output/);
  assert.match(welcomeHtml, />Role</);
  assert.match(welcomeHtml, />Goal</);
  assert.match(welcomeHtml, />Context</);
  assert.match(welcomeHtml, />Process</);
  assert.match(welcomeHtml, />Output</);
  assert.match(welcomeHtml, />Quality bar</);
});

test("welcome page exposes expected buttons and trust copy", () => {
  assert.match(welcomeHtml, /id="btn-open-youtube"[\s\S]*>Open YouTube<\/a>/);
  assert.match(
    welcomeHtml,
    /id="btn-try-sample-video"[\s\S]*href="https:\/\/www\.youtube\.com\/watch\?v=dQw4w9WgXcQ"[\s\S]*target="_blank"[\s\S]*rel="noopener noreferrer"[\s\S]*>Try it with this YouTube video<\/a>/,
  );
  assert.match(welcomeHtml, /id="btn-open-side-panel"[\s\S]*>Open Side Panel<\/button>/);
  assert.match(welcomeHtml, /href="#how-it-works"[\s\S]*>How it works<\/a>/);
  assert.match(welcomeHtml, /data-support-link[\s\S]*>Support ScribeDock<\/a>/);
  assert.match(
    welcomeHtml,
    /data-feedback-link[\s\S]*href="https:\/\/forms\.gle\/i1tobcHWFWc3Bixt5"[\s\S]*target="_blank"[\s\S]*rel="noopener noreferrer"[\s\S]*>Leave feedback<\/a>/,
  );
  assert.match(welcomeHtml, /No account required\./);
  assert.match(welcomeHtml, /No subscription required\./);
  assert.match(welcomeHtml, /No transcript text sent to a ScribeDock server\./);
  assert.match(welcomeHtml, /Local transcript cache stays in your browser to speed up reloads\./);
});

test("welcome page keeps external links safe and avoids inline scripts", () => {
  const externalLinks = getWelcomeLinks().filter((link) => /href="https:\/\//.test(link));

  assert.ok(externalLinks.length >= 3);
  externalLinks.forEach((link) => {
    assert.match(link, /target="_blank"/);
    assert.match(link, /rel="noopener noreferrer"/);
  });

  assert.doesNotMatch(welcomeHtml, /<script(?![^>]*\bsrc=)[^>]*>/);
  assert.match(welcomeHtml, /<script src="welcome\.js"><\/script>/);
});

test("welcome side-panel button is a user-click action with a fallback", () => {
  assert.match(welcomeScript, /const SUPPORT_URL = 'https:\/\/ko-fi\.com\/scribedock';/);
  assert.match(welcomeScript, /const FEEDBACK_URL = 'https:\/\/forms\.gle\/i1tobcHWFWc3Bixt5';/);
  assert.match(welcomeScript, /const SAMPLE_VIDEO_URL = 'https:\/\/www\.youtube\.com\/watch\?v=dQw4w9WgXcQ';/);
  assert.match(welcomeScript, /feedbackLinks\.forEach\(\(link\) => prepareExternalLink\(link, FEEDBACK_URL\)\);/);
  assert.match(welcomeScript, /document\.getElementById\('btn-open-side-panel'\)/);
  assert.match(welcomeScript, /sidePanelButton\.addEventListener\('click', openSidePanelFromWelcome\);/);
  assert.match(welcomeScript, /chrome\.tabs\.getCurrent/);
  assert.match(welcomeScript, /chrome\.sidePanel\.open\(\{ windowId \}\)/);
  assert.match(welcomeScript, /Click the ScribeDock extension icon to open the side panel\./);
  assert.doesNotMatch(welcomeScript, /\.innerHTML\s*=/);
});

test("welcome sample video action opens YouTube and requests the side panel", () => {
  assert.match(welcomeScript, /document\.getElementById\('btn-try-sample-video'\)/);
  assert.match(welcomeScript, /sampleVideoLink\.addEventListener\('click', trySampleVideoWithSidePanel\);/);
  assert.match(welcomeScript, /event\.preventDefault\(\);/);
  assert.match(welcomeScript, /requestSidePanelOpen\('ScribeDock is open\. Loading the sample video\.\.\.'\)/);
  assert.match(welcomeScript, /chrome\.tabs\.create\(\{ url, active: true \}/);
  assert.match(welcomeScript, /openUrlInNewTab\(SAMPLE_VIDEO_URL\)/);
  assert.match(welcomeScript, /Sample video opened\. Click the ScribeDock extension icon if the side panel did not open\./);
  assert.match(welcomeScript, /Could not open the sample video\. Try the YouTube link again\./);
});

test("welcome styling is responsive and keeps keyboard focus visible", () => {
  assert.match(welcomeCss, /@font-face/);
  assert.match(welcomeCss, /grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\);/);
  assert.match(welcomeCss, /@media \(max-width:\s*820px\)/);
  assert.match(welcomeCss, /@media \(max-width:\s*460px\)/);
  assert.match(welcomeCss, /\.btn:focus-visible,/);
  assert.match(welcomeCss, /outline:\s*2px solid var\(--accent\);/);
  assert.match(welcomeCss, /@media \(prefers-reduced-motion:\s*reduce\)/);
});
