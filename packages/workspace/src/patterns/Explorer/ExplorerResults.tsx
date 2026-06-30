import { WorkspaceResults } from "./WorkspaceResults.js";
import { mapArtifactToEntity } from "./adapters/Artifact/index.js";
import type { ExplorerArtifact, ExplorerViewMode } from "./ExplorerArtifact.types.js";

export type ExplorerResultsProps = {
  artifacts: ExplorerArtifact[];
  selectedArtifactId?: string | null;
  viewMode?: ExplorerViewMode;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  onSelectArtifact?: (artifact: ExplorerArtifact) => void;
};

export function ExplorerResults({
  artifacts,
  selectedArtifactId,
  viewMode = "grid",
  isLoading = false,
  emptyTitle = "No artifacts found.",
  emptyDescription = "Try adjusting your search or filters.",
  onSelectArtifact,
}: ExplorerResultsProps) {
  const entities = artifacts.map(mapArtifactToEntity);

  return (
    <WorkspaceResults
      entities={entities}
      selectedEntityId={selectedArtifactId}
      viewMode={viewMode}
      isLoading={isLoading}
      emptyTitle={emptyTitle}
      emptyDescription={emptyDescription}
      onSelectEntity={(entity) => {
        const artifact = artifacts.find((item) => item.id === entity.id);
        if (artifact) {
          onSelectArtifact?.(artifact);
        }
      }}
    />
  );
}