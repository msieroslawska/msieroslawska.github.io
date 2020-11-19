import React from 'react';

import PageLayout from '../layouts/Page';
import TodoCourse from '../components/TodoCourse';
import { CourseList, Topic } from '../types';
import { COURSE_LIST, GENERIC_TOPICS, HTML_TOPICS, CSS_TOPICS, JS_TOPICS, QUESTIONS } from '../dataSources/todo';

const renderTodoCourses = (courseList: CourseList[]) =>
  courseList.map(({ author, finished, summary, title, url }) => (
    <TodoCourse key={title} author={author} title={title} url={url} finished={finished} summary={summary} />
  ));

const renderList = (list: string[]) => (
  <ul>
    {list.map((el) => (
      <li key={el}>{el}</li>
    ))}
  </ul>
);

const renderTopicUrl = (url?: string): JSX.Element => (
  <span>
    {' '}
    (<a href={url}>covered</a>)
  </span>
);

const renderTopic = (topicList: Topic[]) => (
  <ul>
    {topicList.map(({ title, url }) => (
      <li key={title}>
        <input type="checkbox" className="todo-checkbox" checked={!!url} readOnly />
        {title}
        {!!url && renderTopicUrl(url)}
      </li>
    ))}
  </ul>
);

const ToDoPage: React.FC = () => (
  <PageLayout header="TODO" title="TODO | Marta Sierosławska">
    <>
      <h2>Courses</h2>
      {renderTodoCourses(COURSE_LIST)}

      <h2>Generic topics to cover in articles</h2>
      {renderList(GENERIC_TOPICS)}

      <h2>List of topics to prepare for an interview as a frontend engineer</h2>
      <p>
        <a href="https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/">Source (PL)</a>
      </p>

      <h3>HTML</h3>
      {renderTopic(HTML_TOPICS)}

      <h3>CSS</h3>
      <p>
        All the following topics should be covered in a similar matter: what that is, how to use it, what the problems
        might be and solutions, limitations and most popular use cases.
      </p>
      {renderTopic(CSS_TOPICS)}

      <h3>JavaScript</h3>
      {renderTopic(JS_TOPICS)}

      <h3>Questions</h3>
      {renderTopic(QUESTIONS)}
    </>
  </PageLayout>
);

export default ToDoPage;
