'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle, Building2, ArrowUp } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

export function Footer() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* ── ANJANI INFRA CORPORATE FOOTER — matching reference screenshot ── */}
      <footer id="contact" className="corporate-footer bg-[#132B3E] text-gray-200 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-12 pt-10 sm:pt-14 pb-6 sm:pb-8">
          
          {/* Main Responsive Grid: 1 col on mobile, 2 cols on tablet, 12 cols on desktop */}
          <div className="footer-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pb-10 sm:pb-12">

            {/* Column 1: Brand & Contact Details (Tablet: 2 cols, Desktop: 5 cols) */}
            <div className="footer-brand-column md:col-span-2 lg:col-span-5 space-y-4">
              
              {/* Logo Header: Brand Logo Badge */}
              <Link href="/" className="footer-brand-logo inline-flex items-center group">
                <div className="bg-white p-1.5 rounded shadow-sm shrink-0 flex items-center justify-center">
                  <img
                    src="/anjani-logo.png"
                    alt="Anjani Infra Projects"
                    className="footer-emblem h-14 sm:h-16 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Company Description */}
              <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed max-w-md">
                ANJANI INFRA PROJECTS (NARSINGI) — India&apos;s premier Design &amp; Build EPC
                enterprise unifying Civil Engineering, Luxury Workplaces, and Exterior Glazing.
              </p>

              {/* Corporate HQ */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-[13px] text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    <strong className="text-white">Corporate HQ:</strong> BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT,
                    NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD, TELANGANA
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <p>
                    <strong className="text-white">Phone:</strong>{' '}
                    <a href="tel:+919848088998" className="hover:text-[#C5A059] transition-colors">
                      +91 98480 88998
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <p>
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:anjaniinfra4@gmail.com" className="hover:text-[#C5A059] transition-colors">
                      anjaniinfra4@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* GSTIN / UIN Pill */}
              <div className="pt-1 flex flex-col gap-1.5">
                <span className="inline-block px-3.5 py-1.5 text-[11px] font-semibold text-gray-200 border border-gray-500/60 rounded-lg bg-white/5 tracking-wider">
                  GSTIN / UIN: 36BKIPS0586G1ZT
                </span>
                <span className="inline-block px-3.5 py-1.5 text-[11px] font-semibold text-gray-200 border border-gray-500/60 rounded-lg bg-white/5 tracking-wider">
                  State Name: Telangana, Code: 36
                </span>
              </div>
            </div>

            {/* Column 2: CORE NAVIGATION (Tablet: 1 col, Desktop: 3 cols) */}
            <div className="footer-nav-column md:col-span-1 lg:col-span-3 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059]">
                CORE NAVIGATION
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-gray-300">
                {[
                  { label: 'Company Overview & About Us', href: '/company' },
                  { label: 'Turnkey EPC Services', href: '/design-and-build' },
                  { label: 'Civil RCC Superstructures', href: '/customized-interiors' },
                  { label: 'Luxury Workplace Fitout', href: '/products/living-room' },
                  { label: 'Exterior Glazing & Facades', href: '/products/decorative-units' },
                  { label: 'Landmark Portfolio Gallery', href: '/gallery' },
                  { label: 'Why Choose Anjani Infra', href: '/company' },
                  { label: 'Contact & Site Inspection', href: '/contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-[#C5A059] transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: ISO COMPLIANCE & STANDARDS (Tablet: 1 col, Desktop: 4 cols) */}
            <div className="footer-compliance-column md:col-span-1 lg:col-span-4 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#C5A059]">
                ISO COMPLIANCE &amp; STANDARDS
              </h4>
              <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                All projects execute under ISO 9001:2015 Quality Systems and Zero-Accident OHSAS
                Health &amp; Safety Compliance with digital Measurement Book (MB) reconciliations.
              </p>

              {/* ISO Badges */}
              <div className="space-y-3 pt-2">
                {[
                  'ISO 9001:2015 Quality Management System',
                  'ISO 45001 Occupational Health & Safety',
                  'Zero-Accident Safety Compliance',
                ].map((std) => (
                  <div key={std} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-200">
                    <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Bar — responsive column on mobile, row on tablet/desktop */}
          <div className="footer-bottom-bar pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            
            {/* Copyright */}
            <div className="text-center md:text-left text-[11px] sm:text-xs">
              © 2026 ANJANI INFRA PROJECTS (NARSINGI). All rights reserved.
            </div>

            {/* Right Group: GET FREE PROPOSAL + Tagline + Scroll to top */}
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto">
              
              {/* Tagline */}
              <span className="text-[11px] text-gray-400 hidden xl:inline">
                Designed &amp; Engineered for Commercial Construction Excellence
              </span>

              {/* Golden Get Free Proposal Button */}
              <button
                type="button"
                onClick={() => setIsEstimateOpen(true)}
                className="footer-proposal-btn inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:scale-105 cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                <span>GET FREE PROPOSAL</span>
              </button>

              {/* Scroll to Top Circle Button */}
              <button
                type="button"
                onClick={scrollToTop}
                className="scroll-to-top-btn w-9 h-9 rounded-full bg-[#1b3d58] hover:bg-[#C5A059] hover:text-[#132B3E] text-white flex items-center justify-center transition-colors shadow-md cursor-pointer shrink-0"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}