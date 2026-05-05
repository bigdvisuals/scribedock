(function attachSidebarHelpers(root) {
  "use strict";

  function createSidebarShellState(videoId, videoTitle) {
    return {
      extensionName: "YouTube Transcript Helper",
      videoId: videoId || "Unknown video",
      videoTitle: videoTitle || "Current YouTube video",
      statusLabel: "Status",
      statusMessage: "Checking transcript availability...",
      transcriptTitle: "Transcript",
      transcriptPlaceholder: "Transcript will appear here after the next phase.",
      search: {
        placeholder: "Search will work after transcripts load",
        disabled: true
      },
      actions: [
        {
          label: "Copy",
          disabled: true
        },
        {
          label: "TXT",
          disabled: true
        },
        {
          label: "Markdown",
          disabled: true
        }
      ]
    };
  }

  var api = {
    createSidebarShellState: createSidebarShellState
  };

  root.YTTranscriptSidebar = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
