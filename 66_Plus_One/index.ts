const plusOne = (digits: number[]): number[] => {
  let output = [...digits];
  for (let i = output.length - 1; i >= 0; i--) {
    if (output[i] === 9) {
      output[i] = 0;
    } else {
      output[i] = output[i] + 1;
      break;
    }
  }
  if (output.every((elm) => elm === 0)) {
    output.unshift(1);
  }
  return output;
};
