import React from 'react';

interface Props {
  appLink?: string;
  name: string;
  stack: string[];
  repoUrl: string;
}

const createImplementationLink = (link: string) => (
  <p>
    <strong>Implementation: </strong>
    <a href={link}>{link}</a>
  </p>
);

const Project: React.FC<Props> = ({ appLink, name, stack = [], repoUrl }) => (
  <section>
    <h2>{name}</h2>
    {appLink && createImplementationLink(appLink)}
    <p>
      Repo: <a href={repoUrl}>{repoUrl}</a>
    </p>
    <p>Stack: </p>
    <ul>
      {stack.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </section>
);

export default Project;
