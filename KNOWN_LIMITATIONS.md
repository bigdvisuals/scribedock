# Known Limitations

ScribeDock has a few known limitations based on how YouTube manages transcripts and captions:

- **Depends on Retrievable YouTube Data:** The extension works when YouTube transcript or caption data can be retrieved from the page, caption endpoints, native transcript panel, or fallback player data.
- **Missing Data on Some Videos:** Some videos still may not expose transcript data, even when they appear playable on YouTube. In these cases, the extension will display "No transcript available for this video".
- **No Audio Transcription Yet:** True no-caption videos need future audio transcription support. This version does not include AI-based audio transcription, backend server processing, or audio-to-text generation.
- **YouTube Internal Data Changes:** The extension relies on internal YouTube page structures, global variables like `window.ytInitialPlayerResponse`, native transcript rows, and specific fallback endpoints. If YouTube changes those internal paths, detection or parsing logic may need to be updated.
- **SPA Navigation Quirks:** Single-Page App (SPA) navigation on YouTube can sometimes limit the availability of fresh transcript data directly in the page HTML, requiring the extension to perform additional fetch requests or global variable checks. This is handled by the current version, but any further changes by YouTube could re-introduce race conditions.
