'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ModernMatrixHero() {
  return (
    <>
      {/* ──────────────── HERO SECTION ──────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-[#e8e4de]">
        
        {/* Background Image with Crisp Cinematic Luxury Clarity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=95"
            alt="Anjani Infra Luxury Interiors"
            className="w-full h-full object-cover object-center"
          />
          {/* Clean minimal dark gradient for text legibility without muddying or blurring the image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-[#0a0a0a]" />
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 pb-32">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-sans tracking-[0.45em] uppercase text-[#c9a96e] mb-6 sm:mb-8 font-medium">
            <span className="w-8 h-[1px] bg-[#c9a96e]" />
            <span>ARCHITECTURAL &amp; INTERIOR EXCELLENCE</span>
            <span className="w-8 h-[1px] bg-[#c9a96e]" />
          </div>

          {/* Headline in Cormorant Garamond */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#fafaf8] leading-[1.05] tracking-tight mb-8">
            Crafting Spaces. <br />
            <em className="font-serif italic font-light text-[#c9a96e]">Defining Luxury.</em>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-[#d1ccc4] font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-wide">
            Turnkey luxury interiors, bespoke residential architecture &amp; corporate spaces delivered with direct factory precision across Hyderabad.
          </p>

          {/* Single Action CTA: VIEW OUR PROJECTS */}
          <div className="flex items-center justify-center">
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
              className="inline-flex items-center gap-3 mm-btn mm-btn-filled py-4 px-10 text-xs tracking-[0.25em]"
            >
              <span>VIEW OUR PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2.5 text-[#999999] hover:text-[#c9a96e] transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-sans tracking-[0.35em] uppercase">SCROLL</span>
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <div className="w-full h-full bg-[#c9a96e] -translate-y-full animate-[marquee_2s_ease-in-out_infinite]" />
          </div>
        </a>

      </section>
    </>
  );
}
