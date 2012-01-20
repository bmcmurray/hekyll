---
layout: presentation
title: Hekyll Presentation Generator
---

{% for post in site.posts reversed %}
  {% include slide.html %}
{% endfor %}