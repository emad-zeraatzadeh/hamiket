"use client";

import { TreeCore } from "@/data/data";
import { Box, Button } from "@mui/material";
import { useTreeActions } from "./TreeActionsContext";
import { COLORS, MAX_ADD_DEPTH } from "./constance";
import { TreeChildren } from "./TreeChildren";

type TreeNodeProps = {
  node: TreeCore;
  depth: number;
  expanded: boolean;
  onToggle: () => void;
};

export function TreeNode({ node, depth, expanded, onToggle }: TreeNodeProps) {
  const { onContextMenu } = useTreeActions();

  const canAddChildren = depth <= MAX_ADD_DEPTH;
  const expandable = node.children.length > 0 || canAddChildren;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        position: "relative",
        width: "fit-content",
      }}
    >
      <Button
        variant="outlined"
        onClick={() => expandable && onToggle()}
        onContextMenu={(e) => onContextMenu(e, node, depth)}
        sx={{
          borderRadius: "10px",
          minWidth: 300,
          justifyContent: "flex-start",
          borderColor: COLORS.main,
          bgcolor: expanded ? COLORS.main : "white",
          color: expanded ? "white" : "black",
          "&:hover": {
            borderColor: COLORS.main,
            bgcolor: expanded ? COLORS.mainDark : COLORS.mainLight,
          },
        }}
      >
        {node.label}
      </Button>

      {expandable && expanded && (
        <TreeChildren parent={node} depth={depth + 1} canAdd={canAddChildren} />
      )}
    </Box>
  );
}
