const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const contentScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "content", "content.js"),
  "utf8",
);

test("content script keeps the side-panel runtime message contract", () => {
  assert.match(contentScript, /message\.type === "PING"/);
  assert.match(contentScript, /message\.type === "GET_TRANSCRIPT_STATE"/);
  assert.match(contentScript, /message\.type === "GET_CURRENT_TIME"/);
  assert.match(contentScript, /message\.type === "JUMP_TO_TIME"/);
});
