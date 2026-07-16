'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'itlegends-cookie-consent';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if consent has been given on client side
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      // Pre-fill preferences state from storage
      setAnalytics(consent === 'all' || consent === 'analytics');
      setMarketing(consent === 'all' || consent === 'marketing');
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all');
    setAnalytics(true);
    setMarketing(true);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(CONSENT_KEY, 'essential');
    setAnalytics(false);
    setMarketing(false);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSavePreferences = () => {
    let value = 'essential';
    if (analytics && marketing) {
      value = 'all';
    } else if (analytics) {
      value = 'analytics';
    } else if (marketing) {
      value = 'marketing';
    }
    localStorage.setItem(CONSENT_KEY, value);
    setShowBanner(false);
    setShowModal(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('cookie-modal-backdrop')) {
      setShowModal(false);
    }
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <>
      {/* Cookie Banner */}
      <div 
        className={`cookie-banner ${showBanner ? 'show' : ''}`} 
        id="cookieBanner" 
        role="dialog" 
        aria-live="polite"
      >
        <div className="cookie-inner">
          <p>
            We use cookies to improve your experience, analyze traffic, and enhance security.
            By using this site, you agree to our{' '}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <div className="cookie-actions">
            <button id="cookieAcceptAll" className="btn btn-primary" onClick={handleAcceptAll}>
              Accept all
            </button>
            <button id="cookieReject" className="btn btn-outline" onClick={handleRejectAll}>
              Reject non-essential
            </button>
            <button id="cookieManage" className="btn btn-ghost" onClick={() => setShowModal(true)}>
              Manage preferences
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Preferences Modal */}
      <div 
        className={`cookie-modal-backdrop ${showModal ? 'open' : ''}`} 
        id="cookieModalBackdrop" 
        aria-hidden={!showModal}
        onClick={handleBackdropClick}
      >
        <div className="cookie-modal" role="dialog" aria-modal="true" aria-labelledby="cookieModalTitle">
          <div className="cookie-modal-header">
            <h2 id="cookieModalTitle">Cookie preferences</h2>
            <button 
              className="cookie-modal-close" 
              id="cookieModalClose" 
              aria-label="Close preferences"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="cookie-modal-body">
            <p className="cookie-modal-intro">
              Select which types of cookies you want to allow. You can change your preferences at any time.
            </p>
            
            <div className="cookie-option">
              <div>
                <h3>Strictly necessary</h3>
                <p>Required for core site functionality such as security and basic features. Always on.</p>
              </div>
              <div>
                <label className="switch">
                  <input type="checkbox" checked disabled />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="cookie-option">
              <div>
                <h3>Analytics</h3>
                <p>Helps us understand how the site is used so we can improve it.</p>
              </div>
              <div>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    id="cookieAnalytics" 
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>

            <div className="cookie-option">
              <div>
                <h3>Marketing</h3>
                <p>Used to deliver relevant ads and track campaign performance.</p>
              </div>
              <div>
                <label className="switch">
                  <input 
                    type="checkbox" 
                    id="cookieMarketing" 
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="cookie-modal-footer">
            <button id="cookieSavePrefs" className="btn btn-primary" onClick={handleSavePreferences}>
              Save preferences
            </button>
            <button id="cookieAcceptAllModal" className="btn btn-outline" onClick={handleAcceptAll}>
              Accept all
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
