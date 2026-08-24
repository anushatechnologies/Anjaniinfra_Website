'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, FileCheck2, Clock, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

export default function WhyUsPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const pillars = [
    {
      title: 'Zero-Accident Safety Standard (HSE)',
      description: 'Our sites follow strict OHSAS safety protocols, mandatory PPE, daily safety toolbox meetings, and ISO 45001 health management.',
      icon: HardHat
    },
    {
      title: 'Digital Measurement Book (MB) Transparency',
      description: 'Zero billing disputes. Every cubic meter of concrete, ton of steel, and sq.ft of joinery is digitally tracked and reconciled.',
      icon: FileCheck2
    },
    {
      title: 'ISO 9001:2015 Quality Systems',
      description: 'Third-party concrete cube strength testing, ultrasonic weld inspection for steel, and 100% material batch verification.',
      icon: ShieldCheck
    },
    {
      title: 'Guaranteed On-Time Project Delivery',
      description: 'Advanced CPM network scheduling and weekly milestone tracking ensure your commercial project is delivered on or ahead of time.',
      icon: Clock
    }
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#1A374D] text-white py-20 px-5 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" /> Why Anjani Infra
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white max-w-3xl">
            The Anjani Infra Advantage
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Discover why India's leading commercial developers and enterprise organizations choose Anjani Infra as their single-point EPC partner.
          </p>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-md space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-[#FCF9EB] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A374D]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#383735]/85 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-[#1A374D] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-serif font-bold text-white">Experience Zero-Friction Construction Execution</h3>
            <p className="text-xs text-white/80 mt-1">Book an architectural consultation and site inspection today.</p>
          </div>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="px-6 py-3 rounded-xl bg-[#C5A059] text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-[#d5b069] transition-all shrink-0"
          >
            Get Project Quote &rarr;
          </button>
        </div>
      </section>

      <QuickQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
