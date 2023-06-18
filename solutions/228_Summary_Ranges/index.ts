const summaryRanges = (nums: number[]): string[] => {
  const output: string[] = [];

  for (let i = 0; i < nums.length; i++) {
    let end = i;

    while (nums[end + 1] === nums[end] + 1) {
      end += 1;
    }

    if (end > i) {
      output.push(`${nums[i]}->${nums[end]}`);
    } else {
      output.push(`${nums[i]}`);
    }

    i = end;
  }

  return output;
};
