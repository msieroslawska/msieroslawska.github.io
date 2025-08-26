'use client';

import { List, PageContainer, Tag } from '@components';
import { useTags } from '@hooks/useContentful';

export default function Tags() {
  const {
    data: { codelogTags, blogTags },
    error,
    isLoading,
  } = useTags();

  const tagLinks = [...new Set([...codelogTags, ...blogTags])]
    .sort((a, b) => a.localeCompare(b))
    .map((tag) => (
      <List.Item key={tag}>
        <Tag key={tag} tag={tag} />
      </List.Item>
    ));

  return (
    <PageContainer error={error} isLoading={isLoading} title="Tags">
      <List>{tagLinks}</List>
    </PageContainer>
  );
}
