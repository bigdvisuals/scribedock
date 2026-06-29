# Manual QA Checklist

Use this checklist before packaging or publishing ScribeDock. These checks require real YouTube pages because transcript availability depends on YouTube data.

## Setup

- [ ] Remove and load the extension fresh, then confirm the welcome guide opens once.
- [ ] Reload or update the extension, then confirm the welcome guide does not reopen.
- [ ] On the welcome guide, click `Open YouTube`, `How it works`, `Support ScribeDock`, and `Leave feedback`.
- [ ] On the welcome guide, click `Open Side Panel` and confirm the side panel opens or a clear fallback message appears.
- [ ] Reload the extension at `chrome://extensions`.
- [ ] Open ScribeDock from the extension action.
- [ ] Confirm a non-YouTube tab shows the unsupported-page state.

## Transcript Loading

- [ ] Manual captions: rows load with timestamps.
- [ ] Auto-generated captions: rows load with timestamps.
- [ ] No captions: the panel shows a clear unavailable state.
- [ ] Non-English captions: selected rows match the chosen language.
- [ ] Translated captions: translated rows do not fall back to the original-language native transcript.
- [ ] Shorts with captions: rows load correctly.
- [ ] Shorts without captions: the panel shows a clear unavailable state.
- [ ] Live stream replay: transcript loading works or fails with a clear message.
- [ ] Unavailable, private, or deleted video: the panel does not blame the user.

## YouTube Navigation

- [ ] Moving between videos without a refresh clears old rows before loading the next transcript.
- [ ] Playlist page scan counts available transcripts and skipped videos.
- [ ] Channel Videos tab scan includes only visible videos.
- [ ] Channel Shorts tab scan includes only visible Shorts.
- [ ] Reloading the extension while YouTube is open still allows the panel to recover.

## Export

- [ ] TXT export includes title, URL, timestamps, and transcript text.
- [ ] Markdown export includes title, URL, and timestamped rows.
- [ ] JSON export includes metadata and `rows`.
- [ ] Channel and playlist ZIP exports include transcript files, `manifest.json`, and failed-video reports.
- [ ] After 2 successful downloads, the one-time support/feedback nudge appears and can be dismissed.

## Stress And Network

- [ ] Long transcript: search, scrolling, and export remain usable.
- [ ] Slow network: loading, timeout, and retry states are clear.
- [ ] Retry action attempts the current video again after a failed load.
