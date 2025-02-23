import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kauefraga.dev',
  integrations: [
    react(),
    tailwind(),
    icon({
      include: {
        mdi: ['wrench', 'coffee', 'dev-to', 'linkedin', 'github', 'twitter', 'instagram', 'rss'],
        ri: ['bluesky-fill'],
        'skill-icons': ['github-dark'],
        lucide: ['sprout']
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
});
