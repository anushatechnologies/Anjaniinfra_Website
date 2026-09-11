'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
import { FloatingActions } from '@/components/FloatingActions';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';
import { ConsultationModal } from '@/components/ConsultationModal';

// High-resolution luxury interior photography with crystal clarity and rich headlines
const heroSlides = [
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

export default function DLifeInteriorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);

  // Auto carousel rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Modals & Floating Right-Side Controls */}
      <FloatingActions
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO CAROUSEL SECTION WITH AWARDS STRIP */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-zinc-900">
        
        {/* Carousel Background Images with High Clarity */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-105 contrast-105"
            />
            {/* Subtle soft directional gradient strictly on the left so 80% of the image maintains 100% natural daylight clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
          </div>
        ))}

        {/* Hero Slide Text Overlay with z-20 Visibility & Luxury Glass Card */}
        <div className="absolute inset-0 z-20 flex items-center pb-24 sm:pb-28 lg:pb-32 pointer-events-none">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pr-14 sm:pr-20 md:pr-28 lg:pr-36">
            <div className="max-w-2xl bg-black/45 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl text-white space-y-4 shadow-2xl pointer-events-auto transition-all duration-500">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/70 text-[#C5A059] text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{heroSlides[currentSlide].tagline}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans drop-shadow-lg">
                {heroSlides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-normal leading-relaxed max-w-xl drop-shadow">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setIsEstimateOpen(true)}
                  className="px-6 py-3 bg-[#C5A059] hover:bg-[#DFBA73] text-[#132B3E] rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#132B3E]" />
                  <span>Get Free Estimate</span>
                </button>

                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicator Dots */}
              <div className="flex items-center gap-2 pt-2">
                {heroSlides.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentSlide(dotIdx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      dotIdx === currentSlide
                        ? 'w-8 bg-[#C5A059]'
                        : 'w-2.5 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm shadow-md"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm shadow-md"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ── Awards & Recognition Continuous Marquee Strip ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-t border-white/10 pt-3.5 pb-4 px-4 sm:px-8">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-2.5">
            
            {/* Strip Title */}
            <div className="text-white text-lg sm:text-xl font-serif tracking-tight font-normal">
              Awards &amp; Recognition
            </div>

            {/* Continuous Scrolling Badges Row (Auto-loops smoothly) */}
            <div className="overflow-hidden w-full relative">
              <div className="flex items-center gap-3 sm:gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-1">
                {[...awardsData, ...awardsData].map((award, i) => (
                  <div
                    key={i}
                    className="shrink-0 flex flex-col items-center justify-center w-24 sm:w-28 h-20 sm:h-22 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2 text-center transition-transform hover:-translate-y-0.5 duration-200 cursor-pointer backdrop-blur-sm shadow-sm"
                  >
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center text-xs sm:text-sm font-black shadow-inner mb-1 ${award.badgeClass}`}>
                      {award.symbol}
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-white font-bold leading-tight line-clamp-2">
                      {award.title}
                    </span>
                    <span className="text-[7.5px] sm:text-[8px] text-[#C5A059] font-medium tracking-tight mt-0.5">
                      {award.org}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>

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
            href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra%2C%20I%20would%20like%20to%20talk%20to%20your%20design%20consultant%20regarding%20interior%20design."
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
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                >
                  Book a Free Consultation
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 8. 14000+ SATISFIED CUSTOMERS (TESTIMONIALS CAROUSEL) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans mb-14">
            <span className="text-[#C5A059]">14000+</span> SATISFIED CUSTOMERS
          </h2>

          {/* Testimonial Cards Row (Movable Carousel) */}
          <div className="relative overflow-hidden min-h-[300px]">
            <div
              key={activeTestimonialPage}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start transition-all duration-500 ease-in-out animate-fade-in"
            >
              {testimonialPages[activeTestimonialPage].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="relative mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                      &ldquo;
                    </div>
                  </div>
                  <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#C5A059] font-semibold mt-0.5">
                    {item.location}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Movable Dots Indicator & Navigation Arrows */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setActiveTestimonialPage((prev) => (prev === 0 ? testimonialPages.length - 1 : prev - 1))}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#132B3E] hover:text-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all shadow-sm cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonialPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialPage(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeTestimonialPage === index
                      ? 'w-7 h-2.5 bg-[#C5A059] shadow-sm'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveTestimonialPage((prev) => (prev + 1) % testimonialPages.length)}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#132B3E] hover:text-white border border-gray-300 flex items-center justify-center text-gray-600 transition-all shadow-sm cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 9. VIDEO SHOWCASE (PLAYS DIRECTLY INLINE - NO NEW TABS) */}
      {/* ───────────────────────────────────────────────────────────── */}
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
                  Luxury Home Interior Walkthrough &amp; Factory Tour
                </h3>
                <p className="text-xs text-amber-200/80">
                  Anjani Infra Hyderabad • Direct Video Showcase
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/15 text-xs text-amber-100 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Plays Directly Here (No New Tabs)</span>
            </div>
          </div>

          {/* Embedded Video Player */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C5A059]/40 bg-black">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube-nocookie.com/embed/1rKdfAkygIs?rel=0&modestbranding=1&playsinline=1"
              title="Anjani Infra - Luxury Home Interior Walkthrough & Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allowFullScreen
            />
          </div>

        </div>
      </section>

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
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all transform hover:scale-105 cursor-pointer"
                >
                  Contact for Customized Home Interiors
                </button>
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
            
            {/* Blog Card 1 */}
            <Link href="/blogs/cyber-gardens-luxury-apartment" className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Bespoke Luxury Villa Interiors in Jubilee Hills, Hyderabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                Bespoke Luxury Villa Interiors in Jubilee Hills, Hyderabad
              </h3>
              <p className="text-xs text-[#C5A059] font-bold mt-3">
                July 23, 2026
              </p>
            </Link>

            {/* Blog Card 2 */}
            <Link href="/blogs/interior-design-timeline" className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                  alt="Interior Design Timeline: How Long Does a Home Interior Take?"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                Interior Design Timeline: How Long Does a Home Interior Take?
              </h3>
              <p className="text-xs text-[#C5A059] font-bold mt-3">
                July 08, 2026
              </p>
            </Link>

            {/* Blog Card 3 */}
            <Link href="/blogs/sliding-wardrobe-vs-hinged-wardrobe" className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-lg mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80"
                  alt="Sliding Wardrobe vs Hinged Wardrobe: Which One Is Right for Your Home?"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                Sliding Wardrobe vs Hinged Wardrobe: Which One Is Right for Your Home?
              </h3>
              <p className="text-xs text-[#C5A059] font-bold mt-3">
                August 25, 2026
              </p>
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
}
