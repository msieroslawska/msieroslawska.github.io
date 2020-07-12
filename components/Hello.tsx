import React from 'react';

const Hello: React.FunctionComponent = () => (
  <main className="hello-wrapper">
    <h1 className="hello">Hello! I&apos;m Marta!</h1>
    <h2>Frontend engineer</h2>

    <section>
      This page is a playground and a notebook for my experiments. I would like to document here my programming progress
      and write down all the notes I might need later.
    </section>

    <section>
      <a href="https://github.com/msieroslawska">
        <img className="svg-icon" src="/img/github.svg" alt="Github" />
      </a>

      <a href="https://www.linkedin.com/in/martasieroslawska">
        <img className="svg-icon" src="/img/linkedin.svg" alt="linkedin" />
      </a>

      <a href="https://www.hackerrank.com/msieroslawska">
        <img className="svg-icon" src="/img/hackerrank.svg" alt="HackerRank" />
      </a>
    </section>
  </main>
);

export default Hello;
