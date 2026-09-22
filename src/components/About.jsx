import React from 'react';

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About The Summit">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Conference Manifesto</div>
          <h2 className="section-title">The First Flight</h2>
          <p className="section-subtitle">
            Rising from discourse to decisive global consensus. Alaris MUN welcomes the next generation of diplomats, strategists, and world leaders.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="about-grid">

          {/* Left Narrative */}
          <div className="about-narrative">
            <p className="about-lead">
              Like the phoenix ascending above the clouds, <strong>The Alaris Summit</strong> symbolizes .......................................................</p>
            <p className="about-body">
              Founded on the belief that ...........................................................................................
            </p>
            <p className="about-body">
              .............................................................................. Alaris MUN provides an uncompromising arena for delegates to debate, negotiate, and draft resolutions that forge real impact.
            </p>

            {/* Secretariat Signature Badge */}
            <div className="about-signature">
              <img
                src="/images/logo_mark.png"
                alt="Emblem"
                className="secretariat-badge-img"
                width="52"
                height="52"
              />
              <div>
                <div className="signature-name">Secretariat of Alaris MUN</div>
                <div className="signature-role">Office of the Secretary-General & Director-General</div>
              </div>
            </div>
          </div>

          {/* Right Stats Bento */}
          <div className="about-stats-grid">
            <div className="glass-card stat-card">
              <span className="stat-number">20+</span>
              <span className="stat-label">Secretariats</span>
              <span className="stat-desc">Dedicated Secretariats working at midnight for you</span>
            </div>

            <div className="glass-card stat-card">
              <span className="stat-number">6</span>
              <span className="stat-label">Flagship Committees</span>
              <span className="stat-desc">From historic cabinet crises to UN General Assembly</span>
            </div>

            <div className="glass-card stat-card">
              <span className="stat-number">2</span>
              <span className="stat-label">Intense Days</span>
              <span className="stat-desc">Over 16 hours of substantive parliamentary debate</span>
            </div>

            <div className="glass-card stat-card">
              <span className="stat-number gold">₹1L+</span>
              <span className="stat-label">Prize & Merit Pool</span>
              <span className="stat-desc">Cash awards, trophies & verified diplomatic credentials</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
