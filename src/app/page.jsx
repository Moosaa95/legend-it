export const metadata = {
  title: "Managed IT Services Illinois | IT Legends LLC",
  description: "IT Legends LLC — Managed IT, cybersecurity & Microsoft 365 for Illinois businesses. Authorized Microsoft & HPE Partner. Free IT assessment.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `/* smooth page feel */
html{
scroll-behavior:smooth;
}

/* card hover animation */
.card{
transition:transform .25s ease, box-shadow .25s ease;
}

.card:hover{
transform:translateY(-6px);
}

/* reveal animation */

.reveal{
opacity:0;
transform:translateY(30px);
transition:all .7s ease;
}

.reveal.visible{
opacity:1;
transform:translateY(0);
}

/* FAQ styles */
.kw-faq-section {
  background: var(--bg-alt);
  border-top: 1px solid var(--border);
  padding: 4rem 0;
}

.kw-faq-heading {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--fg);
  text-align: center;
}

.kw-faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.kw-faq-item {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.kw-faq-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.kw-faq-q {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--accent);
  margin: 0 0 0.75rem;
  line-height: 1.4;
}

.kw-faq-a {
  font-size: 0.92rem;
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

body.light-mode .kw-faq-section {
  background: #f8fafc;
  border-color: rgba(0,0,0,0.05);
}

body.light-mode .kw-faq-item {
  background: #ffffff;
  border-color: rgba(0,0,0,0.05);
}` }} />
      
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

      <div dangerouslySetInnerHTML={{ __html: `<section class="hero reveal">

<div class="container grid grid-2">

<div>

<h1>Managed IT & Cybersecurity for Illinois Businesses</h1>

<p>
Proactive IT support, ransomware protection, Microsoft 365 management,
and hybrid cloud infrastructure delivered by a trusted technology partner.
</p>

<div style="margin-top:20px">

<a class='btn btn-primary' href="/consultation-form">
Schedule Free IT Assessment
</a>

<a class='btn btn-outline' href="/services">
Explore Services
</a>

</div>

</div>

<div class="hero-card">

<h3>What We Deliver</h3>

<ul>
<li>24/7 Managed IT Support</li>
<li>Advanced Cybersecurity Protection</li>
<li>Microsoft 365 Administration</li>
<li>Hybrid Cloud Infrastructure</li>
<li>Backup & Disaster Recovery</li>
</ul>

</div>

</div>

</section>


<!-- SERVICES -->

<section class="section reveal">

<div class="container">

<h2>Managed IT Services</h2>

<p class="section-intro">
Complete IT management and cybersecurity solutions designed to keep
your business secure, productive, and scalable.
</p>

<div class="grid grid-3">

<div class="card">
<h3>Managed IT Support</h3>
<p>24/7 monitoring, patching, and technical support.</p>
</div>

<div class="card">
<h3>Cybersecurity</h3>
<p>Advanced protection against ransomware and cyber threats.</p>
</div>

<div class="card">
<h3>Microsoft 365</h3>
<p>Email security, identity protection, and collaboration tools.</p>
</div>

<div class="card">
<h3>Cloud Infrastructure</h3>
<p>Hybrid cloud architecture powered by enterprise platforms.</p>
</div>

<div class="card">
<h3>Backup & Disaster Recovery</h3>
<p>Business continuity with ransomware-resistant backups.</p>
</div>

<div class="card">
<h3>IT Strategy</h3>
<p>Technology planning aligned with your business growth.</p>
</div>

</div>

</div>

</section>


<!-- INDUSTRIES -->

<section class="section section-alt reveal">

<div class="container">

<h2>Industries We Serve</h2>

<p class="section-intro">
We provide tailored IT and cybersecurity solutions for regulated and
mission-critical industries.
</p>

<div class="grid grid-3">

<div class="card">
<h3>Healthcare</h3>
<p>HIPAA-aligned infrastructure and secure patient data systems.</p>
</div>

<div class="card">
<h3>Legal Firms</h3>
<p>Secure document systems and reliable uptime for law practices.</p>
</div>

<div class="card">
<h3>Accounting Firms</h3>
<p>Secure financial systems and compliance-ready infrastructure.</p>
</div>

</div>

</div>

</section>


<!-- TESTIMONIALS -->

<section class="section reveal">

<div class="container">

<h2>What Our Clients Say</h2>

<div class="grid grid-3">

<div class="card">
<p>
"Our downtime dropped to nearly zero after switching to IT LEGENDS.
Their proactive monitoring catches problems before they happen."
</p>

<strong>Managing Partner</strong><br>
<span>Illinois Law Firm</span>
</div>

<div class="card">
<p>
"They blocked a ransomware attack before it could reach our systems.
Their cybersecurity monitoring is incredible."
</p>

<strong>Owner</strong><br>
<span>Construction Company</span>
</div>

<div class="card">
<p>
"We passed our HIPAA audit without a single issue thanks to their
security and backup systems."
</p>

<strong>Medical Practice Owner</strong>
</div>

</div>

</div>

</section>


<!-- CTA -->

<section class="section section-alt reveal">

<div class="container">

<h2>Ready to Secure Your Business Technology?</h2>

<p class="section-intro">
Schedule a free consultation and discover how IT LEGENDS can simplify
and secure your IT environment.
</p>

<a class='btn btn-primary' href="/consultation-form">
Book My Free Consultation
</a>

</div>

</section>


<!-- FAQ -->
<section class="section kw-faq-section reveal" aria-label="Common questions">
  <div class="container">
    <h2 class="kw-faq-heading">Frequently Asked Questions</h2>
    <div class="kw-faq-grid">
      <div class="kw-faq-item">
        <h3 class="kw-faq-q">What is a Managed Service Provider (MSP)?</h3>
        <p class="kw-faq-a">A Managed Service Provider (MSP) is an IT company that proactively manages your technology infrastructure for a flat monthly fee. IT Legends LLC is a trusted MSP offering managed IT services and managed IT support for small businesses and startups across Illinois.</p>
      </div>
      <div class="kw-faq-item">
        <h3 class="kw-faq-q">Do you offer IT services for small business and startups?</h3>
        <p class="kw-faq-a">Yes. IT Legends LLC specializes in managed IT services for startups and growing small businesses. We provide everything from Microsoft 365 management to cybersecurity — scaled to your budget as an IT support company serving all of Illinois.</p>
      </div>
    </div>
  </div>
</section>` }} />
    </>
  );
}
