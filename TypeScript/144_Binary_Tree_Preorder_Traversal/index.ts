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

const preorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  const stack = [root];
  const output: number[] = [];
  while (stack.length) {
    const lastElm = stack.pop();
    output.push(lastElm!.val);
    lastElm?.right && stack.push(lastElm.right);
    lastElm?.left && stack.push(lastElm.left);
  }
  return output;
};
