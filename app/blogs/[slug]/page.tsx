import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ALL_BLOGS, getBlogBySlug, BlogArticle } from '@/data/blogs';
import { BlogDetailView } from '@/components/BlogDetailView';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: {
    slug: string;
  };
}

async function fetchBlogArticle(slug: string): Promise<BlogArticle | null> {
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim();

  try {
    const { data: b, error } = await supabase
      .from('blogs')
      .select('*')
      .ilike('slug', normalizedSlug)
      .maybeSingle();

    if (!error && b) {
      return {
        id: b.id,
        slug: b.slug,
        title: b.title,
        date: b.date || b.created_at,
        formattedDate: b.formatted_date || b.date,
        excerpt: b.excerpt || '',
        category: b.category || 'Apartment Interior Works',
        image: b.image_url || b.image || 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
        readTime: b.read_time || '5 min read',
        author: {
          name: b.author_name || (typeof b.author === 'object' ? b.author?.name : b.author) || 'Anjani Infra Editorial Team',
          role: b.author_role || (typeof b.author === 'object' ? b.author?.role : '') || 'Lead Interior Architect',
          avatar: b.author_avatar || (typeof b.author === 'object' ? b.author?.avatar : '') || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
        },
        introParagraphs: Array.isArray(b.intro_paragraphs) ? b.intro_paragraphs : (b.introParagraphs || (b.excerpt ? [b.excerpt] : [])),
        sections: Array.isArray(b.sections) ? b.sections : [],
        conclusion: b.conclusion || '',
        featured: !!b.featured,
      };
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching blog article by slug:', err);
  }

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

