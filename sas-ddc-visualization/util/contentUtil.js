var va = va || {};
va.contentUtil = (function() {
  return {
    setupResizeListeners: function(callback) {
      window.addEventListener('resize', callback);
    },
    validateRoles: function(resultData, expectedTypes) {
      if (!resultData || !resultData.columns) return false;

      if (resultData.columns.length < expectedTypes.length) return false;

      for (let i = 0; i < expectedTypes.length; i++) {
        if (resultData.columns[i].type !== expectedTypes[i]) return false;
      }

      return true;
    }
  };
})();
