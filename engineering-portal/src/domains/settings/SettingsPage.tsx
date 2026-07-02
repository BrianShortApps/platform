import {
  PortalBadge,
  PortalCard,
  PortalSection,
  PortalSettings,
  PortalSettingsGroup,
} from "../../../../packages/portal/src";

export function SettingsPage() {
  return (
    <PortalSettings>
      <PortalSection
        title="Portal Settings"
        description="Configuration surface for portal runtime and application preferences."
      >
        <PortalCard>
          <PortalSettingsGroup
            title="Runtime"
            description="Current local development configuration."
          >
            <PortalBadge variant="success">Theme: Dark</PortalBadge>
            <PortalBadge variant="info">Runtime: Local</PortalBadge>
            <PortalBadge variant="default">
              Module Registry: Enabled
            </PortalBadge>
          </PortalSettingsGroup>
        </PortalCard>
      </PortalSection>
    </PortalSettings>
  );
}
