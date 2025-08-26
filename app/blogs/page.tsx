import Link from 'next/link';

import { List, PageContainer } from '@components';
import { getBlogs } from 'app/lib/getContent';

export default async function Blogs() {
  const blogs = await getBlogs();

  const blogLinks = blogs.map((b) => (
    <List.Item key={b.sys.id}>
      <Link href={`/blogs/${b.fields.date}`}>{b.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer title="Blog entries">
      <List>{blogLinks}</List>
    </PageContainer>
  );
}
