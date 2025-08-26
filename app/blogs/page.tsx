'use client';
import Link from 'next/link';

import { List, PageContainer } from '@components';
import { useBlogs } from '@hooks/useContentful';

export default function Blogs() {
  const { data: blogs, error, isLoading } = useBlogs();

  const blogLinks = blogs.map((cl) => (
    <List.Item key={cl.sys.id}>
      <Link href={`/blogs/${cl.fields.date}`}>{cl.fields.title}</Link>
    </List.Item>
  ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Blog entries">
      <List>{blogLinks}</List>
    </PageContainer>
  );
}
