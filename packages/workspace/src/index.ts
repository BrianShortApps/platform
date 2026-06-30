export type {
  WorkspaceDefinition,
  WorkspaceSection,
} from './types.js';

export type {
  WorkspaceNavigationItem,
  WorkspaceShellDefinition,
  WorkspaceStatus,
  WorkspaceStatusItem,
} from './contracts/index.js';

export type {
  ExplorerDefinition,
  ExplorerFilterOption,
  ExplorerSearchDefinition,
  ExplorerArtifact,
  ExplorerArtifactStatus,
  ExplorerRelationship,
  ExplorerVersion,
  ExplorerViewMode,
  WorkspaceEntity,
  WorkspaceEntityMetadata,
  WorkspaceEntityStatus,
  WorkspaceInspectorDefinition,
  WorkspaceInspectorDescriptionItem,
  WorkspaceInspectorSection,
  WorkspaceResultsDefinition,
  WorkspaceResultsProps,
  WorkspaceExplorerProps,
  ArtifactExplorerProps,
} from './patterns/Explorer/index.js';

export type {
  ExplorerProps,
  ExplorerToolbarProps,
  ExplorerResultsProps,
  ExplorerInspectorProps,
  WorkspaceInspectorProps,
  WorkspaceAdapter,
  ExplorerRegistryEntry,
} from './patterns/Explorer/index.js';

export {
  Explorer,
  ExplorerToolbar,
  ExplorerResults,
  ExplorerInspector,
  WorkspaceResults,
  WorkspaceInspector,
  WorkspaceExplorer,
  ArtifactExplorer,
  ArtifactWorkspaceAdapter,
  getRegisteredExplorer,
  listRegisteredExplorers,
  registerExplorer,
} from './patterns/Explorer/index.js';