import type { EngineeringService } from './serviceService.types';

const services: EngineeringService[] = [
  {
    id: 'svc-engineering-portal',
    name: 'Engineering Portal',
    type: 'frontend',
    status: 'active',
    owner: 'BrianShortApps',
    description:
      'Mission Control interface for platform governance, explorer modules, and engineering knowledge.',
    repository: 'engineering-portal',
    technology: 'React + Vite',
    lifecycle: 'growth',
  },
  {
    id: 'svc-workspace-framework',
    name: 'Workspace Framework',
    type: 'package',
    status: 'active',
    owner: 'Platform',
    description:
      'Reusable workspace and explorer framework used to compose engineering-domain browsing experiences.',
    repository: '@bsa/workspace',
    technology: 'React + TypeScript',
    lifecycle: 'growth',
  },
  {
    id: 'svc-framework-showcase',
    name: 'Framework Showcase',
    type: 'frontend',
    status: 'active',
    owner: 'Platform',
    description:
      'Landing experience that documents the explorer ecosystem and validates the framework roadmap.',
    repository: 'engineering-portal',
    technology: 'React',
    lifecycle: 'growth',
  },
  {
    id: 'svc-docs-site',
    name: 'Documentation Site',
    type: 'documentation',
    status: 'planned',
    owner: 'Platform',
    description:
      'Future documentation surface for architecture decisions, standards, implementation guides, and platform governance.',
    repository: 'docs-site',
    technology: 'Docusaurus',
    lifecycle: 'foundation',
  },
];

export const engineeringServiceService = {
  all(): EngineeringService[] {
    return services;
  },

  byId(id: string): EngineeringService | undefined {
    return services.find((service) => service.id === id);
  },

  byType(type: string): EngineeringService[] {
    return services.filter((service) => service.type === type);
  },

  byStatus(status: EngineeringService['status']): EngineeringService[] {
    return services.filter((service) => service.status === status);
  },

  search(query: string): EngineeringService[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return services;
    }

    return services.filter((service) =>
      [
        service.id,
        service.name,
        service.type,
        service.status,
        service.owner,
        service.description,
        service.repository,
        service.technology,
        service.lifecycle,
      ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  },
};

export function loadEngineeringServices(): EngineeringService[] {
  return engineeringServiceService.all();
}