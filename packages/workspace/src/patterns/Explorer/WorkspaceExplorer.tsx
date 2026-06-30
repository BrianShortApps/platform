import { Explorer } from "./Explorer.js";
import { WorkspaceInspector } from "./WorkspaceInspector.js";
import { WorkspaceResults } from "./WorkspaceResults.js";
import type { ExplorerDefinition } from "./Explorer.types.js";
import type {
  WorkspaceEntity,
  WorkspaceInspectorSection,
} from "./contracts/index.js";
import type { ExplorerViewMode } from "./ExplorerArtifact.types.js";

export type WorkspaceExplorerProps = {
  definition: ExplorerDefinition;
  entities: WorkspaceEntity[];
  selectedEntity?: WorkspaceEntity | null;
  selectedEntityId?: string | null;
  inspectorSections?: WorkspaceInspectorSection[];
  viewMode?: ExplorerViewMode;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  inspectorEmptyTitle?: string;
  inspectorEmptyDescription?: string;
  onSelectEntity?: (entity: WorkspaceEntity) => void;
};

export function WorkspaceExplorer({
  definition,
  entities,
  selectedEntity,
  selectedEntityId,
  inspectorSections = [],
  viewMode = "grid",
  isLoading = false,
  emptyTitle,
  emptyDescription,
  inspectorEmptyTitle,
  inspectorEmptyDescription,
  onSelectEntity,
}: WorkspaceExplorerProps) {
  const resolvedSelectedEntity =
    selectedEntity ??
    entities.find((entity) => entity.id === selectedEntityId) ??
    null;

  return (
    <Explorer definition={definition}>
      <div className="workspace-explorer-main">
        <WorkspaceResults
          entities={entities}
          selectedEntityId={resolvedSelectedEntity?.id ?? selectedEntityId}
          viewMode={viewMode}
          isLoading={isLoading}
          emptyTitle={emptyTitle}
          emptyDescription={emptyDescription}
          onSelectEntity={onSelectEntity}
        />

        <WorkspaceInspector
          entity={resolvedSelectedEntity}
          sections={inspectorSections}
          isLoading={isLoading}
          emptyTitle={inspectorEmptyTitle}
          emptyDescription={inspectorEmptyDescription}
        />
      </div>
    </Explorer>
  );
}