import { TreeNode } from "~/utils";

export function sumOfLeftLeaves(root: TreeNode | null): number {
  const extractValueOfLeftLeaf = (
    node: TreeNode | null,
    isLeft: boolean
  ): number => {
    // when node is null
    if (!node) return 0;
    // when it's right leaf
    if (!node.left && !node.right && !isLeft) return 0;
    // when it's left leaf
    if (!node.left && !node.right && isLeft) return node.val;

    return (
      extractValueOfLeftLeaf(node.left, true) +
      extractValueOfLeftLeaf(node.right, false)
    );
  };
  return extractValueOfLeftLeaf(root, false);
}
