---
layout: default
title: "Ferio Brahmana"
description: "Complex-systems researcher studying how minimal interventions can redirect biological and engineered networks while preserving their natural dynamics."
---

<link rel="stylesheet" href="/assets/css/home.css">

<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy">
    <div class="hero-kicker pixel-label"><span class="status-dot"></span>Complex-systems researcher // Player 01</div>
    <h1 id="hero-title">Small interventions.<br><span>Complex systems.</span></h1>
    <p class="hero-lede">
      I study how biological networks change fate—and how to steer them without breaking the natural dynamics that make them work.
    </p>

    <a class="achievement" href="https://doi.org/10.1073/pnas.2604777123" target="_blank" rel="noopener noreferrer">
      <span class="achievement-icon" aria-hidden="true">★</span>
      <span>
        <strong>New discovery unlocked</strong>
        <small>First-author paper in PNAS · 2026</small>
      </span>
      <span class="achievement-arrow" aria-hidden="true">↗</span>
    </a>

    <div class="hero-actions">
      <a class="button button-primary" href="#work">Explore selected work</a>
      <a class="button" href="/cv/">Open full CV</a>
    </div>

    <dl class="hero-stats" aria-label="Career highlights">
      <div><dt>PNAS</dt><dd>First author</dd></div>
      <div><dt>3.98</dt><dd>KAIST GPA</dd></div>
      <div><dt>3×</dt><dd>Research · industry · teaching</dd></div>
    </dl>
  </div>

  <div class="map-shell">
    <div class="map-toolbar">
      <span class="pixel-label">Interactive systems map</span>
      <span class="map-online"><span class="status-dot"></span>Online</span>
    </div>

    <div id="systems-map" class="systems-map" aria-label="Interactive map connecting Ferio's research, industry, teaching, and writing">
      <svg class="map-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <line data-edge="core,nudge" x1="50" y1="47" x2="72" y2="23"></line>
        <line data-edge="core,biology" x1="50" y1="47" x2="79" y2="63"></line>
        <line data-edge="core,business" x1="50" y1="47" x2="23" y2="67"></line>
        <line data-edge="core,gnn" x1="50" y1="47" x2="25" y2="27"></line>
        <line data-edge="core,teaching" x1="50" y1="47" x2="8" y2="46"></line>
        <line data-edge="core,writing" x1="50" y1="47" x2="50" y2="84"></line>
        <line data-edge="core,cv" x1="50" y1="47" x2="92" y2="45"></line>
        <line data-edge="nudge,biology" x1="72" y1="23" x2="79" y2="63"></line>
        <line data-edge="business,gnn" x1="23" y1="67" x2="25" y2="27"></line>
      </svg>

      <button class="map-node node-core is-active" style="--x:50%;--y:47%" type="button" title="The system core feels strangely unstable."
        data-node="core" data-related="nudge,biology,business,gnn,teaching,writing,cv"
        data-kicker="System core" data-title="Ferio's world"
        data-body="Research, quantitative strategy, teaching, and writing connected by one question: how do small interventions reshape complex systems?">
        <span class="node-glyph">FB</span><span class="node-label">Ferio</span>
      </button>

      <button class="map-node node-accent" style="--x:72%;--y:23%" type="button"
        data-node="nudge" data-related="core,biology" data-kicker="PNAS · 2026"
        data-title="NUDGE"
        data-body="A framework that finds minimal temporary interventions for desired cell fates while preserving natural regulatory dynamics."
        data-link="https://doi.org/10.1073/pnas.2604777123" data-link-label="Read the PNAS paper ↗">
        <span class="node-glyph">Δ</span><span class="node-label">NUDGE</span>
      </button>

      <button class="map-node node-cyan" style="--x:79%;--y:63%" type="button"
        data-node="biology" data-related="core,nudge" data-kicker="Research domain"
        data-title="Biological networks"
        data-body="Boolean models, cell-fate transitions, network control, and the emergent dynamics that make living systems resilient.">
        <span class="node-glyph">BN</span><span class="node-label">Biology</span>
      </button>

      <button class="map-node node-blue" style="--x:25%;--y:27%" type="button"
        data-node="gnn" data-related="core,business" data-kicker="Published research"
        data-title="Networks + machine learning"
        data-body="Graph neural networks for traffic estimation, computational time-series analysis, and models that extract structure from complex data.">
        <span class="node-glyph">AI</span><span class="node-label">Models</span>
      </button>

      <button class="map-node node-accent" style="--x:23%;--y:67%" type="button"
        data-node="business" data-related="core,gnn" data-kicker="Industry systems"
        data-title="Strategy under constraints"
        data-body="Pricing elasticity, growth classification, forecasting, and planning systems that translated quantitative reasoning into measurable impact.">
        <span class="node-glyph">%</span><span class="node-label">Business</span>
      </button>

      <button class="map-node node-blue" style="--x:8%;--y:46%" type="button"
        data-node="teaching" data-related="core" data-kicker="Knowledge transfer"
        data-title="Teaching"
        data-body="Machine learning, probability, Bayesian statistics, and curriculum design—making difficult systems understandable without flattening them.">
        <span class="node-glyph">ED</span><span class="node-label">Teaching</span>
      </button>

      <button class="map-node node-cyan" style="--x:50%;--y:84%" type="button"
        data-node="writing" data-related="core" data-kicker="Open notebook"
        data-title="Notes and ideas"
        data-body="A public lab notebook for systems biology, complexity, incentives, research sketches, and the occasional human tangent."
        data-link="/blog/" data-link-label="Browse the notebook →">
        <span class="node-glyph">TXT</span><span class="node-label">Writing</span>
      </button>

      <button class="map-node node-muted" style="--x:92%;--y:45%" type="button"
        data-node="cv" data-related="core" data-kicker="Full record"
        data-title="Curriculum vitae"
        data-body="Education, research, industry experience, teaching, projects, certifications, and publications."
        data-link="/cv/" data-link-label="Open full CV →">
        <span class="node-glyph">CV</span><span class="node-label">CV</span>
      </button>
    </div>

    <aside class="node-inspector" aria-live="polite">
      <div>
        <div id="inspector-kicker" class="inspector-kicker pixel-label">System core</div>
        <h2 id="inspector-title">Ferio's world</h2>
        <p id="inspector-body">Research, quantitative strategy, teaching, and writing connected by one question: how do small interventions reshape complex systems?</p>
      </div>
      <a id="inspector-link" class="inspector-link" href="/cv/" hidden>Open node →</a>
    </aside>
  </div>
