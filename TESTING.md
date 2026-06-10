# Testing Guide

This document outlines the manual testing steps to verify that the ScribeDock extension is functioning correctly in your browser.

## Manual Testing Steps

1. **Initial Load Test:**
   - Open YouTube in Chrome and navigate to a video (e.g. `https://www.youtube.com/watch?v=jGhobd9nGoU`).
   - Verify that the extension panel appears on the side.
   - Verify that the status says "Transcript available".
   - Verify that the transcript rows render properly.

2. **Shorts Load Test:**
   - Open a YouTube Short URL, for example `https://www.youtube.com/shorts/VIDEO_ID`.
   - Also try the mobile version if that is the link you have: `https://m.youtube.com/shorts/VIDEO_ID`.
   - Verify that the extension panel appears on the side.
   - Verify that the video ID shown in the panel matches the Short URL.
   - If captions are available for that Short, verify that transcript rows render properly.

3. **SPA Navigation Test (Click-between-videos):**
   - While on a video page with the transcript loaded, find a related video in the right sidebar.
   - Click the related video to navigate to it WITHOUT refreshing the page.
   - Verify that the old transcript rows are cleared immediately.
   - Verify that the new video's transcript rows load and render properly.
   - Verify that the transcript doesn't get blocked or rejected due to stale tokens.

4. **Fallback Fetch Test:**
   - On a YouTube video page, turn on debug mode (see below).
   - Reload the page.
   - Verify in the console that it tries `window.ytInitialPlayerResponse` and falls back correctly.
   - Alternatively, navigate between videos and verify that the correct caption track URLs are generated.

5. **Native Transcript Fallback Test:**
   - Find a video that doesn't have a timedtext XML/JSON3 transcript format but does have a native transcript.
   - Wait 8 seconds for the extension to try to fetch the timedtext transcript.
   - The extension should automatically click "Show transcript" on the YouTube UI, scrape the rows, and display them in the extension panel.

6. **Actions Testing:**
   - Click on a transcript timestamp and verify the video jumps to that time.
   - Type in the search bar and verify the transcript rows filter immediately.
   - Click "Copy" and verify the transcript text is copied to your clipboard.
   - Click "TXT" and verify a `.txt` file downloads containing the transcript.
   - Click "Markdown" and verify a `.md` file downloads.

## Automated Testing

To run the automated unit tests for the extension's utilities, open a terminal in the root of the extension folder and run:

```bash
node --test tests/*.test.cjs
```
This ensures that all transcript parsing, URL detection, navigation, and exporting logic works as expected.
