// Initial Solution
// export const intersection = (nums1: number[], nums2: number[]): number[] => {
//   const map: { [K in string]: number } = {};
//   const listForMap = nums1.length < nums2.length ? nums1 : nums2;
//   const listForIter = nums1.length < nums2.length ? nums2 : nums1;

//   for (let i = 0; i < listForMap.length; i++) {
//     const curr = listForMap[i];
//     if (!map[curr]) {
//       map[curr] = 1;
//     }
//   }

//   const output = new Set<number>();
//   for (let i = 0; i < listForIter.length; i++) {
//     const curr = listForIter[i];
//     if (map[curr]) {
//       output.add(curr);
//     }
//   }

//   return Array.from(output);
// };

// Another
export const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set = new Set(nums1);
  return [...set].filter((elm) => nums2.indexOf(elm) > -1);
};
