export type DocumentationStatus = 'draft' | 'approved' | 'deprecated';

export type DocumentationType =
  | 'architecture'
  | 'adr'
  | 'runbook'
  | 'api-spec'
  | 'workflow'
  | 'guide'
  | 'standard';

export type DocumentationItem = {
  id: string;
  title: string;
  type: DocumentationType;
  status: DocumentationStatus;
  owner: string;
  summary: string;
  tags: string[];
  relatedRepositories: string[];
  relatedServices: string[];
  relatedApis: string[];
  relatedWorkflows: string[];
  lastReviewed: string;
  version: string;
};