const reverseString = (s: string[]): void => {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 <= p2) {
    if (p1 === p2) break;
    const temp = s[p1];
    s[p1] = s[p2];
    s[p2] = temp;

    p1++;
    p2--;
  }
};
