import MicrosoftPartnerBanner from '@/components/MicrosoftPartnerBanner';
export const metadata = {
  title: "HP & HPE Solutions Illinois | IT Legends LLC",
  description: "HP and HPE server, storage, and networking solutions for Illinois businesses from IT Legends LLC — Authorized HP & HPE Partner. Microsoft 365 bundles available.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `body {
      font-family: Arial, Helvetica, sans-serif;
      margin: 0;
      padding: 0;
      color: #1f2937;
      line-height: 1.6;
      background: #ffffff;
    }
    .container {
      max-width: 1100px;
      margin: auto;
      padding: 40px 20px;
    }
    h1, h2, h3 {
      color: #0f172a;
    }
    .hero {
      background: #0b1f3a;
      color: #ffffff;
      padding: 70px 20px;
    }
    .hero h1 {
      font-size: 2.4rem;
      margin-bottom: 10px;
    }
    .hero p {
      max-width: 850px;
      font-size: 1.1rem;
    }
    .cta {
      display: inline-block;
      margin-top: 20px;
      background: #2563eb;
      color: #ffffff;
      padding: 14px 28px;
      text-decoration: none;
      border-radius: 6px;
      font-weight: bold;
    }
    .section {
      margin-top: 60px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
      margin-top: 30px;
    }
    .card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 24px;
      background: #f9fafb;
    }
    .price {
      font-weight: bold;
      margin-top: 12px;
      color: #111827;
    }
    .badge {
      display: inline-block;
      background: #e0f2fe;
      color: #075985;
      padding: 6px 12px;
      font-size: 0.8rem;
      border-radius: 999px;
      margin-bottom: 10px;
      font-weight: bold;
    }
    .disclaimer {
      font-size: 0.85rem;
      color: #4b5563;
      margin-top: 50px;
      border-top: 1px solid #e5e7eb;
      padding-top: 20px;
    }
    footer {
      background: #f3f4f6;
      padding: 30px 20px;
      text-align: center;
      font-size: 0.9rem;
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
      "https://www.facebook.com/itlegends"
    ]
  }` }}
      />

      <div dangerouslySetInnerHTML={{ __html: `<section class="hero">
  <div class="container">
    <h1>Managed IT Infrastructure & Cloud Solutions</h1>
    <p>
      IT LEGENDS delivers secure, scalable HP, HPE, and Microsoft Cloud solutions
      bundled with proactive managed services. One partner. One strategy.
      One accountable IT provider.
    </p>
    <a href="/hp-hpe-microsoft#contact" class="cta">Request a Free Consultation</a>
  </div>
</section>

<!-- TRUST / ECOSYSTEM -->
<section class="container section">
  <h2>Trusted Technology Ecosystem</h2>
  <p>
    We design and manage business-critical environments using industry-leading
    platforms from HP, Hewlett Packard Enterprise (HPE), and Microsoft — aligned
    with enterprise service delivery best practices.
  </p>
  <ul>
    <li>✔ HP & HPE business-class infrastructure</li>
    <li>✔ Microsoft 365, Azure & hybrid cloud</li>
    <li>✔ Security-first, compliance-ready design</li>
    <li>✔ Full lifecycle ownership & support</li>
  </ul>
</section>

