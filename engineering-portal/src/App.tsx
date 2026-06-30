import { useState } from 'react';
import './App.css';
import { MissionControlLayout } from './layouts/MissionControlLayout';
import { MissionControlPage } from './domains/mission-control';
import { FrameworkShowcasePage } from './domains/framework-showcase';
import { ArtifactExplorerPage } from './domains/artifacts';
import { RepositoryExplorerPage } from './domains/repositories';
import { ServiceExplorerPage } from './domains/services';

import type { AppView } from './services/navigation';

type ActiveView = AppView;

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('framework-showcase');

  return (
    <MissionControlLayout activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'mission-control' && <MissionControlPage />}
      {activeView === 'framework-showcase' && <FrameworkShowcasePage />}
      {activeView === 'artifacts' && <ArtifactExplorerPage />}
      {activeView === 'repositories' && <RepositoryExplorerPage />}
      {activeView === 'services' && <ServiceExplorerPage />}
    </MissionControlLayout>
  );
}

export default App;