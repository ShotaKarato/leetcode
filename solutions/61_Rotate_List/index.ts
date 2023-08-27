export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

const getNode = (
  node: ListNode | null,
  index: number,
  counter = 0
): ListNode | null => {
  if (!node) return null;
  if (index === counter) {
    const newHead = node.next;
    node.next = null;
    return newHead;
  }
  counter += 1;
  return getNode(node.next, index, counter);
};

export const rotateRight = (
  head: ListNode | null,
  k: number
): ListNode | null => {
  if (!head) return null;

  let length = 1;
  let tail: ListNode | null = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  const newHead = getNode(head, length - k - 1);
  tail.next = head;
  return newHead;
};
