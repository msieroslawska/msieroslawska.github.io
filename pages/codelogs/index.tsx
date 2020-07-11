import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import PageLayout from '../../layouts/Page';

import { getCodelogs } from '../../utils/fileUtils';
import { Codelog } from '../../interfaces';

interface Props {
  codelogs: Codelog[];
}

const CodelogList: React.FunctionComponent<Props> = ({ codelogs = [] }: Props) => (
  <PageLayout title="All codelogs">
    <h1>All codelogs</h1>

    <ul>
      {codelogs.map((codelog) => {
        const { slug } = codelog;
        return (
          <li key={codelog.title}>
            <Link href={`/codelogs/${slug.year}-${slug.month}-${slug.day}`}>
              <a>{codelog.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  </PageLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const codelogs: Codelog[] = getCodelogs();

  return {
    props: { codelogs },
  };
};

export default CodelogList;
