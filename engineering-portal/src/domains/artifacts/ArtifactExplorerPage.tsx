import { DomainExplorer } from '../../components/DomainExplorer';
import { ArtifactCard } from '../../components/ArtifactCard';
import {
  artifactService,
  loadArtifactExplorerDefinition,
} from '../../services/artifacts';

export function ArtifactExplorerPage() {
  return (
    <DomainExplorer
      definition={loadArtifactExplorerDefinition()}
      items={artifactService.all()}
      searchItems={artifactService.search}
      getFilterValue={(artifact) => artifact.type}
      renderItem={(artifact) => (
        <ArtifactCard artifact={artifact} key={artifact.id} />
      )}
      emptyTitle="No artifacts found"
      emptyDescription="Try adjusting the search query or selected filter."
    />
  );
}