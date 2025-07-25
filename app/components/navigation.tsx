'use client';
import Link from 'next/link';
import { useState } from 'react';

import { FixedHeightContainer } from '@components';

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
    <li key={link.label} className="mr-2 last:mr-0">
      <Link
        href={link.link}
        data-active={active === link.link || undefined}
        onClick={() => {
          handleClick(link.link);
        }}
        className="data-[active=true]:bg-primary data-[active=true]:text-primary-content"
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <FixedHeightContainer className="navbar">
      <header>
        <ul className="menu menu-horizontal px-1">{navElements}</ul>
      </header>
    </FixedHeightContainer>
  );
};
