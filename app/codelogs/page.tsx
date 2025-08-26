'use client';
import Link from 'next/link';

import { List, TwoColumnContainer } from '@components';
import { useCodelogs } from '@hooks/useContentful';

export default function CodeLogs() {
  const { data: codelogs, error, isLoading } = useCodelogs();

  const codelogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/codelogs/${cl.fields.title}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return (
    <TwoColumnContainer
      className="w-full max-w-5xl flex-1"
      error={error}
      isLoading={isLoading}
      right={<List>{codelogLinks}</List>}
      title="Code logs"
    />
  );
}
