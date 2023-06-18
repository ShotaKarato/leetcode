import { TreeNode } from "~/utils/TreeNode";

const increasingBST = (root: TreeNode | null): TreeNode | null => {
  const output = new TreeNode();
  let curr = output;
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    dfs(node.left);
    curr.right = new TreeNode(node.val);
    curr = curr.right;
    dfs(node.right);
  };
  dfs(root);
  return output.right;
};
