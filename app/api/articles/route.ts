import { NextResponse } from 'next/server';

import { type ArticleEntrySkeleton, ARTICLE_CONTENT_TYPE_ID } from '@types';

import { configuredClient } from '../createClient';

export async function GET() {
  try {
    const response = await configuredClient.getEntries<ArticleEntrySkeleton>({
      content_type: ARTICLE_CONTENT_TYPE_ID,
    });

    return NextResponse.json(response.items);
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Contentful' }, { status: 500 });
  }
}
