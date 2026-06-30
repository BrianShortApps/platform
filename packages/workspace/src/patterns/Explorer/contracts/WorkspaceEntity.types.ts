export type WorkspaceEntityStatus =
  | "draft"
  | "active"
  | "review"
  | "deprecated"
  | "archived"
  | string;

export type WorkspaceEntityMetadata = {
  label: string;
  value?: string;
};

export type WorkspaceEntity = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  badge?: string;
  status?: WorkspaceEntityStatus;
  metadata?: WorkspaceEntityMetadata[];
  tags?: string[];
};