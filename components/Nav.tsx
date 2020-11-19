import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Url } from '../types';

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

const getCurrentClass = (href: string): string => (checkSelf(href) ? 'link current-link' : 'link');

const Nav: React.FC = () => (
  <nav className="nav">
    {URLS.map((link) => (
      <Link href={link.href} key={link.name}>
        <a className={getCurrentClass(link.href)}>{link.name}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
