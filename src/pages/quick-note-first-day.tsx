import React, { ReactElement } from 'react';

const QuickNote = (): ReactElement => (
  <div>
    <p>
      For some bizzare reason I have decided to reanimate this project and continue my
      work with Gatsby. Thanks to my new awesome job, I am getting familiar with Typescript,
      so hey, why not use it here?
    </p>

    <p>Good riddance, what a stupid idea that was.</p>

    <p>
      I am writing this quick note right now, so I can incorporate my rants later
      into blog post list.
    </p>

    <p>
      It took me <strong>FOREVER</strong> to setup the project. Mostly because I have
      decided I want to work on my old config.
    </p>

    <p>
      (<em>Yet another stupid idea this evening...</em>)
    </p>

    <p>
      After at least an hour of setting up <code>npm</code>, I ended up removing most of
      config files and setting up everything basically from scratch. No Gatsby starters.
      Good luck typing those without having any idea what is happening.
    </p>

    <p>
      The most important highlight of the day: do not open multiple projects in VSCode if you do not install
      <code>eslint</code> globally. You will save hours without having to figure out why it <strong>CONSTANTLY</strong>
      complains about not being able to find plugins.
    </p>
  </div>
);

export default QuickNote;
