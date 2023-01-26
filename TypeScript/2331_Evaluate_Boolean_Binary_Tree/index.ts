import { TreeNode } from "utils/TreeNode";

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return false;
  if (!root.left && !root.right) return !!root.val;
  return root.val === 2
    ? evaluateTree(root.left) || evaluateTree(root.right)
    : evaluateTree(root.left) && evaluateTree(root.right);
}
