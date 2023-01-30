import { TreeNode } from "~/utils/TreeNode";
// Initial answer
const dig = (
  node: TreeNode | null,
  target: TreeNode | null
): TreeNode | null => {
  if (!node) return null;
  if (!target) return null;
  let curr: TreeNode | null;
  if (target.val === node.val) {
    curr = node;
    return curr;
  }
  return dig(node.left, target) || dig(node.right, target);
};

const getTargetCopy = (
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null => {
  if (!original && !cloned) return null;
  return dig(cloned, target);
};
