import { ListNode } from "~/utils/ListNode";

class Solution {
  readonly list: number[] = [];

  constructor(head: ListNode | null) {
    while (head) {
      this.list.push(head.val);
      head = head.next;
    }
  }

  getRandom(): number {
    const random = Math.floor(Math.random() * this.list.length);
    return this.list[random];
  }
}
