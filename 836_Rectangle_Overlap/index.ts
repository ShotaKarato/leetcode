const isRectangleOverlap = (rec1: number[], rec2: number[]): boolean => {
  const [x1, y1, x2, y2] = rec1;
  const [a1, b1, a2, b2] = rec2;
  // top & right & bottom & left
  if (b1 >= y2 || a1 >= x2 || b2 <= y1 || a2 <= x1) return false;
  return true;
};
