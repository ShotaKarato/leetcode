import { TreeNode } from "~/utils/TreeNode";

export const minDiffInBST = (root: TreeNode | null): number => {
  if (!root) return 0;
  const queue: TreeNode[] = [root];
  const values: number[] = [];
  let minDiff: number;

  while (queue.length > 0) {
    const node = queue.shift() as TreeNode;
    if (values.length > 0) {
      for (const value of values) {
        const diff = Math.abs(node.val - value);
        if (minDiff) {
          minDiff = diff < minDiff ? diff : minDiff;
        } else {
          minDiff = diff;
        }
      }
    }
    values.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }

  return minDiff;
};
