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
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-xl border border-slate-200 bg-slate-100"
          />
        ))}
      </div>
    );
  }

  if (artifacts.length === 0) {
    return (
      <div className="flex min-h-80 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center">
        <div>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl">
            ◇
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{emptyTitle}</h3>
          <p className="mt-1 text-sm text-slate-500">{emptyDescription}</p>
        </div>
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {artifacts.map((artifact) => (
          <button
            key={artifact.id}
            type="button"
            onClick={() => onSelectArtifact?.(artifact)}
            className={`flex w-full items-start gap-4 border-b border-slate-100 p-4 text-left last:border-b-0 hover:bg-slate-50 ${
              selectedArtifactId === artifact.id ? "bg-blue-50" : ""
            }`}
          >
            <ArtifactIcon type={artifact.type} />
            <ArtifactSummary artifact={artifact} compact />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {artifacts.map((artifact) => (
        <button
          key={artifact.id}
          type="button"
          onClick={() => onSelectArtifact?.(artifact)}
          className={`rounded-xl border bg-white p-4 text-left shadow-sm transition hover:border-blue-300 hover:shadow-md ${
            selectedArtifactId === artifact.id
              ? "border-blue-500 ring-2 ring-blue-100"
              : "border-slate-200"
          }`}
        >
          <div className="mb-3 flex items-start justify-between gap-3">
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
    <div className="min-w-0 flex-1">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="truncate font-semibold text-slate-900">{artifact.name}</h3>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
          {artifact.type}
        </span>
      </div>

      {artifact.description && (
        <p className={`mt-1 text-sm text-slate-500 ${compact ? "" : "line-clamp-2"}`}>
          {artifact.description}
        </p>
      )}

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
        {artifact.version && <span>v{artifact.version}</span>}
        {artifact.owner && <span>{artifact.owner}</span>}
        {artifact.lastModified && <span>{artifact.lastModified}</span>}
      </div>

      {artifact.tags && artifact.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {artifact.tags.map((tag: string) => (
            <span
              key={tag}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-600"
            >
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
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
      {type.slice(0, 2).toUpperCase()}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium capitalize text-slate-700">
      {status}
    </span>
  );
}