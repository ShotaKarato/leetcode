const removeDuplicates = (nums: number[]): number => {
  let p1 = 0;
  for (let p2 = 1; p2 < nums.length; p2++) {
    const curr = nums[p2];
    if (curr !== nums[p1]) {
      nums[p1 + 1] = curr;
      p1++;
    }
  }
  return p1 + 1;
};
