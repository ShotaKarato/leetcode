class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/** 
 * My initial answer (It didn't pass some of the tests...)
const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  const mid = Math.floor(nums.length / 2);
  const rootValue = nums[mid];
  const root = new TreeNode(rootValue, null, null);
  console.log(rootValue, root);

  const dig = (root: TreeNode, direction: "right" | "left", index: number) => {
    if (direction === "left") {
      const currIndex = index - 1;
      if (nums[currIndex] === undefined) return;

      const node = new TreeNode(nums[currIndex], null, null);
      root.left = node;
      dig(root.left, "left", currIndex);
    } else {
      const currIndex = index + 1;
      if (nums[currIndex] === undefined) return;

      const node = new TreeNode(nums[currIndex], null, null);
      root.right = node;
      dig(root.right, "right", currIndex);
    }
  };

  // left
  dig(root, "left", mid);
  // right
  dig(root, "right", mid);

  return root;
}
*/

const sortedArrayToBST = (
  nums: number[],
  left: number = 0,
  right: number = nums.length - 1
): TreeNode | null => {
  if (left > right) return null;

  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums, left, mid - 1);
  root.right = sortedArrayToBST(nums, mid + 1, right);

  return root;
};
