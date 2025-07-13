'use client';
import { useCodelogs } from '@hooks/useContentful';
import { Text } from '@mantine/core';
import { notFound, useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs } = useCodelogs();
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
