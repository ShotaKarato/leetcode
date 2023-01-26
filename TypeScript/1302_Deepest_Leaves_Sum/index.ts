import { TreeNode } from "utils/TreeNode";

function deepestLeavesSum(root: TreeNode | null): number {
  // record of the maximum depth
  let maxDepth = 1;
  // record of bottom node ([number, number][] is record of depth and value)
  const bottomNodes: [number, number][] = [];

  const findBottomNode = (root: TreeNode | null, depth: number = maxDepth) => {
    if (!root) return;
    if (!root.left && !root.right) {
      bottomNodes.push([depth, root.val]);
      maxDepth = maxDepth < depth ? depth : maxDepth;
    }
    findBottomNode(root.left, depth + 1);
    findBottomNode(root.right, depth + 1);
  };
  findBottomNode(root);

  const deepestNodes = bottomNodes.reduce((total, [depth, val]) => {
    if (depth === maxDepth) {
      total += val;
      return total;
    }
    return total;
  }, 0);

  return deepestNodes;
}
