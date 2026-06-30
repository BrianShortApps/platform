import type { WorkspaceEntity, WorkspaceInspectorSection } from "./contracts/index.js";

export type WorkspaceInspectorProps = {
  entity?: WorkspaceEntity | null;
  sections?: WorkspaceInspectorSection[];
  isLoading?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
};

export function WorkspaceInspector({
  entity,
  sections = [],
  isLoading = false,
  emptyTitle = "Select an item",
  emptyDescription = "Choose an item from the results to inspect its details.",
}: WorkspaceInspectorProps) {
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

  if (!entity) {
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
            {entity.title}
          </h2>
          {entity.subtitle && (
            <p className="workspace-explorer-inspector-subtitle">
              {entity.subtitle}
            </p>
          )}
        </div>

        {entity.status && (
          <span className="workspace-explorer-status">{entity.status}</span>
        )}
      </div>

      <div className="workspace-explorer-inspector-content">
        {sections.length === 0 ? (
          <p className="workspace-explorer-muted">
            No inspector sections available.
          </p>
        ) : (
          sections.map((section) => (
            <section
              key={section.id}
              className="workspace-explorer-inspector-section"
            >
              <h3 className="workspace-explorer-inspector-section-title">
                {section.title}
              </h3>

              {section.description && (
                <p className="workspace-explorer-muted">
                  {section.description}
                </p>
              )}

              {section.items && section.items.length > 0 && (
                <dl className="workspace-explorer-description-list">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="workspace-explorer-description-item"
                    >
                      <dt>{item.label}</dt>
                      <dd>{item.value || "—"}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {section.content}
            </section>
          ))
        )}
      </div>
    </aside>
  );
}