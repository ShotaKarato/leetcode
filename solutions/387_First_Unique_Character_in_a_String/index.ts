export const firstUniqChar = (s: string): number => {
  const table: Record<string, number> = {};
  // create table
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr in table) {
      table[curr] += 1;
      continue;
    }
    table[curr] = 1;
  }
  // get first unique character
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (table[curr] === 1) return i;
  }

  return -1;
};
