import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { BlogsClientView } from '@/components/BlogsClientView';
import { ALL_BLOGS } from '@/data/blogs';

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

export default function BlogsPage() {
  const blogs = ALL_BLOGS;

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

