import type { WorkspaceEntity } from "./WorkspaceEntity.types.js";
import type { WorkspaceInspectorSection } from "./WorkspaceInspector.types.js";

export type WorkspaceAdapter<TSource> = {
  mapToEntity: (source: TSource) => WorkspaceEntity;
  buildInspectorSections: (source: TSource) => WorkspaceInspectorSection[];
};