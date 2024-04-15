import { isPalindrome } from ".";

describe("isPalindrome", () => {
  it.each([
    { x: 121, expected: true },
    { x: -121, expected: false },
    { x: 10, expected: false },
  ])("isPalindrome($x) should return $expected", ({ x, expected }) => {
    expect(isPalindrome(x)).toBe(expected);
  });
});
