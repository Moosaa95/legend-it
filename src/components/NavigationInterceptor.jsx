'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BLOG_POSTS = new Set([
  'break-fix-vs-managed-it',
  'hipaa-vendor-checklist',
  'hybrid-cloud-edge-computing',
  'it-support-company-usa',
  'managed-it-healthcare-accounting',
  'managed-it-services-for-startups',
  'managed-it-services-what-they-are',
  'microsoft-365-security-basics',
  'outgrown-break-fix',
  'small-business-cybersecurity',
  'small-business-cybersecurity-checklist',
  'what-is-managed-it',
  'why-small-business-needs-managed-it-2026'
]);

const LOCATIONS = new Set([
  'chicago', 'evanston', 'glenview', 'gurnee', 'lake-forest', 'lake-zurich',
  'naperville', 'peoria', 'rockford', 'springfield', 'waukegan', 'beach-park'
]);

const INDUSTRIES = new Set([
  'healthcare-it', 'accounting-it', 'manufacturing-it'
]);

const SERVICES = new Set([
  'cloud-services', 'security-compliance', 'backup-disaster-recovery', 'it-strategy-advisory'
]);

export default function NavigationInterceptor() {
  const router = useRouter();

  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && anchor.href) {
        try {
          const url = new URL(anchor.href);
          
          // Only intercept local URLs
          if (url.origin === window.location.origin) {
            const pathname = url.pathname;
            
            // Check if it is a file download, static file, or opens in a new window
            const isFile = pathname.includes('.') && !pathname.endsWith('.html');
            const isNewTab = anchor.target === '_blank';
            const isDownload = anchor.hasAttribute('download');

            if (!isFile && !isNewTab && !isDownload) {
              e.preventDefault();
              
              let targetPath = pathname;
              if (targetPath.endsWith('.html')) {
                targetPath = targetPath.slice(0, -5);
              }
              if (targetPath.toLowerCase().includes('consultation_form')) {
                targetPath = '/consultation-form';
              } else if (targetPath.toLowerCase().includes('service_bundles')) {
                targetPath = '/service-bundles';
              }
              targetPath = targetPath.toLowerCase();

              // Map legacy flat slugs to nested dynamic paths
              const cleanSlug = targetPath.startsWith('/') ? targetPath.slice(1) : targetPath;

              if (cleanSlug.startsWith('blog-')) {
                const blogSlug = cleanSlug.slice(5);
                if (BLOG_POSTS.has(blogSlug)) {
                  targetPath = `/blog/${blogSlug}`;
                }
              } else if (LOCATIONS.has(cleanSlug)) {
                targetPath = `/locations/${cleanSlug}`;
              } else if (INDUSTRIES.has(cleanSlug)) {
                targetPath = `/industries/${cleanSlug}`;
              } else if (SERVICES.has(cleanSlug)) {
                targetPath = `/services/${cleanSlug}`;
              }

              router.push(targetPath + url.search + url.hash);
            }
          }
        } catch (err) {
          console.error('URL parse failed in NavigationInterceptor:', err);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [router]);

  return null;
}
