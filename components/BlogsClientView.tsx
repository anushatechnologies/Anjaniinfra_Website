'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, ChevronRight, ChevronDown, Calendar, User, Clock, ArrowRight, Sparkles, Tag, X } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';
import { ALL_BLOGS, BLOG_CATEGORIES, BlogArticle, getPopularBlogs } from '@/data/blogs';

interface BlogsClientViewProps {
  initialBlogs?: BlogArticle[];
}

function BlogsContent({ initialBlogs }: BlogsClientViewProps) {
  const blogs = initialBlogs && initialBlogs.length > 0 ? initialBlogs : ALL_BLOGS;

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialSearch = searchParams.get('search');

  const [searchQuery, setSearchQuery] = useState(initialSearch || '');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialCategory, initialSearch]);

  const featuredPosts = blogs.filter((p) => p.featured).slice(0, 3);
  const popularCandidates = blogs.filter((p) => p.featured);
  const popularPosts = popularCandidates.length >= 3 ? popularCandidates.slice(0, 3) : blogs.slice(0, 3);

  // Dynamically collect all available categories
  const dynamicCategories = React.useMemo(() => {
    const cats = new Set(BLOG_CATEGORIES);
    blogs.forEach((b) => {
      if (b.category && b.category.trim()) {
        cats.add(b.category.trim());
      }
    });
    return Array.from(cats);
  }, [blogs]);

  const filteredAll = blogs.filter((p) => {
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || p.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const displayedPosts = filteredAll.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAll.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-20 sm:pt-24">
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* ──────────────── 1. Hero Banner Matching Screenshot 1 ──────────────── */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-gray-900 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
        </div>

        <div className="relative max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pb-10 sm:pb-14 z-10">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
              <span className="border-b-4 border-[#c9a96e] inline-block pb-1">Amazing Experiences by Anjani Infra</span>
              <br />
              <span className="font-light text-gray-100 mt-2 inline-block">
                Creating Beautiful Interiors
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. Main Content & Sidebar Matching Screenshots ──────────────── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        
        {/* Main Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#fafaf8] font-sans tracking-tight">
            Everything About Home Interiors in India and More
          </h2>
          {(selectedCategory || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#161616] hover:bg-gray-200 text-[#d6d3cd] text-xs font-semibold rounded-full w-fit cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ──────────────── Left Column (Articles) ──────────────── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Top 3 Featured Posts Row */}
            {!selectedCategory && !searchQuery && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredPosts.map((post) => (
                  <div
                    key={post.id}
                    className="relative rounded-lg overflow-hidden h-64 sm:h-72 bg-gray-900 group shadow-md"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <Link href={`/blogs/${post.slug}`}>
                        <h3 className="text-sm font-bold leading-snug line-clamp-2 hover:text-[#c9a96e] transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-[#c9a96e] font-semibold">{post.date}</span>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="text-[11px] font-bold text-white hover:text-[#c9a96e] transition-colors"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Active Category Filter Tag if selected */}
            {selectedCategory && (
              <div className="flex items-center justify-between p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs">
                <span>Showing articles in category: <strong className="text-black">{selectedCategory}</strong></span>
                <button
                  type="button"
                  onClick={() => setSelectedCategory(null)}
                  className="font-bold text-[#2B5573] hover:underline cursor-pointer"
                >
                  Clear Filter ✕
                </button>
              </div>
            )}

            {/* 2-Column Article Grid Matching Screenshot 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {displayedPosts.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#0a0a0a] flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Thumbnail Image */}
                    <Link
                      href={`/blogs/${article.slug}`}
                      className="block relative rounded-lg overflow-hidden h-56 sm:h-60 bg-[#161616]"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    {/* Title */}
                    <Link href={`/blogs/${article.slug}`}>
                      <h3 className="text-base sm:text-lg font-bold text-[#fafaf8] group-hover:text-[#2B5573] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    {/* Date */}
                    <div className="text-xs text-gray-500 font-medium">
                      {article.date}
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-[13px] text-[#a8a5a0] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Button Linking Directly to Detail Page */}
                  <div className="pt-2">
                    <Link
                      href={`/blogs/${article.slug}`}
                      className="inline-block px-5 py-2 bg-gradient-to-r from-[#c9a96e] to-[#dfc698] hover:from-[#b59049] hover:to-[#cfab63] text-black text-xs font-black rounded transition-all shadow-sm cursor-pointer hover:shadow"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* ──────────────── Load More Button Matching Screenshot 3 ──────────────── */}
            {hasMore ? (
              <div className="text-center pt-8">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-amber-50/80 hover:bg-amber-100 text-black font-bold text-xs uppercase tracking-wider rounded-lg border border-[#c9a96e]/40 transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Load More</span>
                  <ChevronDown className="w-4 h-4 text-[#c9a96e]" />
                </button>
              </div>
            ) : (
              <div className="text-center pt-6 text-xs text-gray-400 font-medium">
                ✦ All {filteredAll.length} articles loaded
              </div>
            )}

            {filteredAll.length === 0 && (
              <div className="text-center py-12 text-gray-500 text-sm space-y-3">
                <p>No articles found matching your query.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                  className="px-4 py-2 bg-[#161616] border border-[#c9a96e]/40 text-[#c9a96e] text-xs font-bold rounded"
                >
                  View All Articles
                </button>
              </div>
            )}

          </div>

          {/* ──────────────── Right Column (Sidebar) Matching Screenshots ──────────────── */}
          <aside className="lg:col-span-4 space-y-10">
            
            {/* 1. Search Box Matching Screenshot 2 & 3 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#fafaf8] tracking-tight">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#c9a96e] text-[#e8e4de] placeholder-gray-400 bg-[#0a0a0a]"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 2. Categories List Matching Screenshot 2, 3, 4 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-[#fafaf8] tracking-tight">Categories</h3>
              <ul className="divide-y divide-gray-100 text-xs text-[#d6d3cd]">
                {dynamicCategories.map((cat) => {
                  const isSelected = selectedCategory?.toLowerCase() === cat.toLowerCase();
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(isSelected ? null : cat)}
                        className={`w-full text-left py-2.5 hover:text-[#2B5573] transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected ? 'text-black font-bold' : ''
                        }`}
                      >
                        <span>{cat}</span>
                        <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-[#c9a96e]' : 'text-gray-300'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 3. Free Estimate Button Matching Screenshot 2 */}
            <div>
              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="w-full py-3.5 px-6 bg-[#773b6f] hover:bg-[#642d5d] text-white font-bold text-sm uppercase tracking-wider rounded-lg shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group hover:shadow-lg"
              >
                <span>Free Estimate</span>
                <Sparkles className="w-4 h-4 text-[#dfc698] group-hover:rotate-12 transition-transform" />
              </button>
            </div>

            {/* 4. Most Popular Post Widget Matching Screenshot 1 & 5 */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-bold text-[#fafaf8] tracking-tight">Most Popular Post</h3>
              
              {popularPosts.map((pop) => (
                <div key={pop.id} className="bg-[#0a0a0a] border border-white/10 rounded-lg p-4 shadow-sm space-y-3">
                  <Link href={`/blogs/${pop.slug}`} className="block rounded overflow-hidden h-36 bg-[#161616] group">
                    <img
                      src={pop.image}
                      alt={pop.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="space-y-1">
                    <Link
                      href={`/blogs/${pop.slug}`}
                      className="text-xs font-bold text-[#fafaf8] leading-snug hover:text-[#2B5573] transition-colors block line-clamp-2"
                    >
                      {pop.title}
                    </Link>
                    <div className="text-[11px] text-gray-500">{pop.date}</div>
                  </div>

                  <Link
                    href={`/blogs/${pop.slug}`}
                    className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#c9a96e] to-[#dfc698] hover:from-[#b59049] hover:to-[#cfab63] text-black text-[11px] font-black rounded transition-all shadow-sm"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>

            {/* 5. Special Offer Banner */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-lg font-bold text-[#fafaf8] tracking-tight">Offer</h3>
              
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-44 bg-[#161616]">
                  <img
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
                    alt="Everything Essential Offer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white space-y-0.5">
                      <div className="text-xs uppercase tracking-widest font-medium">EVERYTHING</div>
                      <div className="text-2xl font-black tracking-tight">ESSENTIAL</div>
                    </div>
                  </div>
                </div>

                <div className="p-5 text-center space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-500 font-bold uppercase">
                      OFFER <span className="line-through text-red-500 font-normal">₹8.85 Lac</span> <span className="text-xl font-black text-[#c9a96e]">₹6.37</span> <span className="text-xs font-semibold text-[#d6d3cd]">Lac*</span>
                    </div>
                    <div className="text-[11px] text-[#a8a5a0] font-semibold tracking-wider uppercase">
                      ESSENTIAL WOODWORK FOR A 2BHK
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEstimateOpen(true)}
                    className="w-full py-2.5 bg-gradient-to-r from-[#c9a96e] to-[#dfc698] hover:from-[#b59049] hover:to-[#cfab63] text-black text-xs font-black uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    Discuss Your Home Interiors
                  </button>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </section>
    </main>
  );
}

export function BlogsClientView({ initialBlogs }: BlogsClientViewProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading articles...</div>}>
      <BlogsContent initialBlogs={initialBlogs} />
    </Suspense>
  );
}
