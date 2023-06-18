const morseCodeList = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

export const uniqueMorseRepresentations = (words: string[]): number => {
  if (words.length === 1) return words[0].length;
  const uniqueCharMap = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];
    let str = "";
    for (let p = 0; p < currWord.length; p++) {
      const index = currWord[p].charCodeAt(0) - 97;
      const char = morseCodeList[index];
      str += char;
    }
    uniqueCharMap.add(str);
  }

  return uniqueCharMap.size;
};
