export function getColumnName(index) {
  let columnName = '';
  let dividend = index + 1;
  let remainder;

  while (dividend > 0) {
    remainder = (dividend - 1) % 26;
    columnName =
      String.fromCharCode('A'.charCodeAt(0) + remainder) + columnName;
    dividend = parseInt((dividend - remainder) / 26, 10);
  }

  return columnName;
}
