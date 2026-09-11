'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Palette,
  Layout,
  Maximize2
} from 'lucide-react';
import { FloatingActions } from '@/components/FloatingActions';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';
import { ConsultationModal } from '@/components/ConsultationModal';

const categoryTiles = [
  {
    title: 'LIVING',
    titleColor: 'text-white',
    span: 'col-span-12',
    image: '/category-living.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/living-room',
  },
  {
    title: 'BEDROOM',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-5',
    image: '/category-bedroom.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/bedroom',
  },
  {
    title: 'PARTITION',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-3',
    image: '/category-partition.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/decorative-units',
  },
  {
    title: 'DINING',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-4',
    image: '/category-dining.jpg',
    height: 'h-72 sm:h-96 md:h-[420px]',
    href: '/products/dining-room',
  },
  {
    title: 'KITCHEN',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-7',
    image: '/category-kitchen.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/kitchen',
  },
  {
    title: 'KIDS ROOM',
    titleColor: 'text-white',
    span: 'col-span-12 sm:col-span-5',
    image: '/category-kids-room.jpg',
    height: 'h-64 sm:h-80 md:h-[380px]',
    href: '/products/kids-room',
  },
];

const whyCustomizedPoints = [
  'Creating rather than accepting what is available ensures maximum satisfaction of users.',
  'Clients have the opportunity to choose their preferred style, materials and decor.',
  'Interaction between designer and client at each phase till finalization ensures scope for improvement to meet the objectives of customized home interiors.',
  'Clients get to select accessories and fittings and create cabinets accordingly.',
  'Enhance storage capabilities and make the most of difficult spaces.',
  'Enables you to have furniture with a suitable color that blends with your color scheme.',
  'Plan and modify interior works as per budget. Clients get to study the estimate and drawings and alter plans during the design stage as per budget.',
];

export default function CustomizedInteriorsPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Sticky Right-Side Action Widgets & Modals */}
      <FloatingActions
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER: Long-lasting Home Interiors Tailored to Fulfill Your Needs */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[420px] sm:h-[540px] lg:h-[640px] bg-zinc-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Long-lasting Home Interiors Tailored to Fulfill Your Needs"
          className="w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent flex items-end sm:items-center pb-12 sm:pb-0 px-6 sm:px-12 lg:px-20">
          <div className="max-w-2xl text-white space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight drop-shadow-lg leading-tight">
              Long-lasting Home Interiors
            </h1>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-light text-white/95 tracking-wide drop-shadow-md border-b-2 border-white/40 pb-2 inline-block">
              Tailored to Fulfill Your Needs
            </p>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 2. CUSTOM-MADE HOME INTERIORS (NARRATIVE) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-[1200px] mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gray-900 font-sans">
          Custom-Made Home Interiors
        </h2>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify sm:text-center">
          &ldquo;Made for you&rdquo; may be an accurate phrase to express what we do in interiors. We have been designing and executing exquisite home interiors since 2004. Custom-made interior is the best way to ensure that modular kitchen, wardrobes and other furniture perfectly fits to the spaces. Our interior designers possess impeccable ability to understand client&apos;s requirements and provide the best space planning for a house or flat. Anjani Infra&apos;s fully equipped modular kitchen is distinct with its unique design and most modern features. We plan and make contemporary style furniture for bedrooms, living and dining rooms as well. Innovative ideas, creative designs and ability to deliver the promises on time enables us to retain the leadership in this field.
        </p>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 3. VISUAL CATEGORY GRID: LIVING, BEDROOM, PARTITION, DINING, KITCHEN, KIDS ROOM */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-4 sm:gap-5">
          {categoryTiles.map((tile) => (
            <Link
              key={tile.title}
              href={tile.href || '#'}
              className={`${tile.span} relative ${tile.height} rounded-lg overflow-hidden group cursor-pointer shadow-sm block`}
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 flex items-center justify-center p-4">
                <h3
                  className={`text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider drop-shadow-xl group-hover:tracking-widest transition-all ${tile.titleColor}`}
                >
                  {tile.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 4. WHY CUSTOMIZED HOME INTERIORS? */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200 mt-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image: Kitchen Island Counter (6 cols) */}
            <div className="lg:col-span-6 h-[400px] sm:h-[500px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/customized-home-kitchen.jpg"
                alt="Customized Luxury Modular Kitchen and Dining Island"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Content: Bullet Points (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Why Customized Home Interiors?
              </h2>

              <ul className="space-y-3.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
                {whyCustomizedPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  Get 100% Customized Interiors
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 5. GIVE A PERSONALIZED TOUCH TO YOUR DREAM HOME */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF9FA] border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Give a Personalized Touch to Your Dream Home
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                We bring customization to your fingertips, from the initial consultation through the end process; our team of interior designers will provide you with all the support and advice so you get a personalized touch in your dream home. Over the years, we have worked with 14000+ clients and we provide interior design and furnishing services, which are more than just about styles and finishes. Anjani Infra provides you a fully bespoke service on home interior design to your brief. All our products are custom made from the finest materials. With respect for the past and an eye on the future, our high level of machinery and quality checks help you realize your dream home interiors with fully customized products and quality.
              </p>

              <div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  Reach Our Expert Designer
                </button>
              </div>
            </div>

            {/* Right Image: Personalized Dream Home Living Interior (6 cols) */}
            <div className="lg:col-span-6 h-[360px] sm:h-[480px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/personalized-dream-home.jpg"
                alt="Personalized Dream Home Interior with Double-Height Ceiling and Curved Velvet Seating"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* 6. PROJECT HANDOVER SECTION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content (6 cols) */}
            <div className="lg:col-span-6 space-y-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 font-sans leading-tight">
                Project Handover
              </h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    We are totally committed to on-time &amp; accurate completion of every project.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    Our team ensures no debris, noise or disturbance is caused and also guarantees the safety or welfare of the surrounding neighbors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059] shrink-0 mt-2" />
                  <span>
                    Our team will leave your site only after getting the satisfaction report.
                  </span>
                </li>
              </ul>

              <div>
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  Deal Directly with the Company
                </button>
              </div>
            </div>

            {/* Right Image: Project Handover (6 cols) */}
            <div className="lg:col-span-6 h-[380px] sm:h-[480px] rounded-lg overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="/project-handover-interior.jpg"
                alt="Project Handover - Anjani Infra Lead Presenting Keys to Homeowners in Completed Luxury Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
