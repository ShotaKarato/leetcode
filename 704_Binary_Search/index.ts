const search = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const center = Math.ceil((left + right) / 2);
    if (target === nums[center]) {
      return center;
    } else if (target < nums[center]) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }
  return -1;
};
