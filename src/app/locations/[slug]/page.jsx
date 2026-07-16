import { notFound } from 'next/navigation';
import locationsData from '@/data/locations.json';

export async function generateStaticParams() {
  return Object.keys(locationsData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationsData[slug];
  if (!location) return {};

  return {
    title: location.title,
    description: location.description,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locationsData[slug];
  if (!location) {
    notFound();
  }

  return (
    <>
      {location.styles?.map((style, idx) => (
        <style key={idx} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      
      {location.jsonLds?.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div dangerouslySetInnerHTML={{ __html: location.body }} />
    </>
  );
}
