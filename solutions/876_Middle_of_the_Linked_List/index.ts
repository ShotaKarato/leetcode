import { ListNode } from "~/utils/ListNode";

// Initial Solution
// export const middleNode = (head: ListNode | null): ListNode | null => {
//   let currNode = head;
//   let count = 0;

//   while (currNode) {
//     count += 1;
//     currNode = currNode.next;
//   }

//   let middle = count % 2 === 0 ? count / 2 + 1 : Math.ceil(count / 2);
//   let output = head;

//   while (middle > 1) {
//     middle -= 1;
//     output = output!.next;
//   }

//   return output;
// };

// More efficient solution
export const middleNode = (head: ListNode | null): ListNode | null => {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer!.next;
  }

  return slowPointer;
};
