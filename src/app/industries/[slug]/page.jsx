import { notFound } from 'next/navigation';
import industriesData from '@/data/industries.json';

export async function generateStaticParams() {
  return Object.keys(industriesData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return {};

  return {
    title: industry.title,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) {
    notFound();
  }

  return (
    <>
      {industry.styles?.map((style, idx) => (
        <style key={idx} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      
      {industry.jsonLds?.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div dangerouslySetInnerHTML={{ __html: industry.body }} />
    </>
  );
}
