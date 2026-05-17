const assert = require("node:assert/strict");
const test = require("node:test");

const runtimeMessage = require("../src/utils/runtime-message.js");

test("reports false when the extension runtime is unavailable", async () => {
  const sent = await runtimeMessage.sendRuntimeMessageSafely({}, { type: "PING" });

  assert.equal(sent, false);
});

test("catches rejected runtime messages", async () => {
  const root = {
    chrome: {
      runtime: {
        id: "extension-id",
        sendMessage() {
          return Promise.reject(new Error("Extension context invalidated."));
        }
      }
    }
  };

  const sent = await runtimeMessage.sendRuntimeMessageSafely(root, { type: "PING" });

  assert.equal(sent, false);
});

test("reports true when runtime message sends successfully", async () => {
  const root = {
    chrome: {
      runtime: {
        id: "extension-id",
        sendMessage() {
          return Promise.resolve();
        }
      }
    }
  };

  const sent = await runtimeMessage.sendRuntimeMessageSafely(root, { type: "PING" });

  assert.equal(sent, true);
});
