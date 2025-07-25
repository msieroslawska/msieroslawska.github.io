'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, type Document } from '@contentful/rich-text-types';
import { notFound, useParams } from 'next/navigation';

import { Anchor, Code, List, TwoColumnContainer } from '@components';
import { useCodelogs } from '@hooks/useContentful';

import type { Block, Inline, NodeData } from '@contentful/rich-text-types';
import type { CodeBlockEntry, CodelogEntry, ResourceEntry } from '@types';
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
    [MARKS.CODE]: (text: ReactNode) => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline | Text) => {
      const codeBlockEntry = node as EmbeddedEntryBlock;

      return <Code>{codeBlockEntry.data.target.fields.code}</Code>;
    },
  },
};

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: codelogs, error, isLoading } = useCodelogs();

  const codelog = codelogs.find((cl) => cl.fields.title === slug);

  if (!codelog) {
    return notFound();
  }

  const renderTags = () => {
    const tags = codelog.fields['tags'];
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return null;
    }

    return (
      <>
        <h3>{HEADER_MAPPER['tags']}</h3>
        <List>
          {tags.map((tag) => (
            <List.Item key={tag}>
              <Anchor href={`/tags/${tag}`} label={tag} />
            </List.Item>
          ))}
        </List>
      </>
    );
  };

  const renderDocument = (key: keyof CodelogEntry['fields']) => {
    if (!codelog.fields[key]) {
      return null;
    }

    const document = codelog.fields[key] as Document;

    return (
      <>
        <h3>{HEADER_MAPPER[key]}</h3>
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
        <h3>{HEADER_MAPPER[key]}</h3>
        <List>
          {resources.map((resource) => {
            return (
              <List.Item key={resource.sys.id}>
                <Anchor href={resource.fields.url} label={resource.fields.title} />
              </List.Item>
            );
          })}
        </List>
      </>
    );
  };

  return (
    <TwoColumnContainer
      className="w-full max-w-5xl flex-1"
      error={error}
      isLoading={isLoading}
      right={
        <>
          {renderTags()}
          {renderDocument('planForTheDay')}
          {renderDocument('learnedToday')}

          {renderResources('resourcesList')}
          {renderResources('otherResources')}
        </>
      }
      title={codelog.fields.title}
    />
  );
}
