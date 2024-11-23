import { date } from 'astro/zod';
import { defineCollection, z } from 'astro:content';

const codeLogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});
const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'articles': articlesCollection,
  'blog': blogCollection,
  'codeLogs': codeLogsCollection,
};