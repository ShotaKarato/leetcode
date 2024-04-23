import { ListNode } from "~/utils";

const findGcd = (num1: number, num2: number) => {
  let base = num1 < num2 ? num1 : num2;
  if (base % 2 !== 0) {
    while (base > 0) {
      if (num1 % base === 0 && num2 % base === 0) return base;
      base -= 2;
    }
    return 1;
  }
  while (base > 0) {
    if (num1 % base === 0 && num2 % base === 0) return base;
    base--;
  }
  return 1;
};

export const insertGreatestCommonDivisors = (
  head: ListNode | null
): ListNode | null => {
  if (!head.next) return head;

  const output = head;
  let temp: ListNode | null;

  while (head.next) {
    const gcd = findGcd(head.val, head.next.val);
    temp = head.next;
    head.next = new ListNode(gcd);
    head = head.next;
    head.next = temp;
    head = head.next;
  }

  return output;
};
