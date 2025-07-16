'use client';
import { useCodelogs } from '@hooks/useContentful';
import { List } from '@mantine/core';
import Link from 'next/link';

import { PageContainer } from '@components/pageContainer';

export default function CodeLogs() {
  const { data: codelogs, error, isLoading } = useCodelogs();

  const codelogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/codelogs/${cl.fields.title}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Code logs">
      <List>{codelogLinks}</List>
      <Link href={'/tags/'}>TAGS</Link>
    </PageContainer>
  );
}
