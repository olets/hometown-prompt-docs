import "dotenv/config";
import { defaultTheme, defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  // https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    // social metas
    ["meta", { property: "og:title", content: "hometown-prompt" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://hometown-prompt.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "hometown-prompt" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "hometown-prompt" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "A configurable set of components for creating feature rich, high performance Git-aware zsh prompts.",
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
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      "/installation.md",
      "/options.md",
      "/demo.md",
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
        apiKey: process.env.SEARCH_KEY,
        appId: process.env.APPLICATION_ID,
        indexName: process.env.INDEX_NAME,
      }),
    ],
  ],
});
