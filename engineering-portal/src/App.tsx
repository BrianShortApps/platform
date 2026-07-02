import { useState } from "react";
import {
  getNavigationFromPortalModules,
  getPortalModuleById,
  PortalLayout,
  PortalProvider,
} from "../../packages/portal/src";
import { ArtifactExplorerPage } from "./domains/artifacts";
import { MissionControlPage } from "./domains/mission-control";

import type { PortalModule } from "../../packages/portal/src";

const modules: PortalModule[] = [
  {
    id: "mission-control",
    title: "Mission Control",
    component: MissionControlPage,
    order: 1,
  },
  {
    id: "artifacts",
    title: "Artifacts",
    component: ArtifactExplorerPage,
    order: 2,
  },
];

function App() {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const activeModule = getPortalModuleById(modules, activeModuleId);
  const ActiveModuleComponent = activeModule?.component;

  return (
    <PortalProvider
      value={{
        appName: "BrianShortApps Engineering Portal",
        theme: "dark",
        currentUser: {
          id: "local-dev",
          name: "Local Developer",
          permissions: ["engineering:read"],
        },
        navigation: getNavigationFromPortalModules(modules),
        activeNavigationItemId: activeModule?.id,
        onNavigate: setActiveModuleId,
        statusItems: [
          {
            id: "environment",
            label: "Environment",
            value: "Local",
          },
          {
            id: "version",
            label: "Foundation",
            value: "PF-002",
          },
        ],
      }}
    >
      <PortalLayout>
        {ActiveModuleComponent ? <ActiveModuleComponent /> : null}
      </PortalLayout>
    </PortalProvider>
  );
}

export default App;
