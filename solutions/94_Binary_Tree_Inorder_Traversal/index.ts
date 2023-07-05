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

// export const inorderTraversal = (root: TreeNode | null): number[] => {
//   const traverse = (root: TreeNode | null, output: number[] = []) => {
//     if (!root) return output;
//     output = [...output, ...traverse(root.left)];
//     output = [...output, root.val];
//     output = [...output, ...traverse(root.right)];
//     return output;
//   };
//   return traverse(root);
// };
