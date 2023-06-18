import { ListNode } from "~/utils/ListNode";

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  let curr = new ListNode();
  const head = curr;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (!list1) {
    curr.next = list2;
  } else {
    curr.next = list1;
  }

  return head.next;
};
