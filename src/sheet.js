function setTableAppearance(sheet) {
  const b = sheet.getBandings();
  for (key in b) {
    b[key].remove();
  }
  sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).applyRowBanding(SpreadsheetApp.BandingTheme.BLUE);
}

function createFilterByName(sheet, row = 1) {
  const filter = sheet.getFilter();
  if (filter) {
    filter.remove();
  }

  sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).createFilter().sort(row, true);
}