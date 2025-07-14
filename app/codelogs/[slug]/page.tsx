'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useCodelogs } from '@hooks/useContentful';
import { Anchor, List, Title } from '@mantine/core';
import { notFound, useParams } from 'next/navigation';

import { PageContainer } from '@/app/components/pageContainer';
import type { CodelogEntry } from '@/types';
import { type ResourceEntry } from '@/types';

import type { Document } from '@contentful/rich-text-types';

const HEADER_MAPPER = {
  title: 'Title',
  date: 'Date',
  tags: 'Tags',
  planForTheDay: 'Plan for the Day',
  learnedToday: 'Learned Today',
  resourcesList: 'Resources List',
  otherResources: 'Other Resources',
} satisfies Record<keyof CodelogEntry['fields'], string>;

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs, isLoading } = useCodelogs();

  const codelog = codelogs.find((cl) => cl.fields.title === slug);

  if (!codelog) {
    return notFound();
  }

  const renderDocument = (key: keyof CodelogEntry['fields']) => {
    if (!codelog.fields[key]) {
      return null;
    }

    const document = codelog.fields[key] as Document;

    return (
      <>
        <Title order={3}>{HEADER_MAPPER[key]}</Title>
        {documentToReactComponents(document)}
      </>
    );
  };

  const renderResources = (key: keyof CodelogEntry['fields']) => {
    if (!codelog.fields[key]) {
      return null;
    }

    const resources = codelog.fields[key] as ResourceEntry[];

    return (
      <>
        <Title order={3}>{HEADER_MAPPER[key]}</Title>
        <List>
          {resources.map((resource) => {
            return (
              <List.Item key={resource.sys.id}>
                <Anchor href={resource.fields.url}>{resource.fields.title}</Anchor>
              </List.Item>
            );
          })}
        </List>
      </>
    );
  };

  return (
    <PageContainer isLoading={isLoading} title={codelog.fields.title}>
      {renderDocument('planForTheDay')}
      {renderDocument('learnedToday')}

      {renderResources('resourcesList')}
      {renderResources('otherResources')}
    </PageContainer>
  );
}
