import React from 'react';

import defaultStyles from '../../styles/default.module.css';
import DefaultLayout from './default';
import Nav from '../partials/nav';

export default ({ children }) => (
  <DefaultLayout>
    <div className={defaultStyles.content}>
      <Nav />
      {children}
    </div>
  </DefaultLayout>
);
