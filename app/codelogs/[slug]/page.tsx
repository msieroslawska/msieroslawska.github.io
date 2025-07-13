'use client';
import { Text } from '@mantine/core';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';

import { useContentful } from '@/app/hooks/useContentful';

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs } = useContentful();
  if (codelogs.length === 0) return <Text>No codelogs found</Text>;

  const codelog = codelogs.find((cl) => cl.fields.title === slug);

  if (!codelog) {
    return notFound();
  }

  return (
    <div>
      <h1>{codelog.fields.title}</h1>
      <Text>My Post: {JSON.stringify(codelog.fields.planForTheDay)}</Text>
    </div>
  );
}
