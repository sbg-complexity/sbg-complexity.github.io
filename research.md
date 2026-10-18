---
layout: default
title: Research
permalink: /research/
description: Research projects at the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Questions, methods, projects</p><h1>Research</h1><p>We investigate how models and complex systems adapt, and what happens as they approach critical change. Our group contributes to two collaborative research initiatives.</p></header>
<section class="section wrap research-section">
  <div class="project-grid" aria-label="Research projects">
    {% for project in site.data.projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
</section>
