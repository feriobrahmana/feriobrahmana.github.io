---
layout: default
title: "Private Archive"
permalink: /private/
description: "A hidden archive."
robots: noindex,nofollow
---

<style>
  :root {
    --accent: #ec4899; /* Pink accent for personal stuff */
    --accent-soft: rgba(236, 72, 153, 0.12);
    --bg-page: #120711;
    --bg-card: #190b17;
    --bg-card-strong: #21101e;
    --text-main: #fce7f3;
    --text-muted: #c4a4b7;
    --border-color: rgba(244, 114, 182, 0.24);
    --grid-color: rgba(244, 114, 182, 0.055);
  }

  .theme-toggle-btn { display: none; }

  .private-container {
    max-width: 880px;
    margin: 2rem auto;
    padding: clamp(1.2rem, 4vw, 3rem);
    border: 1px solid rgba(236, 72, 153, 0.35);
    background: rgba(49, 11, 30, 0.18);
    box-shadow: 8px 8px 0 rgba(0,0,0,.25);
  }

  .private-header {
    margin-bottom: 2rem;
    border-bottom: 1px solid rgba(236, 72, 153, 0.3);
    padding-bottom: 1.5rem;
  }

  .private-signal { color: #f9a8d4; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: .7rem; letter-spacing: .12em; text-transform: uppercase; }

  .private-title {
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
  }

  .post-list-private {
    list-style: none;
    padding: 0;
  }

  .post-item-private {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 0 rgba(0,0,0,.16);
  }

  .post-item-private a {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-main);
    text-decoration: none;
  }

  .post-item-private a:hover {
    color: var(--accent);
  }

  .post-meta-private {
      color: var(--text-muted);
      font-size: 0.85rem;
      margin-top: 0.3rem;
  }
</style>

<div class="private-container">
  <div class="private-header">
    <div class="private-signal">Tunnel endpoint // Access granted</div>
    <h1 class="private-title">Private Archive</h1>
    <p style="color: var(--text-muted)">A safe place for personal letters and thoughts.</p>
  </div>

  <ul class="post-list-private">
    {% assign all_posts = site.posts %}
    {% for post in all_posts %}
      {% if post.hidden %}
      <li class="post-item-private">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div class="post-meta-private">
          {{ post.date | date: "%B %-d, %Y" }} · {{ post.category | capitalize }}
        </div>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

  <p style="margin-top: 3rem; color: var(--text-muted); font-size: 0.8rem;">
      <a href="/" style="color: var(--text-muted); text-decoration: none;">← Return to public network</a>
  </p>
</div>
