import React from 'react';

import helloStyles from '../../styles/index.module.css';
import DefaultLayout from './default';
import Nav from '../partials/nav';

export default ({ children }) => (
  <DefaultLayout>
    <div className={helloStyles.main}>
      {children}
      <Nav />
    </div>
  </DefaultLayout>
);
