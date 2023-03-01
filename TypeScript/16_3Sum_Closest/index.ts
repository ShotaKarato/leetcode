const sum = (nums: number[]) => nums.reduce((total, val) => (total += val), 0);

// There is absolutely no reason you should do this with selection sort lol
const selectionSort = (nums: number[]) => {
  const output = [...nums];
  for (let i = 0; i < output.length; i++) {
    let minIndex = i;
    for (let p = i + 1; p < output.length; p++) {
      minIndex = output[minIndex] > output[p] ? p : minIndex;
    }
    if (minIndex !== i) {
      const temp = output[i];
      output[i] = output[minIndex];
      output[minIndex] = temp;
    }
  }
  return output;
};

export const threeSumClosest = (nums: number[], target: number): number => {
  if (nums.length === 3) return sum(nums);
  const sortedNums = selectionSort(nums);
  // const sortedNums = nums.sort((a, b) => a - b);
  let result =
    sortedNums[0] + sortedNums[1] + sortedNums[sortedNums.length - 1];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let start = i + 1;
    let end = sortedNums.length - 1;

    while (start < end) {
      const currentSum = sortedNums[i] + sortedNums[start] + sortedNums[end];
      if (currentSum > target) {
        end -= 1;
      } else {
        start += 1;
      }

      if (Math.abs(currentSum - target) < Math.abs(result - target)) {
        result = currentSum;
      }
    }
  }

  return result;
};
