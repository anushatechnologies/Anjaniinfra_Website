import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Master Conceptual Design & Planning | Anjani Infra Projects',
  description:
    'At Anjani Infra Projects, we specialize in delivering comprehensive Master Concept Design & Planning solutions that transform vision into viable layouts.',
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/master-conceptual-design',
  },
};

export default function MasterConceptualDesignPage() {
  const whatsappUrl =
    'https://wa.me/919848088998?text=' +
    encodeURIComponent(
      'Hello Anjani Infra Projects, I would like to consult regarding Master Concept Design & Planning for my property.'
    );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#999999]">
          <Link href="/" className="hover:text-[#c9a96e] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/design-and-build" className="hover:text-[#c9a96e] transition-colors">
            DESIGNING
          </Link>
          <span>/</span>
          <span className="text-[#c9a96e]">MASTER CONCEPTUAL DESIGN &amp; PLANNING</span>
        </div>

        {/* Content Card with Only the Exact Requested Text */}
        <div className="p-8 sm:p-12 md:p-14 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl space-y-7">
          
          <p className="font-serif text-xl sm:text-2xl text-[#fafaf8] leading-relaxed font-normal">
            At <strong className="text-[#c9a96e] font-semibold">Anjani Infra Projects</strong>, we specialize in delivering comprehensive Master Concept Design &amp; Planning solutions that transform vision into viable layouts.
          </p>

          <div className="space-y-4 text-base sm:text-lg text-[#d6d3cd] leading-relaxed font-light">
            <p>
              Our process begins with an in-depth site survey and spatial analysis, ensuring every concept is grounded in practicality and tailored to the unique requirements of the space.
            </p>
            
            <p>
              Whether it&apos;s residential apartments, corporate offices, commercial establishments, industrial facilities, or individual projects, we craft conceptual designs that balance aesthetics, functionality, and feasibility.
            </p>

            <p>
              By integrating thoughtful circulation patterns, access loops, and contextual elements, we help our clients freeze the master layout—setting a strong foundation for detailed architectural and engineering development.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="pt-4 border-t border-white/10">
            <div className="p-6 rounded-xl bg-black/50 border border-[#c9a96e]/30">
              <p className="font-serif text-lg sm:text-xl text-[#fafaf8] leading-relaxed italic">
                &ldquo;With <span className="text-[#c9a96e] font-semibold not-italic">Anjani Infra Projects</span>, your concept isn&apos;t just a sketch—it&apos;s a strategic blueprint ready to evolve into reality.&rdquo;
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded bg-[#c9a96e] text-black text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#dfc698] transition-all shadow-xl"
            >
              <span>CONNECT ON WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="tel:+919848088998"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-[#c9a96e]/40 hover:border-[#c9a96e] text-[#fafaf8] hover:text-[#c9a96e] text-xs font-sans font-medium tracking-widest uppercase transition-all bg-black/40"
            >
              <Phone className="w-4 h-4 text-[#c9a96e]" />
              <span>+91 98480 88998</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