<!-- HP / HPE BUNDLES -->
<section class="container section">
  <h2>HP & HPE Managed Infrastructure Bundles</h2>
  <p>
    All HP and HPE solutions are delivered with an IT LEGENDS managed service
    membership. Hardware is configured to order based on your business needs.
  </p>

  <div class="grid">

    <div class="card">
      <span class="badge">Most Popular</span>
      <h3>HP Business Workstation Bundle</h3>
      <p>Secure and managed HP business desktops or laptops for modern teams.</p>
      <ul>
        <li>HP Pro / Elite series systems</li>
        <li>Secure imaging & configuration</li>
        <li>Patch management & monitoring</li>
        <li>Warranty coordination</li>
      </ul>
      <p class="price">Starting at $99–$149 per device / month</p>
    </div>

    <div class="card">
      <h3>HP Secure Office Bundle</h3>
      <p>Endpoint security and management designed for regulated environments.</p>
      <ul>
        <li>HP workstations & peripherals</li>
        <li>Endpoint security baseline</li>
        <li>Compliance-ready policies</li>
        <li>Ongoing IT management</li>
      </ul>
      <p class="price">Starting at $129+ per device / month</p>
    </div>

    <div class="card">
      <h3>HPE Small Business Server Bundle</h3>
      <p>Reliable centralized compute powered by HPE ProLiant servers.</p>
      <ul>
        <li>HPE ProLiant server platform</li>
        <li>Deployment & firmware baseline</li>
        <li>Monitoring & alerts</li>
        <li>Backup integration</li>
      </ul>
      <p class="price">Starting at $249–$399 per month</p>
    </div>

    <div class="card">
      <h3>HPE Virtualization & Private Cloud</h3>
      <p>Scalable private or hybrid cloud infrastructure built on HPE.</p>
      <ul>
        <li>Virtualization host configuration</li>
        <li>Snapshot & recovery strategy</li>
        <li>Capacity & performance monitoring</li>
        <li>Disaster recovery readiness</li>
      </ul>
      <p class="price">Starting at $499+ per month</p>
    </div>

    <div class="card">
      <h3>HPE Backup & Business Continuity</h3>
      <p>Protect critical data with encrypted backups and rapid recovery.</p>
      <ul>
        <li>On-prem or hybrid backup</li>
        <li>Ransomware-aware design</li>
        <li>Recovery assistance</li>
        <li>Retention & compliance support</li>
      </ul>
      <p class="price">Starting at $199+ per month</p>
    </div>

  </div>
</section>

<!-- MICROSOFT CLOUD -->
<section class="container section">
  <h2>Microsoft Cloud & Modern Workplace Solutions</h2>
  <p>
    IT LEGENDS designs and manages Microsoft cloud environments that integrate
    seamlessly with HP and HPE infrastructure.
  </p>

  <div class="grid">
    <div class="card">
      <h3>Microsoft 365 & Copilot Enablement</h3>
      <ul>
        <li>Email, collaboration & identity</li>
        <li>Security & access configuration</li>
        <li>Copilot readiness & governance</li>
        <li>Ongoing administration</li>
      </ul>
    </div>

    <div class="card">
      <h3>Azure Hybrid & Cloud Infrastructure</h3>
      <ul>
        <li>Azure landing zone design</li>
        <li>Hybrid integration with HPE</li>
        <li>Backup & disaster recovery</li>
        <li>Cost & performance optimization</li>
      </ul>
    </div>

    <div class="card">
      <h3>Microsoft Security & Compliance</h3>
      <ul>
        <li>Identity & conditional access</li>
        <li>Endpoint & data protection</li>
        <li>Compliance posture management</li>
        <li>Policy-driven security controls</li>
      </ul>
    </div>
  </div>
</section>

<!-- PROMOTIONS -->
<section class="container section">
  <h2>Current Promotions</h2>
  <p>
    Limited-time incentives offered by IT LEGENDS to help organizations modernize
    their IT environment.
  </p>
  <ul>
    <li>✔ Complimentary infrastructure or cloud assessment</li>
    <li>✔ Onboarding service credits for new managed customers</li>
    <li>✔ Microsoft cloud planning included with select deployments</li>
  </ul>
  <p><strong>Availability subject to qualification and service scope.</strong></p>
</section>

<!-- CTA -->
<section id="contact" class="container section">
  <h2>Request a Free Consultation</h2>
  <p>
    Speak with an IT LEGENDS architect to design a secure, managed infrastructure
    or cloud solution tailored to your organization.
  </p>
  <a class='cta' href="/consultation_form">Book a Consultation</a>
</section>

<!-- DISCLAIMER -->
<section class="container disclaimer">
  <p>
    IT LEGENDS LLC is an independent IT services provider and is not affiliated with,
    sponsored by, or endorsed by Hewlett-Packard, Hewlett Packard Enterprise, or Microsoft.
    All trademarks are the property of their respective owners.
  </p>
  <p>
    Pricing is indicative and subject to final configuration, service scope, and term length.
    Hardware availability is subject to authorized distributor assignment. Solutions are sold
    with managed services and are not offered as standalone hardware purchases.
  </p>
</section>` }} />
      <MicrosoftPartnerBanner />
    </>
  );
}
