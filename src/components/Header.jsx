'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [theme, setTheme] = useState('dark');
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Close nav and dropdowns on route changes
  useEffect(() => {
    setNavOpen(false);
    setOpenDropdown(false);
  }, [pathname]);

  // Click outside dropdown handler
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const isActive = (path) => pathname === path;
  const isDropdownActive = () => {
    const dropdownPaths = [
      '/services',
      '/service-bundles',
      '/cloud-services',
      '/security-compliance',
      '/backup-disaster-recovery',
      '/it-strategy-advisory'
    ];
    return dropdownPaths.some(path => pathname === path);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link">
          <div className="logo-wrap">
            <img src="/itl_monogram_logo.png" alt="IT LEGENDS logo" className="logo" />
          </div>
        </Link>

        <div className="nav-wrapper">
          <nav className={`main-nav ${navOpen ? 'nav-open' : ''}`} id="mainNav">
            <Link href="/" className={isActive('/') ? 'active' : ''}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className={`nav-dropdown ${openDropdown ? 'open' : ''}`}>
              <span 
                className={`nav-dropbtn ${isDropdownActive() ? 'active' : ''}`}
                role="button"
                tabIndex={0}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDropdown(!openDropdown);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setOpenDropdown(!openDropdown);
                  }
                }}
              >
                Services
              </span>
              <div className="nav-dropdown-content">
                <Link href="/service-bundles" className={isActive('/service-bundles') ? 'active' : ''}>
                  Service Bundles
                </Link>
                <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                  Full Services
                </Link>
                <Link href="/cloud-services" className={isActive('/cloud-services') ? 'active' : ''}>
                  Cloud &amp; Infrastructure
                </Link>
                <Link href="/security-compliance" className={isActive('/security-compliance') ? 'active' : ''}>
                  Security &amp; Compliance
                </Link>
                <Link href="/backup-disaster-recovery" className={isActive('/backup-disaster-recovery') ? 'active' : ''}>
                  Backup &amp; DR
                </Link>
                <Link href="/it-strategy-advisory" className={isActive('/it-strategy-advisory') ? 'active' : ''}>
                  IT Advisory
                </Link>
              </div>
            </div>

            <Link href="/industries" className={isActive('/industries') ? 'active' : ''}>
              Industries
            </Link>
            <Link href="/pricing" className={isActive('/pricing') ? 'active' : ''}>
              Pricing
            </Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''}>
              About
            </Link>
            <Link href="/support" className={isActive('/support') ? 'active' : ''}>
              Support
            </Link>
            <Link href="/faq" className={isActive('/faq') ? 'active' : ''}>
              FAQ
            </Link>
            <Link href="/locations" className={isActive('/locations') ? 'active' : ''}>
              Locations
            </Link>
            <Link href="/hp-hpe-microsoft" className={isActive('/hp-hpe-microsoft') ? 'active' : ''}>
              Solutions
            </Link>
            <Link href="/blog" className={isActive('/blog') ? 'active' : ''}>
              Blog
            </Link>
            
            <Link href="/consultation-form" className="btn btn-outline">
              Book Consultation
            </Link>
          </nav>

          <div className="header-controls">
            <button 
              className="theme-toggle" 
              id="themeToggle" 
              type="button" 
              aria-label="Toggle light/dark mode"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '☀️' : '🌙'}
            </button>
            
            <button 
              className="nav-toggle" 
              id="navToggle" 
              aria-label="Toggle navigation"
              onClick={toggleNav}
            >
              {navOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
