import { CourseList, Topic } from '../types/dataSources';

export const COURSE_LIST: CourseList[] = [
  {
    author: 'Kyle Simpson',
    title: 'JS: The Recent Parts',
    url: 'https://frontendmasters.com/courses/js-recent-parts/',
  },
  {
    author: 'Kyle Simpson',
    title: 'Deep JavaScript Foundations, v3',
    url: 'https://frontendmasters.com/courses/deep-javascript-v3/',
  },
  {
    author: 'Kyle Simpson',
    title: 'Getting Started with JavaScript, v2',
    url: 'https://frontendmasters.com/courses/getting-started-javascript-v2/',
    summary: 'small JS refreshment, nice class.',
    finished: '08.07.2019',
  },
  {
    author: 'Will Sentance',
    title: 'JS: The Hard Parts',
    url: 'https://frontendmasters.com/courses/javascript-hard-parts/',
    summary:
      'absolutely great overview of hard parts in JS. Will proved that you can teach Computer Science without a computer and using a whiteboard instead. Writing everything down from scratch was often tedious, but man, how it helped to understand what is happening!',
    finished: '03.07.2019',
  },
  {
    author: 'Bianca Gandolfo',
    title: 'JS: From Fundamentals to Functional JS, v2',
    url: 'https://frontendmasters.com/courses/js-fundamentals-functional-v2/',
    summary:
      "it was one of the weakest FM classes I've seen so far. Having an interactive style of teaching which involves the students present in the room is beneficial to them, but slows down the pace of the recording. I'd rather be given facts and examples by the teacher than to listen to students trying to figure out the question. I also think that some concepts were not explained very well (curring or closures). If I've never heard of it before, I'd be even more confused.",
    finished: '30.05.2019',
  },
  {
    author: 'Kyle Simpson',
    title: 'Coercion in JavaScript',
    url: 'https://frontendmasters.com/courses/javascript-coercion/',
    summary:
      'a deep dive into different types of coercion. Brings a bit of a headache :) Solution: just use triple equals (`===`)!',
    finished: '28.05.2019',
  },
  {
    author: 'Kyle Simpson',
    title: 'Introduction to JavaScript Programming',
    url: 'https://frontendmasters.com/courses/javascript-basics/',
    summary: 'not too long, it was a nice refreshment of JS fundamentals. I still managed to take some notes :)',
    finished: '15.05.2019',
  },
  {
    author: 'Jon Kuperman',
    title: 'Mastering Chrome Developer Tools, v2',
    url: 'https://frontendmasters.com/courses/chrome-dev-tools-v2/',
    summary:
      "DevTools can definitely look very intimidating. At the same time it's a powerful tool which is a must if running any code in a browser. I'm glad I interjected my JS learning path with this class, because I'm no longer at mercy of `console.log` (it still has its use!)! The videos are enjoyable (even though I had to push myself a little to finish performance- and memory-related parts), Jon is funny and presents really well.",
    finished: '13.05.2019',
  },
  {
    author: 'Brian Holt',
    title: 'Complete Intro to Web Development, v2',
    url: 'https://frontendmasters.com/courses/web-development-v2/',
    summary:
      "it was well-structured and nicely presented. Definitely worth checking out to cover the basics -- even though I thought I knew the topics, I did learn new tricks from each video! That being said, the one part which was relatively new to me was node and creating your own web server. I'm going to definitely add it to my list of TODOs!",
    finished: '23.04.2019',
  },
];

export const GENERIC_TOPICS: string[] = [
  'mastering Git',
  "what's the deal with this??",
  'summary of good practices in React',
  'Linter rules (and why you should be using linter in the first place)',
  'why do I always break npm and what is package.json',
  'just bite node',
  'transpiling, do I even use it?',
  'Object.prototype',
  'passing via value / reference',
  'closures',
  'classes',
  'shallow vs. deep copy',
  'class property syntax',
  'setters and getters',
  '*.es vs. *.js',
  'proxies',
  'documenting functions',
  'undefined, null, NaN',
  'what are APIs and how to test it',
  'proper testing of JS and React (unit tests)',
];

