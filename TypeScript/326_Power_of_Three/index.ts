// Initial answer: keep dividing until it hits 1. Got pretty messy with all those if conditions

// const isPowerOfThree = (n: number): boolean => {
//     if (n <= 0) return false;
//     if (n === 1) return true;
//     if ((n % 3) !== 0) return false;
//     if ((n / 3) === 1) return true;
//     return isPowerOfThree(n / 3);
// };

// Second answer: keep multiplying 3 until it hits n
const isPowerOfThree = (n: number, base: number = 1): boolean => {
  if (n === 1 || n === base) return true;
  if (n !== base && n < base) return false;
  return isPowerOfThree(n, base * 3);
};
