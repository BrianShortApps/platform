export type KnowledgeRelationshipType =
  | 'documents'
  | 'governs'
  | 'defines'
  | 'implements'
  | 'contains'
  | 'depends_on'
  | 'uses'
  | 'supports'
  | 'produces'
  | 'consumes'
  | 'references';

export type KnowledgeRelationship = {
  id: string;
  from: string;
  to: string;
  type: KnowledgeRelationshipType;
  description?: string;
};