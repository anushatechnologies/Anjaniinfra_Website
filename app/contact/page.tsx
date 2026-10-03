import React from 'react';
import type { Metadata } from 'next';
import {
  ContactShowroomFilter,
  ContactEstimateButton,
  Showroom,
} from '@/components/ContactShowroomFilter';

export const metadata: Metadata = {
  title: 'Contact Us & Showrooms | Banjara Hills, Gachibowli, Tellapur | Anjani Infra',
  description:
    'Visit Anjani Infra experience centres across Hyderabad: Banjara Hills, Gachibowli, Kompally, LB Nagar, Kokapet, and Tellapur. Call +91 98480 88998 for free consultation.',
  keywords: [
    'Anjani Infra Contact',
    'Interior Showroom Banjara Hills',
    'Interior Experience Centre Gachibowli',
    'Interior Designers Hyderabad Contact',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/contact',
  },
};

const HYDERABAD_SHOWROOMS: Showroom[] = [
  {
    id: 'banjara-hills',
    area: 'BANJARA HILLS',
    name: 'Hyderabad Banjara Hills',
    address:
      'Plot No: 42, 2nd Floor, Road No. 36, Beside Peddamma Temple Metro Station, Jubilee Hills / Banjara Hills, Hyderabad, Telangana - 500033',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Jubilee+Hills+Road+36+Hyderabad',
  },
  {
    id: 'gachibowli',
    area: 'GACHIBOWLI',
    name: 'Hyderabad Gachibowli',
    address:
      '2nd Floor, IT Corridor Plaza, Opposite Bio-Diversity Park, Gachibowli, Hyderabad, Telangana - 500081',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Gachibowli+Bio+Diversity+Park+Hyderabad',
  },
  {
    id: 'kompally',
    area: 'KOMPALLY',
    name: 'Secunderabad Kompally',
    address:
      'Near Cineplanet Multiplex, Medchal Highway, Kompally, Secunderabad, Telangana - 500014',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Kompally+Cineplanet+Secunderabad',
  },
  {
    id: 'lb-nagar',
    area: 'LB NAGAR',
    name: 'Hyderabad LB Nagar',
    address:
      'Metro Pillar 1420, Mansoorabad Main Road, Beside Kamineni Hospitals, LB Nagar, Hyderabad, Telangana - 500074',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=LB+Nagar+Metro+Pillar+1420+Hyderabad',
  },
  {
    id: 'kokapet',
    area: 'KOKAPET',
    name: 'Hyderabad Kokapet Experience Studio',
    address:
      'Golden Mile Road, Near Outer Ring Road Junction, Kokapet, Gandipet, Hyderabad, Telangana - 500075',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Kokapet+Golden+Mile+Hyderabad',
  },
  {
    id: 'tellapur',
    area: 'TELLAPUR',
    name: 'Hyderabad Tellapur / Nallagandla',
    address:
      '1st Floor, Signature Towers, Main Road, Tellapur, Near Aparna Sarovar, Hyderabad, Telangana - 502032',
    phone: '+91 98480 88998',
    email: 'anjaniinfra4@gmail.com',
    hours: '10:00 AM - 8:30 PM (All 7 Days)',
    mapUrl: 'https://maps.google.com/?q=Tellapur+Hyderabad',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-gray-900 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        </div>

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

        <div className="absolute right-6 sm:right-16 bottom-8 hidden md:block text-white/30 text-2xl lg:text-3xl font-serif italic pointer-events-none select-none">
          BringHappinessInside
        </div>
      </section>

      {/* ──────────────── 2. Contact The Best Home Interior Designers ──────────────── */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-sans tracking-tight">
            Contact The Best Home Interior Designers
          </h2>
          <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 font-normal max-w-3xl mx-auto">
            At Anjani Infra we want to make finding the designs you love as easy &amp; exciting as possible. To provide stunning solutions to the residential market and to meet the ever-growing demands, we have expanded our showrooms across Hyderabad with presence in Banjara Hills, Jubilee Hills, Gachibowli, Kompally, LB Nagar, Kokapet, and Tellapur. Scroll down to find out more locations we serve. Contact us or walk into our showrooms and let our professional interior designers help you decorate your home and find furniture you&apos;ll love. We would love to help you with your next project!
          </p>
        </div>

        <ContactShowroomFilter showrooms={HYDERABAD_SHOWROOMS} />
      </section>

      {/* ──────────────── 3. Let's Work on Your Dream Home Interiors ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F7] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-gray-900 font-sans tracking-tight">
              Let&apos;s Work on Your Dream Home Interiors
            </h2>
          </div>

          {/* 4-Photo Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            <div className="md:col-span-8 rounded-lg overflow-hidden shadow-md h-[280px] sm:h-[360px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Anjani Infra Hyderabad Showroom Reception"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="md:col-span-4 rounded-lg overflow-hidden shadow-md h-[280px] sm:h-[360px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                alt="Showroom Indoor Garden Hallway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="md:col-span-6 rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[320px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                alt="Executive Consultation Room"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="md:col-span-6 rounded-lg overflow-hidden shadow-md h-[260px] sm:h-[320px] bg-gray-200 group relative">
              <img
                src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80"
                alt="3D Presentation Conference Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="text-center pt-4">
            <ContactEstimateButton />
          </div>
        </div>
      </section>
    </main>
  );
}
