import { ListNode } from "~/utils/ListNode";

export const mergeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;
  let zeroPointer = head.next;
  let currPointer = new ListNode();
  const output = currPointer;
  let sum = 0;

  while (zeroPointer) {
    // node !== 0
    if (zeroPointer.val !== 0) {
      sum += zeroPointer.val;
    } else {
      // node === 0
      if (zeroPointer.next === null) {
        // last node in the list
        currPointer.val = sum;
      } else {
        // any node but last
        currPointer.val = sum;
        sum = 0;
        currPointer.next = new ListNode();
        currPointer = currPointer.next;
      }
    }

    zeroPointer = zeroPointer.next;
  }
  return output;
};
