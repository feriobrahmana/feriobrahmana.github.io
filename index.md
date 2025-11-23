---
layout: default
title: "Ferio's Blog"
---

<script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<script src="/assets/js/network.js"></script>

<style>
  :root {
    --accent: #f97316;
    --accent-soft: rgba(249,115,22,0.12);
    --bg-card: #0b1120;
    --bg-page: radial-gradient(circle at top left, #111827, #020617);
    --text-main: #e5e7eb;
    --text-muted: #9ca3af;
  }

  body {
    background: var(--bg-page);
  }

  .page-content {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  .site-container {
    max-width: 880px;
    margin: 0 auto;
    padding: 0 1.2rem;
    color: var(--text-main);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      sans-serif;
  }

  .hero-container {
     /* Replace static hero styling with a relative container for the graph */
     position: relative;
     width: 100%;
     height: 500px; /* Adjust height as needed */
     border-radius: 1.5rem;
     border: 1px solid rgba(148,163,184,0.35);
     box-shadow: 0 18px 45px rgba(15,23,42,0.9);
     overflow: hidden;
     background: #020617; /* Fallback/base */
  }

  #network-graph {
    width: 100%;
    height: 100%;
  }

  .hero-overlay {
    /* Optional: Put some text OVER the graph if needed, but graph is interactive so keep it minimal */
    position: absolute;
    bottom: 20px;
    left: 20px;
    pointer-events: none; /* Let clicks pass through to graph */
    z-index: 10;
    background: rgba(2, 6, 23, 0.7);
    padding: 1rem;
    border-radius: 1rem;
    max-width: 80%;
  }

  .hero-kicker {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: var(--text-muted);
  }

  .hero-title {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
  }

  .hero-title span {
    color: var(--accent);
  }


  .layout-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1.1fr);
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .card {
    border-radius: 1.2rem;
    background: var(--bg-card);
    border: 1px solid rgba(148,163,184,0.35);
    padding: 1.6rem 1.6rem 1.5rem;
  }

  .card-title-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.7rem;
    margin-bottom: 0.8rem;
  }

  .card-title {
    font-size: 1.05rem;
    font-weight: 600;
  }

  .card-link {
    font-size: 0.8rem;
    color: var(--accent);
    text-decoration: none;
  }

  .card-link:hover {
    text-decoration: underline;
  }

  .card-subtitle {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.9rem;
  }

  .post-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .post-item a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 0.95rem;
  }

  .post-item a:hover {
    color: var(--accent);
  }

  .post-meta {
    font-size: 0.75rem;
    color: var(--text-muted);
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
      font-size: 1.3rem;
    }
    .layout-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

<div class="site-container">

  <section class="hero-container">
    <div id="network-graph"></div>
    <div class="hero-overlay">
        <div class="hero-kicker">Aspiring complex-systems researcher</div>
        <h1 class="hero-title">
            Exploring <span>systems</span> & connections.
        </h1>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.5rem;">
            Interact with the network to explore my notes on biology, economics, and life.
        </p>
    </div>
  </section>

  <section class="layout-grid" style="margin-top: 2.6rem;">

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
