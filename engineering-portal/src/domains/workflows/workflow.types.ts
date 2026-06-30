export type WorkflowStatus = 'draft' | 'active' | 'deprecated';

export type WorkflowType =
  | 'delivery'
  | 'review'
  | 'release'
  | 'incident'
  | 'documentation'
  | 'architecture'
  | 'lifecycle';

export type WorkflowStage = {
  id: string;
  title: string;
  description: string;
};

export type WorkflowItem = {
  id: string;
  title: string;
  type: WorkflowType;
  status: WorkflowStatus;
  owner: string;
  summary: string;
  stages: WorkflowStage[];
  inputs: string[];
  outputs: string[];
  relatedDocumentation: string[];
  relatedRepositories: string[];
  relatedServices: string[];
  relatedApis: string[];
  tags: string[];
  version: string;
};