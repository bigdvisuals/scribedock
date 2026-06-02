const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const rootDir = path.join(__dirname, "..");
const runtimeRoots = [
  path.join(rootDir, "manifest.json"),
  path.join(rootDir, "src"),
];

function collectRuntimeFiles(entryPath) {
  const stat = fs.statSync(entryPath);

  if (stat.isFile()) {
    return [entryPath];
  }

  return fs.readdirSync(entryPath)
    .flatMap((childName) => collectRuntimeFiles(path.join(entryPath, childName)));
}

function readRuntimeText() {
  return runtimeRoots
    .flatMap(collectRuntimeFiles)
    .filter((filePath) => /\.(html|js|json)$/.test(filePath))
    .map((filePath) => fs.readFileSync(filePath, "utf8"))
    .join("\n");
}

test("runtime source does not use dynamic code execution", () => {
  const runtimeText = readRuntimeText();

  assert.doesNotMatch(runtimeText, /\beval\s*\(/);
  assert.doesNotMatch(runtimeText, /\bnew\s+Function\b/);
  assert.doesNotMatch(runtimeText, /\bFunction\s*\(/);
  assert.doesNotMatch(runtimeText, /\bimportScripts\s*\(/);
});

test("runtime source does not include analytics or tracking calls", () => {
  const runtimeText = readRuntimeText();

  assert.doesNotMatch(runtimeText, /\bgtag\b|\bga\s*\(|google-analytics|analytics/i);
  assert.doesNotMatch(runtimeText, /telemetry|tracking|sendBeacon|XMLHttpRequest|WebSocket/i);
});
