---
title: '[What a Frontend Engineer should know] CSS specificity'
tags: ['css']
---

_This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer._

CSS bases on different building blocks: tags, classes, pseudo-classes, etc. **Specificity** is CSS's way of defining which style decorations should took precedence in case of conflicts.

---

Let's look at the following code:

```html
<style>
  h1 {
    color: red;
  }

  .header {
    color: blue;
  }
</style>

<h1 class="header">This is a header</h1>
```

In the code above we define styles for all `h1` elements present on the page (you should avoid using tags as CSS has a **global** scope) and for all elements containing a `header` class. The result will be a _blue_ text, because class selectors have **higher specificity** over tags.

## Specificity rules

Specificity is a score calculated as a sum of grades coming from all selectors. If a conflict occurs, style with higher specificity will be used. If specificity of two or more styles is the same, the rules of cascading kick in and the **last** declared rule will be used.

The rules can be divided as following:

- 0 for `*`, `>`, `~`,
- 1 for each tag and pseudo-element,
- 10 for each class, attribute and pseudo-class,
- 100 for each id,
- 1000 for inline style,
- 10000 for `!important`.

Coming back to the previous example, it is clear why a class selector (specificity 10) took over a tag (specificity 1).

## More examples

- `p`: 1,
- `#foo`: 100,
- `.header.main`: 20,
- `a::before`: 2,
- `h1.header.main`: 21,
- `[type=radio]`: 10.

### Good patterns

- Remember that CSS has a global scope. Avoid using tag selectors (`p`, `span`, `div`) unless you are 100% sure you want the styling to be applied to all elements of the same type.
- Make your life easier and avoid future problems of overriding high specificity selectors by:
  - keeping your CSS as simple as possible,
  - avoiding complex selectors,
  - avoiding chaining class selectors,
  - not using IDs if possible. Not only are they hard to override with their high specificity, they are also unique and hard to repurpose,
  - forgetting about `!important`. Don't be lazy :)

## Sources

- [FrontendMasters / Complete intro to web development](https://frontendmasters.com/courses/web-development-v2/)
