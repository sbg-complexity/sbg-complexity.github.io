---
layout: default
title: Event & Outreach
permalink: /outreach/
description: Upcoming and past outreach events from the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Meet, share, discuss</p><h1>Event &amp; Outreach</h1><p>Visitors interested in our research are welcome to join our seminars, reading groups, and other events. Please get in touch to arrange a visit.</p></header>
{% assign sorted_events = site.data.events | sort: 'date' %}
{% assign build_seconds = site.time | date: '%s' | plus: 0 %}
<section class="section wrap event-section">
  <h2>Upcoming</h2>
  <div class="event-list">
    {% assign upcoming_count = 0 %}
    {% for event in sorted_events %}{% assign event_seconds = event.date | date: '%s' | plus: 0 %}{% if event_seconds >= build_seconds %}{% assign upcoming_count = upcoming_count | plus: 1 %}
      <article class="event-card" id="{{ event.title | slugify }}"><time datetime="{{ event.date | date: '%Y-%m-%d' }}"><span>{{ event.date | date: '%b' }}</span><strong>{{ event.date | date: '%d' }}</strong><span>{{ event.date | date: '%Y' }}</span></time><div><h3>{{ event.title | escape }}</h3><p class="event-place">{{ event.place | escape }}</p><p>{{ event.description | escape }}</p>{% if event.link %}<a class="text-link" href="{{ event.link | relative_url }}">{{ event.link_label | default: 'More information' | escape }} <span aria-hidden="true">↗</span></a>{% endif %}</div></article>
    {% endif %}{% endfor %}
    {% if upcoming_count == 0 %}<p class="empty-state">No upcoming events are listed yet. Please check back soon.</p>{% endif %}
  </div>
</section>
<section class="section wrap event-section past-events">
  <h2>Past</h2>
  <div class="event-list">
    {% assign past_count = 0 %}
    {% assign reverse_events = sorted_events | reverse %}
    {% for event in reverse_events %}{% assign event_seconds = event.date | date: '%s' | plus: 0 %}{% if event_seconds < build_seconds %}{% assign past_count = past_count | plus: 1 %}
      <article class="event-card" id="{{ event.title | slugify }}"><time datetime="{{ event.date | date: '%Y-%m-%d' }}"><span>{{ event.date | date: '%b' }}</span><strong>{{ event.date | date: '%d' }}</strong><span>{{ event.date | date: '%Y' }}</span></time><div><h3>{{ event.title | escape }}</h3><p class="event-place">{{ event.place | escape }}</p><p>{{ event.description | escape }}</p>{% if event.link %}<a class="text-link" href="{{ event.link | relative_url }}">{{ event.link_label | default: 'More information' | escape }} <span aria-hidden="true">↗</span></a>{% endif %}</div></article>
    {% endif %}{% endfor %}
    {% if past_count == 0 %}<p class="empty-state">There are no past events to show yet.</p>{% endif %}
  </div>
</section>
