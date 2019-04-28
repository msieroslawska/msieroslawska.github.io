---
layout: article
title: Codelogs
permalink: /blog/codelogs/
---

{% for log in site.codelogs %}
  {% if log.title contains "2019-" and is2019Assigned != "true" %}

## 2019

    {% assign is2019Assigned = "true" %}
  {% endif %}

  {% if log.title contains "-04-" and isAprilAssigned != "true" %}

### April

    {% assign isAprilAssigned = "true" %}
  {% elsif log.title contains "-05-" and isMayAssigned != "true" %}

### May

    {% assign isMayAssigned = "true" %}
  {% elsif log.title contains "-06-"and isJuneAssigned != "true"  %}

### June

    {% assign isJuneAssigned = "true" %}
  {% elsif log.title contains "-07-"and isJulyAssigned != "true" %}

### July

    {% assign isJulyAssigned = "true" %}
  {% endif %}

  [{{ log.title }}]({{ log.url }})

{% endfor %}
