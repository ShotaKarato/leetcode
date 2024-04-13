import { removeElement } from ".";

describe("removeElement", () => {
  it.each([
    {
      nums: [3, 2, 2, 3],
      val: 3,
      expected: 2,
    },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expected: 5,
    },
  ])(
    "removeElement($nums, $val) should return $expected",
    ({ nums, val, expected }) => {
      expect(removeElement(nums, val)).toBe(expected);
    }
  );
});
