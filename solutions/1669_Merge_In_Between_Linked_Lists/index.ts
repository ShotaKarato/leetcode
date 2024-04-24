import { ListNode } from "~/utils";

export const mergeInBetween = (
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null => {
  let curr = list1;
  let currPosition = 0;

  while (currPosition < a - 1) {
    curr = curr.next;
    currPosition++;
  }

  const head = curr;

  while (currPosition <= b) {
    curr = curr.next;
    currPosition++;
  }

  head.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }

  list2.next = curr;

  return list1;
};
