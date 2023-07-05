import { TreeNode } from "~/utils/TreeNode";
import { preorderTraversal } from "..";

describe("preorderTraversal", () => {
  const tree = new TreeNode(1);
  it("should return the postorder traversal of its nodes' value", () => {
    tree.left = null;
    tree.right = new TreeNode(2);
    tree.right.left = new TreeNode(3);
    expect(preorderTraversal(tree)).toEqual([1, 2, 3]);
  });
  it("should return the inorder traversal of its nodes' value", () => {
    tree.left = new TreeNode(2);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);
    tree.right = new TreeNode(3);
    tree.right.left = new TreeNode(6);
    tree.right.right = new TreeNode(7);

    expect(preorderTraversal(tree)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
});
