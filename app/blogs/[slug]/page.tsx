import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, type Document } from '@contentful/rich-text-types';
import { notFound } from 'next/navigation';

import { Code, Tag, PageContainer } from '@components';
import { getBlogs } from 'app/lib/getContent';

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

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.fields.date,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const blogs = await getBlogs();

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
    <PageContainer title={blog.fields.title}>
      {renderTags()}
      {renderDocument('content')}
    </PageContainer>
  );
}
