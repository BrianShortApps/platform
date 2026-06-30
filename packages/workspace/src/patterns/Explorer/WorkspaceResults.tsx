import type { WorkspaceEntity } from "./contracts/index.js";
import type { ExplorerViewMode } from "./ExplorerArtifact.types.js";

export type WorkspaceResultsProps = {
  entities: WorkspaceEntity[];
  selectedEntityId?: string | null;
  viewMode?: ExplorerViewMode;
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
  onSelectEntity?: (entity: WorkspaceEntity) => void;
};

export function WorkspaceResults({
  entities,
  selectedEntityId,
  viewMode = "grid",
  isLoading = false,
  emptyTitle = "No results found.",
  emptyDescription = "Try adjusting your search or filters.",
  onSelectEntity,
}: WorkspaceResultsProps) {
  if (isLoading) {
    return (
      <div className="workspace-explorer-results-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="workspace-explorer-result-skeleton" />
        ))}
      </div>
    );
  }

  if (entities.length === 0) {
    return (
      <div className="workspace-explorer-empty">
        <div className="workspace-explorer-empty-icon">◇</div>
        <h3 className="workspace-explorer-empty-title">{emptyTitle}</h3>
        <p className="workspace-explorer-empty-description">
          {emptyDescription}
        </p>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="workspace-explorer-results-list">
        {entities.map((entity) => (
          <button
            key={entity.id}
            type="button"
            onClick={() => onSelectEntity?.(entity)}
            className={[
              "workspace-explorer-result-row",
              selectedEntityId === entity.id
                ? "workspace-explorer-result-row--selected"
                : "",
            ].join(" ")}
          >
            <EntityIcon entity={entity} />
            <EntitySummary entity={entity} compact />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="workspace-explorer-results-grid">
      {entities.map((entity) => (
        <button
          key={entity.id}
          type="button"
          onClick={() => onSelectEntity?.(entity)}
          className={[
            "workspace-explorer-result-card",
            selectedEntityId === entity.id
              ? "workspace-explorer-result-card--selected"
              : "",
          ].join(" ")}
        >
          <div className="workspace-explorer-result-card-header">
            <EntityIcon entity={entity} />
            {entity.status && <StatusBadge status={entity.status} />}
          </div>

          <EntitySummary entity={entity} />
        </button>
      ))}
    </div>
  );
}

function EntitySummary({
  entity,
  compact = false,
}: {
  entity: WorkspaceEntity;
  compact?: boolean;
}) {
  return (
    <div className="workspace-explorer-artifact-summary">
      <div className="workspace-explorer-artifact-heading">
        <h3 className="workspace-explorer-artifact-title">{entity.title}</h3>
        {entity.subtitle && (
          <span className="workspace-explorer-artifact-type">
            {entity.subtitle}
          </span>
        )}
      </div>

      {entity.description && (
        <p
          className={[
            "workspace-explorer-artifact-description",
            compact ? "" : "workspace-explorer-artifact-description--clamped",
          ].join(" ")}
        >
          {entity.description}
        </p>
      )}

      {entity.metadata && entity.metadata.length > 0 && (
        <div className="workspace-explorer-artifact-meta">
          {entity.metadata.map((item) =>
            item.value ? <span key={item.label}>{item.value}</span> : null
          )}
        </div>
      )}

      {entity.tags && entity.tags.length > 0 && (
        <div className="workspace-explorer-artifact-tags">
          {entity.tags.map((tag) => (
            <span key={tag} className="workspace-explorer-artifact-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function EntityIcon({ entity }: { entity: WorkspaceEntity }) {
  const label = entity.icon || entity.subtitle || entity.title;

  return (
    <div className="workspace-explorer-artifact-icon">
      {label.slice(0, 2).toUpperCase()}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return <span className="workspace-explorer-status">{status}</span>;
}