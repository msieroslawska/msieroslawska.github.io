import React from 'react';
import Link from 'next/link';
import PageLayout from '../layouts/Page';

const AboutPage: React.FunctionComponent = () => (
  <PageLayout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </PageLayout>
);

export default AboutPage;
