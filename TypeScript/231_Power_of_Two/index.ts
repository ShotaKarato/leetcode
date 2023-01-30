const isPowerOfTwo = (n: number, base = 1): boolean => {
  if (n === 1 || n === base) return true;
  if (n !== base && n < base) return false;
  return isPowerOfTwo(n, base * 2);
};
