---
layout: default
title: Team
permalink: /team/
description: Current members and alumni of the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">People &amp; perspectives</p><h1>Team</h1><p>Meet the people behind our example projects. All names and details below are placeholders.</p></header>
<section class="section wrap team-section">
  <h2>Current members</h2>
  <div class="team-grid">
    {% for member in site.data.team.current %}
      <article class="person-card"><a class="person-image-link" href="{{ member.link | escape }}" aria-label="Contact {{ member.name | escape }}"><img src="{{ member.image | relative_url }}" alt="{{ member.image_alt | escape }}" width="320" height="320" loading="lazy"></a><div class="person-info"><p class="eyebrow">{{ member.role | escape }}</p><h3><a href="{{ member.link | escape }}">{{ member.name | escape }}</a></h3><p>{{ member.interest | escape }}</p></div></article>
    {% endfor %}
  </div>
</section>
<section class="section wrap team-section alumni-section">
  <h2>Alumni</h2>
  <div class="team-grid">
    {% for member in site.data.team.alumni %}
      <article class="person-card"><a class="person-image-link" href="{{ member.link | escape }}" aria-label="Contact {{ member.name | escape }}"><img src="{{ member.image | relative_url }}" alt="{{ member.image_alt | escape }}" width="320" height="320" loading="lazy"></a><div class="person-info"><p class="eyebrow">{{ member.role | escape }}</p><h3><a href="{{ member.link | escape }}">{{ member.name | escape }}</a></h3><p>{{ member.interest | escape }}</p></div></article>
    {% endfor %}
  </div>
</section>
