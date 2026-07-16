import industriesData from '@/data/industries.json';

export const metadata = {
  title: "IT Support & Solutions Illinois | IT Legends",
  description: "IT Legends LLC delivers tailored IT support for law firms, startups, healthcare, accounting & manufacturing businesses across Illinois.",
};

function formatIndustryName(slug) {
  return slug
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'it') return 'IT';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

export default function Page() {
  const industries = Object.entries(industriesData).map(([slug, data]) => {
    // Extract title (clean up trailing ' | IT Legends')
    const displayTitle = data.title ? data.title.split(' | ')[0] : formatIndustryName(slug);
    return {
      slug,
      title: displayTitle,
      description: data.description || 'Tailored technology infrastructure, cybersecurity, and remote IT management solutions.'
    };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.itlegends.net/#business",
          "name": "IT Legends LLC",
          "alternateName": "IT LEGENDS LLC",
          "description": "Security-first managed IT services, cybersecurity, Microsoft 365, and HPE infrastructure for small businesses across Illinois.",
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
          }
        }) }}
      />

      <main id="main-content">
        <section className="hero hero-small">
          <div className="container">
            <h1>Industries We Serve</h1>
            <p className="section-intro">
              IT LEGENDS supports solo professionals, small and medium businesses, and regulated
              environments with practical, security-first IT services.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Industry Landing Pages</h2>
            <p className="section-intro">Built for regulated and client-facing businesses that need security, uptime, and predictable support.</p>

            <div className="grid grid-3" style={{ marginTop: '2rem' }}>
              {industries.map((ind) => (
                <a key={ind.slug} className="card" href={`/industries/${ind.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <h3>{ind.title}</h3>
                  <p className="section-intro" style={{ flexGrow: 1 }}>{ind.description}</p>
                  <span className="btn btn-outline" style={{ marginTop: '1rem', width: 'fit-content' }}>
                    View Industry IT
                  </span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="/consultation-form">Book a Consultation</a>
              <a className="btn btn-outline" href="/services">Explore Full Services</a>
            </div>
          </div>
        </section>

        <section className="section kw-faq-section" aria-label="Common questions">
          <div className="container">
            <h2 className="kw-faq-heading">Frequently Asked Questions — Industry IT Solutions</h2>
            <div className="kw-faq-grid">
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">Do you provide IT support for law firms in Illinois?</h3>
                <p className="kw-faq-a">Yes. IT Legends LLC specializes in IT support for law firms, providing secure document management, Microsoft 365, email security, and compliance-ready infrastructure.</p>
              </div>
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">Are you an IT solutions company for startups?</h3>
                <p className="kw-faq-a">Absolutely. IT Legends LLC is an IT solutions company for startups and growing businesses across Illinois. We offer scalable managed IT packages that grow with your company.</p>
              </div>
            </div>
          </div>
        </section>

        <style dangerouslySetInnerHTML={{ __html: `
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
        ` }} />
      </main>
    </>
  );
}
