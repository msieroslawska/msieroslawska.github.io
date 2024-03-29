import Image from 'next/image';
import React from 'react';

import HelloLayout from '../layouts/Hello';

const IndexPage: React.FC = () => (
  <HelloLayout title="Marta Sierosławska | Frontend engineer">
    <h1 className="hello">Hello! I&apos;m Marta!</h1>
    <h2>Frontend engineer</h2>

    <section>
      This page is a playground and a notebook for my experiments. I would like to document here my programming progress
      and write down all the notes I might need later.
    </section>

    <section>
      <a href="https://github.com/msieroslawska">
        <Image className="svg-icon" src="/img/github.svg" alt="Github" width={30} height={30} layout="fixed" />
      </a>

      <a href="https://www.linkedin.com/in/martasieroslawska">
        <Image className="svg-icon" src="/img/linkedin.svg" alt="linkedin" width={30} height={30} layout="fixed" />
      </a>

      <a href="https://www.hackerrank.com/msieroslawska">
        <Image className="svg-icon" src="/img/hackerrank.svg" alt="HackerRank" width={30} height={30} layout="fixed" />
      </a>
    </section>
  </HelloLayout>
);

export default IndexPage;
