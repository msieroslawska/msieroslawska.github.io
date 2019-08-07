import React from 'react';

import defaultStyles from '../../styles/default.module.css';
import helloStyles from '../../styles/index.module.css';
import DefaultLayout from './default';
import Nav from '../partials/nav';

export default ({ children }) => (
  <DefaultLayout>
    <main className={defaultStyles.container}>
      <div className={helloStyles.main}>
        {children}
        <Nav />
      </div>
    </main>
  </DefaultLayout>
);
