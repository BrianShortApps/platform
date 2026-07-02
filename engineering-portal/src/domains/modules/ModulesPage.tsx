import {
  PortalBadge,
  PortalCard,
  PortalManagement,
  PortalManagementList,
  PortalSection,
} from "../../../../packages/portal/src";

export function ModulesPage() {
  return (
    <PortalManagement>
      <PortalSection
        title="Registered Modules"
        description="A management view of the modules currently registered in the Engineering Portal."
      >
        <PortalCard>
          <PortalManagementList
            items={[
              {
                id: "mission-control",
                title: "Mission Control",
                description: "System overview and platform command center.",
                meta: "Experience: Overview",
                status: <PortalBadge variant="success">Active</PortalBadge>,
              },
              {
                id: "artifacts",
                title: "Artifacts",
                description:
                  "Browse reusable artifacts, packages, and platform assets.",
                meta: "Experience: Explorer",
                status: <PortalBadge variant="info">Available</PortalBadge>,
              },
            ]}
          />
        </PortalCard>
      </PortalSection>
    </PortalManagement>
  );
}
