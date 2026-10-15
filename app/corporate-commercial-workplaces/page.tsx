import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Phone,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate & Commercial Workplaces | Anjani Infra Projects',
  description:
    'High-performance corporate office interiors, executive suites, conference boardrooms, and commercial experience centers in Hyderabad.',
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/corporate-commercial-workplaces',
  },
};

const workplacePoints = [
  'High-Acoustic Glass Demountable Partitions & Private Executive Cabins',
  'Collaborative Open Desking with Ergonomic Power & Data Management',
  'High-Tech Conference Facilities with Unified Video Conferencing Integration',
  'Townhall Lounges, Executive Boardrooms & Wellness Breakout Zones',
  'LEED / IGBC Energy Compliance with Zero Downtime Turnkey Fitouts',
];

export default function CorporateCommercialWorkplacesPage() {
  const whatsappUrl =
    'https://wa.me/919848088998?text=' +
    encodeURIComponent(
      'Hello Anjani Infra Projects, I would like to consult regarding Corporate & Commercial Workplaces.'
    );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-28 pb-16 lg:pt-36 lg:pb-20">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#999999]">
          <Link href="/" className="hover:text-[#c9a96e] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#c9a96e] transition-colors">
            SERVICES
          </Link>
          <span>/</span>
          <span className="text-[#c9a96e]">CORPORATE &amp; COMMERCIAL WORKPLACES</span>
        </div>

        {/* Combined Unified Card: Image & Content seamlessly integrated without separate parts */}
        <div className="rounded-2xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Content Area */}
            <div className="lg:col-span-6 p-8 sm:p-10 md:p-12 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <p className="font-serif text-xl sm:text-2xl text-[#fafaf8] leading-relaxed font-normal">
                  At <strong className="text-[#c9a96e] font-semibold">Anjani Infra Projects</strong>, we design and build agile, high-performance corporate office interiors that elevate company culture and productivity.
                </p>

                <div className="space-y-4 text-sm sm:text-base text-[#d6d3cd] leading-relaxed font-light">
                  <p>
                    From global tech development centers in HITEC City to headquarters in the Financial District, modern workplaces demand precision acoustics, flexible modular seating, and sophisticated brand expressions.
                  </p>
                  
                  <p>
                    Our integrated commercial studio delivers turnkey fitouts spanning structural space planning, acoustic ceiling baffles, bespoke executive boardroom joinery, and complete MEP infrastructure with minimum disruption and guaranteed handover dates.
                  </p>
                </div>

                {/* Integrated Scope Points */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-serif text-lg text-[#fafaf8] font-medium">
                    Our corporate workplace scope includes:
                  </h2>

                  <ul className="space-y-2.5 pt-1">
                    {workplacePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#e8e4de]">
                        <div className="w-4 h-4 rounded-full bg-[#c9a96e]/15 border border-[#c9a96e]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#c9a96e]">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Closing Statement */}
                <div className="pt-2">
                  <p className="font-serif text-sm sm:text-base text-[#e8e4de] leading-relaxed italic">
                    &ldquo;With <span className="text-[#c9a96e] font-semibold not-italic">Anjani Infra Projects</span>, commercial spaces become dynamic environments that inspire collaboration and drive enterprise success.&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-[#c9a96e] text-black text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#dfc698] transition-all shadow-xl"
                >
                  <span>CONNECT ON WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="tel:+919848088998"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-[#c9a96e]/40 hover:border-[#c9a96e] text-[#fafaf8] hover:text-[#c9a96e] text-xs font-sans font-medium tracking-widest uppercase transition-all bg-black/40"
                >
                  <Phone className="w-4 h-4 text-[#c9a96e]" />
                  <span>+91 98480 88998</span>
                </a>
              </div>

            </div>

            {/* Combined Image Area: Crystal-Clear, High Definition */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full overflow-hidden bg-zinc-950">
              <img
                src="/corporate-workplace-interior.jpg"
                alt="Corporate & Commercial Workplaces - Anjani Infra Projects"
                className="w-full h-full object-cover object-center brightness-105 contrast-[1.02]"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
