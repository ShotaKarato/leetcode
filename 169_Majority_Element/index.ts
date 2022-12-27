const majorityElement = (nums: number[]): number => {
  const table: Record<number, number> = {};
  nums.forEach((num) => {
    if (table[num]) {
      table[num]++;
    } else {
      table[num] = 1;
    }
  });
  for (let key in table) {
    if (table[key] > nums.length / 2) return Number(key);
  }
};
