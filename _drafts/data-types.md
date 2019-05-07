---
layout: article
title:  "[What a Frontend Engineer should know] Data types; primitive and complex types"
---

*This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer.*

------------

Javascript is *dynamically typed* programming language, meaning that the same variable can contain different data types.

```javascript
let x = 'a';   // String
    x = 1;     // Number
    x = true;  // Boolean
```

ECMAScript defines 8 data types:

1. `String`
2. `Number`
3. `Boolean`
4. `Symbol`
5. `bigint`
6. `Undefined`
7. `Null`
8. `Object`

## Primitive data types

String, Number, Boolean, Symbol, bigint, Undefined and Null are **primitive** data types. They are *immutable* (cannot be changed) and have no methods.

### `String`

Used to represent textual data contained in single- `'` and double quotes `"` (and backticks `` ` `` which are a special use case). Each element in `String` has a position, where first one is at position (index) 0. Total length of a `String` is the number of elements in it.

### `Number`

It is one of built-in numeric types (second one being `bigint`) representing numbers between -2<sup>53</sup>-1 and 2<sup>53</sup>-1 (both for *integer* and *floating point*).

Besides regular numbers, there are also *special numerical values*:

- `+Infinity`,
- `-Infinity`,
- `NaN` (not a number).

To check the minimum / maximum available number between `-Infinity` and `+Infinity` you can use constants `Number.MIN_VALUE` and `Number.MAX_VALUE` respectively. ECMAScript2015 has also introduced `Number.isSafeInteger()` for checks if a number is in the double-precision floating-point number range, and `Number.MIN_SAFE_INTEGER` / `Number.MAX_SAFE_INTEGER`. Beyond this range, integers are not safe anymore and will be a double-precision floating point approximation of the value.

### `Boolean`

Represents a logical entity and can have two values: `true`, and `false`.

### `Symbol`

### `bigint`

### `Undefined`

A variable that has not been assigned a value has the value `undefined`.

### `Null`

The Null type has exactly one value: `null`.

## `Object`

## Combining different data types

### `String` + `Number` = `String`

```javascript
let x = 1 + 'abc'; // String: '1abc'
```

Javascript evaluates expressions from left to right, compare:

```javascript
let x = 1 + 2 + 'abc'; // String: '3abc'
```

```javascript
let x = 'abc' + 1 + 2; // String: 'abc12'
```

## Sources

- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [javascript.info](https://javascript.info/types)