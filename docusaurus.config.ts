import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ExoShell',
  tagline: 'Use your computers like never before.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.exoshell.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exoshell-io/docs',
        },
        blog: {
          // showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/exoshell-io/docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        // Debug defaults to true in dev, false in prod
        debug: undefined,
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {},
        // Will be passed to @docusaurus/plugin-sitemap (false to disable)
        sitemap: {},
        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
        // gtag: {},
        // Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)
        // googleTagManager: {},
        // DEPRECATED: Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
        // googleAnalytics: {},
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        'indexPages': true,
        'hashed': true,
        'docsRouteBasePath': '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'ExoShell',
      logo: {
        alt: 'ExoShell',
        src: 'img/logo.png',
        href: 'https://exoshell.io',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/exoshell-io/docs',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/exoshell',
            },
            {
              label: 'Slack',
              href: 'https://slack.com/invite/exoshell',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/exoshell',
            },
            {
              label: 'Youtube',
              href: 'https://youtube.com/exoshell',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/exoshell',
            },
          ],
        },
        {
          title: 'ExoShell',
          items: [
            {
              label: 'ExoShell',
              href: 'https://exoshell.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/exoshell-io/exoshell',
            },
            {
              label: 'License',
              href: 'https://github.com/exoshell-io/exoshell/LICENSE.txt',
            },
          ],
        },
        {
          title: 'ExoHub',
          items: [
            {
              label: 'ExoHub',
              href: 'https://exohub.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ExoShell`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
