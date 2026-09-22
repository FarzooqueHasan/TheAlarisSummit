import React from 'react';

const AWARDS_DATA = [
  { title: 'Best Delegate' },
  { title: 'High Commendation' },
  { title: 'Special Mention' },
  { title: 'Best Delegation' }
];

export default function Awards() {
  return (
    <section id="awards" className="awards-section" aria-label="Delegate Awards & Recognition">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Diplomatic Honors</div>
          <h2 className="section-title">Merit & Recognition</h2>
          <p className="section-subtitle">
            Celebrating outstanding statecraft, diplomatic distinction, and parliamentary excellence.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="awards-grid">
          {AWARDS_DATA.map((award, idx) => (
            <div key={idx} className="glass-card award-card">
              <div className="award-icon-box" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>

              <h3 className="award-name" style={{ marginBottom: 0 }}>{award.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
