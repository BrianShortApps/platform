import { WorkspaceInspector } from "./WorkspaceInspector.js";
import {
  buildArtifactInspectorSections,
  mapArtifactToEntity,
} from "./adapters/Artifact/index.js";
import type {
  ExplorerArtifact,
  ExplorerRelationship,
  ExplorerVersion,
} from "./ExplorerArtifact.types.js";

export type ExplorerInspectorProps = {
  artifact?: ExplorerArtifact | null;
  relationships?: ExplorerRelationship[];
  versions?: ExplorerVersion[];
  previewContent?: string;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
};

export function ExplorerInspector({
  artifact,
  relationships = [],
  versions = [],
  previewContent,
  isLoading = false,
  emptyTitle = "Select an artifact",
  emptyDescription = "Choose an artifact from the results to inspect its details.",
}: ExplorerInspectorProps) {
  const entity = artifact ? mapArtifactToEntity(artifact) : null;
  const sections = artifact
    ? buildArtifactInspectorSections(artifact, relationships, versions, previewContent)
    : [];

  return (
    <WorkspaceInspector
      entity={entity}
      sections={sections}
      isLoading={isLoading}
      emptyTitle={emptyTitle}
      emptyDescription={emptyDescription}
    />
  );
}