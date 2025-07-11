import * as z from "zod";

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

export const CodeLogFieldsSchema = z.object({
  title: z.string(),
  date: z.date(),
  tags: z.array(z.string()).optional(),
  planForTheDay: z.string(),
  learnedToday: z.string(),
  resourcesList: z.array(z.lazy(() => ResourceEntrySkeletonSchema)).optional(),
  otherResources: z.array(z.lazy(() => ResourceEntrySkeletonSchema)).optional(),
});

export const CodeLogEntrySkeletonSchema = z.object({
  contentTypeId: z.literal(CODELOG_CONTENT_TYPE_ID),
  fields: CodeLogFieldsSchema,
});

export type CodeLogEntrySkeleton = z.infer<typeof CodeLogEntrySkeletonSchema>;

const createLinkSchema = (linkType: string) =>
  z.object({
    sys: z.object({
      id: z.string(),
      type: z.literal("Link"),
      linkType: z.literal(linkType),
    }),
  });

export const CodeLogEntrySchema = z.object({
  metadata: z.object({
    tags: z.array(z.string()).optional(),
    concepts: z.array(z.string()).optional(),
  }),
  sys: z.object({
    id: z.string(),
    type: z.literal("Entry"),
    createdAt: z.string(),
    updatedAt: z.string(),
    environment: createLinkSchema("Environment"),
    publishedVersion: z.number().optional(),
    revision: z.number().optional(),
    contentType: createLinkSchema("ContentType"),
    space: createLinkSchema("Space"),
    locale: z.string().optional(),
  }),
  fields: CodeLogFieldsSchema,
});

export type CodeLogEntry = z.infer<typeof CodeLogEntrySchema>;
