import { ListNode } from "~/utils/ListNode";

// Initial Answer
// export const pairSum = (head: ListNode | null): number => {
//   const nodeValues: number[] = [];
//   let curr = head;

//   while (curr) {
//     nodeValues.push(curr.val);
//     curr = curr.next;
//   }

//   let p1 = 0;
//   let p2 = nodeValues.length - 1;
//   let maxSum = nodeValues[p1] + nodeValues[p2];

//   while (p1 < p2) {
//     p1 += 1;
//     p2 -= 1;
//     const sum = nodeValues[p1] + nodeValues[p2];
//     if (sum > maxSum) {
//       maxSum = sum;
//     }
//   }

//   return maxSum;
// };

// Solution with fast & slow pointer and reverses list
export const pairSum = (head: ListNode | null): number => {
  let fastPointer = head;
  let slowPointer = head;
  let prev: ListNode | null = null;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    const next = slowPointer.next;
    slowPointer.next = prev;
    prev = slowPointer;
    slowPointer = next;
  }

  let maxSum = 0;

  while (prev && slowPointer) {
    maxSum = Math.max(maxSum, prev.val + slowPointer.val);
    prev = prev.next;
    slowPointer = slowPointer.next;
  }

  return maxSum;
};
