import { useState } from 'react';
import './App.css';
import { MissionControlLayout } from './layouts/MissionControlLayout';
import { MissionControlPage } from './domains/mission-control';
import { ArtifactExplorerPage } from './domains/artifacts';

import type { AppView } from './services/navigation';

type ActiveView = AppView;

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('mission-control');

  return (
    <MissionControlLayout activeView={activeView} onNavigate={setActiveView}>
      {activeView === 'mission-control' && <MissionControlPage />}
      {activeView === 'artifacts' && <ArtifactExplorerPage />}
    </MissionControlLayout>
  );
}

export default App;