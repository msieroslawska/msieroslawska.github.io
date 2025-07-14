import * as z from 'zod';

import { RichTextSchema } from './richText';
import { MetadataSchema, SysSchema } from './utils';

export const CODELOG_CONTENT_TYPE_ID = 'codeLog';
export const RESOURCE_CONTENT_TYPE_ID = 'resource';

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
