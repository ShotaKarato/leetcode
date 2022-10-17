const strStr = (haystack: string, needle: string): number => {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    const curr = haystack[i];
    if (curr === needle[0]) {
      let p = 1;
      for (p; p < needle.length; p++) {
        if (needle[p] !== haystack[i + p]) {
          break;
        }
      }
      if (p === needle.length) {
        return i;
      }
    }
  }
  return -1;
};
