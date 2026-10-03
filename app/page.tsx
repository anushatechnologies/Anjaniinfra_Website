import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { readFile } from 'fs/promises';
import path from 'path';
import {
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Calendar,
  Layers,
  Star,
  Check,
  Maximize2
} from 'lucide-react';
import { HomeInteractiveHub } from '@/components/HomeInteractiveHub';
import { TestimonialsClientSection } from '@/components/TestimonialsClientSection';
import { DesignConsultationButton } from '@/components/DesignAndBuildButtons';
import { supabase } from '@/lib/supabaseClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Anjani Infra | Luxury Home Interior Designers in Hyderabad',
  description: "Anjani Infra is Hyderabad's premier Design & Build and home interior design enterprise providing 100% customized modular kitchens, wardrobes, and luxury living spaces with 35-40 day delivery.",
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/',
  },
};

// High-resolution luxury interior photography with crystal clarity and rich headlines
const defaultHeroSlides = [
  {
    id: 1,
    tagline: "HYDERABAD'S PREMIER INTERIOR DESIGN STUDIO",
    title: 'Crafting Bespoke Luxury Living Spaces',
    subtitle: '100% Customized modular woodwork, turnkey luxury villa & apartment interiors with a 10-year warranty.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90',
  },
  {
    id: 2,
    tagline: 'PRECISION GERMAN HARDWARE & FINISHES',
    title: 'Bespoke Master Suites & Designer Wardrobes',
    subtitle: 'Engineered walk-in wardrobes, sliding systems, and ambient lighting crafted for luxurious Hyderabad homes.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=90',
  },
  {
    id: 3,
    tagline: 'WATERPROOF & TERMITE-RESISTANT',
    title: 'Chef-Grade Ergonomic Modular Kitchens',
    subtitle: 'BWP Marine grade ply, acrylic & quartz island counters customized for modern Indian culinary living.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=90',
  },
  {
    id: 4,
    tagline: 'END-TO-END 40 WORKING DAYS HANDOVER',
    title: 'Architectural Dining & Contemporary Lounges',
    subtitle: 'Direct factory manufacturing with zero middlemen, 3D visualization, and complete transparent pricing.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90',
  },
];

// Award emblems data
const awardsData = [
  {
    title: 'Best Realty Brands',
    org: 'The Economic Times',
    badgeClass: 'bg-red-700 text-white',
    symbol: 'Bb',
  },
  {
    title: 'Most Preferred Brand',
    org: 'Interior Design',
    badgeClass: 'bg-amber-600 text-white',
    symbol: '★',
  },
  {
    title: 'Asia Pacific Property Awards',
    org: 'Winner 2024',
    badgeClass: 'bg-zinc-900 text-amber-400 border border-amber-400/40',
    symbol: '⚜',
  },
  {
    title: 'Most Preferred Workplace',
    org: 'Top Employer',
    badgeClass: 'bg-slate-700 text-white',
    symbol: '🛡',
  },
  {
    title: 'Best Brands 2024',
    org: 'Economic Times',
    badgeClass: 'bg-amber-700 text-white',
    symbol: 'Bb',
  },
  {
    title: 'Business Awards',
    org: 'National Winner',
    badgeClass: 'bg-blue-900 text-amber-300 border border-amber-300/30',
    symbol: '🏆',
  },
  {
    title: 'Design Excellence',
    org: 'Arch & Interior',
    badgeClass: 'bg-indigo-950 text-white border border-indigo-500/30',
    symbol: '◈',
  },
  {
    title: 'Pride of India Awards',
    org: 'Leadership 2024',
    badgeClass: 'bg-yellow-700 text-amber-100',
    symbol: '♔',
  },
  {
    title: 'International Property',
    org: 'Global Award',
    badgeClass: 'bg-black text-amber-400 border border-amber-400/50',
    symbol: '★',
  },
];

