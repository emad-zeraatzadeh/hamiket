"use client";

import { createContext, useContext } from "react";
import { TreeActions } from "./types";

const TreeActionsContext = createContext<TreeActions | null>(null);

export const TreeActionsProvider = TreeActionsContext.Provider;

export function useTreeActions() {
  const ctx = useContext(TreeActionsContext);
  if (!ctx)
    throw new Error("useTreeActions must be used inside TreeActionsProvider");
  return ctx;
}
