//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//Initial Answer: Behold how fat and ugly my code is lol
function minDepth(root: TreeNode | null): number {
  return getDepth(root);
}

const getDepth = (node: TreeNode | null, depth = 0) => {
  if (!node) return depth;
  if (!node.left && !node.right) return depth + 1;
  if (!node.left && node.right) return getDepth(node.right, depth + 1);
  if (!node.right && node.left) return getDepth(node.left, depth + 1);

  const left = getDepth(node.left, depth + 1);
  const right = getDepth(node.right, depth + 1);

  return Math.min(left, right);
};
