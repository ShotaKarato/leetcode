const topKFrequent = (nums: number[], k: number): number[] => {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map[curr] === undefined) {
      map[curr] = 1;
    } else {
      map[curr] += 1;
    }
  }

  const list: number[][] = new Array(nums.length);

  for (const [key, value] of Object.entries(map)) {
    list[value] ? list[value].push(Number(key)) : (list[value] = [Number(key)]);
  }

  return list.flat().slice(-k);
};
