import { loadArtifacts } from './artifactService';

export function getArtifactStats() {
  const artifacts = loadArtifacts();

  return {
    total: artifacts.length,
    stable: artifacts.filter((artifact) => artifact.status === 'stable').length,
    draft: artifacts.filter((artifact) => artifact.status === 'draft').length,
    standards: artifacts.filter((artifact) => artifact.type === 'standard').length,
  };
}