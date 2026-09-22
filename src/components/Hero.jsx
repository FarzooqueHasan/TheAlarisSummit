import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenRegister }) {
  // Opening landing animation state: starts covered by clouds, then unreveals
  const [isRevealed, setIsRevealed] = useState(false);
  const [animatingHero, setAnimatingHero] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsRevealed(true);
      setAnimatingHero(false);
      return;
    }

    // Unreveal sequence: hold initial mist so visitors soak in the atmosphere, then part the clouds
    const timer = setTimeout(() => {
      triggerUnreveal();
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const triggerUnreveal = () => {
    setIsRevealed(true);
    // Stagger hero elements slightly so the title ascends right as the clouds part
    setTimeout(() => {
      setAnimatingHero(true);
    }, 350);
  };

  return (
    <>
      {/* ==========================================================================
          THE CLOUD UNREVEAL INTRO CURTAIN
          The clouds cover the page on landing and unreveal into the hero section
          ========================================================================== */}
      <div
        className={`cloud-curtain-overlay ${isRevealed ? 'revealed' : ''}`}
        aria-hidden="true"
      >
        {/* Left Cloud Curtain Half */}
        <div className="cloud-curtain-half left-half">
          <div className="cloud-curtain-sprite"></div>
        </div>

        {/* Right Cloud Curtain Half */}
        <div className="cloud-curtain-half right-half">
          <div className="cloud-curtain-sprite"></div>
        </div>

        {/* Center Mystical Fog & Emblem Teaser */}
        <div className="cloud-curtain-center-mist">
          <img
            src="/images/logo_mark.png"
            alt=""
            className="curtain-logo-teaser"
            width="130"
            height="130"
          />
          <div className="curtain-loading-text">Ascending to the Summit…</div>
        </div>
      </div>

      {/* ==========================================================================
          HERO SECTION (FAITHFUL REPRODUCTION OF 'THE ALARIS SUMMIT.png')
          ========================================================================== */}
      <section id="hero" className="hero-viewport" aria-label="Hero Section: The Alaris Summit">
        {/* Atmospheric Backlight */}
        <div className="hero-ambient-glow" aria-hidden="true"></div>

        {/* Framing Clouds Left & Right (Matching reference image) */}
        <div className="hero-cloud-frame left" aria-hidden="true">
          <div className="hero-cloud-sprite"></div>
        </div>
        <div className="hero-cloud-frame right" aria-hidden="true">
          <div className="hero-cloud-sprite"></div>
        </div>

        {/* Central Stage */}
        <div className={`hero-content ${animatingHero ? 'animating' : ''}`}>

          {/* Watermark Phoenix & Laurel Emblem (Positioned directly behind the title) */}
          <div className="hero-phoenix-wrapper">
            <img
              src="/images/logo_mark.png"
              alt="Alaris Emblem: Soaring Phoenix in Laurel Wreath"
              className="hero-phoenix-emblem"
              width="680"
              height="680"
            />

            {/* Monumental 3-Line Title in NT Brick Sans */}
            <h1 className="hero-summit-title">
              <span className="line-1">THE</span>
              <span className="line-2">ALARIS</span>
              <span className="line-3">SUMMIT</span>
            </h1>
          </div>

          {/* Flourish Banner: Antique filigree surrounding 'THE FIRST FLIGHT' */}
          <div className="hero-flourish-banner">
            <svg
              className="flourish-svg"
              viewBox="0 0 120 28"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 20 C25 25, 45 8, 65 14 C85 20, 100 8, 115 14 M35 15 C45 6, 55 22, 65 14 M15 18 C12 12, 22 10, 24 16 C26 22, 16 24, 12 19" />
              <circle cx="115" cy="14" r="2.5" fill="var(--color-periwinkle-light)" />
              <circle cx="6" cy="19" r="2.5" fill="var(--color-periwinkle-light)" />
            </svg>

            <span className="hero-first-flight-text">THE FIRST FLIGHT</span>

            <svg
              className="flourish-svg flipped"
              viewBox="0 0 120 28"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M5 20 C25 25, 45 8, 65 14 C85 20, 100 8, 115 14 M35 15 C45 6, 55 22, 65 14 M15 18 C12 12, 22 10, 24 16 C26 22, 16 24, 12 19" />
              <circle cx="115" cy="14" r="2.5" fill="var(--color-periwinkle-light)" />
              <circle cx="6" cy="19" r="2.5" fill="var(--color-periwinkle-light)" />
            </svg>
          </div>

          {/* Conference Metadata Bar */}
          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <span>Date:</span>
              <strong>June 2027</strong>
            </div>
            <span className="hero-meta-divider">✦</span>
            <div className="hero-meta-item">
              <span>Venue:</span>
              <strong>TBD</strong>
            </div>
          </div>

          {/* Primary Call to Actions */}
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenRegister}
            >
              Register as Delegate
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfnNgjNnjgm3O0FwLMdQOMGs5S_pwQCyb2YdkPOm2EZG5ojRA/viewform?usp=publish-editor" 
              className="btn btn-secondary"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Register as Secretariat
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }} aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
