// initial answer
// const search = (nums: number[], target: number): number => {
//   let head = 0;
//   let tail = nums.length - 1;
//   while (head <= tail) {
//     if (nums[head] === target) return head;
//     if (nums[tail] === target) return tail;
//     head++;
//     tail--;
//   }
//   return -1;
// };

const search = (nums: number[], target: number): number => {
  // find boundary
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  const start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  // regular binary search
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};
