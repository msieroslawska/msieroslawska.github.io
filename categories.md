---
layout: page
title: Categories
permalink: /categories/
sitemap:
    priority: 0.7
    lastmod: 2019-02-11
    changefreq: weekly
---
<h1><a href="#">Categories</a></h1>

<ul>
{% for category in site.categories %}
  <li>{{ category | first }}
    <ul>
    {% for post in category.last %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
    </ul>
  </li>
{% endfor %}
</ul>