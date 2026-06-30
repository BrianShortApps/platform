export type KnowledgeNodeKind =
  | 'artifact'
  | 'repository'
  | 'service'
  | 'api'
  | 'documentation'
  | 'workflow';

export type KnowledgeNodeStatus =
  | 'draft'
  | 'active'
  | 'available'
  | 'approved'
  | 'deprecated'
  | 'planned';

export type KnowledgeNode = {
  id: string;
  kind: KnowledgeNodeKind;
  title: string;
  summary: string;
  status: KnowledgeNodeStatus;
  owner?: string;
  tags: string[];
  version?: string;
};