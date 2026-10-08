---
layout: default
title: Publications
permalink: /publications/
description: Publications from the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Selected work</p><h1>Publications</h1><p>Example citations are provided to show how the publication list will be presented.</p></header>
<section class="section wrap publication-years">
  {% assign publication_years = site.data.publications | map: 'year' | uniq | sort | reverse %}
  {% for year in publication_years %}
    <section class="year-group" aria-labelledby="year-{{ year }}">
      <h2 id="year-{{ year }}">{{ year }}</h2>
      {% assign papers_for_year = site.data.publications | where: 'year', year | sort: 'title' %}
      {% for paper in papers_for_year %}{% include publication-entry.html paper=paper %}{% endfor %}
    </section>
  {% endfor %}
</section>
