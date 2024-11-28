// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guía Dynamo Python',
  tagline: 'Una guía del curso de Programación BIM',
  favicon: 'img/OBG.ico',

  // Set the production url of your site here
  url: 'https://geraldpm123.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/dynamoPythonGuia-OBG/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'geraldpm123', // Usually your GitHub org/user name.
  projectName: 'dynamoPythonGuia-OBG', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash:false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Agregar configuración para mermaid (diagramas)
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
  // Fin configuración para mermaid (diagramas)

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Python Dynamo',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guiaDynamoBasic',
            position: 'left',
            label: 'Dynamo I',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guiaDynamoAvanzado',
            position: 'left',
            label: 'Dynamo II',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guiaWPF',
            position: 'left',
            label: 'WPF',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://www.youtube.com/@GeraldPachariMillio',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@GeraldPachariMillio',
              },
              /*{
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },*/
              /*{
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },*/
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'GitHub',
                href: 'https://github.com/geraldpm123',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ObjectG, dev Gerald Pachari Millio`,
      },
      prism: {
        theme: prismThemes.oneDark,
        darkTheme: prismThemes.github,
        magicComments: [
          {
            className: 'code-block-error-line',
            line: 'resaltado--next-line',
            block: {start: 'resaltado-start', end: 'resaltado-end'},
          },
        ],
      },
    }),
};

export default config;
