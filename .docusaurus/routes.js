import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kasirq-docs/__docusaurus/debug',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug', '68d'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/config',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/config', '267'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/content',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/content', 'e1a'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/globalData', '909'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/metadata', 'ada'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/registry', 'ee2'),
    exact: true
  },
  {
    path: '/kasirq-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/kasirq-docs/__docusaurus/debug/routes', 'b3c'),
    exact: true
  },
  {
    path: '/kasirq-docs/markdown-page',
    component: ComponentCreator('/kasirq-docs/markdown-page', '27d'),
    exact: true
  },
  {
    path: '/kasirq-docs/docs',
    component: ComponentCreator('/kasirq-docs/docs', 'e17'),
    routes: [
      {
        path: '/kasirq-docs/docs',
        component: ComponentCreator('/kasirq-docs/docs', '31f'),
        routes: [
          {
            path: '/kasirq-docs/docs',
            component: ComponentCreator('/kasirq-docs/docs', '2bf'),
            routes: [
              {
                path: '/kasirq-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/kasirq-docs/docs/category/tutorial---basics', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/kasirq-docs/docs/category/tutorial---extras', '0e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/intro',
                component: ComponentCreator('/kasirq-docs/docs/intro', '03e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/congratulations', 'f6c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/create-a-blog-post', '4ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/create-a-document', 'eb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/create-a-page', '3e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/deploy-your-site', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-basics/markdown-features', '415'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-extras/manage-docs-versions', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kasirq-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/kasirq-docs/docs/tutorial-extras/translate-your-site', '9c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/kasirq-docs/',
    component: ComponentCreator('/kasirq-docs/', 'ead'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
