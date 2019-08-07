import React from 'react';
import { Link } from 'gatsby';

import helloStyles from '../../styles/index.module.css';

export default () => (
  <nav>
    <Link className={helloStyles.nav} to="/">Main page</Link>
    <Link className={helloStyles.nav} to="/about">About</Link>
    <Link className={helloStyles.nav} to="/articles">Articles</Link>
    <Link className={helloStyles.nav} to="/codelogs">Codelogs</Link>
    <Link className={helloStyles.nav} to="/projects">Projects</Link>
    <Link className={helloStyles.nav} to="/resources">Resources</Link>
    <Link className={helloStyles.nav} to="/topic-list">Topic list</Link>
  </nav>
);
