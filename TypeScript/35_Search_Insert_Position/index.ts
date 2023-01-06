const searchInsert = (nums: number[], target: number): number => {
  if (target < nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((right + left) / 2);
    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return left;
};
