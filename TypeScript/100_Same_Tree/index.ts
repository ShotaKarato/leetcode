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

// initial answer
const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  // both are null
  if (!p && !q) return true;
  // only one of them is null
  if (!p && q) return false;
  if (!q && p) return false;
  // values not equal
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTree02 = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p === null || q === null) return p === q;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
