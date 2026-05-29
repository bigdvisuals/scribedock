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
    /id="playlist-mode-label"[\s\S]*?>PLAYLIST MODE</,
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
    /Scanning visible videos only\.<br>Scroll down to load more\./,
  );
  assert.match(
    sidePanelScript,
    /Scanning visible Shorts only\.<br>Scroll down to load more\./,
  );
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
  assert.match(sidePanelScript, /scheduleChannelStateRefresh\(loadId, loadContext\);/);
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
  assert.match(sidePanelHtml, />CHANNEL MODE</);
  assert.match(
    sidePanelScript,
    /elements\.channelTabBadge\.textContent = isShortsTab \? 'SHORTS' : 'VIDEOS';/,
  );
  assert.match(sidePanelScript, /safePageContext\.channelTab === 'shorts'/);
  assert.match(sidePanelCss, /\.channel-mode-row\s*\{/);
  assert.match(sidePanelCss, /\.channel-tab-badge\s*\{/);
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
  assert.match(sidePanelScript, /'Scan newly loaded'/);
  assert.match(
    sidePanelScript,
    /`Download \$\{availableCount\} \$\{isShortsTab \? 'Shorts ' : ''\}\$\{transcriptLabel\}`/,
  );
});

test("channel action buttons separate the main action from secondary controls", () => {
  assert.match(sidePanelHtml, /class="action-btn primary channel-main-action"/);
  assert.match(sidePanelHtml, /class="channel-secondary-actions"/);
  assert.match(
    sidePanelHtml,
    /class="action-btn primary-soft channel-download-action"/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-actions\s*\{[\s\S]*?display:\s*grid;[\s\S]*?gap:\s*10px;/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-main-action,\s*\.channel-download-action\s*\{[\s\S]*?width:\s*100%;/,
  );
  assert.match(
    sidePanelCss,
    /\.channel-secondary-actions\s*\{[\s\S]*?display:\s*flex;[\s\S]*?gap:\s*10px;/,
  );
});

test("side panel renders real channel avatars and falls back on missing or broken images", () => {
  assert.match(sidePanelScript, /function renderChannelAvatar/);
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
