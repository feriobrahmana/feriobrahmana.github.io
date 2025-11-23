---
layout: default
title: "Ferio's Blog"
---

<script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<script src="/assets/js/network.js"></script>

<style>
  :root {
    /* LIGHT MODE (Default) */
    --accent: #f97316;
    --accent-soft: rgba(249,115,22,0.12);
    --bg-card: #ffffff;
    --bg-page: #f8fafc; /* Slate 50 */
    --text-main: #1f2937; /* Gray 800 */
    --text-muted: #64748b; /* Slate 500 */
    --border-color: rgba(148,163,184,0.2);
  }

  [data-theme="dark"] {
    /* DARK MODE */
    --bg-card: #0b1120;
    --bg-page: radial-gradient(circle at top left, #111827, #020617);
    --text-main: #e5e7eb;
    --text-muted: #9ca3af;
    --border-color: rgba(148,163,184,0.35);
  }

  body {
    background: var(--bg-page);
    color: var(--text-main);
    transition: background 0.3s ease, color 0.3s ease;
  }

  .page-content {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  /* Expand container for desktop */
  .site-container {
    max-width: 1400px; /* Wide layout */
    width: 95%;
    margin: 0 auto;
    padding: 0 1.2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      sans-serif;
  }

  /* Theme Toggle Button */
  .theme-toggle {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    color: var(--text-main);
    padding: 0.5rem;
    border-radius: 999px;
    cursor: pointer;
    z-index: 100;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }

  .theme-toggle:hover {
      filter: brightness(0.95);
  }

  .hero-container {
     position: relative;
     width: 100%;
     height: 60vh; /* Taller on desktop */
     min-height: 500px;
     border-radius: 1.5rem;
     border: 1px solid var(--border-color);
     box-shadow: 0 10px 30px rgba(0,0,0,0.1); /* softer shadow for light mode */
     overflow: hidden;
     background: var(--bg-card); /* Match card bg */
     margin-bottom: 3rem;
  }

  [data-theme="dark"] .hero-container {
      background: #020617;
      box-shadow: 0 18px 45px rgba(15,23,42,0.9);
  }

  #network-graph {
    width: 100%;
    height: 100%;
  }

  .hero-overlay {
    position: absolute;
    bottom: 30px;
    left: 30px;
    pointer-events: none;
    z-index: 10;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 1rem;
    max-width: 600px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  [data-theme="dark"] .hero-overlay {
      background: rgba(2, 6, 23, 0.8);
  }

  .hero-kicker {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: var(--text-muted);
  }

  .hero-title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0.5rem 0;
  }

  .hero-title span {
    color: var(--accent);
  }


  .layout-grid {
    display: grid;
    /* 3 columns on wide screens: 2 for posts, 1 for sidebar */
    grid-template-columns: 2fr 1fr;
    gap: 2.5rem;
    max-width: 1200px; /* Keep content from stretching too wide */
    margin: 0 auto; /* Center the grid within the wider container */
  }

  .card {
    border-radius: 1.2rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 2rem;
  }

  .card-title-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.7rem;
    margin-bottom: 0.8rem;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .card-link {
    font-size: 0.9rem;
    color: var(--accent);
    text-decoration: none;
  }

  .card-link:hover {
    text-decoration: underline;
  }

  .card-subtitle {
    font-size: 0.95rem;
    color: var(--text-muted);
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }

  .post-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .post-item a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .post-item a:hover {
    color: var(--accent);
  }

  .post-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 0.2rem;
  }

  .pill {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.75rem;
    font-weight: 500;
  }

  @media (max-width: 800px) {
    .hero-container {
      height: 400px;
    }
    .hero-title {
      font-size: 1.5rem;
    }
    .layout-grid {
      grid-template-columns: minmax(0, 1fr);
    }
    .site-container {
        width: 100%;
        padding: 0 1rem;
    }
  }
</style>

<!-- Theme Toggle Button -->
<button id="theme-toggle" class="theme-toggle" aria-label="Toggle Dark Mode">
    ◐
</button>

<div class="site-container">

  <section class="hero-container">
    <div id="network-graph"></div>
    <div class="hero-overlay">
        <div class="hero-kicker">Aspiring complex-systems researcher</div>
        <h1 class="hero-title">
            Exploring <span>systems</span> & connections.
        </h1>
        <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 0.5rem; line-height: 1.5;">
            Interact with the network to explore my notes on biology, economics, and life.
        </p>
    </div>
  </section>

  <section class="layout-grid">

    <article id="latest-posts" class="card">
      <div class="card-title-row">
        <h2 class="card-title">Latest posts</h2>
        <a class="card-link" href="/blog">View all soon →</a>
      </div>
      <p class="card-subtitle">
        I write about research notes, mental models, and experiments at the intersection of
        biology, AI, and systems thinking.
      </p>

      <ul class="post-list">
        {% assign public_posts = site.posts | where_exp: "item", "item.hidden != true" %}
        {% for post in public_posts limit:3 %}
        <li class="post-item">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <div class="post-meta">
            {{ post.date | date: "%b %-d, %Y" }} · {{ post.category | default: "notes" }}
          </div>
        </li>
        {% endfor %}

        {% if public_posts.size == 0 %}
        <li class="post-item">
          <div class="post-meta">No posts yet — first one coming soon.</div>
        </li>
        {% endif %}
      </ul>
    </article>

    <aside id="projects" class="card">
      <div class="card-title-row">
        <h2 class="card-title">What I’m working on</h2>
        <span class="pill">Coming soon</span>
      </div>
      <p class="card-subtitle">
        I’m still shaping how to talk about my research, tools, and side projects.
        When things feel a bit more solid, I’ll share them here.
      </p>
      <p class="post-meta">
        For now, I’m mostly reading, coding, thinking, and trying not to break
        too many things at once.
      </p>
    </aside>

  </section>

</div>
