import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hometown Prompt",
  description: "A feature rich, high performance Git-aware zsh theme",
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
        defer: "true",
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],
  ],
  markdown: {
    typographer: true,
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
    config: (md) => {
      // md.use(markdownItFootnote);
    },
    theme: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: undefined,
    lastUpdated: undefined,
    nav: [
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
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Introduction",
        link: "/",
      },
      {
        text: "What’s new?",
        link: "/whats-new.md",
      },
      {
        text: "Features",
        collapsed: false,
        items: [
          { link: "/all-the-git-info.md", text: "All the Git info" },
          { link: "/transient-prompt.md", text: "Transient prompt" },
          { link: "/scheduled-refresh.md", text: "Scheduled refresh" },
        ],
      },
      { link: "/installation.md", text: "Installation" },
      { link: "/options.md", text: "Options" },
      { link: "/demo.md", text: "Demo" },
      {
        text: "Recipes",
        collapsed: false,
        items: [
          {
            link: "/recipes/linebreak-before-first-prompt-in-restarted-shell.md",
            text: "Linebreak before first prompt in restarted shell",
          },
          {
            link: "/recipes/scheduled-refresh-with-static-time.md",
            text: "Scheduled refresh with static time",
          },
          {
            link: "/recipes/timestamp-range-in-prompt.md",
            text: "Timestamp range in prompt",
          },
        ],
      },
      {
        link: "/migrating-between-versions.md",
        text: "Migrating between versions",
      },
    ],
    socialLinks: [],
  },
});
