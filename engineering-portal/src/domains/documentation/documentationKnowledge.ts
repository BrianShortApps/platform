import type { KnowledgeNode } from '@bsa/knowledge';
import { documentationCatalog } from './documentationCatalog';

export const documentationKnowledgeNodes: KnowledgeNode[] =
  documentationCatalog.map((item) => ({
    id: item.id,
    kind: 'documentation',
    title: item.title,
    summary: item.summary,
    status: item.status,
    owner: item.owner,
    tags: item.tags,
    version: item.version,
  }));