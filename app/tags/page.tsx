import { List, PageContainer, Tag } from '@components';
import { getTags } from 'app/lib/getContent';

export default async function Tags() {
  const { articleTags, blogTags, codelogTags } = await getTags();

  const tagLinks = [...new Set([...articleTags, ...blogTags, ...codelogTags])]
    .sort((a, b) => a.localeCompare(b))
    .map((tag) => (
      <List.Item key={tag}>
        <Tag key={tag} tag={tag} />
      </List.Item>
    ));

  return (
    <PageContainer title="Tags">
      <List>{tagLinks}</List>
    </PageContainer>
  );
}
