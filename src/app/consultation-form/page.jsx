'use client';

import { useState } from 'react';
import Link from 'next/link';

// Since this is a client component, we use standard react lifecycle.
// If we want metadata, we can either split into a layout or export it from page.js (Next.js supports metadata in Server Components, but for Client Components we can use the HTML head or wrap it in a Server Component layout).
// Let's create the Consultation Form component here.
export default function ConsultationPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      // Submit form using fetch in application/x-www-form-urlencoded format
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'consultation',
          ...data
        }).toString(),
      });
      
      // Direct redirect to Cal.com booking link
      window.location.href = "https://cal.com/itlegends.net/book-a-free-consultation-with-it-legends";
    } catch (err) {
      console.error('Form submission error:', err);
      // Fallback: still redirect even if network request fails so the user can book their time slot
      window.location.href = "https://cal.com/itlegends.net/book-a-free-consultation-with-it-legends";
    }
  };

  return (
    <div className="consultation-page">
      <style dangerouslySetInnerHTML={{ __html: `
        .consultation-page {
          background: linear-gradient(to right, #ffffff, #f4f4f4);
          color: #333;
          min-height: 100vh;
          padding: 40px 0;
          font-family: 'Segoe UI', -apple-system, sans-serif;
        }
        body.light-mode .consultation-page {
          background: linear-gradient(to right, #ffffff, #f4f4f4);
          color: #333;
        }
        .consultation-page .form-section {
          max-width: 750px;
          margin: 40px auto;
          padding: 40px;
          background-color: #ffffff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0,0,0,0.05);
        }
        .consultation-page h1 {
          text-align: center;
          margin-bottom: 30px;
          color: #0a2342;
          font-size: 2.2rem;
          font-weight: 700;
        }
        .consultation-page a.back-link {
          display: inline-block;
          margin-bottom: 20px;
          text-align: left;
          color: #e63946;
          text-decoration: none;
          font-weight: bold;
        }
        .consultation-page label {
          font-weight: 600;
          display: block;
          margin-top: 15px;
          color: #0a2342;
        }
        .consultation-page input, 
        .consultation-page textarea, 
        .consultation-page select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          margin-top: 6px;
          font-size: 15px;
          background-color: #ffffff;
          color: #333;
          box-sizing: border-box;
        }
        .consultation-page input:focus, 
        .consultation-page textarea:focus, 
        .consultation-page select:focus {
          border-color: #e63946;
          outline: none;
        }
        .consultation-page .cta-button {
          background-color: #e63946;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 25px;
          width: 100%;
          transition: background-color 0.2s;
        }
        .consultation-page .cta-button:hover {
          background-color: #d62839;
        }
        .consultation-page .cta-button:disabled {
          background-color: #ff9fa8;
          cursor: not-allowed;
        }
      `}} />

      <section className="form-section">
        <Link href="/" className="back-link">
          &larr; Back to Home
        </Link>
        <h1>Book a Free Consultation</h1>

        {/* Standard Netlify-friendly form */}
        <form onSubmit={handleSubmit} name="consultation" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="consultation" />

          <label htmlFor="firstName">First Name *</label>
          <input type="text" name="firstName" id="firstName" required />

          <label htmlFor="lastName">Last Name *</label>
          <input type="text" name="lastName" id="lastName" required />

          <label htmlFor="email">Email Address *</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" name="phone" id="phone" required />

          <label htmlFor="businessName">Business / Organization Name</label>
          <input type="text" name="businessName" id="businessName" />

          <label htmlFor="businessAddress">Business Address</label>
          <input type="text" name="businessAddress" id="businessAddress" />

          <label htmlFor="planInterested">Which plan are you most interested in? (optional)</label>
          <select name="planInterested" id="planInterested">
            <option value="">Not sure yet – help me decide</option>
            <option value="Home & Solo Bundle">Home &amp; Solo Bundle</option>
            <option value="Business Essentials">Business Essentials</option>
            <option value="Industry Plus">Industry Plus</option>
          </select>

          <label htmlFor="employees">Number of Employees / Users *</label>
          <input type="number" name="employees" id="employees" min="1" required />

          <label htmlFor="message">How can we help you? *</label>
          <textarea name="message" id="message" rows="4" required></textarea>

          <button type="submit" className="cta-button" disabled={loading}>
            {loading ? 'Submitting & Redirecting...' : 'Submit & Continue to Booking'}
          </button>
        </form>
      </section>
    </div>
  );
}
