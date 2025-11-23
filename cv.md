---
layout: default
title: CV - Ferio Brahmana
permalink: /cv/
---

<style>
  .cv-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 850px) {
    .cv-container {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  /* Sidebar */
  .cv-sidebar {
    position: relative;
  }

  .cv-profile-section {
    position: sticky;
    top: 90px; /* Header height + buffer */
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    padding: 1.5rem;
  }

  .cv-name {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    color: var(--accent);
  }

  .cv-contact-info {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .cv-contact-item {
    display: block;
  }

  .cv-section-title-sm {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.3rem;
    margin-bottom: 0.8rem;
    margin-top: 1.5rem;
  }

  .skill-list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
    background: rgba(148,163,184,0.1);
    border-radius: 4px;
    color: var(--text-main);
  }

  /* Main Content */
  .cv-main {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .cv-header-block {
    margin-bottom: 1rem;
  }

  .cv-main-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .cv-main-title::after {
    content: "";
    flex: 1;
    height: 1px;
    background: var(--border-color);
  }

  .cv-summary {
    font-size: 1.05rem;
    line-height: 1.7;
    color: var(--text-main);
  }

  .cv-entry {
    margin-bottom: 2rem;
  }

  .cv-entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.3rem;
  }

  .cv-role {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-main);
  }

  .cv-date {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-family: monospace;
  }

  .cv-company {
    font-size: 1rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .cv-details {
    margin: 0;
    padding-left: 1.2rem;
    color: var(--text-muted); /* Slightly muted for body text */
    line-height: 1.6;
  }

  .cv-details li {
    margin-bottom: 0.4rem;
  }

  /* Print Styles */
  @media print {
    body { background: white; color: black; }
    .site-header, .site-footer { display: none; }
    .cv-container { display: block; }
    .cv-profile-section { border: none; padding: 0; position: static; margin-bottom: 2rem; }
    .cv-sidebar { margin-bottom: 2rem; }
    a { text-decoration: none; color: black; }
  }
</style>

<div class="cv-container">

  <!-- Sidebar: Contact & Skills -->
  <aside class="cv-sidebar">
    <div class="cv-profile-section">
      <h1 class="cv-name">Ferio Brahmana</h1>
      <div class="cv-contact-info">
        <span class="cv-contact-item">📍 Daejeon, South Korea</span>
        <span class="cv-contact-item">📞 +01051377883 / +6282167932076</span>
        <span class="cv-contact-item">📧 feriobrahmana5@gmail.com</span>
        <a href="https://linkedin.com/in/feriobrahmana" class="cv-contact-item">🔗 linkedin.com/in/feriobrahmana</a>
      </div>

      <div class="cv-section-title-sm">Skills</div>
      <ul class="skill-list">
        <li class="skill-tag">Python3</li>
        <li class="skill-tag">Machine Learning</li>
        <li class="skill-tag">Statistical Analysis</li>
        <li class="skill-tag">Pricing Strategy</li>
        <li class="skill-tag">Demand Projection</li>
        <li class="skill-tag">Systems Thinking</li>
        <li class="skill-tag">Network Control</li>
      </ul>

      <div class="cv-section-title-sm">Education</div>
      <div style="margin-bottom: 1rem;">
        <div style="font-weight: 600; font-size: 0.9rem;">KAIST</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">M.S. Bio & Brain Engineering</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">2024 - 2026 (Exp) • GPA 3.98</div>
      </div>
      <div>
        <div style="font-weight: 600; font-size: 0.9rem;">ITB</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">B.S. Engineering Physics</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">2017 - 2021 • GPA 3.81</div>
      </div>

    </div>
  </aside>

  <!-- Main Content -->
  <section class="cv-main">

    <div class="cv-header-block">
      <h2 class="cv-main-title">Summary</h2>
      <p class="cv-summary">
        Ferio Brahmana is a cum laude graduate from Institut Teknologi Bandung and a Master’s student in Bio and Brain Engineering at KAIST. His background bridges quantitative research and strategic problem-solving across academia and industry. His graduate research focuses on nonlinear dynamics and network control theory. Professionally, he has applied statistical modeling and optimization to finance and digital platforms—developing demand elasticity models and time-series forecasts that directly improved profitability.
      </p>
    </div>

    <div>
      <h2 class="cv-main-title">Professional Experience</h2>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Graduate Research Assistant</span>
          <span class="cv-date">Feb 2024 – Present</span>
        </div>
        <div class="cv-company">SBIE Laboratory, KAIST</div>
        <ul class="cv-details">
          <li>Focus on reversion control technology and theory in biological network using boolean network model.</li>
          <li>Actively contribute on the topics of controllability and reversal theory on stem cell.</li>
          <li>Engaging to complex science related topics (self-emergence biological phenomena) and utilized it for biological network research.</li>
        </ul>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Assistant Manager - Budgeting, Planning, and Analysis</span>
          <span class="cv-date">Feb 2023 – Jan 2024</span>
        </div>
        <div class="cv-company">Bank Mandiri</div>
        <ul class="cv-details">
          <li>Built a new Digital Marketing Group (starting with 3 employees).</li>
          <li>Reported directly to SVP to develop cadence, budget, workflow, and prioritization.</li>
          <li>Delivered strategies approved by Board of Directors to continue growth of digital products.</li>
          <li>Achieved highest online paid install for Ramadan Campaign (500k installs), grew Urban Presence (+25%), and Fee Based Income (+5%).</li>
        </ul>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Revenue and Growth Management Analyst</span>
          <span class="cv-date">Apr 2022 – Jan 2023</span>
        </div>
        <div class="cv-company">Pegipegi</div>
        <ul class="cv-details">
          <li>Nominated as one of the best employees in the first 6 months.</li>
          <li>Developed regression model to predict elasticity of top cities, helping achieve 112% targeted GBV with lower discounting rate.</li>
          <li>Designed a new category of hotels using correlational analysis and decision trees that increased revenue by 20%.</li>
          <li>Conceptualized a discounting strategy that increased uplift transactions by 20% while gaining 35% revenue increase.</li>
        </ul>
      </div>

       <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Curriculum Coordinator</span>
          <span class="cv-date">Jun 2021 – Dec 2021</span>
        </div>
        <div class="cv-company">Pacmann Academy</div>
        <ul class="cv-details">
          <li>Designed 4 syllabi for machine learning-related courses valued over Rp 120 million.</li>
          <li>Delivered best quality materials with 4.9 average customer rating.</li>
          <li>Supervised free materials program on Introduction to Statistics, reaching 200% more students.</li>
        </ul>
      </div>

    </div>

    <div>
      <h2 class="cv-main-title">Highlighted Projects</h2>

      <div class="cv-entry">
        <div class="cv-company">Regression Analysis on Discounting Budget (Pegipegi)</div>
        <p class="cv-details">
           105 automated models in Python3 based on regression analysis to understand demand elasticity. Helped business team achieve 114% targeted GBV with 12% lower discounting rate.
        </p>
      </div>

       <div class="cv-entry">
        <div class="cv-company">Traffic Flow Estimation using Graph Neural Network</div>
        <p class="cv-details">
           Published in 2022 17th International Conference on Control, Automation, Robotics and Vision (ICARCV).
        </p>
      </div>

    </div>

  </section>

</div>
