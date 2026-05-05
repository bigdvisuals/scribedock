const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("playwright");

const projectDir = process.cwd();
const extensionPath = projectDir;
const chromePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), "yt-transcript-profile-"));
const downloadsPath = fs.mkdtempSync(path.join(os.tmpdir(), "yt-transcript-downloads-"));
const normalUrl = "https://www.youtube.com/watch?v=jGhobd9nGoU";
const shortsUrl = "https://www.youtube.com/shorts/yDyxs6xK4xY";

async function dismissCommonBlocks(page) {
  for (const selector of [
    'button:has-text("Accept all")',
    'button:has-text("I agree")',
    'button:has-text("No thanks")',
    'button:has-text("Skip trial")'
  ]) {
    try {
      const button = page.locator(selector).first();
      if (await button.isVisible({ timeout: 1200 })) {
        await button.click({ timeout: 3000 });
        await page.waitForTimeout(1000);
      }
    } catch (_) {}
  }
}

async function waitForPanel(page, expectedVideoId) {
  await page.waitForSelector("#yt-transcript-helper-panel", { timeout: 30000 });
  await page.waitForFunction((videoId) => {
    const el = document.querySelector("[data-yt-transcript-video-id]");
    return el && el.textContent.trim() === videoId;
  }, expectedVideoId, { timeout: 30000 });
}

async function waitForRows(page, label) {
  await page.waitForFunction(() => {
    return document.querySelectorAll("[data-yt-transcript-rows] .yt-transcript-helper-row").length > 0;
  }, null, { timeout: 60000 });

  const data = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll("[data-yt-transcript-rows] .yt-transcript-helper-row"));
    return {
      rowCount: rows.length,
      firstText: rows[0]?.querySelector(".yt-transcript-helper-row-text")?.textContent?.trim() || "",
      state: document.querySelector("[data-yt-transcript-state]")?.textContent?.trim() || "",
      status: document.querySelector("[data-yt-transcript-status-message]")?.textContent?.trim() || ""
    };
  });

  if (!data.rowCount) {
    throw new Error(`${label}: transcript rows did not load`);
  }

  return data;
}

async function testSearch(page) {
  const firstText = await page.locator(".yt-transcript-helper-row-text").first().innerText({ timeout: 10000 });
  const word = (firstText.match(/[A-Za-z]{4,}/) || [])[0] || firstText.trim().split(/\s+/)[0];

  if (!word) {
    throw new Error("Search: could not find a word to search for");
  }

  await page.locator("[data-yt-transcript-search]").fill(word);
  await page.waitForTimeout(600);

  const result = await page.evaluate((query) => {
    const rows = Array.from(document.querySelectorAll("[data-yt-transcript-rows] .yt-transcript-helper-row"));
    return {
      query,
      visibleRows: rows.length,
      state: document.querySelector("[data-yt-transcript-state]")?.textContent?.trim() || "",
      allRowsIncludeQuery: rows.every((row) => row.textContent.toLowerCase().includes(query.toLowerCase()))
    };
  }, word);

  if (result.visibleRows < 1 || !result.allRowsIncludeQuery) {
    throw new Error(`Search failed for query ${word}`);
  }

  await page.locator("[data-yt-transcript-search]").fill("");
  await page.waitForTimeout(300);

  return result;
}

async function testCopyAndExports(page) {
  await page.context().grantPermissions(["clipboard-read", "clipboard-write"], { origin: "https://www.youtube.com" });

  await page.locator('[data-yt-transcript-action="copy"]').click({ timeout: 10000 });
  await page.waitForFunction(() => {
    return document.querySelector("[data-yt-transcript-state]")?.textContent?.trim() === "Copied";
  }, null, { timeout: 10000 });

  const txtPromise = page.waitForEvent("download", { timeout: 15000 });
  await page.locator('[data-yt-transcript-action="txt"]').click();
  const txtDownload = await txtPromise;
  const txtPath = await txtDownload.path();
  const txtContent = txtPath ? fs.readFileSync(txtPath, "utf8") : "";

  const mdPromise = page.waitForEvent("download", { timeout: 15000 });
  await page.locator('[data-yt-transcript-action="markdown"]').click();
  const mdDownload = await mdPromise;
  const mdPath = await mdDownload.path();
  const mdContent = mdPath ? fs.readFileSync(mdPath, "utf8") : "";

  if (!txtDownload.suggestedFilename().endsWith(".txt") || !txtContent.includes("Transcript")) {
    throw new Error("TXT export failed");
  }

  if (!mdDownload.suggestedFilename().endsWith(".md") || !mdContent.includes("# ")) {
    throw new Error("Markdown export failed");
  }

  return {
    copiedState: "Copied",
    txtFile: txtDownload.suggestedFilename(),
    txtBytes: Buffer.byteLength(txtContent, "utf8"),
    markdownFile: mdDownload.suggestedFilename(),
    markdownBytes: Buffer.byteLength(mdContent, "utf8")
  };
}

(async () => {
  const context = await chromium.launchPersistentContext(userDataDir, {
    headless: false,
    executablePath: chromePath,
    acceptDownloads: true,
    downloadsPath,
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
      "--disable-features=Translate,OptimizationHints",
      "--autoplay-policy=no-user-gesture-required"
    ]
  });

  const page = context.pages()[0] || await context.newPage();
  page.setDefaultTimeout(30000);

  try {
    await page.goto(normalUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await dismissCommonBlocks(page);
    await waitForPanel(page, "jGhobd9nGoU");
    const normal = await waitForRows(page, "Normal video");
    const search = await testSearch(page);
    const exports = await testCopyAndExports(page);

    await page.goto(shortsUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await dismissCommonBlocks(page);
    await waitForPanel(page, "yDyxs6xK4xY");
    const navigationAfterClick = await page.evaluate(() => ({
      videoId: document.querySelector("[data-yt-transcript-video-id]")?.textContent?.trim() || "",
      rowCount: document.querySelectorAll("[data-yt-transcript-rows] .yt-transcript-helper-row").length,
      placeholder: document.querySelector("[data-yt-transcript-placeholder]")?.textContent?.trim() || ""
    }));
    const shorts = await waitForRows(page, "Shorts video");

    console.log(JSON.stringify({ normalUrl, shortsUrl, normal, navigationAfterClick, shorts, search, exports }, null, 2));
  } finally {
    await context.close();
  }
})().catch((error) => {
  console.error(error && error.stack ? error.stack : error);
  process.exit(1);
});
