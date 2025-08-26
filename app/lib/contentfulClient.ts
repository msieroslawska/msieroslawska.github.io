import * as contentful from 'contentful';

import {
  type CodelogEntrySkeleton,
  type ArticleEntry,
  type BlogEntry,
  type CodelogEntry,
  CodelogEntrySchema,
  BlogEntrySchema,
  ArticleEntrySchema,
} from '@types';

function getClient() {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || '',
  }).withoutUnresolvableLinks;
}

export const queryFn = {
  codelogs: {
    getAll: async (): Promise<CodelogEntry[]> => {
      const client = getClient();
      const entries = await client.getEntries<CodelogEntrySkeleton>({
        content_type: 'codeLog',
      });
      return entries.items.map((e) => CodelogEntrySchema.parse(e));
    },
  },
  blogs: {
    getAll: async (): Promise<BlogEntry[]> => {
      const entries = await getClient().getEntries({
        content_type: 'blog',
      });
      return entries.items.map((e) => BlogEntrySchema.parse(e));
    },
  },
  articles: {
    getAll: async (): Promise<ArticleEntry[]> => {
      const entries = await getClient().getEntries({
        content_type: 'article',
      });
      return entries.items.map((e) => ArticleEntrySchema.parse(e));
    },
  },
};
