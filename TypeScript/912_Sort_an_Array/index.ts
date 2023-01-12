// Initial answer
// const sortArray = (nums: number[]): number[] => {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     let minIndex = p1;
//     const temp = nums[p1];
//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       const curr = nums[p2];
//       if (!minIndex || curr < nums[minIndex]) {
//         minIndex = p2;
//       }
//     }
//     nums[p1] = nums[minIndex];
//     nums[minIndex] = temp;
//   }
//   return nums;
// };

const merge = (left: number[], right: number[]) => {
  const output: number[] = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      output.push(left[p1]);
      p1++;
    } else {
      output.push(right[p2]);
      p2++;
    }
  }

  while (p1 < left.length) {
    output.push(left[p1]);
    p1++;
  }

  while (p2 < right.length) {
    output.push(right[p2]);
    p2++;
  }

  return output;
};

const sortArray = (nums: number[]): number[] => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));
  return merge(left, right);
};
