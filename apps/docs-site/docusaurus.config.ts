import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Brian Short Apps',
  tagline: 'Engineering Portal',
  favicon: 'img/favicon.ico',

  url: 'https://brianshortapps.com',
  baseUrl: '/',

  organizationName: 'BrianShortApps',
  projectName: 'platform',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../../docs',
          routeBasePath: 'handbook',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Brian Short Apps',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'handbookSidebar',
          position: 'left',
          label: 'Engineering Handbook',
        },
        {
          href: 'https://github.com/BrianShortApps/platform',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Platform',
          items: [
            {
              label: 'Engineering Handbook',
              to: '/handbook/getting-started/overview',
            },
          ],
        },
        {
          title: 'Standards',
          items: [
            {
              label: 'Design Standards',
              to: '/handbook/../standards/design-standards',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/BrianShortApps/platform',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brian Short Apps.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;