const testimonialPages = [
  // Page 1
  [
    {
      name: 'Mrs. Ananya Reddy',
      location: 'Banjara Hills, Hyderabad',
      text: 'Finding a passionate team to craft my dream home in Hyderabad was crucial. Anjani Infra exceeded every expectation.',
      image: '/testimonial-client-3.jpg',
    },
    {
      name: 'Mr. & Mrs. Prannoy HS',
      location: 'Gachibowli, Hyderabad',
      text: 'Structured, organized and pleasant to deal with. Delivered our flat interiors exactly as promised on schedule.',
      image: '/testimonial-family-2.jpg',
    },
    {
      name: 'Mr. Surendra N M & Family',
      location: 'Jubilee Hills, Hyderabad',
      text: 'We are extremely satisfied with the modular kitchen, factory finishes and on-time handover for our home.',
      image: '/testimonial-family-1.jpg',
    },
    {
      name: 'Mr. Kiran Nair & Family',
      location: 'Kompally, Hyderabad',
      text: 'Proper communication was maintained throughout execution. Our whole family loves our newly designed residence.',
      image: '/testimonial-family-4.jpg',
    },
    {
      name: 'Mr. Azeem C & Family',
      location: 'Kokapet, Hyderabad',
      text: 'Very professional interior designers. The team was responsive, transparent, and finished our project on time.',
      image: '/testimonial-client-5.jpg',
    },
  ],
  // Page 2
  [
    {
      name: 'Mr. Rajesh Varma & Family',
      location: 'Financial District, Hyderabad',
      text: 'The 3D space planning and Italian modular finishes in our villa are simply world-class. Highly recommended!',
      image: '/testimonial-family-5.jpg',
    },
    {
      name: 'Mr. & Mrs. Karthik Rao',
      location: 'Tellapur, Hyderabad',
      text: 'Our modular kitchen with German fittings is a dream come true. Handover was prompt within 40 working days.',
      image: '/testimonial-family-6.jpg',
    },
    {
      name: 'Mr. Venkatramana & Family',
      location: 'Madhapur, Hyderabad',
      text: 'From design drawings to final execution, the team took care of every small detail. Our parents are so delighted.',
      image: '/testimonial-family-7.jpg',
    },
    {
      name: 'Dr. Sravanthi Ch',
      location: 'Hitec City, Hyderabad',
      text: 'Impeccable aesthetics and durable materials. They transformed our 3 BHK apartment into a serene, elegant haven.',
      image: '/testimonial-client-8.jpg',
    },
    {
      name: 'Mr. Vikramaditya Somani',
      location: 'Manikonda, Hyderabad',
      text: 'Honest pricing, top-tier craftsmanship and zero hassle. Anjani Infra is hands down the best interior team in Hyderabad.',
      image: '/testimonial-client-9.jpg',
    },
  ],
];

