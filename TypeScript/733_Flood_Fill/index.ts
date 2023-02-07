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
  const isVisited = (pixel: Position) =>
    visitedPixels.find(([y, x]) => y === pixel[0] && x === pixel[1]);
  const isOutOfBounds = ([y, x]: Position) =>
    x < 0 || y < 0 || x > image[0].length - 1 || y > image.length - 1;

  while (queue.length > 0) {
    const [y, x] = queue.shift() as Position;
    const pixel = image[y][x];
    console.log(y, x);
    if (pixel === startingPixel) {
      image[y][x] = color;
      visitedPixels.push([y, x]);
      // up
      !isVisited([y + 1, x]) &&
        !isOutOfBounds([y + 1, x]) &&
        queue.push([y + 1, x]);
      // right
      !isVisited([y, x + 1]) &&
        !isOutOfBounds([y, x + 1]) &&
        queue.push([y, x + 1]);
      // down
      !isVisited([y - 1, x]) &&
        !isOutOfBounds([y - 1, x]) &&
        queue.push([y - 1, x]);
      // left
      !isVisited([y, x - 1]) &&
        !isOutOfBounds([y, x - 1]) &&
        queue.push([y, x - 1]);
    }
  }

  return image;
};
