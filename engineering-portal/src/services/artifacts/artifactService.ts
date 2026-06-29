import type { EngineeringArtifact } from './artifactService.types';

const artifacts: EngineeringArtifact[] = [
  {
    id: 'CONST-001',
    title: 'BSA Constitution',
    type: 'constitution',
    status: 'stable',
    owner: 'Platform',
    description: 'The governing principles of the Brian Short Apps Platform.',
  },
  {
    id: 'STD-001',
    title: 'Engineering Artifact Schema',
    type: 'standard',
    status: 'draft',
    owner: 'Platform',
    description: 'The metadata model for structured engineering artifacts.',
  },
  {
    id: 'STD-002',
    title: 'Package Structure Standard',
    type: 'standard',
    status: 'draft',
    owner: 'Platform',
    description: 'The standard structure for reusable BSA packages.',
  },
];

export const artifactService = {
  all(): EngineeringArtifact[] {
    return artifacts;
  },

  byId(id: string): EngineeringArtifact | undefined {
    return artifacts.find((artifact) => artifact.id === id);
  },

  byType(type: string): EngineeringArtifact[] {
    return artifacts.filter((artifact) => artifact.type === type);
  },

  byStatus(status: EngineeringArtifact['status']): EngineeringArtifact[] {
    return artifacts.filter((artifact) => artifact.status === status);
  },

  search(query: string): EngineeringArtifact[] {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
        return artifacts;
    }

    return artifacts.filter((artifact) => {
        return [
        artifact.id,
        artifact.title,
        artifact.type,
        artifact.status,
        artifact.owner,
        artifact.description,
        ]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery);
    });
    },
};

export function loadArtifacts(): EngineeringArtifact[] {
  return artifactService.all();
}