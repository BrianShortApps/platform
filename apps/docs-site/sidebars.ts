import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    {
      type: 'category',
      label: 'Engineering Handbook',
      items: [
        'getting-started/overview',
        'developer-guides/overview',
        'onboarding/overview',
        'product-guides/overview',
        'api-reference/overview',
      ],
    },
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'standards/foundations/overview',
        'standards/foundations/foundation-001/README',
        'standards/foundations/foundation-002/README',
      ],
    },
    {
      type: 'category',
      label: 'Design Standards',
      items: [
        'standards/design-standards/overview',
        'standards/design-standards/DS-001-brand-foundation',
        'standards/design-standards/DS-002-platform-mark',
        'standards/design-standards/DS-003-color-system',
        'standards/design-standards/DS-004-typography',
        'standards/design-standards/DS-005-layout-geometry',
        'standards/design-standards/DS-006-component-library',
        'standards/design-standards/DS-007-design-language',
      ],
    },
    {
      type: 'category',
      label: 'Engineering Standards',
      items: [
        'standards/engineering-standards/overview',
      ],
    },
    {
      type: 'category',
      label: 'Architecture Decisions',
      items: [
        'standards/adr/overview',
        'standards/adr/ADR-0001-workspace-architecture',
        'standards/adr/ADR-0002-platform-repository-structure',
        'standards/adr/ADR-0003-three-ring-platform-mark',
        'standards/adr/ADR-0004-component-first-development',
        'standards/adr/ADR-0005-documentation-architecture',
      ],
    },
  ],
};

export default sidebars;