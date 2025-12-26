import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import logo from '../assets/logo.svg';
import '../styles/header.scss';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="header-nav py-3 bg-white fixed-top header-shadow">
        <Container>
          <div className="d-flex align-items-center justify-content-between">
            <a href="#" className="header-logo">
              <img src={logo} alt="LeadCRM.io" height="40" />
            </a>

            {/* Desktop Menu */}
            <div className="header-desktop-menu d-none d-lg-flex align-items-center gap-4">
              <a href="#product" className="header-link fw-medium text-dark d-flex align-items-center gap-1">
                Product <FaChevronDown size={10} />
              </a>
              <a href="#pricing" className="header-link fw-medium text-dark">Pricing</a>
              <a href="#resources" className="header-link fw-medium text-dark d-flex align-items-center gap-1">
                Resources <FaChevronDown size={10} />
              </a>
              <a href="#company" className="header-link fw-medium text-dark d-flex align-items-center gap-1">
                Company <FaChevronDown size={10} />
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="header-actions d-none d-lg-flex gap-3 align-items-center">
              <Button
                variant="primary"
                className="px-4 py-2 border-0"
              >
                Get Your Free Account
              </Button>
              <Button
                variant="outline-primary"
                className="px-4 py-2 d-flex align-items-center gap-2"
              >
                <FiLogIn /> Login
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="header-hamburger d-lg-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`header-mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="header-mobile-menu">
          <a href="#product" className="header-mobile-link" onClick={toggleMobileMenu}>
            <span>Product</span>
            <FaChevronDown size={12} />
          </a>
          <a href="#pricing" className="header-mobile-link" onClick={toggleMobileMenu}>
            <span>Pricing</span>
          </a>
          <a href="#resources" className="header-mobile-link" onClick={toggleMobileMenu}>
            <span>Resources</span>
            <FaChevronDown size={12} />
          </a>
          <a href="#company" className="header-mobile-link" onClick={toggleMobileMenu}>
            <span>Company</span>
            <FaChevronDown size={12} />
          </a>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="header-mobile-overlay"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;

