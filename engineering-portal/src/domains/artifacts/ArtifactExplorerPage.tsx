import { useEffect, useMemo, useState } from 'react';
import {
  ArtifactExplorer,
  ExplorerToolbar,
  type ExplorerArtifact,
  type ExplorerViewMode,
} from '@bsa/workspace';
import { Button } from '../../design';
import {
  artifactService,
  loadArtifactExplorerDefinition,
} from '../../services/artifacts';

function buildArtifactPreview(artifact: ExplorerArtifact | null) {
  if (!artifact) {
    return undefined;
  }

  return JSON.stringify(
    {
      id: artifact.id,
      name: artifact.name,
      type: artifact.type,
      status: artifact.status,
      version: artifact.version,
      owner: artifact.owner,
      lastModified: artifact.lastModified,
      description: artifact.description,
    },
    null,
    2
  );
}

function buildArtifactRelationships(artifact: ExplorerArtifact | null) {
  if (!artifact) {
    return [];
  }

  return [
    {
      id: `${artifact.id}-rel-workspace`,
      label: 'Belongs To',
      artifactName: artifact.workspace ?? 'Engineering Portal',
      artifactType: 'Workspace',
    },
    {
      id: `${artifact.id}-rel-domain`,
      label: 'Supports',
      artifactName: artifact.domain ?? 'Foundation 003',
      artifactType: 'Domain',
    },
  ];
}

function buildArtifactVersions(artifact: ExplorerArtifact | null) {
  if (!artifact) {
    return [];
  }

  return [
    {
      version: artifact.version ?? '1.0.0',
      date: artifact.lastModified ?? 'Recently updated',
      author: artifact.owner ?? 'BrianShortApps',
      notes: 'Current artifact version.',
    },
  ];
}

export function ArtifactExplorerPage() {
  const explorer = loadArtifactExplorerDefinition();

  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState<ExplorerViewMode>('grid');
  const [selectedArtifactId, setSelectedArtifactId] = useState<string | null>(
    null
  );

  const searchedArtifacts = artifactService.search(query);

  const filteredArtifacts: ExplorerArtifact[] = useMemo(
    () =>
      (filter === 'all'
        ? searchedArtifacts
        : searchedArtifacts.filter((artifact) => artifact.type === filter)
      ).map((artifact) => ({
        id: artifact.id,
        name: artifact.title,
        type: artifact.type,
        description: artifact.description,
        version: '1.0.0',
        owner: artifact.owner,
        lastModified: 'Recently updated',
        tags: [],
        status:
          artifact.status === 'approved' || artifact.status === 'stable'
            ? 'active'
            : artifact.status,
        workspace: 'Engineering Portal',
        domain: 'Foundation 003',
      })),
    [filter, searchedArtifacts]
  );

  const selectedArtifact =
    filteredArtifacts.find((artifact) => artifact.id === selectedArtifactId) ??
    null;

  useEffect(() => {
    if (
      selectedArtifactId &&
      !filteredArtifacts.some((artifact) => artifact.id === selectedArtifactId)
    ) {
      setSelectedArtifactId(null);
    }
  }, [filteredArtifacts, selectedArtifactId]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-8">
      <ExplorerToolbar
        definition={explorer}
        query={query}
        filter={filter}
        onQueryChange={setQuery}
        onFilterChange={setFilter}
      />

      <div className="mb-4 mt-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-700">
            {filteredArtifacts.length} artifacts
          </p>
          <p className="text-xs text-slate-500">
            Select an artifact to begin inspection.
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            size="sm"
            variant={viewMode === 'grid' ? 'primary' : 'outline'}
            onClick={() => setViewMode('grid')}
          >
            Grid
          </Button>

          <Button
            type="button"
            size="sm"
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            onClick={() => setViewMode('list')}
          >
            List
          </Button>
        </div>
      </div>

      <ArtifactExplorer
        definition={explorer}
        artifacts={filteredArtifacts}
        selectedArtifact={selectedArtifact}
        selectedArtifactId={selectedArtifactId}
        relationships={buildArtifactRelationships(selectedArtifact)}
        versions={buildArtifactVersions(selectedArtifact)}
        previewContent={buildArtifactPreview(selectedArtifact)}
        viewMode={viewMode}
        onSelectArtifact={(artifact) => setSelectedArtifactId(artifact.id)}
      />
    </div>
  );
}