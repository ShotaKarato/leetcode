import { ListNode } from "~/utils/ListNode";

// Initial answer
// export const removeElements = (
//   head: ListNode | null,
//   val: number
// ): ListNode | null => {
//   let currNode = head;
//   let prevNode = new ListNode();
//   const output = prevNode;

//   while (currNode) {
//     if (currNode.val === val) {
//       currNode = currNode.next;
//       prevNode.next = currNode;
//     } else {
//       prevNode.next = currNode;
//       prevNode = currNode;
//       currNode = currNode.next;
//     }
//   }

//   return output.next;
// };

export const removeElements = (
  head: ListNode | null,
  val: number
): ListNode | null => {
  while (head && head.val === val) {
    head = head.next;
  }
  let currNode: ListNode | null = head;
  while (currNode && currNode.next) {
    if (currNode.next.val === val) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  return head;
};
