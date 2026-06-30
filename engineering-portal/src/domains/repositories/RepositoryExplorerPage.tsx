import { DomainExplorer } from '../../components/DomainExplorer';
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
      )}
      emptyTitle="No repositories found"
      emptyDescription="Try adjusting the search query or selected filter."
    />
  );
}