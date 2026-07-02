import { useState } from "react";
import { PortalLayout, PortalRuntime } from "../../packages/portal/src";
import { ArtifactExplorerPage } from "./domains/artifacts";
import { MissionControlPage } from "./domains/mission-control";

import type { PortalModule } from "../../packages/portal/src";

const modules: PortalModule[] = [
  {
    id: "mission-control",
    title: "Mission Control",
    component: MissionControlPage,
    order: 1,
    statusItems: [{ id: "module", label: "Module", value: "Mission Control" }],
  },
  {
    id: "artifacts",
    title: "Artifacts",
    component: ArtifactExplorerPage,
    order: 2,
    statusItems: [{ id: "module", label: "Module", value: "Artifacts" }],
  },
];

function App() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);

  const activeModule = modules.find((module) => module.id === activeModuleId);
  const ActiveModuleComponent = activeModule?.component;

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
          value: "PF-003",
        },
      ]}
    >
      <PortalLayout>
        {ActiveModuleComponent ? <ActiveModuleComponent /> : null}
      </PortalLayout>
    </PortalRuntime>
  );
}

export default App;
