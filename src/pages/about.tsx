import React, { ReactElement } from 'react';
import styled from 'styled-components';

import MainLayout from '../layouts/main-layout';
import doggo from '../assets/arya.jpg';
import marta from '../assets/marta.jpg';

const Doggo = styled.img`
  height: 150px;
  width: 150px;
  float: right;
  border-radius: 50%;
  margin: 20px;
`;

const Marta = styled.img`
  height: 180px;
  width: 180px;
  float: left;
  border-radius: 50%;
  margin: 20px;
`;

const About = (): ReactElement => (
  <MainLayout>
    <h2>About</h2>

    <Marta src={marta} alt="Marta" />

    <p>
      I am a silly geek born and raised in Poland, currently enjoying my life and trying
      to speak German in Munich, Germany. I am stereotypical to the bone: I like books,
      video games and quiet evenings at home, sharing my couch with Arya the Corgi.
      If we don’t stay indoors we go for hikes or travel around.
    </p>

    <p>
      I used to be a Linux power user, but I betrayed the penguin for
      the sake of the popular fruit ¯\_(ツ)_/¯. My current OS situation is a bit funny:
      I work on Fedora, play video games on Windows and use Mac as my main machine.
    </p>

    <Doggo src={doggo} alt="Doggo" />

    <p>
      Professionally I have become a bit of Jack of all trades. While I always enjoyed
      playing with code, I have initially decided to proceed on a path of testing.
      I pay great attention to detail (yes, I know my picture is not
      centered!) and enjoy creating new stuff. All of this creates quite a combo:
      I develop with great respect for quality and testability. I believe being
      on the both sides of the dev - QA field gives me an interesting
      perspective.
    </p>

    <p>My current tech stack involves:</p>

    <ul>
      <li>TypeScript,</li>
      <li>React, React-Router, React-Redux</li>
      <li>HTML5 + CSS3 + Less,</li>
      <li>MongoDB,</li>
      <li>RabbitMQ,</li>
      <li>Bamboo,</li>
      <li>Git (Bitbucket).</li>
    </ul>

    <p>In the past projects, I have also been working with:</p>

    <ul>
      <li>JavaScript + ES6 + Mocha,</li>
      <li>Sass + Handlebars,</li>
      <li>Jenkins + Groovy,</li>
      <li>Git (Github).</li>
    </ul>

    <p>
      Besides getting better in what I already use, I’m currently also looking into (a.k.a.
      <em>learning</em>
      ):
    </p>

    <ul>
      <li>deep JS foundations,</li>
      <li>algorithms,</li>
      <li>testing React (and good practices for that),</li>
      <li>what is the big deal about React hooks :D.</li>
    </ul>
  </MainLayout>
);

export default About;
