import type { ReactNode } from "react";
import type { WorkspaceEntity } from "./WorkspaceEntity.types.js";

export type WorkspaceInspectorDescriptionItem = {
  label: string;
  value?: string;
};

export type WorkspaceInspectorSection = {
  id: string;
  title: string;
  description?: string;
  items?: WorkspaceInspectorDescriptionItem[];
  content?: ReactNode;
};

export type WorkspaceInspectorDefinition = {
  entity?: WorkspaceEntity | null;
  sections?: WorkspaceInspectorSection[];
};