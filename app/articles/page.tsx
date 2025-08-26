import Link from 'next/link';

import { List, PageContainer } from '@components';
import { getArticles } from 'app/lib/getContent';

export default async function Articles() {
  const articles = await getArticles();

  const articleLinks = articles.map((a) => (
    <List.Item key={a.sys.id}>
      <Link href={`/articles/${a.fields.title}`}>{a.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer title="Articles">
      <List>{articleLinks}</List>
    </PageContainer>
  );
}
