import { TreeNode } from "~/utils/TreeNode";

const leafSimilar = (
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean => {
  const dfs = (
    node: TreeNode | null,
    output: number[] = []
  ): number[] | null => {
    if (!node) return null;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (!left && !right) {
      output.push(node.val);
      return output;
    }
    left = left ? left : [];
    right = right ? right : [];
    return [...left, ...right];
  };

  const res1 = dfs(root1);
  const res2 = dfs(root2);

  if (!res1 || !res2) return true;

  let p = 0;
  while (res1[p] || res2[p]) {
    if (res1[p] !== res2[p]) {
      return false;
    }
    p++;
  }
  return true;
};
