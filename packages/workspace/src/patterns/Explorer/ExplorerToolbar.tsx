import type { ExplorerDefinition } from './Explorer.types.js';

export type ExplorerToolbarProps = {
  definition: ExplorerDefinition;
  query: string;
  filter: string;
  onQueryChange: (value: string) => void;
  onFilterChange: (value: string) => void;
};

export function ExplorerToolbar({
  definition,
  query,
  filter,
  onQueryChange,
  onFilterChange,
}: ExplorerToolbarProps) {
  return (
    <>
      {definition.search?.enabled && (
        <input
          className="workspace-explorer-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={definition.search.placeholder}
        />
      )}

      {definition.filters && (
        <div className="workspace-explorer-filters">
          {definition.filters.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`workspace-explorer-filter ${
                filter === option.value ? 'active' : ''
              }`}
              onClick={() => onFilterChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}