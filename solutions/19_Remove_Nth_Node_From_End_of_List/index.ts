import { ListNode } from "~/utils/ListNode";

const getDepth = (node: ListNode | null, depth = 1): number => {
  if (!node) return depth;
  return getDepth(node.next, depth + 1);
};

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const target = getDepth(head) - n;

  if (target === 1) return head?.next ?? null;

  let node = head;
  let prev = new ListNode(0, head);
  let count = 1;

  while (count !== target) {
    prev = prev.next;
    node = node.next;
    count++;
  }

  const next = node.next;
  node.next = null;
  prev.next = next;

  return head;
}
