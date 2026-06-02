const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const packageJson = require(path.join(rootDir, "package.json"));
const releaseIncludes = [
  "manifest.json",
  "src"
];

const blockedZipEntries = [
  ".git",
  ".github",
  ".playwright-mcp",
  "VIBE_CODER_AI_CODING_MASTER_LIBRARY",
  "node_modules",
  "docs",
  "dist",
  "screenshots",
  "secrets",
  "tests",
  "99_Archive_Originals"
];

const blockedZipExtensions = [
  ".map",
  ".zip"
];

const crcTable = Array.from({ length: 256 }, (_, tableIndex) => {
  let value = tableIndex;

  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }

  return value >>> 0;
});

function getCrc32(buffer) {
  let crc = 0xffffffff;

  for (let index = 0; index < buffer.length; index += 1) {
    crc = crcTable[(crc ^ buffer[index]) & 0xff] ^ (crc >>> 8);
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function writeUInt16(value) {
  const buffer = Buffer.alloc(2);

  buffer.writeUInt16LE(value);
  return buffer;
}

function writeUInt32(value) {
  const buffer = Buffer.alloc(4);

  buffer.writeUInt32LE(value >>> 0);
  return buffer;
}

function getDosDateTime(date) {
  const safeDate = date || new Date();
  const year = Math.max(1980, safeDate.getFullYear());
  const dosTime =
    (safeDate.getHours() << 11) |
    (safeDate.getMinutes() << 5) |
    Math.floor(safeDate.getSeconds() / 2);
  const dosDate =
    ((year - 1980) << 9) |
    ((safeDate.getMonth() + 1) << 5) |
    safeDate.getDate();

  return {
    date: dosDate,
    time: dosTime
  };
}

function getSafeZipPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function collectFiles(entryName) {
  const absolutePath = path.join(rootDir, entryName);
  const files = [];

  if (!fs.existsSync(absolutePath)) {
    return files;
  }

  function walk(currentPath) {
    const stat = fs.statSync(currentPath);

    if (stat.isDirectory()) {
      fs.readdirSync(currentPath)
        .sort()
        .forEach((childName) => {
          walk(path.join(currentPath, childName));
        });
      return;
    }

    if (stat.isFile()) {
      files.push({
        absolutePath: currentPath,
        zipPath: getSafeZipPath(path.relative(rootDir, currentPath)),
        modifiedAt: stat.mtime
      });
    }
  }

  walk(absolutePath);
  return files;
}

function buildZip(files) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  files.forEach((file) => {
    const data = fs.readFileSync(file.absolutePath);
    const name = Buffer.from(file.zipPath, "utf8");
    const crc = getCrc32(data);
    const dos = getDosDateTime(file.modifiedAt);
    const localHeader = Buffer.concat([
      writeUInt32(0x04034b50),
      writeUInt16(20),
      writeUInt16(0x0800),
      writeUInt16(0),
      writeUInt16(dos.time),
      writeUInt16(dos.date),
      writeUInt32(crc),
      writeUInt32(data.length),
      writeUInt32(data.length),
      writeUInt16(name.length),
      writeUInt16(0),
      name
    ]);
    const centralHeader = Buffer.concat([
      writeUInt32(0x02014b50),
      writeUInt16(20),
      writeUInt16(20),
      writeUInt16(0x0800),
      writeUInt16(0),
      writeUInt16(dos.time),
      writeUInt16(dos.date),
      writeUInt32(crc),
      writeUInt32(data.length),
      writeUInt32(data.length),
      writeUInt16(name.length),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt16(0),
      writeUInt32(0),
      writeUInt32(offset),
      name
    ]);

    localParts.push(localHeader, data);
    centralParts.push(centralHeader);
    offset += localHeader.length + data.length;
  });

  const centralDirectory = Buffer.concat(centralParts);
  const endRecord = Buffer.concat([
    writeUInt32(0x06054b50),
    writeUInt16(0),
    writeUInt16(0),
    writeUInt16(files.length),
    writeUInt16(files.length),
    writeUInt32(centralDirectory.length),
    writeUInt32(offset),
    writeUInt16(0)
  ]);

  return Buffer.concat(localParts.concat([centralDirectory, endRecord]));
}

function isBlockedZipPath(zipPath) {
  const pathParts = zipPath.split("/");
  const fileName = pathParts[pathParts.length - 1];

  if (fileName === ".env" || fileName.startsWith(".env.")) {
    return true;
  }

  if (blockedZipExtensions.some((extension) => fileName.endsWith(extension))) {
    return true;
  }

  return pathParts.some((part) => blockedZipEntries.includes(part));
}

function validatePackageContents(files) {
  const blockedFiles = files
    .map((file) => file.zipPath)
    .filter(isBlockedZipPath);

  if (blockedFiles.length > 0) {
    throw new Error(
      `Refusing to package excluded files:\n${blockedFiles.join("\n")}`
    );
  }
}

function main() {
  const files = releaseIncludes.flatMap(collectFiles);

  if (files.length === 0) {
    throw new Error("No extension files found to package.");
  }

  validatePackageContents(files);
  fs.mkdirSync(distDir, { recursive: true });

  const zipName = `${packageJson.name}-${packageJson.version}.zip`;
  const zipPath = path.join(distDir, zipName);

  fs.writeFileSync(zipPath, buildZip(files));
  console.log(`Created ${path.relative(rootDir, zipPath)} with ${files.length} files.`);
}

main();
