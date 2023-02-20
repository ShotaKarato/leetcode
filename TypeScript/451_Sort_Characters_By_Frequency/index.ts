export const frequencySort = (s: string): string => {
  const map: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (map[curr]) {
      map[curr] += 1;
      continue;
    }
    map[curr] = 1;
  }

  let arr: { val: number; char: string }[] = [];
  for (const [key, value] of Object.entries(map)) {
    arr.push({ val: value, char: key });
  }
  arr = arr.sort((a, b) => b.val - a.val);

  let output = "";
  for (const { char, val } of arr) {
    output += char.repeat(val);
  }

  return output;
};
