'use client';
import { useCodelogs, useTags } from '@hooks/useContentful';
import { List, Text } from '@mantine/core';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

import { PageContainer } from '@/app/components/pageContainer';

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs, isLoading: isLoadingCodeLogs } = useCodelogs();
  const { data: tags, isLoading: isLoadingTags } = useTags();

  const tag = tags.find((tag) => tag === slug);

  if (!tag) {
    return notFound();
  }

  const tagHasCodelogs = codelogs.some((codelog) => codelog.fields.tags?.includes(tag));

  if (!tagHasCodelogs) {
    return (
      <PageContainer isLoading={isLoadingCodeLogs || isLoadingTags} title={tag}>
        <Text>No codelogs found for tag: {tag}</Text>
      </PageContainer>
    );
  }

  const codelogsWithTag = codelogs.filter((codelog) => codelog.fields.tags?.includes(tag));

  return (
    <PageContainer isLoading={isLoadingCodeLogs || isLoadingTags} title={`Codelogs with tag: ${tag}`}>
      <List>
        {codelogsWithTag.map((codelog) => (
          <List.Item key={codelog.sys.id}>
            <Link href={`/codelogs/${codelog.fields.title}`}>{codelog.fields.title}</Link>
          </List.Item>
        ))}
      </List>
    </PageContainer>
  );
}
