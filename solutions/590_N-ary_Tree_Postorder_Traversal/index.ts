import { Node } from "~/utils/Node";

const postorder = (root: Node | null): number[] => {
  if (!root) return [];
  const output: number[] = [];
  const dfs = (node: Node | null) => {
    if (!node) return;
    node.children.forEach((child) => {
      dfs(child);
      output.push(child.val);
    });
  };
  dfs(root);
  output.push(root.val);
  return output;
};
