import './styles.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import BackToTop from '@/components/BackToTop';
import PartnerBadge from '@/components/PartnerBadge';
import NavigationInterceptor from '@/components/NavigationInterceptor';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'Managed IT Services Illinois | IT Legends LLC',
  description: 'IT Legends LLC — Managed IT, cybersecurity & Microsoft 365 for Illinois businesses. Authorized Microsoft & HPE Partner.',
  icons: {
    icon: '/itl_monogram_logo.png',
    apple: '/itl_monogram_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Fonts link */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Google Analytics Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CXMG4S5H6E"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CXMG4S5H6E');
        `}} />
      </head>
      <body>
        {/* Anti-flash inline script */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'light') {
                document.body.classList.add('light-mode');
              } else {
                document.body.classList.remove('light-mode');
              }
            } catch (e) {}
          })();
        `}} />

        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <NavigationInterceptor />
        <ScrollReveal />
        <Header />
        
        <div id="main-content">
          {children}
        </div>
        
        <Footer />
        
        <CookieConsent />
        <PartnerBadge />
        <BackToTop />
      </body>
    </html>
  );
}
