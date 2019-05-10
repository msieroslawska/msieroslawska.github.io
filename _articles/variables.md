---
layout: article
title:  "[What a Frontend Engineer should know] Keywords: var, let, const; scoping and hoisting"
---

*This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer.*

------------

`const` stands for *constant* meaning that once declared, a constant variable cannot be reassigned.

```javascript
const c = true;
      c = 'test'; // TypeError: invalid assignment to const 'c'
```

`var` and `let` behave the same in terms of assigning a value: declare the variable once and you can reassign to it later as many times as you wish.

```javascript
var a = 1;
    a = 'test';
let b = 2;
    a = true;
    b = 1;
```

That is where similarities between `var` and `let` ends.

## Scoping

### `var` is scoped to the nearest function block

```javascript
function varTest() {
  var a = true;

  if (a) {
    var b = 'test';
  }

  console.log(b); // 'test'
}
```

### `let` is scoped to the nearest enclosing block

```javascript
function letTest() {
  let a = true;

  if (a) {
    let b = 'test';
  }

  for (let i = 0; i < 1; i++) {
    console.log(i); // 0
  }

  console.log(b); // ReferenceError: b is not defined
  console.log(i); // ReferenceError: i is not defined
}
```

A more complicated example:

```javascript
let a = 'blue';
var b = 'green';

if (true) {
  let a = 'red'; // local variable
  var b = 'black'; // global variable

  console.log(a); // 'red'
  console.log(b); // 'black'
}

console.log(a); // 'blue'
console.log(b); // 'black'
```

### `var` adds to the global scope

```javascript
var a = 1;
let b = 2;

console.log(window.a); // 1
console.log(window.b); // undefined
```

## Hoisting

Fact 1: JavaScript initializes all variable as `undefined`.

Fact 2: `var` variables are *hoisted*. It means their declaration is moved to the top of the current scope.

This is why the following code executes without issues:

```javascript
x = 2;
var x;
console.log(x); // 2
```

Please note that only variable **declaration** is moved, not assignment:

```javascript
var x;
console.log(x); // undefined
x = 2;
```

```javascript
console.log(x); // undefined
var x = 2;
```

Fact 3: `let` and `const` variables are **NOT hoisted**.

```javascript
x = 2; // ReferenceError: can't access lexical declaration `x' before initialization
let x;
console.log(x);
```

## Conclusion: why?

- It is always a good idea to avoid using global scope whenever possible.
- Using `let` instead of `var` eliminates possible bugs coming from accidental variable overriding.
- Assume `const` as default for your variables. Use `let` only in cases you need to reassign it.
- If you have to use `var`, declare it always at the top of the scope. Hoisting can lead to weird bugs.

Just forget about `var` for your own good :)!

## Sources

- [hackernoon.com](https://hackernoon.com/heres-the-difference-between-let-and-var-in-javascript-83d8864b74c0)
- [www.w3schools.com](https://www.w3schools.com/js/js_hoisting.asp)