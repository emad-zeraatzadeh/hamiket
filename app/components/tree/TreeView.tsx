"use client";

import { useTree } from "@/hooks/useTree";
import { nodeKey } from "@/lib/tree-utils";
import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import { AddNodeModal } from "./AddNodeModal";
import { ContextMenuState, NodeContextMenu } from "./NodeRightClick";
import { TreeActionsProvider } from "./TreeActionsContext";
import { TreeNode } from "./TreeNode";
import { TreeActions } from "./types";

export default function TreeView() {
  const {
    tree,
    hasClipboard,
    addNode,
    copyNode,
    cutNode,
    deleteNode,
    pasteNode,
  } = useTree();

  const [expandedRootKey, setExpandedRootKey] = useState<string | null>(null);
  const [addParentKey, setAddParentKey] = useState<string | null>(null);
  const [menu, setMenu] = useState<ContextMenuState | null>(null);

  const actions = useMemo<TreeActions>(
    () => ({
      onAdd: setAddParentKey,
      onContextMenu: (e, node, depth) => {
        e.preventDefault();
        setMenu({ x: e.clientX, y: e.clientY, key: nodeKey(node), depth });
      },
    }),
    [],
  );

  const closeMenu = () => setMenu(null);

  const runMenuAction = (fn: (m: ContextMenuState) => void) => () => {
    if (menu) fn(menu);
    closeMenu();
  };

  return (
    <TreeActionsProvider value={actions}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {tree.map((node) => {
          const key = nodeKey(node);
          return (
            <TreeNode
              key={key}
              node={node}
              depth={0}
              expanded={expandedRootKey === key}
              onToggle={() =>
                setExpandedRootKey((prev) => (prev === key ? null : key))
              }
            />
          );
        })}
      </Box>

      <NodeContextMenu
        menu={menu}
        canPaste={hasClipboard}
        onClose={closeMenu}
        onCut={runMenuAction((m) => cutNode(m.key))}
        onCopy={runMenuAction((m) => copyNode(m.key))}
        onPaste={runMenuAction((m) => pasteNode(m.key, m.depth))}
        onDelete={runMenuAction((m) => deleteNode(m.key))}
      />

      <AddNodeModal
        open={addParentKey !== null}
        onClose={() => setAddParentKey(null)}
        onSubmit={(label) => addParentKey && addNode(addParentKey, label)}
      />
    </TreeActionsProvider>
  );
}
