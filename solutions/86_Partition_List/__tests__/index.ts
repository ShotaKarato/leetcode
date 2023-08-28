import { ListNode } from "~/utils";
import { partition } from "..";

describe("partition", () => {
  const a = new ListNode(1);
  const b = new ListNode(4);
  const c = new ListNode(3);
  const d = new ListNode(2);
  const e = new ListNode(5);
  const f = new ListNode(2);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  e.next = f;

  it("it should return the correctly ordered linked list", () => {
    const a1 = new ListNode(1);
    const b1 = new ListNode(4);
    const c1 = new ListNode(3);
    const d1 = new ListNode(2);
    const e1 = new ListNode(5);
    const f1 = new ListNode(2);

    a1.next = d1;
    d1.next = f1;
    f1.next = b1;
    b1.next = c1;
    c1.next = e1;

    expect(partition(a, 3)).toEqual(a1);
  });
});
