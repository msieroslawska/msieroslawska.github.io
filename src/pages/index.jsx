import React from 'react';
import homeStyles from '../styles/home.module.css';
import HomeLayout from './layouts/home-layout';
import Template from './layouts/blog-layout';

import Social from './partials/social';

const descriptionText = 'This page is a playground and a notebook for my experiments. I would like to document here my programming progress and write down all the notes I might need later.';

export default () => (
  <HomeLayout>
    <h1 className={homeStyles.hello}>Hello, I&apos;m Marta!</h1>
    <h2 className={homeStyles.tagline}>Frontend engineer</h2>
    <h3 className={homeStyles.description}>{descriptionText}</h3>
    <Social />

    <Template />

  </HomeLayout>
);
