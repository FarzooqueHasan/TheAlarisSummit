import React from 'react';

const TIERS = [
  {
    id: 'individual',
    name: 'Individual Delegate',
    tag: 'Single Delegation'
  },
  {
    id: 'double',
    name: 'Double Delegate',
    tag: 'Joint Delegation'
  }
];

export default function Registration({ onOpenRegister }) {
  return (
    <section id="register" className="registration-section" aria-label="Registration Formats">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Delegate Accreditation</div>
          <h2 className="section-title">Join The Summit</h2>
          <p className="section-subtitle">
            Secure your participation for The First Flight. Country matrix and portfolio allotments are allocated on a rolling basis.
          </p>
        </div>

        {/* Pricing Cards Grid - Keep cards, remove contents and price */}
        <div 
          className="pricing-grid" 
          style={{ 
            maxWidth: '820px', 
            margin: '0 auto', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem' 
          }}
        >
          {TIERS.map((tier) => (
            <div 
              key={tier.id} 
              className="glass-card pricing-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center', 
                padding: '2.5rem 2rem' 
              }}
            >
              <div 
                style={{ 
                  fontSize: '0.75rem', 
                  color: 'var(--color-periwinkle-light)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.12em', 
                  marginBottom: '0.75rem', 
                  fontWeight: 600 
                }}
              >
                {tier.tag}
              </div>

              <h3 className="pricing-tier" style={{ fontSize: '1.65rem', marginBottom: '2rem' }}>
                {tier.name}
              </h3>

              <button 
                type="button" 
                className="btn btn-primary"
                onClick={onOpenRegister}
                style={{ width: '100%', marginTop: 'auto' }}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
