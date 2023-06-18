import { TreeNode } from "../../utils/TreeNode";

type HashMapType = {
  [P in number]: number;
};

const findMode = (root: TreeNode | null): number[] => {
  const hashMap: HashMapType = {};

  const dig = (root: TreeNode | null) => {
    if (!root) return null;

    if (hashMap[root.val]) {
      hashMap[root.val] += 1;
    } else {
      hashMap[root.val] = 1;
    }

    dig(root.left);
    dig(root.right);
  };

  dig(root);

  const max = Math.max(...Object.values(hashMap));
  const output: number[] = [];

  for (let key in hashMap) {
    if (hashMap[key] === max) {
      output.push(Number(key));
    }
  }

  return output;
};
