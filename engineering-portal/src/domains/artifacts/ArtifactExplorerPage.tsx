import {
  PortalCard,
  PortalExplorer,
  PortalExplorerList,
  PortalSection,
} from "../../../../packages/portal/src";

export function ArtifactExplorerPage() {
  return (
    <PortalExplorer>
      <PortalSection
        title="Artifact Explorer"
        description="Browse reusable packages, platform assets, and engineering artifacts."
      >
        <PortalCard>
          <PortalExplorerList
            items={[
              {
                id: "portal",
                title: "@brianshortapps/portal",
                description:
                  "Reusable application shell, runtime, patterns, and Portal components.",
                type: "Package",
              },
              {
                id: "workspace",
                title: "@brianshortapps/workspace",
                description:
                  "Reusable workspace and explorer framework for platform domains.",
                type: "Package",
              },
              {
                id: "knowledge",
                title: "@brianshortapps/knowledge",
                description:
                  "Structured engineering knowledge contracts and relationships.",
                type: "Package",
              },
            ]}
          />
        </PortalCard>
      </PortalSection>
    </PortalExplorer>
  );
}
