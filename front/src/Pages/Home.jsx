import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Component/Hero';


import './Home.css';

/* ============================================
   WHY CHOOSE US
   ============================================ */
const WhyChoose = () => {
  const reasons = [
    {
      stat: '4.8★',
      title: 'Rated by 12,000+ Aussies',
      desc: 'Independent reviews from real customers who settled with us.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
        </svg>
      ),
    },
    {
      stat: '30+',
      title: 'Lenders compared',
      desc: 'We compare across banks, credit unions and non-bank lenders.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      stat: '24hr',
      title: 'Fast pre-approval',
      desc: 'Get conditional approval in as little as one business day.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      stat: '$0',
      title: 'Broker fees',
      desc: 'Our service is free — we get paid by the lender, not you.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-head">
          <span className="why-eyebrow">Why AusHomes</span>
          <h2 className="why-title">
            Reasons Australians <span className="why-accent">choose us</span>
          </h2>
          <p className="why-subtitle">
            We combine sharp rates, transparent advice and human support —
            so you never feel lost in the process.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r) => (
            <div className="why-card" key={r.title}>
              <div className="why-card-icon">{r.icon}</div>
              <div className="why-card-stat">{r.stat}</div>
              <h3 className="why-card-title">{r.title}</h3>
              <p className="why-card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   CURRENT OFFERS
   ============================================ */
const CurrentOffers = () => {
  const offers = [
    {
      tag: 'Limited time',
      title: '5.49% p.a.',
      subtitle: 'Variable Rate Home Loan',
      detail: '6.12% p.a. comparison rate*',
      perks: ['No ongoing fees', 'Offset account included', 'Free redraw'],
      accent: true,
      to: '/home-loans/rates',
    },
    {
      tag: 'First home buyers',
      title: '$3,000',
      subtitle: 'Cashback on settlement',
      detail: 'For eligible first home loans',
      perks: ['Apply before Dec 31', 'Any property type', 'Fast approval'],
      to: '/home-loans/first-home',
    },
    {
      tag: 'Refinancers',
      title: '0 fees',
      subtitle: 'On refinance switching',
      detail: 'Save on lender & discharge fees',
      perks: ['Free valuation', 'Digital switch', 'Same-day transfer'],
      to: '/home-loans/refinance',
    },
  ];

  return (
    <section className="offers-section">
      <div className="offers-container">
        <div className="offers-head">
          <span className="offers-eyebrow">Current offers</span>
          <h2 className="offers-title">
            Rates and rewards built <span className="offers-accent">for you</span>
          </h2>
          <p className="offers-subtitle">
            Sharp pricing, real savings, and perks that put money back in your pocket.
          </p>
        </div>

        <div className="offers-grid">
          {offers.map((o) => (
            <Link to={o.to} key={o.title + o.subtitle}
              className={`offer-card ${o.accent ? 'offer-card-featured' : ''}`}>
              <span className="offer-tag">{o.tag}</span>
              <h3 className="offer-title">{o.title}</h3>
              <p className="offer-subtitle">{o.subtitle}</p>
              <p className="offer-detail">{o.detail}</p>
              <ul className="offer-perks">
                {o.perks.map((p) => (
                  <li key={p}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="offer-link">
                View offer
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <p className="offers-disclaimer">
          *Comparison rate based on a $150,000 loan over 25 years. Fees and charges apply. Terms and conditions apply.
        </p>
      </div>
    </section>
  );
};

/* ============================================
   START YOUR JOURNEY (Big CTA Banner)
   ============================================ */
const StartJourney = () => {
  return (
    <section className="journey-section">
      <div className="journey-inner">
        <div className="journey-bg-shape journey-bg-shape-1"></div>
        <div className="journey-bg-shape journey-bg-shape-2"></div>

        <div className="journey-content">
          <span className="journey-eyebrow">Get started today</span>
          <h2 className="journey-title">
            Start your home buying <br />journey with us today
          </h2>
          <p className="journey-subtitle">
            Take the first step — it's free, no obligation and takes just 5 minutes.
            Get your personalised rate and borrowing power instantly.
          </p>

          <div className="journey-actions">
            <Link to="/apply" className="journey-btn journey-btn-primary">
              Get pre-approved
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/calculators" className="journey-btn journey-btn-secondary">
              Try a calculator
            </Link>
          </div>

          <div className="journey-steps">
            <div className="journey-step">
              <span className="journey-step-num">1</span>
              <span>Apply online</span>
            </div>
            <div className="journey-step">
              <span className="journey-step-num">2</span>
              <span>Get approved</span>
            </div>
            <div className="journey-step">
              <span className="journey-step-num">3</span>
              <span>Buy your home</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================
   SUPPORT AT EVERY STEP
   ============================================ */
const SupportSteps = () => {
  const steps = [
    {
      num: '01',
      title: 'Talk to an expert',
      desc: 'Book a free 15-minute call with a local home lending specialist.',
      to: '/book',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Compare loan options',
      desc: 'We match you with the right loan structure for your goals.',
      to: '/home-loans/rates',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Apply with confidence',
      desc: 'Digital application, real-time updates, and a dedicated case manager.',
      to: '/apply',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 15l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Settle & celebrate',
      desc: 'We handle the paperwork. You get the keys. Simple.',
      to: '/buying-guide/settlement',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-head">
          <span className="support-eyebrow">How it works</span>
          <h2 className="support-title">
            Support at <span className="support-accent">every step</span>
          </h2>
          <p className="support-subtitle">
            From your first question to your final signature — we're right beside you.
          </p>
        </div>

        <div className="support-grid">
          {steps.map((s) => (
            <Link to={s.to} key={s.num} className="support-card">
              <span className="support-num">{s.num}</span>
              <div className="support-icon">{s.icon}</div>
              <h3 className="support-card-title">{s.title}</h3>
              <p className="support-card-desc">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================
   HELP ME CHOOSE (Quiz-style CTA)
   ============================================ */
const HelpChoose = () => {
  const options = [
    {
      label: "I'm buying my first home",
      to: '/home-loans/first-home',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "I'm refinancing my loan",
      to: '/home-loans/refinance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M21 12a9 9 0 01-15.5 6.3L3 16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 12a9 9 0 0115.5-6.3L21 8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: "I'm investing in property",
      to: '/home-loans/investment',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 20h18" strokeLinecap="round" />
          <path d="M6 20V12M11 20V6M16 20v-9M21 20V9" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: "I'm just exploring",
      to: '/calculators',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="choose-section">
      <div className="choose-container">
        <div className="choose-head">
          <span className="choose-eyebrow">Find your fit</span>
          <h2 className="choose-title">
            Help me choose a <span className="choose-accent">home loan</span>
          </h2>
          <p className="choose-subtitle">
            Tell us where you're at — we'll point you in the right direction.
          </p>
        </div>

        <div className="choose-grid">
          {options.map((o) => (
            <Link to={o.to} key={o.label} className="choose-card">
              <span className="choose-icon">{o.icon}</span>
              <span className="choose-label">{o.label}</span>
              <span className="choose-arrow">
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
   FOOTER
   ============================================ */
const Footer = () => {
  const cols = [
    {
      title: 'Home Loans',
      links: [
        { label: 'First Home Buyer', to: '/home-loans/first-home' },
        { label: 'Refinancing', to: '/home-loans/refinance' },
        { label: 'Investment Loans', to: '/home-loans/investment' },
        { label: 'Compare Rates', to: '/home-loans/rates' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { label: 'Borrowing Calculator', to: '/calculators/borrowing' },
        { label: 'Repayment Calculator', to: '/calculators/repayment' },
        { label: 'Stamp Duty Calculator', to: '/calculators/stamp-duty' },
        { label: 'All Calculators', to: '/calculators' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { label: 'Buying Guide', to: '/buying-guide' },
        { label: 'House Hunting Tips', to: '/buying-guide/house-hunting' },
        { label: 'Property Inspection', to: '/buying-guide/inspection' },
        { label: 'Settlement Process', to: '/buying-guide/settlement' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Support', to: '/support' },
        { label: 'Contact', to: '/contact' },
        { label: 'Careers', to: '/careers' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 6L36 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 18V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="17" y="24" width="6" height="10" rx="0.5" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>Aus<span className="footer-logo-accent">Homes</span></span>
            </Link>
            <p className="footer-tagline">
              Helping Australians find the right home loan since 2010.
              Sharp rates, human advice, digital-first.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" aria-label="Facebook" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V8c0-1.1.3-2 2-2h2V2h-3c-3 0-5 1.8-5 5.2V10H6v4h3v8h4z" />
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h3l-7.5 8.6L22 22h-6.9l-5.4-7-6.2 7H.5l8-9.2L2 2h7l4.9 6.4L18 2zm-1.2 18h1.7L7.3 3.8H5.5L16.8 20z" />
                </svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 11.02 5.01 2.5 2.5 0 01-.02-5.01zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9z" />
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="footer-social">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div className="footer-col" key={c.title}>
              <h4 className="footer-col-title">{c.title}</h4>
              <ul className="footer-col-list">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="footer-link">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} AusHomes Finance Pty Ltd. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-legal-link">Terms of Use</Link>
            <Link to="/credit-guide" className="footer-legal-link">Credit Guide</Link>
          </div>
        </div>

        <p className="footer-disclaimer">
          AusHomes Finance Pty Ltd (ACN 123 456 789) is a credit representative (Credit Rep No. 123456)
          of AusHomes Aggregation Pty Ltd (Australian Credit Licence No. 123456). Information on this
          site is general only and does not consider your objectives, financial situation or needs.
        </p>
      </div>
    </footer>
  );
};

/* ============================================
   HOME PAGE (composition)
   ============================================ */
const Home = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <CurrentOffers />
      <StartJourney />
      <SupportSteps />
      <HelpChoose />
      <Footer />
    </>
  );
};

export default Home; 
//