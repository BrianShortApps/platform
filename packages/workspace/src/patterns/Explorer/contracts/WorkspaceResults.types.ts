import type { WorkspaceEntity } from "./WorkspaceEntity.types.js";
import type { ExplorerViewMode } from "../ExplorerArtifact.types.js";

export type WorkspaceResultsDefinition = {
  entities: WorkspaceEntity[];
  selectedEntityId?: string | null;
  viewMode?: ExplorerViewMode;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  onSelectEntity?: (entity: WorkspaceEntity) => void;
};