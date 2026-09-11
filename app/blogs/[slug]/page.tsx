import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ALL_BLOGS, getBlogBySlug } from '@/data/blogs';
import { BlogDetailView } from '@/components/BlogDetailView';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ALL_BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getBlogBySlug(params.slug);
  if (!article) {
    return {
      title: 'Blog Article Not Found | Anjani Infra',
    };
  }

  return {
    title: `${article.title} | Anjani Infra`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const article = getBlogBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailView article={article} />;
}
