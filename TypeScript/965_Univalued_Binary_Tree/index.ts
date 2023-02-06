import { TreeNode } from "~/utils/TreeNode";

export const isUnivalTree = (root: TreeNode | null): boolean => {
  if (!root) return true;
  const prevNodeValue = root.val;
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift() as TreeNode;
    if (node.val !== prevNodeValue) return false;
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return true;
};
