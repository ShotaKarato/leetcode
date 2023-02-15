import { TreeNode } from "~/utils/TreeNode";

// Solution with DFS
export const searchBST = (
  root: TreeNode | null,
  val: number
): TreeNode | null => {
  const findTargetNode = (node: TreeNode | null): TreeNode | null => {
    if (!node) return null;
    if (node.val === val) return node;
    return findTargetNode(node.left) || findTargetNode(node.right);
  };
  return findTargetNode(root);
};
