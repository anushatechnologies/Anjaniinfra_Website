'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Layers, Compass, HardHat } from 'lucide-react';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const servicesList = [
    {
      id: 'civil',
      title: 'Civil Construction & Superstructures',
      subtitle: 'Heavy RCC Frameworks, Post-Tensioned Slabs & Deep Foundations',
      description: 'From deep piling foundation engineering to rooftop high-rise superstructures, our civil division executes M50 grade concrete pumping, AAC masonry, and post-tensioned floor plates with zero-accident HSE compliance and digital MB tracking.',
      features: [
        'Deep Bored Piling & Retaining Wall Engineering',
        'Post-Tensioned Slabs & Heavy RCC Superstructures',
        'AAC Masonry & Structural Steel PEB Frameworks',
        'Digital Measurement Book (MB) Reconciliation',
        'Seismic Zone Zone-V Safety Compliance'
      ],
      image: '/projects/proj1.jpg'
    },
    {
      id: 'interior',
      title: 'Luxury Corporate Interior Fitout',
      subtitle: 'Corporate Campuses, CXO Executive Suites & Hospitality Spaces',
      description: 'Custom acoustic wall paneling, Italian Statuario marble flooring, ergonomic modular workstation systems, executive boardroom suites, cafeteria hubs, and smart IoT HVAC integration for global MNC tech campuses.',
      features: [
        'Custom CNC Veneer Millwork & Acoustic Wall Cladding',
        'Italian Marble & Engineered Hardwood Flooring',
        'CXO Executive Suites & Boardroom Table Assemblies',
        'Smart Motion-Sensor Lutron Lighting & HVAC',
        'Modular Workstation Joinery & Privacy Screens'
      ],
      image: '/projects/proj3.jpg'
    },
    {
      id: 'facade',
      title: 'Exterior Curtain Wall & Structural Glazing',
      subtitle: 'Unitized Glass Facades, ACP Cladding & Entrance Atriums',
      description: 'High-performance 28mm Low-E double glazed unitized curtain wall envelopes engineered for wind pressure resistance (180 km/h) and acoustic STC 45dB insulation. Includes spider glazing stainless steel tension rod assemblies.',
      features: [
        '28mm Low-E Double Glazed Unitized Curtain Wall Modules',
        '4mm PVDF Coated Metallic ACP Louver Cladding',
        'Stainless Steel Spider Glazing Entrance Canopy',
        'Wind Tunnel Tested for 180 km/h Air Velocities',
        'Structural Silicone Weather Seals'
      ],
      image: '/projects/proj4.jpg'
    }
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#1A374D] text-white py-20 px-5 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" /> End-to-End Multidisciplinary Execution
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white max-w-3xl">
            Unified EPC Contracting Capabilities
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Eliminate multi-vendor friction. Anjani Infra combines Civil Superstructure, Luxury Interior Fitout, and Exterior Facade under one unified project management roof.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-12 space-y-12">
        {servicesList.map((service, index) => (
          <div key={service.id} className="bg-white p-8 sm:p-10 rounded-3xl border border-[#BFBFBF]/60 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className={`lg:col-span-7 space-y-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <span className="px-3 py-1 rounded-full bg-[#FCF9EB] text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest border border-[#C5A059]/40">
                0{index + 1} DISCIPLINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D]">
                {service.title}
              </h2>
              <p className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                {service.subtitle}
              </p>
              <p className="text-sm text-[#383735]/85 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 pt-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-[#1A374D]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-6 py-2.5 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Inquire For {service.title.split(' ')[0]} &rarr;
                </button>
              </div>
            </div>

            <div className={`lg:col-span-5 h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      <QuickQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
