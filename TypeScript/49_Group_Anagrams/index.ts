const groupAnagrams = (strs: string[]): string[][] => {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));
  const map: Record<string, number[]> = {};
  for (let i = 0; i < sortedStrs.length; i++) {
    const curr = sortedStrs[i];
    if (map[curr]) {
      map[curr] = [...map[curr], i];
    } else {
      map[curr] = [i];
    }
  }
  const output: string[][] = [];
  for (const key in map) {
    const group: string[] = [];
    for (const index of map[key]) {
      group.push(strs[index]);
    }
    output.push(group);
  }

  return output;
};
