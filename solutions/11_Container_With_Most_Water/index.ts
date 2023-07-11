export const maxArea = (height: number[]): number => {
  let head = 0;
  let tail = height.length - 1;
  let max = 0;
  while (head < tail) {
    const area = Math.min(height[head], height[tail]) * (tail - head);
    max = Math.max(max, area);
    height[head] < height[tail] ? head++ : tail--;
  }
  return max;
};
