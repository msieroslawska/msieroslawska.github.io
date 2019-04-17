---
layout: article
title: Articles
permalink: /articles/
---

{% for article in site.articles %}

- [{{ article.title }}]({{ article.url }})
{% endfor %}
