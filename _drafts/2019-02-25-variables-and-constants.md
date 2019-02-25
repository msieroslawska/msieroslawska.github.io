---
layout: post
title:  "[What a Frontend Engineer should know] Variables and constants"
date:   2019-02-25 21:04:10 +0100
categories: javascript frontend es2015
---

*This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer.*

JavaScript has multiple options for declaring variables. The old standard was using `var`, but ES2015 has introduced more detailed `let` and `const` in order to block-scope the variables.

<!--more-->

# `var`

A standard container to store variables. The most simple usage assumes one declaration of a variable with possibility of re-assignments later:

```javascript
var a = 1; // a equals 1
a = 3; // a equals 3
```

You can declare a variable first without specifying its value:

```javascript
var a; // a is undefined
a = 1; // a equals 1
a = 3; // a equals 3
```

*Undefined* means "I know this variable exists, I just don't know its value (yet)".

Redeclaring the same variable is not allowed:

```javascript
var a = 1; // a equals 1
var a = 3; // ERROR
```

It is possible to declare multiple variables in one line without having to type `var` for each one:

```javascript
var a, b = 1, c = 'dog';
// a is undefined
// b equals 1
// c equals to 'dog'
```

The above example can be spanned across more than one line:

```javascript
var a,
b = 1,
c = 'dog';
```

## Scope

Scope defines where the variable and its value are seen. Consider the following example:

```javascript
var a = 10; // a equals 10

function newFunction() {
  var a = 20; // a equals 20
}

console.log(a); // output: 10
```

Declaration of the variable `a` inside the `newFunction` is possible and valid because of different scopes. First declaration sets `a`'s scope as global (visible in the entire script), while `a` from `newFunction` exists and is visible only within that function.

Let's try a similar example:

```javascript
var a = 10; // a equals 10

function newFunction() {
  var b = 20; // b equals 20
}

console.log(a); // output: 10
console.log(b); // ERROR: b is not defined
```

But what happens if I remove variable declaration inside the function?

```javascript
var a = 10; // a equals 10

function newFunction() {
  a = 20; // a equals 20
}

console.log(a); // output: 10
```

This happens because variables declared with `var` are **always** hoisted to the top of their scope. That is the reason why the following code does not show errors:

```javascript
console.log(a); // output: undefined
var a = 3; // a equals 3
```

The interpreter executes the above code in the following order:

```javascript
var a; // a is undefined
console.log(a) // output: undefined
a = 3; // a equals 3
```

Variables declared as `var`s are function-scoped (exist within limits of functions where they were declared, as in example above), but **not** block-scoped:

```javascript
var a = 0; // a equals 0

if (true) {
  a = 3; // a equals 3
}

console.log(a); // output: 3
```

The interpreter ignores `if` as a scope delimiter. Whatever happens to global variables in blocks, also affects code outside those blocks.

Such behavior sometimes is the author's intention, but scoping and overriding variables in blocks might cause quite a headache!

# `let`

`let`'s scope is function- and block-scoped. Consider this slightly changed code from the previous example:

```javascript
let a = 0; // a equals 0

if (true) {
  let a = 3; // a equals 3
}

console.log(a); // output: 0
```

In this case, `a` equaled 3 only **locally** inside the `if` block. Once outside, the interpreter "forgot" the `a = 3` assignment.

Variables declared as `let` (and `const`) are **not** hoisted! The following code would throw errors:

```javascript
console.log(a); // ERROR: a is not defined
let a = 3; // a equals 3
```

# `const`

Once declared, a variable cannot be reassigned:

```javascript
const a = 10; // a equals 10
a = 2; // ERROR: invalid assignment to const
console.log(a); // output: 10
```

Mutation of constants is allowed though:

```javascript
const a = {}; // a equals {}
a.b = 1; // a equals { b: 1 }
```

Constants also have to be initialized with a value:

```javascript
const a; // ERROR: missing = in constant declaration
```

`const`'s scope is the same as `let`: function- and block-scoped.

# Sources:

* [W3Schools](https://www.w3schools.com/js/js_variables.asp)
* [Hackernoon](https://hackernoon.com/js-var-let-or-const-67e51dbb716f)