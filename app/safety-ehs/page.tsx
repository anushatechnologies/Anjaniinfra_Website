import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowUpRight,
  Phone,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'General Safety & EHS Standards | Anjani Infra Projects',
  description:
    'Zero-incident Environmental Health & Safety (EHS) protocols, certified on-site safety officers, and quality compliance across Hyderabad infrastructure projects.',
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/safety-ehs',
  },
};

const safetyPoints = [
  'Zero-Accident Safety Protocol & Mandatory On-Site Personal Protective Equipment (PPE)',
  'Certified Full-Time Environmental Health & Safety (EHS) Officers on Every Site',
  'Comprehensive Fire Prevention, Electrical Isolation & Chemical Storage Protocols',
  'Rigorous Scaffold Load Testing, Fall Arrest Harnesses & Edge Protection Systems',
  'ISO 45001 & ISO 14001 Compliant Environmental & Occupational Health Governance',
];

export default function SafetyEhsPage() {
  const whatsappUrl =
    'https://wa.me/919848088998?text=' +
    encodeURIComponent(
      'Hello Anjani Infra Projects, I would like to consult regarding General Safety & EHS standards for my project.'
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
          <span className="text-[#c9a96e]">GENERAL SAFETY &amp; EHS</span>
        </div>

        {/* Combined Unified Card: Image & Content seamlessly integrated */}
        <div className="rounded-2xl bg-[#121212] border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Content Area */}
            <div className="lg:col-span-6 p-8 sm:p-10 md:p-12 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <p className="font-serif text-xl sm:text-2xl text-[#fafaf8] leading-relaxed font-normal">
                  At <strong className="text-[#c9a96e] font-semibold">Anjani Infra Projects</strong>, occupational safety, environmental stewardship, and zero-accident execution are non-negotiable core pillars of our enterprise.
                </p>

                <div className="space-y-4 text-sm sm:text-base text-[#d6d3cd] leading-relaxed font-light">
                  <p>
                    Every residential villa, corporate office fitout, and civil construction site is managed under strict Environmental Health &amp; Safety (EHS) governance. From daily toolbox hazard briefings to advanced fall arrest systems and fire-rated electrical distribution, we safeguard our craftsmen, clients, and assets.
                  </p>
                  
                  <p>
                    Our certified safety engineers enforce ISO 45001 standards, conduct daily biometric site access checks, and deploy green eco-friendly dust suppression and noise management practices in compliance with Hyderabad municipal environmental codes.
                  </p>
                </div>

                {/* Integrated Scope Points */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-serif text-lg text-[#fafaf8] font-medium">
                    Our safety &amp; EHS governance includes:
                  </h2>

                  <ul className="space-y-2.5 pt-1">
                    {safetyPoints.map((point, idx) => (
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
                    &ldquo;With <span className="text-[#c9a96e] font-semibold not-italic">Anjani Infra Projects</span>, uncompromised safety and architectural excellence go hand-in-hand on every square foot.&rdquo;
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

            {/* Combined Image Area: Crystal-Clear */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-full overflow-hidden bg-zinc-950">
              <img
                src="/safety-ehs-professional.jpg"
                alt="General Safety & EHS Standards - Anjani Infra Projects"
                className="w-full h-full object-cover object-center brightness-105 contrast-[1.02]"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
