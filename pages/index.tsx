import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import matter from 'gray-matter';
import { v4 } from 'uuid';
import { GetStaticProps } from 'next';

import Layout from '../components/Layout';

import { getCodelogs } from '../utils/fileUtils';

interface Codelog {
  id: string;
  slug: string[];
  tags: string[];
  title: string;
}
interface Props {
  codelogs: Codelog[];
}

const IndexPage: React.FunctionComponent<Props> = ({ codelogs = [] }: Props) => {
  console.log('xxxxxx', codelogs);
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <ul>
        {codelogs.map((codelog) => (
          <li key={codelog.id}>
            <Link href={`/codelogs/${codelog.id}`}>
              <a>{codelog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const codelogs: Codelog[] = getCodelogs();

  return {
    props: { codelogs },
  };
};

export default IndexPage;
