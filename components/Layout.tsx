import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

interface Props {
  children: JSX.Element[] | JSX.Element;
  title: string;
}

const Layout: React.FunctionComponent<Props> = ({ children, title }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        {' '}
        |
        {' '}
        <Link href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer>
      <hr />
      <span>I&apos;m here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
