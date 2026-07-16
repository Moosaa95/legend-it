'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Contact Column */}
          <div className="footer-col footer-brand">
            <div className="logo-wrap">
              <img src="/itl_monogram_logo.png" alt="IT LEGENDS logo" className="logo" />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
                <strong style={{ textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--fg)' }}>IT LEGENDS</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Smart. Secure. Scalable IT.</span>
              </div>
            </div>
            <p>
              Security-first managed IT services, cybersecurity, and Microsoft 365 solutions for Illinois small businesses and solo professionals.
            </p>
            <div className="footer-contact">
              <strong>Office:</strong> 2501 Chatham Road, Springfield, IL 62704<br />
              <strong>Phone:</strong> <a href="tel:+18479995133">847-999-5133</a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link href="/services">All Services</Link></li>
              <li><Link href="/service-bundles">Service Bundles</Link></li>
              <li><Link href="/services/cloud-services">Cloud Infrastructure</Link></li>
              <li><Link href="/services/security-compliance">Security &amp; Compliance</Link></li>
              <li><Link href="/services/backup-disaster-recovery">Backup &amp; DR</Link></li>
              <li><Link href="/services/it-strategy-advisory">IT Advisory Strategy</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/pricing">Pricing Plans</Link></li>
              <li><Link href="/locations">Locations We Serve</Link></li>
              <li><Link href="/blog">IT Blog &amp; Insights</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal */}
          <div className="footer-col">
            <h3>Support &amp; Legal</h3>
            <ul>
              <li><Link href="/support">Technical Support</Link></li>
              <li><Link href="/faq">Frequently Asked Questions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {currentYear} IT LEGENDS LLC. All rights reserved.
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/it-legends-llc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/Itlegendsllc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
