import type {
  ExplorerArtifact,
  ExplorerRelationship,
  ExplorerVersion,
} from "./ExplorerArtifact.types.js";

import type { ReactNode } from "react";

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
  if (isLoading) {
    return (
      <aside className="h-full rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-6 h-6 w-2/3 animate-pulse rounded bg-slate-100" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-4 animate-pulse rounded bg-slate-100" />
          ))}
        </div>
      </aside>
    );
  }

  if (!artifact) {
    return (
      <aside className="flex h-full min-h-80 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
        <div>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
            ⓘ
          </div>
          <h3 className="text-base font-semibold text-slate-900">{emptyTitle}</h3>
          <p className="mt-1 text-sm text-slate-500">{emptyDescription}</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Inspector
            </p>
            <h2 className="mt-1 text-lg font-semibold text-slate-900">
              {artifact.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{artifact.type}</p>
          </div>

          {artifact.status && (
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium capitalize text-slate-700">
              {artifact.status}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-6 overflow-y-auto p-5">
        <InspectorSection title="Overview">
          <DescriptionList
            items={[
              ["Name", artifact.name],
              ["Description", artifact.description],
              ["Artifact ID", artifact.id],
              ["Workspace", artifact.workspace],
              ["Domain", artifact.domain],
            ]}
          />
        </InspectorSection>

        <InspectorSection title="Metadata">
          <DescriptionList
            items={[
              ["Owner", artifact.owner],
              ["Last Modified", artifact.lastModified],
              ["Version", artifact.version ? `v${artifact.version}` : undefined],
              ["Status", artifact.status],
            ]}
          />
        </InspectorSection>

        <InspectorSection title="Relationships">
          {relationships.length === 0 ? (
            <p className="text-sm text-slate-500">No relationships available.</p>
          ) : (
            <div className="space-y-2">
              {relationships.map((relationship) => (
                <div
                  key={relationship.id}
                  className="rounded-lg border border-slate-200 p-3"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {relationship.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {relationship.artifactName}
                  </p>
                  <p className="text-xs text-slate-500">
                    {relationship.artifactType}
                  </p>
                </div>
              ))}
            </div>
          )}
        </InspectorSection>

        <InspectorSection title="Version History">
          {versions.length === 0 ? (
            <p className="text-sm text-slate-500">No versions available.</p>
          ) : (
            <div className="overflow-hidden rounded-lg border border-slate-200">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-3 py-2 font-medium">Version</th>
                    <th className="px-3 py-2 font-medium">Date</th>
                    <th className="px-3 py-2 font-medium">Author</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((version) => (
                    <tr key={`${version.version}-${version.date}`} className="border-t border-slate-100">
                      <td className="px-3 py-2 font-medium text-slate-900">
                        v{version.version}
                      </td>
                      <td className="px-3 py-2 text-slate-500">{version.date}</td>
                      <td className="px-3 py-2 text-slate-500">{version.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </InspectorSection>

        <InspectorSection title="Preview">
          {previewContent ? (
            <pre className="max-h-64 overflow-auto rounded-lg bg-slate-950 p-3 text-xs text-slate-100">
              {previewContent}
            </pre>
          ) : (
            <p className="text-sm text-slate-500">Preview not available.</p>
          )}
        </InspectorSection>
      </div>
    </aside>
  );
}

function InspectorSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold text-slate-900">{title}</h3>
      {children}
    </section>
  );
}

function DescriptionList({
  items,
}: {
  items: Array<[string, string | undefined]>;
}) {
  return (
    <dl className="space-y-2">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {label}
          </dt>
          <dd className="mt-0.5 text-sm text-slate-800">{value || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}