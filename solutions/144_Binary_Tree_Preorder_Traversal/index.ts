import { TreeNode } from "~/utils/TreeNode";

export const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const stack = [root];
  const output: number[] = [];
  while (stack.length) {
    const lastElm = stack.pop();
    output.push(lastElm!.val);
    lastElm?.right && stack.push(lastElm.right);
    lastElm?.left && stack.push(lastElm.left);
  }
  return output;
};

// const preorderTraversal = (root: TreeNode | null): number[] => {
//     const output: number[] = [];
//     const dfs = (node: TreeNode | null) => {
//         if (!node) return;
//         output.push(node.val);
//         dfs(node.left)
//         dfs(node.right)
//     }
//     dfs(root);
//     return output;
// };
