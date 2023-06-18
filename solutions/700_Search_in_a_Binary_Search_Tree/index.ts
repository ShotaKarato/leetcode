import { TreeNode } from "~/utils/TreeNode";

// Solution with DFS
// const searchBST = (
//   root: TreeNode | null,
//   val: number
// ): TreeNode | null => {
//   const findTargetNode = (node: TreeNode | null): TreeNode | null => {
//     if (!node) return null;
//     if (node.val === val) return node;
//     return findTargetNode(node.left) || findTargetNode(node.right);
//   };
//   return findTargetNode(root);
// };

// Solution with BFS
// const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
//   if (!root) return null;
//   const queue: TreeNode[] = [root];
//   while (queue.length > 0) {
//     const node = queue.shift() as TreeNode;
//     if (node.val === val) return node;
//     node.left && queue.push(node.left);
//     node.right && queue.push(node.right);
//   }
//   return null;
// };

// Possibly much more efficient solution??
const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  if (!root) return null;
  // match found
  if (val === root.val) return root;
  // val smaller than root.val -> left
  if (val < root.val) return searchBST(root.left, val);
  // val bigger than root.val -> right
  return searchBST(root.right, val);
};
