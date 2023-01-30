//Definition for a binary tree node.
import { TreeNode } from "~/utils/TreeNode";

/**
 * NOTE: I wasn't able to finish this without watching the tutorial
 * Got pretty close though!!!! (Probably misunderstood the concept of "Balanced Binary Tree")
 * */

const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;
  return getHeight(root) !== -1;
};

const getHeight = (node: TreeNode | null): number => {
  if (!node) return 0;

  const left = getHeight(node.left);
  const right = getHeight(node.right);

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1;
  }

  return Math.max(left, right) + 1;
};
