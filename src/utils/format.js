(function attachFormatHelpers(root) {
  "use strict";

  function normalizeWhitespace(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function formatTimestamp(totalSeconds) {
    var safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
    var hours = Math.floor(safeSeconds / 3600);
    var minutes = Math.floor((safeSeconds % 3600) / 60);
    var seconds = safeSeconds % 60;
    var minuteText = String(minutes).padStart(hours > 0 ? 2 : 1, "0");
    var secondText = String(seconds).padStart(2, "0");

    if (hours > 0) {
      return hours + ":" + minuteText + ":" + secondText;
    }

    return minuteText + ":" + secondText;
  }

  var api = {
    normalizeWhitespace: normalizeWhitespace,
    formatTimestamp: formatTimestamp
  };

  root.YTTranscriptFormat = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
