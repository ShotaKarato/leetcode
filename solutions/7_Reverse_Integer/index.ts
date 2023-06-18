const reverse = (x: number): number => {
  // range
  const min = -Math.pow(2, 31); // -2147483648
  const max = Math.pow(2, 31) - 1; // 2147483647

  let output = 0;
  while (x) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    if (
      output > Math.trunc(max / 10) ||
      (output === Math.trunc(max / 10) && digit >= max % 10)
    ) {
      return 0;
    }
    if (
      output < Math.trunc(min / 10) ||
      (output === Math.trunc(min / 10) && digit <= min % 10)
    ) {
      return 0;
    }

    output = output * 10 + digit;
  }

  return output;
};
