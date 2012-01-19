---
layout: presentation
title: Hekyll Presentation Generator
---

{% for post in site.posts %}
  {% include slide.html %}
{% endfor %}