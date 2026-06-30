import type { ExplorerDefinition } from '@bsa/workspace';

export function loadServiceExplorerDefinition(): ExplorerDefinition {
  return {
    id: 'service-explorer',
    eyebrow: 'Platform System',
    title: 'Service Explorer',
    description:
      'Browse platform services, packages, frontend modules, infrastructure capabilities, and documentation surfaces.',
    search: {
      enabled: true,
      placeholder: 'Search services...',
    },
    filters: [
      { label: 'All', value: 'all' },
      { label: 'Frontend', value: 'frontend' },
      { label: 'Backend', value: 'backend' },
      { label: 'Packages', value: 'package' },
      { label: 'Infrastructure', value: 'infrastructure' },
      { label: 'Documentation', value: 'documentation' },
    ],
  };
}