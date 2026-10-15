import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior & Architectural Services | Anjani Infra Projects',
  description:
    'Explore comprehensive luxury interior design, factory joinery production, villa architecture, corporate offices, and civil glazing services across Hyderabad.',
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/services',
  },
};

const services = [
  {
    num: '01',
    title: 'Turnkey Interior Projects',
    href: '/turnkey-interior-projects',
    image: '/contemporary-interior-hyderabad.jpg',
    desc: 'Complete end-to-end execution — space planning, 3D visualization, material procurement, civil modifications, and turnkey handover with 40-day delivery guarantee.',
    highlights: ['Single-point accountability', 'German CNC factory joinery', '10-Year warranty'],
  },
  {
    num: '02',
    title: 'Luxury Residential & Villa Architecture',
    href: '/luxury-residential-villa-architecture',
    image: '/personalized-dream-home.jpg',
    desc: 'Bespoke interior architecture for duplex penthouses, private villas, and gated residences tailored to your lifestyle and architectural aspirations.',
    highlights: ['Double-height living volumes', 'Italian marble precision', 'Private sanctuary suites'],
  },
  {
    num: '03',
    title: 'Corporate & Commercial Workplaces',
    href: '/corporate-commercial-workplaces',
    image: '/corporate-workplace-interior.jpg',
    desc: 'High-performance corporate office interiors, executive suites, conference facilities, and experience centers engineered for agility and productivity.',
    highlights: ['Acoustic glass partitions', 'LEED compliance fitouts', 'Zero-downtime execution'],
  },
  {
    num: '04',
    title: 'Modular Kitchens & Wardrobes',
    href: '/modular-kitchens-wardrobes',
    image: '/customized-home-kitchen.jpg',
    desc: 'Direct factory-manufactured German joinery, BWP marine grade cabinetry, sintered stone countertops, and motorized sliding wardrobe solutions.',
    highlights: ['100% BWP Marine plywood', 'Blum & Hettich hardware', 'Laser edge-banding'],
  },
  {
    num: '05',
    title: 'General Safety & EHS',
    href: '/safety-ehs',
    image: '/safety-ehs-professional.jpg',
    desc: 'Certified Environmental Health & Safety governance, zero-accident execution, scaffold engineering, and statutory occupational safety on every site.',
    highlights: ['Zero-accident safety mandate', 'Full-time certified EHS officers', 'ISO 45001 compliance'],
  },
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#999999]">
            <Link href="/" className="hover:text-[#c9a96e] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#c9a96e]">SERVICES</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fafaf8] font-normal leading-tight">
              Comprehensive Architectural &amp; <span className="italic text-[#c9a96e]">Interior Services</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#d6d3cd] font-light leading-relaxed">
              Explore our turnkey services designed to bring world-class precision, custom engineering, and enduring elegance to every residential and commercial project in Hyderabad.
            </p>
          </div>
        </div>

        {/* Services List (Designing-type Cards) */}
        <div className="space-y-8">
          {services.map((item) => (
            <div
              key={item.num}
              className="rounded-2xl bg-[#121212] border border-white/10 hover:border-[#c9a96e]/60 transition-all duration-300 shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Content Area */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e]">
                      SERVICE {item.num}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#fafaf8] font-normal">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#d6d3cd] font-light leading-relaxed">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {item.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#e8e4de]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c9a96e] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#c9a96e] text-black text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#dfc698] transition-all shadow-lg"
                    >
                      <span>VIEW FULL DETAILS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Image Area: High Clarity */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-zinc-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center brightness-105 contrast-[1.02]"
                  />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
