---
layout: article
title:  "[What a Frontend Engineer should know] Data types; primitive and complex types"
---

*This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer.*

------------

JavaScript is *dynamically typed* programming language, meaning that the same variable can contain different data types.

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
5. `BigInt`
6. `Undefined`
7. `Null`
8. `Object`

## Primitive data types

`String`, `Number`, `Boolean`, `Symbol`, `BigInt`, `Undefined` and `Null` are **primitive** data types. They are *immutable* (cannot be changed) and have no methods:

```javascript
const person = 'Jane';
let anotherPerson = person;
anotherPerson = 'Jenny';
console.log(person); // 'Jane'
console.log(anotherPerson); // 'Jenny'
console.log(person === anotherPerson) // false;
```

### `String`

Used to represent textual data contained in single- `'` and double quotes `"` (and backticks `` ` `` which are a special use case). Each element in `String` has a position, where first one is at position (index) 0. Total length of a `String` is the number of elements in it.

### `Number`

It is one of built-in numeric types (second one being `BigInt`) representing numbers between -2<sup>53</sup>-1 and 2<sup>53</sup>-1 (both for *integer* and *floating point*).

Besides regular numbers, there are also *special numerical values*:

- `+Infinity`,
- `-Infinity`,
- `NaN` (not a number).

To check the minimum / maximum available number between `-Infinity` and `+Infinity` you can use constants `Number.MIN_VALUE` and `Number.MAX_VALUE` respectively. ECMAScript2015 has also introduced `Number.isSafeInteger()` for checks if a number is in the double-precision floating-point number range, and `Number.MIN_SAFE_INTEGER` / `Number.MAX_SAFE_INTEGER`. Beyond this range, integers are not safe anymore and will be a double-precision floating point approximation of the value.

### `Boolean`

Represents a logical entity and can have two values: `true`, and `false`.

### `Symbol`

A `Symbol` is a unique and immutable primitive value and may be used as the key of an `Object` property. It is created by using a constructor:

```javascript
const id = Symbol('description');
```

Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they are different values. The description is just a label that doesn’t affect anything.

```javascript
const id1 = Symbol('description');
const id2 = Symbol('description');
console.log(id1 == id2); // false
```

Symbols **do not** auto-convert to strings!

```javascript
let id = Symbol('id');
console.log(id); // TypeError: Cannot convert a Symbol value to a string
```

### `BigInt`

Is an extention to `Number` which allows storing and operating on large integers beyond `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`. A `BigInt` is created by appending *n* to the end of the integer or by calling the constructor.

```javascript
const x = 2n ** 53n + 1n; // 9007199254740993n
```

A `BigInt` behaves like a `Number` in cases where it is converted to Boolean: `if`, `||`, `&&`, `Boolean`, `!`.

### `Undefined`

A variable that has not been assigned a value has the value `undefined`.

### `Null`

The Null type has exactly one value: `null`.

## `Object`

JavaScript objects are collections of named values called *properties*. They can be both primitive values, other objects or functions (methods).

### Creating objects

#### Using an Object literal

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
```

#### Using a constructor

```javascript
const person = new Object();
person.firstName = 'Jane';
person.lastName: 'Doe';
person.age: 23;
```

### Accessing object properties

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation.

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
console.log(person.age); // 23
```

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
console.log(person['age']); // 23
```

It's also possible to use bracket notation to access a property using another variable:

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
const propertyName = 'age';
console.log(person[propertyName]); // 23
```

### Enumerating Object properties

#### `Object.keys(...)`

Returns an array of all *own enumerable* properties:

```javascript
const id = Symbol();
const person = { firstName: 'Jane', lastName: 'Doe', age: 23, [id]: 123 };
Object.keys(person); // ['firstName', 'lastName', 'age']
```

#### `Object.getOwnPropertyNames(...)`

Returns an array of all *own* properties:

```javascript
const id = Symbol();
const person = { firstName: 'Jane', lastName: 'Doe', age: 23, [id]: 123 };
const child = { mature: false, __proto__: person };
Object.getOwnPropertyNames(person); // ['firstName', 'lastName', 'age']
Object.getOwnPropertyNames(child); // ['mature']
```

#### `for...in` loops

Returns all *own and inherited* properties:

```javascript
const id = Symbol();
const person = { firstName: 'Jane', lastName: 'Doe', age: 23, [id]: 123 };
const child = { mature: false, __proto__: person };
for (let p in person) {console.log(p)}; // 'fistName', 'lastName', 'age'
for (let c in child) {console.log(c)}; // 'mature', fistName', 'lastName', 'age'
```

### Objects are mutable

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
const anotherPerson = person;
anotherPerson.firstName = 'Jenny';
```

In the example above, `anotherPerson` is not a copy of `person`, it **is** `person` (it stores not *value*, but *reference* to an object). Therefore modifying its property is in reality modifying also `person`.

```javascript
console.log(person); // Object { firstName: "Jenny", lastName: "Doe", age: 23 }
console.log(anotherPerson); // Object { firstName: "Jenny", lastName: "Doe", age: 23 }
console.log(person === anotherPerson) // true;
```

### Existence check

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
console.log(person.firstName === undefined); // false
console.log(person.mature === undefined); // true
```

```javascript
const person = { firstName: 'Jane', lastName: 'Doe', age: 23 };
console.log('firstName' in person); // true
console.log('mature' in person); // false
```

## Combining different data types

`operand + operand = result`

1. If at least one of the operands is an `Object`, convert it to a primitive.
2. If at least one of the converted operands is a `String`, convert other operands also to `String` and concatenate.
3. Otherwise convert all operands to `Number` and do the math.

### `String` + `Number` = `String`

```javascript
let x = 1 + 'abc'; // String: '1abc'
```

JavaScript evaluates expressions from left to right, compare:

```javascript
let x = 1 + 2 + 'abc'; // String: '3abc'
```

```javascript
let x = 'abc' + 1 + 2; // String: 'abc12'
```

### `Object` + `String` = `String`

```javascript
let x = ['1'] + 'a'; // String: '1a'
let x = [1] + 'a';   // String: '1a'
```

### `Object` + `Number` = `String`

```javascript
let x = ['1'] + 1; // String: '11'
let x = [1] + 1;   // String: '11'
```



## Sources

- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [javascript.info](https://javascript.info/types)
- [dmitripavlutin.com](https://dmitripavlutin.com/javascriptss-addition-operator-demystified/)