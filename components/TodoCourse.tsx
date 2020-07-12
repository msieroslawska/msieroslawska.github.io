import React from 'react';

interface Props {
  author: string;
  done: boolean;
  finished?: string;
  summary?: string;
  title: string;
  url: string;
}

const ToDoCourse: React.FunctionComponent<Props> = ({
  author,
  done,
  finished = 'XX.XX.XXXX',
  summary = 'N/A',
  title,
  url,
}: Props) => (
  <>
    <h3>
      {done ? '[x]' : `[ ]`}
      <a href={url}>{title}</a> by {author}
    </h3>
    <p>Finished on {finished}</p>
    <p>
      <strong>Summary:</strong> {summary}
    </p>
  </>
);

export default ToDoCourse;
