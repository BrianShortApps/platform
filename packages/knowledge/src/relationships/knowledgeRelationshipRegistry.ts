import type {
  KnowledgeRelationship,
  KnowledgeRelationshipType,
} from './knowledgeRelationship.types';

export class KnowledgeRelationshipRegistry {
  private readonly relationships = new Map<string, KnowledgeRelationship>();

  register(relationships: KnowledgeRelationship[]) {
    for (const relationship of relationships) {
      this.relationships.set(relationship.id, relationship);
    }
  }

  getAll(): KnowledgeRelationship[] {
    return [...this.relationships.values()];
  }

  getById(id: string): KnowledgeRelationship | undefined {
    return this.relationships.get(id);
  }

  getByType(type: KnowledgeRelationshipType): KnowledgeRelationship[] {
    return this.getAll().filter((relationship) => relationship.type === type);
  }

  getBySource(nodeId: string): KnowledgeRelationship[] {
    return this.getAll().filter((relationship) => relationship.from === nodeId);
  }

  getByTarget(nodeId: string): KnowledgeRelationship[] {
    return this.getAll().filter((relationship) => relationship.to === nodeId);
  }
}

export const knowledgeRelationshipRegistry =
  new KnowledgeRelationshipRegistry();