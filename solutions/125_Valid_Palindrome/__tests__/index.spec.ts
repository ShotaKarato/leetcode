import { isPalindrome } from ".";

describe("isPalidrome", () => {
  it("return true if the string is valid palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("ab_a")).toBe(true);
    expect(isPalindrome("0P")).toBe(false);
  });
});
