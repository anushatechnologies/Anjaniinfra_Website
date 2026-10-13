import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBlogBySlug, BlogArticle } from '@/data/blogs';
import { BlogDetailView } from '@/components/BlogDetailView';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: {
    slug: string;
  };
}

function fetchBlogArticle(slug: string): BlogArticle | null {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();
  return getBlogBySlug(normalizedSlug) || null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await fetchBlogArticle(params.slug);
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

export default async function BlogDetailPage({ params }: PageProps) {
  const article = await fetchBlogArticle(params.slug);

  if (!article) {
    notFound();
  }

  return <BlogDetailView article={article} />;
}

