---
layout: default
title: Publications
permalink: /publications/
description: Publications and forthcoming work from the Salzburg Complexity Group and its research collaborations.
---
<header class="page-hero wrap"><p class="eyebrow">Selected work</p><h1>Publications</h1><p>Research output connected with our group and collaborative projects.</p></header>
<section class="section wrap publication-years">
  {% assign forthcoming = site.data.publications | where: 'status', 'forthcoming' %}
  {% if forthcoming.size > 0 %}
    <section class="year-group" aria-labelledby="forthcoming-heading">
      <h2 id="forthcoming-heading">Forthcoming</h2>
      <div>{% for paper in forthcoming %}{% include publication-entry.html paper=paper %}{% endfor %}</div>
    </section>
  {% endif %}
  {% assign publication_years = site.data.publications | map: 'year' | compact | uniq | sort | reverse %}
  {% for year in publication_years %}
    <section class="year-group" aria-labelledby="year-{{ year }}">
      <h2 id="year-{{ year }}">{{ year }}</h2>
      {% assign papers_for_year = site.data.publications | where: 'year', year | sort: 'title' %}
      <div>{% for paper in papers_for_year %}{% include publication-entry.html paper=paper %}{% endfor %}</div>
    </section>
  {% endfor %}
</section>
