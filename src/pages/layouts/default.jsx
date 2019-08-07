import React from 'react';
import { Helmet } from 'react-helmet';

import defaultStyles from '../../styles/default.module.css';

import Footer from '../partials/footer';

export default ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Marta Sierosławska - Frontend engineer</title>
      <link rel="canonical" href="http://msieroslawska.github.io" />
    </Helmet>
    <main className={defaultStyles.container}>
      {children}
    </main>

    <Footer />
  </>
);
