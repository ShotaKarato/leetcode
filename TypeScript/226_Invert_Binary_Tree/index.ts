import { TreeNode } from "~/utils/TreeNode";

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
