import React from 'react';
import { Link } from 'gatsby';

import homeStyles from '../../styles/home.module.css';
import pageStyles from '../../styles/page.module.css';

export default ({ isHome = true }) => (
  <nav className={pageStyles.nav}>
    {isHome
      && <Link className={homeStyles.nav} to="/">Main page</Link>}
    <Link className={homeStyles.nav} to="/about">About</Link>
    <Link className={homeStyles.nav} to="/articles">Articles</Link>
    <Link className={homeStyles.nav} to="/codelogs">Codelogs</Link>
    <Link className={homeStyles.nav} to="/projects">Projects</Link>
    <Link className={homeStyles.nav} to="/resources">Resources</Link>
    <Link className={homeStyles.nav} to="/topic-list">Topic list</Link>
  </nav>
);
