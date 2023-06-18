import { TreeNode } from "~/utils/TreeNode";

// Initial answer (it didn't pass the test :/)
// const sum = (node: TreeNode | null): number => {
//   if (!node) return 0;
//   return sum(node.left) + sum(node.right) + node.val;
// };

// const bstToGst = (root: TreeNode | null): TreeNode | null => {
//   const updateNodes = (node: TreeNode | null, rootVal = 0) => {
//     if (!node) return;
//     // update val
//     node.val = sum(node.right) + node.val + rootVal;
//     // go down right
//     updateNodes(node.right);
//     // go down left
//     updateNodes(node.left, node.val);
//   };
//   updateNodes(root);
//   return root;
// };

const bstToGst = (root: TreeNode | null): TreeNode | null => {
  let currSum = 0;
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    dfs(node.right);
    const tmp = node.val;
    node.val += currSum;
    currSum += tmp;
    dfs(node.left);
  };
  dfs(root);
  return root;
};
