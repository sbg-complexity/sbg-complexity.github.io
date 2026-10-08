---
layout: default
title: Team
permalink: /team/
description: Current members of the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">People &amp; perspectives</p><h1>Team</h1><p>Meet the researchers and scholars in the group.</p></header>
<section class="section wrap team-section">
  <h2>Current members</h2>
  <div class="team-grid">
    {% for member in site.data.team.current %}
      {% include person-card.html member=member %}
    {% endfor %}
  </div>
</section>
{% if site.data.team.alumni and site.data.team.alumni.size > 0 %}
<section class="section wrap team-section alumni-section">
  <h2>Alumni</h2>
  <div class="team-grid">
    {% for member in site.data.team.alumni %}
      {% include person-card.html member=member %}
    {% endfor %}
  </div>
</section>
{% endif %}
