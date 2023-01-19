import { TreeNode } from "utils/TreeNode";

const mergeTrees = (
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null => {
  if (!root1 && !root2) return null;
  if (root1 && root2)
    return new TreeNode(
      root1.val + root2.val,
      mergeTrees(root1.left, root2.left),
      mergeTrees(root1.right, root2.right)
    );
  if (root1 && !root2)
    return new TreeNode(
      root1.val,
      mergeTrees(root1.left, null),
      mergeTrees(root1.right, null)
    );
  return new TreeNode(
    root2!.val,
    mergeTrees(null, root2!.left),
    mergeTrees(null, root2!.right)
  );
};
