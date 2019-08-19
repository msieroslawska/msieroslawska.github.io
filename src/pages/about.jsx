import React from 'react';
import aboutStyles from '../styles/about.module.css';
import PageLayout from './layouts/page-layout';

import doggo from '../assets/arya.jpg';
import marta from '../assets/marta.jpg';

const About = () => (
  <PageLayout>
    <div>
      <h2>About</h2>

      <img className={aboutStyles.marta} src={marta} alt="Marta" />

      <p>I am a silly geek born and raised in Poland, currently enjoying my life and trying to speak German in Munich, Germany. I am stereotypical to the bone: I like books, video games and quiet evenings at home, sharing my couch with Arya the Corgi. If we don’t stay indoors we go for hikes or travel around.</p>

      <p>I used to be a Linux power user, but I betrayed the penguin for the sake of the popular fruit. Life ¯\_(ツ)_/¯</p>

      <img className={aboutStyles.doggo} src={doggo} alt="Doggo" />

      <p>Professionally I have become a bit of Jack of all trades. While I always enjoyed playing with code, I have initially decided to proceed on a path of testing. I pay great attention to detail (yes, I know my picture is not centered!) and enjoy creating new stuff. All of this creates quite a combo: I develop with great respect for quality and testability. I believe being on the both sides of the dev - QA field gives me an interesting perspective.</p>


      <p>On my daily basis I am working with:</p>

      <ul>
        <li>JavaScript + ES6 + Mocha,</li>
        <li>React.JS,</li>
        <li>HTML5 + CSS3 + Sass + Handlebars,</li>
        <li>Jenkins + Groovy,</li>
        <li>Git (Github),</li>
        <li>Jira.</li>
      </ul>

      <p>Besides getting better in what I already use, I’m currently also looking into (a.k.a. <em>learning</em>):</p>

      <ul>
        <li>TypeScript,</li>
        <li>algorithms,</li>
        <li>testing React (and good practices for that),</li>
        <li>what is the big deal about React hooks :D.</li>
      </ul>

    </div>
  </PageLayout>
);

export default About;
