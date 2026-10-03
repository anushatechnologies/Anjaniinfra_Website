'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

export interface HeroSlide {
  id: string | number;
  tagline: string;
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  link?: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  onOpenEstimate?: () => void;
  onOpenConsultation?: () => void;
}

export function HeroCarousel({
  slides,
  onOpenEstimate,
  onOpenConsultation
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides]);

  if (!slides || slides.length === 0) return null;
  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-zinc-900">
      {/* Background Slides */}
      {slides.map((slide, idx) => (
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        </div>
      ))}

      {/* Hero Slide Text Overlay with Luxury Glass Card */}
      <div className="absolute inset-0 z-20 flex items-center pb-24 sm:pb-28 lg:pb-32 pointer-events-none">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 pr-14 sm:pr-20 md:pr-28 lg:pr-36">
          <div className="max-w-2xl bg-black/45 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl text-white space-y-4 shadow-2xl pointer-events-auto transition-all duration-500">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A059]/70 text-[#C5A059] text-[11px] sm:text-xs font-bold tracking-widest uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>{activeSlide.tagline}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans drop-shadow-lg">
              {activeSlide.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm lg:text-base text-gray-200 font-normal leading-relaxed max-w-xl drop-shadow">
              {activeSlide.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenEstimate && onOpenEstimate()}
                className="px-6 py-3 bg-[#C5A059] hover:bg-[#DFBA73] text-[#132B3E] rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#132B3E]" />
                <span>Get Free Estimate</span>
              </button>

              <button
                onClick={() => onOpenConsultation && onOpenConsultation()}
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md rounded-md font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Indicator Dots */}
            {slides.length > 1 && (
              <div className="flex items-center gap-2 pt-2">
                {slides.map((_, dotIdx) => (
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
            )}
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm shadow-md"
            aria-label="Previous Slide"
          >
            <span className="text-xl leading-none font-bold">‹</span>
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-sm shadow-md"
            aria-label="Next Slide"
          >
            <span className="text-xl leading-none font-bold">›</span>
          </button>
        </>
      )}

      {/* Awards & Recognition Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-t border-white/10 pt-3.5 pb-4 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-2.5">
          <div className="text-white text-lg sm:text-xl font-serif tracking-tight font-normal">
            Awards &amp; Recognition
          </div>
          <div className="overflow-hidden w-full relative">
            <div className="flex items-center gap-3 sm:gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-1">
              {[
                { title: 'Best Realty Brands', org: 'The Economic Times', badgeClass: 'bg-red-700 text-white', symbol: 'Bb' },
                { title: 'Most Preferred Brand', org: 'Interior Design', badgeClass: 'bg-amber-600 text-white', symbol: '★' },
                { title: 'Asia Pacific Property Awards', org: 'Winner 2024', badgeClass: 'bg-zinc-900 text-amber-400 border border-amber-400/40', symbol: '⚜' },
                { title: 'Most Preferred Workplace', org: 'Top Employer', badgeClass: 'bg-slate-700 text-white', symbol: '🛡' },
                { title: 'Best Brands 2024', org: 'Economic Times', badgeClass: 'bg-amber-700 text-white', symbol: 'Bb' },
                { title: 'Business Awards', org: 'National Winner', badgeClass: 'bg-blue-900 text-amber-300 border border-amber-300/30', symbol: '🏆' },
                { title: 'Design Excellence', org: 'Arch & Interior', badgeClass: 'bg-indigo-950 text-white border border-indigo-500/30', symbol: '◈' }
              ].concat([
                { title: 'Best Realty Brands', org: 'The Economic Times', badgeClass: 'bg-red-700 text-white', symbol: 'Bb' },
                { title: 'Most Preferred Brand', org: 'Interior Design', badgeClass: 'bg-amber-600 text-white', symbol: '★' },
                { title: 'Asia Pacific Property Awards', org: 'Winner 2024', badgeClass: 'bg-zinc-900 text-amber-400 border border-amber-400/40', symbol: '⚜' },
                { title: 'Most Preferred Workplace', org: 'Top Employer', badgeClass: 'bg-slate-700 text-white', symbol: '🛡' }
              ]).map((award, i) => (
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
  );
}
