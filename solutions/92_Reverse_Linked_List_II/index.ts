import { ListNode } from "~/utils";

export const reverseBetween = (
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null => {
  const dummy = new ListNode(0, head);
  let leftPrev = dummy;
  let curr = head;
  for (let i = 0; i < left - 1; i++) {
    curr = curr.next;
    leftPrev = leftPrev.next;
  }

  let prev: ListNode | null = null;
  for (let i = 0; i < right - left + 1; i++) {
    const tempNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNext;
  }

  leftPrev.next.next = curr;
  leftPrev.next = prev;

  return dummy.next;
};

// Big O
//  Time: O(n)
//  Space: O(1)
