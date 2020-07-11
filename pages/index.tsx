import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';

import { getCodelogs } from '../utils/fileUtils';
import { Codelog } from '../interfaces';

interface Props {
  codelogs: Codelog[];
}

const IndexPage: React.FunctionComponent<Props> = ({ codelogs = [] }: Props) => (
  <Layout title="TEST">
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>

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
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const codelogs: Codelog[] = getCodelogs();

  return {
    props: { codelogs },
  };
};

export default IndexPage;
