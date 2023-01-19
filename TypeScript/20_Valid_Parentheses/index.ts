const openingBrackets = ["(", "[", "{"] as const;
const closingBrackets = [")", "]", "}"] as const;
type OpeningBrackets = (typeof openingBrackets)[number];
type ClosingBrackets = (typeof closingBrackets)[number];

const isOpeningBracket = (char: string): char is OpeningBrackets =>
  openingBrackets.some((brackets) => brackets === char) ? true : false;

const isValid = (s: string): boolean => {
  const table: Record<OpeningBrackets, ClosingBrackets> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const heap: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (isOpeningBracket(curr)) {
      // opening bracket
      curr;
      heap.push(table[curr]);
    } else {
      // closing bracket
      const lastElm = heap.pop();
      if (curr !== lastElm) {
        return false;
      }
    }
  }
  return heap.length > 0 ? false : true;
};
