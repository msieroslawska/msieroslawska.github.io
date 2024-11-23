---
title: '[What a Frontend Engineer should know] HTML5 new tags'
tags: ['html']
---

_This is a part of larger series I am writing as answers to [these questions (PL)](https://solutionchaser.com/rekrutacja-na-front-end-developera-porady-pytania/) posted as preparation for an interview as a frontend engineer._

---

I think I covered new tags partially in the article about [semantic elements](/blog/articles/html-semantic-elements.html). The full list is a bit overwhelming:

### [Semantic elements](https://www.w3schools.com/html/html5_semantic_elements.asp)

| Tag            | Description                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------- |
| `<article>`    | Defines an article                                                                                  |
| `<aside>`      | Defines content aside from the page content. Should be related the surrounding content              |
| `<bdi>`        | Isolates a part of text that might be formatted in a different direction from other text outside it |
| `<details>`    | Defines additional details that the user can view or hide                                           |
| `<dialog>`     | Defines a dialog box or window                                                                      |
| `<figcaption>` | Defines a caption for a `<figure>` element                                                          |
| `<figure>`     | Defines self-contained content                                                                      |
| `<footer>`     | Defines a footer for a document or section                                                          |
| `<header>`     | Defines a header for a document or section                                                          |
| `<main>`       | Defines the main content of a document                                                              |
| `<mark>`       | Defines marked/highlighted text                                                                     |
| `<meter>`      | Defines a scalar measurement within a known range (a gauge)                                         |
| `<nav>`        | Defines navigation links                                                                            |
| `<progress>`   | Represents the progress of a task                                                                   |
| `<rp>`         | Defines what to show in browsers that do not support ruby annotations                               |
| `<rt>`         | Defines an explanation/pronunciation of characters (for East Asian typography)                      |
| `<ruby>`       | Defines a ruby annotation (for East Asian typography)                                               |
| `<section>`    | Defines a section in a document                                                                     |
| `<summary>`    | Defines a visible heading for a `<details>` element                                                 |
| `<time>`       | Defines a date/time                                                                                 |
| `<wbr>`        | Defines a possible line-break                                                                       |

### [Form elements](https://www.w3schools.com/html/html_form_elements.asp)

| Tag          | Description                                                |
| ------------ | ---------------------------------------------------------- |
| `<datalist>` | Specifies a list of pre-defined options for input controls |
| `<output>`   | Defines the result of a calculation                        |

### Input

#### [Input types](https://www.w3schools.com/html/html_form_input_types.asp)

- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

#### [Input attributes](https://www.w3schools.com/html/html_form_attributes.asp)

- autocomplete
- autofocus
- form
- formaction
- formenctype
- formmethod
- formnovalidate
- formtarget
- height and width
- list
- min and max
- multiple
- pattern (regexp)
- placeholder
- required
- step

### Graphic elements

| Tag        | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `<canvas>` | Draw graphics, on the fly, via scripting (usually JavaScript) |
| `<svg>`    | Draw scalable vector graphics                                 |

More about [canvas](https://www.w3schools.com/html/html5_canvas.asp) and [svg](https://www.w3schools.com/html/html5_svg.asp).

### Media elements

| Tag        | Description                                                                   |
| ---------- | ----------------------------------------------------------------------------- |
| `<audio>`  | Defines sound content                                                         |
| `<embed>`  | Defines a container for an external (non-HTML) application                    |
| `<source>` | Defines multiple media resources for media elements (`<video>` and `<audio>`) |
| `<track>`  | Defines text tracks for media elements (`<video>` and `<audio>`)              |
| `<video>`  | Defines video or movie                                                        |

More about [video](https://www.w3schools.com/html/html5_video.asp) and [audio](https://www.w3schools.com/html/html5_audio.asp).

## New attribute syntax

| Type          | Example                                     |
| ------------- | ------------------------------------------- |
| Empty         | `<input type="text" value="John" disabled>` |
| Unquoted      | `<input type="text" value=John>`            |
| Double-quoted | `<input type="text" value="John Doe">`      |
| Single-quoted | `<input type="text" value='John Doe'>`      |

## Sources

- [www.w3schools.com](https://www.w3schools.com/html/html5_new_elements.asp)
