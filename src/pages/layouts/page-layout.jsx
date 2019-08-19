import React from 'react';

import defaultStyles from '../../styles/default.module.css';

import DefaultLayout from './default-layout';

export default ({ children }) => (
  <DefaultLayout>
    <div className={defaultStyles.content}>
      {children}
    </div>
  </DefaultLayout>
);
