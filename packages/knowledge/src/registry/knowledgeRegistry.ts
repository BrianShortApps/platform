import type { KnowledgeNode } from '../knowledge.types';

export class KnowledgeRegistry {
  private readonly nodes = new Map<string, KnowledgeNode>();

  register(nodes: KnowledgeNode[]) {
    for (const node of nodes) {
      this.nodes.set(node.id, node);
    }
  }

  getAll(): KnowledgeNode[] {
    return [...this.nodes.values()];
  }

  getById(id: string): KnowledgeNode | undefined {
    return this.nodes.get(id);
  }

  getByKind(kind: KnowledgeNode['kind']): KnowledgeNode[] {
    return this.getAll().filter((node) => node.kind === kind);
  }
}

export const knowledgeRegistry = new KnowledgeRegistry();