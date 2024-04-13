import { removeDuplicates } from ".";

describe("removeDuplicates", () => {
  it.each([
    { nums: [1, 1, 2], expected: 2 },
    { nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: 5 },
  ])(
    "removeDuplicates($nums) should return $expected",
    ({ nums, expected }) => {
      expect(removeDuplicates(nums)).toBe(expected);
    }
  );
});
