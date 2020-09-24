import React from 'react';

interface Props {
  implementation?: string;
  name: string;
  stack?: string[];
  url: string;
}

const Project: React.FC<Props> = ({ implementation = 'not ready yet', name, stack = [], url }) => (
  <>
    <h2>
      <a href={url}>{name}</a>
    </h2>
    <p>
      <strong>Implementation: </strong>
      {implementation}
    </p>
    <p>Stack: </p>
    <ul>
      {stack.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </>
);

export default Project;
