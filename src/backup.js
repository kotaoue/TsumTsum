function backup() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("履歴");
  const row = sheet.getLastRow() + 1;

  const backupValues = getBackupValues(row, countSkillMax());

  sheet.getRange(row, 1, 1, 15).setValues(backupValues);

  setTableAppearance(sheet);
  createFilterByName(sheet);
}

function countSkillMax() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("常設");
  const values = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

  let count = 0;
  for (key in values) {
    console.log(values[key]);
    skill = values[key][3];
    console.log(skill);
    if (skill >= 6) {
      count++;
    }
  }

  return count;
}

function getBackupValues(row, skillmax) {
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
      `=sum(H$2:H${row})`,
      row - 1,
      `=ROUND(I${row}/K${row})`,
      `=ROUND(J${row}/K${row})`,
      skillmax,
      `=C${row}/(C${row}+E${row})`,
    ]
  ];

  return r;
}

