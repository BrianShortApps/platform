export type ExplorerFilterOption = {
  label: string;
  value: string;
};

export type ExplorerSearchDefinition = {
  enabled: boolean;
  placeholder?: string;
};

export type ExplorerDefinition = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  search?: ExplorerSearchDefinition;
  filters?: ExplorerFilterOption[];
};