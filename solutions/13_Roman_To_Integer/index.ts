type Symbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";
type Table = Record<Symbol, number>;
// type Table = {
//   [K in Symbol]: number;
// };

const romanToInt = (s: string): number => {
  let output: number = 0;
  const table: Table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const curr = s[i] as Symbol;
    const next = s[i + 1] as Symbol;
    if (table[curr] < table[next]) {
      output += table[next] - table[curr];
      i++;
    } else {
      output += table[curr];
    }
  }
  return output;
};

export {};
