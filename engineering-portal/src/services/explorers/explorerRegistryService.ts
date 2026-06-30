import { ArtifactExplorerPage } from '../../domains/artifacts';
import { RepositoryExplorerPage } from '../../domains/repositories';
import { ServiceExplorerPage } from '../../domains/services';
import { ApiExplorerPage } from '../../domains/apis';
import { DocumentationExplorerPage } from '../../domains/documentation';

import type {
  ActiveExplorerId,
  ExplorerRegistryItem,
} from './explorerRegistry.types';

const explorers: ExplorerRegistryItem[] = [
  {
    id: 'artifacts',
    title: 'Artifact Explorer',
    description: 'Browse engineering artifacts produced by platform work packages.',
    status: 'available',
    category: 'knowledge',
    version: '1.0.0',
    component: ArtifactExplorerPage,
    },
    {
    id: 'repositories',
    title: 'Repository Explorer',
    description: 'Browse source repositories, packages, ownership, and implementation boundaries.',
    status: 'available',
    category: 'source',
    version: '1.0.0',
    component: RepositoryExplorerPage,
    },
    {
    id: 'services',
    title: 'Service Explorer',
    description: 'Map applications, packages, frontend modules, and internal platform services.',
    status: 'available',
    category: 'platform',
    version: '1.0.0',
    component: ServiceExplorerPage,
    },
    {
    id: 'apis',
    title: 'API Explorer',
    description: 'Catalog APIs, endpoints, ownership, and integration boundaries.',
    status: 'available',
    category: 'platform',
    version: '1.0.0',
    component: ApiExplorerPage,
    },
    {
    id: 'documentation',
    title: 'Documentation Explorer',
    description:
        'Surface guides, references, architecture notes, and decision records.',
    status: 'available',
    category: 'knowledge',
    version: '1.0.0',
    component: DocumentationExplorerPage,
    },
    {
        id: 'workflows',
        title: 'Workflow Explorer',
        description: 'Track engineering workflows, operating procedures, and release paths.',
        status: 'planned',
        category: 'operations',
        version: '0.0.0',
    },
];

export function loadExplorerRegistry(): ExplorerRegistryItem[] {
  return explorers;
}

export function getExplorerStats() {
  return {
    total: explorers.length,
    available: explorers.filter((explorer) => explorer.status === 'available').length,
    inDevelopment: explorers.filter(
      (explorer) => explorer.status === 'in-development',
    ).length,
    planned: explorers.filter((explorer) => explorer.status === 'planned').length,
  };
}

export function loadActiveExplorers() {
  return explorers.filter(
    (explorer): explorer is ExplorerRegistryItem & {
      id: ActiveExplorerId;
      component: NonNullable<ExplorerRegistryItem['component']>;
    } => Boolean(explorer.component),
  );
}

export function getExplorerById(id: ActiveExplorerId) {
  return loadActiveExplorers().find((explorer) => explorer.id === id);
}

export function getExplorerStatusLabel(status: ExplorerRegistryItem['status']) {
  switch (status) {
    case 'available':
      return 'Available';
    case 'in-development':
      return 'In Development';
    case 'planned':
      return 'Coming Soon';
    default:
      return status;
  }
}

export function getExplorerStatusGlyph(status: ExplorerRegistryItem['status']) {
  switch (status) {
    case 'available':
      return '●';
    case 'in-development':
      return '◐';
    case 'planned':
      return '○';
    default:
      return '○';
  }
}