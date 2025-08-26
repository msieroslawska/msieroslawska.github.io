import * as z from 'zod';

import { RichTextSchema } from './richText';
import { MetadataSchema, SysSchema } from './utils';

export const CODELOG_CONTENT_TYPE_ID = 'codeLog';
export const RESOURCE_CONTENT_TYPE_ID = 'resource';
export const CODEBLOCK_CONTENT_TYPE_ID = 'codeBlock';
export const BLOG_CONTENT_TYPE_ID = 'blog';
export const ARTICLE_CONTENT_TYPE_ID = 'article';

export const CodeBlockFieldsSchema = z
  .object({
    description: z.string(),
    language: z.string().optional(),
    code: z.string(),
  })
  .required();

export type CodeBlockFields = z.infer<typeof CodeBlockFieldsSchema>;

export const CodeBlockEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(CODEBLOCK_CONTENT_TYPE_ID),
  fields: CodeBlockFieldsSchema,
});

export type CodeBlockEntrySkeleton = z.infer<typeof CodeBlockEntrySkeletonSchema>;

export const CodeBlockEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: CodeBlockFieldsSchema,
});

export type CodeBlockEntry = z.infer<typeof CodeBlockEntrySchema>;

export const ResourceFieldsSchema = z
  .object({
    title: z.string(),
    url: z.string(),
  })
  .required();

export type ResourceFields = z.infer<typeof ResourceFieldsSchema>;

export const ResourceEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(RESOURCE_CONTENT_TYPE_ID),
  fields: ResourceFieldsSchema,
});

export type ResourceEntrySkeleton = z.infer<typeof ResourceEntrySkeletonSchema>;

export const ResourceEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: ResourceFieldsSchema,
});

export type ResourceEntry = z.infer<typeof ResourceEntrySchema>;

export const CodelogFieldsSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  planForTheDay: RichTextSchema.optional(),
  learnedToday: RichTextSchema.optional(),
  resourcesList: z.array(z.lazy(() => ResourceEntrySchema)).optional(),
  otherResources: z.array(z.lazy(() => ResourceEntrySchema)).optional(),
});

export const CodelogEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(CODELOG_CONTENT_TYPE_ID),
  fields: CodelogFieldsSchema,
});

export type CodelogEntrySkeleton = z.infer<typeof CodelogEntrySkeletonSchema>;

export const CodelogEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: CodelogFieldsSchema,
});

export type CodelogEntry = z.infer<typeof CodelogEntrySchema>;

export const BlogFieldsSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  content: RichTextSchema.optional(),
});

export const BlogEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(BLOG_CONTENT_TYPE_ID),
  fields: BlogFieldsSchema,
});

export type BlogEntrySkeleton = z.infer<typeof BlogEntrySkeletonSchema>;

export const BlogEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: BlogFieldsSchema,
});

export type BlogEntry = z.infer<typeof BlogEntrySchema>;

export const ArticleFieldsSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).optional(),
  content: RichTextSchema.optional(),
});

export const ArticleEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(ARTICLE_CONTENT_TYPE_ID),
  fields: ArticleFieldsSchema,
});

export type ArticleEntrySkeleton = z.infer<typeof ArticleEntrySkeletonSchema>;

export const ArticleEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: ArticleFieldsSchema,
});

export type ArticleEntry = z.infer<typeof ArticleEntrySchema>;
