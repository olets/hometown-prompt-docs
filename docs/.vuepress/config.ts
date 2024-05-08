import "dotenv/config";
import { defaultTheme, defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  // https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#211620",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    ["meta", { property: "og:title", content: "Hometown Prompt" }],
    [
      "meta",
      {
        property: "og:description",
        content: "A fast, dynamic, highly configurable Git-focused zsh theme",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://hometown-prompt.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "Hometown Prompt" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://hometown-prompt.olets.dev/images/hometown-prompt-splash-card.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    [
      "meta",
      {
        property: "og:image:alt",
        content: "The text 'Hometown Prompt' in pink cursive neon lettering",
      },
    ],
    ["meta", { name: "twitter:title", content: "Hometown Prompt" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",
      },
    ],

    // Analytics
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "SOUSEZIT",
        defer: true,
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],
  ],

  // site config
  // https://v2.vuepress.vuejs.org/guide/configuration.html#site-config
  lang: "en-US",
  title: "Hometown Prompt",
  description: "A feature rich, high performance Git-aware zsh theme.",

  markdown: {
    links: {
      externalAttrs: {
        class: "external-link",
        rel: "",
        target: "",
      },
    },
  },

  // default theme config
  // https://v2.vuepress.vuejs.org/guide/theme.html#default-theme
  theme: defaultTheme({
    contributors: false,
    lastUpdated: false,
    docsDir: "docs",
    docsRepo: "olets/hometown-prompt-docs",
    navbar: [
      {
        text: "Changelog",
        link: "https://github.com/olets/hometown-prompt/blob/main/CHANGELOG.md",
        target: "_self",
      },
      {
        text: "License",
        link: "https://github.com/olets/hometown-prompt/blob/main/LICENSE",
        target: "_self",
      },
      // Manual instead of with defaultTheme's `repo` so that we can specify the `target`
      {
        text: "GitHub",
        link: "https://github.com/olets/hometown-prompt",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://www.olets.dev",
        target: "_self",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "Features",
        children: [
          "/all-the-git-info.md",
          "/transient-prompt.md",
          "/scheduled-refresh.md",
        ],
      },
      "/installation.md",
      "/options.md",
      "/demo.md",
      {
        text: "Recipes",
        children: [
          "/recipes/linebreak-before-first-prompt-in-restarted-shell.md",
        ],
      },
      "/migrating-from-v3.md",
    ],
    sidebarDepth: 3,
    themePlugins: {
      externalLinkIcon: false,
    },
  }),

  plugins: [
    [
      // https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html
      docsearchPlugin({
        apiKey: process.env.SEARCH_KEY || "",
        appId: process.env.APPLICATION_ID || "",
        indexName: process.env.INDEX_NAME || "",
      }),
    ],
  ],
});
