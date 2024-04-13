export const removeDuplicates = (nums: number[]): number => {
  let output = 1;
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const prev = nums[i - 1];
    if (curr !== prev) {
      nums[output] = curr;
      output++;
    }
  }
  return output;
};
