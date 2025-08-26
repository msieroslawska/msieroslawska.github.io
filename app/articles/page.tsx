'use client';
import Link from 'next/link';

import { List, PageContainer } from '@components';
import { useArticles } from '@hooks/useContentful';

export default function Articles() {
  const { data: articles, error, isLoading } = useArticles();

  const articleLinks = articles.map((a) => (
    <List.Item key={a.sys.id}>
      <Link href={`/articles/${a.fields.title}`}>{a.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Articles">
      <List>{articleLinks}</List>
    </PageContainer>
  );
}
