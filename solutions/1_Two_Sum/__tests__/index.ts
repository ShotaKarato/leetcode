import { twoSum } from "..";

describe("twoSum", () => {
  let nums: number[];
  let target: number;
  it("return an array of indicies that makes up the target number", () => {
    nums = [2, 7, 11, 15];
    target = 9;
    expect(twoSum(nums, target)).toEqual([1, 0]);
  });
});
