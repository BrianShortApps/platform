import type { ExplorerDefinition } from '@bsa/workspace';

export function loadRepositoryExplorerDefinition(): ExplorerDefinition {
  return {
    id: 'repository-explorer',
    eyebrow: 'Source System',
    title: 'Repository Explorer',
    description:
      'Browse platform repositories, packages, documentation sites, ownership, and implementation boundaries.',
    search: {
      enabled: true,
      placeholder: 'Search repositories...',
    },
    filters: [
      { label: 'All', value: 'all' },
      { label: 'Applications', value: 'application' },
      { label: 'Packages', value: 'package' },
      { label: 'Documentation', value: 'documentation' },
    ],
  };
}