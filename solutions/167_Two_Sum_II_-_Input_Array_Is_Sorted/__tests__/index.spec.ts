import { twoSum } from "~/solutions/167_Two_Sum_II_-_Input_Array_Is_Sorted";

describe("twoSum", () => {
  it("should return the pair which makes the target number", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });
});
