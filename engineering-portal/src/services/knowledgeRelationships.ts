import type { KnowledgeRelationship } from '@bsa/knowledge';

export const platformKnowledgeRelationships: KnowledgeRelationship[] = [
  {
    id: 'constitution-governs-work-package-delivery',
    from: 'platform-constitution',
    to: 'work-package-delivery',
    type: 'governs',
    description:
      'The Platform Constitution governs the work package delivery process.',
  },
  {
    id: 'constitution-defines-documentation-review',
    from: 'platform-constitution',
    to: 'documentation-review',
    type: 'defines',
    description:
      'The Platform Constitution defines quality expectations for documentation review.',
  },
  {
    id: 'explorer-framework-guide-documents-work-package-delivery',
    from: 'explorer-framework-guide',
    to: 'work-package-delivery',
    type: 'documents',
    description:
      'The Explorer Framework Guide documents the delivery model used to compose new explorer capabilities.',
  },
  {
    id: 'api-explorer-adr-defines-api-lifecycle',
    from: 'api-explorer-adr',
    to: 'api-lifecycle',
    type: 'defines',
    description:
      'The API Explorer ADR defines the need for a dedicated API lifecycle workflow.',
  },
  {
    id: 'documentation-review-uses-platform-constitution',
    from: 'documentation-review',
    to: 'platform-constitution',
    type: 'uses',
    description:
      'The Documentation Review workflow uses the Platform Constitution as its governance source.',
  },
  {
    id: 'api-lifecycle-references-api-explorer-adr',
    from: 'api-lifecycle',
    to: 'api-explorer-adr',
    type: 'references',
    description:
      'The API Lifecycle workflow references the API Explorer ADR for domain modeling guidance.',
  },
];