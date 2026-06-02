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
    "001 - Bad File Name [dQw4w9WgXcQ].txt"
  );
  assert.equal(
    exportHelpers.createChannelTranscriptFileName(2, "../CON", "aux"),
    "002 - CON-file [aux-file].txt"
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
      filename: "001 - Video Title [dQw4w9WgXcQ].txt"
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
    "01 - Bad File Name.txt"
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
        filename: "01 - Available video.txt"
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
