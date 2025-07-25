'use client';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '@components';

const links = [
  { link: '/', label: 'Home' },
  { link: '/codelogs', label: 'Code logs' },
];

export const Navigation = () => {
  const [active, setActive] = useState(links[0].link);

  const handleClick = (link: string) => {
    setActive(link);
  };

  const navElements = links.map((link) => (
    <li key={link.label}>
      <Link
        href={link.link}
        data-active={active === link.link || undefined}
        onClick={() => {
          handleClick(link.link);
        }}
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <Container className="navbar bg-base-100 shadow-sm">
      <ul className="menu menu-horizontal px-1">{navElements}</ul>
    </Container>
  );
};
