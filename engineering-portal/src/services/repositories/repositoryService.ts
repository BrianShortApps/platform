import type { EngineeringRepository } from './repositoryService.types';

const repositories: EngineeringRepository[] = [
  {
    id: 'repo-platform',
    name: 'platform',
    type: 'application',
    status: 'active',
    owner: 'BrianShortApps',
    description:
      'Monorepo for the BrianShortApps platform, including the Engineering Portal and reusable workspace package.',
    path: 'C:/Users/short/BrianShortApps/platform',
    primaryTechnology: 'TypeScript',
  },
  {
    id: 'repo-engineering-portal',
    name: 'engineering-portal',
    type: 'application',
    status: 'active',
    owner: 'BrianShortApps',
    description:
      'Mission Control interface for engineering knowledge, governance, artifacts, and explorer modules.',
    path: 'engineering-portal',
    primaryTechnology: 'React + Vite',
  },
  {
    id: 'repo-workspace',
    name: '@bsa/workspace',
    type: 'package',
    status: 'active',
    owner: 'Platform',
    description:
      'Reusable workspace and explorer framework package shared by platform applications.',
    path: 'packages/workspace',
    primaryTechnology: 'React + TypeScript',
  },
  {
    id: 'repo-docs',
    name: 'docs-site',
    type: 'documentation',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future documentation site for platform standards, architecture, and implementation guides.',
    path: 'docs-site',
    primaryTechnology: 'Docusaurus',
  },
];

export const repositoryService = {
  all(): EngineeringRepository[] {
    return repositories;
  },

  byId(id: string): EngineeringRepository | undefined {
    return repositories.find((repository) => repository.id === id);
  },

  byType(type: string): EngineeringRepository[] {
    return repositories.filter((repository) => repository.type === type);
  },

  byStatus(status: EngineeringRepository['status']): EngineeringRepository[] {
    return repositories.filter((repository) => repository.status === status);
  },

  search(query: string): EngineeringRepository[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return repositories;
    }

    return repositories.filter((repository) =>
      [
        repository.id,
        repository.name,
        repository.type,
        repository.status,
        repository.owner,
        repository.description,
        repository.path,
        repository.primaryTechnology,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  },
};

export function loadRepositories(): EngineeringRepository[] {
  return repositoryService.all();
}