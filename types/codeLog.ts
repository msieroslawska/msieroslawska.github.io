import type { Document } from "@contentful/rich-text-types";
import type { Sys } from "./sys";

export type Resource = {
  title: string;
  url: string;
}

export type CodeLog = {
  sys: Sys;
  title: string;
  date: string;
  tags: string[];
  planForTheDay: {
    json: Document;
  }
  learnedToday: {
    json: Document;
  }
  resourcesListCollection: {
    items: Resource[]
  }
  otherResourcesCollection: {
    items: Resource[]
  }
}