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
      <article class="person-card">{% if member.link %}<a class="person-image-link" href="{{ member.link | escape }}" aria-label="Profile: {{ member.name | escape }}">{% else %}<div class="person-image">{% endif %}<img src="{{ member.image | relative_url }}" alt="{{ member.image_alt | escape }}" width="320" height="320" loading="lazy">{% if member.link %}</a>{% else %}</div>{% endif %}<div class="person-info"><p class="eyebrow">{{ member.role | escape }}</p><h3>{% if member.link %}<a href="{{ member.link | escape }}">{{ member.name | escape }}</a>{% else %}{{ member.name | escape }}{% endif %}</h3><p>{{ member.interest | escape }}</p></div></article>
    {% endfor %}
  </div>
</section>
{% if site.data.team.alumni and site.data.team.alumni.size > 0 %}
<section class="section wrap team-section alumni-section">
  <h2>Alumni</h2>
  <div class="team-grid">
    {% for member in site.data.team.alumni %}
      <article class="person-card">{% if member.link %}<a class="person-image-link" href="{{ member.link | escape }}" aria-label="Profile: {{ member.name | escape }}">{% else %}<div class="person-image">{% endif %}<img src="{{ member.image | relative_url }}" alt="{{ member.image_alt | escape }}" width="320" height="320" loading="lazy">{% if member.link %}</a>{% else %}</div>{% endif %}<div class="person-info"><p class="eyebrow">{{ member.role | escape }}</p><h3>{% if member.link %}<a href="{{ member.link | escape }}">{{ member.name | escape }}</a>{% else %}{{ member.name | escape }}{% endif %}</h3><p>{{ member.interest | escape }}</p></div></article>
    {% endfor %}
  </div>
</section>
{% endif %}
