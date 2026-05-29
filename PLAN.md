# YouTube Transcript Extension Beginner Plan

## Main Goal

Build a simple Chrome extension that adds a clean transcript panel to YouTube videos.

The first working milestone is intentionally small:

1. Load the extension in Chrome.
2. Run a content script on YouTube.
3. Detect normal YouTube video pages.
4. Get the current video ID.
5. Show a small sidebar that proves the extension is working.
6. Handle YouTube video changes without a full page refresh.

## Current MVP Scope

This version does **not** fetch transcripts yet.

Do not build these yet:

- AI summaries
- Flashcards
- Quizzes
- Accounts
- Payments
- Saved transcript history
- Full transcript export

## Tech Stack

- Chrome Extension Manifest V3
- Plain HTML
- Plain CSS
- Plain JavaScript
- No React
- No TypeScript
- No backend
- No database

## File Structure

```text
youtube-transcript-extension/
|-- manifest.json
|-- README.md
|-- PLAN.md
|-- package.json
|-- src/
|   |-- background/
|   |   `-- background.js
|   |-- content/
|   |   `-- content.js
|   |-- sidepanel/
|   |   |-- sidepanel.html
|   |   |-- sidepanel.js
|   |   `-- sidepanel.css
|   `-- utils/
|       |-- youtube.js
|       |-- transcript.js
|       |-- export.js
|       `-- format.js
|-- tests/
|   `-- youtube.test.cjs
`-- assets/
```

## Build Order

1. Confirm the extension loads in Chrome.
2. Confirm the content script runs on YouTube.
3. Confirm the sidebar appears only on video pages.
4. Confirm the sidebar updates when changing YouTube videos.
5. Then build transcript detection.
