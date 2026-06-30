import { knowledgeRegistry, knowledgeRelationshipRegistry } from '@bsa/knowledge';
import { documentationKnowledgeNodes } from '../domains/documentation';
import { workflowKnowledgeNodes } from '../domains/workflows';
import { platformKnowledgeRelationships } from './knowledgeRelationships';

knowledgeRegistry.register(documentationKnowledgeNodes);
knowledgeRegistry.register(workflowKnowledgeNodes);
knowledgeRelationshipRegistry.register(platformKnowledgeRelationships);

export const platformKnowledgeService = {
  nodes: {
    getAll: () => knowledgeRegistry.getAll(),
    getById: (id: string) => knowledgeRegistry.getById(id),
    getByKind: (
      kind: Parameters<typeof knowledgeRegistry.getByKind>[0],
    ) => knowledgeRegistry.getByKind(kind),
  },

  relationships: {
    getAll: () => knowledgeRelationshipRegistry.getAll(),
    getByType: (
      type: Parameters<typeof knowledgeRelationshipRegistry.getByType>[0],
    ) => knowledgeRelationshipRegistry.getByType(type),
    getBySource: (id: string) => knowledgeRelationshipRegistry.getBySource(id),
    getByTarget: (id: string) => knowledgeRelationshipRegistry.getByTarget(id),
  },
};