</section>

<section class="principles" aria-label="Research principles">
  <article><span class="principle-index pixel-label">01</span><h2>Model the dynamics</h2><p>Understand the relationships and feedback loops before trying to control the outcome.</p></article>
  <article><span class="principle-index pixel-label">02</span><h2>Intervene minimally</h2><p>Look for the smallest action capable of creating a meaningful transition.</p></article>
  <article><span class="principle-index pixel-label">03</span><h2>Preserve what works</h2><p>Change the system without destroying the natural behavior that makes it adaptive.</p></article>
</section>

<section id="work" class="section-block" aria-labelledby="work-title">
  <div class="section-heading">
    <div><span class="pixel-label">Selected systems // Case files</span><h2 id="work-title">Work across scales</h2></div>
    <p>From gene-regulatory networks to digital businesses, the scale changes. The instinct to find structure does not.</p>
  </div>

  <div class="case-grid">
    <article class="case-card case-featured">
      <div class="case-topline"><span class="case-code pixel-label">BIO-CTRL-01</span><span class="case-status">Published in PNAS</span></div>
      <h3>Uncovering minimal control of cell fate by natural dynamics</h3>
      <p>Developed NUDGE, a framework for finding all minimal temporary interventions that move biological networks toward a desired phenotype while conserving their natural regulatory behavior.</p>
      <ul class="tag-list" aria-label="Methods"><li>Boolean networks</li><li>Control theory</li><li>Cell fate</li></ul>
      <a href="https://doi.org/10.1073/pnas.2604777123" target="_blank" rel="noopener noreferrer">Read the paper ↗</a>
    </article>

    <article class="case-card">
      <div class="case-topline"><span class="case-code pixel-label">PRICE-SYS-02</span><span class="case-status">Pegipegi</span></div>
      <h3>Demand elasticity as a decision system</h3>
      <p>Built automated city-level regression models that informed discount allocation and helped exceed booking-value targets while lowering discount rates.</p>
      <div class="case-metrics"><span><strong>114%</strong> target GBV</span><span><strong>−12%</strong> discount rate</span></div>
    </article>

    <article class="case-card">
      <div class="case-topline"><span class="case-code pixel-label">GROWTH-OPS-03</span><span class="case-status">Bank Mandiri</span></div>
      <h3>Building a growth operating system</h3>
      <p>Helped establish planning, budgeting, workflow, and project prioritization for a new digital-marketing group operating across a large organization.</p>
      <div class="case-metrics"><span><strong>500K</strong> campaign installs</span><span><strong>+25%</strong> urban presence</span></div>
    </article>

    <article class="case-card">
      <div class="case-topline"><span class="case-code pixel-label">GRAPH-ML-04</span><span class="case-status">IEEE · ICARCV</span></div>
      <h3>Traffic flow through graph structure</h3>
      <p>Applied graph neural networks to traffic estimation, connecting an early interest in networked infrastructure with later work on biological systems.</p>
      <ul class="tag-list" aria-label="Methods"><li>GNN</li><li>Traffic networks</li><li>Forecasting</li></ul>
    </article>

    <article class="case-card">
      <div class="case-topline"><span class="case-code pixel-label">TEACH-ML-05</span><span class="case-status">Pacmann Academy</span></div>
      <h3>Teaching quantitative thinking</h3>
      <p>Designed curricula and taught machine learning, probability, Bayesian statistics, and advanced modeling—turning technical systems into usable mental models.</p>
      <div class="case-metrics"><span><strong>4.5/5</strong> teaching score</span><span><strong>100+</strong> students</span></div>
    </article>
  </div>
