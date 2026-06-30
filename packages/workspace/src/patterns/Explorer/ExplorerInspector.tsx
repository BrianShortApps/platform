import type { ReactNode } from "react";
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
  if (isLoading) {
    return (
      <aside className="workspace-explorer-inspector">
        <div className="workspace-explorer-inspector-skeleton-heading" />
        <div className="workspace-explorer-inspector-skeleton-stack">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="workspace-explorer-inspector-skeleton-line"
            />
          ))}
        </div>
      </aside>
    );
  }

  if (!artifact) {
    return (
      <aside className="workspace-explorer-inspector-empty">
        <div className="workspace-explorer-empty-icon">ⓘ</div>
        <h3 className="workspace-explorer-empty-title">{emptyTitle}</h3>
        <p className="workspace-explorer-empty-description">
          {emptyDescription}
        </p>
      </aside>
    );
  }

  return (
    <aside className="workspace-explorer-inspector">
      <div className="workspace-explorer-inspector-header">
        <div>
          <p className="workspace-explorer-inspector-eyebrow">Inspector</p>
          <h2 className="workspace-explorer-inspector-title">
            {artifact.name}
          </h2>
          <p className="workspace-explorer-inspector-subtitle">
            {artifact.type}
          </p>
        </div>

        {artifact.status && (
          <span className="workspace-explorer-status">
            {artifact.status}
          </span>
        )}
      </div>

      <div className="workspace-explorer-inspector-content">
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
            <p className="workspace-explorer-muted">
              No relationships available.
            </p>
          ) : (
            <div className="workspace-explorer-relationship-list">
              {relationships.map((relationship) => (
                <div
                  key={relationship.id}
                  className="workspace-explorer-relationship-card"
                >
                  <p className="workspace-explorer-relationship-label">
                    {relationship.label}
                  </p>
                  <p className="workspace-explorer-relationship-name">
                    {relationship.artifactName}
                  </p>
                  <p className="workspace-explorer-relationship-type">
                    {relationship.artifactType}
                  </p>
                </div>
              ))}
            </div>
          )}
        </InspectorSection>

        <InspectorSection title="Version History">
          {versions.length === 0 ? (
            <p className="workspace-explorer-muted">No versions available.</p>
          ) : (
            <div className="workspace-explorer-version-table-wrap">
              <table className="workspace-explorer-version-table">
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Date</th>
                    <th>Author</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((version) => (
                    <tr key={`${version.version}-${version.date}`}>
                      <td>v{version.version}</td>
                      <td>{version.date}</td>
                      <td>{version.author}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </InspectorSection>

        <InspectorSection title="Preview">
          {previewContent ? (
            <pre className="workspace-explorer-preview">
              {previewContent}
            </pre>
          ) : (
            <p className="workspace-explorer-muted">Preview not available.</p>
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
    <section className="workspace-explorer-inspector-section">
      <h3 className="workspace-explorer-inspector-section-title">
        {title}
      </h3>
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
    <dl className="workspace-explorer-description-list">
      {items.map(([label, value]) => (
        <div key={label} className="workspace-explorer-description-item">
          <dt>{label}</dt>
          <dd>{value || "—"}</dd>
        </div>
      ))}
    </dl>
  );
}