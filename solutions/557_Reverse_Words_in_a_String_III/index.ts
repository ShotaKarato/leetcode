const reverseString = (s: string): string => {
  let chars = s.split("");
  let p1 = 0;
  let p2 = chars.length - 1;

  while (p1 <= p2) {
    if (p1 === p2) break;
    const temp = chars[p1];
    chars[p1] = chars[p2];
    chars[p2] = temp;

    p1++;
    p2--;
  }

  return chars.join("");
};

const reverseWords = (s: string): string => {
  const strings = s.split(" ");
  return strings.map((string) => reverseString(string)).join(" ");
};
