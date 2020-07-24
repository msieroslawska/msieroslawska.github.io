import React from 'react';

import PageLayout from '../layouts/Page';
import Project from '../components/Project';

const ProjectPage: React.FunctionComponent = () => (
  <PageLayout header="Projects" title="Projects | Marta Sierosławska">
    <h2>msieroslawska.github.io</h2>
    <p>
      <a href="https://github.com/msieroslawska/msieroslawska.github.io">Source code</a>
    </p>
    <p>Status: new version in progress</p>
    <p>v1 stack: github pages, Jekyll, SASS, markdown</p>
    <img src="/projects/homepage-v1-01.png" alt="Homepage v1 01" />
    <img src="/projects/homepage-v1-02.png" alt="Homepage v1 02" />
    <img src="/projects/homepage-v1-03.png" alt="Homepage v1 03" />
    <Project
      name="Time tracker"
      stack={['React.js (create-react-app)', 'CSS + SASS', 'npm']}
      url="https://github.com/msieroslawska/time-tracker"
    />
    <Project
      implementation="https://msieroslawska.github.io/calculator/"
      name="Calculator"
      stack={['React.js (create-react-app)', 'CSS + SASS', 'npm']}
      url="https://github.com/msieroslawska/calculator"
    />
    <h2>
      <a href="https://github.com/msieroslawska/coding-problems">HackerRank challenges</a>
    </h2>
    <h2>
      <a href="https://github.com/msieroslawska/msieroslawska.github.io/tree/master/projects/">
        Projects for Frontend Masters classes
      </a>
    </h2>
    <ol>
      <li>
        Getting Started with JavaScript, v2
        <ul>
          <li>
            <a href="https://frontendmasters.com/courses/getting-started-javascript-v2/">class page</a>
          </li>
          <li>
            <a href="https://github.com/msieroslawska/msieroslawska.github.io/tree/master/projects/JS-getting-started/three-pillars">
              implementation
            </a>
          </li>
        </ul>
      </li>
      <li>
        Complete intro to web development
        <ul>
          <li>
            <a href="https://frontendmasters.com/courses/web-development-v2/">class page</a>
          </li>
          <li>
            Project 1: The News Times -- create a page and styles to get the following result:
            <br />
            <img src="/projects/the-news-times.png" alt="The News Times" />
            <br />
            <a href="https://msieroslawska.github.io/projects/web-dev/01-The-news-times/">result</a> and{' '}
            <a href="https://github.com/msieroslawska/msieroslawska.github.io/tree/master/projects/web-dev/01-The-news-times">
              implementation
            </a>
            <br />
            <p>Stack: HTML + CSS</p>
          </li>
          <li>
            Project 2: Create vanilla JS calculator:
            <br />
            <img src="/projects/calculator.png" alt="Calculator" />
            <br />
            <a href="https://msieroslawska.github.io/projects/web-dev/02-Calculator/">result</a> and{' '}
            <a href="https://github.com/msieroslawska/msieroslawska.github.io/tree/master/projects/web-dev/02-Calculator">
              implementation
            </a>
            <br />
            <p>Stack: HTML + CSS + JS (grid)</p>
          </li>
          <li>
            Project 3: Fetcher for randomized doggo pics -- use dog.ceo API to display random pictures of cute doggos:
            <br />
            <img src="/projects/dog-ceo.png" alt="Doggos" />
            <br />
            <a href="https://msieroslawska.github.io/projects/web-dev/03-dog-ceo/">result</a> and{' '}
            <a href="https://github.com/msieroslawska/msieroslawska.github.io/tree/master/projects/web-dev/03-dog-ceo">
              implementation
            </a>
            <br />
            <p>Stack: HTML + CSS + JS + npm + AJAX</p>
          </li>
        </ul>
      </li>
    </ol>
  </PageLayout>
);

export default ProjectPage;
