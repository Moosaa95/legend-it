import { NextResponse } from 'next/server';

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

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Skip static assets, Next.js internals, and APIs
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    (pathname.includes('.') && !pathname.endsWith('.html')) ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  let targetPath = pathname;

  // 1. Strip .html extension if present
  if (targetPath.endsWith('.html')) {
    targetPath = targetPath.slice(0, -5);
  }

  // 2. Normalize underscores to hyphens for specific routes
  if (targetPath.toLowerCase().includes('consultation_form')) {
    targetPath = '/consultation-form';
  } else if (targetPath.toLowerCase().includes('service_bundles')) {
    targetPath = '/service-bundles';
  }

  targetPath = targetPath.toLowerCase();

  // 3. Map legacy flat paths to new dynamic nested paths
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

  // If path was modified, issue a permanent 301 redirect
  if (targetPath !== pathname) {
    const url = request.nextUrl.clone();
    url.pathname = targetPath;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except API, _next/static, _next/image, and specific static files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|pdf|xml|txt)).*)',
  ],
};
