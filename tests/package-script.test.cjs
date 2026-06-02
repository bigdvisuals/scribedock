const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const rootDir = path.join(__dirname, "..");
const packageJson = require("../package.json");
const packageScriptPath = path.join(rootDir, "scripts", "package-extension.cjs");

test("package.json exposes a clean extension package script", () => {
  assert.equal(packageJson.scripts.package, "node scripts/package-extension.cjs");
});

test("package script only includes extension release files", () => {
  const script = fs.readFileSync(packageScriptPath, "utf8");

  assert.match(script, /manifest\.json/);
  assert.match(script, /src/);
  assert.match(script, /assets/);
  assert.match(script, /README\.md/);
  assert.match(script, /CHANGELOG\.md/);
  assert.match(script, /TESTING\.md/);
  assert.match(script, /QA_CHECKLIST\.md/);
});

test("package script blocks private and unneeded files from the zip", () => {
  const script = fs.readFileSync(packageScriptPath, "utf8");

  assert.match(script, /blockedZipEntries/);
  assert.match(script, /VIBE_CODER_AI_CODING_MASTER_LIBRARY/);
  assert.match(script, /node_modules/);
  assert.match(script, /\.env/);
  assert.match(script, /99_Archive_Originals/);
  assert.match(script, /blockedZipExtensions/);
  assert.match(script, /\.zip/);
});
