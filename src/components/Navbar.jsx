import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenRegister, onNavigateHome, currentPage = 'home' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e, targetHash) => {
    closeMenu();
    if (currentPage !== 'home') {
      e.preventDefault();
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand */}
        <a 
          href="#hero" 
          className="nav-brand" 
          aria-label="Alaris MUN Home"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <img 
            src="/images/logo_mark.png" 
            alt="Alaris MUN Phoenix Emblem" 
            className="nav-brand-logo" 
            width="40" 
            height="40" 
          />
          <div className="nav-brand-text">
            <span className="nav-brand-main">ALARIS MUN</span>
            <span className="nav-brand-sub">The First Flight</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#committees" className="nav-link" onClick={(e) => handleNavClick(e, '#committees')}>Committees</a></li>
            <li><a href="#schedule" className="nav-link" onClick={(e) => handleNavClick(e, '#schedule')}>Itinerary</a></li>
            <li><a href="#awards" className="nav-link" onClick={(e) => handleNavClick(e, '#awards')}>Awards</a></li>
            <li><a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a></li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-cta-btn" 
            onClick={onOpenRegister}
            aria-label="Register for Alaris MUN"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Nav Button */}
        <button 
          type="button" 
          className="mobile-nav-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
        >
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#hero" className="nav-link" onClick={(e) => handleNavClick(e, '#hero')}>Home</a>
        <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>About</a>
        <a href="#committees" className="nav-link" onClick={(e) => handleNavClick(e, '#committees')}>Committees</a>
        <a href="#schedule" className="nav-link" onClick={(e) => handleNavClick(e, '#schedule')}>Itinerary</a>
        <a href="#awards" className="nav-link" onClick={(e) => handleNavClick(e, '#awards')}>Awards</a>
        <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={() => { closeMenu(); onOpenRegister(); }}
          style={{ marginTop: '1.5rem', width: '220px' }}
        >
          Register Now
        </button>
      </div>
    </header>
  );
}
