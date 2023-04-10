const map: Record<string, string[]> = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const letterCombinations = (digits: string): string[] => {
  if (digits.length === 0) return [];
  const output: string[] = [];
  const backtrack = (i: number, currStr: string) => {
    if (currStr.length === digits.length) {
      output.push(currStr);
      return;
    }

    for (const c of map[digits[i]]) {
      backtrack(i + 1, currStr + c);
    }
  };
  backtrack(0, "");
  return output;
};
