import blogData from '@/data/blog.json';

export const metadata = {
  title: "IT & Cybersecurity Blog | IT Legends LLC Illinois",
  description: "Practical managed IT tips, cybersecurity guides & Microsoft 365 advice for Illinois small businesses from IT Legends LLC — Authorized Microsoft & HPE Partner.",
};

function extractPostMetadata(body = '') {
  // Extract tag
  const tagMatch = body.match(/class=["']post-tag["'][^>]*>([^<]+)/i);
  const tag = tagMatch ? tagMatch[1].trim() : 'General';

  // Extract excerpt
  const excerptMatch = body.match(/class=["']post-excerpt["'][^>]*>([^<]+)/i);
  let excerpt = excerptMatch ? excerptMatch[1].trim() : '';
  if (!excerpt) {
    // Strip tags and take first 180 chars
    const cleanText = body.replace(/<[^>]+>/g, ' ');
    excerpt = cleanText.substring(0, 180).trim() + '...';
  }

  // Calculate read time
  const wordCount = body.split(/\s+/).length;
  const readTime = Math.max(1, Math.round(wordCount / 200));

  return { tag, excerpt, readTime };
}

export default function Page() {
  const posts = Object.entries(blogData).map(([slug, data]) => ({
    slug,
    title: data.title,
    body: data.body
  }));

  const featuredPost = posts[0] || null;
  const featuredMeta = featuredPost ? extractPostMetadata(featuredPost.body) : null;
  const featuredTitle = featuredPost ? featuredPost.title.split(' | ')[0] : '';

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* HERO */
        .blog-hero {
          padding: 1.6rem 0 1rem;
          position: relative;
          overflow: hidden;
        }

        .blog-hero-inner {
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(0, 1.1fr);
          gap: 2rem;
          align-items: center;
        }

        .blog-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.2rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(15, 23, 42, 0.7);
          font-size: 0.75rem;
          margin-bottom: 0.55rem;
        }

        body.light-mode .blog-hero-badge {
          background: #eef2ff;
          border-color: #c7d2fe;
          color: #1e293b;
        }

        .blog-hero h1 {
          margin-bottom: 0.4rem;
        }

        .blog-hero-sub {
          color: var(--muted);
          font-size: 0.95rem;
          max-width: 540px;
        }

        .blog-hero-right {
          position: relative;
          justify-self: flex-end;
        }

        .blog-hero-card {
          border-radius: 18px;
          padding: 1.3rem 1.4rem;
          background: radial-gradient(circle at top left,
            rgba(230, 57, 70, 0.4),
            rgba(3, 5, 15, 0.98)
          );
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: var(--shadow);
          max-width: 320px;
          transform: translateY(10px);
          animation: floatUp 0.6s ease-out forwards;
        }

        body.light-mode .blog-hero-card {
          background: #ffffff;
          border-color: rgba(15, 23, 42, 0.08);
        }

        .blog-hero-card h2 {
          margin-top: 0;
          font-size: 1.2rem;
          margin-bottom: 0.3rem;
        }

        .blog-hero-card p {
          font-size: 0.9rem;
        }

        .blog-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin: 0.4rem 0 0.7rem;
        }

        .blog-chip {
          padding: 0.16rem 0.55rem;
          border-radius: 999px;
          font-size: 0.72rem;
          background: rgba(15, 23, 42, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        body.light-mode .blog-chip {
          background: #f3f4f6;
          border-color: #e5e7eb;
          color: #111827;
        }

        .social-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.8rem;
        }

        .social-btn {
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-size: 0.8rem;
          cursor: pointer;
        }

        body.light-mode .social-btn {
          background: #f9fafb;
          border-color: #e5e7eb;
          color: #111827;
        }

        /* FLOAT ANIMATION */
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* POSTS GRID */
        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.4rem;
          margin-top: 1.2rem;
          margin-bottom: 1rem;
        }

        .post-card {
          background: var(--card);
          border-radius: var(--radius);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          min-height: 100%;
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
          transform: translateY(0);
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
          padding: 1rem 1.1rem 1.1rem;
          text-decoration: none;
          color: inherit;
        }

        .post-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
          border-color: rgba(230, 57, 70, 0.7);
        }

        body.light-mode .post-card {
          background: #ffffff;
          border-color: rgba(15, 23, 42, 0.08);
          box-shadow: 0 10px 26px rgba(15, 23, 42, 0.12);
        }

        .post-tag {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--muted);
          margin-bottom: 0.2rem;
        }

        .post-title {
          font-size: 1.02rem;
          font-weight: 600;
          line-height: 1.4;
          margin: 0.1rem 0 0.25rem;
        }

        .post-excerpt {
          font-size: 0.9rem;
          color: var(--muted);
          line-height: 1.5;
          flex-grow: 1;
        }

        .post-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
          font-size: 0.78rem;
          color: var(--muted);
        }

        .read-link {
          font-weight: 600;
          color: var(--accent);
          font-size: 0.88rem;
        }
      ` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
          ]
        }) }}
      />

      <main id="main-content">
        <section className="hero blog-hero">
          <div className="container blog-hero-inner">
            <div>
              <span className="blog-hero-badge">
                🔐 IT LEGENDS Insights
              </span>
              <h1>Modern IT, Explained in Plain English</h1>
              <p className="blog-hero-sub">
                Short, practical posts on managed IT, Cloud, cybersecurity, and Microsoft 365 —
                written for busy owners, not IT people.
              </p>

              <div className="social-bar">
                <a href="https://www.linkedin.com/company/it-legends-llc/" target="_blank" rel="noopener noreferrer" className="social-btn">Follow on LinkedIn</a>
                <a href="https://www.facebook.com/Itlegendsllc/llc" target="_blank" rel="noopener noreferrer" className="social-btn">Follow on Facebook</a>
              </div>
            </div>

            {featuredPost && (
              <div className="blog-hero-card">
                <h2>New on the blog</h2>
                <div className="blog-chip-row">
                  <span className="blog-chip">{featuredMeta.tag}</span>
                  <span className="blog-chip">Approx. {featuredMeta.readTime} min read</span>
                </div>
                <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {featuredMeta.excerpt}
                </p>
                <a className="btn btn-secondary btn-block" href={`/blog/${featuredPost.slug}`}>
                  Read the article
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2>Latest Articles</h2>

            <div className="post-grid">
              {posts.map((post) => {
                const { tag, excerpt, readTime } = extractPostMetadata(post.body);
                const cleanTitle = post.title.split(' | ')[0];
                return (
                  <a key={post.slug} className="post-card" href={`/blog/${post.slug}`}>
                    <div className="post-tag">{tag}</div>
                    <h3 className="post-title">{cleanTitle}</h3>
                    <p className="post-excerpt">{excerpt}</p>
                    <div className="post-meta-row">
                      <span>Approx. {readTime} min read</span>
                      <span className="read-link">Read Article →</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section section-alt">
          <div className="container center">
            <h2>Want Help Turning These Ideas Into a Real Plan?</h2>
            <p className="section-intro" style={{ maxWidth: '620px' }}>
              IT LEGENDS can review your current setup, flag the biggest risks, and map out a phased
              upgrade plan that respects your budget.
            </p>
            <a className="btn btn-primary" href="/consultation-form">Book a Free Consultation</a>
          </div>
        </section>
      </main>
    </>
  );
}
