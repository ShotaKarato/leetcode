export const distinctIntegers = (n: number): number => {
  const output = new Set([n]);
  const isRemainderOne = (base: number, divider: number) =>
    base % divider === 1;
  for (let base = n; base > 0; base--) {
    for (let divider = base - 1; divider > 0; divider--) {
      if (isRemainderOne(base, divider)) {
        output.add(divider);
      }
    }
  }
  return output.size;
};
