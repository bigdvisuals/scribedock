# Testing Guide

Use this guide to verify ScribeDock before sharing, packaging, or publishing a release.

## Automated Tests

Run the full test suite from the project root:

```bash
npm test
```

This runs:

```bash
node --test tests/*.test.cjs
```

The tests cover transcript parsing, URL detection, navigation state, export formatting, package safety, manifest permissions, runtime messaging, welcome-page onboarding, and side panel behavior.

## Package Test

Create a Chrome Web Store ZIP:

```bash
npm run package
```

The package script should create `dist/scribedock-1.0.1.zip` and include only `manifest.json` plus `src/`.

## Manual Chrome Test

1. Open `chrome://extensions`.
2. Enable Developer Mode.
3. Click "Load unpacked".
4. Select this project folder for development testing.
5. Confirm the welcome guide opens on first install only.
6. Click the welcome guide buttons and verify the side-panel fallback works if Chrome does not open it.
7. Open a supported YouTube page.
8. Open ScribeDock from the extension action.
9. Confirm transcript loading, search, copy, and export.
10. After 2 successful downloads, confirm the support/feedback nudge appears once and can be dismissed.

For release-package testing, unzip `dist/scribedock-1.0.1.zip` into a temporary folder and load that unpacked folder instead.

## Release QA

Use [QA_CHECKLIST.md](QA_CHECKLIST.md) for browser scenarios that need manual review on real YouTube pages.

## Debug Logs

Enable debug logs in Chrome DevTools:

```javascript
localStorage.setItem("scribedockDebug", "true");
```

Turn debug logs off:

```javascript
localStorage.removeItem("scribedockDebug");
localStorage.removeItem("ytTranscriptHelperDebug");
```
