"use client";

import { Divider, Menu, MenuItem } from "@mui/material";

export type ContextMenuState = {
  x: number;
  y: number;
  key: string;
  depth: number;
};

type NodeContextMenuProps = {
  menu: ContextMenuState | null;
  canPaste: boolean;
  onClose: () => void;
  onCut: () => void;
  onCopy: () => void;
  onPaste: () => void;
  onDelete: () => void;
};

export function NodeContextMenu({
  menu,
  canPaste,
  onClose,
  onCut,
  onCopy,
  onPaste,
  onDelete,
}: NodeContextMenuProps) {
  const isMainNode = menu?.depth === 0;

  return (
    <Menu
      open={menu !== null}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={menu ? { top: menu.y, left: menu.x } : undefined}
      onContextMenu={(e) => {
        e.preventDefault();
        onClose();
      }}
      sx={{
        "& .MuiPaper-root": {
          direction: "rtl",
          minWidth: 160,
          borderRadius: "12px",
        },
      }}
    >
      <MenuItem onClick={onCut} disabled={isMainNode}>
        برش
      </MenuItem>
      <MenuItem onClick={onCopy} disabled={isMainNode}>
        کپی
      </MenuItem>
      <MenuItem onClick={onPaste} disabled={!canPaste}>
        چسباندن
      </MenuItem>
      <Divider />
      <MenuItem
        onClick={onDelete}
        disabled={isMainNode}
        sx={{ color: "error.main" }}
      >
        حذف
      </MenuItem>
    </Menu>
  );
}
