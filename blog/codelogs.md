---
layout: article
title: Codelogs
permalink: /blog/codelogs/
---

{% for log in site.posts %}
  {% assign currentYear = log.date | date: "%Y" %}
  {% assign currentMonth = log.date | date: "%m" %}

  {% if currentYear != year %}

## {{ currentYear }}

    {% assign year = currentYear %}
  {% endif %}

  {% if currentMonth != month %}

### {{ currentMonth }}

    {% assign month = currentMonth %}
  {% endif %}

[{{ log.title }}]({{ log.url }})

{% endfor %}
