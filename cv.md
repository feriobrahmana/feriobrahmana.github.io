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
    flex-wrap: wrap;
    gap: 0.5rem;
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
    white-space: nowrap;
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

  .cv-publication {
      margin-bottom: 1rem;
      padding-left: 1rem;
      border-left: 2px solid var(--border-color);
      font-size: 0.95rem;
      color: var(--text-muted);
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
        <li class="skill-tag">Experiment Analysis</li>
        <li class="skill-tag">System Biology</li>
        <li class="skill-tag">Network Control</li>
        <li class="skill-tag">Boolean Network</li>
      </ul>

      <div class="cv-section-title-sm">Certifications</div>
      <ul style="padding-left: 1rem; font-size: 0.85rem; color: var(--text-muted); line-height: 1.4;">
        <li style="margin-bottom: 0.5rem;">Machine Learning with Python (MITx)</li>
        <li style="margin-bottom: 0.5rem;">Game Theory (Stanford/Coursera)</li>
        <li style="margin-bottom: 0.5rem;">Nonlinear Dynamics (Santa Fe Inst)</li>
        <li style="margin-bottom: 0.5rem;">Fundamentals of Quantitative Modeling (UPenn)</li>
        <li style="margin-bottom: 0.5rem;">Introduction to Complexity (Santa Fe Inst)</li>
        <li style="margin-bottom: 0.5rem;">Econometrics (Erasmus School of Economics)</li>
      </ul>

    </div>
  </aside>

  <!-- Main Content -->
  <section class="cv-main">

    <div class="cv-header-block">
      <h2 class="cv-main-title">Summary</h2>
      <p class="cv-summary">
        Ferio Brahmana is a cum laude graduate from Institut Teknologi Bandung (Engineering Physics, GPA: 3.81) and a Master’s student in Bio and Brain Engineering at KAIST (GPA: 3.98). His background bridges quantitative research and strategic problem-solving across academia and industry. His graduate research focuses on nonlinear dynamics and network control theory, building on prior publications in traffic modeling with graph neural networks and experimental acoustics engineering. Professionally, he has applied statistical modeling and optimization to finance and digital platforms—developing demand elasticity models, revenue classification frameworks, and time-series forecasts that directly improved profitability and operational efficiency. His interests center on applying mathematical modeling, probabilistic reasoning, and systems thinking to extract structure from complex data and design strategies with measurable impact.
      </p>
    </div>

    <div>
      <h2 class="cv-main-title">Education</h2>

      <div class="cv-entry">
        <div class="cv-entry-header">
            <span class="cv-role">Korea Advanced Institute of Science & Technology (KAIST)</span>
            <span class="cv-date">Feb 2024 - Feb 2026 (Exp)</span>
        </div>
        <div class="cv-company">Master of Science; Bio and Brain Engineering; GPA: 3.98/4.30</div>
        <ul class="cv-details">
            <li><strong>Highlighted Coursework:</strong> System Biology, Stem Cell Biology, Current Topics in Stem Cell and Regenerative Biology</li>
            <li><strong>Keywords:</strong> System Biology, Network Control, Boolean Network, Reverse Control Theory</li>
        </ul>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-header">
            <span class="cv-role">Institut Teknologi Bandung (ITB)</span>
            <span class="cv-date">Sep 2017 - Jul 2021</span>
        </div>
        <div class="cv-company">Bachelor of Science; Engineering Physics; GPA: 3.81/4.00</div>
        <ul class="cv-details">
            <li><strong>Highlighted Coursework:</strong> System Dynamics and Simulation, Signal Processing, Automatic Control, Image Based Measurement, Advance Engineering Computation, Engineering Data Science</li>
            <li><strong>Thesis Title:</strong> Analysis and Correction of Nonlinearity Error Induced by Optical Devices in Digital Fringe Projection System</li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="cv-main-title">Professional Experience</h2>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Graduate Research Assistant</span>
          <span class="cv-date">Feb 2024 – Present</span>
        </div>
        <div class="cv-company">SBIE Laboratory, Daejeon, South Korea</div>
        <ul class="cv-details">
          <li>Focus on reversion control technology and theory in biological network using boolean network model.</li>
          <li>Actively try to contribute more on the topics of controllability and reversal theory on stem cell.</li>
          <li>Engaging to a lot of complex science related topics (self-emergence biological phenomena) and utilized it for biological network research.</li>
        </ul>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Assistant Manager - Budgeting, Planning, and Analysis</span>
          <span class="cv-date">Feb 2023 – Jan 2024</span>
        </div>
        <div class="cv-company">Bank Mandiri, DKI Jakarta, Indonesia</div>
        <ul class="cv-details">
          <li>Built a new group of Digital Marketing Group in Bank Mandiri (starts with 3 employees in the group, incl. Senior Vice President).</li>
          <li>Report directly to Senior Vice President to develop cadence, budget, workflow, and prioritization of projects for the whole group.</li>
          <li>Delivered all strategy and deck that was supervised and approved by Board of Directors to continue growth of digital products in Bank Mandiri.</li>
          <li>Successfully achieve highest online paid install regarding Ramadan Campaign (500k installs), grow Urban Presence (+25%), and Fee Based Income (+5%).</li>
          <li>Assigned to be spokesperson with intense communication between other groups incl. their Senior Vice President level.</li>
        </ul>
      </div>

      <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Revenue and Growth Management Analyst</span>
          <span class="cv-date">Apr 2022 – Jan 2023</span>
        </div>
        <div class="cv-company">Pegipegi, DKI Jakarta, Indonesia</div>
        <ul class="cv-details">
          <li>Got nominated as one of the best employee in my first 6 months.</li>
          <li>Introduced and developed first regression model to understand and predict elasticity of top booking-value cities and its discounting magnitude with 95% accuracy which help to achieve 112% targeted GBV with lower discounting rate.</li>
          <li>Designed a new category of hotels using correlational analysis and decision tree that increased 20% of revenue while still able to increase 10% of conversion rate.</li>
          <li>Conceptualized a discounting strategy that increased 20% uplift transactions while still able to gain 35% revenue increase.</li>
          <li>Conducted any optimization analysis that help company to 100% achieve targeted growth and profit all quarters in FY22.</li>
        </ul>
      </div>

       <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Curriculum Coordinator</span>
          <span class="cv-date">Jun 2021 – Dec 2021</span>
        </div>
        <div class="cv-company">Pacmann Academy, DKI Jakarta, Indonesia</div>
        <ul class="cv-details">
          <li>Designed 4 syllabus for machine learning-related courses which was valued over Rp 120 million covering from Econometrics to Advanced Machine Learning.</li>
          <li>Managed to deliver the best quality of materials proven by 4.9 average customers rating with 5 as the max score.</li>
          <li>Supervised free materials program on Introduction to Statistics which helps to constantly reach 200% more than existing students’ amount for 4 months straight.</li>
        </ul>
      </div>

       <div class="cv-entry">
        <div class="cv-entry-header">
          <span class="cv-role">Research Assistant</span>
          <span class="cv-date">Feb 2021 – Jun 2021</span>
        </div>
        <div class="cv-company">Institut Teknologi Bandung, Bandung, Indonesia</div>
        <ul class="cv-details">
          <li>Succeed to conduct experiments for acoustic material research incl. first experiment of palm oil waste materials as an acoustics absorber.</li>
          <li>Designed own acoustics impedance tube based on ISO 10534-2:1998 using acrylics materials.</li>
          <li>Analyzed noisy measurement signal either for researches data or industrial clients’ requests.</li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="cv-main-title">Teaching Experience</h2>
      <div class="cv-entry">
        <div class="cv-entry-header">
            <span class="cv-role">Freelance Lecturer</span>
            <span class="cv-date">Jun 2022 – Present</span>
        </div>
        <div class="cv-company">Pacmann Academy</div>
        <ul class="cv-details">
            <li>Teach various topics such like Introduction to Machine Learning, Probability and Statistics, Bayesian Statistics, and Advanced Machine learning.</li>
            <li>Delivered, in average, 4.5 out from 5 teaching score from over than 100 different students.</li>
        </ul>
      </div>
    </div>

    <div>
      <h2 class="cv-main-title">Notable Projects</h2>

      <div class="cv-entry">
        <div class="cv-company">Regression Analysis on Discounting Budget and Gross Booking Value (Pegipegi)</div>
        <p class="cv-details">
           This project was made to understand the elasticity of demand for 15 top cities in Pegipegi so that business team could be able to strategize precisely on how to spend the discounting budget. The model was able to help business team to achieve 114% targeted GBV with 12% lower discounting rate. This project was 105 automated models in Python3 based on regression analysis (one for 7 days for each 15 cities).
        </p>
      </div>

      <div class="cv-entry">
        <div class="cv-company">Classification of Revenue and Growth Hotels (Pegipegi)</div>
        <p class="cv-details">
           The project was initiated to differentiate to type of hotels which is revenue hotels (that was more non-price sensitive) and growth hotels (that was more price sensitive) so that business team can have a more efficient and effective playbook of pricing. The classification and pricing strategy were able to increase 20% of revenue while still able to increase 10% of conversion rate. The analysis was based on hotels labeling that require correlational analysis based on certain business assumption together with decision tree for its classification.
        </p>
      </div>

      <div class="cv-entry">
        <div class="cv-company">Time Series Model for Marketing Metrics and Traffic (Pegipegi)</div>
        <p class="cv-details">
           Time series model was introduced into the company because there was a need to understand the hypothetical dynamics between marketing metrics (such as awareness) into the company’s traffic. The model was chosen because it can show the most important lag of time from marketing metrics to the current traffic. This project doesn’t impact directly into production, but it helps a lot to understand the pros and cons of existing marketing spending’s playbook. The model was made using popular time series model, ARIMA.
        </p>
      </div>

    </div>

    <div>
        <h2 class="cv-main-title">Notable Researches</h2>

        <div class="cv-entry">
            <h3 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Machine Learning / AI</h3>
            <div class="cv-publication">
                Putri, Adiyana, Ferio Brahmana, Endra Joelianto, and Herman Y. Sutarto. "Traffic Flow Estimation using Graph Neural Network with Aggregation of Traffic Features." In 2022 17th International Conference on Control, Automation, Robotics and Vision (ICARCV), pp. 972-977. IEEE, 2022.
            </div>
            <div class="cv-publication">
                Herho, Sandy HS, Ferio Brahmana, Katarina EP Herho, and Dasapta E. Irawan. "Does ENSO significantly affect rice production in Indonesia? A preliminary study using computational time-series approach." International Journal of Data Science 2, no. 2 (2021): 69-76.
            </div>
        </div>

        <div class="cv-entry">
            <h3 style="font-size: 1.1rem; color: var(--text-main); margin-bottom: 0.5rem;">Acoustics</h3>
            <div class="cv-publication">
                Prasetiyo, Iwan, Ashari Budi Nugraha, Ferio Brahmana, and Agus Rino. "Sound absorption characteristics of Oil Palm Empty Fruit Bunch (OPEFB) fibers with Chitosan bio-binder." In AIP Conference Proceedings, vol. 2580, no. 1. AIP Publishing, 2023.
            </div>
             <div class="cv-publication">
                Prasetiyo, Iwan, Khoerul Anwar, and Ferio Brahmana. "Experimental investigation on stackable sub-wavelength sound absorbers based on coiled up-system." In AIP Conference Proceedings, vol. 2580, no. 1. AIP Publishing, 2023.
            </div>
            <div class="cv-publication">
                Prasetiyo, Iwan, Indra Sihar, and Ferio Brahmana. "Enhancing nonwoven fabric material sound absorption using embedded labyrinthine rigid structures." Applied Acoustics 195 (2022): 108852.
            </div>
            <div class="cv-publication">
                Prasetiyo, Iwan, Khoerul Anwar, Ferio Brahmana, and Kimihiro Sakagami. "Development of stackable subwavelength sound absorber based on coiled-up system." Applied Acoustics 195 (2022): 108842.
            </div>
        </div>

    </div>

  </section>

</div>
