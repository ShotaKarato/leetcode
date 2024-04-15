export const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;

  let div = 1;
  while (x >= div * 10) {
    div *= 10;
  }

  while (x) {
    const left = x % 10;
    const right = Math.floor(x / div);

    if (left !== right) return false;

    x = Math.floor((x % div) / 10);
    div /= 100;
  }

  return true;
};
