---
layout: default
title: "Ferio's Chaotic World"
---

<script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
<script src="/assets/js/network.js"></script>

<style>
  /* HERO GRAPH */
  .hero-container {
     position: relative;
     width: 100%;
     height: 60vh;
     min-height: 500px;
     border-radius: 1.5rem;
     border: 1px solid var(--border-color);
     box-shadow: 0 10px 30px rgba(0,0,0,0.05);
     overflow: hidden;
     background: var(--bg-card);
     margin-bottom: 2.5rem;
  }

  [data-theme="dark"] .hero-container {
      background: #020617;
      box-shadow: 0 18px 45px rgba(15,23,42,0.5);
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
    max-width: 500px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  }

  [data-theme="dark"] .hero-overlay {
      background: rgba(2, 6, 23, 0.8);
      backdrop-filter: blur(8px);
  }

  .hero-kicker {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: .12em;
    color: var(--text-muted);
  }

  .hero-title {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0.5rem 0;
  }

  .hero-title span {
    color: var(--accent);
  }

  /* HOME GRID */
  .home-grid {
      display: grid;
      /* Split roughly 40% / 60% */
      grid-template-columns: 1fr 1.5fr;
      gap: 3rem;
  }

  /* LEFT COL: CV Glimpse */
  .cv-glimpse {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
  }

  .section-label {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-muted);
      font-weight: 600;
      margin-bottom: 0.5rem;
  }

  .cv-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      padding: 1.8rem;
  }

  .cv-role-highlight {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.2rem;
  }

  .cv-place-highlight {
      font-size: 0.9rem;
      color: var(--accent);
      margin-bottom: 1rem;
  }

  .cv-summary-text {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 1.5rem;
  }

  .btn-outline {
      display: inline-flex;
      align-items: center;
      padding: 0.5rem 1rem;
      border: 1px solid var(--border-color);
      border-radius: 99px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-main);
      transition: all 0.2s;
  }

  .btn-outline:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: var(--accent-soft);
  }

  /* RIGHT COL: Posts & Projects */
  .content-col {
      display: flex;
      flex-direction: column;
      gap: 3rem;
  }

  .post-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post-item {
      padding-bottom: 1.5rem;
      border-bottom: 1px solid var(--border-color);
  }

  .post-item:last-child {
      border-bottom: none;
  }

  .post-item a {
    color: var(--text-main);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 700;
    display: block;
    margin-bottom: 0.4rem;
  }

  .post-item a:hover {
    color: var(--accent);
  }

  .post-meta {
    font-size: 0.85rem;
    color: var(--text-muted);
  }

  .view-all-link {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--accent);
  }

  .working-on-box {
      background: rgba(148,163,184,0.05);
      border-radius: 1rem;
      padding: 1.5rem;
      border: 1px dashed var(--border-color);
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 900px) {
    .home-grid {
        grid-template-columns: 1fr; /* Stack vertically */
    }

    .hero-container {
        height: 50vh;
        min-height: 400px;
    }

    .hero-overlay {
        position: static; /* Make it flow normally below graph on mobile */
        margin-top: -2rem; /* Pull it up slightly over the bottom border if desired, or just let it sit */
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        width: auto;
        max-width: none;
        background: var(--bg-card);
        z-index: 20; /* Ensure it sits on top if pulled up */
        transform: translateY(-20px); /* Overlap effect */
    }
  }
</style>

<!-- 1. HERO NETWORK -->
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

<!-- 2. MAIN GRID -->
<div class="home-grid">

    <!-- LEFT: CV Glimpse -->
    <div class="cv-glimpse">
        <div class="section-label">About Me</div>
        <div class="cv-card">
            <div class="cv-role-highlight">Graduate Research Assistant</div>
            <div class="cv-place-highlight">SBIE Laboratory, KAIST</div>

            <p class="cv-summary-text">
                Ferio Brahmana is a Master’s student in Bio and Brain Engineering at KAIST.
                His background bridges quantitative research and strategic problem-solving across academia and industry,
                focusing on nonlinear dynamics, network control theory, and systems biology.
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background: var(--accent-soft); color: var(--accent); border-radius: 4px;">System Biology</span>
                <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background: var(--accent-soft); color: var(--accent); border-radius: 4px;">Network Control</span>
                <span style="font-size: 0.75rem; padding: 0.2rem 0.5rem; background: var(--accent-soft); color: var(--accent); border-radius: 4px;">Machine Learning</span>
            </div>

            <a href="/cv" class="btn-outline">Read Full CV →</a>
        </div>
    </div>

    <!-- RIGHT: Content -->
    <div class="content-col">

        <!-- Latest Posts -->
        <div>
            <div class="section-label">Latest Writing</div>
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
            <a href="/blog" class="view-all-link">View all posts →</a>
        </div>

        <!-- Working On -->
        <div>
            <div class="section-label">What I'm Working On</div>
            <div class="working-on-box">
                <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
                    I’m still shaping how to talk about my research, tools, and side projects.
                    Currently reading about boolean networks and trying not to break my simulations.
                    Check back soon!
                </p>
            </div>
        </div>

    </div>

</div>
