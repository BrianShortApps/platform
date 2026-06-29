import type { WorkspaceShellDefinition } from '@bsa/workspace';
import { loadNavigation } from '../navigation';
import { loadMissionMetadata } from './missionMetadataService';
import { loadSystemStatus } from './systemStatusService';

export function loadWorkspaceShell(): WorkspaceShellDefinition {
  const mission = loadMissionMetadata();

  return {
    title: mission.product,
    organization: mission.organization,
    foundation: mission.foundation,
    sprint: mission.sprint,
    sprintName: mission.sprintName,
    status: 'healthy',
    navigation: loadNavigation(),
    statusItems: loadSystemStatus(),
  };
}