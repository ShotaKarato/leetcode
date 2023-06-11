// initial answer
const productExceptSelf = (nums: number[]): number[] => {
  const output: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let p = 0; p < nums.length; p++) {
      if (i === p) continue;
      product *= nums[p];
    }
    output.push(product);
  }
  return output;
};
