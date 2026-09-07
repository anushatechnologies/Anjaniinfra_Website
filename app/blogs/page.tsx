'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, ChevronDown, Calendar, User, Clock, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
  featured?: boolean;
}

const ALL_BLOGS: BlogArticle[] = [
  // Page 1 initial posts
  {
    id: 'post-1',
    slug: 'sliding-wardrobe-vs-hinged-wardrobe',
    title: 'Sliding Wardrobe vs Hinged Wardrobe: Which One Is Right for Your Home?',
    date: 'Aug 25 2026',
    excerpt: 'When it comes to bedroom wardrobes, we often wonder whether to get a sliding wardrobe or a hinged wardrobe. Both have their advantages, but your room dimensions and storage requirements make all the difference.',
    category: 'Apartment Interior Works',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'purva-atmosphere-bangalore-interior',
    title: 'Purva Atmosphere Bangalore Interior Design: A Home Designed for Modern Living',
    date: 'Aug 08 2026',
    excerpt: 'This beautifully designed home at Purva Atmosphere reflects exactly what the homeowners envisioned—a harmonious blend of comfort, contemporary elegance, and clever space utilization.',
    category: 'Bangalore Interior Designers',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'first-time-homeowner-checklist',
    title: 'First-Time Homeowner Checklist for Indians',
    date: 'Jul 25 2026',
    excerpt: 'Buying your first home is an exciting milestone, but the journey doesn’t end once you receive possession. Planning woodwork, false ceilings, and storage requires a structured approach.',
    category: 'Home Interiors',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'post-4',
    slug: 'cyber-gardens-luxury-apartment',
    title: 'Cyber Gardens Luxury 3BHK Apartment Interior',
    date: 'Jul 23 2026',
    excerpt: 'Project at a Glance: Location: Condor Cyber Gardens, Type: 3BHK Apartment. Highlights include open concept kitchen breakfast counter, fluted louvers, and warm cove lighting.',
    category: 'Contemporary Home Interiors',
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-5',
    slug: 'interior-design-timeline',
    title: 'Interior Design Timeline: How Long Does a Home Interior Take?',
    date: 'Jul 08 2026',
    excerpt: 'Planning a new home interior requires knowing timelines. From initial 3D design to factory production and on-site assembly, here is what to expect so you can plan your move-in date.',
    category: 'Apartment Interior Works',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-6',
    slug: 'designing-dream-home-mangalore',
    title: 'Designing a Dream Home in Mangalore...',
    date: 'Jun 25 2026',
    excerpt: 'Mr Shirdhar and Mrs Anupama wanted to create a space that is resistant to coastal humidity while exuding warm Scandinavian minimalism with boiling waterproof marine ply.',
    category: 'Home Interiors',
    image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-7',
    slug: 'inside-antony-dhas-residence',
    title: 'Inside Antony Dhas and Harshia’s...',
    date: 'Jun 10 2026',
    excerpt: 'This residence of Tamil Nadu cricket player Antony Dhas and Harshia was envisioned to have a modern luxury aesthetic with customized false ceilings and profile handle wardrobes.',
    category: 'Celebrity Home Interiors',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-8',
    slug: 'elegant-modern-home-interiors-hyderabad',
    title: 'Elegant Modern Home Interiors in...',
    date: 'May 26 2026',
    excerpt: 'The homeowners, Riyas Backer & Siya Backer, asked D’LIFE interior designers to design a space with sleek profile handles, acrylic modular kitchen, and marble TV accents.',
    category: 'Interior Designers Hyderabad',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-9',
    slug: 'premium-home-interior-mohtisham',
    title: 'A Premium Home Interior at Mohtisham...',
    date: 'May 12 2026',
    excerpt: 'Zeba and her husband Jalal, were residing in Saudi Arabia and moved in a year ago. They have chosen 100% customized modular solutions for their home.',
    category: 'Apartment Interior Works',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-10',
    slug: 'perfectly-crafted-home-thiruvalla',
    title: 'A Perfectly Crafted Home in Thiruvalla...',
    date: 'Apr 29 2026',
    excerpt: 'The family was on the lookout for professional interior designers in Thiruvalla. They chose D’LIFE for our 10-year warranty, in-house factories, and transparent pricing.',
    category: 'Interior Design in Kerala',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-11',
    slug: 'simplified-payment-process',
    title: 'Simplified Payment Process for Home...',
    date: 'Apr 13 2026',
    excerpt: 'Designing your dream home should be an exciting journey. However, for many homeowners, it comes with financial anxiety. Learn how milestone-linked payments ensure total transparency.',
    category: 'Home Interiors',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-12',
    slug: 'dlife-interiors-lifestyle-experience',
    title: 'How D’LIFE Interiors Turned Interior...',
    date: 'Mar 27 2026',
    excerpt: 'Turning a design dream into reality. The concept of interior design has experienced a remarkable evolution over the last two decades with integrated modular furniture.',
    category: 'Contemporary Home Interiors',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  },

  // Posts visible after scrolling or clicking Load More (Screenshots 1, 2, 3)
  {
    id: 'post-13',
    slug: 'century-ethos-apartment-interior',
    title: 'Century Ethos Apartment Interior Design...',
    date: 'Feb 06 2026',
    excerpt: 'Who lives here: Yogish and Mamatha Location: Bengaluru Apartment: Century Ethos Yogish and Mamatha chose customized modular woodwork with clean contemporary profiles.',
    category: 'Apartment Interior Works',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-14',
    slug: 'why-dlife-interiors-is-indias-most-trusted',
    title: 'Why D’LIFE Interiors Is India’s...',
    date: 'Jan 29 2026',
    excerpt: 'In a country like India, building trust among homeowners is no small achievement. Creating a home with direct factory manufacturing and 40-day delivery creates genuine customer peace of mind.',
    category: 'Home interior review',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-15',
    slug: 'science-behind-long-lasting-interiors',
    title: 'The Science Behind Long-Lasting...',
    date: 'Jan 22 2026',
    excerpt: 'Living in a durable home is a wish list for many and is something many homeowners ask for when they begin planning. Calibrated boiling waterproof marine ply and laser edge-banding make all the difference.',
    category: 'Furniture Maintenance',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-16',
    slug: 'working-at-dlife-interiors-culture',
    title: 'Working at D’LIFE Interiors: Our...',
    date: 'Dec 16 2025',
    excerpt: 'Behind every beautiful and elegantly crafted home interior, there is a team of passionate people—architects, factory technicians, quality auditors, and installation managers.',
    category: 'Contemporary Home Interiors',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-17',
    slug: 'from-design-to-delivery-process',
    title: 'From Design to Delivery: How D’LIFE...',
    date: 'Dec 04 2025',
    excerpt: 'Building a home is a once-in-a-lifetime journey for most of us. It is where memories, comfort, and aspirations unite. Learn our rigorous step-by-step handover workflow.',
    category: 'Home Interiors',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-18',
    slug: 'rise-of-minimalist-interior-aesthetic',
    title: 'The Rise of Minimalist Interior: A...',
    date: 'Nov 26 2025',
    excerpt: 'Simplicity in interior design has grown stronger as people seek to escape from the chaos of daily life. Clean lines, hidden handles, and concealed storage create uncluttered tranquility.',
    category: 'Interior Design Ideas',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-19',
    slug: 'designing-a-home-that-reflects-you',
    title: 'Designing a Home That Reflects Who You...',
    date: 'Nov 21 2025',
    excerpt: 'Designing a home that reflects who you are is far beyond selecting paint colours. A home that is tailored to your family habits, daily routines, and entertaining lifestyle.',
    category: 'Home Interiors',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-20',
    slug: 'how-dlife-homes-stand-test-of-time',
    title: 'How D’LIFE Homes Stand the Test of...',
    date: 'Nov 11 2025',
    excerpt: 'Every home tells a story right from the day it’s been built through the years that follow. At D’LIFE, our 10-year warranty reflects our confidence in German automated manufacturing.',
    category: 'Furniture Maintenance',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-21',
    slug: 'where-to-find-best-home-interiors',
    title: 'Where to Find the Best Home Interiors...',
    date: 'Oct 30 2025',
    excerpt: 'When it comes to creating your dream home, every detail matters. If you are on the lookout for a reliable professional team with experience centres and factory tours, here is what to look for.',
    category: 'Interior Designers Hyderabad',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'post-22',
    slug: 'evolution-of-indian-kitchens',
    title: 'The Evolution of Indian Kitchens: The...',
    date: 'Oct 24 2025',
    excerpt: 'The kitchen has always been more than just a space for cooking in Indian homes. It is a place where traditions meet modern ergonomic pull-out tandem boxes and boiling water-resistant materials.',
    category: 'Modern Kitchens',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
  },
];

