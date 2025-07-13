import * as contentful from "contentful";
import { NextResponse } from "next/server";

import {
  type CodelogEntrySkeleton,
  CODELOG_CONTENT_TYPE_ID,
} from "@/types/contentful";

export async function GET() {
  try {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || "",
    });

    const configuredClient = client.withoutUnresolvableLinks;

    const response = await configuredClient.getEntries<CodelogEntrySkeleton>({
      content_type: CODELOG_CONTENT_TYPE_ID,
    });

    console.log('xxx', response)

    return NextResponse.json(response.items);
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Contentful" },
      { status: 500 }
    );
  }
}
