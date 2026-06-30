import type { EngineeringApi } from './apiService.types';

const apis: EngineeringApi[] = [
  {
    id: 'api-platform-registry',
    name: 'Platform Registry API',
    type: 'internal',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future internal API surface for discovering registered platform explorers, services, and metadata.',
    basePath: '/platform/registry',
    provider: 'Engineering Portal',
    service: 'Platform Registry',
  },
  {
    id: 'api-artifacts',
    name: 'Artifacts API',
    type: 'rest',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future REST API for querying engineering artifacts, standards, and governance records.',
    basePath: '/artifacts',
    provider: 'API Gateway',
    service: 'Artifact Explorer',
  },
  {
    id: 'api-repositories',
    name: 'Repositories API',
    type: 'rest',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future REST API for repository metadata, ownership, source boundaries, and lifecycle state.',
    basePath: '/repositories',
    provider: 'API Gateway',
    service: 'Repository Explorer',
  },
  {
    id: 'api-services',
    name: 'Services API',
    type: 'rest',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future REST API for platform services, packages, frontend modules, and infrastructure capabilities.',
    basePath: '/services',
    provider: 'API Gateway',
    service: 'Service Explorer',
  },
];

export const apiService = {
  all(): EngineeringApi[] {
    return apis;
  },

  byId(id: string): EngineeringApi | undefined {
    return apis.find((api) => api.id === id);
  },

  byType(type: string): EngineeringApi[] {
    return apis.filter((api) => api.type === type);
  },

  byStatus(status: EngineeringApi['status']): EngineeringApi[] {
    return apis.filter((api) => api.status === status);
  },

  search(query: string): EngineeringApi[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return apis;
    }

    return apis.filter((api) =>
      [
        api.id,
        api.name,
        api.type,
        api.status,
        api.owner,
        api.description,
        api.basePath,
        api.provider,
        api.service,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  },
};

export function loadApis(): EngineeringApi[] {
  return apiService.all();
}