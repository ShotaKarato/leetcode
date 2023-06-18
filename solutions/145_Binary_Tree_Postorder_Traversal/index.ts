import { TreeNode } from "~/utils/TreeNode";

const postorderTraversal = (root: TreeNode | null): number[] => {
  const output: number[] = [];
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    dfs(node.left);
    dfs(node.right);
    output.push(node.val);
  };
  dfs(root);
  return output;
};
