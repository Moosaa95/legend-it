import { notFound } from 'next/navigation';
import blogData from '@/data/blog.json';

export async function generateStaticParams() {
  return Object.keys(blogData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogData[slug];
  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Scope styles specifically inside fragment */}
      {post.styles?.map((style, idx) => (
        <style key={idx} dangerouslySetInnerHTML={{ __html: style }} />
      ))}
      
      {post.jsonLds?.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </>
  );
}
