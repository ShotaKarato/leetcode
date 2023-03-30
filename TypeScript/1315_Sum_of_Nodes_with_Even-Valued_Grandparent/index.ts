import { TreeNode } from "~/utils/TreeNode";

// Initial answer
const sumEvenGrandparent = (root: TreeNode | null): number => {
  let sumOfNodes = 0;
  const dfs = (node: TreeNode | null) => {
    if (!node) return;
    if (node.val % 2 === 0) {
      const gc01 = node?.left?.left?.val ?? 0;
      const gc02 = node?.left?.right?.val ?? 0;
      const gc03 = node?.right?.left?.val ?? 0;
      const gc04 = node?.right?.right?.val ?? 0;
      sumOfNodes += gc01 + gc02 + gc03 + gc04;
    }
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return sumOfNodes;
};
