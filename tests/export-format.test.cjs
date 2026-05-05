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
