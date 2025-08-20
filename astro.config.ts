import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kauefraga.dev',
  integrations: [
    icon({
      include: {
        mdi: [
          'wrench',
          'coffee',
          'dev-to',
          'linkedin',
          'github',
          'twitter',
          'instagram',
          'rss',
        ],
        ri: ['bluesky-fill'],
        'skill-icons': ['github-dark'],
        lucide: ['sprout'],
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  prefetch: true,
  markdown: { shikiConfig: { theme: 'tokyo-night' } },
});
