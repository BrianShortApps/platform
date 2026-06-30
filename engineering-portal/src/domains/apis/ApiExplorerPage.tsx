import { DomainExplorer } from '../../components/DomainExplorer';
import { ExplorerCard } from '../../components/ExplorerCard';
import {
  apiService,
  loadApiExplorerDefinition,
} from '../../services/apis';

export function ApiExplorerPage() {
  return (
    <DomainExplorer
      definition={loadApiExplorerDefinition()}
      items={apiService.all()}
      searchItems={apiService.search}
      getFilterValue={(api) => api.type}
      renderItem={(api) => (
        <ExplorerCard
          key={api.id}
          eyebrow={api.name}
          title={api.basePath}
          description={api.description}
          badge={api.status}
          metadata={[
            {
              label: 'Type',
              value: api.type,
            },
            {
              label: 'Owner',
              value: api.owner,
            },
            {
              label: 'Provider',
              value: api.provider,
            },
            {
              label: 'Service',
              value: api.service,
            },
          ]}
        />
      )}
      emptyTitle="No APIs found"
      emptyDescription="Try adjusting the search query or selected filter."
    />
  );
}