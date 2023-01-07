const twoSum = (numbers: number[], target: number): number[] => {
  const indexMap: { [key: number]: number } = {};
  const output: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    const diff = target - curr;
    if (indexMap[diff] !== undefined) {
      output.push(indexMap[diff] + 1, i + 1);
    } else {
      indexMap[curr] = i;
    }
  }
  return output;
};
