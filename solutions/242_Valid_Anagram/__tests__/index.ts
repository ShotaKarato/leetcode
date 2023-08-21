import { isAnagram } from "..";

describe("isAnagram", () => {
  it("should return true if one of the input is an anagram of the other, and false otherwise", () => {
    expect(isAnagram("rat", "car")).toBe(false);
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("aabbbb", "aaaabb")).toBe(false);
  });
});
