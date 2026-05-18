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

  function formatSrtTime(totalSeconds) {
    var safeSeconds = Math.max(0, Number(totalSeconds) || 0);
    var hours = Math.floor(safeSeconds / 3600);
    var minutes = Math.floor((safeSeconds % 3600) / 60);
    var seconds = Math.floor(safeSeconds % 60);
    var milliseconds = Math.floor((safeSeconds % 1) * 1000);
    return String(hours).padStart(2, "0") + ":" +
           String(minutes).padStart(2, "0") + ":" +
           String(seconds).padStart(2, "0") + "," +
           String(milliseconds).padStart(3, "0");
  }

  function formatVttTime(totalSeconds) {
    return formatSrtTime(totalSeconds).replace(",", ".");
  }

  function buildSrtTranscript(transcriptRows) {
    var rows = Array.isArray(transcriptRows) ? transcriptRows : [];
    var lines = [];

    rows.forEach(function addRow(row, index) {
      if (!row || !row.text) {
        return;
      }
      var start = formatSrtTime(row.startSeconds);
      var end = formatSrtTime(row.startSeconds + row.durationSeconds);
      lines.push(String(index + 1));
      lines.push(start + " --> " + end);
      lines.push(row.text);
      lines.push("");
    });

    return lines.join("\n");
  }

  function buildVttTranscript(transcriptRows) {
    var rows = Array.isArray(transcriptRows) ? transcriptRows : [];
    var lines = ["WEBVTT", ""];

    rows.forEach(function addRow(row) {
      if (!row || !row.text) {
        return;
      }
      var start = formatVttTime(row.startSeconds);
      var end = formatVttTime(row.startSeconds + row.durationSeconds);
      lines.push(start + " --> " + end);
      lines.push(row.text);
      lines.push("");
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

  function sanitizeDisplayFilePart(value, fallback) {
    var safeValue = String(value || fallback || "youtube-video")
      .replace(/[<>:"/\\|?*\u0000-\u001f]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 80);

    return safeValue || fallback || "youtube-video";
  }

  function createChannelTranscriptFileName(index, videoTitle, videoId) {
    var safeIndex = String(Math.max(1, Number(index) || 1)).padStart(3, "0");
    var safeTitle = sanitizeDisplayFilePart(videoTitle, "Untitled video");
    var safeVideoId = sanitizeDisplayFilePart(videoId, "unknown-video");

    return safeIndex + " - " + safeTitle + " [" + safeVideoId + "].txt";
  }

  function buildChannelTranscriptFile(video, channelName, downloadedAt) {
    var safeVideo = video || {};
    var lines = [
      "Title: " + (safeVideo.title || "Unknown video"),
      "URL: " + (safeVideo.url || ""),
      "Channel: " + (channelName || ""),
      "Video ID: " + (safeVideo.videoId || ""),
      "Transcript language: " + (safeVideo.transcriptLanguage || ""),
      "Downloaded at: " + (downloadedAt || ""),
      ""
    ];

    (Array.isArray(safeVideo.rows) ? safeVideo.rows : []).forEach(function addRow(row) {
      if (!row || !row.text) {
        return;
      }

      lines.push((row.timestamp || "00:00") + " " + row.text);
    });

    return lines.join("\n");
  }

  function buildChannelManifest(options) {
    var safeOptions = options || {};
    var successes = Array.isArray(safeOptions.successes) ? safeOptions.successes : [];
    var failures = Array.isArray(safeOptions.failures) ? safeOptions.failures : [];

    return JSON.stringify({
      channelName: safeOptions.channelName || "",
      channelUrl: safeOptions.channelUrl || "",
      exportedAt: safeOptions.exportedAt || safeOptions.downloadedAt || "",
      totalDiscoveredVideos: Number(safeOptions.totalDiscoveredVideos) || 0,
      totalSuccessfulTranscripts: successes.length,
      totalFailedVideos: failures.length,
      scanStatus: safeOptions.scanStatus || "",
      preferredTranscriptLanguage: safeOptions.preferredTranscriptLanguage || "",
      successfulVideos: successes.map(function mapSuccess(video) {
        return {
          index: video.index || 0,
          videoId: video.videoId || "",
          title: video.title || "",
          url: video.url || "",
          language: video.transcriptLanguage || "",
          filename: video.filename || ""
        };
      })
    }, null, 2);
  }

  function buildFailedVideosReport(failures) {
    var lines = ["Failed videos", ""];
    var safeFailures = Array.isArray(failures) ? failures : [];

    if (safeFailures.length === 0) {
      lines.push("No failed videos");
      return lines.join("\n");
    }

    safeFailures.forEach(function addFailure(video) {
      if (!video) {
        return;
      }

      lines.push([
        video.videoId || "",
        video.title || "Unknown video",
        video.url || "",
        video.reason || "Unknown failure"
      ].join(" | "));
    });

    return lines.join("\n");
  }

  function createChannelZipFileName(channelName) {
    return sanitizeDisplayFilePart(channelName, "Channel") + " - Transcripts.zip";
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

  function downloadBlobFile(fileName, blob, documentValue) {
    var doc = documentValue || root.document;
    var url;
    var link;

    if (!doc || !blob || !root.URL || typeof root.URL.createObjectURL !== "function") {
      return false;
    }

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
    buildChannelManifest: buildChannelManifest,
    buildChannelTranscriptFile: buildChannelTranscriptFile,
    buildFailedVideosReport: buildFailedVideosReport,
    buildMarkdownTranscript: buildMarkdownTranscript,
    buildPlainTextTranscript: buildPlainTextTranscript,
    buildSrtTranscript: buildSrtTranscript,
    buildVttTranscript: buildVttTranscript,
    createChannelTranscriptFileName: createChannelTranscriptFileName,
    createChannelZipFileName: createChannelZipFileName,
    createSafeFileName: createSafeFileName,
    downloadBlobFile: downloadBlobFile,
    downloadTextFile: downloadTextFile
  };

  root.YTTranscriptExport = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
