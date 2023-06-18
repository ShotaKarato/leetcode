import { TreeNode } from "~/utils/TreeNode";

const constructMaximumBinaryTree = (nums: number[]): TreeNode | null => {
  const tree = new TreeNode();

  const buildTree = (nums: number[], tree: TreeNode) => {
    if (nums.length < 1) return null;

    const max = Math.max(...nums);
    const maxIndex = nums.indexOf(max);
    tree.val = max;
    const left = maxIndex === 0 ? [] : nums.slice(0, maxIndex);
    const right = maxIndex === nums.length - 1 ? [] : nums.slice(maxIndex + 1);

    tree.left = buildTree(left, new TreeNode());
    tree.right = buildTree(right, new TreeNode());

    return tree;
  };

  buildTree(nums, tree);

  return tree;
};
