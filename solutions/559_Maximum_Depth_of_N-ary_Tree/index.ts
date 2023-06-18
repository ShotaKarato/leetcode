class Node {
  val: number;
  children: Node[];
  constructor(val?: number, children?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.children = children === undefined ? [] : children;
  }
}

const maxDepth = (root: Node | null, depth: number = 1): number => {
  if (!root) return 0;
  if (root.children.length === 0) return depth;

  const accum = root.children.map((child) => maxDepth(child, depth + 1));
  return Math.max(...accum);
};
