import {
  Badge,
  Button,
  MetricCard,
  WorkspaceBrand,
  WorkspaceHeader,
  WorkspaceLayout,
  WorkspaceSidebar,
  type WorkspaceNavItem,
} from "./design";

import "./App.css";

const navItems: WorkspaceNavItem[] = [
  { label: "Overview", href: "#", active: true },
  { label: "Artifacts", href: "#" },
  { label: "Repositories", href: "#" },
  { label: "System Health", href: "#" },
];

function App() {
  return (
    <WorkspaceLayout
      sidebar={
        <WorkspaceSidebar
          brand={
            <WorkspaceBrand
              name="BrianShortApps"
              description="Engineering Portal"
              mark="B"
            />
          }
          items={navItems}
          footer={<Badge variant="info">Foundation 003</Badge>}
        />
      }
      header={
        <WorkspaceHeader
          eyebrow="Workspace"
          title="Engineering Portal"
          description="A centralized workspace for BrianShortApps engineering systems, artifacts, services, and platform foundations."
          meta={<Badge variant="success">Design System Active</Badge>}
          actions={<Button>New Artifact</Button>}
        />
      }
    >
      <div className="dashboard-grid">
        <MetricCard
          label="Design System"
          value="10"
          description="Core components available"
          status="Healthy"
          tone="success"
        />

        <MetricCard
          label="Workspace Shell"
          value="4"
          description="Layout components completed"
          status="In Progress"
          tone="info"
        />

        <MetricCard
          label="Foundation"
          value="003"
          description="Current platform sprint"
          status="Active"
          tone="success"
        />
      </div>
    </WorkspaceLayout>
  );
}

export default App;