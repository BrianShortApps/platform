import type { ExplorerDefinition } from '@bsa/workspace';

export function loadArtifactExplorerDefinition(): ExplorerDefinition {
  return {
    id: 'artifact-explorer',
    eyebrow: 'Knowledge System',
    title: 'Artifact Explorer',
    description:
      'Browse structured engineering artifacts that define the Brian Short Apps Platform.',
    search: {
      enabled: true,
      placeholder: 'Search artifacts...',
    },
    filters: [
      { label: 'All', value: 'all' },
      { label: 'Constitution', value: 'constitution' },
      { label: 'Standards', value: 'standard' },
    ],
  };
}