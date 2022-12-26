# 160 Intersection of Two Linked Lists

## 💻 Description

Given the heads of two singly linked-lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.

The inputs to the judge are given as follows (your program is not given these inputs):

- `intersectVal` - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
- `listA` - The first linked list.
- `listB` - The second linked list.
- `skipA` - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
- `skipB` - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
  The judge will then create the linked structure based on these inputs and pass the two heads, `headA` and `headB` to your program. If you correctly return the intersected node, then your solution will be accepted.

**Example 1**

```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
```

## 🔗 References

[160 Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)\
[160 Intersection of Two Linked Lists explained by Terrible Whiteboard](https://www.youtube.com/watch?v=c7dOI-hDa2Q)
