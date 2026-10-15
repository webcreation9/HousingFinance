import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

/* ============================================
   FEATURE GRID — "Buying your first home / Manage your loan" etc. 
   ============================================ */ 
const FeatureGrid = () => {
  const features = [
    {
      title: 'Buying your first home',
      description:
        'From pre-approval to settlement, we guide first home buyers through every step with low-deposit options and government scheme support.',
      to: '/home-loans/first-home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Managing your loan',
      description:
        'Track repayments, access your offset account, and make extra contributions anytime through our digital banking tools.',
      to: '/home-loans/manage',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18" strokeLinecap="round" />
          <path d="M7 15h3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Refinancing',
      description:
        'Switch to a sharper rate and unlock savings. We model your full repayment projection before you make the move.',
      to: '/home-loans/refinance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12a9 9 0 01-15.5 6.3L3 16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12a9 9 0 0115.5-6.3L21 8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 4v4h-4M3 20v-4h4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Investing in property',
      description:
        'Maximise borrowing power, optimise loan structure, and align finance with your long-term wealth goals.',
      to: '/home-loans/investment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20h18" strokeLinecap="round" />
          <path d="M6 20V12M11 20V6M16 20v-9M21 20V9" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Calculators & tools',
      description:
        'Instantly estimate repayments, borrowing power, stamp duty, and loan comparison — all in one place.',
      to: '/calculators',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <path d="M8 6h8M8 10h2M12 10h2M16 10h.01M8 14h2M12 14h2M16 14h.01M8 18h2M12 18h2M16 18h.01" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'Talk to a specialist',
      description:
        'Book a free appointment with a home lending specialist who understands your local market.',
      to: '/book',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {/* Section header */}
        <div className="features-head">
          <span className="features-eyebrow">How we help</span>
          <h2 className="features-title">
            Everything you need, <span className="features-accent">under one roof</span>
          </h2>
          <p className="features-subtitle">
            Whether you're buying your first home, refinancing, or growing a
            portfolio — our tools, guides, and specialists are with you at every step.
          </p>
        </div>

        {/* Grid */}
        <div className="features-grid">
          {features.map((f) => (
            <Link to={f.to} key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
              <span className="feature-link">
                Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   HERO
   ============================================ */
const Hero = () => {
  return (
    <>
      <section className="hero">
        {/* Background image — full bleed on the right */}
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80"
            alt="Happy family in front of their new home"
            className="hero-bg-img"
            loading="eager"
          />
          <div className="hero-bg-overlay"></div>
        </div>

        {/* Content grid */}
        <div className="hero-grid">
          {/* ===== Left: Overlapping content card ===== */}
          <div className="hero-card">
            <span className="hero-eyebrow">Home Loans</span>
            <h1 className="hero-title">
              Home loans made <span className="hero-accent">simple</span>
            </h1>
            <p className="hero-description">
              AusHomes home loans include a range of variable rate loans, a fixed
              rate loan, offset account options and digital application pathways
              for owner-occupiers, investors, refinancers and first home buyers.
            </p>

            {/* Award badges */}
            <div className="hero-badges">
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                </svg>
                <span>Best Digital Bank 2026</span>
              </div>
              <div className="hero-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                </svg>
                <span>Best First Home Buyer 2025</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta">
              <Link to="/apply" className="hero-btn hero-btn-primary">
                Get started
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/book" className="hero-btn hero-btn-secondary">
                Book an appointment
              </Link>
            </div>

            {/* Trust line */}
            <p className="hero-trust">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Approved in minutes. Backed by 30+ lenders.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Feature grid below the hero ===== */}
      <FeatureGrid />
    </>
  );
};

export default Hero;