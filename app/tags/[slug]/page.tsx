'use client';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

import { List, PageContainer, Text } from '@components';
import { useBlogs, useCodelogs, useTags } from '@hooks/useContentful';

function CodelogsList({ tag }: { tag: string }) {
  const { data: codelogs } = useCodelogs();

  const tagHasCodelogs = codelogs.some((codelog) => codelog.fields.tags?.includes(tag));

  if (!tagHasCodelogs) {
    return <Text>No codelogs found.</Text>;
  }

  const codelogsWithTag = codelogs.filter((codelog) => codelog.fields.tags?.includes(tag));

  return (
    <>
      <h3>Codelogs:</h3>
      {codelogsWithTag.map((codelog) => (
        <List.Item key={codelog.sys.id}>
          <Link href={`/codelogs/${codelog.fields.title}`}>{codelog.fields.title}</Link>
        </List.Item>
      ))}
    </>
  );
}

function BlogsList({ tag }: { tag: string }) {
  const { data: blogs } = useBlogs();

  const tagHasBlogs = blogs.some((blog) => blog.fields.tags?.includes(tag));

  if (!tagHasBlogs) {
    return <Text>No blogs found.</Text>;
  }

  const blogsWithTag = blogs.filter((blog) => blog.fields.tags?.includes(tag));

  return (
    <>
      <h3>Blogs:</h3>
      {blogsWithTag.map((blog) => (
        <List.Item key={blog.sys.id}>
          <Link href={`/blogs/${blog.fields.title}`}>{blog.fields.title}</Link>
        </List.Item>
      ))}
    </>
  );
}

export default function Page() {
  const params = useParams();
  const slug = params.slug;

  const {
    data: { codelogTags, blogTags },
    isLoading: isLoadingTags,
  } = useTags();

  const currentTag = [...codelogTags, ...blogTags].find((tag) => tag === slug);

  if (!currentTag) {
    return notFound();
  }

  return (
    <PageContainer isLoading={isLoadingTags} title={`Pages with tag: ${currentTag}`}>
      <List>
        <CodelogsList tag={currentTag} />
        <BlogsList tag={currentTag} />
      </List>
    </PageContainer>
  );
}
