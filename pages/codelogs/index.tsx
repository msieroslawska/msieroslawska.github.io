import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getCodelogs } from '../../utils/fileUtils';
import { Codelog } from '../../interfaces';

interface Props {
  codelogs: Codelog[];
}

const filterCodelogsByYear = (codelogs: Codelog[], year: string) =>
  codelogs.filter((codelog) => codelog.slug.year === year);

const renderCodelogs = (codelogs: Codelog[]) => (
  <ul>
    {codelogs.map((codelog) => (
      <li key={codelog.title}>
        <Link href={`/codelogs/${codelog.slug.year}-${codelog.slug.month}-${codelog.slug.day}`}>
          <a>{codelog.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const CodelogList: React.FunctionComponent<Props> = ({ codelogs = [] }: Props) => (
  <PageLayout title="All codelogs | Marta Sierosławska">
    <section>
      <h1>All codelogs</h1>
      <h2>2019</h2>
      {renderCodelogs(filterCodelogsByYear(codelogs, '2019'))}
    </section>
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const codelogs: Codelog[] = getCodelogs();

  return {
    props: { codelogs },
  };
};

export default CodelogList;
