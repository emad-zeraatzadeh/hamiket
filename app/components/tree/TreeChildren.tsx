"use client";

import { TreeCore } from "@/data/data";
import { nodeKey } from "@/lib/tree-utils";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useTreeActions } from "./TreeActionsContext";
import { TreeNode } from "./TreeNode";
import { COLORS } from "./constance";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const connectorSx = {
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    right: -24,
    top: 16,
    width: 24,
    borderTop: `1px solid ${COLORS.main}`,
  },
} as const;

type TreeChildrenProps = {
  parent: TreeCore;
  depth: number;
  canAdd: boolean;
};

export function TreeChildren({ parent, depth, canAdd }: TreeChildrenProps) {
  const { onAdd } = useTreeActions();
  const [expandedChildKey, setExpandedChildKey] = useState<string | null>(null);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: "100%",
        mr: 3,
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        pr: 3,
        borderRight: `1px solid ${COLORS.main}`,
      }}
    >
      {parent.children.map((child) => {
        const key = nodeKey(child);
        return (
          <Box key={key} sx={connectorSx}>
            <TreeNode
              node={child}
              depth={depth}
              expanded={expandedChildKey === key}
              onToggle={() =>
                setExpandedChildKey((prev) => (prev === key ? null : key))
              }
            />
          </Box>
        );
      })}

      {canAdd && (
        <Box sx={connectorSx}>
          <Button
            startIcon={<ControlPointIcon />}
            variant="outlined"
            onClick={() => onAdd(nodeKey(parent))}
            sx={{
              gap: "10px",
              borderRadius: "10px",
              minWidth: 300,
              justifyContent: "center",
              borderStyle: "dashed",
              borderColor: COLORS.main,
              color: COLORS.main,
              bgcolor: "white",
              "&:hover": {
                borderColor: COLORS.mainDark,
                bgcolor: COLORS.mainLight,
              },
            }}
          >
            افزودن
          </Button>
        </Box>
      )}
    </Box>
  );
}
