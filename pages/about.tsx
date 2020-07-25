import React from 'react';

import PageLayout from '../layouts/Page';

const AboutPage: React.FunctionComponent = () => (
  <PageLayout header="About" title="About | Marta Sierosławska">
    <img className="about marta" src="/img/marta.jpg" alt="Marta" />

    <p>
      I am a silly geek born and raised in Poland, currently enjoying my life and trying to speak German in Munich,
      Germany. I am stereotypical to the bone: I like books, video games and quiet evenings at home, sharing my couch
      with Arya the Corgi. If we don&apos;t stay indoors we go for hikes or travel around.
    </p>

    <p>
      I used to be a Linux power user, but I betrayed the penguin for the sake of the popular fruit. Life ¯\\\_(ツ)_/¯
    </p>

    <img className="about doggo" src="/img/arya.jpg" alt="Arya" />

    <p>
      Professionally I have become a bit of Jack of all trades. While I always enjoyed playing with code, I have
      initially decided to proceed on a path of testing. I pay great attention to detail (yes, I *know* my picture is
      not centered!) and enjoy creating new stuff. All of this creates quite a combo: I develop with great respect for
      quality and testability. I believe being on the both sides of the dev - QA field gives me an interesting
      perspective.
    </p>

    <p>
      Tech stack I&apos;m using daily involves: JavaScript / TypeScript, React.js, HTML5 + CSS + Less, MongoDB,
      Express.js and obviously git-based version control. I strongly believe in comprehensive unit testing and using
      linters to make your life easier.
    </p>

    <p>
      Besides getting better in what I already use, I&apos;m currently also looking into React Hooks (I&apos;m honestly
      getting hooked!) and basics of UX.
    </p>
  </PageLayout>
);

export default AboutPage;
