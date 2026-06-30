import { useState } from 'react';
import { Explorer, ExplorerToolbar } from '@bsa/workspace';

import type { ExplorerDefinition } from '@bsa/workspace';

type DomainExplorerProps<TItem> = {
  definition: ExplorerDefinition;
  items: TItem[];
  getFilterValue: (item: TItem) => string;
  searchItems: (query: string) => TItem[];
  renderItem: (item: TItem) => React.ReactNode;
  emptyTitle: string;
  emptyDescription: string;
};

export function DomainExplorer<TItem>({
  definition,
  getFilterValue,
  searchItems,
  renderItem,
  emptyTitle,
  emptyDescription,
}: DomainExplorerProps<TItem>) {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const searchedItems = searchItems(query);

  const filteredItems =
    filter === 'all'
      ? searchedItems
      : searchedItems.filter((item) => getFilterValue(item) === filter);

  return (
    <Explorer definition={definition}>
      <ExplorerToolbar
        definition={definition}
        query={query}
        filter={filter}
        onQueryChange={setQuery}
        onFilterChange={setFilter}
      />

      <div className="artifact-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(renderItem)
        ) : (
          <div className="empty-state">
            <h2>{emptyTitle}</h2>
            <p>{emptyDescription}</p>
          </div>
        )}
      </div>
    </Explorer>
  );
}