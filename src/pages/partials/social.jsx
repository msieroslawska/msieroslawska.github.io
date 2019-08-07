import React from 'react';

import helloStyles from '../../styles/index.module.css';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import hackerrank from '../../assets/hackerrank.svg';

export default () => (
  <div>
    <a href="https://github.com/msieroslawska">
      <img className={helloStyles.social} src={github} alt="Github" />
    </a>

    <a href="https://www.linkedin.com/in/martasieroslawska">
      <img className={helloStyles.social} src={linkedin} alt="Linkedin" />
    </a>

    <a href="https://www.hackerrank.com/msieroslawska">
      <img className={helloStyles.social} src={hackerrank} alt="Hackerrank" />
    </a>
  </div>
);
