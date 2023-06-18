import { TreeNode } from "utils/TreeNode";

const rangeSumBST = (
  root: TreeNode | null,
  low: number,
  high: number
): number => {
  if (!root) return 0;
  const currentNodeVal = root.val < low || root.val > high ? 0 : root.val;
  return (
    currentNodeVal +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
};
