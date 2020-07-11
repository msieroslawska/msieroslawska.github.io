import React from 'react';
import Head from 'next/head';

interface Props {
  children;
  title: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
  </div>
);

export default Layout;
