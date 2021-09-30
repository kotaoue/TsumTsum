function main() {
  const levelTables = getLevelTables();
  const tsumList = getTsumList();

  for (i in tsumList) {
    const v = tsumList[i];
    const level = v[2];
    const percent = v[3];
    const type = v[1];
    const tsumCount = calcTsumCount(level, percent, levelTables[type]);
    const row = parseInt(i) + 2;

    setTsumCount(row, tsumCount);
  }
}

function calcTsumCount(level, percent, levelTable) {
  let c = 0;

  for (let i = 0; i < level; i++) {
    c += levelTable[i];
  }

  if (percent > 0) {
    const count = levelTable[level];
    c += Math.ceil((count * percent) / 100);
  }
  return c;
}

function setTsumCount(row, count) {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName('常設').getRange(row, 6).setValue(count);
}

function getTsumList() {
  const r = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('常設').getRange('B:E').getValues();
  r.shift();
  return r;
}

function getLevelTables() {
  const s = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ツム数');
  const vs = s.getRange('A:G').getValues();
  vs.shift();

  const r = {};
  for (i in vs) {
    const v = vs[i];
    r[v[0]] = [v[1], v[2], v[3], v[4], v[5], v[6]];
  }
  return r;
}