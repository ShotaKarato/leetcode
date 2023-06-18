const generate = (numRows: number): number[][] => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  const output = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    const row: number[] = [];
    for (let p = 0; p < i - 1; p++) {
      row.push(output[i - 1][p] + output[i - 1][p + 1]);
    }
    row.unshift(1);
    row.push(1);
    output.push(row);
  }

  return output;
};
