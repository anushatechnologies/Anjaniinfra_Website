'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { QuickQuoteModal } from './QuickQuoteModal';

export function Footer() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <footer id="contact" className="bg-[#1A374D] text-[#F6F4EE] border-t border-[#2B5573]">
        {/* Top CTA Band */}
        <div className="bg-gradient-to-r from-[#2B5573] to-[#1A374D] px-6 lg:px-12 py-10 border-b border-[#2B5573]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Ready to Start Your <em className="italic font-normal text-[#C5A059]">Dream Project?</em>
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1 font-light">
                Get a formal architectural proposal, site inspection, and BOQ estimate within 48 hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#DFBA73] text-[#1A374D] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
              >
                <Building2 className="w-4 h-4" />
                Request Site Proposal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2B5573]">

            {/* Column 1: Brand & Official Address (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Anjani Infra Logo"
                  className="h-12 w-12 object-contain rounded-full bg-white p-0.5 shadow-md ring-2 ring-[#C5A059]/40"
                />
                <div>
                  <span className="font-serif font-bold text-xl text-white tracking-tight block">ANJANI INFRA</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-extrabold">DREAM • BUILD • GROW</span>
                </div>
              </div>

              <p className="text-xs text-white/75 leading-relaxed max-w-md">
                ANJANI INFRA PROJECTS (NARSINGI) — India&apos;s premier Design &amp; Build EPC enterprise unifying Civil Engineering, Luxury Workplaces, and Exterior Glazing.
              </p>

              <div className="space-y-2.5 text-xs text-white/85 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>
                    <strong>Corporate HQ:</strong> BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT, NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD, TELANGANA - 500075 (Code: 36)
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Phone:</strong> +91 83888 99999</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span><strong>Email:</strong> anjaniinfra4@gmail.com</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-lg bg-[#2B5573]/40 border border-[#C5A059]/40 text-[11px] text-[#C5A059] font-mono font-bold mt-1">
                  GSTIN / UIN: 36BKIPS0586G1ZT
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links (3 cols) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">Core Navigation</h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                {[
                  { label: 'Company Overview & About Us', href: '/about' },
                  { label: 'Turnkey EPC Services', href: '/services' },
                  { label: 'Civil RCC Superstructures', href: '/services' },
                  { label: 'Luxury Workplace Fitout', href: '/services' },
                  { label: 'Exterior Glazing & Facades', href: '/services' },
                  { label: 'Landmark Portfolio Gallery', href: '/projects' },
                  { label: 'Why Choose Anjani Infra', href: '/why-us' },
                  { label: 'Contact & Site Inspection', href: '/contact' },
                ].map(item => (
                  <li key={item.label}>
                    <Link href={item.href} className="hover:text-[#C5A059] transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60 group-hover:bg-[#C5A059] transition-colors shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quality & Certification (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">ISO Compliance & Standards</h4>
              <p className="text-xs text-white/75 leading-relaxed">
                All projects execute under ISO 9001:2015 Quality Systems and Zero-Accident OHSAS Health &amp; Safety Compliance with digital Measurement Book (MB) reconciliations.
              </p>

              <div className="space-y-2 pt-2">
                {['ISO 9001:2015 Quality Management System', 'ISO 45001 Occupational Health & Safety', 'Zero-Accident Safety Compliance'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Legal Band */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
            <div>© {new Date().getFullYear()} ANJANI INFRA PROJECTS (NARSINGI). All rights reserved.</div>
            <div>Designed &amp; Engineered for Commercial Construction Excellence</div>
          </div>
        </div>
      </footer>

      {/* Quote Proposal Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
