import { ListNode } from "../61_Rotate_List";

export const deleteDuplicates = (head: ListNode | null): ListNode | null => {
  if (!head) return null;
  if (!head.next) return head;

  let prev: ListNode | null = head;
  let curr: ListNode | null = head.next;

  while (curr) {
    if (prev.val === curr.val) {
      curr = curr.next;
      prev.next = curr;
    } else {
      const tempCurr = curr;
      curr = curr.next;
      prev = tempCurr;
    }
  }

  return head;
};

// Big O: O(n)
