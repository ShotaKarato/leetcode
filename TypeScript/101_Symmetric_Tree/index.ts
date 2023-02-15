import { TreeNode } from "~/utils/TreeNode";

type Params = TreeNode | null;

export const isSymmetric = (root: Params): boolean => {
  if (!root) return true;
  const compare = (left: Params, right: Params): boolean => {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return compare(left.left, right.right) && compare(left.right, right.left);
  };
  return compare(root.left, root.right);
};

// other answers: DFS
// const isSymmetric = (root: TreeNode | null): boolean => {
//   if (!root) return true;
//   if (!root.left && !root.right) return true;
//   if (!root.left || !root.right) return false;

//   const stack: (TreeNode | null)[] = [root.left, root.right];

//   while (stack.length > 0) {
//     const node1 = stack.pop() as TreeNode;
//     const node2 = stack.pop() as TreeNode;

//     if (!node1 && !node2) continue;
//     if (!node1 || !node2) return false;
//     if (node1.val !== node2.val) return false;

//     stack.push(node1.left);
//     stack.push(node2.right);
//     stack.push(node1.right);
//     stack.push(node2.left);
//   }

//   return true;
// };
