import type { Document } from "@contentful/rich-text-types";
import type { Sys } from "./sys";

export type CodeLog = {
  sys: Sys;
  title: string;
  date: string;
  tags: string[];
  planForTheDay: {
    json: Document;
  }
}