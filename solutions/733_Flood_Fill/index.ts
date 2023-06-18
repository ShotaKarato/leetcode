type Position = [number, number];

export const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] => {
  const startingPixel = image[sr][sc];
  const visitedPixels: Position[] = [[sr, sc]];
  const queue: Position[] = [[sr, sc]];

  // validations
  const isVisited = (pixel: Position) =>
    visitedPixels.find(([y, x]) => y === pixel[0] && x === pixel[1]);
  const isOutOfBounds = ([y, x]: Position) =>
    x < 0 || y < 0 || x > image[0].length - 1 || y > image.length - 1;
  // update queue
  const visitPixel = (pixel: Position) => {
    !isVisited(pixel) && !isOutOfBounds(pixel) && queue.push(pixel);
  };

  while (queue.length > 0) {
    const [y, x] = queue.shift() as Position;
    const pixel = image[y][x];
    if (pixel === startingPixel) {
      image[y][x] = color;
      visitedPixels.push([y, x]);
      // up
      visitPixel([y + 1, x]);
      // right
      visitPixel([y, x + 1]);
      // down
      visitPixel([y - 1, x]);
      // left
      visitPixel([y, x - 1]);
    }
  }

  return image;
};
