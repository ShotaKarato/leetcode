const longestConsecutive = (nums: number[]): number => {
  const set = new Set(nums);
  let result = 0;
  for (const elm of set) {
    // check if it's the starting elm
    if (!set.has(elm - 1)) {
      let length = 0;
      while (set.has(elm + length)) {
        length += 1;
      }
      result = Math.max(result, length);
    }
  }
  return result;
};
