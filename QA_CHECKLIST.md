# Manual QA Checklist

Use this checklist on real YouTube pages after loading the unpacked extension from this project folder.

## Setup

- [ ] Reload the extension at `chrome://extensions`.
- [ ] Open the side panel with the extension action.
- [ ] Confirm the panel says it works only on YouTube when a non-YouTube tab is active.

## Transcript Loading

- [ ] Manual captions: open a video with creator-provided captions and confirm rows load with timestamps.
- [ ] Auto-generated captions: open a video with auto captions and confirm rows load.
- [ ] No captions: open a video without captions and confirm the message says YouTube does not expose captions.
- [ ] Non-English captions: choose a non-English language and confirm rows match that language.
- [ ] Translated English captions: choose an English translated track and confirm it does not fall back to original-language native rows.
- [ ] Shorts with captions: open a Short with captions and confirm rows load.
- [ ] Shorts without captions: open a Short without captions and confirm a clear no-transcript state.
- [ ] Live stream replay: open a replay with captions and confirm transcript loading or an honest unavailable state.
- [ ] Unavailable/private/deleted video: open a known unavailable video URL and confirm the panel does not blame the user.

## YouTube Navigation

- [ ] SPA navigation without page refresh: move from one video to another and confirm old rows clear while the new video loads.
- [ ] Playlist page: open a playlist, scan it, and confirm available transcripts and skipped videos are counted.
- [ ] Channel Videos tab: open a channel Videos tab, scan visible videos, and confirm only visible videos are included.
- [ ] Channel Shorts tab: open a channel Shorts tab, scan visible Shorts, and confirm only visible Shorts are included.
- [ ] Extension reload: reload the extension while YouTube is open, then reopen the panel and confirm loading still works.

## Export

- [ ] TXT export: download TXT from a loaded transcript and confirm title, URL, timestamps, and text are present.
- [ ] Markdown export: download Markdown and confirm it has a title, URL, and timestamped bullet rows.
- [ ] JSON export: download JSON data and confirm metadata plus `rows` are present.
- [ ] ZIP export: download channel and playlist ZIPs and confirm transcript files, `manifest.json`, and failed-video reports are included.

## Stress And Network

- [ ] Huge transcript: open a long video and confirm search, scrolling, and export still work.
- [ ] Slow internet: throttle the network in DevTools and confirm loading, timeout, or retry states are clear.
- [ ] Retry: use the Retry button after a failed load and confirm the panel attempts the current video again.
