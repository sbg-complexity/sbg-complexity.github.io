---
layout: default
title: Home
description: The Salzburg Complexity Group researches model adaptation and criticality.
---
<section class="hero wrap">
  <div class="hero-copy">
    <p class="eyebrow">{{ site.affiliation | escape }}</p>
    <h1>{{ site.title | escape }}</h1>
    <p class="hero-tagline">{{ site.tagline | escape }}</p>
    <p class="hero-intro">{{ site.intro | escape }}</p>
    <a class="button-link" href="{{ '/research/' | relative_url }}">Explore our research <span aria-hidden="true">→</span></a>
  </div>
  <div class="hero-art" role="img" aria-label="Abstract lines and nodes suggesting an interconnected research network">
    <span class="orbit orbit-one"></span><span class="orbit orbit-two"></span><span class="orbit orbit-three"></span>
    <span class="node node-one"></span><span class="node node-two"></span><span class="node node-three"></span>
    <span class="node node-four"></span><span class="node node-five"></span><span class="hero-center">S<span>·</span>C</span>
  </div>
</section>

<section class="keyword-band" aria-label="Research themes">
  <div class="wrap keyword-inner"><span class="eyebrow">Research themes</span><ul><li>Model Adaptation</li><li>Criticality</li><li>Complex Systems</li><li>Philosophy of Science</li></ul></div>
</section>

<section class="section wrap news-section">
  <div class="section-heading"><div><p class="eyebrow">From the group</p><h2>News</h2></div><a class="text-link" href="{{ '/outreach/' | relative_url }}">Events &amp; outreach <span aria-hidden="true">→</span></a></div>
  <div class="news-list">
    {% assign latest_news = site.data.news | sort: 'date' | reverse %}
    {% for item in latest_news limit: 4 %}
      <article class="news-item">
        <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%B %d, %Y" }}</time>
        <div><h3><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h3><p>{{ item.summary | escape }}</p></div>
        <span class="news-arrow" aria-hidden="true">↗</span>
      </article>
    {% endfor %}
  </div>
</section>

<section class="closing-note">
  <div class="wrap closing-inner"><p class="eyebrow">A note on this site</p><p>{{ site.disclaimer | escape }}</p></div>
</section>
