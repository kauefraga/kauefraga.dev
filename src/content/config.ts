import { defineCollection, z } from 'astro:content';

const schema = z.object({
  title: z.string(),
  isDraft: z.boolean().default(false),
  publishDate: z.date(),
  author: z.string().default('Kauê Fraga Rodrigues <rkauefraga@gmail.com>'),
});

const blogCollection = defineCollection({
  schema,
});

const notesCollection = defineCollection({
  schema,
});

export const collections = {
  blog: blogCollection,
  notes: notesCollection,
};
