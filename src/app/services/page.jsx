import MicrosoftPartnerBanner from '@/components/MicrosoftPartnerBanner';
import servicesData from '@/data/services.json';

export const metadata = {
  title: "Managed IT & Business IT Support Services | IT Legends LLC",
  description: "Get outsourced IT support, business IT support services & IT infrastructure support in Illinois. IT Legends LLC — Microsoft & HPE Partner. Free assessment.",
};

function formatServiceName(slug) {
  if (slug === 'backup-disaster-recovery') return 'Backup & Disaster Recovery';
  if (slug === 'it-strategy-advisory') return 'IT Strategy & Advisory';
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Page() {
  const subServices = Object.entries(servicesData).map(([slug, data]) => {
    const displayTitle = data.title ? data.title.split(' | ')[0] : formatServiceName(slug);
    return {
      slug,
      title: displayTitle,
      description: data.description || 'Specialized IT infrastructure support services.'
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
          }
        }) }}
      />

      <main id="main-content">
        {/* HERO */}
        <section className="hero hero-small">
          <div className="container">
            <h1>Full IT Services for Real-World Teams</h1>
            <p>
              IT LEGENDS LLC delivers a security-first managed services stack for solo professionals
              and small & medium businesses across Illinois — built to keep you stable today and ready
              for what’s next.
            </p>
          </div>
        </section>

        {/* MANAGED IT SERVICES */}
        <section className="section">
          <div className="container">
            <h2>Managed IT Services</h2>
            <p className="section-intro">
              We proactively manage your desktops, laptops, and core servers so your team can focus on
              client work, not IT headaches. Monitoring, patching, and support are baked in — not bolted on.
            </p>

            <div className="grid grid-3">
              <div className="card">
                <h3>Managed Endpoints</h3>
                <ul>
                  <li>Windows & macOS workstation management</li>
                  <li>Standard builds based on role & department</li>
                  <li>Health monitoring, patching & updates</li>
                  <li>Remote troubleshooting & remediation</li>
                </ul>
              </div>
              <div className="card">
                <h3>Managed Servers</h3>
                <ul>
                  <li>Core server uptime & performance checks</li>
                  <li>Patch management & security updates</li>
                  <li>Storage & capacity guidance</li>
                  <li>Backup checks and alerting</li>
                </ul>
              </div>
              <div className="card">
                <h3>Remote & On-Site Support</h3>
                <ul>
                  <li>Remote helpdesk for everyday issues</li>
                  <li>On-site visits within Illinois (travel fee may apply)</li>
                  <li>Ticket-based tracking & escalation</li>
                  <li>Vendor coordination when systems overlap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MICROSOFT 365 & EMAIL */}
        <section className="section section-alt">
          <div className="container">
            <h2>Microsoft 365 & Email Management</h2>
            <p className="section-intro">
              Your email and collaboration tools should “just work.” We design and manage your Microsoft 365
              tenant, so security and reliability stay front and center without slowing your team down.
            </p>

            <div className="grid grid-3">
              <div className="card">
                <h3>Tenant & User Lifecycle</h3>
                <ul>
                  <li>Microsoft 365 tenant setup & configuration</li>
                  <li>New user onboarding & secure offboarding</li>
                  <li>License assignment & right-sizing over time</li>
                </ul>
              </div>
              <div className="card">
                <h3>Email & Collaboration</h3>
                <ul>
                  <li>Exchange Online management</li>
                  <li>Teams & basic SharePoint configuration</li>
                  <li>Shared mailboxes, aliases & group calendars</li>
                </ul>
              </div>
              <div className="card">
                <h3>Security Policies</h3>
                <ul>
                  <li>MFA enforcement & conditional access basics</li>
                  <li>Password & sign-in policy guidance</li>
                  <li>Baseline security configuration tuned for SMBs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY, BACKUP & NETWORK */}
        <section className="section">
          <div className="container">
            <h2>Security, Backup & Network</h2>
            <p className="section-intro">
              We apply practical, security-minded controls to protect your data, devices, and network —
              without over-engineering or drowning you in acronyms.
            </p>

            <div className="grid grid-3">
              <div className="card">
                <h3>Endpoint Security</h3>
                <ul>
                  <li>AV/EDR deployment & monitoring</li>
                  <li>Firewall, disk encryption & device hardening</li>
                  <li>Security-focused baseline configuration</li>
                </ul>
              </div>
              <div className="card">
                <h3>Backup & Recovery</h3>
                <ul>
                  <li>Workstation & server backup strategy</li>
                  <li>Cloud backup options for Microsoft 365</li>
                  <li>Basic recovery checks and runbooks</li>
                </ul>
              </div>
              <div className="card">
                <h3>Network & Wi-Fi</h3>
                <ul>
                  <li>Router & switch configuration guidance</li>
                  <li>Wi-Fi layout for offices & clinics</li>
                  <li>Guest networks & simple segmentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS & CONSULTING */}
        <section className="section section-alt">
          <div className="container">
            <h2>Projects, Hardware & Advisory</h2>
            <p className="section-intro">
              When you’re planning a move, refresh, or new system, IT LEGENDS helps you design, source,
              and implement it the right way — aligned to your budget, timeline, and risk tolerance.
            </p>

            <div className="grid grid-3">
              <div className="card">
                <h3>Hardware Refresh & Procurement</h3>
                <ul>
                  <li>HP / HPE-aligned device recommendations</li>
                  <li>Standard builds and deployment playbooks</li>
                  <li>Lifecycle planning for critical systems</li>
                </ul>
              </div>
              <div className="card">
                <h3>Office & Clinic Buildouts</h3>
                <ul>
                  <li>Network & Wi-Fi layout planning</li>
                  <li>Workstation, printer & device placement</li>
                  <li>Coordination with ISPs & key vendors</li>
                </ul>
              </div>
              <div className="card">
                <h3>Security & Compliance Guidance</h3>
                <ul>
                  <li>“HIPAA-lite” security best practices</li>
                  <li>Policy & process recommendations for staff</li>
                  <li>Quarterly IT & security health reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EXPANDED DYNAMIC SERVICES */}
        <section className="section">
          <div className="container">
            <h2>Expanded Services</h2>
            <p className="section-intro">Specialized add-ons you can activate anytime—designed for security, compliance, and growth.</p>

            <div className="grid grid-2">
              {subServices.map((service) => (
                <div key={service.slug} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  <div>
                    <h3>{service.title}</h3>
                    <p className="muted">{service.description}</p>
                  </div>
                  <a className="btn btn-outline" href={`/services/${service.slug}`} style={{ marginTop: '1rem', width: 'fit-content' }}>
                    View {service.title}
                  </a>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="/consultation-form">Book a Consultation</a>
              <a className="btn btn-outline" href="/industries">See Industry Solutions</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section kw-faq-section" aria-label="Common questions">
          <div className="container">
            <h2 className="kw-faq-heading">Frequently Asked Questions About IT Support Services</h2>
            <div className="kw-faq-grid">
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">What business IT support services does IT Legends LLC provide?</h3>
                <p className="kw-faq-a">IT Legends LLC provides a full range of business IT support services including outsourced IT support, IT infrastructure support services, managed server support, and business technology support.</p>
              </div>
              <div className="kw-faq-item">
                <h3 className="kw-faq-q">What is outsourced IT support and how does it work?</h3>
                <p className="kw-faq-a">Outsourced IT support means partnering with IT Legends LLC as your dedicated IT department — without the overhead of hiring in-house.</p>
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
      <MicrosoftPartnerBanner />
    </>
  );
}
