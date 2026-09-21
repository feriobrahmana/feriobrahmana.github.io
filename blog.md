---
layout: default
title: "Field Notes"
description: "Research notes, explainers, and ideas from Ferio Brahmana on complex systems, biology, computation, and life."
permalink: /blog/
---

<style>
  .notes-hero { max-width: 820px; padding: 4rem 0 3rem; }
  .notes-hero .pixel-label { color: var(--accent); }
  .notes-hero h1 { margin: .45rem 0 1rem; font-size: clamp(3rem, 8vw, 6.5rem); line-height: .95; letter-spacing: -.065em; }
  .notes-hero p { max-width: 680px; margin: 0; color: var(--text-muted); font-size: 1.05rem; }
  .notes-index { max-width: 920px; margin: 2rem 0 5rem; border-top: 1px solid var(--border-color); }
  .note-row { display: grid; grid-template-columns: 120px 1fr auto; gap: 1.4rem; align-items: start; padding: 1.5rem 0; border-bottom: 1px solid var(--border-color); }
  .note-row:hover h2 { color: var(--accent); }
  .note-date, .note-category { color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: .72rem; text-transform: uppercase; }
  .note-row h2 { margin: 0 0 .35rem; font-size: 1.35rem; transition: color 150ms ease; }
  .note-row p { margin: 0; color: var(--text-muted); font-size: .9rem; }
  .note-category { padding: .2rem .5rem; border: 1px solid var(--border-color); }
  .notes-empty { padding: 2rem 0; color: var(--text-muted); }
  @media (max-width: 680px) {
    .notes-hero { padding-top: 2.5rem; }
    .note-row { grid-template-columns: 1fr; gap: .45rem; }
    .note-category { justify-self: start; }
  }
</style>

<header class="notes-hero">
  <span class="pixel-label">Open notebook // Public layer</span>
  <h1>Field notes</h1>
  <p>Research sketches, explainers, and ideas about biology, networks, incentives, and the systems that shape us.</p>
</header>

<section class="notes-index" aria-label="Published notes">
  {% assign public_posts = site.posts | where_exp: "item", "item.hidden != true" %}
  {% for post in public_posts %}
    <a class="note-row" href="{{ post.url | relative_url }}">
      <time class="note-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y.%m.%d" }}</time>
      <div>
        <h2>{{ post.title }}</h2>
        {% if post.excerpt %}<p>{{ post.excerpt | strip_html | normalize_whitespace | truncate: 150 }}</p>{% endif %}
      </div>
      <span class="note-category">{{ post.category | default: "notes" }}</span>
    </a>
  {% endfor %}
  {% if public_posts.size == 0 %}<p class="notes-empty">No public notes yet. The first transmission is still loading.</p>{% endif %}
</section>
