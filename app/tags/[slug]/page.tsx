import Link from 'next/link';
import { notFound } from 'next/navigation';

import { List, PageContainer, Text } from '@components';
import { getArticles, getBlogs, getCodelogs, getTags } from 'app/lib/getContent';

async function CodelogsList({ tag }: { tag: string }) {
  const codelogs = await getCodelogs();

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

async function BlogsList({ tag }: { tag: string }) {
  const blogs = await getBlogs();

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

async function ArticlesList({ tag }: { tag: string }) {
  const articles = await getArticles();

  const tagHasArticles = articles.some((article) => article.fields.tags?.includes(tag));

  if (!tagHasArticles) {
    return <Text>No articles found.</Text>;
  }

  const articlesWithTag = articles.filter((article) => article.fields.tags?.includes(tag));

  return (
    <>
      <h3>Articles:</h3>
      {articlesWithTag.map((article) => (
        <List.Item key={article.sys.id}>
          <Link href={`/articles/${article.fields.title}`}>{article.fields.title}</Link>
        </List.Item>
      ))}
    </>
  );
}

export async function generateStaticParams() {
  const { articleTags, blogTags, codelogTags } = await getTags();

  return [...articleTags, ...blogTags, ...codelogTags].map((tag) => ({
    slug: tag,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const { articleTags, blogTags, codelogTags } = await getTags();

  const currentTag = [...articleTags, ...blogTags, ...codelogTags].find((tag) => tag === slug);

  if (!currentTag) {
    return notFound();
  }

  return (
    <PageContainer title={`Pages with tag: ${currentTag}`}>
      <List>
        <CodelogsList tag={currentTag} />
        <BlogsList tag={currentTag} />
        <ArticlesList tag={currentTag} />
      </List>
    </PageContainer>
  );
}
