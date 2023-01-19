import { TreeNode } from "utils/TreeNode";

type Node = TreeNode | null;

const mergeTrees = (root1: Node, root2: Node): Node => {
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

/**
Type 'TreeNode' is not assignable to type 'T'.
'TreeNode' is assignable to the constraint of type 'T', but 'T' could be instantiated with a different subtype of constraint 'Node'.
👉 This error showed up on line 34. What it is saying is, TreeNode is assignable to T but at the same time T can accept any other shape of object which satisfies the constraint of extending Node. Imagine that there is another class called AnotherTreeNode which has the exact same properties as TreeNode as well as some extra properties. If this function is called with AnotherTreeNode, it has to return an object which has the identical structure to AnotherTreeNode but the actual code inside does return TreeNode.

const mergeTrees = <T extends Node>(root1: T, root2: T): T => {
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
*/
