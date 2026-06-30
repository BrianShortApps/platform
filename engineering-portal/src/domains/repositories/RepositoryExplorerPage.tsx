import { DomainExplorer } from '../../components/DomainExplorer';
import { ExplorerCard } from '../../components/ExplorerCard';
import {
  repositoryService,
  loadRepositoryExplorerDefinition,
} from '../../services/repositories';

export function RepositoryExplorerPage() {
  return (
    <DomainExplorer
      definition={loadRepositoryExplorerDefinition()}
      items={repositoryService.all()}
      searchItems={repositoryService.search}
      getFilterValue={(repository) => repository.type}
      renderItem={(repository) => (
        <ExplorerCard
          key={repository.id}
          eyebrow={repository.name}
          title={repository.path}
          description={repository.description}
          badge={repository.status}
          metadata={[
            {
              label: 'Type',
              value: repository.type,
            },
            {
              label: 'Owner',
              value: repository.owner,
            },
            {
              label: 'Technology',
              value: repository.primaryTechnology,
            },
          ]}
        />
      )}
      emptyTitle="No repositories found"
      emptyDescription="Try adjusting the search query or selected filter."
    />
  );
}