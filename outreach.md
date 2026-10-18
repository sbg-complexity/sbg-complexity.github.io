---
layout: default
title: Events & Outreach
permalink: /outreach/
description: Events, seminars, and outreach from the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Meet, share, discuss</p><h1>Events &amp; Outreach</h1><p>Visitors interested in our research are welcome to join our seminars, reading groups, and other events. Please get in touch to arrange a visit.</p></header>
{% assign sorted_events = site.data.events | sort: 'date' %}
{% assign build_seconds = site.time | date: '%s' | plus: 0 %}
<section class="section wrap event-section">
  <h2>Upcoming</h2>
  <div class="event-list">
    {% assign upcoming_count = 0 %}
    {% for event in sorted_events %}
      {% assign event_seconds = event.date | date: '%s' | plus: 0 %}
      {% assign show_upcoming = false %}
      {% if event.recurrence %}
        {% assign show_upcoming = true %}
        {% if event.end_date %}
          {% assign end_seconds = event.end_date | date: '%s' | plus: 0 %}
          {% if end_seconds < build_seconds %}{% assign show_upcoming = false %}{% endif %}
        {% endif %}
      {% elsif event_seconds >= build_seconds %}
        {% assign show_upcoming = true %}
      {% endif %}
      {% if show_upcoming %}
        {% assign upcoming_count = upcoming_count | plus: 1 %}
        <article class="event-card{% if event.recurrence %} recurring-event{% endif %}" id="{{ event.title | slugify }}">
          {% if event.recurrence == 'weekly' %}
            <div class="event-schedule" aria-label="Every Tuesday, {{ event.time | escape }}"><span>Weekly</span><strong>Tuesday</strong><span>{{ event.time | escape }}</span></div>
          {% else %}
            <time datetime="{{ event.date | date: '%Y-%m-%d' }}"><span>{{ event.date | date: '%b' }}</span><strong>{{ event.date | date: '%d' }}</strong><span>{{ event.date | date: '%Y' }}</span></time>
          {% endif %}
          <div><h3>{{ event.title | escape }}</h3><p class="event-place">{{ event.place | escape }}</p><p>{{ event.description | escape }}</p>{% if event.link %}{% if event.link contains '://' %}<a class="text-link" href="{{ event.link | escape }}">{% else %}<a class="text-link" href="{{ event.link | relative_url }}">{% endif %}{{ event.link_label | default: 'More information' | escape }} <span aria-hidden="true">&#8599;</span></a>{% endif %}</div>
        </article>
      {% endif %}
    {% endfor %}
    {% if upcoming_count == 0 %}<p class="empty-state">No upcoming events are listed yet. Please check back soon.</p>{% endif %}
  </div>
</section>
<section class="section wrap event-section past-events">
  <h2>Past</h2>
  <div class="event-list">
    {% assign past_count = 0 %}
    {% assign reverse_events = sorted_events | reverse %}
    {% for event in reverse_events %}
      {% assign event_seconds = event.date | date: '%s' | plus: 0 %}
      {% assign show_past = false %}
      {% if event.recurrence %}
        {% if event.end_date %}
          {% assign end_seconds = event.end_date | date: '%s' | plus: 0 %}
          {% if end_seconds < build_seconds %}{% assign show_past = true %}{% endif %}
        {% endif %}
      {% elsif event_seconds < build_seconds %}
        {% assign show_past = true %}
      {% endif %}
      {% if show_past %}
        {% assign past_count = past_count | plus: 1 %}
        <article class="event-card{% if event.recurrence %} recurring-event{% endif %}" id="{{ event.title | slugify }}">
          {% if event.recurrence == 'weekly' %}
            <div class="event-schedule" aria-label="Every Tuesday, {{ event.time | escape }}"><span>Weekly</span><strong>Tuesday</strong><span>{{ event.time | escape }}</span></div>
          {% else %}
            <time datetime="{{ event.date | date: '%Y-%m-%d' }}"><span>{{ event.date | date: '%b' }}</span><strong>{{ event.date | date: '%d' }}</strong><span>{{ event.date | date: '%Y' }}</span></time>
          {% endif %}
          <div><h3>{{ event.title | escape }}</h3><p class="event-place">{{ event.place | escape }}</p><p>{{ event.description | escape }}</p>{% if event.link %}{% if event.link contains '://' %}<a class="text-link" href="{{ event.link | escape }}">{% else %}<a class="text-link" href="{{ event.link | relative_url }}">{% endif %}{{ event.link_label | default: 'More information' | escape }} <span aria-hidden="true">&#8599;</span></a>{% endif %}</div>
        </article>
      {% endif %}
    {% endfor %}
    {% if past_count == 0 %}<p class="empty-state">There are no past events to show yet.</p>{% endif %}
  </div>
</section>
