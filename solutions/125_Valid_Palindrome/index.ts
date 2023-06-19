export const isPalindrome = (s: string): boolean => {
  const str = s.replace(/[\W_]/g, "").toLowerCase();
  if (str.length === 1) return true;
  for (let i = 0; i < str.length / 2; i++) {
    const head = str[i];
    const tail = str[str.length - 1 - i];
    if (head !== tail) return false;
  }
  return true;
};
