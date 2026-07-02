import { useState } from "react";
import { PortalRuntime } from "../../packages/portal/src";
import { ArtifactExplorerPage } from "./domains/artifacts";
import { MissionControlPage } from "./domains/mission-control";

import type { PortalModule } from "../../packages/portal/src";

import { ModulesPage } from "./domains/modules/ModulesPage";

import { SettingsPage } from "./domains/settings/SettingsPage";

const modules: PortalModule[] = [
  {
    id: "mission-control",
    title: "Mission Control",
    component: MissionControlPage,
    order: 1,
    statusItems: [{ id: "module", label: "Module", value: "Mission Control" }],
    description: "System overview and platform command center.",
  },
  {
    id: "artifacts",
    title: "Artifacts",
    component: ArtifactExplorerPage,
    order: 2,
    statusItems: [{ id: "module", label: "Module", value: "Artifacts" }],
    description: "Browse reusable artifacts, packages, and platform assets.",
  },
  {
    id: "modules",
    title: "Modules",
    description:
      "Manage registered portal modules and application capabilities.",
    component: ModulesPage,
    order: 3,
    statusItems: [{ id: "module", label: "Module", value: "Modules" }],
  },
  {
    id: "settings",
    title: "Settings",
    description: "Configure portal runtime and application preferences.",
    component: SettingsPage,
    order: 4,
    statusItems: [{ id: "module", label: "Module", value: "Settings" }],
  },
];

function App() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);

  return (
    <PortalRuntime
      appName="BrianShortApps Engineering Portal"
      modules={modules}
      activeModuleId={activeModuleId}
      currentUser={{
        id: "local-dev",
        name: "Local Developer",
        permissions: ["engineering:read"],
      }}
      theme="dark"
      onNavigate={setActiveModuleId}
      statusItems={[
        {
          id: "environment",
          label: "Environment",
          value: "Local",
        },
        {
          id: "foundation",
          label: "Foundation",
          value: "PF-004",
        },
      ]}
    />
  );
}

export default App;
