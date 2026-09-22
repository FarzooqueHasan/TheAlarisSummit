import React from 'react';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Site Footer">
      <div className="container">

        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-col-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src="/images/logo_mark.png"
                alt="Alaris Emblem"
                width="44"
                height="44"
                style={{ borderRadius: '50%', background: 'rgba(118,104,191,0.15)', padding: '4px' }}
              />
              <span className="footer-brand-title">THE ALARIS SUMMIT</span>
            </div>
            <p className="footer-brand-desc">
              The premier Model United Nations simulation inspiring intellectual bravery, diplomatic integrity, and global governance for youth leaders.
            </p>
            <div style={{ fontSize: '0.8125rem', color: 'var(--color-periwinkle-light)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              The First Flight · June 2027
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Hero Stage</a></li>
              <li><a href="#about" className="footer-link">Manifesto & Pillars</a></li>
              <li><a href="#committees" className="footer-link">Committees & Councils</a></li>
              <li><a href="#schedule" className="footer-link">Conference Itinerary</a></li>
              <li><a href="#awards" className="footer-link">Honors & Merit Awards</a></li>
            </ul>
          </div>

          {/* Secretariat & Resources */}
          <div>
            <h4 className="footer-col-title">Secretariat</h4>
            <ul className="footer-links">
              <li>
                <a 
                  href="#register-page" 
                  onClick={(e) => {
                    if (onOpenRegister) {
                      e.preventDefault();
                      onOpenRegister();
                    }
                  }} 
                  className="footer-link"
                >
                  Delegate Portal
                </a>
              </li>
              <li><a href="#committees" className="footer-link">Country Matrix Allotments</a></li>
              <li><a href="#faq" className="footer-link">Rules of Procedure (RoP)</a></li>
              <li><a href="#faq" className="footer-link">Background Study Guides</a></li>
            </ul>
          </div>

          {/* Contact & Venue */}
          <div>
            <h4 className="footer-col-title">Dhaula Kuan</h4>
            <ul className="footer-links">
              <li style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                New Delhi 110021
              </li>
              <li>
                <a href="mailto:thealarissummit@gmail.com" className="footer-link">
                  thealarissummit@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918839426468" className="footer-link">
                  +91 8839426468-SUMMIT
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} The Alaris Summit (Alaris MUN). All Rights Reserved.
          </div>
          <div>
            Designed with diplomatic precision & celestial aesthetics.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.75rem' }}
            aria-label="Scroll back to top of page"
          >
            ↑ Back to Top
          </button>
        </div>

      </div>

      {/* Artist's Signature placed in the corner */}
      <div className="footer-corner-signature" aria-hidden="true">
        <img 
          src="/images/artist_signature.png" 
          alt="" 
          className="artist-signature-img"
        />
      </div>
    </footer>
  );
}
