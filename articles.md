---
layout: page
title: Articles
permalink: /articles/
---
<h1><a href="#">All articles</a></h1>

<ul>
{% for article in site.articles %}
  <li>
    <a href="{{ article.url }}">
      {{ article.title }}
    </a>
  </li>
{% endfor %}
</ul>