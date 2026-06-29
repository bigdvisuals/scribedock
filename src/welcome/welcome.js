(() => {
  'use strict';

  const SUPPORT_URL = 'https://ko-fi.com/scribedock';
  const FEEDBACK_URL = 'https://forms.gle/i1tobcHWFWc3Bixt5';
  const SAMPLE_VIDEO_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  const sidePanelButton = document.getElementById('btn-open-side-panel');
  const sampleVideoLink = document.getElementById('btn-try-sample-video');
  const sidePanelStatus = document.getElementById('side-panel-status');
  const supportLinks = Array.from(document.querySelectorAll('[data-support-link]'));
  const feedbackLinks = Array.from(document.querySelectorAll('[data-feedback-link]'));

  function prepareExternalLink(link, url) {
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  supportLinks.forEach((link) => prepareExternalLink(link, SUPPORT_URL));
  feedbackLinks.forEach((link) => prepareExternalLink(link, FEEDBACK_URL));

  function setSidePanelStatus(message, isError = false) {
    if (!sidePanelStatus) {
      return;
    }

    sidePanelStatus.textContent = message;
    sidePanelStatus.classList.toggle('is-error', isError);
  }

  function getCurrentWindowId() {
    return new Promise((resolve, reject) => {
      if (
        typeof chrome === 'undefined' ||
        !chrome.tabs ||
        typeof chrome.tabs.getCurrent !== 'function'
      ) {
        reject(new Error('Chrome tab information is unavailable.'));
        return;
      }

      chrome.tabs.getCurrent((tab) => {
        const lastError = chrome.runtime && chrome.runtime.lastError;

        if (lastError) {
          reject(new Error(lastError.message || 'Chrome could not read this tab.'));
          return;
        }

        if (!tab || !Number.isInteger(tab.windowId)) {
          reject(new Error('Chrome could not identify the current window.'));
          return;
        }

        resolve(tab.windowId);
      });
    });
  }

  async function requestSidePanelOpen(successMessage) {
    if (
      typeof chrome === 'undefined' ||
      !chrome.sidePanel ||
      typeof chrome.sidePanel.open !== 'function'
    ) {
      setSidePanelStatus('Click the ScribeDock extension icon to open the side panel.', true);
      return;
    }

    const windowId = await getCurrentWindowId();
    await chrome.sidePanel.open({ windowId });
    setSidePanelStatus(successMessage || 'ScribeDock side panel opened.');
  }

  function openUrlInNewTab(url) {
    return new Promise((resolve, reject) => {
      if (
        typeof chrome !== 'undefined' &&
        chrome.tabs &&
        typeof chrome.tabs.create === 'function'
      ) {
        chrome.tabs.create({ url, active: true }, () => {
          const lastError = chrome.runtime && chrome.runtime.lastError;

          if (lastError) {
            reject(new Error(lastError.message || 'Chrome could not open the tab.'));
            return;
          }

          resolve();
        });
        return;
      }

      window.open(url, '_blank', 'noopener');
      resolve();
    });
  }

  async function openSidePanelFromWelcome() {
    sidePanelButton.disabled = true;
    setSidePanelStatus('Opening the side panel...');

    try {
      await requestSidePanelOpen('ScribeDock side panel opened.');
    } catch (error) {
      setSidePanelStatus('Click the ScribeDock extension icon to open the side panel.', true);
    } finally {
      sidePanelButton.disabled = false;
    }
  }

  async function trySampleVideoWithSidePanel(event) {
    event.preventDefault();
    sampleVideoLink.setAttribute('aria-disabled', 'true');
    setSidePanelStatus('Opening ScribeDock and the sample video...');

    try {
      await requestSidePanelOpen('ScribeDock is open. Loading the sample video...');
    } catch (error) {
      setSidePanelStatus('Sample video opened. Click the ScribeDock extension icon if the side panel did not open.', true);
    } finally {
      try {
        await openUrlInNewTab(SAMPLE_VIDEO_URL);
      } catch (error) {
        setSidePanelStatus('Could not open the sample video. Try the YouTube link again.', true);
      }

      sampleVideoLink.removeAttribute('aria-disabled');
    }
  }

  if (sidePanelButton) {
    sidePanelButton.addEventListener('click', openSidePanelFromWelcome);
  }

  if (sampleVideoLink) {
    sampleVideoLink.addEventListener('click', trySampleVideoWithSidePanel);
  }
})();
