---
layout: article
title:  "[What a Frontend Engineer should know] HTML semantic elements"
---

*This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer.*

The first topic mentioned on the list are HTML tags. What are they? Do you know what they mean? Do you know how to correctly build a website?

------------

The obvious first question would be: what is semantics?

[A dictionary](https://www.merriam-webster.com/dictionary/semantics) defines it as
> the historical and psychological study and the classification of changes in the signification of words or forms viewed as factors in linguistic development.

Long story short, it follows the **meaning** of words in a language over time.

## HTML5

For a language like HTML5, semantic elements are carrying some meaning, giving you some information.

Do you know what `<div>` might mean? What about `<span>`? Can you guess what information they contain before you check their content?

On the other hand when you see an element called `<section>` or `<header>`, do you know what its purpose is?

If you use semantic elements correctly, your page becomes easier to process for web browsers and search engines. "Correctly" being the keyword here.

HTML5 introduces the following new semantic tags:

* `<article>`: independent part of the page, e.g. blog post,
* `<aside>`: not related to the main document,
* `<details>`,
* `<figcaption>`: captions for content,
* `<figure>`,
* `<footer>`,
* `<header>`,
* `<main>`,
* `<mark>`: highlight for important content,
* `<nav>`: section dedicated for navigation,
* `<section>`: more generic than `<article>`, used for content that is related, but not necessarily self-contained,
* `<summary>`,
* `<time>`.

This adds to the following existing tags (the list is not complete, please see the [full HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)):

* `<blockquote>`,
* `<cite>`: citation,
* `<figure>`: used for grouping content (e.g. images) with its captions,
* `<h1-h6>` for headings, `h1` being the most important one,
* `<menu>`,
* `<ol>`: ordered list,
* `<p>`: paragraph,
* `<ul>`: unordered list,

## What does it mean

### Stop using separate classes to describe the tag's role

```html
<p class="header">This is a header</p>
```

```html
<h1>This is a header</h1>
```

### Don't use tables to create the structure

```html
<table>
  <tr>
    <td class="header">This is a header</td>
  </tr>

  <tr>
    <td class="paragraph">This is a random paragraph.</td>
  </tr>
</table>
```

```html
<h1>This is a header</h1>
<p>This is a random paragraph</p>
```

### Don't use semantic tags when the data is clearly meant to be presented in a table

```html
<div class="row">
  <p class="header cell">This is data header #1</p>
  <p class="header cell">This is data header #2</p>
</div>

<div class="row">
  <p class="cell">This is some data.</p>
  <p class="cell">This is some data.</p>
</div>
```

```html
<table>
  <tr>
    <th>This is data header #1</th>
    <th>This is data header #2</th>
  </tr>

  <tr>
    <td>This is some data.</td>
    <td>This is some data.</td>
  </tr>

    <tr>
    <td>This is some data.</td>
    <td>This is some data.</td>
  </tr>
</table>
```

## Create paragraphs using tags, not line breaks

```html
This is first paragraph.<br />This is second paragraph.
```

```html
<p>This is first paragraph.</p>
<p>This is second paragraph.</p>
```

`<br />` can be used to add line breaks within one element.

## Summary

It does not mean much more work for you and sticking to correct HTML tags gives you more confidence that the page you create will be looking the same in all web browsers.

## Sources

* [www.w3schools.com](https://www.w3schools.com/html/html5_semantic_elements.asp)
* [performancemedia.pl](https://performancemedia.pl/blog/semantyka-czyli-jak-poprawnie-stosowac-znaczniki-html/)