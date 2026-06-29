export interface WorkspaceSection {
  id: string;
  title: string;
  description?: string;
}

export interface WorkspaceDefinition {
  id: string;
  title: string;
  sections: WorkspaceSection[];
}