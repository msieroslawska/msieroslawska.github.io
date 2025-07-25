'use client';
import Link from 'next/link';

import { Calendar, List, PageContainer } from '@components';
import { useCodelogs } from '@hooks/useContentful';

export default function CodeLogs() {
  const { data: codelogs, error, isLoading } = useCodelogs();

  const codelogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/codelogs/${cl.fields.title}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Code logs">
      <Calendar codelogs={codelogs} />
      <List>{codelogLinks}</List>
      <Link href={'/tags/'}>TAGS</Link>
    </PageContainer>
  );
}
