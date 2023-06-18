// Initial answer
// const maxProduct = (nums: number[]): number => {
//     const arr = [...nums];
//     let maxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         maxIndex = arr[i] > arr[maxIndex] ? i : maxIndex;
//     }
//     const biggestNum = arr[maxIndex] - 1;
//     arr.splice(maxIndex, 1);

//     let secondMaxIndex = 0;
//     for (let i = 1; i < arr.length; i++) {
//         secondMaxIndex = arr[i] > arr[secondMaxIndex] ? i : secondMaxIndex;
//     }
//     const secondBiggestNum = arr[secondMaxIndex] - 1;
//     return biggestNum * secondBiggestNum;
// };

export const maxProduct = (nums: number[]): number => {
  const arr = [...nums].sort((a, b) => b - a);
  const [first, second] = arr;
  return (first - 1) * (second - 1);
};
