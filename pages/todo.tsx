import React from 'react';

import PageLayout from '../layouts/Page';
import TodoCourse from '../components/TodoCourse';
import { Url } from '../interfaces';

const crumbs: Url[] = [{ href: '/', name: 'Home' }];

const ToDoPage: React.FC = () => (
  <PageLayout crumbs={crumbs} header="TODO" title="TODO | Marta Sierosławska">
    <>
      <h2>Courses</h2>
      <TodoCourse
        author="Kyle Simpson"
        done={false}
        title="JS: The Recent Parts"
        url="https://frontendmasters.com/courses/js-recent-parts/"
      />
      <TodoCourse
        author="Kyle Simpson"
        done={false}
        title="Deep JavaScript Foundations, v3"
        url="https://frontendmasters.com/courses/deep-javascript-v3/"
      />
      <TodoCourse
        author="Kyle Simpson"
        done
        finished="08.07.2019"
        summary="small JS refreshment, nice class."
        title="Getting Started with JavaScript, v2"
        url="https://frontendmasters.com/courses/getting-started-javascript-v2/"
      />
      <TodoCourse
        author="Will Sentance"
        done
        finished="03.07.2019"
        summary="absolutely great overview of hard parts in JS. Will proved that you can teach Computer Science without a computer and using a whiteboard instead. Writing everything down from scratch was often tedious, but man, how it helped to understand what is happening!"
        title="JS: The Hard Parts"
        url="https://frontendmasters.com/courses/javascript-hard-parts/"
      />
      <TodoCourse
        author="Bianca Gandolfo"
        done
        finished="30.05.2019"
        summary="it was one of the weakest FM classes I've seen so far. Having an interactive style of teaching which involves the students present in the room is beneficial to them, but slows down the pace of the recording. I'd rather be given facts and examples by the teacher than to listen to students trying to figure out the question. I also think that some concepts were not explained very well (curring or closures). If I've never heard of it before, I'd be even more confused."
        title="JS: From Fundamentals to Functional JS, v2"
        url="https://frontendmasters.com/courses/js-fundamentals-functional-v2/"
      />
      <TodoCourse
        author="Kyle Simpson"
        done
        finished="28.05.2019"
        summary="a deep dive into different types of coercion. Brings a bit of a headache :) Solution: just use triple equals (`===`)!"
        title="Coercion in JavaScript"
        url="https://frontendmasters.com/courses/javascript-coercion/"
      />
      <TodoCourse
        author="Kyle Simpson"
        done
        finished="15.05.2019"
        summary="not too long, it was a nice refreshment of JS fundamentals. I still managed to take some notes :)"
        title="Introduction to JavaScript Programming"
        url="https://frontendmasters.com/courses/javascript-basics/"
      />
      <TodoCourse
        author="Jon Kuperman"
        done
        finished="13.05.2019"
        summary="DevTools can definitely look very intimidating. At the same time it's a powerful tool which is a must if running any code in a browser. I'm glad I interjected my JS learning path with this class, because I'm no longer at mercy of `console.log` (it still has its use!)! The videos are enjoyable (even though I had to push myself a little to finish performance- and memory-related parts), Jon is funny and presents really well."
        title="Mastering Chrome Developer Tools, v2"
        url="https://frontendmasters.com/courses/chrome-dev-tools-v2/"
      />
      <TodoCourse
        author="Brian Holt"
        done
        finished="23.04.2019"
        summary="it was well-structured and nicely presented. Definitely worth checking out to cover the basics -- even though I thought I knew the topics, I did learn new tricks from each video! That being said, the one part which was relatively new to me was node and creating your own web server. I'm going to definitely add it to my list of TODOs!"
        title="Complete Intro to Web Development, v2"
        url="https://frontendmasters.com/courses/web-development-v2/"
      />

      <h2>Generic topics to cover in articles</h2>
      <ul>
        <li>mastering Git,</li>
        <li>what&apos;s the deal with this??</li>
        <li>summary of good practices in React,</li>
        <li>Linter rules (and why you should be using linter in the first place)</li>
        <li>
          why do I always break npm and what is <code>package.json</code>,
        </li>
        <li>just bite node,</li>
        <li>transpiling, do I even use it?</li>
        <li>
          <code>Object.prototype</code>,
        </li>
        <li>passing via value / reference,</li>
        <li>closures,</li>
        <li>classes,</li>
        <li>shallow vs. deep copy,</li>
        <li>class property syntax,</li>
        <li>setters and getters,</li>
        <li>
          <code>*.es</code> vs. <code>*.js</code>,
        </li>
        <li>proxies,</li>
        <li>documenting functions,</li>
        <li>
          <code>undefined</code>, <code>null</code>, <code>NaN</code>,
        </li>
        <li>what are APIs and how to test it,</li>
        <li>proper testing of JS and React (unit tests).</li>
      </ul>

      <h2>List of topics to prepare for an interview as a frontend engineer</h2>
      <p>
        <a href="https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/">Source (PL)</a>
      </p>

      <h3>HTML</h3>
      <ul>
        <li>
          [x] Tag semantics - what that is; you know what each tag means; you know how to properly build a website and
          why (<a href="/articles/html-semantic-elements">covered</a>).
        </li>
        <li>
          [x] New tags in HTML5 - you know most of them; you know why they appeared and what they brought; you know how
          to use them (<a href="/articles/html5-tags">covered</a>).
        </li>
        <li>
          [ ] API of audio and video tags - how to run a video / audio on a website; how to build a dedicated player.
        </li>
        <li>
          [ ] Local data storage: LocalStorage / Session Storage / Cookies - what that is; how to use it in JS; what are
          the differences.
        </li>
        <li>[ ] Geolocalisation - what that is; how to use it in JS.</li>
        <li>[ ] (\*) Web Workers - what that is; sample usage; types of web workers.</li>
        <li>[ ] (\*) Server-Sent Events - what that is; sample usage.</li>
        <li>[ ] Web API novelties - generic idea what that is; how it differs from JS; some examples and usage.</li>
        <li>[ ] DOM - what that is; composition; usage.</li>
      </ul>

      <h3>CSS</h3>
      <p>
        All the following topics should be covered in a similar matter: what that is, how to use it, what the problems
        might be and solutions, limitations and most popular use cases.
      </p>
      <ul>
        <li>[ ] Flex</li>
        <li>[ ]Float / Clear</li>
        <li>[ ] CSS Grid</li>
        <li>
          [ ] Pseudoclass with strong focus on <code>after</code> and <code>before</code>
        </li>
        <li>[ ] Position</li>
        <li>[ ] CSS animations</li>
        <li>[ ] CSS filters</li>
        <li>
          [ ] CSS specificity (<a href="/articles/specificity">covered</a>)
        </li>
        <li>[ ] CSS selectors level 4 - focus on future of CSS, know a few new selectors</li>
        <li>[ ] SASS/LESS - variables, mixins, style modules</li>
        <li>[ ] Media queries</li>
      </ul>

      <h3>JavaScript</h3>
      <ul>
        <li>
          [x] Keywords: var, let, const; scoping and hoisting (<a href="/articles/variables">covered</a>)
        </li>
        <li>
          [x] Data types; primitive and complex types (<a href="/articles/data-types">covered</a>)
        </li>
        <li>[ ] References</li>
        <li>[ ] Closures</li>
        <li>[ ] ES6</li>
        <li>[ ] ES7</li>
        <li>[ ] AJAX - native support, HTML ststuses, types of responses</li>
        <li>[ ] Events - existing events; how do they work?</li>
        <li>[ ] Transpilation - what that is; why is it used</li>
      </ul>

      <h3>Questions</h3>
      <ul>
        <li>
          [x] What is CSS Specificity? Explain how to calculate it for each particular attribute (
          <a href="/articles/specificity">covered</a>)).
        </li>
        <li>[ ] How to set two elements next to each other? What are characteristics of inline and block elements?</li>
        <li>
          [ ] How to center an element horizontally and vertically? What are the best solutions for inline and block
          elements?
        </li>
        <li>
          [ ] What is REST? How to fetch data from a REST API? How to send data to REST API? What functions, methods and
          libraries might help you with that? Explain fetch method.
        </li>
        <li>
          [ ] What are <code>+</code>, <code>~</code>, <code>x</code> in CSS? Give examples.
        </li>
        <li>
          [ ] Explain <code>:first-child</code>, <code>:first-of-type</code>, <code>:focus</code>, <code>:hover</code>,{' '}
          <code>:checked</code>.
        </li>
        <li>[ ] CSS filers - which do you know? How do you use it, what is the syntax? What are the limitations?</li>
        <li>[ ] Bubbling and capturing - What is that? Do they exist on all events?</li>
        <li>[ ] What design patterns do you know? Are any of them specific to JS?</li>
        <li>[ ] (\*) Singleton in JavaScript - methods, execution, problems.</li>
        <li>
          [ ] Module Pattern and its variation - how does it look like; what is it based on; what are its pros and cons;
          are there alternatives?
        </li>
        <li>
          [ ] Frontend stack - what do you like to use; pros and cons of each tool; webpack, grunt, gulp, less, sass,
          npm, yarn.
        </li>
        <li>
          [ ] (\*) Interfaces related to Document Object Model - list all you know, describe, execution and examples.
        </li>
        <li>
          [ ] How would you add a red circle after each inline element? Write a style for an element with an `.item`
          class.
        </li>
        <li>
          [ ] How do you write animation in CSS? How do you write animation in JS? Give examples. Describe problems and
          limitations for both options.
        </li>
      </ul>
    </>
  </PageLayout>
);

export default ToDoPage;
