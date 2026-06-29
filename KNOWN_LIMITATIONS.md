# Known Limitations

ScribeDock depends on transcript and caption data that YouTube exposes to the browser. Some limitations come from that dependency.

## Transcript Availability

- Some videos do not expose captions or transcript data, even when the video itself is playable.
- When transcript data is unavailable, ScribeDock shows a clear unavailable state instead of generating a transcript.
- ScribeDock 1.0.0 does not perform audio transcription.

## YouTube Page Changes

- YouTube can change page markup, internal player data, or transcript endpoints without notice.
- ScribeDock includes fallback paths for common YouTube transcript sources, but future YouTube changes may require updates.
- Single-page navigation on YouTube can delay fresh transcript data; ScribeDock clears stale rows and retries the current page state when possible.

## Privacy Boundaries

- ScribeDock does not send transcripts to a ScribeDock server.
- Exported transcript files are created locally through the browser.
- Future features that require external services should be opt-in and documented before release.
