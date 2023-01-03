import { ListNode } from "../utils/index";

const hasCycle = (head: ListNode | null): boolean => {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  // NOTE: Added validation for slow to avoid the warning regarding type
  while (fast && slow && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};
