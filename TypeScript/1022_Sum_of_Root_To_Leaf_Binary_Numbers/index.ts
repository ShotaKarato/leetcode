import { TreeNode } from "~/utils/TreeNode";

export const sumRootToLeaf = (root: TreeNode | null): number => {
  const paths: number[][] = [];
  const dfs = (node: TreeNode | null, path: number[] = []) => {
    if (!node) return;
    if (!node.left && !node.right) {
      paths.push([...path, node.val]);
      return;
    }
    path = [...path, node.val];
    dfs(node.left, path);
    dfs(node.right, path);
  };
  dfs(root);
  return paths
    .flatMap((path) => parseInt(path.join(""), 2))
    .reduce((total, num) => {
      total += num;
      return total;
    }, 0);
};
