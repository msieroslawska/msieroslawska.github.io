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
  { href: '/resources', name: 'Resources' },
  { href: '/todo', name: 'TODO' },
  { href: '/tags', name: 'Tags' },
];

const Nav: React.FC = () => {
  const router = useRouter();

  const checkSelf = (href: string): boolean => router.route === href;

  const getCurrentClass = (href: string): string => (checkSelf(href) ? 'link current-link' : 'link');

  return (
    <nav className="nav">
      {URLS.map((link) => (
        <Link href={link.href} key={link.name}>
          <a className={getCurrentClass(link.href)}>{link.name}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
