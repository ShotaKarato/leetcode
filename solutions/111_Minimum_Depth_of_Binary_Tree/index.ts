//Definition for a binary tree node.
import { TreeNode } from "~/utils/TreeNode";

//Initial Answer: Behold how fat and ugly my code is lol
function minDepth(root: TreeNode | null): number {
  return getDepth(root);
}

const getDepth = (node: TreeNode | null, depth = 0) => {
  if (!node) return depth;
  if (!node.left && !node.right) return depth + 1;
  if (!node.left && node.right) return getDepth(node.right, depth + 1);
  if (!node.right && node.left) return getDepth(node.left, depth + 1);

  const left = getDepth(node.left, depth + 1);
  const right = getDepth(node.right, depth + 1);

  return Math.min(left, right);
};
