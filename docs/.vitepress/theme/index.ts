import DefaultTheme from "vitepress/theme";
import "./custom.css";

import { h } from "vue";
import { inBrowser } from "vitepress";
import PhotoSwipeImages from "./PhotoSwipeImages.vue";

function normalizeHtmlTrailingSlash() {
  if (!inBrowser) return;
  const { pathname, search, hash } = window.location;

  if (pathname.endsWith(".html/")) {
    const next = pathname.slice(0, -1) + search + hash;
    window.history.replaceState(null, "", next);
  }
}

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(PhotoSwipeImages),
    });
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx);

    if (!inBrowser) return;

    normalizeHtmlTrailingSlash();

    const previousAfterRouteChanged = ctx.router.onAfterRouteChanged;
    ctx.router.onAfterRouteChanged = () => {
      previousAfterRouteChanged?.();
      normalizeHtmlTrailingSlash();
    };
  },
};
