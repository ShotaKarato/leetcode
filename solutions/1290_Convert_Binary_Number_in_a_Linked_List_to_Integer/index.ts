import { ListNode } from "~/utils";

export const getDecimalValue = (head: ListNode | null): number => {
  // loop through linked list and collect values
  const nodeValues: number[] = [];
  const collectVal = (node: ListNode | null) => {
    if (!node) return;
    nodeValues.unshift(node.val);
    collectVal(node.next);
  };
  collectVal(head);

  // convert binary to decimal
  let output = 0;
  for (let i = 0; i < nodeValues.length; i++) {
    const base = Math.pow(2, i);
    output += nodeValues[i] * base;
  }
  return output;
};
