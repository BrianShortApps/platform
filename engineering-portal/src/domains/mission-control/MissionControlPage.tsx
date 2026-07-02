import {
  PortalCard,
  PortalMetric,
  PortalSection,
} from "../../../../packages/portal/src";

export function MissionControlPage() {
  return (
    <div className="mission-control">
      <PortalSection
        title="Platform Overview"
        description="Live foundation status for the BrianShortApps engineering platform."
      >
        <section className="mission-control__metrics">
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
        </section>
      </PortalSection>

      <PortalSection
        title="Operational Focus"
        description="Current workstreams moving the platform toward reusable application delivery."
      >
        <section className="mission-control__grid">
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
            title="Next Workstream"
            subtitle="Where the platform moves after this dashboard rebuild."
          >
            <p>
              Continue converting application UI into shared Portal primitives
              so future apps inherit the same professional interface.
            </p>
          </PortalCard>
        </section>
      </PortalSection>
    </div>
  );
}
