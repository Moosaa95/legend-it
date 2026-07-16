export const metadata = {
  title: "Managed IT FAQ | IT Legends LLC — Common Questions Answered",
  description: "Answers to the most common questions about managed IT services, pricing, Microsoft 365, cybersecurity, and HPE support from IT Legends LLC in Illinois.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.faq-wrap {
      max-width: 900px;
      margin: 0 auto;
    }

    .faq-intro {
      margin-bottom: 1.5rem;
    }

    .faq-group-title {
      font-size: 1.1rem;
      margin-top: 2rem;
      margin-bottom: 0.75rem;
      border-left: 4px solid #e63946;
      padding-left: 0.6rem;
    }

    .faq-item {
      border-radius: var(--radius);
      border: 1px solid var(--border);
      background: var(--card);
      padding: 1rem 1.1rem;
      margin-bottom: 0.75rem;
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
    }

    .faq-q {
      font-weight: 600;
      margin-bottom: 0.35rem;
    }

    .faq-a {
      font-size: 0.95rem;
      color: var(--muted);
    }

    body.light-mode .faq-item {
      background: #ffffff;
      border-color: rgba(15, 23, 42, 0.08);
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
    }

    body.light-mode .faq-a {
      color: #4b5563;
    }

    .faq-cta {
      margin-top: 2rem;
      text-align: center;
    }

    .faq-cta p {
      font-size: 0.95rem;
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: `{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {"@type": "Question", "name": "What does managed IT services include?", "acceptedAnswer": {"@type": "Answer", "text": "Managed IT services from IT Legends LLC includes 24/7 monitoring, Microsoft 365 administration, cybersecurity, endpoint management, helpdesk support, backup & disaster recovery, and IT strategy advisory."}},
      {"@type": "Question", "name": "How much does managed IT cost?", "acceptedAnswer": {"@type": "Answer", "text": "IT Legends LLC pricing starts at $39/month for solo professionals, $89/month for small practices, and $179/month for clinic-level clients. Custom enterprise pricing is available."}},
      {"@type": "Question", "name": "Do you support Microsoft 365?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. As an Authorized Microsoft Partner, IT Legends LLC manages Microsoft 365 licensing, email security, Teams, SharePoint, OneDrive, and Microsoft Defender for all clients."}},
      {"@type": "Question", "name": "Are you an authorized HP and HPE partner?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. IT Legends LLC is an Authorized HP and HPE Partner and Reseller, providing HPE ProLiant server support, storage systems, networking, and enterprise hardware across Illinois."}},
      {"@type": "Question", "name": "What areas of Illinois do you serve?", "acceptedAnswer": {"@type": "Answer", "text": "IT Legends LLC serves all of Illinois including Springfield, Chicago, Peoria, Rockford, Naperville, Waukegan, Evanston, Bloomington, Champaign, and statewide remote clients."}},
      {"@type": "Question", "name": "Do you offer HIPAA-compliant IT services?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. IT Legends LLC provides HIPAA-aligned IT infrastructure, email security, encrypted backup, and compliance monitoring for healthcare practices, therapists, and medical offices in Illinois."}}
    ]
  }` }}
      />

      <div dangerouslySetInnerHTML={{ __html: `<!-- MAIN -->
  <main id="main-content">
    <section class="hero hero-small">
      <div class="container">
        <h1>Frequently Asked Questions</h1>
        <p>
          Quick answers about how IT LEGENDS works, what we offer, and what to expect when
          you partner with us for managed IT.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container faq-wrap">
        <p class="section-intro faq-intro">
          If you don’t see your question here, you can always reach us at
          <a href="mailto:support@itlegends.net">support@itlegends.net</a> or book a free consultation.
        </p>

        <!-- GENERAL -->
        <h2 class="faq-group-title">General</h2>

        <div class="faq-item">
          <div class="faq-q">Who does IT LEGENDS serve?</div>
          <div class="faq-a">
            We focus on solo professionals and small to mid-sized businesses that need
            reliable, security-conscious IT without a large in-house IT team. That includes
            healthcare clinics, therapists, accounting and tax firms, attorneys, real estate
            and insurance agents, retail and service shops, and other professional offices.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Do you only work in Illinois?</div>
          <div class="faq-a">
            No, we provide our services to clients in all 50 states but we’re based in Illinois and can provide on-site support within the    country (travel fees may apply). For many clients, we deliver most services remotely, so we can
            support distributed and hybrid teams as long as we’re a good fit for your needs.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Do you work with home offices and solo entrepreneurs?</div>
          <div class="faq-a">
            Yes. Our Home &amp; Solo bundle is designed specifically for consultants,
            remote workers, and small home-based businesses that still need professional-grade
            IT support, security, and Microsoft 365 management.
          </div>
        </div>

        <!-- SERVICES & BUNDLES -->
        <h2 class="faq-group-title">Services &amp; Bundles</h2>

        <div class="faq-item">
          <div class="faq-q">What’s the difference between a “bundle” and your full services?</div>
          <div class="faq-a">
            Our service bundles (Home &amp; Solo, Business Essentials, Industry Plus)
            group common services into simple, predictable packages. Our full services page
            describes the broader stack we can provide, including projects, roadmapping,
            and more advanced security or compliance support. We often start with a bundle
            and layer in additional services as you grow.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Can I customize a bundle for my business?</div>
          <div class="faq-a">
            Yes. Bundles are a starting point. During your discovery call, we’ll confirm
            your user count, device mix, existing tools, and priorities, then adjust services
            and pricing so you’re not paying for things you don’t need.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Do you manage Microsoft 365 for us?</div>
          <div class="faq-a">
            Yes. We can handle tenant setup, licensing (through Pax8), security policies,
            user onboarding and offboarding, and basic governance for Exchange, Teams,
            SharePoint and OneDrive. Microsoft 365 management is a core part of our Business
            Essentials and Industry Plus bundles.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Can you work with our existing hardware and software vendors?</div>
          <div class="faq-a">
            In most cases, yes. We regularly coordinate with third-party vendors such as
            EHR systems, accounting platforms, and line-of-business applications. Our goal
            is to be your single, friendly point of contact for IT questions while still
            respecting each vendor’s role and support process.
          </div>
        </div>

        <!-- PRICING & CONTRACTS -->
        <h2 class="faq-group-title">Pricing, Contracts &amp; Billing</h2>

        <div class="faq-item">
          <div class="faq-q">Do you require long-term contracts?</div>
          <div class="faq-a">
            No. One of our values is flexibility. We aim for simple agreements that make it
            easy to start and continue if we’re delivering value. Some projects or hardware
            purchases may have separate terms, but our core managed services do not lock you
            into long, multi-year commitments.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">How does pricing work for different business sizes?</div>
          <div class="faq-a">
            Each bundle has a “starting at” price that covers a baseline number of users
            or devices. As your team grows, we adjust based on additional users/devices and
            any extra services added (for example, backup, advanced security tools, or
            additional sites). During onboarding, you’ll receive a clear proposal with all
            costs spelled out before you sign.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Do you offer one-time projects, or only monthly services?</div>
          <div class="faq-a">
            We do both. If you need a specific project—such as a PC refresh, a small office
            network setup, or a Microsoft 365 migration—we can scope and price it separately.
            Many clients later move into a monthly bundle once the environment is stable.
          </div>
        </div>

        <!-- SUPPORT & RESPONSE TIMES -->
        <h2 class="faq-group-title">Support &amp; Response Times</h2>

        <div class="faq-item">
          <div class="faq-q">What are your support hours?</div>
          <div class="faq-a">
            Standard support is available during normal business hours. Urgent issues are
            handled on a best-effort same-day basis. Limited after-hours support may
            be available for critical incidents or maintenance windows and may include
            a surcharge depending on the situation.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">How do we contact you when we need help?</div>
          <div class="faq-a">
            You can open a request via email at
            <a href="mailto:support@itlegends.net">support@itlegends.net</a>,
            through our contact form, or by using any support options defined in your service
            agreement. For new clients, the fastest way to start is to book a free consultation
            so we can learn your environment and set expectations together.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Do you provide on-site support?</div>
          <div class="faq-a">
            Yes, within Illinois we can provide on-site visits when needed for certain issues
            or projects. Most day-to-day support and troubleshooting is handled remotely to
            keep your costs efficient.
          </div>
        </div>

        <!-- SECURITY & COMPLIANCE -->
        <h2 class="faq-group-title">Security &amp; Compliance</h2>

        <div class="faq-item">
          <div class="faq-q">What is your security approach?</div>
          <div class="faq-a">
            We operate with a security-first mindset. That means focusing on strong identity
            (MFA, good password hygiene), endpoint protection (AV/EDR), patching, basic backup
            and recovery planning, and reducing risky configurations. We also emphasize clear,
            simple communication so non-technical staff understand what’s changing and why.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Can you help with HIPAA or other compliance needs?</div>
          <div class="faq-a">
            We are not a law firm or compliance auditor, but we can support “HIPAA-lite”
            and general security best practices for clinics and professional services. That
            includes access control, endpoint protection, basic logging, and coordination
            with your EHR or other regulated systems. We’ll be transparent about what we
            can do directly and where additional specialized help may be needed.
          </div>
        </div>

        <!-- HARDWARE & VENDORS -->
        <h2 class="faq-group-title">Hardware, Vendors &amp; Platforms</h2>

        <div class="faq-item">
          <div class="faq-q">Do you sell hardware, or help us choose what to buy?</div>
          <div class="faq-a">
            We can recommend and help source HP business-class desktops, laptops, and
            selected HPE servers or small-business infrastructure through trusted
            distribution partners. If you prefer to purchase directly, we can still advise
            on models, specifications, and warranty options, then handle setup and ongoing
            management under your service bundle.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Which platforms do you prefer to build on?</div>
          <div class="faq-a">
            We lean on HP / HPE for hardware and Microsoft 365 and related security tools
            provisioned via Pax8 for cloud services. This keeps your environment supportable,
            standardized, and easy to grow while avoiding a random mix of tools.
          </div>
        </div>

        <!-- GET STARTED -->
        <div class="faq-cta">
          <h2>Still have questions?</h2>
          <p>
            Book a free consultation and we’ll walk through your environment, answer your
            questions, and recommend a right-sized plan.
          </p>
          <a class='btn btn-primary' href="/consultation-form">Book a Free Consultation</a>
        </div>

      </div>
    </section>
  </main>` }} />
    </>
  );
}
