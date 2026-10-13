'use client';

import React from 'react';
import { Phone, Mail } from 'lucide-react';

export function ContactHeroBanner() {
  return (
    <section className="relative w-full bg-[#08111B] text-white overflow-hidden select-none border-b border-white/10 shadow-2xl">
      {/* Background subtle mesh/gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#060D15] via-[#0A1420] to-[#04090F] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto min-h-[520px] lg:min-h-[580px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* ────────────── LEFT COLUMN: Contact Details (7 cols on lg) ────────────── */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-10 lg:p-14 z-20">
          
          {/* Top Header */}
          <div>
            <div className="inline-block">
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-wider uppercase text-white font-sans leading-none">
                CONTACT US
              </h1>
              {/* Cyan Accent Underline */}
              <div className="h-[3.5px] sm:h-[4px] w-full mt-3 sm:mt-4 bg-[#00A3E0]" />
            </div>

            {/* Sub-Header: Company Name in Bold Golden Yellow */}
            <h2 className="mt-8 sm:mt-10 text-xl sm:text-2xl lg:text-[26px] font-black uppercase tracking-wide text-[#F3AE1A] font-sans">
              ANJANI INFRA PROJECTS (NARSINGI)
            </h2>

            {/* Corporate HQ */}
            <div className="mt-6 sm:mt-8 space-y-2 max-w-xl">
              <h3 className="text-sm sm:text-[15px] font-extrabold uppercase tracking-wide text-[#F3AE1A] font-sans">
                CORPORATE HEADQUARTERS
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-200 leading-relaxed font-normal">
                BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT,
                <br />
                NANAKRAMGUDA SERVICE ROAD, NARSINGI,
                <br />
                HYDERABAD, TELANGANA - 500075
              </p>
            </div>
          </div>

          {/* Bottom Contact Row: Phone & Email */}
          <div className="mt-8 sm:mt-12 pt-6 border-t border-white/10 flex flex-wrap items-end gap-8 sm:gap-14">
            
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Phone className="w-5 h-5 text-gray-300" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] sm:text-xs text-gray-400 font-medium">
                  Phone
                </span>
                <a
                  href="tel:+919848088998"
                  className="block text-base sm:text-lg font-bold text-white hover:text-[#00A3E0] transition-colors tracking-wide"
                >
                  +91 98480 88998
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="mt-1 text-gray-400">
                <Mail className="w-5 h-5 text-gray-300" />
              </div>
              <div className="space-y-0.5">
                <span className="block text-[11px] sm:text-xs text-gray-400 font-medium">
                  Email
                </span>
                <a
                  href="mailto:anjaniinfra4@gmail.com"
                  className="block text-base sm:text-lg font-semibold text-white underline decoration-gray-400 hover:text-[#00A3E0] hover:decoration-[#00A3E0] transition-colors tracking-tight"
                >
                  anjaniinfra4@gmail.com
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* ────────────── RIGHT COLUMN: Skewed Architectural Facade with THANK YOU! (5 cols) ────────────── */}
        <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full flex items-center justify-center overflow-hidden">
          
          {/* Architectural Skyscraper Angled Panels */}
          <div className="absolute inset-0 flex items-center justify-end pr-0 lg:pr-8 pointer-events-none">
            
            {/* Panel 1 (Primary Glass Facade Column) */}
            <div
              className="relative w-44 sm:w-60 lg:w-72 h-[120%] -mr-6 sm:-mr-8 overflow-hidden shadow-2xl border-l-2 border-r-2 border-[#00A3E0]/30"
              style={{
                transform: 'skewX(-14deg)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern Architectural Skyscraper Facade"
                className="w-full h-full object-cover scale-150 -translate-y-4"
                style={{
                  transform: 'skewX(14deg) scale(1.4)',
                }}
              />
              <div className="absolute inset-0 bg-[#0A1422]/20 mix-blend-multiply" />
            </div>

            {/* Panel 2 (Secondary Glass Facade Column to the right) */}
            <div
              className="relative w-36 sm:w-48 lg:w-56 h-[120%] overflow-hidden shadow-2xl border-l-2 border-[#00A3E0]/20"
              style={{
                transform: 'skewX(-14deg)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern Architectural Skyscraper Facade"
                className="w-full h-full object-cover scale-150 -translate-y-4"
                style={{
                  transform: 'skewX(14deg) scale(1.4)',
                }}
              />
              <div className="absolute inset-0 bg-[#0A1422]/20 mix-blend-multiply" />
            </div>

          </div>

          {/* Bold "THANK YOU!" Typography Overlay */}
          <div className="relative z-20 text-center lg:text-left px-6 py-10 pointer-events-none flex flex-col items-center lg:items-start -translate-x-4 lg:-translate-x-8">
            <span
              className="font-black text-6xl sm:text-8xl lg:text-[104px] tracking-tight text-white leading-[0.88] drop-shadow-[0_10px_20px_rgba(0,0,0,0.85)] font-sans"
              style={{
                letterSpacing: '-0.03em',
              }}
            >
              THANK
              <br />
              YOU!
            </span>
          </div>

          {/* Bottom Right Cyan Accent Mark */}
          <div className="absolute bottom-6 sm:bottom-8 right-0 w-16 sm:w-24 h-2 sm:h-3 bg-[#00A3E0]" />

        </div>

      </div>
    </section>
  );
}