</section>

<section class="section-block journey" aria-labelledby="journey-title">
  <div class="section-heading">
    <div><span class="pixel-label">Player path // Trajectory</span><h2 id="journey-title">One way of thinking, many systems</h2></div>
  </div>

  <ol class="timeline">
    <li><span class="timeline-year">2017—21</span><div><strong>Engineering Physics · ITB</strong><p>Control, signal processing, simulation, experimental acoustics, and a foundation in physical systems.</p></div></li>
    <li><span class="timeline-year">2021—23</span><div><strong>Research, teaching, and travel technology</strong><p>Moved between academic experiments, machine-learning education, and commercial optimization.</p></div></li>
    <li><span class="timeline-year">2023—24</span><div><strong>Digital strategy · Bank Mandiri</strong><p>Designed planning systems and translated analysis into organization-scale decisions.</p></div></li>
    <li><span class="timeline-year">2024—26</span><div><strong>Systems Biology · KAIST</strong><p>Studied network control, cell fate, and minimal interventions—culminating in first-author work in PNAS.</p></div></li>
  </ol>
</section>

<section class="closing-grid" aria-label="Current work and latest writing">
  <article class="now-card">
    <span class="pixel-label">Current quest</span>
    <h2>Control without destruction</h2>
    <p>I’m exploring how temporary, minimal interventions can redirect complex biological systems while keeping their ability to respond, adapt, and remain themselves.</p>
    <a href="mailto:feriobrahmana5@gmail.com">Start a conversation →</a>
  </article>

  <article class="notes-card">
    <div class="notes-heading"><span class="pixel-label">Latest writing</span><a href="/blog/">All notes →</a></div>
    <ul>
      {% assign public_posts = site.posts | where_exp: "item", "item.hidden != true" %}
      {% for post in public_posts limit:3 %}
      <li><a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong><span>{{ post.date | date: "%b %-d, %Y" }} · {{ post.category | default: "notes" }}</span></a></li>
      {% endfor %}
      {% if public_posts.size == 0 %}<li class="empty-note">New field notes are loading…</li>{% endif %}
    </ul>
  </article>
</section>

<script src="/assets/js/network.js" defer></script>
