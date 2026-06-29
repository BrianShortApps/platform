import { useState } from 'react';
import { Explorer, ExplorerToolbar } from '@bsa/workspace';
import { ArtifactCard } from '../../components/ArtifactCard';
import {
  artifactService,
  loadArtifactExplorerDefinition,
} from '../../services/artifacts';

export function ArtifactExplorerPage() {
  const explorer = loadArtifactExplorerDefinition();

  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const searchedArtifacts = artifactService.search(query);

  const filteredArtifacts =
    filter === 'all'
      ? searchedArtifacts
      : searchedArtifacts.filter((artifact) => artifact.type === filter);

  return (
    <Explorer definition={explorer}>
      <ExplorerToolbar
        definition={explorer}
        query={query}
        filter={filter}
        onQueryChange={setQuery}
        onFilterChange={setFilter}
      />

      <div className="artifact-list">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifact) => (
            <ArtifactCard artifact={artifact} key={artifact.id} />
          ))
        ) : (
          <div className="empty-state">
            <h2>No artifacts found</h2>
            <p>Try adjusting the search query or selected filter.</p>
          </div>
        )}
      </div>
    </Explorer>
  );
}