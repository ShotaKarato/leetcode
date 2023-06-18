const generateParenthesis = (n: number): string[] => {
  const output: string[] = [];

  const backtracking = (currStr = "", max = n, open = 0, close = 0) => {
    if (currStr.length === max * 2) {
      output.push(currStr);
      return;
    }

    if (open < max) {
      backtracking(currStr + "(", max, open + 1, close);
    }
    if (close < open) {
      backtracking(currStr + ")", max, open, close + 1);
    }
  };

  backtracking();
  return output;
};