async function getActiveSlides() {
  const today = new Date().toISOString().split('T')[0];

  // 1. Fetch live banners directly from Supabase DB
  try {
    const { data: dbBanners, error } = await supabase
      .from('banners')
      .select('*')
      .order('display_order', { ascending: true });

    if (!error && Array.isArray(dbBanners) && dbBanners.length > 0) {
      const active = dbBanners.filter((b: any) =>
        b.is_active !== false &&
        (!b.start_date || b.start_date <= today) &&
        (!b.end_date || b.end_date >= today)
      );

      if (active.length > 0) {
        return active.map((b: any, i: number) => ({
          id: b.id || i + 1,
          tagline: b.tag || b.tagline || "HYDERABAD'S PREMIER INTERIOR DESIGN STUDIO",
          title: b.title,
          subtitle: b.subtitle || '',
          image: b.image_url || b.image,
          link: b.link_url || b.link || '/customized-interiors',
          buttonText: b.button_text || b.buttonText || 'Explore More'
        }));
      }
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching banners:', err);
  }

  // 2. Fallback to local data/banners.json
  try {
    const bannersPath = path.join(process.cwd(), 'data', 'banners.json');
    const content = await readFile(bannersPath, 'utf8');
    const banners = JSON.parse(content);
    const active = banners.filter((b: any) =>
      (b.isActive ?? b.is_active) !== false &&
      (!b.startDate || b.startDate <= today) &&
      (!b.endDate || b.endDate >= today)
    );
    if (active.length > 0) {
      return active.map((b: any, i: number) => ({
        id: b.id || i + 1,
        tagline: b.tagline || b.tag || "HYDERABAD'S PREMIER INTERIOR DESIGN STUDIO",
        title: b.title,
        subtitle: b.subtitle || '',
        image: b.image || b.image_url,
        link: b.link || b.link_url || '/customized-interiors',
        buttonText: b.buttonText || b.button_text || 'Explore More'
      }));
    }
  } catch {}

  return defaultHeroSlides;
}

async function getLatestBlogs() {
  // 1. Fetch live blogs directly from Supabase DB
  try {
    const { data: dbBlogs, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);

    if (!error && Array.isArray(dbBlogs) && dbBlogs.length > 0) {
      return dbBlogs.map((b: any) => ({
        id: b.id,
        slug: b.slug,
        title: b.title,
        date: b.date || b.created_at,
        formattedDate: b.formatted_date || b.date,
        excerpt: b.excerpt,
        category: b.category,
        image: b.image_url || b.image,
        readTime: b.read_time || '5 min read',
        author: b.author_name || (typeof b.author === 'object' ? b.author?.name : b.author) || 'Anjani Design Team',
      }));
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching blogs:', err);
  }

  // 2. Fallback to local data/blogs.json
  try {
    const blogsPath = path.join(process.cwd(), 'data', 'blogs.json');
    const content = await readFile(blogsPath, 'utf8');
    const blogs = JSON.parse(content);
    if (Array.isArray(blogs) && blogs.length > 0) {
      return blogs.slice(0, 3);
    }
  } catch {}
  return [];
}

async function getDynamicTestimonialPages() {
  // 1. Fetch live testimonials directly from Supabase DB
  try {
    const { data: dbTestimonials, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (!error && Array.isArray(dbTestimonials) && dbTestimonials.length > 0) {
      const active = dbTestimonials.map((t: any) => ({
        name: t.name,
        location: t.location || 'Hyderabad',
        text: t.text,
        image: t.image_url || t.image || '/testimonial-client-3.jpg',
        rating: t.rating || 5,
      }));

      const pages: any[][] = [];
      for (let i = 0; i < active.length; i += 5) {
        pages.push(active.slice(i, i + 5));
      }
      return pages;
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching testimonials:', err);
  }

  // 2. Fallback to local data/testimonials.json
  try {
    const testimonialsPath = path.join(process.cwd(), 'data', 'testimonials.json');
    const content = await readFile(testimonialsPath, 'utf8');
    const testimonials = JSON.parse(content);
    const active = testimonials
      .filter((t: any) => t.isActive !== false)
      .sort((a: any, b: any) => (a.displayOrder || 1) - (b.displayOrder || 1));

    if (active.length > 0) {
      const pages: any[][] = [];
      for (let i = 0; i < active.length; i += 5) {
        pages.push(active.slice(i, i + 5));
      }
      return pages;
    }
  } catch {}
  return testimonialPages;
}

async function getVideoShowcaseData() {
  // 1. Fetch live video showcase directly from Supabase DB
  try {
    const { data: dbVideo, error } = await supabase
      .from('video_showcase')
      .select('*')
      .single();

    if (!error && dbVideo) {
      return {
        id: dbVideo.id,
        title: dbVideo.title,
        subtitle: dbVideo.subtitle,
        badgeText: dbVideo.badge_text,
        videoType: dbVideo.video_type,
        videoUrl: dbVideo.video_url,
        embedUrl: dbVideo.embed_url,
        directVideoUrl: dbVideo.direct_video_url,
        posterImage: dbVideo.poster_image,
        isActive: dbVideo.is_active,
      };
    }
  } catch (err) {
    console.warn('[Supabase] Warning fetching video showcase:', err);
  }

  // 2. Fallback to local data/video.json
  try {
    const videoPath = path.join(process.cwd(), 'data', 'video.json');
    const content = await readFile(videoPath, 'utf8');
    return JSON.parse(content);
  } catch {}
  return {
    id: 'video-showcase-main',
    title: 'Luxury Home Interior Walkthrough & Factory Tour',
    subtitle: 'Anjani Infra Hyderabad • Direct Video Showcase',
    badgeText: 'Plays Directly Here (No New Tabs)',
    videoType: 'youtube',
    videoUrl: 'https://www.youtube.com/watch?v=EJJCbEKK5uw',
    embedUrl: 'https://www.youtube-nocookie.com/embed/EJJCbEKK5uw?rel=0&modestbranding=1&playsinline=1',
    directVideoUrl: '',
    posterImage: '/projects/proj1.jpg',
    isActive: true,
  };
}

export default async function HomePage() {
  const slides = await getActiveSlides();
  const latestBlogs = await getLatestBlogs();
  const dynamicTestimonials = await getDynamicTestimonialPages();
  const videoShowcase = await getVideoShowcaseData();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Interactive Hero Carousel + Modals */}
      <HomeInteractiveHub slides={slides} />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. PROFESSIONAL HOME INTERIOR DESIGN COMPANY & 6 CIRCULAR STATS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="company" className="py-16 sm:py-20 px-4 sm:px-8 max-w-[1440px] mx-auto text-center">
        
        {/* Section Heading matching Screenshot 2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans mb-12 sm:mb-16">
          PROFESSIONAL HOME INTERIOR DESIGN COMPANY
        </h2>

        {/* 6 Circular Highlights Row */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 lg:gap-8">
          
          {/* Circle 1 */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:border-[#C5A059] cursor-pointer">
            <span className="text-xs sm:text-sm font-extrabold text-[#2B5573] uppercase tracking-wider">
              SINCE
            </span>
            <span className="text-base sm:text-lg font-bold text-gray-800 mt-1">
              2004
            </span>
          </div>

          {/* Circle 2 */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:border-[#C5A059] cursor-pointer">
            <span className="text-xs sm:text-sm font-extrabold text-[#2B5573] uppercase tracking-wider">
              PREMIUM
            </span>
            <span className="text-base sm:text-lg font-bold text-gray-800 mt-1">
              Materials
            </span>
          </div>

          {/* Circle 3 */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:border-[#C5A059] cursor-pointer">
            <span className="text-xs sm:text-sm font-extrabold text-[#2B5573] uppercase tracking-wider">
              10 YEARS
            </span>
            <span className="text-base sm:text-lg font-bold text-gray-800 mt-1">
              Warranty
            </span>
          </div>

          {/* Circle 4 */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:border-[#C5A059] cursor-pointer">
            <span className="text-xs sm:text-sm font-extrabold text-[#2B5573] uppercase tracking-wider">
              COMPLETION
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-800 mt-1 text-center px-2">
              40 Working Days
            </span>
          </div>

          {/* Circle 5 */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center transition-all hover:scale-105 hover:shadow-md hover:border-[#C5A059] cursor-pointer">
            <span className="text-xs sm:text-sm font-extrabold text-[#2B5573] uppercase tracking-wider">
              PROJECTS
            </span>
            <span className="text-xs sm:text-sm font-bold text-gray-800 mt-1 text-center px-2">
              300 Per Month
            </span>
          </div>

          {/* Circle 6 - Solid Corporate Navy Circle */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full bg-[#132B3E] border-2 border-[#C5A059]/40 shadow-lg flex flex-col items-center justify-center text-white transition-all hover:scale-105 hover:bg-[#0F2231] cursor-pointer">
            <span className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#C5A059]">
              LIFELONG
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-200 mt-1 text-center px-2">
              Service Support
            </span>
          </div>

        </div>
      </section>


      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. WHAT WE DO VISUAL IMAGE GRID (As in Screenshot 4 & 5) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="what-we-do" className="py-16 sm:py-20 px-4 sm:px-8 max-w-[1440px] mx-auto">
        
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-200" />
          <h2 className="px-6 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 uppercase font-sans text-center">
            WHAT WE DO
          </h2>
          <div className="hidden sm:block flex-1 h-[1px] bg-gray-200" />
        </div>

        {/* Visual Category Grid with bold white typography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">
          
          {/* Tile 1: KITCHEN (8 cols) */}
          <Link href="/products/kitchen" className="md:col-span-8 relative h-[320px] sm:h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-sm block">
            <img
              src="/category-kitchen.jpg"
              alt="Luxury German Modular Kitchen"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center">
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-wider drop-shadow-lg group-hover:tracking-widest transition-all">
                KITCHEN
              </h3>
            </div>
          </Link>

          {/* Tile 2: DINING (4 cols) */}
          <Link href="/products/dining-room" className="md:col-span-4 relative h-[320px] sm:h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-sm block">
            <img
              src="/category-dining.jpg"
              alt="Luxury Italian Marble Dining Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center">
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-wider drop-shadow-lg group-hover:tracking-widest transition-all">
                DINING
              </h3>
            </div>
          </Link>

          {/* Tile 3: BEDROOM (5 cols) */}
          <Link href="/products/bedroom" className="md:col-span-5 relative h-[320px] sm:h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-sm block">
            <img
              src="/category-bedroom.jpg"
              alt="Luxury Master Bedroom Interior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center">
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-wider drop-shadow-lg group-hover:tracking-widest transition-all">
                BEDROOM
              </h3>
            </div>
          </Link>

          {/* Tile 4: LIVING (7 cols) */}
          <Link href="/products/living-room" className="md:col-span-7 relative h-[320px] sm:h-[400px] rounded-lg overflow-hidden group cursor-pointer shadow-sm block">
            <img
              src="/category-living.jpg"
              alt="Luxury Penthouse Living Room"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center">
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-wider drop-shadow-lg group-hover:tracking-widest transition-all">
                LIVING
              </h3>
            </div>
          </Link>

        </div>

        {/* Center Royal CTA Button */}
        <div className="text-center pt-2">
          <a
            href="https://wa.me/919848088998?text=Hi%20Anjani%20Infra%2C%20I%20would%20like%20to%20talk%20to%20your%20design%20consultant%20regarding%20interior%20design."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Talk to Our Design Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 5. PROJECT COMPLETION IN 40 WORKING DAYS* (5-STEP PROCESS) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          {/* Section Divider Header with lines */}
          <div className="flex items-center justify-center mb-14">
            <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
            <h2 className="px-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans text-center">
              PROJECT COMPLETION IN <span className="text-[#2B5573]">40 WORKING DAYS*</span>
            </h2>
            <div className="hidden sm:block flex-1 h-[1px] bg-gray-300" />
          </div>

          {/* 5-Step Process with arrows */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start relative">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#132B3E] border-2 border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-200 mb-4 p-5">
                {/* Meeting icon */}
                <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-800 leading-snug max-w-[170px]">
                Talk to our Interior Designer &amp; Get an Estimate
              </p>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-12 -right-4 w-8 text-[#C5A059] opacity-70">
                &rarr;
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#132B3E] border-2 border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-200 mb-4 p-5">
                {/* Drawing / Blueprint approval icon */}
                <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <circle cx="16" cy="16" r="3" stroke="currentColor" fill="none" strokeWidth="1.5" />
                </svg>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-800 leading-snug max-w-[170px]">
                Detailed Drawing and Approval
              </p>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-12 -right-4 w-8 text-[#C5A059] opacity-70">
                &rarr;
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#132B3E] border-2 border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-200 mb-4 p-5">
                {/* Factory machine production icon */}
                <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-800 leading-snug max-w-[170px]">
                Production at Own Factories
              </p>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-12 -right-4 w-8 text-[#C5A059] opacity-70">
                &rarr;
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#132B3E] border-2 border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 duration-200 mb-4 p-5">
                {/* Truck delivery icon */}
                <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-800 leading-snug max-w-[170px]">
                Material Delivery &amp; Execution
              </p>
              {/* Arrow connector */}
              <div className="hidden lg:block absolute top-12 -right-4 w-8 text-[#C5A059] opacity-70">
                &rarr;
              </div>
            </div>

            {/* Step 5 (Outline circle with keys handover) */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-[#C5A059] text-[#132B3E] flex items-center justify-center shadow-md transition-transform group-hover:scale-105 duration-200 mb-4 p-5">
                {/* Key handover icon */}
                <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-gray-800 leading-snug max-w-[170px]">
                On Time Project Hand Over
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 6. CONTEMPORARY HOME INTERIOR DESIGNERS AND CONTRACTORS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left text (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                CONTEMPORARY HOME INTERIOR DESIGNERS AND CONTRACTORS IN HYDERABAD
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                Anjani Infra is the premier home interior design company in Hyderabad with experience centres and design studios across the city. With years of proven craftsmanship, modern modular factories, and a dedicated team of skilled architects and interior specialists, we are professional, contemporary interior designers and contractors dedicated to creating bespoke living spaces with the capacity to deliver turnkey projects seamlessly.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                We ensure client satisfaction through quality products, German precision manufacturing, and systematic working. As renowned contemporary interior designers in Hyderabad, we design and build beautiful living spaces within apartments, luxury gated villas, and independent residences, using our vast experience and creativity that will delight you, your family, and visitors. Customize modular kitchens, bedrooms, living and dining room furniture tailored to your exact floor plan with the help of Anjani Infra.
              </p>
            </div>

            {/* Right Image (5 cols) */}
            <div className="lg:col-span-5 h-[340px] sm:h-[420px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/contemporary-interior-hyderabad.jpg"
                alt="Contemporary Luxury Home Interiors in Hyderabad - Anjani Infra"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 7. CUSTOM-MADE HOME INTERIORS & TEAM OF 1600 EMPLOYEES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Team Photo (6 cols) */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl group">
              <img
                src="/anjani-design-team.jpg"
                alt="Anjani Infra Team of Architects & Interior Designers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex items-end justify-center pb-8 px-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider drop-shadow-md text-center">
                  TEAM OF EXPERIENCED PROFESSIONALS
                </h3>
              </div>
            </div>

            {/* Right Description (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                CUSTOM-MADE HOME INTERIORS
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                We have been transforming the art of home interiors across{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold">Hyderabad</span> including{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Banjara Hills</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Jubilee Hills</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Gachibowli</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Kompally</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Kokapet</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Financial District</span> &amp;{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Tellapur</span>.
                Our expertise goes beyond aesthetics to include thoughtful designs that reflect style and functionality. Our dedicated team of architects, project managers and technicians ensures your home is delivered with unmatched elegance.
              </p>

              <div>
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer text-center"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 8. 14000+ SATISFIED CUSTOMERS (TESTIMONIALS CAROUSEL) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <TestimonialsClientSection pages={dynamicTestimonials} />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 9. VIDEO SHOWCASE (PLAYS DIRECTLY INLINE - NO NEW TABS) */}
      {/* ───────────────────────────────────────────────────────────── */}
      {videoShowcase.isActive !== false && (
        <section className="relative w-full bg-[#132B3E] py-10 sm:py-14 border-t border-b border-gray-800">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 text-white text-center sm:text-left">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#C5A059] text-[#132B3E] font-black text-sm flex items-center justify-center shadow-lg shrink-0">
                  AI
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {videoShowcase.title || 'Luxury Home Interior Walkthrough & Factory Tour'}
                  </h3>
                  <p className="text-xs text-amber-200/80">
                    {videoShowcase.subtitle || 'Anjani Infra Hyderabad • Direct Video Showcase'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 text-xs text-amber-100 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{videoShowcase.badgeText || 'Plays Directly Here (No New Tabs)'}</span>
              </div>
            </div>

            {/* Embedded Video Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 bg-black">
              {videoShowcase.videoType === 'direct' && videoShowcase.directVideoUrl ? (
                <video
                  controls
                  playsInline
                  poster={videoShowcase.posterImage || undefined}
                  className="w-full h-full object-cover"
                >
                  <source src={videoShowcase.directVideoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  className="w-full h-full border-0"
                  src={videoShowcase.embedUrl || "https://www.youtube-nocookie.com/embed/1rKdfAkygIs?rel=0&modestbranding=1&playsinline=1"}
                  title={videoShowcase.title || "Anjani Infra Video Showcase"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  allowFullScreen
                />
              )}
            </div>

          </div>
        </section>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 10. LARGE MODULAR FURNITURE FACTORIES */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                LARGE MODULAR FURNITURE FACTORIES
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                At Anjani Infra, we believe in the design and manufacture of high-quality furniture pieces, which are truly original. We have a 350,000 sq. ft Own Factory Space in 5 acres of land, which is one of the largest modular furniture factories in India, equipped with state-of-the-art German machinery to meet today&apos;s furnishing trends. Our factory is well provisioned for creating bespoke...{' '}
                <span className="text-[#C5A059] font-semibold cursor-pointer underline">Read more..</span>
              </p>

              <div>
                <DesignConsultationButton label="Contact for Customized Home Interiors" />
              </div>
            </div>

            {/* Right Factory Photos (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Unit 1 */}
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
                <img
                  src="/factory-unit-1.jpg"
                  alt="Anjani Infra German CNC Panel Processing & Modular Factory - Unit 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-end p-4">
                  <span className="text-xs text-white font-semibold tracking-wider bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/20">
                    CNC Production Unit - 1
                  </span>
                </div>
              </div>

              {/* Unit 2 */}
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
                <img
                  src="/factory-unit-2.jpg"
                  alt="Anjani Infra Precision Assembly & Automated Production Facility - Unit 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-end p-4">
                  <span className="text-xs text-white font-semibold tracking-wider bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/20">
                    Automated Assembly Unit - 2
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 11. LATEST BLOGS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="blogs" className="py-16 sm:py-20 bg-white border-t border-gray-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8 pr-8 sm:pr-12 md:pr-24 lg:pr-32 xl:pr-36">
          
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-wider block mb-1">
                Design Insights & Advice
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans">
                LATEST BLOGS
              </h2>
            </div>

            <Link
              href="/blogs"
              className="px-5 py-2.5 border border-[#2B5573] text-[#2B5573] hover:bg-[#2B5573] hover:text-white transition-all text-xs font-bold tracking-wider rounded inline-flex items-center gap-2 shadow-sm group cursor-pointer"
            >
              <span>View All Blogs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3-Card Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((blog: any) => (
              <Link
                key={blog.id || blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-[#C5A059] font-bold mt-3">
                  {blog.formattedDate || blog.date}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
