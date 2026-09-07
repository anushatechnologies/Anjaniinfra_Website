'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin, Phone, Mail, Clock, ChevronRight,
  ChevronLeft, Sparkles, Send, Building2, CheckCircle2
} from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

const HYDERABAD_SHOWROOMS = [
  {
    id: 'banjara-hills',
    area: 'BANJARA HILLS',
    name: 'Hyderabad Banjara Hills',
    address: 'Plot No: 42, 2nd Floor, Road No. 36, Beside Peddamma Temple Metro Station, Jubilee Hills / Banjara Hills, Hyderabad, Telangana - 500033',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Jubilee+Hills+Road+36+Hyderabad',
  },
  {
    id: 'gachibowli',
    area: 'GACHIBOWLI',
    name: 'Hyderabad Gachibowli',
    address: '2nd Floor, IT Corridor Plaza, Opposite Bio-Diversity Park, Gachibowli, Hyderabad, Telangana - 500081',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Gachibowli+Bio+Diversity+Park+Hyderabad',
  },
  {
    id: 'kompally',
    area: 'KOMPALLY',
    name: 'Secunderabad Kompally',
    address: 'Near Cineplanet Multiplex, Medchal Highway, Kompally, Secunderabad, Telangana - 500014',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Kompally+Cineplanet+Secunderabad',
  },
  {
    id: 'lb-nagar',
    area: 'LB NAGAR',
    name: 'Hyderabad LB Nagar',
    address: 'Metro Pillar 1420, Mansoorabad Main Road, Beside Kamineni Hospitals, LB Nagar, Hyderabad, Telangana - 500074',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=LB+Nagar+Metro+Pillar+1420+Hyderabad',
  },
  {
    id: 'kokapet',
    area: 'KOKAPET',
    name: 'Hyderabad Kokapet Experience Studio',
    address: 'Golden Mile Road, Near Outer Ring Road Junction, Kokapet, Gandipet, Hyderabad, Telangana - 500075',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Kokapet+Golden+Mile+Hyderabad',
  },
  {
    id: 'tellapur',
    area: 'TELLAPUR',
    name: 'Hyderabad Tellapur / Nallagandla',
    address: '1st Floor, Signature Towers, Main Road, Tellapur, Near Aparna Sarovar, Hyderabad, Telangana - 502032',
    phone: '+91 83888 99999',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Tellapur+Hyderabad',
  },
];

