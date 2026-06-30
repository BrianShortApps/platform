import type { ExplorerDefinition } from '@bsa/workspace';

export function loadApiExplorerDefinition(): ExplorerDefinition {
  return {
    id: 'api-explorer',
    eyebrow: 'Integration System',
    title: 'API Explorer',
    description:
      'Browse platform APIs, integration boundaries, providers, base paths, ownership, and service relationships.',
    search: {
      enabled: true,
      placeholder: 'Search APIs...',
    },
    filters: [
      { label: 'All', value: 'all' },
      { label: 'REST', value: 'rest' },
      { label: 'GraphQL', value: 'graphql' },
      { label: 'Webhooks', value: 'webhook' },
      { label: 'Internal', value: 'internal' },
    ],
  };
}