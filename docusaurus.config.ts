import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "KasirQ Documentation",
  tagline: "Panduan penggunaan aplikasi KasirQ",

  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://nexa-code-studio.github.io",
  baseUrl: "/kasirq-docs/",

  organizationName: "Nexa-Code-Studio",
  projectName: "kasirq-docs",

  onBrokenLinks: "throw",

  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "KasirQ",
      logo: {
        alt: "KasirQ Logo",
        src: "img/logo-light.png",
        srcDark: "img/logo-dark.png",
      },

      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://nexacode.dev",
          label: "NexaCode",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "KasirQ",
          items: [
            {
              html: '<p>KasirQ membantu bisnis mengelola transaksi, stok, dan laporan dalam satu sistem yang sederhana dan efisien.</p>',
            },
          ],
        },
        {
          title: "Navigasi",
          items: [
            {
              label: "Tutorial",
              to: "/docs",
            },
          ],
        },
        {
          title: "Hubungi Kami",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/6288295477204",
            },
            {
              label: "Our Blog",
              href: "https://nexacode.dev",
            },
            {
              label: "Our Instagram",
              href: "https://instagram.com/nexacode.studio",
            },
            {
              label: "studionexacode@gmail.com",
              href: "mailto:studionexacode@gmail.com",
            },
            {
              html: '<span>Indonesia</span>',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nexa Code Studio.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
