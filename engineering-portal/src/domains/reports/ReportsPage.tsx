import {
  PortalCard,
  PortalReportSummary,
  PortalReports,
  PortalSection,
} from "../../../../packages/portal/src";

export function ReportsPage() {
  return (
    <PortalReports>
      <PortalSection
        title="Platform Reports"
        description="Summary reporting for platform health, reusable foundations, and application readiness."
      >
        <PortalReportSummary
          items={[
            { id: "modules", label: "Modules", value: 5, trend: "Registered" },
            { id: "patterns", label: "Experiences", value: 5, trend: "Ready" },
            { id: "build", label: "Build", value: "Pass", trend: "Validated" },
            {
              id: "foundation",
              label: "Foundation",
              value: "007",
              trend: "Portal",
            },
          ]}
        />

        <PortalCard
          title="Foundation Status"
          subtitle="Portal Foundation is ready to support application-specific work."
        >
          <p>
            The Engineering Portal now demonstrates the Overview, Management,
            Explorer, Settings, and Reports experiences.
          </p>
        </PortalCard>
      </PortalSection>
    </PortalReports>
  );
}
