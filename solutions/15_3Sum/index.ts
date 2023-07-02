const threeSum = (nums: number[]): number[][] => {
  const output: number[][] = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        output.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        while (sortedNums[left] === sortedNums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return output;
};
