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
  assert.doesNotMatch(script, /assets/);
  assert.doesNotMatch(script, /README\.md/);
  assert.doesNotMatch(script, /CHANGELOG\.md/);
  assert.doesNotMatch(script, /TESTING\.md/);
  assert.doesNotMatch(script, /QA_CHECKLIST\.md/);
});

test("package script blocks private and unneeded files from the zip", () => {
  const script = fs.readFileSync(packageScriptPath, "utf8");

  assert.match(script, /blockedZipEntries/);
  assert.match(script, /\.git/);
  assert.match(script, /\.github/);
  assert.match(script, /\.playwright-mcp/);
  assert.match(script, /VIBE_CODER_AI_CODING_MASTER_LIBRARY/);
  assert.match(script, /node_modules/);
  assert.match(script, /\.env/);
  assert.match(script, /docs/);
  assert.match(script, /screenshots/);
  assert.match(script, /secrets/);
  assert.match(script, /tests/);
  assert.match(script, /99_Archive_Originals/);
  assert.match(script, /blockedZipExtensions/);
  assert.match(script, /\.map/);
  assert.match(script, /\.zip/);
});
