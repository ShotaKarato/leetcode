export const numJewelsInStones = (jewels: string, stones: string): number => {
  // create map
  const jewelMap: {
    [K: string]: number;
  } = {};
  for (let i = 0; i < jewels.length; i++) {
    const curr = jewels[i];
    if (!jewelMap[curr]) {
      jewelMap[curr] = 1;
    }
  }
  let sum = 0;
  for (let i = 0; i < stones.length; i++) {
    const curr = stones[i];
    if (jewelMap[curr]) {
      sum += 1;
    }
  }
  return sum;
};
