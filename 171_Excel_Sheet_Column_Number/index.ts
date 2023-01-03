const titleToNumber = (columnTitle: string): number => {
  const digits = columnTitle.split("").reverse();
  const charToNum = (char: string) => char.charCodeAt(0) - 64;
  let output: number = 0;
  digits.forEach((digit, index) => {
    if (index === 0) {
      output += charToNum(digit);
    } else {
      const base = Math.pow(26, index);
      output += base * charToNum(digit);
    }
  });
  return output;
};
