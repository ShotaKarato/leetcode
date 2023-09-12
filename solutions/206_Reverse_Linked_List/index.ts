import { ListNode } from "~/utils";

// Iterative Solution
export const reverseList = (head: ListNode | null): ListNode | null => {
  if (!head) return null;
  if (!head.next) return head;

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr) {
    const next: ListNode | null = curr.next;

    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// Big O: O(n)
