import { TreeNode } from "~/utils/TreeNode";

const sum = (queue: TreeNode[]) => {
  let total = 0;
  for (const node of queue) {
    total += node.val;
  }
  return total;
};

export const averageOfLevels = (root: TreeNode | null): number[] => {
  if (!root) return [];
  let queue: TreeNode[] = [root];
  const output: number[] = [];

  while (queue.length > 0) {
    const average = sum(queue) / queue.length;
    // const average =
    //   queue.reduce((total, node) => (total += node.val), 0) / queue.length;
    output.push(average);
    let tempQueue: TreeNode[] = [];
    for (let i = 0; i < queue.length; i++) {
      const curr = queue[i];
      curr.left && tempQueue.push(curr.left);
      curr.right && tempQueue.push(curr.right);
    }
    queue = [...tempQueue];
    tempQueue = [];
  }

  return output;
};
