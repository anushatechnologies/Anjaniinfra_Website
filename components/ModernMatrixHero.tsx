'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CategoryGalleryModal } from '@/components/CategoryGalleryModal';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

export function ModernMatrixHero() {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [estimateScope, setEstimateScope] = useState('');

  const handleOpenCategory = (key: string) => {
    setActiveCategoryKey(key);
    setIsGalleryOpen(true);
  };

  const categories = [
    {
      key: 'kitchen',
      title: 'Kitchen',
      subtitle: 'Modular & Islands',
      image: '/category-kitchen.jpg',
    },
    {
      key: 'living',
      title: 'Living',
      subtitle: 'Lounges & Salons',
      image: '/category-living.jpg',
    },
    {
      key: 'dining',
      title: 'Dining',
      subtitle: 'Suites & Crockery',
      image: '/category-dining.jpg',
    },
    {
      key: 'bedroom',
      title: 'Bedroom',
      subtitle: 'Suites & Closets',
      image: '/category-bedroom.jpg',
    },
    {
      key: 'commercial',
      title: 'Commercial Office',
      subtitle: 'Corporate Workspaces',
      image: '/projects/arka-office/pages/page_01.jpg',
    },
    {
      key: 'retail',
      title: 'Retail & Shops',
      subtitle: 'Showrooms & Boutiques',
      image: '/anjani-branch-showroom.jpg',
    },
  ];

  return (
    <>
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-[#0a0a0a] text-[#e8e4de] pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-32 lg:pb-10">
        
        {/* Background Image with Crisp Cinematic Luxury Clarity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=95"
            alt="Anjani Infra Luxury Interiors"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle cinematic gradient allowing high background clarity while providing high contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/70" />
        </div>

        {/* Hero Central Content: Split Layout (Decreased Left, Expanded Right for Maximum Image Clarity) */}
        <div className="relative z-10 max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Decreased Size for Elegant Framing */}
            <div className="lg:col-span-5 xl:col-span-4 text-left space-y-5">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-[#c9a96e]/50 backdrop-blur-md text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#c9a96e] font-semibold shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
                <span>ARCHITECTURAL EXCELLENCE</span>
              </div>

              {/* Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-light text-[#fafaf8] leading-[1.12] tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                Crafting Spaces. <br />
                <em className="font-serif italic font-light text-[#c9a96e]">Defining Luxury.</em>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-[15px] text-[#e6e2dc] font-light leading-relaxed max-w-sm tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Turnkey luxury interiors, bespoke residential architecture &amp; corporate spaces delivered with direct factory precision.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    const el = document.getElementById('portfolio');
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      window.history.pushState(null, '', '#portfolio');
                    }
                  }}
                  className="inline-flex items-center gap-2.5 mm-btn mm-btn-filled py-3 px-6 text-xs tracking-[0.22em] shadow-2xl"
                >
                  <span>VIEW PROJECTS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 py-3 px-5 text-xs font-medium tracking-[0.2em] uppercase text-[#fafaf8] border border-[#c9a96e]/60 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all bg-black/70 backdrop-blur-md rounded-sm shadow-xl"
                >
                  <span>ARCHIVES</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Increased Width with Significantly Larger, Crystal-Clear Images */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
                {categories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => handleOpenCategory(item.key)}
                    className="group text-left relative rounded-2xl overflow-hidden border border-white/20 hover:border-[#c9a96e] transition-all duration-300 shadow-2xl bg-[#0c0c0c] flex flex-col hover:shadow-[0_0_30px_rgba(201,169,110,0.45)] cursor-pointer"
                  >
                    {/* Top Image: Large, High-Contrast & Razor Sharp */}
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 brightness-105 contrast-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                      
                      {/* Top Right Mini Arrow */}
                      <div className="absolute top-2.5 right-2.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 border border-white/25 flex items-center justify-center text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-black transition-all shadow-md">
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Bottom Label Panel */}
                    <div className="bg-[#0e0e0e] border-t border-white/10 px-3 py-3 sm:px-4 sm:py-3.5 flex flex-col justify-center transition-colors group-hover:bg-[#161616] group-hover:border-[#c9a96e]/50 w-full">
                      <h3 className="font-serif text-[14px] sm:text-[16px] font-semibold text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-[#b8b3ab] font-sans tracking-wide mt-1 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>


      </section>

      {/* ── 20-Photo Category Modal ── */}
      <CategoryGalleryModal
        isOpen={isGalleryOpen}
        activeCategoryKey={activeCategoryKey}
        onClose={() => setIsGalleryOpen(false)}
        onOpenEstimate={(scope) => {
          setEstimateScope(scope);
          setIsEstimateOpen(true);
        }}
      />

      {/* ── Estimate Consultation Modal ── */}
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        defaultPackage={estimateScope}
      />
    </>
  );
}
