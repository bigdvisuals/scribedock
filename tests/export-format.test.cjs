const assert = require("node:assert/strict");
const test = require("node:test");

const exportHelpers = require("../src/utils/export.js");
const format = require("../src/utils/format.js");

const rows = [
  {
    timestamp: "0:17",
    text: "Hello world"
  },
  {
    timestamp: "12:04",
    text: "Second line"
  }
];

test("formats timestamps for short and long videos", () => {
  assert.equal(format.formatTimestamp(17), "0:17");
  assert.equal(format.formatTimestamp(724), "12:04");
  assert.equal(format.formatTimestamp(3661), "1:01:01");
});

test("builds plain text transcript exports", () => {
  const text = exportHelpers.buildPlainTextTranscript("Video Title", "https://youtube.com/watch?v=abc", rows);

  assert.equal(text, "Video Title\nhttps://youtube.com/watch?v=abc\n\n0:17 Hello world\n12:04 Second line");
});

test("builds markdown transcript exports", () => {
  const markdown = exportHelpers.buildMarkdownTranscript("Video Title", "https://youtube.com/watch?v=abc", rows);

  assert.equal(markdown, "# Video Title\n\nhttps://youtube.com/watch?v=abc\n\n- **0:17** Hello world\n- **12:04** Second line");
});

test("builds JSON transcript exports with metadata and normalized rows", () => {
  const json = JSON.parse(exportHelpers.buildJsonTranscriptExport({
    title: "Video Title",
    videoId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "Channel Name",
    languageLabel: "English",
    languageCode: "en",
    source: "timedtext",
    exportedAt: "2026-05-29T12:00:00.000Z",
    rows: [
      {
        startSeconds: 17.5,
        durationSeconds: 2,
        timestamp: "0:17",
        text: "Hello world"
      },
      {
        timestamp: "12:04",
        text: "Missing optional values"
      }
    ]
  }));

  assert.deepEqual(json, {
    title: "Video Title",
    videoId: "dQw4w9WgXcQ",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "Channel Name",
    languageLabel: "English",
    languageCode: "en",
    source: "timedtext",
    exportedAt: "2026-05-29T12:00:00.000Z",
    rows: [
      {
        startSeconds: 17.5,
        duration: 2,
        timestamp: "0:17",
        text: "Hello world"
      },
      {
        startSeconds: 0,
        timestamp: "12:04",
        text: "Missing optional values"
      }
    ]
  });
});

test("creates safe transcript filenames", () => {
  assert.equal(exportHelpers.createSafeFileName("Bad / File: Name?", "txt"), "bad-file-name.txt");
  assert.equal(exportHelpers.createSafeFileName("CON", "txt"), "con-file.txt");
  assert.equal(exportHelpers.createSafeFileName("Video", "../../json"), "video.json");
});

test("builds channel export filenames and metadata files", () => {
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(1, "Bad / File: Name?", "dQw4w9WgXcQ"),
    "1 - Bad File Name [dQw4w9WgXcQ].txt"
  );
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(2, "../CON", "aux"),
    "2 - CON-file [aux-file].txt"
  );

  const transcriptFile = exportHelpers.buildChannelTranscriptFile({
    videoId: "dQw4w9WgXcQ",
    title: "Video Title",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    transcriptLanguage: "English",
    rows
  }, "Channel Name", "2026-05-17T12:00:00.000Z");
  const manifest = JSON.parse(exportHelpers.buildChannelManifest({
    channelName: "Channel Name",
    channelUrl: "https://www.youtube.com/@channel/videos",
    exportedAt: "2026-05-17T12:00:00.000Z",
    totalDiscoveredVideos: 2,
    scanStatus: "paused",
    preferredTranscriptLanguage: "es",
    successes: [
      {
        index: 1,
        videoId: "dQw4w9WgXcQ",
        title: "Video Title",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        transcriptLanguage: "English",
        filename: "1 - Video Title [dQw4w9WgXcQ].txt"
      }
    ],
    failures: [
      {
        videoId: "abcdefghijk",
        title: "Unavailable video",
        url: "https://www.youtube.com/watch?v=abcdefghijk",
        reason: "No caption tracks found"
      }
    ]
  }));
  const failed = exportHelpers.buildFailedVideosReport([
    {
      videoId: "abcdefghijk",
      title: "Unavailable video",
      url: "https://www.youtube.com/watch?v=abcdefghijk",
      reason: "No caption tracks found"
    }
  ]);
  const readme = exportHelpers.buildChannelReadme({
    channelName: "Channel Name",
    channelUrl: "https://www.youtube.com/@channel/videos",
    exportedAt: "2026-05-17T12:00:00.000Z",
    scanStatus: "paused",
    totalVisibleVideos: 2,
    successes: [{ videoId: "dQw4w9WgXcQ" }],
    failures: [{ videoId: "abcdefghijk" }]
  });

  assert.match(transcriptFile, /Title: Video Title/);
  assert.match(transcriptFile, /URL: https:\/\/www\.youtube\.com\/watch\?v=dQw4w9WgXcQ/);
  assert.match(transcriptFile, /Channel: Channel Name/);
  assert.match(transcriptFile, /Video ID: dQw4w9WgXcQ/);
  assert.match(transcriptFile, /Transcript language: English/);
  assert.match(transcriptFile, /Downloaded at: 2026-05-17T12:00:00.000Z/);
  assert.deepEqual(manifest.successfulVideos, [
    {
      index: 1,
      videoId: "dQw4w9WgXcQ",
      title: "Video Title",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      language: "English",
      filename: "1 - Video Title [dQw4w9WgXcQ].txt"
    }
  ]);
  assert.equal(manifest.scanStatus, "paused");
  assert.equal(manifest.totalDiscoveredVideos, 2);
  assert.equal(manifest.totalSuccessfulTranscripts, 1);
  assert.equal(manifest.totalFailedVideos, 1);
  assert.equal(manifest.preferredTranscriptLanguage, "es");
  assert.match(failed, /abcdefghijk \| Unavailable video/);
  assert.match(readme, /Channel name: Channel Name/);
  assert.match(readme, /Channel URL: https:\/\/www\.youtube\.com\/@channel\/videos/);
  assert.match(readme, /Export date: 2026-05-17T12:00:00.000Z/);
  assert.match(readme, /Scan status: paused/);
  assert.match(readme, /Total visible videos: 2/);
  assert.match(readme, /Successful transcripts: 1/);
  assert.match(readme, /Failed\/unavailable videos: 1/);
  assert.match(readme, /manifest\.json is the technical index/);
  assert.match(readme, /failed-videos\.txt lists videos without transcripts/);
});

