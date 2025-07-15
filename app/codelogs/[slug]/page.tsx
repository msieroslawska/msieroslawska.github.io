'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, type Document } from '@contentful/rich-text-types';
import { useCodelogs } from '@hooks/useContentful';
import { Anchor, Code, List, Title } from '@mantine/core';
import { notFound, useParams } from 'next/navigation';

import { PageContainer } from '@/app/components/pageContainer';
import type { CodeBlockEntry, CodelogEntry } from '@/types';
import { type ResourceEntry } from '@/types';

import type { Block, Inline, NodeData } from '@contentful/rich-text-types';
import type { ReactNode } from 'react';

const HEADER_MAPPER = {
  title: 'Title',
  date: 'Date',
  tags: 'Tags',
  planForTheDay: 'Plan for the Day',
  learnedToday: 'Learned Today',
  resourcesList: 'Resources List',
  otherResources: 'Other Resources',
} satisfies Record<keyof CodelogEntry['fields'], string>;

interface EmbeddedEntryNodeData extends NodeData {
  target: CodeBlockEntry;
}
interface EmbeddedEntryBlock extends Block {
  nodeType: typeof BLOCKS.EMBEDDED_ENTRY;
  data: EmbeddedEntryNodeData;
}

const options = {
  renderMark: {
    [MARKS.CODE]: (text: ReactNode) => (
      <Code color="blue" fz="sm">
        {text}
      </Code>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline | Text) => {
      const codeBlockEntry = node as EmbeddedEntryBlock;

      return (
        <Code block ml="xl" w="60%">
          {codeBlockEntry.data.target.fields.code}
        </Code>
      );
    },
  },
};

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
    console.log(JSON.stringify(document, null, 2));

    return (
      <>
        <Title order={3}>{HEADER_MAPPER[key]}</Title>
        {documentToReactComponents(document, options)}
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
