import React from 'react';

export default function Committees() {
  return (
    <section id="committees" className="committees-section" aria-label="Committees of Alaris MUN">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Diplomatic Councils</div>
          <h2 className="section-title">The Arena of Debate</h2>
          <p className="section-subtitle">
            Six distinct chambers designed to test geopolitical acumen, parliamentary strategy, and multilateral consensus.
          </p>
        </div>

        {/* Preserved Space as requested */}
        <div className="committees-space-holder" aria-hidden="true">
          <div className="committees-subtle-divider">
            <span className="divider-sparkle">✦</span>
          </div>
        </div>

      </div>
    </section>
  );
}
