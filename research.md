---
layout: default
title: Research
permalink: /research/
description: Research projects at the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Questions, methods, projects</p><h1>Research</h1><p>We study how scientific models are transferred and adapted across disciplinary domains to investigate complex systems that may initially seem unrelated. We ask what these transfers preserve or change, when they are methodologically warranted, and what they reveal about critical behavior and transitions.</p></header>
<section class="section wrap research-section">
  <div class="project-grid" aria-label="Research projects">
    {% for project in site.data.projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
</section>
