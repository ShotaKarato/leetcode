import { ListNode } from "../../utils/ListNode";

const isPalindrome = (head: ListNode | null): boolean => {
  const nums: number[] = [];
  const trackNodeValue = (node: ListNode | null) => {
    if (!node) return;
    nums.push(node.val);
    trackNodeValue(node.next);
  };
  trackNodeValue(head);
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    const end = nums[nums.length - 1 - i];
    if (start !== end) {
      return false;
    }
  }
  return true;
};
