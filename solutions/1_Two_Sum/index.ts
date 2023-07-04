export const twoSum = (nums: number[], target: number): number[] => {
  const table: Map<number, number> = new Map();
  let output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = table.get(target - curr);
    if (diff !== undefined) {
      output = [i, diff];
      break;
    } else {
      table.set(curr, i);
    }
  }
  return output;
};
