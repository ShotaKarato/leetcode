const maxSubArray = (nums: number[]): number => {
  let currStreak = nums[0];
  let gloStreak = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const total = nums[i] + currStreak;
    if (curr > total) {
      currStreak = curr;
    } else {
      currStreak = total;
    }
    if (currStreak > gloStreak) {
      gloStreak = currStreak;
    }
  }
  return gloStreak;
};
