import type { ComponentType } from "react";

export type ExplorerRegistryEntry = {
  id: string;
  label: string;
  component: ComponentType<any>;
};

const explorerRegistry = new Map<string, ExplorerRegistryEntry>();

export function registerExplorer(entry: ExplorerRegistryEntry) {
  explorerRegistry.set(entry.id, entry);
}

export function getRegisteredExplorer(id: string) {
  return explorerRegistry.get(id);
}

export function listRegisteredExplorers() {
  return Array.from(explorerRegistry.values());
}