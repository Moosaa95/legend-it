import locationsData from '@/data/locations.json';

export const metadata = {
  title: "Managed IT Services Across Illinois | IT Legends",
  description: "IT Legends LLC serves Springfield, Chicago, Peoria, Rockford, Naperville, Waukegan, and businesses statewide across Illinois with managed IT and cybersecurity.",
};

function formatCityName(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') + ', IL';
}

export default function Page() {
  const cities = Object.entries(locationsData).map(([slug, data]) => ({
    slug,
    name: formatCityName(slug),
    description: data.description ? data.description.split('.')[0] + '.' : 'Managed IT services and cybersecurity support.'
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              "@id": "https://itlegends.net/#business",
              "name": "IT LEGENDS LLC",
              "image": "https://itlegends.net/itl_monogram_logo.png",
              "url": "https://itlegends.net/",
              "telephone": "+1-847-999-5133",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2501 Chatham Road",
                "addressLocality": "Springfield",
                "addressRegion": "IL",
                "postalCode": "62704",
                "addressCountry": "US"
              },
              "description": "Security-first managed IT services for solo professionals and small & medium businesses across Illinois, including Microsoft 365, security, backup and remote support."
            }
          ]
        }) }}
      />

      <main id="main-content">
        <section className="hero hero-small">
          <div className="container">
            <h1>IT Service Areas Across Illinois</h1>
            <p className="section-intro">
              IT LEGENDS LLC proudly serves solo professionals, clinics, law firms, accountants,
              real estate offices, and small/medium businesses across Illinois.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Where We Provide Managed IT Services</h2>
            <p className="section-intro">
              Select your city below to learn more about our services, pricing, and support options.
            </p>

            <div className="grid grid-3" style={{ marginTop: '2rem' }}>
              {cities.map((city) => (
                <a key={city.slug} className="card" href={`/locations/${city.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3>{city.name}</h3>
                  <p className="section-intro">{city.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container">
            <h2>Not Sure Which City Page Applies to You?</h2>
            <p className="section-intro">
              We support businesses anywhere in Illinois. Book a consultation and we’ll help you get started.
            </p>
            <a className="btn btn-primary" href="/consultation-form">Book a Consultation</a>
          </div>
        </section>

        <section className="section kw-faq-section" aria-label="Common questions">
          <div className="container">
            <h2 className="kw-faq-heading">Frequently Asked Questions — IT Support Near You</h2>
            <div className="kw-faq-grid">
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">How do I find managed IT services near me in Illinois?</h3>
                <p className="kw-faq-a">IT Legends LLC provides managed IT services near you across all of Illinois — from Springfield and Peoria to Chicago and Naperville. As a remote-first provider, we support your team wherever they work.</p>
              </div>
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">Do you offer on-site IT support in Illinois?</h3>
                <p className="kw-faq-a">Yes. While we resolve most issues remotely for speed and efficiency, IT Legends LLC also provides on-site support across Illinois when hardware or infrastructure work requires a physical visit.</p>
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
