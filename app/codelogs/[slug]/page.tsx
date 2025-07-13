'use client';
import { useCodelogs } from '@hooks/useContentful';
import { Text } from '@mantine/core';
import { notFound, useParams } from 'next/navigation';

import { PageContainer } from '@/app/components/pageContainer';

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs, isLoading } = useCodelogs();

  const codelog = codelogs.find((cl) => cl.fields.title === slug);

  if (!codelog) {
    return notFound();
  }

  return (
    <PageContainer isLoading={isLoading} title={codelog.fields.title}>
      <Text>My Post: {JSON.stringify(codelog.fields.planForTheDay)}</Text>
    </PageContainer>
  );
}
