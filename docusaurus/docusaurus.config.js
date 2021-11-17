module.exports = {
  title: 'CompreFace',
  tagline: 'Documentation website',
  url: 'https://asergeiev.github.io',
  baseUrl: '/documents-gh-pages/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'asergeiev', // Usually your GitHub org/user name.
  projectName: 'documents', // Usually your repo name.
  //trailingSlash: 'false',
 // onBrokenMarkdownLinks: 'ignore',

    themeConfig: {
    navbar: {
      title: 'CompreFace',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    algolia: {
      apiKey: 'e44c59d36394a26b1616e631a1c9d197',
      indexName: 'CompreFace',
      appId: 'HXJSB0I3EO',

            // Optional: see doc section bellow
            // contextualSearch: true,

            //... other Algolia params
        },

    footer: {
      style: 'dark',
      links: [
         {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EDY, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
          'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
