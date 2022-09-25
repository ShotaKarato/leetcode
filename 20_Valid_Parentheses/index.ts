function isValid(s: string): boolean {
  const table = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const heap: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    // opening bracket
    if (table[curr]) {
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
}
