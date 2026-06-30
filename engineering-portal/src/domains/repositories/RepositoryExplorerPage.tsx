import { useState } from 'react';
import { Explorer, ExplorerToolbar } from '@bsa/workspace';

import {
  repositoryService,
  loadRepositoryExplorerDefinition,
} from '../../services/repositories';

export function RepositoryExplorerPage() {
  const explorer = loadRepositoryExplorerDefinition();

  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const searchedRepositories = repositoryService.search(query);

  const filteredRepositories =
    filter === 'all'
      ? searchedRepositories
      : searchedRepositories.filter(
          (repository) => repository.type === filter,
        );

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
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map((repository) => (
            <article className="artifact-card" key={repository.id}>
              <h2>{repository.name}</h2>

              <p>{repository.description}</p>

              <dl>
                <dt>Type</dt>
                <dd>{repository.type}</dd>

                <dt>Status</dt>
                <dd>{repository.status}</dd>

                <dt>Owner</dt>
                <dd>{repository.owner}</dd>

                <dt>Technology</dt>
                <dd>{repository.primaryTechnology}</dd>
              </dl>
            </article>
          ))
        ) : (
          <div className="empty-state">
            <h2>No repositories found</h2>
            <p>Try adjusting the search query or selected filter.</p>
          </div>
        )}
      </div>
    </Explorer>
  );
}