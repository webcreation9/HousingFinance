import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    {
      label: 'Home Loans',
      to: '/home-loans',
      dropdown: [
        { label: 'First Home Buyer', to: '/home-loans/first-home' },
        { label: 'Refinancing', to: '/home-loans/refinance' },
        { label: 'Investment Loans', to: '/home-loans/investment' },
        { label: 'Compare Rates', to: '/home-loans/rates' },
      ],
    },
    {
      label: 'Calculators',
      to: '/calculators',
      dropdown: [
        { label: 'Borrowing Power', to: '/calculators/borrowing' },
        { label: 'Repayment Calculator', to: '/calculators/repayment' },
        { label: 'Stamp Duty', to: '/calculators/stamp-duty' },
      ],
    },
    {
      label: 'Buying Guide',
      to: '/buying-guide',
      dropdown: [
        { label: 'House Hunting Tips', to: '/buying-guide/house-hunting' },
        { label: 'Property Inspection', to: '/buying-guide/inspection' },
        { label: 'Settlement Process', to: '/buying-guide/settlement' },
      ],
    },
    { label: 'Support', to: '/support' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <svg className="navbar-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 6L36 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 18V32C8 33.1 8.9 34 10 34H30C31.1 34 32 33.1 32 32V18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="17" y="24" width="6" height="10" rx="0.5" stroke="currentColor" strokeWidth="2" />
            <circle cx="13" cy="24" r="1.8" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <span className="navbar-logo-text">
            Aus<span className="logo-accent">Homes</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-nav">
          <ul className="navbar-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar-nav-item"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button className="navbar-nav-link" onClick={() => toggleDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}>
                      {link.label} 
                      <svg className={`navbar-chevron ${openDropdown === link.label ? 'open' : ''}`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    <div className={`navbar-dropdown ${openDropdown === link.label ? 'open' : ''}`}>
                      {link.dropdown.map((item) => (
                        <Link key={item.label} to={item.to} className="navbar-dropdown-link" onClick={closeMenu}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={link.to} className="navbar-nav-link" onClick={closeMenu}>{link.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <button className="navbar-search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Link to="/login" className="navbar-login-btn">Log on</Link>
          <Link to="/apply" className="navbar-cta-btn">Apply Now</Link>
        </div>

        {/* Hamburger */}
        <button className={`navbar-hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Overlay & Drawer (unchanged) */}
      <div className={`navbar-mobile-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-mobile-list">
          {navLinks.map((link) => (
            <li key={link.label} className="navbar-mobile-item">
              {link.dropdown ? (
                <>
                  <button className="navbar-mobile-link navbar-mobile-toggle"
                    onClick={() => toggleDropdown(link.label)}
                    aria-expanded={openDropdown === link.label}>
                    <span>{link.label}</span>
                    <svg className={`navbar-chevron ${openDropdown === link.label ? 'open' : ''}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={`navbar-mobile-submenu ${openDropdown === link.label ? 'open' : ''}`}>
                    {link.dropdown.map((item) => (
                      <Link key={item.label} to={item.to} className="navbar-mobile-sublink" onClick={closeMenu}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={link.to} className="navbar-mobile-link" onClick={closeMenu}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
        <div className="navbar-mobile-actions">
          <Link to="/login" className="navbar-mobile-login" onClick={closeMenu}>Log on</Link>
          <Link to="/apply" className="navbar-mobile-cta" onClick={closeMenu}>Apply Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;