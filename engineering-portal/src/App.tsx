import { useState } from 'react';
import './App.css';
import { MissionControlLayout } from './layouts/MissionControlLayout';
import { MissionControlPage } from './domains/mission-control';
import { FrameworkShowcasePage } from './domains/framework-showcase';
import { getExplorerById } from './services/explorers';
import { PlatformConstitutionPage } from './domains/constitution';

import type { ActiveExplorerId } from './services/explorers';
import type { AppView } from './services/navigation';

type ActiveView = AppView;

function isActiveExplorerId(view: ActiveView): view is ActiveExplorerId {
  return [
    'artifacts',
    'repositories',
    'services',
    'apis',
    'documentation',
    'workflows',
  ].includes(view);
}

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('framework-showcase');

  const activeExplorer = isActiveExplorerId(activeView)
    ? getExplorerById(activeView)
    : undefined;

  const ActiveExplorerComponent = activeExplorer?.component;

  return (
  <MissionControlLayout activeView={activeView} onNavigate={setActiveView}>
    {activeView === 'mission-control' && <MissionControlPage />}

    {activeView === 'framework-showcase' && (
      <FrameworkShowcasePage onNavigate={setActiveView} />
    )}

    {activeView === 'platform-constitution' && <PlatformConstitutionPage />}

    {ActiveExplorerComponent && <ActiveExplorerComponent />}
  </MissionControlLayout>
);
}

export default App;