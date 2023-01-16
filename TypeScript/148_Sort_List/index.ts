import { ListNode } from "../../utils/ListNode";

// get middle node by using slow and fast pointer
const getMid = (head: ListNode) => {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

const merge = (left: ListNode, right: ListNode) => {
  let output = new ListNode();
  const head = output;

  while (left && right) {
    if (left.val < right.val) {
      output.next = left;
      left = left.next;
    } else {
      output.next = right;
      right = right.next;
    }
    output = output.next;
  }

  if (left) {
    output.next = left;
  }
  if (right) {
    output.next = right;
  }

  return head.next;
};

const sortList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  let left = head;
  let right = getMid(head);
  const temp = right.next;
  right.next = null;
  right = temp;

  left = sortList(left);
  right = sortList(right);
  return merge(left, right);
};
