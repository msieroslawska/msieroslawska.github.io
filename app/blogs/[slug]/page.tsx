'use client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, type Document } from '@contentful/rich-text-types';
import { notFound, useParams } from 'next/navigation';

import { Code, Tag, PageContainer } from '@components';
import { useBlogs } from '@hooks/useContentful';

import type { Block, Inline, NodeData } from '@contentful/rich-text-types';
import type { BlogEntry, CodeBlockEntry } from '@types';
import type { ReactNode } from 'react';

const HEADER_MAPPER = {
  title: 'Title',
  date: 'Date',
  tags: 'Tags',
  content: 'Content',
} satisfies Record<keyof BlogEntry['fields'], string>;

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

      return <Code block>{codeBlockEntry.data.target.fields.code}</Code>;
    },
  },
};

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const { data: blogs, error, isLoading } = useBlogs();

  const blog = blogs.find((b) => b.fields.date === slug);

  if (!blog) {
    return notFound();
  }

  const renderTags = () => {
    const tags = blog.fields['tags'];
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
      return null;
    }

    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    );
  };

  const renderDocument = (key: keyof BlogEntry['fields']) => {
    if (!blog.fields[key]) {
      return null;
    }

    const document = blog.fields[key] as Document;

    return (
      <>
        <h3>{HEADER_MAPPER[key]}</h3>
        {documentToReactComponents(document, options)}
      </>
    );
  };

  return (
    <PageContainer error={error} isLoading={isLoading} title={blog.fields.title}>
      {renderTags()}
      {renderDocument('content')}
    </PageContainer>
  );
}
