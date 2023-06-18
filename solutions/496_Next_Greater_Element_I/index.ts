/* Initial Answer
 * export const nextGreaterElement = (
 *   nums1: number[],
 *   nums2: number[]
 * ): number[] => {
 *   const map: Record<number, number> = {};
 *   for (let i = 0; i < nums2.length; i++) {
 *     const curr = nums2[i];
 *     let firstBiggerElm: number;
 *     for (let p = i + 1; p < nums2.length; p++) {
 *       if (curr < nums2[p]) {
 *         firstBiggerElm = nums2[p];
 *         break;
 *       }
 *     }
 *     map[curr] = firstBiggerElm ?? -1;
 *   }
 *   const output: number[] = [];
 *   for (let i = 0; i < nums1.length; i++) {
 *     const curr = nums1[i];
 *     output.push(map[curr]);
 *   }
 *   return output;
 * };
 */

/**
 * Slightly better performance as it's not running an operation
 * on the element which is not in nums1 array
 *
 * export const nextGreaterElement = (
 *   nums1: number[],
 *   nums2: number[]
 * ): number[] => {
 *   const map: Record<number, number> = {};
 *   for (let i = 0; i < nums1.length; i++) {
 *     const curr = nums1[i];
 *     map[curr] = i;
 *    *
 *   const output = new Array(nums1.length).fill(-1);
 *   for (let i = 0; i < nums2.length; i++) {
 *     const index = map[nums2[i]];
 *     if (index > -1) {
 *       for (let p = i + 1; p < nums2.length; p++) {
 *         if (nums2[i] < nums2[p]) {
 *           output[index] = nums2[p];
 *           break;
 *         }
 *       }
 *     }
 *   }
 *   return output;
 * };
 */

// Another better solution with stack involved
export const nextGreaterElement = (
  nums1: number[],
  nums2: number[]
): number[] => {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    map[curr] = i;
  }
  const output = new Array(nums1.length).fill(-1);
  const stack: number[] = [];

  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];
    let lastElmInStack = stack[stack.length - 1];

    while (stack.length > 0 && lastElmInStack < curr) {
      const targetIndex = map[lastElmInStack];
      stack.pop();
      output[targetIndex] = curr;
      lastElmInStack = stack[stack.length - 1];
    }

    if (map[curr] > -1) {
      stack.push(curr);
    }
  }
  return output;
};
