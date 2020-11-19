import React from 'react';
import { CourseList } from '../types';

type Props = CourseList;

const renderDetails = (finished: string, summary: string) =>
  finished && (
    <>
      <p>Finished on {finished}</p>
      <p>
        <strong>Summary:</strong> {summary}
      </p>
    </>
  );

const ToDoCourse: React.FC<Props> = ({ author, finished, summary, title, url }) => (
  <>
    <header className="todo-header">
      <input className="todo-checkbox" type="checkbox" checked={!!finished} readOnly />
      <h3 className="todo-headertext">
        <a href={url}>{title}</a> by {author}
      </h3>
    </header>

    {finished && summary && renderDetails(finished, summary)}
  </>
);

export default ToDoCourse;
