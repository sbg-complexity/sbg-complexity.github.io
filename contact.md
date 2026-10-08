---
layout: default
title: Contact
permalink: /contact/
description: Contact the Salzburg Complexity Group.
---
<header class="page-hero wrap"><p class="eyebrow">Get in touch</p><h1>Contact</h1><p>Send a message to the Salzburg Complexity Group.</p></header>

<section class="contact-section wrap">
  <div class="contact-copy">
    <h2>Write to us</h2>
    <p>If you are interested in our research, would like to visit the group, or have a question about our work, we would be glad to hear from you. Use the form below to get in touch.</p>
    <p>You can also email us directly at <a href="mailto:{{ site.contact_email | escape }}">{{ site.contact_email | escape }}</a>.</p>
  </div>

  <form class="contact-form" id="contact-form" data-recipient="{{ site.contact_email | escape }}">
    <div class="form-field">
      <label for="contact-name">Name</label>
      <input id="contact-name" name="name" autocomplete="name" required>
    </div>
    <div class="form-field">
      <label for="contact-email">Email address</label>
      <input id="contact-email" name="email" type="email" autocomplete="email" required>
    </div>
    <div class="form-field">
      <label for="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" required>
    </div>
    <div class="form-field">
      <label for="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows="7" required></textarea>
    </div>
    <button class="button-link" type="submit">Prepare email <span aria-hidden="true">→</span></button>
  </form>
</section>
<script src="{{ '/assets/js/contact-form.js' | relative_url }}" defer></script>
