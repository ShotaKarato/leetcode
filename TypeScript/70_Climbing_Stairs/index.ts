// initial answer
const initialClimbStairs = (n: number): number => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return initialClimbStairs(n - 2) + initialClimbStairs(n - 1);
};

// refined
type TableType = {
  [p in number]: number;
};
function climbStairs(n: number): number {
  const dig = (num: number, table: TableType = {}) => {
    console.log(num, table);
    // does not count
    if (num < 0) return 0;
    // does count
    if (num === 0) return 1;
    // in table
    if (table[num]) return table[num];
    // not in table
    table[num] = dig(num - 2, table) + dig(num - 1, table);
    return table[num];
  };

  return dig(n);
}
