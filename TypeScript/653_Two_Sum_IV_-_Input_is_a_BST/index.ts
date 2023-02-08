import { TreeNode } from "~/utils/TreeNode";

export const findTarget = (root: TreeNode | null, k: number): boolean => {
  if (!root) return false;
  const queue: TreeNode[] = [root];
  const map: Record<number, number> = {};

  while (queue.length > 0) {
    const node = queue.shift() as TreeNode;
    const diff = k - node.val;

    if (map[diff]) return true;

    map[node.val] = 1;
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return false;
};
