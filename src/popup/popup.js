(function startPopup() {
  "use strict";

  var statusElement = document.getElementById("popup-status");
  var toggleButton = document.getElementById("toggle-panel");
  var activeTabId = null;

  function setStatus(message) {
    statusElement.textContent = message;
  }

  function isSupportedYouTubeVideoUrl(url) {
    var youtube = window.YTTranscriptYouTube;

    if (!youtube || typeof youtube.getVideoIdFromUrl !== "function") {
      return false;
    }

    return youtube.getVideoIdFromUrl(url) !== null;
  }

  chrome.tabs.query({ active: true, currentWindow: true }, function handleTabs(tabs) {
    var tab = tabs && tabs[0];

    if (!tab || !tab.id) {
      setStatus("No active tab found.");
      return;
    }

    activeTabId = tab.id;

    if (!isSupportedYouTubeVideoUrl(tab.url || "")) {
      setStatus("Open a YouTube video or Short to use this.");
      return;
    }

    setStatus("YouTube video or Short detected.");
    toggleButton.disabled = false;
  });

  toggleButton.addEventListener("click", function handleToggleClick() {
    if (!activeTabId) {
      return;
    }

    chrome.tabs.sendMessage(activeTabId, { type: "YT_TRANSCRIPT_TOGGLE_PANEL" }, function handleResponse() {
      if (chrome.runtime.lastError) {
        setStatus("Refresh the YouTube tab, then try again.");
      }
    });
  });
})();
