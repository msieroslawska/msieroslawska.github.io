import * as contentful from "contentful";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });

    const response = await client.getEntries({
      content_type: "codeLog",
    });

    return NextResponse.json(response.items);
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Contentful" },
      { status: 500 }
    );
  }
}
