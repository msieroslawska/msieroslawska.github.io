import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, type Document } from '@contentful/rich-text-types';
import { notFound } from 'next/navigation';

import { Code, Tag, PageContainer } from '@components';
import { getArticles } from 'app/lib/getContent';

import type { Block, Inline, NodeData } from '@contentful/rich-text-types';
import type { ArticleEntry, CodeBlockEntry } from '@types';
import type { ReactNode } from 'react';

const HEADER_MAPPER = {
  title: 'Title',
  tags: 'Tags',
  content: 'Content',
} satisfies Record<keyof ArticleEntry['fields'], string>;

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
  const articles = await getArticles();

  return articles.map((article) => ({
    slug: encodeURIComponent(article.fields.title),
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const articles = await getArticles();

  const article = articles.find((a) => encodeURIComponent(a.fields.title) === slug);

  if (!article) {
    return notFound();
  }

  const renderTags = () => {
    const tags = article.fields['tags'];
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

  const renderDocument = (key: keyof ArticleEntry['fields']) => {
    if (!article.fields[key]) {
      return null;
    }

    const document = article.fields[key] as Document;

    return (
      <>
        <h3>{HEADER_MAPPER[key]}</h3>
        {documentToReactComponents(document, options)}
      </>
    );
  };

  return (
    <PageContainer title={article.fields.title}>
      {renderTags()}
      {renderDocument('content')}
    </PageContainer>
  );
}
