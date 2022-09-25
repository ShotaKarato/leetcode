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

// Answer 1: initial answer
type Params = TreeNode | null;
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  const dig = (node: Params, depth = 1) => {
    if (node === null) return depth;
    const left = node.left !== null ? dig(node.left, depth + 1) : depth;
    const right = node.right !== null ? dig(node.right, depth + 1) : depth;
    return left > right ? left : right;
  };
  return dig(root);
}

// Answer 2
function maxDepth2(root: Params): number {
  if (root === null) return 0;
  const compare = (node: Params, counter = 1) => {
    if (node === null) return counter;
    return Math.max(
      compare(node.left, counter + 1),
      compare(node.right, counter + 1)
    );
  };
  return Math.max(compare(root.left), compare(root.right));
}