test("creates separate channel ZIP names for videos and Shorts", () => {
  assert.equal(
    exportHelpers.createChannelZipFileName("Vincent Chan", "videos"),
    "vincent-chan-videos-transcripts.zip"
  );
  assert.equal(
    exportHelpers.createChannelZipFileName("Vincent Chan", "shorts"),
    "vincent-chan-shorts-transcripts.zip"
  );
  assert.equal(
    exportHelpers.createChannelZipFileName("CON", "videos"),
    "con-file-videos-transcripts.zip"
  );
});

test("builds playlist export filenames and manifest data", () => {
  assert.equal(
    exportHelpers.createPlaylistTranscriptFileName(1, "Bad / File: Name?"),
    "1 - Bad File Name.txt"
  );
  assert.equal(
    exportHelpers.createPlaylistTranscriptFileName(12, ""),
    "12 - Untitled video.txt"
  );
  assert.equal(
    exportHelpers.createPlaylistZipFileName("My Playlist"),
    "my-playlist-playlist-transcripts.zip"
  );

  const manifest = JSON.parse(exportHelpers.buildPlaylistManifest({
    playlistTitle: "My Playlist",
    playlistUrl: "https://www.youtube.com/playlist?list=PLdemo",
    exportedAt: "2026-05-25T12:00:00.000Z",
    totalVideosFound: 2,
    successes: [
      {
        index: 1,
        videoId: "aaaaaaaaaaa",
        title: "Available video",
        url: "https://www.youtube.com/watch?v=aaaaaaaaaaa&list=PLdemo",
        transcriptLanguage: "English",
        filename: "1 - Available video.txt"
      }
    ],
    failures: [
      {
        videoId: "bbbbbbbbbbb",
        title: "Unavailable video",
        url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo",
        reason: "No caption tracks found"
      }
    ]
  }));

  assert.equal(manifest.playlistTitle, "My Playlist");
  assert.equal(manifest.playlistUrl, "https://www.youtube.com/playlist?list=PLdemo");
  assert.equal(manifest.totalVideosFound, 2);
  assert.equal(manifest.downloadedCount, 1);
  assert.equal(manifest.skippedCount, 1);
  assert.deepEqual(manifest.skippedVideos, [
    {
      videoId: "bbbbbbbbbbb",
      title: "Unavailable video",
      url: "https://www.youtube.com/watch?v=bbbbbbbbbbb&list=PLdemo",
      reason: "No caption tracks found"
    }
  ]);
});

