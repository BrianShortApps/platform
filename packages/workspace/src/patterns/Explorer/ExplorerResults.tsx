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
  if (isLoading) {
    return (
      <div className="workspace-explorer-results-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="workspace-explorer-result-skeleton" />
        ))}
      </div>
    );
  }

  if (artifacts.length === 0) {
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
        {artifacts.map((artifact) => (
          <button
            key={artifact.id}
            type="button"
            onClick={() => onSelectArtifact?.(artifact)}
            className={[
              "workspace-explorer-result-row",
              selectedArtifactId === artifact.id
                ? "workspace-explorer-result-row--selected"
                : "",
            ].join(" ")}
          >
            <ArtifactIcon type={artifact.type} />
            <ArtifactSummary artifact={artifact} compact />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="workspace-explorer-results-grid">
      {artifacts.map((artifact) => (
        <button
          key={artifact.id}
          type="button"
          onClick={() => onSelectArtifact?.(artifact)}
          className={[
            "workspace-explorer-result-card",
            selectedArtifactId === artifact.id
              ? "workspace-explorer-result-card--selected"
              : "",
          ].join(" ")}
        >
          <div className="workspace-explorer-result-card-header">
            <ArtifactIcon type={artifact.type} />
            {artifact.status && <StatusBadge status={artifact.status} />}
          </div>

          <ArtifactSummary artifact={artifact} />
        </button>
      ))}
    </div>
  );
}

function ArtifactSummary({
  artifact,
  compact = false,
}: {
  artifact: ExplorerArtifact;
  compact?: boolean;
}) {
  return (
    <div className="workspace-explorer-artifact-summary">
      <div className="workspace-explorer-artifact-heading">
        <h3 className="workspace-explorer-artifact-title">{artifact.name}</h3>
        <span className="workspace-explorer-artifact-type">
          {artifact.type}
        </span>
      </div>

      {artifact.description && (
        <p
          className={[
            "workspace-explorer-artifact-description",
            compact ? "" : "workspace-explorer-artifact-description--clamped",
          ].join(" ")}
        >
          {artifact.description}
        </p>
      )}

      <div className="workspace-explorer-artifact-meta">
        {artifact.version && <span>v{artifact.version}</span>}
        {artifact.owner && <span>{artifact.owner}</span>}
        {artifact.lastModified && <span>{artifact.lastModified}</span>}
      </div>

      {artifact.tags && artifact.tags.length > 0 && (
        <div className="workspace-explorer-artifact-tags">
          {artifact.tags.map((tag: string) => (
            <span key={tag} className="workspace-explorer-artifact-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function ArtifactIcon({ type }: { type: string }) {
  return (
    <div className="workspace-explorer-artifact-icon">
      {type.slice(0, 2).toUpperCase()}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="workspace-explorer-status">
      {status}
    </span>
  );
}