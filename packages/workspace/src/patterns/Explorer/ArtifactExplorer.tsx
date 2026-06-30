import { WorkspaceExplorer } from "./WorkspaceExplorer.js";
import {
  buildArtifactInspectorSections,
  mapArtifactToEntity,
} from "./adapters/Artifact/index.js";
import type { ExplorerDefinition } from "./Explorer.types.js";
import type {
  ExplorerArtifact,
  ExplorerRelationship,
  ExplorerVersion,
  ExplorerViewMode,
} from "./ExplorerArtifact.types.js";

export type ArtifactExplorerProps = {
  definition: ExplorerDefinition;
  artifacts: ExplorerArtifact[];
  selectedArtifact?: ExplorerArtifact | null;
  selectedArtifactId?: string | null;
  relationships?: ExplorerRelationship[];
  versions?: ExplorerVersion[];
  previewContent?: string;
  viewMode?: ExplorerViewMode;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  inspectorEmptyTitle?: string;
  inspectorEmptyDescription?: string;
  onSelectArtifact?: (artifact: ExplorerArtifact) => void;
};

export function ArtifactExplorer({
  definition,
  artifacts,
  selectedArtifact,
  selectedArtifactId,
  relationships = [],
  versions = [],
  previewContent,
  viewMode = "grid",
  isLoading = false,
  emptyTitle = "No artifacts found.",
  emptyDescription = "Try adjusting your search or filters.",
  inspectorEmptyTitle = "Select an artifact",
  inspectorEmptyDescription = "Choose an artifact from the results to inspect its details.",
  onSelectArtifact,
}: ArtifactExplorerProps) {
  const entities = artifacts.map(mapArtifactToEntity);

  const resolvedSelectedArtifact =
    selectedArtifact ??
    artifacts.find((artifact) => artifact.id === selectedArtifactId) ??
    null;

  const inspectorSections = resolvedSelectedArtifact
    ? buildArtifactInspectorSections(
        resolvedSelectedArtifact,
        relationships,
        versions,
        previewContent
      )
    : [];

  return (
    <WorkspaceExplorer
      definition={definition}
      entities={entities}
      selectedEntity={
        resolvedSelectedArtifact
          ? mapArtifactToEntity(resolvedSelectedArtifact)
          : null
      }
      selectedEntityId={selectedArtifactId}
      inspectorSections={inspectorSections}
      viewMode={viewMode}
      isLoading={isLoading}
      emptyTitle={emptyTitle}
      emptyDescription={emptyDescription}
      inspectorEmptyTitle={inspectorEmptyTitle}
      inspectorEmptyDescription={inspectorEmptyDescription}
      onSelectEntity={(entity) => {
        const artifact = artifacts.find((item) => item.id === entity.id);
        if (artifact) {
          onSelectArtifact?.(artifact);
        }
      }}
    />
  );
}