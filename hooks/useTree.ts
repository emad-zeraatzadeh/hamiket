import { MAX_DEPTH } from "@/app/components/tree/constance";
import { initialTree, TreeCore } from "@/data/data";
import {
  cloneWithNewIds,
  findNode,
  getHeight,
  insertChild,
  newId,
  nodeKey,
  removeNode,
} from "@/lib/tree-utils";
import { useState } from "react";
import { toast } from "react-toastify";

type Clipboard = { mode: "copy" | "cut"; node: TreeCore } | null;

export function useTree() {
  const [tree, setTree] = useState<TreeCore[]>(initialTree);
  const [clipboard, setClipboard] = useState<Clipboard>(null);

  const addNode = (parentKey: string, label: string) =>
    setTree((prev) =>
      insertChild(prev, parentKey, { id: newId(), label, children: [] }),
    );

  const copyNode = (key: string) => {
    const node = findNode(tree, key);
    if (!node) return;
    setClipboard({ mode: "copy", node: structuredClone(node) });
    toast.success("کپی شد");
  };

  const cutNode = (key: string) => {
    const node = findNode(tree, key);
    if (!node) return;
    if (node.children.length > 0) {
      toast.warn("به دلیل داشتن زیرمجموعه قابل برش نیست");
      return;
    }
    setClipboard({ mode: "cut", node: structuredClone(node) });
    toast.success("برش داده شد");
  };

  const deleteNode = (key: string) => {
    const node = findNode(tree, key);
    if (!node) return;
    if (node.children.length > 0) {
      toast.warn("به دلیل داشتن زیرمجموعه قابل حذف نیست");
      return;
    }
    setTree((prev) => removeNode(prev, key));
    toast.success("حذف شد");
  };

  const pasteNode = (targetKey: string, targetDepth: number) => {
    if (!clipboard) return;

    if (targetDepth + 1 + getHeight(clipboard.node) > MAX_DEPTH) {
      toast.error("امکان چسباندن در این سطح وجود ندارد");
      return;
    }

    let next = tree;
    if (clipboard.mode === "cut") {
      if (nodeKey(clipboard.node) === targetKey) return;
      next = removeNode(next, nodeKey(clipboard.node));
    }

    setTree(insertChild(next, targetKey, cloneWithNewIds(clipboard.node)));
    if (clipboard.mode === "cut") setClipboard(null);
    toast.success("چسبانده شد");
  };

  return {
    tree,
    hasClipboard: clipboard !== null,
    addNode,
    copyNode,
    cutNode,
    deleteNode,
    pasteNode,
  };
}
