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
      ],
    },
  ],
};

export default sidebars;