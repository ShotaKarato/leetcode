//Definition for a binary tree node.
import { TreeNode } from "../../utils/TreeNode";

const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) return false;
  const ToLeaf = (node: TreeNode, sum: number = 0) => {
    // bottom(both left & right is null)
    if (!node.left && !node.right) return sum + node.val === targetSum;
    // either left or null is null
    if (!node.left && node.right) return ToLeaf(node.right, sum + node.val);
    if (!node.right && node.left) return ToLeaf(node.left, sum + node.val);

    return (
      ToLeaf(node.left!, sum + node.val) || ToLeaf(node.right!, sum + node.val)
    );
  };
  return ToLeaf(root);
};
