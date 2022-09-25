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

// Answer 1
type Params = TreeNode | null;
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const dig = (node: Params, depth = 1) => {
    const left = node && node.left !== null ? dig(node.left, depth + 1) : depth;
    const right =
      node && node.right !== null ? dig(node.right, depth + 1) : depth;
    return left > right ? left : right;
  };
  return dig(root);
}
