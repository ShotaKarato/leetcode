// Initial Answer
export const nextGreaterElement = (
  nums1: number[],
  nums2: number[]
): number[] => {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums2.length; i++) {
    const curr = nums2[i];
    let firstBiggerElm: number;
    for (let p = i + 1; p < nums2.length; p++) {
      if (curr < nums2[p]) {
        firstBiggerElm = nums2[p];
        break;
      }
    }
    map[curr] = firstBiggerElm ?? -1;
  }
  const output: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    const curr = nums1[i];
    output.push(map[curr]);
  }
  return output;
};
