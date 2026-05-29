const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "manifest.json"), "utf8"),
);
const popupDir = path.join(__dirname, "..", "src", "popup");

test("side panel has the permissions needed to read and message YouTube tabs", () => {
  assert.ok(manifest.permissions.includes("tabs"));
  assert.ok(manifest.permissions.includes("sidePanel"));
  assert.ok(manifest.permissions.includes("scripting"));
  assert.ok(manifest.permissions.includes("storage"));
  assert.ok(manifest.host_permissions.includes("https://www.youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://m.youtube.com/*"));
});

test("extension action opens the side panel without unused popup files", () => {
  assert.equal(manifest.action.default_popup, undefined);
  assert.equal(manifest.side_panel.default_path, "src/sidepanel/sidepanel.html");
  assert.equal(fs.existsSync(popupDir), false);
});
