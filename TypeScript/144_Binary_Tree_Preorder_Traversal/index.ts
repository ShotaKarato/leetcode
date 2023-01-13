//Definition for a binary tree node.
import { TreeNode } from "../../utils/TreeNode";

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
