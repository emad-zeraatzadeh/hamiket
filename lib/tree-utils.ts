import { TreeCore } from "@/data/data";

export const nodeKey = (n: TreeCore) => n.id ?? n.label;

let idCounter = 0;
export const newId = () => `node_${Date.now()}_${idCounter++}`;

export const findNode = (nodes: TreeCore[], key: string): TreeCore | null => {
  for (const n of nodes) {
    if (nodeKey(n) === key) return n;
    const found = findNode(n.children, key);
    if (found) return found;
  }
  return null;
};

export const getHeight = (n: TreeCore): number =>
  n.children.length === 0 ? 0 : 1 + Math.max(...n.children.map(getHeight));

export const cloneWithNewIds = (n: TreeCore): TreeCore => ({
  id: newId(),
  label: n.label,
  children: n.children.map(cloneWithNewIds),
});

export const insertChild = (
  nodes: TreeCore[],
  parentKey: string,
  child: TreeCore,
): TreeCore[] =>
  nodes.map((n) =>
    nodeKey(n) === parentKey
      ? { ...n, children: [...n.children, child] }
      : { ...n, children: insertChild(n.children, parentKey, child) },
  );

export const removeNode = (nodes: TreeCore[], key: string): TreeCore[] =>
  nodes
    .filter((n) => nodeKey(n) !== key)
    .map((n) => ({ ...n, children: removeNode(n.children, key) }));
