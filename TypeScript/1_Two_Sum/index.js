// Answer 1
// Nested for loop
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let p = 1; p < nums.length; p++) {
      const sum = nums[i] + nums[p];
      if (target === sum) {
        return [i, p];
      }
    }
  }
};
// Answer 2
// Use a hash map to record the index of examined element
var twoSum = function (nums, target) {
  const table = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = target - curr;
    if (table[diff] != null) {
      return [i, table[diff]];
    } else {
      table[curr] = i;
    }
  }
};
