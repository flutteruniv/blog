import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import { remarkPostEmbeds } from "./src/utils/remark-plugins/auto-embed.js";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
      customPages: [
        'https://blog.flutteruniv.com/',
        'https://blog.flutteruniv.com/search/',
        'https://blog.flutteruniv.com/about/',
      ],
      changefreq: 'weekly',
      priority: 0.7,
      serialize(item) {
        // Customize priority and changefreq based on page type
        if (item.url === 'https://blog.flutteruniv.com/') {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
          };
        }
        
        // Blog posts get high priority
        if (item.url.includes('/posts/') || 
            item.url.match(/\/\d{4}-\d{2}-\d{2}-/)) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'monthly',
          };
        }
        
        // Category pages get medium priority
        if (item.url.includes('/category/')) {
          return {
            ...item,
            priority: 0.6,
            changefreq: 'weekly',
          };
        }
        
        // Tag pages get lower priority
        if (item.url.includes('/tags/')) {
          return {
            ...item,
            priority: 0.4,
            changefreq: 'monthly',
          };
        }
        
        // Search and about pages
        if (item.url.includes('/search/') || item.url.includes('/about/')) {
          return {
            ...item,
            priority: 0.5,
            changefreq: 'monthly',
          };
        }
        
        return item;
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }], "remark-link-card-plus", remarkPostEmbeds],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
