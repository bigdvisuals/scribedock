(function attachRuntimeMessageHelpers(root) {
  "use strict";

  function sendRuntimeMessageSafely(rootValue, message) {
    try {
      var chromeApi = rootValue && rootValue.chrome;
      var runtime = chromeApi && chromeApi.runtime;

      if (
        !runtime ||
        !runtime.id ||
        typeof runtime.sendMessage !== "function"
      ) {
        return Promise.resolve(false);
      }

      var sendResult = runtime.sendMessage(message);

      if (sendResult && typeof sendResult.then === "function") {
        return sendResult.then(
          function handleSuccess() {
            return true;
          },
          function handleFailure() {
            return false;
          },
        );
      }

      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false);
    }
  }

  var api = {
    sendRuntimeMessageSafely: sendRuntimeMessageSafely
  };

  root.YTTranscriptRuntimeMessage = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : window);
