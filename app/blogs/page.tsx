import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { BlogsClientView } from '@/components/BlogsClientView';
import { supabase } from '@/lib/supabaseClient';
import { ALL_BLOGS, BlogArticle } from '@/data/blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Home Interior Design Guides & Inspiration Blog | Anjani Infra',
  description:
    'Expert tips, modular kitchen ideas, space-saving bedroom layouts, and interior design pricing guides tailored for Hyderabad apartments and villas.',
  keywords: [
    'Interior Design Blog Hyderabad',
    'Modular Kitchen Design Ideas',
    'Wardrobe Design Guides',
    'Anjani Infra Articles',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/blogs',
  },
};

async function getLiveBlogs(): Promise<BlogArticle[]> {
  try {
    const { data: dbBlogs, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && Array.isArray(dbBlogs) && dbBlogs.length > 0) {
      return dbBlogs.map((b: any) => ({
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
      }));
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching blogs:', err);
  }

  return ALL_BLOGS;
}

export default async function BlogsPage() {
  const blogs = await getLiveBlogs();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-gray-400">
          Loading articles...
        </div>
      }
    >
      <BlogsClientView initialBlogs={blogs} />
    </Suspense>
  );
}

