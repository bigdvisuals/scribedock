const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "manifest.json"), "utf8"),
);

test("side panel has the permissions needed to read and message YouTube tabs", () => {
  assert.ok(manifest.permissions.includes("tabs"));
  assert.ok(manifest.permissions.includes("sidePanel"));
  assert.ok(manifest.permissions.includes("scripting"));
  assert.ok(manifest.permissions.includes("storage"));
  assert.ok(manifest.host_permissions.includes("https://www.youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://m.youtube.com/*"));
});
