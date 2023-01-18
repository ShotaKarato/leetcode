type Table = {
  [key: number]: number;
};

const twoSum = (nums: number[], target: number): number[] => {
  const table: Table = {};
  const output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = target - curr;
    // (!table[diff]) evaluates the case in which table[diff] is 0 to be true
    // hence explicitly checking if value is 0
    if (table[diff] || table[diff] === 0) {
      output.push(i);
      output.push(table[diff]);
    } else {
      table[curr] = i;
    }
  }
  return output;
};

export {};
