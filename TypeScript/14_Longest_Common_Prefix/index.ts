function longestCommonPrefix(strs: string[]): string {
  let output = "";
  for (let i = 0; i < strs[0].length; i++) {
    const pointer1 = strs[0][i];
    let p = 1;
    for (p; p < strs.length; p++) {
      const pointer2 = strs[p][i];
      if (pointer1 !== pointer2) {
        break;
      }
    }
    if (p === strs.length) {
      output += pointer1;
    } else {
      break;
    }
  }
  return output;
}
