import type {
  WorkspaceEntity,
  WorkspaceInspectorSection,
} from "../../contracts/index.js";
import type {
  ExplorerArtifact,
  ExplorerRelationship,
  ExplorerVersion,
} from "../../ExplorerArtifact.types.js";

export function mapArtifactToEntity(
  artifact: ExplorerArtifact
): WorkspaceEntity {
  return {
    id: artifact.id,
    title: artifact.name,
    subtitle: artifact.type,
    description: artifact.description,
    status: artifact.status,
    metadata: [
      {
        label: "Version",
        value: artifact.version ? `v${artifact.version}` : undefined,
      },
      {
        label: "Owner",
        value: artifact.owner,
      },
      {
        label: "Last Modified",
        value: artifact.lastModified,
      },
    ],
    tags: artifact.tags,
  };
}

export function buildArtifactInspectorSections(
  artifact: ExplorerArtifact,
  relationships: ExplorerRelationship[] = [],
  versions: ExplorerVersion[] = [],
  previewContent?: string
): WorkspaceInspectorSection[] {
  return [
    {
      id: "overview",
      title: "Overview",
      items: [
        { label: "Name", value: artifact.name },
        { label: "Description", value: artifact.description },
        { label: "Artifact ID", value: artifact.id },
        { label: "Workspace", value: artifact.workspace },
        { label: "Domain", value: artifact.domain },
      ],
    },
    {
      id: "metadata",
      title: "Metadata",
      items: [
        { label: "Owner", value: artifact.owner },
        { label: "Last Modified", value: artifact.lastModified },
        {
          label: "Version",
          value: artifact.version ? `v${artifact.version}` : undefined,
        },
        { label: "Status", value: artifact.status },
      ],
    },
    {
      id: "relationships",
      title: "Relationships",
      content:
        relationships.length === 0 ? (
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
        ),
    },
    {
      id: "version-history",
      title: "Version History",
      content:
        versions.length === 0 ? (
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
        ),
    },
    {
      id: "preview",
      title: "Preview",
      content: previewContent ? (
        <pre className="workspace-explorer-preview">{previewContent}</pre>
      ) : (
        <p className="workspace-explorer-muted">Preview not available.</p>
      ),
    },
  ];
}

export const ArtifactWorkspaceAdapter = {
  mapToEntity: mapArtifactToEntity,
  buildInspectorSections: buildArtifactInspectorSections,
};