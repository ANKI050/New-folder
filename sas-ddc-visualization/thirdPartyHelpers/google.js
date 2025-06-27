var va = va || {};
va.googleHelper = (function() {
  return {
    createDataTable: function(resultData) {
      const dataTable = new google.visualization.DataTable();

      resultData.columns.forEach(col => {
        dataTable.addColumn(col.type, col.label);
      });

      dataTable.addRows(resultData.data);
      return dataTable;
    },
    formatData: function(dataTable, resultData) {
      resultData.columns.forEach((col, index) => {
        if (col.format && col.type === "number") {
          const formatter = new google.visualization.NumberFormat({ pattern: this.getPattern(col.format) });
          formatter.format(dataTable, index);
        }
      });
    },
    getPattern: function(format) {
      switch (format.toUpperCase()) {
        case "DOLLAR": return "$#,##0.00";
        case "COMMA": return "#,##0";
        case "PERCENT": return "0.00%";
        case "F":
        case "BEST": return "#,##0.00";
        default: return null;
      }
    }
  };
})();
