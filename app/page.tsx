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

// High-resolution luxury interior photography
const heroSlides = [
  {
    id: 1,
    title: 'Contemporary Luxury Kitchen & Living',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 2,
    title: 'Bespoke Master Bedroom Suite',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 3,
    title: 'Modern Modular Kitchen & Island',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2000&q=85',
  },
  {
    id: 4,
    title: 'Architectural Dining & Lounge',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
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

export default function DLifeInteriorPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

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
        
        {/* Carousel Background Images */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient vignette gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ── Awards & Recognition Translucent Strip (As in Screenshot 1) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/55 backdrop-blur-md border-t border-white/10 pt-4 pb-6 px-4 sm:px-8">
          <div className="max-w-[1440px] mx-auto flex flex-col gap-3">
            
            {/* Strip Title */}
            <div className="text-white text-xl sm:text-2xl font-serif tracking-tight font-normal">
              Awards &amp; Recognition
            </div>

            {/* Badges Row (Horizontal scrolling on small screens, flex on large) */}
            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1">
              {awardsData.map((award, i) => (
                <div
                  key={i}
                  className="shrink-0 flex flex-col items-center justify-center w-20 sm:w-24 h-24 sm:h-28 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg p-2 text-center transition-transform hover:-translate-y-1 duration-200 cursor-pointer backdrop-blur-sm shadow-md"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-md flex items-center justify-center text-sm sm:text-base font-black shadow-inner mb-1.5 ${award.badgeClass}`}>
                    {award.symbol}
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-white font-bold leading-tight line-clamp-2">
                    {award.title}
                  </span>
                  <span className="text-[7.5px] sm:text-[8px] text-white/70 tracking-tight mt-0.5">
                    {award.org}
                  </span>
                </div>
              ))}
            </div>

            {/* Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    idx === currentSlide
                      ? 'w-3 h-3 bg-[#C5A059] ring-2 ring-white'
                      : 'w-2.5 h-2.5 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
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
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85"
              alt="Kitchen Interior"
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
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85"
              alt="Dining Room Interior"
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
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85"
              alt="Bedroom Interior"
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
              alt="Living Room Interior"
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
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Talk to Our Design Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
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
                CONTEMPORARY HOME INTERIOR DESIGNERS AND CONTRACTORS IN INDIA
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                D&apos;LIFE is the largest home interior designers in India with experience centres in Ahmedabad, Mumbai, Navi Mumbai, Hyderabad, Bangalore, Mysore, Kerala, Pune, Chennai, Nagercoil, Madurai, Coimbatore &amp; Mangalore with more than 22 years of experience, 28 showrooms, modern factories, and a team of 1600 employees. We are professional, contemporary interior designers and contractors with capacity to hand over 300 projects every month.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                We ensure client satisfaction through quality products and systematic working. As the most renowned contemporary interior designers, we design and build beautiful living space within an apartment, group villa or independent villa, using our vast experience and creativity that will delight you, your family and visitors. Customize modular kitchen, bedroom, living and dining room furniture as per requirement and measurement of exact space with the help of the best interior design company.
              </p>
            </div>

            {/* Right Image (5 cols) */}
            <div className="lg:col-span-5 h-[340px] sm:h-[420px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
                alt="Contemporary Kitchen Island Bar Stools"
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
                alt="Team of 1600 Employees in Purple Uniforms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex items-end justify-center pb-8 px-6">
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-wider drop-shadow-md text-center">
                  TEAM OF 1600 EMPLOYEES
                </h3>
              </div>
            </div>

            {/* Right Description (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans leading-tight">
                CUSTOM-MADE HOME INTERIORS
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                Since 2004, we have been transforming the art of home interiors across{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Ahmedabad</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Mumbai</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Navi Mumbai</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Hyderabad</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Bangalore</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Mysore</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Kerala</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Pune</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Chennai</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Nagercoil</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Madurai</span>,{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Coimbatore</span> &amp;{' '}
                <span className="text-[#2B5573] hover:text-[#C5A059] font-semibold underline cursor-pointer">Mangalore</span>.
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

          {/* Testimonial Cards Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-start">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
                  alt="Ms. Honey Rose"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                  &ldquo;
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                Ms. Honey Rose
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                &ldquo;Finding a passionate professional to craft my dream home was crucial. Anjani Infra exceeded every expectation.&rdquo;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                  alt="Prannoy HS"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                  &ldquo;
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                Prannoy HS
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                &ldquo;Structured, organized and pleasant to deal with. Delivered exactly as promised on schedule.&rdquo;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                  alt="Mr. Surendra N M & Family"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                  &ldquo;
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                Mr. Surendra N M &amp; Family
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                &ldquo;We are extremely satisfied with the service, factory finishes and on-time handover.&rdquo;
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Mr. Kiran Nair & Family"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                  &ldquo;
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                Mr. Kiran Nair &amp; Family
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                &ldquo;Proper communication was maintained by Anjani Infra team throughout execution.&rdquo;
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=400&q=80"
                  alt="Mr. Azeem C & Family"
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="w-8 h-8 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center font-serif text-sm absolute bottom-0 right-1 shadow-md border border-[#C5A059]/40">
                  &ldquo;
                </div>
              </div>
              <h4 className="font-bold text-sm sm:text-base text-[#2B5573]">
                Mr. Azeem C &amp; Family
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed max-w-[200px]">
                &ldquo;Very professional interior designers. The team was responsive and finished on time.&rdquo;
              </p>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer" />
          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 9. VIDEO SHOWCASE BANNER */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[320px] sm:h-[420px] bg-zinc-900 overflow-hidden group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
          alt="Video Showcase Backdrop"
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6 sm:p-10">
          {/* Top Video Header */}
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#132B3E] border border-[#C5A059] flex items-center justify-center font-bold text-sm text-[#C5A059]">
                AI
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold drop-shadow">
                  The Most Reliable Home Interior Company in India | Anjani Infra
                </h4>
                <p className="text-xs text-amber-200/80">Anjani Infra • Corporate Film</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <span className="text-sm cursor-pointer hover:text-white">🔊</span>
              <span className="text-sm cursor-pointer hover:text-white">CC</span>
              <span className="text-sm cursor-pointer hover:text-white">⚙</span>
            </div>
          </div>

          {/* Center Play Button */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#132B3E] flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-[#132B3E] border-b-8 border-b-transparent ml-1" />
            </div>
          </div>

          <div className="text-white/60 text-xs text-right">
            Click to Watch Full Factory &amp; Showroom Tour
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
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Production Unit 1 Factory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-end p-4">
                  <span className="text-xs text-white font-semibold tracking-wider bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
                    Production Unit - 1
                  </span>
                </div>
              </div>

              {/* Unit 2 */}
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg border border-gray-200 group">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  alt="Production Unit 2 Factory with Rooftop Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-end p-4">
                  <span className="text-xs text-white font-semibold tracking-wider bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
                    Production Unit - 2
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
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          {/* Header Row */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 uppercase font-sans">
              LATEST BLOGS
            </h2>

            <button className="px-5 py-2 border border-[#2B5573] text-[#2B5573] hover:bg-[#2B5573] hover:text-white transition-colors text-xs font-bold tracking-wider rounded cursor-pointer">
              View All Blog
            </button>
          </div>

          {/* 3-Card Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Blog Card 1 */}
            <article className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-sm mb-4">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                  alt="Bespoke Home at Condor Cyber Gardens Trivandrum"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                Bespoke Home at Condor Cyber Gardens Trivandrum
              </h3>
              <p className="text-xs text-[#C5A059] font-bold mt-3">
                July 23, 2026
              </p>
            </article>

            {/* Blog Card 2 */}
            <article className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-sm mb-4">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
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
            </article>

            {/* Blog Card 3 */}
            <article className="group cursor-pointer flex flex-col">
              <div className="relative h-60 sm:h-64 lg:h-72 overflow-hidden bg-gray-100 rounded-sm mb-4">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
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
            </article>

          </div>

        </div>
      </section>

    </div>
  );
}
