export const containsDuplicate = (nums: number[]): boolean => {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map.has(curr)) {
      return true;
    }
    map.set(curr, i);
  }
  return false;
};
