const sortedSquares = (nums: number[]): number[] => {
  const output: number[] = [];
  let head = 0;
  let tail = nums.length - 1;

  while (head <= tail) {
    const headSqr = nums[head] * nums[head];
    const tailSqr = nums[tail] * nums[tail];

    if (headSqr > tailSqr) {
      output.unshift(headSqr);
      head++;
    } else {
      output.unshift(tailSqr);
      tail--;
    }
  }

  return output;
};
