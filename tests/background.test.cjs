const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const backgroundScript = fs.readFileSync(
  path.join(__dirname, "..", "src", "background", "background.js"),
  "utf8",
);

function loadBackgroundWithMockChrome() {
  const onInstalledListeners = [];
  const createdTabs = [];
  const panelBehaviorCalls = [];
  const caughtPanelErrors = [];
  const uninstallUrlCalls = [];
  const caughtUninstallErrors = [];
  const mockChrome = {
    runtime: {
      getURL: (extensionPath) => `chrome-extension://scribedock/${extensionPath}`,
      setUninstallURL: (url) => {
        uninstallUrlCalls.push(url);
        return {
          catch: (handler) => {
            caughtUninstallErrors.push(handler);
          }
        };
      },
      onInstalled: {
        addListener: (listener) => {
          onInstalledListeners.push(listener);
        }
      }
    },
    sidePanel: {
      setPanelBehavior: (options) => {
        panelBehaviorCalls.push(options);
        return {
          catch: (handler) => {
            caughtPanelErrors.push(handler);
          }
        };
      }
    },
    tabs: {
      create: (options) => {
        createdTabs.push(options);
      }
    }
  };

  vm.runInNewContext(backgroundScript, {
    chrome: mockChrome,
    console
  });

  return {
    onInstalledListeners,
    createdTabs,
    panelBehaviorCalls,
    caughtPanelErrors,
    uninstallUrlCalls,
    caughtUninstallErrors
  };
}

test("background opens the welcome page only on first install", () => {
  const {
    onInstalledListeners,
    createdTabs
  } = loadBackgroundWithMockChrome();

  assert.equal(onInstalledListeners.length, 1);

  onInstalledListeners[0]({ reason: "update" });
  onInstalledListeners[0]({ reason: "chrome_update" });
  assert.equal(createdTabs.length, 0);

  onInstalledListeners[0]({ reason: "install" });
  assert.equal(createdTabs.length, 1);
  assert.equal(createdTabs[0].url, "chrome-extension://scribedock/src/welcome/welcome.html");
});

test("background keeps the extension action wired to the side panel", () => {
  const {
    panelBehaviorCalls,
    caughtPanelErrors
  } = loadBackgroundWithMockChrome();

  assert.equal(panelBehaviorCalls.length, 1);
  assert.equal(panelBehaviorCalls[0].openPanelOnActionClick, true);
  assert.equal(caughtPanelErrors.length, 1);
});

test("background registers the uninstall feedback form", () => {
  const {
    onInstalledListeners,
    uninstallUrlCalls,
    caughtUninstallErrors
  } = loadBackgroundWithMockChrome();

  onInstalledListeners[0]({ reason: "install" });
  onInstalledListeners[0]({ reason: "update" });

  assert.deepEqual(uninstallUrlCalls, [
    "https://scribedock.notion.site/Help-improve-ScribeDock-33d3877c21e6486fac09d759a163cbc6?pvs=74",
    "https://scribedock.notion.site/Help-improve-ScribeDock-33d3877c21e6486fac09d759a163cbc6?pvs=74"
  ]);
  assert.equal(caughtUninstallErrors.length, 2);
});
