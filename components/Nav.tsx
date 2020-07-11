import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Url } from '../interfaces';

const URLS: Url[] = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/codelogs', name: 'Codelogs' },
];

const checkSelf = (href: string): boolean => {
  const router = useRouter();
  return router.route === href;
};

const getLinks = (): Url[] => {
  const links: Url[] = [];

  URLS.forEach((url) => {
    if (!checkSelf(url.href)) {
      links.push(url);
    }
  });

  return links;
};

const Nav: React.FunctionComponent = () => (
  <header>
    <nav>
      <ul>
        {getLinks().map((link) => (
          <li>
            <Link href={link.href}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Nav;
