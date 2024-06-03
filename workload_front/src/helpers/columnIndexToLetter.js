export const columnIndexToLetter = index => {
  let letter = '';
  let temp;
  while (index >= 0) {
    temp = index % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    index = index / 26 - 1;
  }
  return letter;
};
