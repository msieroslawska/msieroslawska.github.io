'use client';
import { useTags } from '@hooks/useContentful';
import { List } from '@mantine/core';
import Link from 'next/link';

import { PageContainer } from '@components/pageContainer';

export default function Tags() {
  const { data: tags, error, isLoading } = useTags();

  const tagLinks = tags.map((tag) => (
    <List.Item key={tag}>
      <Link href={`/tags/${tag}`}>{tag}</Link>
    </List.Item>
  ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Tags">
      <List>{tagLinks}</List>
    </PageContainer>
  );
}
