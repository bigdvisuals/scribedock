const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const manifest = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "manifest.json"), "utf8"),
);
const packageJson = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "package.json"), "utf8"),
);
const popupDir = path.join(__dirname, "..", "src", "popup");

function assertIconSet(iconSet) {
  ["16", "32", "48", "128"].forEach((size) => {
    assert.ok(iconSet[size], `Missing ${size}px icon path`);
    assert.equal(
      fs.existsSync(path.join(__dirname, "..", iconSet[size])),
      true,
      `Missing icon file: ${iconSet[size]}`,
    );
  });
}

test("side panel has the permissions needed to read and message YouTube tabs", () => {
  assert.equal(manifest.permissions.includes("activeTab"), false);
  assert.ok(manifest.permissions.includes("tabs"));
  assert.ok(manifest.permissions.includes("downloads"));
  assert.ok(manifest.permissions.includes("sidePanel"));
  assert.ok(manifest.permissions.includes("scripting"));
  assert.ok(manifest.permissions.includes("storage"));
  assert.ok(manifest.host_permissions.includes("https://www.youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://youtube.com/*"));
  assert.ok(manifest.host_permissions.includes("https://m.youtube.com/*"));
  assert.equal(manifest.host_permissions.includes("<all_urls>"), false);
  assert.equal(manifest.web_accessible_resources, undefined);
});

test("extension action opens the side panel without unused popup files", () => {
  assert.equal(manifest.action.default_popup, undefined);
  assert.equal(manifest.side_panel.default_path, "src/sidepanel/sidepanel.html");
  assert.equal(fs.existsSync(popupDir), false);
});

test("extension metadata uses release wording instead of scaffold wording", () => {
  const combinedText = [
    manifest.name,
    manifest.description,
    packageJson.description,
  ].join(" ");

  assert.doesNotMatch(combinedText, /scaffold|demo|MVP/i);
  assert.equal(manifest.name, "ScribeDock");
  assert.equal(manifest.action.default_title, "Open ScribeDock");
  assert.match(manifest.description, /YouTube transcripts/i);
  assert.match(packageJson.description, /YouTube transcripts/i);
});

test("manifest exposes ScribeDock icons at Chrome extension sizes", () => {
  assertIconSet(manifest.icons);
  assertIconSet(manifest.action.default_icon);
});
