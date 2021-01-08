import React from 'react';

import PageLayout from '../layouts/Page';
import { CODELOGS_RESOURCES, OTHER_RESOURCES } from '../dataSources/resources';

const ResourcesPage: React.FC = () => (
  <PageLayout header="Resources" title="Resources | Marta Sierosławska">
    <>
      <h2>Resources</h2>
      <h3>Discovered while creating codelogs</h3>
      <ul>
        {CODELOGS_RESOURCES.map(({ codelogSource: { year, month, day }, title, url }) => (
          <li key={title}>
            <a href={url}>{title}</a>, from{' '}
            <a href={`/codelogs/${year}-${month}-${day}`}>
              {year}/{month}/{day}
            </a>
          </li>
        ))}
      </ul>

      <h3>Other</h3>
      <ul>
        {OTHER_RESOURCES.map(({ title, url }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
    </>
  </PageLayout>
);

export default ResourcesPage;
