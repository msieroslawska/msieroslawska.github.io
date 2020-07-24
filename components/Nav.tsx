import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Url } from '../interfaces';

const URLS: Url[] = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/blog', name: 'Blog' },
  { href: '/codelogs', name: 'Codelogs' },
  { href: '/articles', name: 'Articles' },
  { href: '/projects', name: 'Projects' },
  { href: '/todo', name: 'TODO' },
];

const checkSelf = (href: string): boolean => {
  const router = useRouter();
  return router.route === href;
};

const getCurrentClass = (href: string): string => (checkSelf(href) ? 'current' : '');

const Nav: React.FunctionComponent = () => (
  <nav className="nav">
    {URLS.map((link) => (
      <Link href={link.href} key={link.name}>
        <div className={`nav-link ${getCurrentClass(link.href)}`}>
          <a>{link.name}</a>
        </div>
      </Link>
    ))}
  </nav>
);

export default Nav;
