import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import * as z from 'zod';

import type { Block, Inline } from '@contentful/rich-text-types';

const NodeDataSchema = z.record(z.string(), z.unknown());
const NodeSchema = z.object({
  nodeType: z.string().readonly(),
  data: NodeDataSchema,
});

const MarkSchema = z.object({
  type: z.string(),
});

const TextSchema = NodeSchema.extend({
  nodeType: z.literal('text'),
  value: z.string(),
  marks: z.array(MarkSchema),
});

const BlockSchema: z.ZodType<Block> = z.lazy(() =>
  NodeSchema.extend({
    nodeType: z.enum(BLOCKS),
    content: z.array(z.union([BlockSchema, InlineSchema, TextSchema])),
  }),
);

const InlineSchema: z.ZodType<Inline> = z.lazy(() =>
  NodeSchema.extend({
    nodeType: z.enum(INLINES),
    content: z.array(z.union([InlineSchema, TextSchema])),
  }),
);

const TopLevelBlockValues = [
  BLOCKS.PARAGRAPH,
  BLOCKS.HEADING_1,
  BLOCKS.HEADING_2,
  BLOCKS.HEADING_3,
  BLOCKS.HEADING_4,
  BLOCKS.HEADING_5,
  BLOCKS.HEADING_6,
  BLOCKS.OL_LIST,
  BLOCKS.UL_LIST,
  BLOCKS.HR,
  BLOCKS.QUOTE,
  BLOCKS.EMBEDDED_ENTRY,
  BLOCKS.EMBEDDED_ASSET,
  BLOCKS.EMBEDDED_RESOURCE,
  BLOCKS.TABLE,
] as const;

export const TopLevelBlockSchema = NodeSchema.extend({
  nodeType: z.enum(TopLevelBlockValues),
  content: z.array(z.union([BlockSchema, InlineSchema, TextSchema])),
});

export const RichTextSchema = NodeSchema.extend({
  nodeType: z.literal(BLOCKS.DOCUMENT),
  content: z.array(TopLevelBlockSchema),
});

const ListItemBlockValues = [
  BLOCKS.PARAGRAPH,
  BLOCKS.HEADING_1,
  BLOCKS.HEADING_2,
  BLOCKS.HEADING_3,
  BLOCKS.HEADING_4,
  BLOCKS.HEADING_5,
  BLOCKS.HEADING_6,
  BLOCKS.OL_LIST,
  BLOCKS.UL_LIST,
  BLOCKS.HR,
  BLOCKS.QUOTE,
  BLOCKS.EMBEDDED_ENTRY,
  BLOCKS.EMBEDDED_ASSET,
  BLOCKS.EMBEDDED_RESOURCE,
] as const;

export const ListItemBlockSchema = NodeSchema.extend({
  nodeType: z.enum(ListItemBlockValues),
  content: z.array(z.union([BlockSchema, InlineSchema, TextSchema])),
});
