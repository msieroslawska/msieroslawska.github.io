'use client';
import { Container, Group } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';

import classes from './navigation.module.css';

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
    <Link
      className={classes.link}
      key={link.label}
      href={link.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        handleClick(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Container size="md" className={classes.inner}>
      <Group gap={5} visibleFrom="xs">
        {navElements}
      </Group>
    </Container>
  );
};
