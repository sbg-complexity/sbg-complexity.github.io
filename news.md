---
layout: default
title: News
permalink: /news/
description: News and updates from the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">From the group</p><h1>News</h1><p>Updates, announcements, and recent developments from the group.</p></header>

<section class="section wrap news-section" aria-label="News archive">
  <div class="news-list">
    {% assign all_news = site.data.news | sort: 'date' | reverse %}
    {% for item in all_news %}
      <article class="news-item">
        <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%B %d, %Y" }}</time>
        <div><h2><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></h2><p>{{ item.summary | escape }}</p></div>
        <span class="news-arrow" aria-hidden="true">→</span>
      </article>
    {% else %}
      <p class="empty-state">There are no news items to show yet.</p>
    {% endfor %}
  </div>
</section>
