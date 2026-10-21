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
  <p>Complex systems typically exhibit macroscopic patterns arising from interactions among many components. We ask whether, and in what sense, such patterns are emergent relative to the behavior of individual parts; how to address uncertainty when predicting complex behavior in the natural and social sciences; how values and questions of objectivity inform models of socio-ecological systems; and how concepts and methods from physics can be transferred to understand complex behavior in other sciences. We are particularly interested in explaining and predicting critical transitions and tipping points within and beyond physics. Through philosophical analysis of these phenomena, we aim both to improve scientific model-building and to strengthen connections between abstract models and the real world.</p>
</header>
<section class="section wrap research-section">
  <div class="project-grid" aria-label="Research projects">
    {% for project in site.data.projects %}{% include project-card.html project=project %}{% endfor %}
  </div>
</section>
