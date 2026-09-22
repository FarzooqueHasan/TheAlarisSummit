import React, { useEffect } from 'react';

export default function RegisterPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="register-page-container" style={{ minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '5rem', position: 'relative' }}>
      
      {/* Background ambient lighting */}
      <div 
        className="hero-ambient-glow" 
        style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 0 }} 
        aria-hidden="true"
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '880px', margin: '0 auto' }}>
        
        {/* Navigation Breadcrumb / Back button */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button 
            type="button" 
            className="btn btn-secondary"
            onClick={onBack}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Return to Summit
          </button>
        </div>

        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <img 
              src="/images/logo_mark.png" 
              alt="Alaris MUN Phoenix Emblem" 
              width="72" 
              height="72" 
              style={{ borderRadius: '50%', background: 'rgba(118, 104, 191, 0.15)', padding: '6px', border: '1px solid var(--border-subtle)', filter: 'drop-shadow(0 0 25px rgba(118,104,191,0.5))' }}
            />
          </div>

          <div className="section-tag" style={{ marginBottom: '0.75rem' }}>Accreditation Portal</div>
          
          <h1 style={{ fontFamily: 'var(--font-brick)', fontSize: 'clamp(2.2rem, 6vw, 3.5rem)', color: '#ffffff', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1.15, marginBottom: '0.75rem' }}>
            Delegate Registration
          </h1>
          
          <p style={{ color: 'var(--color-periwinkle-light)', fontSize: '1rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            The Alaris Summit · The First Flight
          </p>
        </div>

        {/* Major Announcement Card */}
        <div 
          className="glass-card" 
          style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid rgba(159, 147, 219, 0.35)', 
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)',
            marginBottom: '3rem' 
          }}
        >
          <div 
            style={{ 
              display: 'inline-block', 
              padding: '0.4rem 1.2rem', 
              background: 'rgba(118, 104, 191, 0.25)', 
              border: '1px solid var(--color-periwinkle-light)', 
              borderRadius: 'var(--radius-full)', 
              color: 'var(--color-periwinkle-light)', 
              fontSize: '0.8125rem', 
              fontWeight: 700, 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase', 
              marginBottom: '1.5rem' 
            }}
          >
            Announcement
          </div>

          <h2 
            style={{ 
              fontFamily: 'var(--font-brick)', 
              fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', 
              color: '#ffffff', 
              letterSpacing: '0.08em', 
              lineHeight: 1.25, 
              marginBottom: '1.25rem' 
            }}
          >
            New Delegate Form Coming
          </h2>

          <p 
            style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.05rem', 
              lineHeight: 1.8, 
              maxWidth: '640px', 
              margin: '0 auto 2.5rem auto' 
            }}
          >
            Official delegate applications for <strong>The Alaris Summit</strong> are currently being updated. The new registration portal featuring the real-time committee matrix, council preferences, and allocation guidelines will be published shortly.
          </p>

          {/* Cards for Delegate Types */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '1.5rem', 
              maxWidth: '620px', 
              margin: '0 auto 2.5rem auto' 
            }}
          >
            <div 
              style={{ 
                background: 'rgba(22, 23, 56, 0.5)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.5rem', 
                textAlign: 'center' 
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-brick)', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Individual Delegate
              </h3>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                Form Coming Soon
              </span>
            </div>

            <div 
              style={{ 
                background: 'rgba(22, 23, 56, 0.5)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.5rem', 
                textAlign: 'center' 
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-brick)', fontSize: '1.2rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                Double Delegate
              </h3>
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 600 }}>
                Form Coming Soon
              </span>
            </div>
          </div>

          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onBack}
            style={{ padding: '0.9rem 2.25rem', fontSize: '0.9375rem' }}
          >
            Return to Summit
          </button>
        </div>

        {/* Secretariat Inquiries */}
        <div style={{ textAlign: 'center', padding: '1.5rem', background: 'rgba(14, 15, 38, 0.4)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
            For urgent committee allocations or institutional inquiries:
          </p>
          <a 
            href="mailto:secretariat@alarissummit.org" 
            style={{ color: 'var(--color-periwinkle-light)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            secretariat@alarissummit.org
          </a>
        </div>

      </div>
    </div>
  );
}
