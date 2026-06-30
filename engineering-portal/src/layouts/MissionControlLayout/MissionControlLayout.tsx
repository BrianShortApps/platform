import './MissionControlLayout.css';
import { loadNavigation } from '../../services/navigation';
import { loadMissionMetadata, loadSystemStatus } from '../../services/system';

import type { AppView } from '../../services/navigation';

import {
  getExplorerStatusGlyph,
  getExplorerStatusLabel,
} from '../../services/explorers';

type MissionControlLayoutProps = {
  children: React.ReactNode;
  activeView: string;
  onNavigate: (view: AppView) => void;
};

export function MissionControlLayout({
  children,
  activeView,
  onNavigate,
}: MissionControlLayoutProps) {
    const navigation = loadNavigation();
    const missionItems = navigation.filter((item) => item.group === 'mission');
    const domainItems = navigation.filter((item) => item.group === 'domains');
    const systemItems = navigation.filter((item) => item.group === 'system');
    const statusItems = loadSystemStatus();
    const mission = loadMissionMetadata();
  return (
    <div className="mc-layout">
      <header className="mc-header">
        <div>
            <span className="mc-kicker">{mission.organization}</span>
            <strong>{mission.product}</strong>
        </div>

        <div className="mc-header-status">
            <span>{mission.foundation}</span>
            <span>{mission.sprint}</span>
            <span>{mission.sprintName}</span>
            <strong>{mission.status}</strong>
        </div>
      </header>

      <aside className="mc-sidebar">
        <nav>
            {missionItems.map((item) => (
                <button
                type="button"
                className={activeView === item.id ? 'active' : ''}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                >
                {item.label}
                </button>
            ))}

            <hr />

            {domainItems.map((item) => (
                <button
                type="button"
                className={`mc-nav-item ${activeView === item.id ? 'active' : ''}`}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                >
                <span>{item.label}</span>

                {item.status && (
                  <span
                    className={`mc-nav-status mc-nav-status-${item.status}`}
                    title={getExplorerStatusLabel(item.status)}
                    aria-label={getExplorerStatusLabel(item.status)}
                  >
                    {getExplorerStatusGlyph(item.status)}
                  </span>
                )}
                </button>
            ))}

            <hr />

            {systemItems.map((item) => (
                <button
                type="button"
                className={activeView === item.id ? 'active' : ''}
                key={item.id}
                onClick={() => onNavigate(item.id)}
                >
                {item.label}
                </button>
            ))}
        </nav>
      </aside>

      <main className="mc-workspace">{children}</main>

      <footer className="mc-statusbar">
        {statusItems.map((item) => (
            <span key={item.label}>
            {item.label}: {item.value}
            </span>
        ))}
      </footer>
    </div>
  );
}