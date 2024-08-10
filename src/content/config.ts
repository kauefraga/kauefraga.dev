import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const schema = z.object({
  title: z.string(),
  draft: z.boolean().default(false),
  pubDate: z.date(),
  author: z.string().default('Kauê Fraga Rodrigues <rkauefraga@gmail.com>'),
});

const blogCollection = defineCollection({
  schema: schema.merge(rssSchema),
});

const notesCollection = defineCollection({
  schema,
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
};