const CATEGORIES = [
  'Apartment Interior Works',
  'Bangalore Interior Designers',
  'Celebrity Home Interiors',
  'Cochin Interior Designers',
  'Contemporary Home Interiors',
  'Customized Modular Kitchen',
  'Furniture Maintenance',
  'Home interior review',
  'Home Interiors',
  'Home Interiors in Chennai',
  'home interiors in kannur',
  'Interior Design Ideas',
  'Interior Design in Kerala',
  'Interior Designers Hyderabad',
  'Interior Designers in Mysore',
  'Kitchen Interior Design',
  'Modern Kitchens',
  'Uncategorized',
];

const RECENT_POSTS = [
  'Sliding Wardrobe vs Hinged Wardrobe: Which One Is Right for Your Home?',
  'Purva Atmosphere Bangalore Interior Design: A Home Designed for Modern Living',
  'First-Time Homeowner Checklist for Indians',
  'Bespoke Home at Condor Cyber Gardens Trivandrum',
  'Interior Design Timeline: How Long Does a Home Interior Take?',
];

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const featuredPosts = ALL_BLOGS.filter((p) => p.featured).slice(0, 3);

  const filteredAll = ALL_BLOGS.filter((p) => {
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
    <main className="min-h-screen bg-white text-gray-800">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
        </div>

        <div className="relative max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pb-10 sm:pb-14 z-10">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
              <span className="border-b-4 border-white inline-block pb-1">Amazing Experiences by DLIFE</span>
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
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-900 font-sans tracking-tight">
            Everything About Home Interiors in India and More
          </h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ──────────────── Left Column (Articles) ──────────────── */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Top 3 Featured Posts Row Matching Screenshot 2 */}
            {!selectedCategory && !searchQuery && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
                      <h3 className="text-sm font-bold leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-[#C5A059] font-semibold">{post.date}</span>
                        <button
                          type="button"
                          onClick={() => setIsEstimateOpen(true)}
                          className="text-[11px] font-bold text-white hover:text-[#C5A059] transition-colors cursor-pointer"
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Active Category Filter Tag if selected */}
            {selectedCategory && (
              <div className="flex items-center justify-between p-3 bg-amber-50/70 border border-amber-200/60 rounded-lg text-xs">
                <span>Showing articles in category: <strong className="text-[#132B3E]">{selectedCategory}</strong></span>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="font-bold text-[#2B5573] hover:underline cursor-pointer"
                >
                  Clear Filter ✕
                </button>
              </div>
            )}

            {/* 2-Column Article Grid Matching Screenshots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              {displayedPosts.map((article) => (
                <article
                  key={article.id}
                  className="bg-white flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    {/* Thumbnail Image */}
                    <div className="relative rounded-lg overflow-hidden h-56 sm:h-60 bg-gray-100">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    {/* Date */}
                    <div className="text-xs text-gray-500 font-medium">
                      {article.date}
                    </div>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="px-5 py-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs font-black rounded transition-all shadow-sm cursor-pointer"
                    >
                      Read More
                    </button>
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
                  className="px-8 py-3 bg-amber-50/80 hover:bg-amber-100 text-[#132B3E] font-bold text-xs uppercase tracking-wider rounded-lg border border-[#C5A059]/40 transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
                >
                  <span>Load More</span>
                  <ChevronDown className="w-4 h-4 text-[#C5A059]" />
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
                  className="px-4 py-2 bg-[#132B3E] text-[#C5A059] text-xs font-bold rounded"
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
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#C5A059] text-gray-800 placeholder-gray-400 bg-white"
                />
                <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* 2. Categories List Matching Screenshot 2, 3, 4 */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Categories</h3>
              <ul className="divide-y divide-gray-100 text-xs text-gray-700">
                {CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory?.toLowerCase() === cat.toLowerCase();
                  return (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(isSelected ? null : cat)}
                        className={`w-full text-left py-2.5 hover:text-[#2B5573] transition-colors flex items-center justify-between cursor-pointer ${
                          isSelected ? 'text-[#132B3E] font-bold' : ''
                        }`}
                      >
                        <span>{cat}</span>
                        <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-[#C5A059]' : 'text-gray-300'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 3. Most Popular Post Widget Matching Screenshot 1 & 5 */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Most Popular Post</h3>
              
              {/* Popular Post 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-3">
                <div className="rounded overflow-hidden h-36 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80"
                    alt="Sliding Wardrobe vs Hinged Wardrobe"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 leading-snug hover:text-[#2B5573] transition-colors">
                    Sliding Wardrobe vs Hinged Wardrobe: Which One Is Right for Your Home?
                  </h4>
                  <div className="text-[11px] text-gray-500">Aug 25 2026</div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(true)}
                  className="px-4 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-[11px] font-black rounded transition-all shadow-sm cursor-pointer"
                >
                  Read More
                </button>
              </div>

              {/* Popular Post 2 (Seen in Screenshot 1) */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-3">
                <div className="rounded overflow-hidden h-36 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                    alt="Purva Atmosphere Bangalore Interior Design"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-gray-900 leading-snug hover:text-[#2B5573] transition-colors">
                    Purva Atmosphere Bangalore Interior Design: A Home Designed for Modern Living
                  </h4>
                  <div className="text-[11px] text-gray-500">Aug 08 2026</div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsEstimateOpen(true)}
                  className="px-4 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-[11px] font-black rounded transition-all shadow-sm cursor-pointer"
                >
                  Read More
                </button>
              </div>
            </div>

            {/* 4. Recent Posts Widget Matching Screenshot 2 */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Recent Posts</h3>
              <ul className="space-y-3 text-xs">
                {RECENT_POSTS.map((title, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="text-gray-700 hover:text-[#2B5573] transition-colors font-medium leading-relaxed text-left cursor-pointer"
                    >
                      {title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Special Offer Banner Matching Screenshot 3 */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Offer</h3>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-44 bg-gray-100">
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
                      OFFER <span className="line-through text-red-500 font-normal">₹8.85 Lac</span> <span className="text-xl font-black text-[#C5A059]">₹6.37</span> <span className="text-xs font-semibold text-gray-700">Lac*</span>
                    </div>
                    <div className="text-[11px] text-gray-600 font-semibold tracking-wider uppercase">
                      ESSENTIAL WOODWORK FOR A 2BHK
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEstimateOpen(true)}
                    className="w-full py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs font-black uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
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
