import { TreeNode } from "~/utils/TreeNode";

export const inorderTraversal = (root: TreeNode | null): number[] => {
  const output: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    dfs(node.left);
    output.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return output;
};
