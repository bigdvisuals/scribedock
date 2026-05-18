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

test("creates safe transcript filenames", () => {
  assert.equal(exportHelpers.createSafeFileName("Bad / File: Name?", "txt"), "bad-file-name.txt");
});

test("builds channel export filenames and metadata files", () => {
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(1, "Bad / File: Name?", "dQw4w9WgXcQ"),
    "001 - Bad File Name [dQw4w9WgXcQ].txt"
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
        filename: "001 - Video Title [dQw4w9WgXcQ].txt"
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

  assert.match(transcriptFile, /Title: Video Title/);
  assert.match(transcriptFile, /Video ID: dQw4w9WgXcQ/);
  assert.deepEqual(manifest.successfulVideos, [
    {
      index: 1,
      videoId: "dQw4w9WgXcQ",
      title: "Video Title",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      language: "English",
      filename: "001 - Video Title [dQw4w9WgXcQ].txt"
    }
  ]);
  assert.equal(manifest.scanStatus, "paused");
  assert.equal(manifest.totalDiscoveredVideos, 2);
  assert.equal(manifest.totalSuccessfulTranscripts, 1);
  assert.equal(manifest.totalFailedVideos, 1);
  assert.equal(manifest.preferredTranscriptLanguage, "es");
  assert.match(failed, /abcdefghijk \| Unavailable video/);
});

test("uses safe untitled filenames and empty failed reports", () => {
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(2, "", "abcdefghijk"),
    "002 - Untitled video [abcdefghijk].txt"
  );
  assert.equal(
    exportHelpers.buildFailedVideosReport([]),
    "Failed videos\n\nNo failed videos"
  );
});
