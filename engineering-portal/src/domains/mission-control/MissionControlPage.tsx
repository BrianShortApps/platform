import {
  PortalCard,
  PortalDashboard,
  PortalDashboardActivity,
  PortalDashboardMetrics,
  PortalDashboardPanels,
  PortalMetric,
  PortalSection,
} from "../../../../packages/portal/src";

export function MissionControlPage() {
  return (
    <PortalDashboard>
      <PortalSection
        title="Platform Overview"
        description="Live foundation status for the BrianShortApps engineering platform."
      >
        <PortalDashboardMetrics>
          <PortalMetric
            label="Portal Modules"
            value="2"
            trend="Registry active"
          />
          <PortalMetric
            label="Reusable Packages"
            value="3"
            trend="Portal online"
          />
          <PortalMetric label="Foundation" value="007" trend="PF-007 active" />
          <PortalMetric label="Build Status" value="Pass" trend="Ready" />
        </PortalDashboardMetrics>
      </PortalSection>

      <PortalSection
        title="Operational Focus"
        description="Current workstreams moving the platform toward reusable application delivery."
      >
        <PortalDashboardPanels>
          <PortalCard
            title="Platform Status"
            subtitle="Current operational view of the BrianShortApps platform."
          >
            <p>
              Portal Foundation is hosting the Engineering Portal through a
              reusable runtime, module registry, shell, workspace, and status
              bar.
            </p>
          </PortalCard>

          <PortalCard
            title="Recent Platform Activity"
            subtitle="Latest Portal Foundation milestones."
          >
            <PortalDashboardActivity
              items={[
                {
                  id: "pf-009",
                  title: "Dashboard pattern added",
                  description:
                    "Mission Control now uses reusable Portal dashboard patterns.",
                  timestamp: "Current session",
                  status: "success",
                },
                {
                  id: "pf-008",
                  title: "Composite workspace established",
                  description:
                    "Workspace now composes Portal primitives instead of custom UI.",
                  timestamp: "Earlier today",
                  status: "info",
                },
                {
                  id: "pf-007",
                  title: "Mission Control rebuilt",
                  description:
                    "Dashboard now uses Portal cards, metrics, sections, and grids.",
                  timestamp: "Earlier today",
                  status: "success",
                },
              ]}
            />
          </PortalCard>
        </PortalDashboardPanels>
      </PortalSection>
    </PortalDashboard>
  );
}
