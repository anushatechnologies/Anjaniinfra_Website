'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── ModernMatrix Style Architectural Footer ── */}
      <footer id="contact" className="bg-[#0a0a0a] text-[#e8e4de] border-t border-white/10 pt-16 sm:pt-20 pb-10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-white/10">

            {/* Column 1: Brand & Manifesto (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded border border-[#c9a96e]/30">
                  <img
                    src="/anjani-logo.png"
                    alt="Anjani Infra Projects"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg tracking-[0.15em] text-[#fafaf8] uppercase">
                    ANJANI INFRA PROJECTS
                  </h3>
                  <p className="text-[11px] font-sans text-[#c9a96e] tracking-[0.25em] uppercase">
                    HYDERABAD
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#999999] leading-relaxed max-w-md font-light">
                Hyderabad&apos;s premier interior architecture and infrastructure enterprise. Unifying bespoke residential design, turnkey villa craftsmanship, and corporate commercial build-outs.
              </p>
            </div>

            {/* Column 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-5">
              <div className="mm-eyebrow !mb-2">EXPLORE</div>
              <ul className="space-y-3 text-xs tracking-wider uppercase text-[#999999]">
                {[
                  { label: 'About Studio', href: '#about' },
                  { label: 'Services Spectrum', href: '#services' },
                  { label: 'Selected Portfolio', href: '#portfolio' },
                  { label: 'Execution Process', href: '#process' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-[#c9a96e] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]/40 group-hover:bg-[#c9a96e] transition-colors" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="mm-eyebrow !mb-2">CONTACT</div>
              <div className="space-y-3.5 text-xs sm:text-[13px] text-[#e8e4de]/85 font-light">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c9a96e] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <span className="text-[#fafaf8] font-medium">Office:</span> BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT,
                    NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD, TELANGANA
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#c9a96e] shrink-0" />
                  <p>
                    <span className="text-[#fafaf8] font-medium">Direct:</span>{' '}
                    <a href="tel:+919848088998" className="hover:text-[#c9a96e] transition-colors">
                      +91 98480 88998
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#c9a96e] shrink-0" />
                  <p>
                    <span className="text-[#fafaf8] font-medium">Inquiry:</span>{' '}
                    <a href="mailto:anjaniinfra4@gmail.com" className="hover:text-[#c9a96e] transition-colors">
                      anjaniinfra4@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* GSTIN Badge */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3 py-1.5 text-[11px] text-[#e8e4de] border border-white/10 rounded bg-[#141414] tracking-wider">
                  <span className="text-[#c9a96e] font-medium mr-1.5">GSTIN:</span> 36BKIPS0586G1ZT
                </span>
                <span className="px-3 py-1.5 text-[11px] text-[#e8e4de] border border-white/10 rounded bg-[#141414] tracking-wider">
                  <span className="text-[#c9a96e] font-medium mr-1.5">STATE:</span> Telangana (36)
                </span>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Scroll to Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#999999] tracking-wider">
            <p>
              &copy; {new Date().getFullYear()} ANJANI INFRA PROJECTS. ALL RIGHTS RESERVED.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-[#c9a96e] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>
    </>
  );
}