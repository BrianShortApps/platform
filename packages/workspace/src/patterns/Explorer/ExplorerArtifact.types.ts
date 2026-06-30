export type ExplorerArtifactStatus =
  | "draft"
  | "active"
  | "review"
  | "deprecated"
  | "archived";

export type ExplorerArtifact = {
  id: string;
  name: string;
  type: string;
  description?: string;
  version?: string;
  owner?: string;
  lastModified?: string;
  tags?: string[];
  status?: ExplorerArtifactStatus;
  workspace?: string;
  domain?: string;
};

export type ExplorerRelationship = {
  id: string;
  label: string;
  artifactName: string;
  artifactType: string;
};

export type ExplorerVersion = {
  version: string;
  date: string;
  author: string;
  notes?: string;
};

export type ExplorerViewMode = "grid" | "list";