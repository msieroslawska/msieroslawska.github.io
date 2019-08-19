import React from 'react';

import defaultStyles from '../../styles/default.module.css';

export default () => (
  <footer className={defaultStyles.footer}>
    <p className={defaultStyles.footerText}>
      Powered by <a href="https://www.gatsbyjs.org">Gatsby</a> &#9679; Hosted by <a href="https://www.github.com">Github</a>
    </p>
  </footer>
);
