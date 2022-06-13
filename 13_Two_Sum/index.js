<<<<<<< HEAD
//回答1
// Forループをネスト化して組み合わせを一つずつ潰していく
=======
// 回答1
// Forループをネスト化させて対応
>>>>>>> 76dda58247f264e397e2eed7accfa5ba28dae27a
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
<<<<<<< HEAD
//回答2
// 各要素ごとに処理の結果をHash Mapに記載していく
=======
// 回答2
// Hash Mapで各要素の検証を行うごとにインデックスを記録
>>>>>>> 76dda58247f264e397e2eed7accfa5ba28dae27a
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
