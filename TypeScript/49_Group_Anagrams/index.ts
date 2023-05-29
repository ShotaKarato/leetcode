const groupAnagrams = (strs: string[]): string[][] => {
  const map: Record<string, string[]> = {};
  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    const key = count.toString();
    if (map[key]) {
      map[key] = [...map[key], str];
    } else {
      map[key] = [str];
    }
  }
  return Array.from(Object.values(map));
};
