import { containsDuplicate } from "..";

describe("containsDuplicate", () => {
  it("it should return `true` if any value appears at least twice in the array", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it("it should return `false` if there is no duplicate values in the array", () => {
    expect(containsDuplicate([1, 2, 3])).toBe(false);
  });
});
