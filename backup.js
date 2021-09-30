function backup() {
  const backupValues = getBackupValues();

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("履歴");
  const row = sheet.getLastRow() + 1;

  sheet.getRange(row, 1, 1, 6).setValues(backupValues);

  setTableAppearance(sheet);
  createFilterByName(sheet);
}

function getBackupValues() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("常設");

  const r = [
    [
      Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd'),
      sheet.getRange('K2').getValue(),
      sheet.getRange('L2').getValue(),
      sheet.getRange('M2').getValue(),
      sheet.getRange('N2').getValue(),
      sheet.getRange('O2').getValue(),
    ]
  ];

  return r;
}