test("builds bulk transcript filenames and files for txt markdown and json", () => {
  const video = {
    videoId: "aaaaaaaaaaa",
    title: "Available video",
    url: "https://www.youtube.com/watch?v=aaaaaaaaaaa",
    transcriptLanguage: "English",
    source: "timedtext",
    rows
  };

  assert.equal(
    exportHelpers.createBulkTranscriptFileName(1, video.title, "md", false),
    "1 - Available video.md"
  );
  assert.equal(
    exportHelpers.createBulkTranscriptFileName(2, "", "json", true, "bbbbbbbbbbb"),
    "2 - Untitled video [bbbbbbbbbbb].json"
  );
  assert.match(
    exportHelpers.buildBulkTranscriptFile(video, "md", "Collection", "2026-05-25T12:00:00.000Z"),
    /^# Available video/
  );

  const json = JSON.parse(
    exportHelpers.buildBulkTranscriptFile(video, "json", "Collection", "2026-05-25T12:00:00.000Z")
  );
  assert.equal(json.title, "Available video");
  assert.equal(json.videoId, "aaaaaaaaaaa");
  assert.equal(json.channel, "Collection");
  assert.equal(json.rows.length, rows.length);
});

test("builds playlist manifest for large scans with skipped videos", () => {
  const successes = Array.from({ length: 165 }, (_, index) => ({
    index: index + 1,
    videoId: "a".repeat(10) + String(index % 10),
    title: `Available ${index + 1}`,
    url: `https://www.youtube.com/watch?v=${index}`,
    transcriptLanguage: "English",
    filename: `${index + 1} - Available ${index + 1}.txt`
  }));
  const failures = Array.from({ length: 35 }, (_, index) => ({
    videoId: "b".repeat(10) + String(index % 10),
    title: `Skipped ${index + 1}`,
    url: `https://www.youtube.com/watch?v=skip${index}`,
    reason: "No caption tracks found"
  }));
  const manifest = JSON.parse(exportHelpers.buildPlaylistManifest({
    playlistTitle: "Large Playlist",
    totalVideosFound: 200,
    successes,
    failures
  }));

  assert.equal(manifest.downloadedCount, 165);
  assert.equal(manifest.skippedCount, 35);
  assert.equal(manifest.skippedVideos.length, 35);
});

test("uses safe untitled filenames and empty failed reports", () => {
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(2, "", "abcdefghijk"),
    "2 - Untitled video [abcdefghijk].txt"
  );
  assert.equal(
    exportHelpers.buildFailedVideosReport([]),
    "Failed videos\n\nNo failed videos"
  );
});

test("downloads ZIP blobs with chrome downloads and revokes object URLs", async () => {
  assert.equal(typeof exportHelpers.downloadBlobWithChromeDownloads, "function");

  const blob = { size: 123 };
  const calls = [];
  const urlApi = {
    createObjectURL(value) {
      assert.equal(value, blob);
      calls.push("create");
      return "blob:playlist-zip";
    },
    revokeObjectURL(url) {
      calls.push("revoke:" + url);
    }
  };
  const chromeApi = {
    runtime: {
      lastError: null
    },
    downloads: {
      download(options, callback) {
        calls.push(options);
        callback(42);
      }
    }
  };

  const downloadId = await exportHelpers.downloadBlobWithChromeDownloads(
    "Playlist ZIP?.zip",
    blob,
    { chromeApi, urlApi }
  );

  assert.equal(downloadId, 42);
  assert.deepEqual(calls, [
    "create",
    {
      url: "blob:playlist-zip",
      filename: "Playlist ZIP .zip",
      conflictAction: "uniquify",
      saveAs: false
    },
    "revoke:blob:playlist-zip"
  ]);
});

test("surfaces chrome download errors and still revokes object URLs", async () => {
  assert.equal(typeof exportHelpers.downloadBlobWithChromeDownloads, "function");

  const calls = [];
  const chromeApi = {
    runtime: {
      lastError: { message: "Download blocked" }
    },
    downloads: {
      download(options, callback) {
        calls.push(options.filename);
        callback();
      }
    }
  };
  const urlApi = {
    createObjectURL() {
      calls.push("create");
      return "blob:failed-zip";
    },
    revokeObjectURL(url) {
      calls.push("revoke:" + url);
    }
  };

  await assert.rejects(
    () => exportHelpers.downloadBlobWithChromeDownloads("playlist.zip", { size: 1 }, { chromeApi, urlApi }),
    /Download blocked/
  );
  assert.deepEqual(calls, ["create", "playlist.zip", "revoke:blob:failed-zip"]);
});

test("rejects ZIP download when required download inputs are missing", async () => {
  assert.equal(typeof exportHelpers.downloadBlobWithChromeDownloads, "function");

  await assert.rejects(
    () => exportHelpers.downloadBlobWithChromeDownloads("playlist.zip", null, {
      chromeApi: { downloads: { download() {} } },
      urlApi: { createObjectURL() {} }
    }),
    /ZIP blob/
  );
  await assert.rejects(
    () => exportHelpers.downloadBlobWithChromeDownloads("playlist.zip", { size: 1 }, {
      chromeApi: {},
      urlApi: { createObjectURL() {} }
    }),
    /Chrome downloads/
  );
});
