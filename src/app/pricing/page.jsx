export const metadata = {
  title: "Affordable Managed IT Pricing Plans | IT Legends",
  description: "Transparent managed IT pricing from $39/mo for Illinois small businesses. No contracts required. Solo, Practice & Clinic plans from IT Legends LLC.",
};

export default function Page() {
  return (
    <>
      
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.itlegends.net/#business",
    "name": "IT Legends LLC",
    "alternateName": "IT LEGENDS LLC",
    "description": "Security-first managed IT services, cybersecurity, Microsoft 365, and HPE infrastructure for small businesses across Illinois. Authorized Microsoft, HP & HPE Partner.",
    "url": "https://www.itlegends.net/",
    "logo": "https://www.itlegends.net/itl_monogram_logo.png",
    "image": "https://www.itlegends.net/itl_monogram_logo.png",
    "telephone": "+18479995133",
    "email": "victor_o@itlegends.net",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Credit Card, Debit Card, Cash, Zelle, Venmo",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2501 Chatham Road",
      "addressLocality": "Springfield",
      "addressRegion": "IL",
      "postalCode": "62704",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.7817,
      "longitude": -89.6501
    },
    "areaServed": [
      {"@type": "State", "name": "Illinois"},
      {"@type": "City", "name": "Springfield"},
      {"@type": "City", "name": "Chicago"},
      {"@type": "City", "name": "Peoria"},
      {"@type": "City", "name": "Rockford"},
      {"@type": "City", "name": "Naperville"},
      {"@type": "City", "name": "Bloomington"},
      {"@type": "City", "name": "Champaign"},
      {"@type": "City", "name": "Waukegan"},
      {"@type": "City", "name": "Evanston"}
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Managed IT Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Managed IT Support"}, "priceSpecification": {"@type": "PriceSpecification", "minPrice": "39", "priceCurrency": "USD"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Microsoft 365 Management"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Cybersecurity & Email Security"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "HPE Server & Storage Support"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Backup & Disaster Recovery"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "IT Strategy & Advisory"}}
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/it-legends-llc/",
      "https://www.facebook.com/Itlegendsllc/"
    ]
  }` }}
      />

      <div dangerouslySetInnerHTML={{ __html: `<section class="hero hero-small">
    <div class="container">
      <h1>Pricing & Plans</h1>
      <p>
        Simple, transparent “starts at” pricing designed for solo professionals, small and medium
        businesses — with room to grow as you grow.
      </p>
    </div>
  </section>

  <main class="section" id="main-content">
    <div class="container">

      <section class="section">
        <h2>Service Bundles</h2>
        <p class="section-intro">
          All plans include security-first managed IT. Final pricing depends on the number of users,
          devices, Microsoft 365 licensing, and any additional security or compliance requirements.
        </p>

        <div class="grid grid-3">
          <div class="card bundle-card">
            <h3>Home & Solo Bundle</h3>
            <p class="bundle-tagline">For solo professionals and home offices.</p>
            <p class="price-tag">Starts at $109/month (up to 3 devices)</p>
            <ul>
              <li>Managed laptops/desktops (up to 3)</li>
              <li>Patch management & security updates</li>
              <li>Core AV/EDR protection</li>
              <li>Remote support during business hours</li>
            </ul>
            <a class='btn btn-secondary btn-block' href="/service-bundles">View Bundle Details</a>
          </div>

          <div class="card bundle-card">
            <h3>Business Essentials</h3>
            <p class="bundle-tagline">For small and growing teams.</p>
            <p class="price-tag">Starts at $189/month (up to 5 users)</p>
            <ul>
              <li>Managed workstations & core servers</li>
              <li>Microsoft 365 tenant management</li>
              <li>Network & Wi-Fi monitoring</li>
              <li>Backup planning & basic test restores</li>
            </ul>
            <a class='btn btn-secondary btn-block' href="/service-bundles">View Bundle Details</a>
          </div>

          <div class="card bundle-card">
            <h3>Industry Plus</h3>
            <p class="bundle-tagline">For clinics, accountants & regulated offices.</p>
            <p class="price-tag">Starts at $289/month (up to 10 users)</p>
            <ul>
              <li>Everything in Business Essentials</li>
              <li>Stronger policies & MFA enforcement</li>
              <li>Vendor coordination (EHR, line-of-business apps)</li>
              <li>Quarterly IT & security reviews</li>
            </ul>
            <a class='btn btn-secondary btn-block' href="/service-bundles">View Bundle Details</a>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <h2>How Pricing Works</h2>
        <div class="grid grid-2">
          <div class="card">
            <h3>Base Bundle + Add-Ons</h3>
            <p>
              Each bundle includes a base number of users or devices. As your team grows, we adjust
              pricing in a predictable way.
            </p>
            <ul>
              <li>Base monthly fee per bundle</li>
              <li>Per-user or per-device add-ons above the included amount</li>
              <li>Microsoft 365 licensing billed per user via Pax8</li>
              <li>Optional add-ons for advanced security & backup</li>
            </ul>
          </div>
          <div class="card">
            <h3>Flexible for Small & Growing Teams</h3>
            <p>
              We understand many clients are cost-conscious. That’s why we focus on:
            </p>
            <ul>
              <li>Right-sizing your tools — no unnecessary extras</li>
              <li>Security-first configuration without enterprise overhead</li>
              <li>Clear communication and no surprise invoices</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section">
        <h2>What’s Not Included by Default</h2>
        <p class="section-intro">
          To keep your pricing fair and predictable, some items are handled as separate projects or
          add-ons.
        </p>
        <div class="grid grid-2">
          <div class="card">
            <h3>Project-Based Work</h3>
            <ul>
              <li>Major migrations or rebuilds</li>
              <li>Large-scale hardware refreshes</li>
              <li>New office builds or moves</li>
            </ul>
          </div>
          <div class="card">
            <h3>After-Hours & Emergency Support</h3>
            <ul>
              <li>Support outside normal business hours</li>
              <li>Emergency response for critical outages</li>
              <li>After-hours work may include a surcharge</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section-alt">
        <div class="card">
          <h2>Ready for a Custom Quote?</h2>
          <p>
            We’ll review your current setup, user count, and goals, then send a clear proposal with
            options that fit your budget and risk tolerance.
          </p>
          <a class='btn btn-primary' href="/consultation-form">Book a Free Consultation</a>
        </div>
      </section>

    </div>
  
  <!-- ═══ FRESH KEYWORD CONTENT — SEO Specialist Recommendations ══ -->
  <section class="section kw-faq-section" aria-label="Common questions">
    <div class="container">
      <h2 class="kw-faq-heading">Frequently Asked Questions About Our Managed IT Pricing</h2>
      <div class="kw-faq-grid">
        
        <div class="kw-faq-item">
          <h3 class="kw-faq-q">Are your managed IT services affordable for small businesses?</h3>
          <p class="kw-faq-a">Absolutely. IT Legends LLC is known as an affordable managed IT services provider with plans starting at $39/month. We designed our pricing to give small businesses access to enterprise-quality IT support without enterprise pricing. We are an affordable IT support company with transparent, flat-rate plans and no hidden fees.</p>
        </div>
        <div class="kw-faq-item">
          <h3 class="kw-faq-q">Is there a long-term contract required?</h3>
          <p class="kw-faq-a">No long-term contract is required to start. Our plans are flexible, allowing you to scale up or down as your business grows. Most clients choose to stay because of the value — not because they are locked in.</p>
        </div>
      </div>
    </div>
  </section>

  <style>
    .kw-faq-section {
      background: var(--bg-alt, #0b0d14);
      border-top: 1px solid var(--border, #1e293b);
      padding: 2.5rem 0;
    }
    .kw-faq-heading {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--fg);
    }
    .kw-faq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.25rem;
    }
    .kw-faq-item {
      background: var(--card, #0f111a);
      border: 1px solid var(--border, #1e293b);
      border-radius: var(--radius, 14px);
      padding: 1.25rem 1.5rem;
    }
    .kw-faq-q {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--accent, #e63946);
      margin: 0 0 0.5rem;
      line-height: 1.4;
    }
    .kw-faq-a {
      font-size: 0.88rem;
      color: var(--muted);
      line-height: 1.7;
      margin: 0;
    }
    body.light-mode .kw-faq-section {
      background: #f5f7fb;
      border-color: #e5e7eb;
    }
    body.light-mode .kw-faq-item {
      background: #ffffff;
      border-color: #e5e7eb;
    }
    body.light-mode .kw-faq-a {
      color: #4b5563;
    }
  </style>

  </main>` }} />
    </>
  );
}
