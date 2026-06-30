import { DomainExplorer } from '../../components/DomainExplorer';
import { ExplorerCard } from '../../components/ExplorerCard';
import {
  engineeringServiceService,
  loadServiceExplorerDefinition,
} from '../../services/services';

export function ServiceExplorerPage() {
  return (
    <DomainExplorer
      definition={loadServiceExplorerDefinition()}
      items={engineeringServiceService.all()}
      searchItems={engineeringServiceService.search}
      getFilterValue={(service) => service.type}
      renderItem={(service) => (
        <ExplorerCard
          key={service.id}
          eyebrow={service.name}
          title={service.repository}
          description={service.description}
          badge={service.status}
          metadata={[
            {
              label: 'Type',
              value: service.type,
            },
            {
              label: 'Owner',
              value: service.owner,
            },
            {
              label: 'Technology',
              value: service.technology,
            },
            {
              label: 'Lifecycle',
              value: service.lifecycle,
            },
          ]}
        />
      )}
      emptyTitle="No services found"
      emptyDescription="Try adjusting the search query or selected filter."
    />
  );
}