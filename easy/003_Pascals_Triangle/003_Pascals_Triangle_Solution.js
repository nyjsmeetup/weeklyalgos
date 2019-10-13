const generatePascalsTriangle = n => {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    const nextRow = [];
    // put '1's in for the first 2 rows
    if (i <= 1) {
      for (let j = 0; j <= i; j += 1) {
        nextRow.push(1);
      }
      result.push(nextRow);
    } else {
      // append a 1 to the beginning of the row
      const prevRow = result[i - 1];
      nextRow.push(1);
      // sum the adjacent values of the previous row
      for (let k = 0; k < prevRow.length - 1; k += 1) {
        nextRow.push(prevRow[k] + prevRow[k + 1]);
      }
      // append a 1 to the end of the row
      nextRow.push(1);
      result.push(nextRow);
    }
  }
  return result;
};
