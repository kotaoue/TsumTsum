function backup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("履歴");
  const row = sheet.getLastRow() + 1;

  const backupValues = getBackupValues(row);

  sheet.getRange(row, 1, 1, 12).setValues(backupValues);

  setTableAppearance(sheet);
  createFilterByName(sheet);
}

function getBackupValues(row) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("常設");

  const r = [
    [
      Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd'),
      sheet.getRange('K2').getValue(),
      sheet.getRange('L2').getValue(),
      sheet.getRange('M2').getValue(),
      sheet.getRange('N2').getValue(),
      sheet.getRange('O2').getValue(),
      `=max(B${row}-B${row - 1}, 0)`,
      `=max((B${row}-B${row - 1})+((E${row - 1}-E${row})*30000), 0)`,
      `=sum(G$2:G${row})`,
      row - 1,
      `=ROUND(I${row}/${row})`,
      `=C${row}/(C${row}+E${row})`,
    ]
  ];

  return r;
}
