import { TreeNode } from "~/utils";
import { inorderTraversal } from "~/solutions/94_Binary_Tree_Inorder_Traversal";

describe("inorderTraversal", () => {
  const tree = new TreeNode(1);
  it("should return the inorder traversal of its nodes' value", () => {
    tree.left = null;
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    expect(inorderTraversal(tree)).toEqual([1, 3, 2]);
  });
  it("should return the inorder traversal of its nodes' value", () => {
    tree.left = new TreeNode(2);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);
    tree.right = new TreeNode(3);
    tree.right.left = new TreeNode(6);
    tree.right.right = new TreeNode(7);

    expect(inorderTraversal(tree)).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});
