---
layout: default
title: Research
permalink: /research/
description: Research projects at the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Questions, methods, projects</p><h1>Research</h1><p>We investigate how models and complex systems adapt, and what happens as they approach critical change.</p></header>
{% for group in site.data.research_groups %}
<section class="section wrap research-group" aria-labelledby="{{ group.slug | escape }}-heading">
  <header class="research-group-heading">
    <img src="{{ group.logo | relative_url }}" alt="{{ group.logo_alt | escape }}" loading="lazy">
    <h2 id="{{ group.slug | escape }}-heading" class="visually-hidden">{{ group.name | escape }}</h2>
  </header>
  {% if group.description %}<p class="research-group-description">{{ group.description | escape }}</p>{% endif %}
  {% assign group_projects = site.data.projects | where_exp: 'project', 'project.group == group.slug' %}
  {% if group_projects.size > 0 %}
  <div class="project-grid" aria-label="{{ group.name | escape }} projects">
    {% for project in group_projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
  {% endif %}
</section>
{% endfor %}
