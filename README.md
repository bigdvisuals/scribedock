# YouTube Transcript Helper

A beginner-friendly Chrome extension project for adding a transcript panel to YouTube.

This version fetches and renders available YouTube caption and transcript data. It proves that the extension loads, runs on YouTube video pages and Shorts, detects the current video ID, handles YouTube navigation seamlessly (including SPA navigation), and shows a usable transcript sidebar.

## What Works Now

- Loads as a Manifest V3 Chrome extension
- Runs only on YouTube pages
- Detects normal YouTube video URLs like `youtube.com/watch?v=VIDEO_ID`
- Detects YouTube Shorts URLs like `youtube.com/shorts/VIDEO_ID`
- Also supports mobile YouTube links like `m.youtube.com/shorts/VIDEO_ID`
- Shows a transcript sidebar on normal video pages
- Shows transcripts on YouTube Shorts when YouTube exposes transcript data through the fallback paths
- Detects caption tracks and languages when YouTube exposes them
- Falls back to YouTube's native transcript rows when direct caption loading is not available
- Renders timestamped transcript rows
- Lets timestamps jump the YouTube video
- Supports transcript search, copy, TXT export, and Markdown export
- Updates when YouTube changes videos without a full refresh (SPA navigation fix applied)
- Avoids duplicate sidebars
- Uses YouTube's live global `window.ytInitialPlayerResponse` and fallback fetch paths for reliable availability checks
- Clears stale rows immediately upon navigation
- Includes a simple popup

## How To Load It In Chrome

1. Open Chrome.
2. Go to `chrome://extensions`.
3. Turn on **Developer mode**.
4. Click **Load unpacked**.
5. Select this project folder: `youtube-transcript-extension`.
6. Open a YouTube video page or YouTube Short.

You should see a sidebar titled `YouTube Transcript Helper`.

## Debug Mode

If you are experiencing issues with the transcript loading, you can enable debug mode to see detailed logs in your browser's DevTools console.

To enable debug mode, open your browser's DevTools console (F12) and run:
```javascript
localStorage.setItem("ytTranscriptHelperDebug", "true")
```
Then refresh the page. Look for logs starting with `[YT Transcript Helper]`.

To disable debug mode, run:
```javascript
localStorage.removeItem("ytTranscriptHelperDebug")
```

## How To Test The Helper Code

Run this in the VS Code terminal to execute only the extension's test suite:

```bash
node --test tests/*.test.cjs
```

This checks URL detection, navigation decisions, transcript parsing, formatting, and export helpers.
