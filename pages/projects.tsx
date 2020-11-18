import React from 'react';

import PageLayout from '../layouts/Page';
import Project from '../components/Project';

const ProjectPage: React.FC = () => (
  <PageLayout header="Projects" title="Projects | Marta Sierosławska">
    <h2>msieroslawska.github.io</h2>
    <p>
      <a href="https://github.com/msieroslawska/msieroslawska.github.io">Source code</a>
    </p>
    <p>Status: new version in progress</p>
    <p>v2 stack: next.js, netlify, React + TypeScript, SASS, markdown</p>
    <div className="projects-images">
      <img src="/projects/homepage-v2-01.png" alt="Homepage v2 01" />
      <img src="/projects/homepage-v2-02.png" alt="Homepage v2 02" />
    </div>

    <p>v1 stack: github pages, Jekyll, SASS, markdown</p>
    <div className="projects-images">
      <img src="/projects/homepage-v1-01.png" alt="Homepage v1 01" />
      <img src="/projects/homepage-v1-02.png" alt="Homepage v1 02" />
      <img src="/projects/homepage-v1-03.png" alt="Homepage v1 03" />
    </div>

    <Project
      appLink="https://przepisy-babci-lali.netlify.app"
      name="Przepisy babci Lali"
      stack={['React.js + TypeScript', 'Gatsby', 'styledComponents']}
      repoUrl="https://github.com/msieroslawska/przepisy-babci-lali"
    />

    <Project
      name="Time tracker"
      stack={['React.js (create-react-app)', 'CSS + SASS']}
      repoUrl="https://github.com/msieroslawska/time-tracker"
    />

    <Project
      appLink="https://msieroslawska.github.io/calculator/"
      name="Calculator"
      stack={['React.js (create-react-app)', 'CSS + SASS']}
      repoUrl="https://github.com/msieroslawska/calculator"
    />

    <h2>
      <a href="https://github.com/msieroslawska/coding-problems">HackerRank challenges</a>
    </h2>
  </PageLayout>
);

export default ProjectPage;
