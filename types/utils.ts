import * as z from "zod";

const createLinkSchema = (linkType: string) =>
  z.object({
    sys: z.object({
      id: z.string(),
      type: z.literal("Link"),
      linkType: z.literal(linkType),
    }),
  });

export const MetadataSchema = z.object({
  metadata: z.object({
    tags: z.array(z.string()).optional(),
    concepts: z.array(z.string()).optional(),
  }),
});

export const SysSchema = z.object({
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
});
