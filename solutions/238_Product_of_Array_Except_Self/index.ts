// initial answer
// const productExceptSelf = (nums: number[]): number[] => {
//   const output: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let product = 1;
//     for (let p = 0; p < nums.length; p++) {
//       if (i === p) continue;
//       product *= nums[p];
//     }
//     output.push(product);
//   }
//   return output;
// };

const productExceptSelf = (nums: number[]): number[] => {
  const output = new Array(nums.length).fill(1);
  let product = 1;
  // pre
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      output[i] = product;
    } else {
      product *= nums[i - 1];
      output[i] = product;
    }
  }
  product = 1;
  // post
  for (let p = nums.length - 1; p >= 0; p--) {
    if (p === nums.length - 1) {
      output[p] = output[p] * product;
    } else {
      product *= nums[p + 1];
      output[p] = output[p] * product;
    }
  }
  return output;
};
