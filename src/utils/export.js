(function attachExportHelpers(root) {
  "use strict";

  function buildPlainTextTranscript(videoTitle, videoUrl, transcriptRows) {
    var rows = Array.isArray(transcriptRows) ? transcriptRows : [];
    var lines = [];

    if (videoTitle) {
      lines.push(videoTitle);
    }

    if (videoUrl) {
      lines.push(videoUrl);
    }

    if (lines.length > 0) {
      lines.push("");
    }

    rows.forEach(function addRow(row) {
      if (!row || !row.text) {
        return;
      }

      lines.push((row.timestamp || "00:00") + " " + row.text);
    });

    return lines.join("\n");
  }

  function buildMarkdownTranscript(videoTitle, videoUrl, transcriptRows) {
    var rows = Array.isArray(transcriptRows) ? transcriptRows : [];
    var lines = [];

    if (videoTitle) {
      lines.push("# " + videoTitle);
      lines.push("");
    }

    if (videoUrl) {
      lines.push(videoUrl);
      lines.push("");
    }

    rows.forEach(function addRow(row) {
      if (!row || !row.text) {
        return;
      }

      lines.push("- **" + (row.timestamp || "0:00") + "** " + row.text);
    });

    return lines.join("\n");
  }

  function createSafeFileName(videoTitle, extension) {
    var safeTitle = String(videoTitle || "youtube-transcript")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80);
    var safeExtension = String(extension || "txt").replace(/[^a-z0-9]/gi, "").toLowerCase() || "txt";

    return (safeTitle || "youtube-transcript") + "." + safeExtension;
  }

  function downloadTextFile(fileName, text, documentValue) {
    var doc = documentValue || root.document;
    var blob;
    var url;
    var link;

    if (!doc || !root.URL || typeof root.URL.createObjectURL !== "function") {
      return false;
    }

    blob = new Blob([text], {
      type: "text/plain;charset=utf-8"
    });
    url = root.URL.createObjectURL(blob);
    link = doc.createElement("a");
    link.href = url;
    link.download = fileName;
    link.style.display = "none";
    doc.body.appendChild(link);
    link.click();
    link.remove();
    root.URL.revokeObjectURL(url);

    return true;
  }

  var api = {
    buildMarkdownTranscript: buildMarkdownTranscript,
    buildPlainTextTranscript: buildPlainTextTranscript,
    createSafeFileName: createSafeFileName,
    downloadTextFile: downloadTextFile
  };

  root.YTTranscriptExport = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
