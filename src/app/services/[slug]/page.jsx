import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import MicrosoftPartnerBanner from '@/components/MicrosoftPartnerBanner';

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceSubPage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    notFound();
  }

  return (
    <>
      {service.styles?.map((style, idx) => (
        <style key={idx} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      
      {service.jsonLds?.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div dangerouslySetInnerHTML={{ __html: service.body }} />
      <MicrosoftPartnerBanner />
    </>
  );
}
