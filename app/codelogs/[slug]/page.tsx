'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useCodelogs } from '@hooks/useContentful';
import { Anchor, List, Title } from '@mantine/core';
import { notFound, useParams } from 'next/navigation';

import { PageContainer } from '@/app/components/pageContainer';
import type { ResourceEntry } from '@/types';

import type { Document } from '@contentful/rich-text-types';

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs, isLoading } = useCodelogs();

  const codelog = codelogs.find((cl) => cl.fields.title === slug);

  if (!codelog) {
    return notFound();
  }

  const renderPlanForTheDay = (planForTheDay?: Document) => {
    if (!planForTheDay) {
      return null;
    }

    return (
      <>
        <Title order={3}>Plan for the day</Title>
        {documentToReactComponents(planForTheDay)}
      </>
    );
  };

  const renderLearnedToday = (learnedToday?: Document) => {
    if (!learnedToday) {
      return null;
    }

    return (
      <>
        <Title order={3}>Learned today</Title>
        {documentToReactComponents(learnedToday)}
      </>
    );
  };

  const renderResources = (resources?: ResourceEntry[]) => {
    if (!resources || resources.length === 0) {
      return null;
    }

    return (
      <List>
        {resources.map((resource) => {
          return (
            <List.Item key={resource.sys.id}>
              <Anchor href={resource.fields.url}>{resource.fields.title}</Anchor>
            </List.Item>
          );
        })}
      </List>
    );
  };

  return (
    <PageContainer isLoading={isLoading} title={codelog.fields.title}>
      {renderPlanForTheDay(codelog.fields.planForTheDay)}
      {renderLearnedToday(codelog.fields.learnedToday)}
      {renderResources(codelog.fields.resourcesList)}
      {renderResources(codelog.fields.otherResources)}
    </PageContainer>
  );
}
