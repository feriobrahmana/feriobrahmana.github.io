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
     margin-bottom: 3rem;
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

  /* HORIZONTAL CV LAYOUT */
  .cv-horizontal-container {
      display: grid;
      grid-template-columns: 280px 1fr 1fr;
      gap: 2rem;
      margin-bottom: 4rem;
      align-items: start;
  }

  /* Profile Column */
  .cv-profile-col {
      text-align: center;
      padding-right: 1rem;
  }

  .cv-name-large {
      font-size: 1.6rem;
      font-weight: 700;
      margin: 0.5rem 0 0.2rem;
      color: var(--text-main);
  }

  .cv-role-large {
      font-size: 1rem;
      color: var(--text-muted);
      margin-bottom: 0.2rem;
  }

  .cv-affiliation {
      font-size: 0.9rem;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 1rem;
  }

  .cv-social-links {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      margin-top: 1rem;
  }

  .social-icon {
      width: 24px;
      height: 24px;
      fill: var(--text-muted);
      transition: fill 0.2s;
  }

  .social-icon:hover {
      fill: var(--accent);
  }

  .btn-outline-sm {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.85rem;
      padding: 0.4rem 0.8rem;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      color: var(--text-muted);
  }

  .btn-outline-sm:hover {
      border-color: var(--accent);
      color: var(--accent);
  }

  /* Content Columns */
  .cv-section-title {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 1.2rem;
      border-bottom: 2px solid var(--border-color);
      padding-bottom: 0.5rem;
      display: inline-block;
  }

  .cv-item {
      margin-bottom: 1.5rem;
  }

  .cv-item-role {
      font-weight: 600;
      font-size: 0.95rem;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
  }

  .cv-item-role span {
     font-size: 0.85rem;
     color: var(--text-muted);
     font-weight: normal;
  }

  .cv-item-place {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 0.3rem;
  }

  .cv-item-place.accent {
      color: var(--accent);
  }

  .cv-pub-item {
      font-size: 0.85rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin-bottom: 0.8rem;
      padding-left: 0.8rem;
      border-left: 2px solid var(--border-color);
  }


  /* BOTTOM GRID (Posts & Working On) */
  .bottom-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      border-top: 1px solid var(--border-color);
      padding-top: 3rem;
  }

  .post-list-simple {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  .post-item-simple {
      margin-bottom: 1rem;
  }

  .post-item-simple a {
      font-weight: 600;
      font-size: 1.05rem;
      display: block;
      margin-bottom: 0.2rem;
  }

  .post-meta-simple {
      font-size: 0.85rem;
      color: var(--text-muted);
  }

  .working-on-text {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-muted);
  }


  /* MOBILE RESPONSIVE */
  @media (max-width: 900px) {
    .cv-horizontal-container {
        grid-template-columns: 1fr; /* Stack vertically */
        gap: 3rem;
    }

    .cv-profile-col {
        padding-right: 0;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 2rem;
    }

    .bottom-grid {
        grid-template-columns: 1fr;
    }

    .hero-container {
        height: 50vh;
        min-height: 400px;
    }

    .hero-overlay {
        position: static;
        margin-top: -2rem;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
        width: auto;
        max-width: none;
        background: var(--bg-card);
        z-index: 20;
        transform: translateY(-20px);
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

<!-- 2. HORIZONTAL CV -->
<div class="cv-horizontal-container">

    <!-- COL 1: Profile -->
    <div class="cv-profile-col">
        <!-- Optional: Avatar placeholder if needed in future
        <div style="width: 120px; height: 120px; background: #eee; border-radius: 50%; margin: 0 auto 1rem;"></div>
        -->
        <h2 class="cv-name-large">Ferio Brahmana</h2>
        <div class="cv-role-large">Graduate Research Assistant</div>
        <div class="cv-affiliation">SBIE Laboratory, KAIST</div>

        <div class="cv-social-links">
            <!-- Email -->
            <a href="mailto:feriobrahmana5@gmail.com" aria-label="Email">
                <svg class="social-icon" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://linkedin.com/in/feriobrahmana" target="_blank" aria-label="LinkedIn">
                <svg class="social-icon" viewBox="0 0 24 24">
                     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            </a>
            <!-- GitHub (Assuming user has one since this is GH Pages) -->
            <a href="https://github.com/feriobrahmana" target="_blank" aria-label="GitHub">
                <svg class="social-icon" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
        </div>

        <a href="/cv" class="btn-outline-sm">Full CV &rarr;</a>
    </div>

    <!-- COL 2: Experience -->
    <div>
        <div class="cv-section-title">Research Experience</div>

        <div class="cv-item">
            <div class="cv-item-role">
                Graduate Research Assistant
                <span>2024 - Present</span>
            </div>
            <div class="cv-item-place accent">SBIE Laboratory, KAIST</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">
                Focusing on reversion control technology and theory in biological networks using boolean network models.
            </div>
        </div>

        <div class="cv-item">
            <div class="cv-item-role">
                Research Assistant
                <span>2021</span>
            </div>
            <div class="cv-item-place accent">Institut Teknologi Bandung</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">
                Experimental acoustics material research and analysis of nonlinear errors in digital fringe projection systems.
            </div>
        </div>

        <div class="cv-section-title" style="margin-top: 1rem;">Professional Experience</div>

        <div class="cv-item">
            <div class="cv-item-role">
                Asst. Manager - Budgeting & Planning
                <span>2023 - 2024</span>
            </div>
            <div class="cv-item-place">Bank Mandiri</div>
        </div>

        <div class="cv-item">
            <div class="cv-item-role">
                Revenue Analyst
                <span>2022 - 2023</span>
            </div>
            <div class="cv-item-place">Pegipegi</div>
        </div>

    </div>

    <!-- COL 3: Education & Pubs -->
    <div>
        <div class="cv-section-title">Education</div>

        <div class="cv-item">
            <div class="cv-item-role">M.S. Bio & Brain Engineering</div>
            <div class="cv-item-place accent">KAIST (GPA: 3.98)</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">2024 - Present</div>
        </div>

        <div class="cv-item">
            <div class="cv-item-role">B.S. Engineering Physics</div>
            <div class="cv-item-place accent">ITB (GPA: 3.81, Cum Laude)</div>
            <div style="font-size: 0.85rem; color: var(--text-muted);">2017 - 2021</div>
        </div>

        <div class="cv-section-title" style="margin-top: 1rem;">Selected Publications</div>

        <div class="cv-pub-item">
            <strong>Traffic Flow Estimation using Graph Neural Network.</strong><br>
            ICARCV, IEEE, 2022.
        </div>
        <div class="cv-pub-item">
            <strong>Enhancing nonwoven fabric material sound absorption.</strong><br>
            Applied Acoustics, 2022.
        </div>
        <div class="cv-pub-item">
            <strong>Does ENSO significantly affect rice production?</strong><br>
            Int. Journal of Data Science, 2021.
        </div>

    </div>

</div>

<!-- 3. BOTTOM GRID -->
<div class="bottom-grid">

    <!-- Latest Posts -->
    <div>
        <div class="cv-section-title">Latest Writing</div>
        <ul class="post-list-simple">
            {% assign public_posts = site.posts | where_exp: "item", "item.hidden != true" %}
            {% for post in public_posts limit:3 %}
            <li class="post-item-simple">
                <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <div class="post-meta-simple">
                {{ post.date | date: "%b %-d, %Y" }} · {{ post.category | default: "notes" }}
                </div>
            </li>
            {% endfor %}

            {% if public_posts.size == 0 %}
            <li class="post-item-simple">
                <div class="post-meta-simple">No posts yet — first one coming soon.</div>
            </li>
            {% endif %}
        </ul>
        <a href="/blog" class="view-all-link">View all posts →</a>
    </div>

    <!-- Working On -->
    <div>
        <div class="cv-section-title">What I'm Working On</div>
        <div class="working-on-text">
            <p style="margin-top: 0;">
                I’m still shaping how to talk about my research, tools, and side projects.
                Currently reading about boolean networks and trying not to break my simulations.
            </p>
        </div>
    </div>

</div>
