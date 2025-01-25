import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';
import { glob } from 'astro/loaders';

const schema = z.object({
  title: z.string(),
  draft: z.boolean().default(false),
  pubDate: z.date(),
  author: z.string().default('Kauê Fraga Rodrigues <rkauefraga@gmail.com>'),
});

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/[^_]*.md'
  }),
  schema: schema.merge(rssSchema),
});

const notes = defineCollection({
  loader: glob({
    base: './src/content/notes',
    pattern: '**/[^_]*.md'
  }),
  schema,
});

export const collections = {
  blog,
  notes,
};