export default function ContactPage() {
  const [selectedArea, setSelectedArea] = useState<string>('ALL');
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const filteredShowrooms = selectedArea === 'ALL'
    ? HYDERABAD_SHOWROOMS
    : HYDERABAD_SHOWROOMS.filter((s) => s.area === selectedArea);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* ──────────────── 1. Hero Banner Matching Screenshot 1 ──────────────── */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-gray-900 flex items-end">
        {/* Background Showroom Reception Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85')`,
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        </div>

        {/* Content overlaid on reception desk */}
        <div className="relative max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 pb-10 sm:pb-14 z-10">
          <div className="max-w-3xl space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-sans">
              <span className="border-b-4 border-white inline-block pb-1">LEADING INTERIOR</span>
              <br />
              <span className="font-light text-gray-100 mt-2 inline-block">
                Design Company in Hyderabad
              </span>
            </h1>
          </div>
        </div>

        {/* Reception Desk Watermark slogan on right */}
        <div className="absolute right-6 sm:right-16 bottom-8 hidden md:block text-white/30 text-2xl lg:text-3xl font-serif italic pointer-events-none select-none">
          BringHappinessInside
        </div>
      </section>

      {/* ──────────────── 2. Contact The Best Home Interior Designers Matching Screenshot 2 ──────────────── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-sans tracking-tight">
            Contact The Best Home Interior Designers
          </h2>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 font-normal max-w-3xl mx-auto">
            At D&apos;LIFE we want to make finding the designs you love as easy &amp; exciting as possible. To provide stunning solutions to the residential market and to meet the ever-growing demands, we have expanded our showrooms across Hyderabad with presence in Banjara Hills, Jubilee Hills, Gachibowli, Kompally, LB Nagar, Kokapet, and Tellapur. Scroll down to find out more locations we serve. Contact us or walk into our showrooms and let our professional interior designers help you decorate your home and find furniture you&apos;ll love. We would love to help you with your next project!
          </p>
        </div>

        {/* State / City Tab Bar Matching Screenshot 2 */}
        <div className="mt-12 mb-10 border-b border-gray-200">
          <div className="flex items-center justify-center gap-2 sm:gap-6 overflow-x-auto no-scrollbar pb-3">
            <button
              onClick={() => setSelectedArea('ALL')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative ${
                selectedArea === 'ALL'
                  ? 'text-[#132B3E] font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              TELANGANA (ALL HYDERABAD)
              {selectedArea === 'ALL' && (
                <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-[#C5A059]" />
              )}
            </button>

            {['BANJARA HILLS', 'GACHIBOWLI', 'KOMPALLY', 'LB NAGAR', 'KOKAPET', 'TELLAPUR'].map((area) => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-3 py-2 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                  selectedArea === area
                    ? 'text-[#132B3E] font-bold'
                    : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                {area}
                {selectedArea === area && (
                  <div className="absolute bottom-[-13px] left-0 right-0 h-[3px] bg-[#C5A059]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Showrooms Cards Grid Matching Screenshot 2 (White clean cards with addresses) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredShowrooms.map((showroom) => (
            <div
              key={showroom.id}
              className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#2B5573] transition-colors">
                  {showroom.name}
                </h3>
                
                <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed min-h-[64px]">
                  {showroom.address}
                </p>

                <div className="pt-2 space-y-2 text-xs text-gray-600 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <a href={`tel:${showroom.phone.replace(/\s+/g, '')}`} className="font-semibold text-gray-800 hover:text-[#C5A059]">
                      {showroom.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <a href={`mailto:${showroom.email}`} className="truncate hover:text-[#C5A059] transition-colors">
                      {showroom.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{showroom.hours}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <a
                  href={showroom.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#2B5573] hover:underline flex items-center gap-0.5 uppercase tracking-wider"
                >
                  <span>Directions</span>
                  <ChevronRight className="w-3 h-3" />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/918388899999?text=${encodeURIComponent(
                      `Hi Anjani Infra, I would like to visit your ${showroom.name} experience centre.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors"
                  >
                    WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsEstimateOpen(true)}
                    className="px-3 py-1.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-[11px] font-black uppercase tracking-wider rounded transition-all shadow"
                  >
                    Book Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ──────────────── 3. Let's Work on Your Dream Home Interiors Matching Screenshot 3 & 4 ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F7] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          
          {/* Title Matching Screenshot 3 */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-sans tracking-tight">
              Let&apos;s Work on Your Dream Home Interiors
            </h2>
          </div>

          {/* 4-Photo Showcase Grid Matching Screenshot 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            
            {/* Top Left: Main Showroom Reception Walkway (Large) */}
            <div className="md:col-span-8 rounded-lg overflow-hidden shadow-md h-[280px] sm:h-[360px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Anjani Infra Hyderabad Showroom Reception"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Top Right: Glass Hallway with Indoor Plants */}
            <div className="md:col-span-4 rounded-lg overflow-hidden shadow-md h-[280px] sm:h-[360px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Showroom Indoor Garden Hallway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Left: Designer Consultation Office with Wood Slats & Yellow Armchairs (Screenshot 4) */}
            <div className="md:col-span-6 rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[320px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                alt="Executive Consultation Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Bottom Right: Conference & 3D Presentation Hall (Screenshot 4) */}
            <div className="md:col-span-6 rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[320px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80"
                alt="3D Presentation Conference Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

          {/* Big Centered Golden Button */}
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={() => setIsEstimateOpen(true)}
              className="inline-block px-8 sm:px-12 py-3.5 sm:py-4 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs sm:text-sm font-black uppercase tracking-wider rounded-md transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              Start Planning Your Home Interiors Now
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}
