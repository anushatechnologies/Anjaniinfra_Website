'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Award, ShieldCheck, Users, CheckCircle2, ArrowRight, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

export default function AboutPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#1A374D] text-white py-20 px-5 lg:px-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" /> Corporate Profile & Excellence
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white max-w-3xl">
            Building Tomorrow with Uncompromising Engineering Integrity
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Anjani Infra Projects (Narsingi) is India's premier Design & Build EPC enterprise unifying Civil RCC Superstructures, Luxury Corporate Fitouts, and High-Performance Glazing Envelopes under one roof.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-12 space-y-12">
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D]">
              15+ Years of Engineering Masterclass Across India
            </h2>
            <p className="text-sm text-[#383735]/85 leading-relaxed">
              Founded on the principles of transparency, technical accuracy, and zero-accident safety, Anjani Infra has delivered over 2.5 Million Sq.Ft. of Grade-A commercial infrastructure, IT campuses, and luxury corporate headquarters.
            </p>
            <p className="text-sm text-[#383735]/85 leading-relaxed">
              Our integrated EPC model eliminates multi-vendor friction by handling deep foundation piling, heavy RCC superstructures, custom millwork joinery, and structural facade glazing in-house with digital Measurement Book (MB) reconciliations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#BFBFBF]/60 shadow-xs">
                <div className="text-2xl font-serif font-black text-[#1A374D]">2.5M+ Sq.Ft.</div>
                <div className="text-xs text-[#383735]/70 font-semibold">Handled & Delivered</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#BFBFBF]/60 shadow-xs">
                <div className="text-2xl font-serif font-black text-[#C5A059]">500+</div>
                <div className="text-xs text-[#383735]/70 font-semibold">Expert Engineers & Staff</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-96">
            <img
              src="/projects/proj1.jpg"
              alt="Anjani Infra Civil Construction Site"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Corporate HQ Info & Compliance */}
        <div className="bg-white p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-md space-y-6">
          <h3 className="text-xl font-serif font-bold text-[#1A374D] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" /> Corporate Governance & Registration
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#383735]">
            <div className="p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30 space-y-1">
              <div className="font-extrabold text-[#1A374D] uppercase text-[10px] tracking-wider text-[#C5A059]">Corporate HQ Address</div>
              <div className="font-bold text-[#1A374D] leading-snug">BLOCK-C, FLAT NO.1604, JAYABHERI THE SUMMIT, NANAKRAMGUDA SERVICE ROAD, NARSINGI, HYDERABAD, TELANGANA - 500075</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30 space-y-1">
              <div className="font-extrabold text-[#1A374D] uppercase text-[10px] tracking-wider text-[#C5A059]">GSTIN / Registration</div>
              <div className="font-mono font-bold text-[#1A374D]">36BKIPS0586G1ZT</div>
              <div className="text-[10px] text-[#383735]/70">State Code: 36 (Telangana)</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FCF9EB] border border-[#C5A059]/30 space-y-1">
              <div className="font-extrabold text-[#1A374D] uppercase text-[10px] tracking-wider text-[#C5A059]">Official Communications</div>
              <div className="font-bold text-[#1A374D]">anjaniinfra4@gmail.com</div>
              <div className="font-mono font-bold text-[#1A374D]">+91 83888 99999</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#1A374D] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-serif font-bold text-white">Partner with Anjani Infra for Your Next Landmark</h3>
            <p className="text-xs text-white/80 mt-1">Get an architectural consultation, BOQ cost estimate, and site inspection schedule.</p>
          </div>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#C5A059] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-[#d5b069] transition-all shrink-0"
          >
            Request Proposal &rarr;
          </button>
        </div>
      </section>

      <QuickQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
