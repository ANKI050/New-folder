var va = va || {};
va.messagingUtil = (function() {
  var _callback;

  window.addEventListener("message", function(event) {
    if (event && event.data) {
      if (_callback) {
        _callback(event.data);
      }
    }
  });

  return {
    setOnDataReceivedCallback: function(callback) {
      _callback = callback;
    },
    postSelectionMessage: function(resultName, selectedRows) {
      this.postMessage({
        resultName: resultName,
        selections: selectedRows
      });
    },
    postInstructionalMessage: function(resultName, strMessage) {
      this.postMessage({
        resultName: resultName,
        message: strMessage
      });
    },
    postMessage: function(objMessage) {
      window.parent.postMessage(objMessage, "*");
    }
  };
})();
