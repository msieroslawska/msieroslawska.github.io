import React from 'react';

import defaultStyles from '../../styles/default.module.css';
import pageStyles from '../../styles/page.module.css';

import DefaultLayout from './default';
import Nav from '../partials/nav';

export default ({ children }) => (
  <DefaultLayout>
    <Nav navClass={pageStyles.nav} />

    <main className={defaultStyles.container}>
      <div className={defaultStyles.content}>
        {children}
      </div>
    </main>
  </DefaultLayout>
);
