---
layout: default
title: "Ferio's Blog"
---

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

  .hero {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 2rem;
    border-radius: 1.5rem;
    background: linear-gradient(135deg, #020617, #020617),
      radial-gradient(circle at top left, rgba(249,115,22,0.18), transparent),
      radial-gradient(circle at bottom right, rgba(59,130,246,0.18), transparent);
    border: 1px solid rgba(148,163,184,0.35);
    box-shadow: 0 18px 45px rgba(15,23,42,0.9);
  }

  .hero-kicker {
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: .16em;
    color: var(--text-muted);
  }

  .hero-title {
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .hero-title span {
    color: var(--accent);
  }

  .hero-subtitle {
    font-size: 1rem;
    color: var(--text-muted);
    max-width: 40rem;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.4rem;
  }

  .hero-tag {
    font-size: 0.75rem;
    border-radius: 999px;
    padding: 0.28rem 0.7rem;
    border: 1px solid rgba(148,163,184,0.5);
    background: rgba(15,23,42,0.8);
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 0.4rem;
  }

  .btn-primary,
  .btn-ghost {
    border-radius: 999px;
    padding: 0.55rem 1.15rem;
    font-size: 0.9rem;
    border: 1px solid transparent;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  .btn-primary {
    background: var(--accent);
    color: #020617;
    font-weight: 600;
  }

  .btn-ghost {
    border-color: rgba(148,163,184,0.7);
    color: var(--text-main);
    background: rgba(15,23,42,0.85);
  }

  .btn-primary:hover,
  .btn-ghost:hover {
    filter: brightness(1.08);
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

  .stack-list {
    list-style: none;
    padding-left: 0;
    margin: 0.4rem 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .stack-item {
    font-size: 0.78rem;
    color: var(--text-muted);
    border-radius: 999px;
    padding: 0.18rem 0.55rem;
    background: rgba(15,23,42,0.9);
    border: 1px solid rgba(55,65,81,0.9);
  }

  @media (max-width: 800px) {
    .hero {
      padding: 1.8rem 1.4rem;
    }
    .hero-title {
      font-size: 1.8rem;
    }
    .layout-grid {
      grid-template-columns: minmax(0, 1fr);
    }
  }
</style>

<div class="site-container">

  <section class="hero">
    <div class="hero">
      <div class="hero-kicker">Aspiring complex-systems researcher</div>
      <h1 class="hero-title">
        Learning how <span>systems</span> behave, so I can be a better
        scientist, citizen, and human.
      </h1>
      <div class="hero-subtitle">
        <p>
          This blog is my place to make sense of the systems that shape our world
          — and the ones that shape me. I’m deeply fascinated by complex systems:
          how cells make decisions, how networks propagate influence, how
          incentives move economies, and how people navigate love,
          responsibility, and the messy work of becoming better versions of
          themselves.
        </p>
        <p>
          Most of my days are spent inside Boolean networks, cell-fate models,
          and computational biology. But I’m also learning economics, game
          theory, and optimization — trying to understand how coordination
          problems appear everywhere, from molecules to markets. Here, I’ll
          share:
        </p>
        <ul>
          <li>research notes from systems biology and network science</li>
          <li>
            small code projects exploring how we can use networks to understand
            or solve real problems
          </li>
          <li>ideas from economics, incentives, and game theory</li>
          <li>reflections on papers I find exciting in science, complexity, or behavior</li>
          <li>
            and occasionally, my life — love, growing up, expectations,
            mistakes, and becoming a better partner and future parent
          </li>
        </ul>
        <p>
          I’m not trying to sound like an expert. I’m just learning in public,
          thinking out loud, and documenting how my interests slowly converge
          into something meaningful.
        </p>
        <p>
          If you’re curious about any of these things — welcome. This is my lab
          notebook for the brain, the heart, and everything in between.
        </p>
      </div>

      <div class="hero-tags">
        <span class="hero-tag">complex systems</span>
        <span class="hero-tag">systems biology</span>
        <span class="hero-tag">Boolean networks</span>
        <span class="hero-tag">economics & incentives</span>
        <span class="hero-tag">love, care & relationships</span>
      </div>

      <div class="hero-buttons">
        <a class="btn-primary" href="#latest-posts">Read latest posts →</a>
        <a class="btn-ghost" href="#projects">Coming soon</a>
      </div>
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
        {% for post in site.posts limit:3 %}
        <li class="post-item">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <div class="post-meta">
            {{ post.date | date: "%b %-d, %Y" }} · {{ post.category | default: "notes" }}
          </div>
        </li>
        {% endfor %}
        {% if site.posts == empty %}
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
