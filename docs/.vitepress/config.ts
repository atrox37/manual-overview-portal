import { defineConfig } from "vitepress";

const manualLinks = {
  edgeEms: {
    en: "/edge-ems/",
    zh: "/edge-ems/cn/",
  },
  integratedTray: {
    en: "/integrated-tray/",
    zh: "/integrated-tray/cn/",
  },
  foldableRacking: {
    en: "/foldable-racking/",
    zh: "/foldable-racking/cn/",
  },
  fieldWork: {
    en: "/field-work/",
    zh: "/field-work/cn/",
  },
};

export default defineConfig({
  base: "/",
  cleanUrls: false,
  ignoreDeadLinks: [
    /^\/edge-ems(?:\/|$)/,
    /^\/integrated-tray(?:\/|$)/,
    /^\/foldable-racking(?:\/|$)/,
    /^\/field-work(?:\/|$)/,
  ],
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    logo: "/logo.svg",
    outline: {
      level: [2, 3],
      label: "On This Page",
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search documentation",
              },
            },
          },
          cn: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
            },
          },
        },
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const lower = (text || "").toLowerCase();
              const wordTokens = lower
                .split(/[\s\p{P}\p{S}]+/gu)
                .filter(Boolean);
              const cjkTokens = Array.from(lower).filter((ch) =>
                /[\u4e00-\u9fff]/.test(ch)
              );
              return [...wordTokens, ...cjkTokens];
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: "English",
      link: "/",
      lang: "en-US",
      title: "Manual Overview Platform",
      description: "A unified entry portal for the current online manuals.",
      themeConfig: {
        siteTitle: "Manual Overview Platform",
        nav: [
          {
            text: "Overview",
            link: "/",
          },
          {
            text: "Manual Sites",
            link: "/manuals/index.html",
            activeMatch: "^/manuals/",
          },
        ],
        sidebar: {
          "/manuals/": [
            {
              text: "Current Online Manuals",
              collapsed: false,
              items: [
                { text: "Overview", link: "/manuals/index.html" },
                { text: "Edge EMS User Manual", link: manualLinks.edgeEms.en },
                {
                  text: "Integrated Tray Installation Manual",
                  link: manualLinks.integratedTray.en,
                },
                {
                  text: "Foldable Racking Installation Manual",
                  link: manualLinks.foldableRacking.en,
                },
                { text: "Field Work Instruction Manual", link: manualLinks.fieldWork.en },
              ],
            },
          ],
        },
      },
    },
    cn: {
      label: "简体中文",
      link: "/cn/",
      lang: "zh-CN",
      title: "手册总览平台",
      description: "当前线上手册的统一入口平台。",
      themeConfig: {
        siteTitle: "手册总览平台",
        outline: {
          level: [2, 3],
          label: "本页目录",
        },
        nav: [
          {
            text: "总览",
            link: "/cn/",
          },
          {
            text: "手册站点",
            link: "/cn/manuals/index.html",
            activeMatch: "^/cn/manuals/",
          },
        ],
        sidebar: {
          "/cn/manuals/": [
            {
              text: "当前线上手册",
              collapsed: false,
              items: [
                { text: "总览", link: "/cn/manuals/index.html" },
                { text: "Edge EMS 用户手册", link: manualLinks.edgeEms.zh },
                {
                  text: "一体化托盘安装手册",
                  link: manualLinks.integratedTray.zh,
                },
                {
                  text: "折叠支架安装手册",
                  link: manualLinks.foldableRacking.zh,
                },
                { text: "现场作业指导手册", link: manualLinks.fieldWork.zh },
              ],
            },
          ],
        },
      },
    },
  },
});
