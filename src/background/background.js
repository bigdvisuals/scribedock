const WELCOME_PAGE_PATH = 'src/welcome/welcome.html';
const UNINSTALL_FEEDBACK_URL = 'https://scribedock.notion.site/Help-improve-ScribeDock-33d3877c21e6486fac09d759a163cbc6?pvs=74';

chrome.runtime.onInstalled.addListener((details) => {
  chrome.runtime.setUninstallURL(UNINSTALL_FEEDBACK_URL).catch((error) => {
    console.warn('Failed to set uninstall feedback URL:', error);
  });

  if (details.reason !== 'install') {
    return;
  }

  chrome.tabs.create({
    url: chrome.runtime.getURL(WELCOME_PAGE_PATH)
  });
});

chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true }).catch((error) => console.error(error));
