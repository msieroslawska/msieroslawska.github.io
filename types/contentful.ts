import * as z from "zod";

import { MetadataSchema, SysSchema } from "./utils";

export const CODELOG_CONTENT_TYPE_ID = "codeLog";
export const RESOURCE_CONTENT_TYPE_ID = "resource";

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

export const CodeLogFieldsSchema = z.object({
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).optional(),
  // planForTheDay: z.string(),
  // learnedToday: z.string(),
  planForTheDay: z.any().optional(),
  learnedToday: z.any().optional(),
  resourcesList: z.array(z.lazy(() => ResourceEntrySchema)).optional(),
  otherResources: z.array(z.lazy(() => ResourceEntrySchema)).optional(),
});

export const CodeLogEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(CODELOG_CONTENT_TYPE_ID),
  fields: CodeLogFieldsSchema,
});

export type CodeLogEntrySkeleton = z.infer<typeof CodeLogEntrySkeletonSchema>;

export const CodeLogEntrySchema = z.object({
  ...MetadataSchema.shape,
  ...SysSchema.shape,
  fields: CodeLogFieldsSchema,
});

export type CodeLogEntry = z.infer<typeof CodeLogEntrySchema>;
