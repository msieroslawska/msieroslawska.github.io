import React from 'react';
import helloStyles from '../styles/index.module.css';
import HomeLayout from './layouts/home';

import Social from './partials/social';

const descriptionText = 'This page is a playground and a notebook for my experiments. I would like to document here my programming progress and write down all the notes I might need later.';

export default () => (
  <HomeLayout>
    <h1 className={helloStyles.hello}>Hello, I&apos;m Marta!</h1>
    <h2 className={helloStyles.tagline}>Frontend engineer</h2>
    <h3 className={helloStyles.description}>{descriptionText}</h3>
    <Social />

  </HomeLayout>
);
