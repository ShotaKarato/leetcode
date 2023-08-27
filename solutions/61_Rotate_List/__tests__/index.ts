import { ListNode, rotateRight } from "..";

describe("", () => {
  const a = new ListNode(1);
  const b = new ListNode(2);
  const c = new ListNode(3);
  const d = new ListNode(4);
  const e = new ListNode(5);

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  describe("rotateRight", () => {
    it("it should rotate the list to the right by the given number of places", () => {
      const a1 = new ListNode(1);
      const b1 = new ListNode(2);
      const c1 = new ListNode(3);
      const d1 = new ListNode(4);
      const e1 = new ListNode(5);

      d1.next = e1;
      e1.next = a1;
      a1.next = b1;
      b1.next = c1;

      expect(rotateRight(a, 2)).toEqual(d1);
    });
  });
});
