'use client';
import { useCodelogs } from '@hooks/useContentful';
import { List, Text } from '@mantine/core';
import Link from 'next/link';

export default function CodeLogs() {
  const { data: codelogs, error, isLoading } = useCodelogs();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text c="red">Error: {error.message}</Text>;
  if (codelogs.length === 0) return <Text>No codelogs found</Text>;

  const codeLogLinks = codelogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/codelogs/${cl.fields.title}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return <List>{codeLogLinks}</List>;
}
