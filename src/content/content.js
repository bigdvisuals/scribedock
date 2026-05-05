(function startYouTubeTranscriptExtension() {
  "use strict";

  if (window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__) {
    return;
  }

  window.__YT_TRANSCRIPT_EXTENSION_ACTIVE__ = true;

  var PANEL_ID = "yt-transcript-helper-panel";
  var TOGGLE_ID = "yt-transcript-helper-toggle";
  var NAVIGATION_CHECK_INTERVAL_MS = 500;
  var NATIVE_TRANSCRIPT_FALLBACK_TIMEOUT_MS = 8000;
  var NATIVE_TRANSCRIPT_FALLBACK_POLL_MS = 250;
  var lastUrl = window.location.href;
  var currentVideoId = null;
  var renderTimerId = null;
  var availabilityRequestId = 0;
  var transcriptRequestId = 0;
  var currentCaptionTracks = [];
  var currentTranscriptRows = [];
  var currentSearchQuery = "";
  var currentTranscriptApiKey = null;
  var currentCaptionSource = "";

  function getYouTubeHelpers() {
    return window.YTTranscriptYouTube;
  }

  function getNavigationHelpers() {
    return window.YTTranscriptNavigation;
  }

  function getSidebarHelpers() {
    return window.YTTranscriptSidebar;
  }

  function getTranscriptHelpers() {
    return window.YTTranscriptTranscript;
  }

  function getExportHelpers() {
    return window.YTTranscriptExport;
  }

  function createElement(tagName, className, textContent) {
    var element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }

    if (textContent) {
      element.textContent = textContent;
    }

    return element;
  }

  function removePanel() {
    var existingPanel = document.getElementById(PANEL_ID);
    var existingToggle = document.getElementById(TOGGLE_ID);

    if (existingPanel) {
      existingPanel.remove();
    }

    if (existingToggle) {
      existingToggle.remove();
    }

    availabilityRequestId += 1;
    transcriptRequestId += 1;
    currentCaptionTracks = [];
    currentTranscriptRows = [];
    currentSearchQuery = "";
    currentTranscriptApiKey = null;
    currentCaptionSource = "";
    currentVideoId = null;
  }

  function showPanel() {
    var panel = document.getElementById(PANEL_ID);
    var toggle = document.getElementById(TOGGLE_ID);

    if (panel) {
      panel.classList.remove("yt-transcript-helper-panel-hidden");
    }

    if (toggle) {
      toggle.hidden = true;
    }
  }

  function hidePanel() {
    var panel = document.getElementById(PANEL_ID);
    var toggle = document.getElementById(TOGGLE_ID);

    if (panel) {
      panel.classList.add("yt-transcript-helper-panel-hidden");
    }

    if (toggle) {
      toggle.hidden = false;
    }
  }

  function updatePanelContent(videoId, shouldResetTranscriptState) {
    var videoIdElement = document.querySelector(
      "[data-yt-transcript-video-id]",
    );
    var titleElement = document.querySelector(
      "[data-yt-transcript-video-title]",
    );
    var statusLabelElement = document.querySelector(
      "[data-yt-transcript-status-label]",
    );
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var resetTranscriptState = shouldResetTranscriptState !== false;
    var helpers = getYouTubeHelpers();
    var sidebar = getSidebarHelpers();
    var videoTitle = helpers ? helpers.getCurrentVideoTitle(document) : "";
    var shell =
      sidebar && typeof sidebar.createSidebarShellState === "function"
        ? sidebar.createSidebarShellState(videoId, videoTitle)
        : {
            videoId: videoId,
            videoTitle: videoTitle || "Current YouTube video",
            statusLabel: "Status",
            statusMessage: "Checking transcript availability...",
            transcriptPlaceholder:
              "Transcript will appear here after the next phase.",
          };

    if (videoIdElement) {
      videoIdElement.textContent = shell.videoId;
    }

    if (titleElement) {
      titleElement.textContent = shell.videoTitle;
    }

    if (!resetTranscriptState) {
      return;
    }

    if (statusLabelElement) {
      statusLabelElement.textContent = shell.statusLabel;
    }

    if (statusMessageElement) {
      statusMessageElement.textContent = shell.statusMessage;
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.textContent = shell.transcriptPlaceholder;
    }

    if (transcriptStateElement) {
      transcriptStateElement.textContent = "Not loaded";
    }
  }

  function clearLanguageOptions() {
    var languageWrap = document.querySelector(
      "[data-yt-transcript-language-wrap]",
    );
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );

    if (languageWrap) {
      languageWrap.hidden = true;
    }

    if (languageSelect) {
      languageSelect.textContent = "";
    }
  }

  function setLanguageOptions(languages) {
    var languageWrap = document.querySelector(
      "[data-yt-transcript-language-wrap]",
    );
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );

    if (!languageWrap || !languageSelect) {
      return;
    }

    languageSelect.textContent = "";

    if (!Array.isArray(languages) || languages.length === 0) {
      languageWrap.hidden = true;
      return;
    }

    languages.forEach(function addLanguageOption(language, index) {
      var option = document.createElement("option");
      var kindLabel = language.isAutoGenerated ? "Auto-generated" : "Manual";

      option.value = String(index);
      option.textContent = language.isTranslated
        ? language.label
        : language.label + " - " + kindLabel;
      languageSelect.appendChild(option);
    });

    languageWrap.hidden = false;
  }

  function setTranscriptControlsEnabled(isEnabled) {
    var searchInput = document.querySelector("[data-yt-transcript-search]");
    var actionButtons = document.querySelectorAll(
      "[data-yt-transcript-action]",
    );

    if (searchInput) {
      searchInput.disabled = !isEnabled;
    }

    actionButtons.forEach(function updateButton(button) {
      button.disabled = !isEnabled;
    });
  }

  function clearTranscriptRows() {
    var rowsElement = document.querySelector("[data-yt-transcript-rows]");

    if (rowsElement) {
      rowsElement.textContent = "";
    }
  }

  function showTranscriptMessage(message, stateText) {
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );

    clearTranscriptRows();

    if (transcriptStateElement) {
      transcriptStateElement.textContent = stateText || "Not loaded";
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = false;
      transcriptPlaceholderElement.textContent = message;
    }
  }

  function renderTranscriptRows(rows) {
    var rowsElement = document.querySelector("[data-yt-transcript-rows]");
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var query = currentSearchQuery.trim().toLowerCase();
    var visibleRows = Array.isArray(rows)
      ? rows.filter(function filterRow(row) {
          return (
            !query ||
            row.text.toLowerCase().indexOf(query) !== -1 ||
            row.timestamp.indexOf(query) !== -1
          );
        })
      : [];
    var fragment = document.createDocumentFragment();

    if (!rowsElement) {
      return;
    }

    rowsElement.textContent = "";

    if (visibleRows.length === 0) {
      if (transcriptStateElement) {
        transcriptStateElement.textContent =
          rows.length > 0 ? "No matches" : "Empty";
      }

      if (transcriptPlaceholderElement) {
        transcriptPlaceholderElement.hidden = false;
        transcriptPlaceholderElement.textContent =
          rows.length > 0
            ? "No transcript rows match your search."
            : "No readable transcript rows were found.";
      }

      return;
    }

    visibleRows.forEach(function addTranscriptRow(row) {
      var rowElement = createElement("div", "yt-transcript-helper-row");
      var timestampButton = createElement(
        "button",
        "yt-transcript-helper-row-time",
        row.timestamp,
      );
      var textElement = createElement(
        "span",
        "yt-transcript-helper-row-text",
        row.text,
      );

      timestampButton.type = "button";
      timestampButton.setAttribute(
        "data-yt-transcript-start",
        String(row.startSeconds),
      );
      timestampButton.setAttribute("aria-label", "Jump to " + row.timestamp);
      rowElement.appendChild(timestampButton);
      rowElement.appendChild(textElement);
      fragment.appendChild(rowElement);
    });

    rowsElement.appendChild(fragment);

    if (transcriptStateElement) {
      transcriptStateElement.textContent = query
        ? visibleRows.length + " matches"
        : rows.length + " rows";
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = true;
    }
  }

  function getSelectedTrack() {
    var languageSelect = document.querySelector(
      "[data-yt-transcript-language-select]",
    );
    var selectedIndex = languageSelect ? Number(languageSelect.value || 0) : 0;

    if (Number.isNaN(selectedIndex)) {
      selectedIndex = 0;
    }

    return (
      currentCaptionTracks[selectedIndex] || currentCaptionTracks[0] || null
    );
  }

  function getTranscriptDebugOptions() {
    var isEnabled = false;

    try {
      isEnabled =
        window.localStorage &&
        window.localStorage.getItem("ytTranscriptHelperDebug") === "true";
    } catch (error) {
      isEnabled = false;
    }

    if (
      !isEnabled ||
      !window.console ||
      typeof window.console.debug !== "function"
    ) {
      return undefined;
    }

    return {
      debugLogger: function debugLogger(message) {
        window.console.debug("[YT Transcript Helper] " + message);
      },
    };
  }

  function logTranscriptDebug(message) {
    var options = getTranscriptDebugOptions();

    if (!options || typeof options.debugLogger !== "function") {
      return;
    }

    options.debugLogger(message);
  }

  function fetchAndRenderSelectedTranscript() {
    var transcript = getTranscriptHelpers();
    var selectedTrack = getSelectedTrack();
    var requestId = transcriptRequestId + 1;
    var fetchFn = window.fetch ? window.fetch.bind(window) : null;

    transcriptRequestId = requestId;
    currentTranscriptRows = [];
    currentSearchQuery = "";
    setTranscriptControlsEnabled(false);

    var searchInput = document.querySelector("[data-yt-transcript-search]");

    if (searchInput) {
      searchInput.value = "";
    }

    if (!selectedTrack) {
      showTranscriptMessage(
        "No transcript available for this video",
        "No captions",
      );
      return;
    }

    logTranscriptDebug("Selected video ID: " + (currentVideoId || "unknown"));
    logTranscriptDebug(
      "Caption track source: " + (currentCaptionSource || "unknown"),
    );
    logTranscriptDebug(
      "Selected caption track: " +
        'label="' +
        (selectedTrack.label || "unknown") +
        '", ' +
        'language="' +
        (selectedTrack.languageCode || "unknown") +
        '", ' +
        'kind="' +
        (selectedTrack.kind || "unknown") +
        '"',
    );

    showTranscriptMessage("Loading transcript rows...", "Loading");

    if (
      !transcript ||
      typeof transcript.fetchTranscriptRowsWithFallbacks !== "function"
    ) {
      showTranscriptMessage(
        "Transcript loading is not available in this build.",
        "Error",
      );
      return;
    }

    transcript
      .fetchTranscriptRowsWithFallbacks({
        videoId: currentVideoId,
        track: selectedTrack,
        tracks: currentCaptionTracks,
        fetchFn: fetchFn,
        apiKey: currentTranscriptApiKey,
        nativeTranscriptFetcher: function nativeTranscriptFetcher() {
          return fetchNativeTranscriptRows(transcript);
        },
        debugLogger:
          getTranscriptDebugOptions() &&
          getTranscriptDebugOptions().debugLogger,
      })
      .then(function handleTranscriptResult(result) {
        if (requestId !== transcriptRequestId) {
          return;
        }

        if (!result || !result.ok) {
          currentTranscriptRows = [];
          setTranscriptControlsEnabled(false);
          showTranscriptMessage(
            selectedTrack.isTranslated
              ? `${selectedTrack.label || selectedTrack.language || "translation"} translation is not available for this video.`
              : "No YouTube transcript is available for this video.\nAudio transcription can be added later.",
            "No transcript",
          );
          return;
        }

        logTranscriptDebug("Transcript rows loaded from: " + result.source);
        currentTranscriptRows = result.rows;
        renderTranscriptRows(currentTranscriptRows);
        setTranscriptControlsEnabled(true);
      })
      .catch(function handleTranscriptError(error) {
        if (requestId !== transcriptRequestId) {
          return;
        }

        logTranscriptDebug(
          "Transcript pipeline failed: " +
            (error && error.message ? error.message : "Unknown error"),
        );
        currentTranscriptRows = [];
        setTranscriptControlsEnabled(false);
        showTranscriptMessage(
          selectedTrack.isTranslated
            ? "English translation is not available for this video."
            : "No YouTube transcript is available for this video.\nAudio transcription can be added later.",
          "No transcript",
        );
      });
  }

  function getNativeTranscriptRows(transcript) {
    if (
      !transcript ||
      typeof transcript.parseNativeTranscriptRowsFromDocument !== "function"
    ) {
      return [];
    }

    try {
      return transcript.parseNativeTranscriptRowsFromDocument(document);
    } catch (error) {
      logTranscriptDebug(
        "Native transcript parser failed: " +
          (error && error.message ? error.message : "Unknown error"),
      );
      return [];
    }
  }

  function findNativeTranscriptButton(label) {
    var buttons = Array.prototype.slice.call(
      document.querySelectorAll("button"),
    );

    return (
      buttons.find(function findButton(button) {
        var text = (button.textContent || "").trim();
        var ariaLabel = (button.getAttribute("aria-label") || "").trim();

        return text === label || ariaLabel === label;
      }) || null
    );
  }

  function closeNativeTranscriptPanel() {
    var closeButton = findNativeTranscriptButton("Close transcript");

    if (closeButton) {
      closeButton.click();
    }
  }

  function waitForNativeTranscriptRows(transcript) {
    var startTime = Date.now();

    return new Promise(function waitForRows(resolve) {
      function checkRows() {
        var rows = getNativeTranscriptRows(transcript);

        if (
          rows.length > 0 ||
          Date.now() - startTime >= NATIVE_TRANSCRIPT_FALLBACK_TIMEOUT_MS
        ) {
          resolve(rows);
          return;
        }

        window.setTimeout(checkRows, NATIVE_TRANSCRIPT_FALLBACK_POLL_MS);
      }

      checkRows();
    });
  }

  async function fetchNativeTranscriptRows(transcript) {
    var rows = getNativeTranscriptRows(transcript);
    var showButton;
    var openedNativePanel = false;

    if (rows.length > 0) {
      logTranscriptDebug(
        "Native transcript panel already has " + rows.length + " rows",
      );
      return rows;
    }

    showButton = findNativeTranscriptButton("Show transcript");

    if (!showButton) {
      logTranscriptDebug(
        "Native transcript fallback skipped: Show transcript button was not found",
      );
      return [];
    }

    logTranscriptDebug(
      "Timedtext was empty; opening YouTube native transcript panel fallback",
    );
    showButton.click();
    openedNativePanel = true;
    rows = await waitForNativeTranscriptRows(transcript);
    logTranscriptDebug("Native transcript fallback rows: " + rows.length);

    if (openedNativePanel) {
      closeNativeTranscriptPanel();
    }

    return rows;
  }

  function handleSearchInput(event) {
    currentSearchQuery = event.target.value || "";
    renderTranscriptRows(currentTranscriptRows);
  }

  function jumpToTranscriptTime(startSeconds) {
    var video = document.querySelector("video");
    var safeSeconds = Number(startSeconds);

    if (!video || Number.isNaN(safeSeconds)) {
      return;
    }

    video.currentTime = safeSeconds;

    var playResult = video.play();

    if (playResult && typeof playResult.catch === "function") {
      playResult.catch(function ignorePlayError() {
        // Browsers can block autoplay. Seeking still works without playback.
      });
    }
  }

  function setTranscriptStateText(text) {
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );

    if (transcriptStateElement) {
      transcriptStateElement.textContent = text;
    }
  }

  function handleTranscriptClick(event) {
    var target = event.target;

    if (!target || !target.matches("[data-yt-transcript-start]")) {
      return;
    }

    jumpToTranscriptTime(target.getAttribute("data-yt-transcript-start"));
  }

  async function copyTextToClipboard(text) {
    var textarea;
    var copied;

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    copied = document.execCommand("copy");
    textarea.remove();

    if (!copied) {
      throw new Error("Copy command failed");
    }

    return true;
  }

  async function copyTranscriptToClipboard() {
    var exportHelpers = getExportHelpers();
    var helpers = getYouTubeHelpers();
    var videoTitle = helpers
      ? helpers.getCurrentVideoTitle(document)
      : "YouTube transcript";
    var text;

    if (
      !exportHelpers ||
      typeof exportHelpers.buildPlainTextTranscript !== "function" ||
      currentTranscriptRows.length === 0
    ) {
      return;
    }

    text = exportHelpers.buildPlainTextTranscript(
      videoTitle,
      window.location.href,
      currentTranscriptRows,
    );
    await copyTextToClipboard(text);
    setTranscriptStateText("Copied");
  }

  function exportTranscript(format) {
    var exportHelpers = getExportHelpers();
    var helpers = getYouTubeHelpers();
    var videoTitle = helpers
      ? helpers.getCurrentVideoTitle(document)
      : "YouTube transcript";
    var isMarkdown = format === "markdown";
    var fileName;
    var text;

    if (!exportHelpers || currentTranscriptRows.length === 0) {
      return;
    }

    if (isMarkdown) {
      text = exportHelpers.buildMarkdownTranscript(
        videoTitle,
        window.location.href,
        currentTranscriptRows,
      );
      fileName = exportHelpers.createSafeFileName(videoTitle, "md");
    } else {
      text = exportHelpers.buildPlainTextTranscript(
        videoTitle,
        window.location.href,
        currentTranscriptRows,
      );
      fileName = exportHelpers.createSafeFileName(videoTitle, "txt");
    }

    exportHelpers.downloadTextFile(fileName, text, document);
  }

  function handleTranscriptAction(event) {
    var action =
      event.target && event.target.getAttribute("data-yt-transcript-action");

    if (!action) {
      return;
    }

    if (action === "copy") {
      copyTranscriptToClipboard().catch(function handleCopyError() {
        showTranscriptMessage(
          "Copy failed. Your browser may have blocked clipboard access.",
          "Error",
        );
      });
    } else if (action === "txt") {
      exportTranscript("txt");
    } else if (action === "markdown") {
      exportTranscript("markdown");
    }
  }

  function applyTranscriptAvailabilityResult(result) {
    var safeResult = result || {};
    var status = safeResult.status || "failed";
    var message = safeResult.message || "Transcript detection failed";
    var statusBox = document.querySelector("[data-yt-transcript-status]");
    var statusMessageElement = document.querySelector(
      "[data-yt-transcript-status-message]",
    );
    var transcriptStateElement = document.querySelector(
      "[data-yt-transcript-state]",
    );
    var transcriptPlaceholderElement = document.querySelector(
      "[data-yt-transcript-placeholder]",
    );
    var transcriptStateText = "Not loaded";
    var placeholderText = "Transcript will appear here after the next phase.";

    if (status === "checking") {
      currentCaptionTracks = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      transcriptRequestId += 1;
      transcriptStateText = "Checking";
      placeholderText = "Looking for caption tracks...";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    } else if (status === "available") {
      currentCaptionTracks = Array.isArray(safeResult.tracks)
        ? safeResult.tracks
        : [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = safeResult.apiKey || null;
      currentCaptionSource = safeResult.source || "";
      transcriptStateText = "Available";
      placeholderText = "Transcript detected. Loading rows...";
      setLanguageOptions(currentCaptionTracks);
    } else if (status === "unavailable") {
      currentCaptionTracks = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      transcriptRequestId += 1;
      transcriptStateText = "No captions";
      placeholderText =
        "No YouTube transcript is available for this video. Audio transcription can be added later.";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    } else {
      currentCaptionTracks = [];
      currentTranscriptRows = [];
      currentSearchQuery = "";
      currentTranscriptApiKey = null;
      currentCaptionSource = "";
      transcriptRequestId += 1;
      transcriptStateText = "Error";
      placeholderText =
        "No YouTube transcript is available for this video. Audio transcription can be added later.";
      clearLanguageOptions();
      clearTranscriptRows();
      setTranscriptControlsEnabled(false);
    }

    if (statusBox) {
      statusBox.setAttribute("data-state", status);
    }

    if (statusMessageElement) {
      statusMessageElement.textContent = message;
    }

    if (transcriptStateElement) {
      transcriptStateElement.textContent = transcriptStateText;
    }

    if (transcriptPlaceholderElement) {
      transcriptPlaceholderElement.hidden = false;
      transcriptPlaceholderElement.textContent = placeholderText;
    }

    if (status === "available") {
      fetchAndRenderSelectedTranscript();
    }
  }

  function startTranscriptAvailabilityCheck(videoId) {
    var transcript = getTranscriptHelpers();
    var requestId = availabilityRequestId + 1;
    var fetchFn = window.fetch ? window.fetch.bind(window) : null;

    availabilityRequestId = requestId;

    if (
      transcript &&
      typeof transcript.createCheckingAvailabilityResult === "function"
    ) {
      applyTranscriptAvailabilityResult(
        transcript.createCheckingAvailabilityResult(),
      );
    } else {
      applyTranscriptAvailabilityResult({
        status: "checking",
        message: "Checking transcript availability...",
        tracks: [],
        languages: [],
      });
    }

    if (
      !transcript ||
      typeof transcript.detectTranscriptAvailability !== "function"
    ) {
      applyTranscriptAvailabilityResult({
        status: "failed",
        message: "Transcript detection failed",
        tracks: [],
        languages: [],
      });
      return;
    }

    transcript
      .detectTranscriptAvailability({
        videoId: videoId,
        document: document,
        fetchFn: fetchFn,
      })
      .then(function handleAvailabilityResult(result) {
        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return;
        }

        applyTranscriptAvailabilityResult(result);
      })
      .catch(function handleAvailabilityError() {
        if (requestId !== availabilityRequestId || currentVideoId !== videoId) {
          return;
        }

        applyTranscriptAvailabilityResult({
          status: "failed",
          message: "Transcript detection failed",
          tracks: [],
          languages: [],
        });
      });
  }

  function createToggleButton() {
    var toggle = document.getElementById(TOGGLE_ID);

    if (toggle) {
      return toggle;
    }

    toggle = createElement(
      "button",
      "yt-transcript-helper-toggle",
      "Transcript",
    );
    toggle.id = TOGGLE_ID;
    toggle.type = "button";
    toggle.hidden = true;
    toggle.addEventListener("click", showPanel);
    document.documentElement.appendChild(toggle);

    return toggle;
  }

  function createPanel(videoId) {
    var panel = document.getElementById(PANEL_ID);
    var helpers = getYouTubeHelpers();
    var sidebar = getSidebarHelpers();
    var videoTitle = helpers ? helpers.getCurrentVideoTitle(document) : "";
    var shell =
      sidebar && typeof sidebar.createSidebarShellState === "function"
        ? sidebar.createSidebarShellState(videoId, videoTitle)
        : {
            extensionName: "YouTube Transcript Helper",
            videoId: videoId,
            videoTitle: videoTitle || "Current YouTube video",
            statusLabel: "Status",
            statusMessage: "Checking transcript availability...",
            transcriptTitle: "Transcript",
            transcriptPlaceholder:
              "Transcript will appear here after the next phase.",
            search: {
              placeholder: "Search will work after transcripts load",
              disabled: true,
            },
            actions: [
              { label: "Copy", disabled: true },
              { label: "TXT", disabled: true },
              { label: "Markdown", disabled: true },
            ],
          };

    if (panel) {
      updatePanelContent(videoId, true);
      showPanel();
      return panel;
    }

    panel = createElement("aside", "yt-transcript-helper-panel");
    panel.id = PANEL_ID;
    panel.setAttribute("aria-label", "YouTube transcript helper panel");

    var header = createElement("div", "yt-transcript-helper-header");
    var titleWrap = createElement("div", "yt-transcript-helper-title-wrap");
    var heading = createElement(
      "h2",
      "yt-transcript-helper-heading",
      shell.extensionName,
    );
    var subtitle = createElement(
      "p",
      "yt-transcript-helper-subtitle",
      "Transcript sidebar",
    );
    var closeButton = createElement(
      "button",
      "yt-transcript-helper-icon-button",
      "X",
    );

    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Close transcript panel");
    closeButton.addEventListener("click", hidePanel);

    titleWrap.appendChild(heading);
    titleWrap.appendChild(subtitle);
    header.appendChild(titleWrap);
    header.appendChild(closeButton);

    var body = createElement("div", "yt-transcript-helper-body");
    var status = createElement("div", "yt-transcript-helper-status");
    var statusHeader = createElement(
      "div",
      "yt-transcript-helper-status-header",
    );
    var statusLabel = createElement(
      "span",
      "yt-transcript-helper-status-label",
      shell.statusLabel,
    );
    var statusMessage = createElement(
      "span",
      "yt-transcript-helper-status-message",
      shell.statusMessage,
    );
    var videoIdRow = createElement("div", "yt-transcript-helper-video-id-row");
    var videoIdLabel = createElement(
      "span",
      "yt-transcript-helper-video-id-label",
      "Video ID",
    );
    var statusValue = createElement(
      "code",
      "yt-transcript-helper-video-id",
      shell.videoId,
    );
    var languageWrap = createElement("label", "yt-transcript-helper-language");
    var languageLabel = createElement(
      "span",
      "yt-transcript-helper-language-label",
      "Language",
    );
    var languageSelect = createElement(
      "select",
      "yt-transcript-helper-language-select",
    );

    status.setAttribute("data-yt-transcript-status", "true");
    status.setAttribute("data-state", "checking");
    statusLabel.setAttribute("data-yt-transcript-status-label", "true");
    statusMessage.setAttribute("data-yt-transcript-status-message", "true");
    statusValue.setAttribute("data-yt-transcript-video-id", "true");
    languageWrap.setAttribute("data-yt-transcript-language-wrap", "true");
    languageSelect.setAttribute("data-yt-transcript-language-select", "true");
    languageSelect.setAttribute("aria-label", "Transcript language");
    languageSelect.addEventListener("change", fetchAndRenderSelectedTranscript);
    languageWrap.hidden = true;
    statusHeader.appendChild(statusLabel);
    statusHeader.appendChild(statusMessage);
    videoIdRow.appendChild(videoIdLabel);
    videoIdRow.appendChild(statusValue);
    languageWrap.appendChild(languageLabel);
    languageWrap.appendChild(languageSelect);
    status.appendChild(statusHeader);
    status.appendChild(videoIdRow);
    status.appendChild(languageWrap);

    var videoTitleElement = createElement(
      "p",
      "yt-transcript-helper-video-title",
      shell.videoTitle,
    );
    videoTitleElement.setAttribute("data-yt-transcript-video-title", "true");

    var toolbar = createElement("div", "yt-transcript-helper-toolbar");
    var searchInput = createElement("input", "yt-transcript-helper-search");
    var actions = createElement("div", "yt-transcript-helper-actions");

    searchInput.type = "search";
    searchInput.placeholder = shell.search.placeholder;
    searchInput.disabled = shell.search.disabled;
    searchInput.setAttribute("aria-label", "Search transcript");
    searchInput.setAttribute("data-yt-transcript-search", "true");
    searchInput.addEventListener("input", handleSearchInput);

    shell.actions.forEach(function addActionButton(action) {
      var button = createElement(
        "button",
        "yt-transcript-helper-secondary-button",
        action.label,
      );
      button.type = "button";
      button.disabled = action.disabled;
      button.setAttribute(
        "data-yt-transcript-action",
        action.label.toLowerCase(),
      );
      button.addEventListener("click", handleTranscriptAction);
      actions.appendChild(button);
    });

    toolbar.appendChild(searchInput);
    toolbar.appendChild(actions);

    var transcript = createElement(
      "section",
      "yt-transcript-helper-transcript",
    );
    var transcriptHeader = createElement(
      "div",
      "yt-transcript-helper-transcript-header",
    );
    var transcriptTitle = createElement(
      "h3",
      "yt-transcript-helper-transcript-title",
      shell.transcriptTitle,
    );
    var transcriptState = createElement(
      "span",
      "yt-transcript-helper-transcript-state",
      "Not loaded",
    );
    var transcriptPlaceholder = createElement(
      "p",
      "yt-transcript-helper-transcript-placeholder",
      shell.transcriptPlaceholder,
    );
    var transcriptRows = createElement("div", "yt-transcript-helper-rows");

    transcriptState.setAttribute("data-yt-transcript-state", "true");
    transcriptPlaceholder.setAttribute(
      "data-yt-transcript-placeholder",
      "true",
    );
    transcriptRows.setAttribute("data-yt-transcript-rows", "true");
    transcriptRows.addEventListener("click", handleTranscriptClick);
    transcriptHeader.appendChild(transcriptTitle);
    transcriptHeader.appendChild(transcriptState);
    transcript.appendChild(transcriptHeader);
    transcript.appendChild(transcriptPlaceholder);
    transcript.appendChild(transcriptRows);

    body.appendChild(status);
    body.appendChild(videoTitleElement);
    body.appendChild(toolbar);
    body.appendChild(transcript);
    panel.appendChild(header);
    panel.appendChild(body);

    document.documentElement.appendChild(panel);
    createToggleButton();
    updatePanelContent(videoId);

    return panel;
  }

  function renderForCurrentPage() {
    var helpers = getYouTubeHelpers();
    var navigation = getNavigationHelpers();

    if (!helpers) {
      return;
    }

    var action;

    if (navigation && typeof navigation.getPageAction === "function") {
      action = navigation.getPageAction(
        currentVideoId,
        window.location.href,
        helpers.getVideoIdFromUrl,
      );
    } else {
      var fallbackVideoId = helpers.getCurrentVideoId();
      action = fallbackVideoId
        ? { type: "render", videoId: fallbackVideoId }
        : { type: "remove", videoId: null };
    }

    if (action.type === "remove") {
      removePanel();
      return;
    }

    currentVideoId = action.videoId;

    if (action.type === "keep" && document.getElementById(PANEL_ID)) {
      updatePanelContent(action.videoId, false);
      return;
    }

    createPanel(action.videoId);
    startTranscriptAvailabilityCheck(action.videoId);
  }

  function scheduleRenderForCurrentPage() {
    if (renderTimerId) {
      window.clearTimeout(renderTimerId);
    }

    renderTimerId = window.setTimeout(function runScheduledRender() {
      renderTimerId = null;
      renderForCurrentPage();
    }, 150);
  }

  function handlePossibleNavigation() {
    if (lastUrl === window.location.href) {
      return;
    }

    lastUrl = window.location.href;
    scheduleRenderForCurrentPage();
  }

  function handleYouTubeNavigationFinish() {
    lastUrl = window.location.href;
    scheduleRenderForCurrentPage();
  }

  function patchHistoryMethod(methodName) {
    var originalMethod = window.history[methodName];

    if (typeof originalMethod !== "function") {
      return;
    }

    window.history[methodName] = function patchedHistoryMethod() {
      var result = originalMethod.apply(this, arguments);
      window.dispatchEvent(new Event("yt-transcript-helper-location-change"));
      return result;
    };
  }

  function listenForYouTubeNavigation() {
    patchHistoryMethod("pushState");
    patchHistoryMethod("replaceState");

    window.addEventListener("popstate", handlePossibleNavigation);
    window.addEventListener(
      "yt-navigate-finish",
      handleYouTubeNavigationFinish,
    );
    document.addEventListener(
      "yt-navigate-finish",
      handleYouTubeNavigationFinish,
    );
    window.addEventListener(
      "yt-transcript-helper-location-change",
      handlePossibleNavigation,
    );
    window.setInterval(handlePossibleNavigation, NAVIGATION_CHECK_INTERVAL_MS);
  }

  chrome.runtime.onMessage.addListener(function handleMessage(message) {
    if (!message || message.type !== "YT_TRANSCRIPT_TOGGLE_PANEL") {
      return;
    }

    var panel = document.getElementById(PANEL_ID);

    if (!panel) {
      renderForCurrentPage();
      return;
    }

    if (panel.classList.contains("yt-transcript-helper-panel-hidden")) {
      showPanel();
    } else {
      hidePanel();
    }
  });

  listenForYouTubeNavigation();
  renderForCurrentPage();
})();