export const HTML_TOPICS: Topic[] = [
  {
    title:
      'Tag semantics - what that is; you know what each tag means; you know how to properly build a website and why',
    url: '/articles/html-semantic-elements',
  },
  {
    title:
      'New tags in HTML5 - you know most of them; you know why they appeared and what they brought; you know how to use them',
    url: '/articles/html5-tags',
  },
  { title: 'API of audio and video tags - how to run a video / audio on a website; how to build a dedicated player' },
  {
    title:
      'Local data storage: LocalStorage / Session Storage / Cookies - what that is; how to use it in JS; what are the differences',
  },
  { title: 'Geolocalisation - what that is; how to use it in JS' },
  { title: 'Web Workers - what that is; sample usage; types of web workers' },
  { title: 'Server-Sent Events - what that is; sample usage' },
  { title: 'DOM - what that is; composition; usage' },
];

export const CSS_TOPICS: Topic[] = [
  { title: 'Flex' },
  { title: 'Float / center' },
  { title: 'Pseudoclass with strong focus on after and before' },
  { title: 'CSS Grid' },
  { title: 'Position' },
  { title: 'CSS animations' },
  { title: 'CSS filters' },
  {
    title: 'CSS specificity',
    url: '/articles/specificity',
  },
  {
    title: 'CSS selectors level 4 - focus on future of CSS, know a few new selectors',
  },
  { title: 'SASS / Less - variables, mixins, style modules' },
  { title: 'Media queries' },
];

export const JS_TOPICS: Topic[] = [
  {
    title: 'Keywords: var, let, const, scoping and hoisting',
    url: '/articles/variables',
  },
  {
    title: 'Data types; primitive and complex type',
    url: '/articles/data-types',
  },
  { title: 'References' },
  { title: 'Closures' },
  { title: 'ES6' },
  { title: 'ES7' },
  { title: 'AJAX - native support, HTML statuses, types of responses' },
  { title: 'Events - existing events; how do they work?' },
  { title: 'Transpilation - what that is; why is it used' },
];

export const QUESTIONS: Topic[] = [
  {
    title: 'What is CSS Specificity? Explain how to calculate it for each particular attribute',
    url: '/articles/specificity',
  },
  { title: 'How to set two elements next to each other? What are characteristics of inline and block elements?' },
  {
    title:
      'How to center an element horizontally and vertically? What are the best solutions for inline and block elements?',
  },
  {
    title:
      'What is REST? How to fetch data from a REST API? How to send data to REST API? What functions, methods and libraries might help you with that? Explain fetch method',
  },
  { title: 'What are +, ~, x in CSS? Give examples' },
  { title: 'Explain :first-child, :first-of-type, :focus, :hover, :checked' },
  { title: 'CSS filers - which do you know? How do you use it, what is the syntax? What are the limitations?' },
  { title: 'Bubbling and capturing - What is that? Do they exist on all events?' },
  { title: 'What design patterns do you know? Are any of them specific to JS?' },
  { title: 'Singleton in JavaScript - methods, execution, problems' },
  {
    title:
      'Module Pattern and its variation - how does it look like; what is it based on; what are its pros and cons; are there alternatives?',
  },
  {
    title:
      'Frontend stack - what do you like to use; pros and cons of each tool; webpack, grunt, gulp, less, sass, npm, yarn',
  },
  { title: 'Interfaces related to Document Object Model - list all you know, describe, execution and examples' },
  {
    title:
      'How would you add a red circle after each inline element? Write a style for an element with an `.item` class',
  },
  {
    title:
      'How do you write animation in CSS? How do you write animation in JS? Give examples. Describe problems and limitations for both options',
  },
];
