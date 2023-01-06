const mySqrt = (x: number): number => {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let left = 1;
  let right = x;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const squared = mid * mid;

    if (squared === x) {
      return mid;
    } else if (squared > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};
