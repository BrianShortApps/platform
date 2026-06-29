import { useState } from 'react';
import { ArtifactCard } from '../../components/ArtifactCard';
import { artifactService } from '../../services/artifacts';

type FilterValue = 'all' | 'constitution' | 'standard';

export function ArtifactExplorerPage() {
  const [filter, setFilter] = useState<FilterValue>('all');
  const [query, setQuery] = useState('');

  const searchedArtifacts = artifactService.search(query);

  const filteredArtifacts =
    filter === 'all'
      ? searchedArtifacts
      : searchedArtifacts.filter((artifact) => artifact.type === filter);

  return (
    <section className="artifact-explorer">
      <div className="section-header">
        <p className="eyebrow">Knowledge System</p>
        <h1>Artifact Explorer</h1>
        <p className="lede">
          Browse structured engineering artifacts that define the Brian Short
          Apps Platform.
        </p>
      </div>

      <input
        className="artifact-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search artifacts..."
      />

      <div className="filter-bar">
        <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
          All
        </button>
        <button type="button" className={filter === 'constitution' ? 'active' : ''} onClick={() => setFilter('constitution')}>
          Constitution
        </button>
        <button type="button" className={filter === 'standard' ? 'active' : ''} onClick={() => setFilter('standard')}>
          Standards
        </button>
      </div>

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
    </section>
  );
}