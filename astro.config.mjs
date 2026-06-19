// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://getcassette.app',
  base: '',
  integrations: [
    sitemap({
      // The /survey page is defunct and noindexed — keep it out of the sitemap.
      filter: (page) => !page.includes('/survey'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://getcassette.app/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
