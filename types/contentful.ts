import type { Entry, EntryFieldTypes } from "contentful";

export const CODELOG_CONTENT_TYPE_ID = "codeLog";
export const RESOURCE_CONTENT_TYPE_ID = "resource";

export interface ResourceFields {
  title: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
}
export interface ResourceEntrySkeleton {
  contentTypeId: typeof RESOURCE_CONTENT_TYPE_ID;
  fields: ResourceFields;
}

export interface CodeLogFields {
  title: EntryFieldTypes.Text;
  date: EntryFieldTypes.Date;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  planForTheDay: EntryFieldTypes.RichText;
  learnedToday: EntryFieldTypes.RichText;
  resourcesList?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryResourceLink<ResourceEntrySkeleton>
  >;
  otherResources?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryResourceLink<ResourceEntrySkeleton>
  >;
}

export interface CodeLogEntrySkeleton {
  contentTypeId: typeof CODELOG_CONTENT_TYPE_ID;
  fields: CodeLogFields;
}

export type CodeLogEntry = Entry<CodeLogEntrySkeleton>;
