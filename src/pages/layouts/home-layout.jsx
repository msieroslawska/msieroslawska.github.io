import React from 'react';

import homeStyles from '../../styles/home.module.css';
import DefaultLayout from './default-layout';

export default ({ children }) => (
  <DefaultLayout isHome={false}>
    <div className={homeStyles.main}>
      {children}
    </div>
  </DefaultLayout>
);
