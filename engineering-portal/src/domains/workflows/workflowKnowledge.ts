import type { KnowledgeNode } from '@bsa/knowledge';
import { workflowCatalog } from './workflowCatalog';

export const workflowKnowledgeNodes: KnowledgeNode[] = workflowCatalog.map(
  (workflow) => ({
    id: workflow.id,
    kind: 'workflow',
    title: workflow.title,
    summary: workflow.summary,
    status: workflow.status,
    owner: workflow.owner,
    tags: workflow.tags,
    version: workflow.version,
  }),
);