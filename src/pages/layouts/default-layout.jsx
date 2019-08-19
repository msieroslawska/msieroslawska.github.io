import React from 'react';
import { Helmet } from 'react-helmet';

import defaultStyles from '../../styles/default.module.css';

import Footer from '../partials/footer';
import Nav from '../partials/nav';

export default ({ children, isHome }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Marta Sierosławska - Frontend engineer</title>
      <link rel="canonical" href="http://msieroslawska.github.io" />
    </Helmet>
    <div className={defaultStyles.background}>
      <Nav isHome={isHome} />
      <main className={defaultStyles.contentContainer}>
        {children}
      </main>

      <Footer />
    </div>
  </>
);
