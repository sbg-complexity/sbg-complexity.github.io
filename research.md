---
layout: default
title: Research
permalink: /research/
description: Research projects at the Salzburg Complexity Group.
---
<header class="page-hero wrap">
  <p class="eyebrow">Questions, methods, projects</p>
  <h1>Research</h1>
  <h2 class="research-overview-title">Philosophical Foundations of Complex Systems</h2>
  <p>Complex systems exhibit macroscopic patterns and transitions arising from interactions among many components. We ask whether, and in what sense, such patterns are emergent relative to the behavior of individual parts; how uncertainty and imprecise probabilities bear on social epistemology and the assessment of scientific claims; and how values and questions of objectivity inform models of socio-ecological systems. We also examine when and how concepts and methods from physics can be transferred to biological and social sciences, with particular attention to critical transitions and tipping points. Across these topics, we consider the social, ethical, political, and visual dimensions of scientific practice.</p>
</header>
<section class="section wrap research-section">
  <div class="project-grid" aria-label="Research projects">
    {% for project in site.data.projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
</section>
