import { defineConfig } from "vitepress";

/** 生产环境 CloudFront 根域名；子文档以路径前缀挂载在同一分配下 */
const CLOUDFRONT_ORIGIN = "https://d22e8mefr1nvgp.cloudfront.net";

export default defineConfig({
  base: "/",
  cleanUrls: false,
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
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
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
      title: "Online Manual Overview Platform",
      description: `One place to open the Edge EMS, integrated tray, foldable racking, and field work online manuals (${CLOUDFRONT_ORIGIN}).`,
      themeConfig: {
        siteTitle: "Online Manual Overview Platform",
        nav: [],
        sidebar: false,
      },
    },
    cn: {
      label: "简体中文",
      link: "/cn/",
      lang: "zh-CN",
      title: "线上手册总览平台",
      description: `集中入口，便于打开 Edge EMS、一体化托盘、折叠支架与现场作业等在线手册（${CLOUDFRONT_ORIGIN}）。`,
      themeConfig: {
        siteTitle: "线上手册总览平台",
        outline: {
          level: [2, 3],
          label: "本页目录",
        },
        nav: [],
        sidebar: false,
      },
    },
  },
});
