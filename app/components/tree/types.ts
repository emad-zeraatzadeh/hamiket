import { TreeCore } from "@/data/data";
import type { MouseEvent } from "react";

export type ContextMenuHandler = (
  e: MouseEvent,
  node: TreeCore,
  depth: number
) => void;

export type TreeActions = {
  onAdd: (parentKey: string) => void;
  onContextMenu: ContextMenuHandler;
};