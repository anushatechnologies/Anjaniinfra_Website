import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  CheckCircle2,
  Calendar,
  Layers,
  Star,
  Check,
  ArrowUpRight,
  MapPin,
  Building2,
  CheckCircle,
  Gem
} from 'lucide-react';
import { ModernMatrixHero } from '@/components/ModernMatrixHero';
import { ModernMatrixPortfolio } from '@/components/ModernMatrixPortfolio';
import { projectsData } from '@/data/projects';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Anjani Infra | Luxury Interior & Architecture in Hyderabad',
  description: "Anjani Infra delivers high-end bespoke residential, villa, and corporate infrastructure solutions across Hyderabad. Turnkey execution, direct factory precision, and 10-year warranty.",
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/',
  },
};

// Services Data matching ModernMatrix structure
const servicesList = [
  {
    num: '01',
    title: 'Turnkey Interior Projects',
    desc: 'Complete end-to-end execution — space planning, 3D visualization, material procurement, civil modifications, and turnkey handover. One team, zero hassle.',
  },
  {
    num: '02',
    title: 'Luxury Residential & Villa Architecture',
    desc: 'Bespoke interior architecture for duplex penthouses, private villas, and gated residences tailored to your lifestyle and aesthetic aspirations.',
  },
  {
    num: '03',
    title: 'Corporate & Commercial Workplaces',
    desc: 'High-performance corporate office interiors, executive suites, conference facilities, and hospitality fitouts engineered for productivity.',
  },
  {
    num: '04',
    title: 'Modular Kitchens & Wardrobes',
    desc: 'Direct factory-manufactured German joinery, BWP marine grade cabinetry, quartz islands, and motorized sliding wardrobe solutions.',
  },
  {
    num: '05',
    title: 'MEP, Lighting & Acoustical Ceilings',
    desc: 'Engineered mechanical, electrical, plumbing systems paired with bespoke architectural cove lighting and acoustic ceiling integrations.',
  },
  {
    num: '06',
    title: 'Civil Modifications & Facade Glazing',
    desc: 'Structural civil reconfigurations, structural glazing, exterior ACP cladding, and premium floorings with meticulous attention to detail.',
  },
];

// Process Timeline matching ModernMatrix
const processSteps = [
  {
    num: '01',
    title: 'Send Enquiry',
    desc: 'Reach out via our consultation form or call our design desk to kickstart your project.',
  },
  {
    num: '02',
    title: 'Free Site Visit',
    desc: 'Our senior architects visit your site in Hyderabad, take precision 3D measurements, and map the scope.',
  },
  {
    num: '03',
    title: 'Design & Mood Board',
    desc: 'Complimentary photorealistic 3D concepts, layout plans, and material mood boards tailored to your vision.',
  },
  {
    num: '04',
    title: 'BOQ & Quotation',
    desc: 'Transparent, itemized pricing with an exhaustive Bill of Quantities. Your budget, strictly respected.',
  },
  {
    num: '05',
    title: 'Direct Factory Execution',
    desc: 'Dedicated project manager, German machinery precision joinery, and digital milestone tracking.',
  },
  {
    num: '06',
    title: 'On-Time Handover',
    desc: 'Your finished masterpiece delivered on schedule with a comprehensive 10-year warranty documentation.',
  },
];

// Why Us Pillars matching ModernMatrix
const whyUsPillars = [
  {
    title: 'Personalized Architectural Approach',
    desc: 'Every space is individually conceptualized from scratch. No cookie-cutter templates, only bespoke architectural craftsmanship.',
  },
  {
    title: 'Turnkey Single-Point Execution',
    desc: 'Complete accountability from 2D floor plans to electrical, woodwork, painting, and handover under a single dedicated project manager.',
  },
  {
    title: 'Transparent Pricing & Detailed BOQs',
    desc: 'Itemized material specifications and clear pricing with zero hidden surcharges or post-commencement surprises.',
  },
  {
    title: '100% On-Time Delivery Guarantee',
    desc: 'We adhere strictly to committed project schedules backed by automated factory manufacturing workflows.',
  },
  {
    title: 'Direct Factory Manufacturing',
    desc: 'In-house automated CNC fabrication with precision German hardware ensures millimeter-accurate joinery and superior finish.',
  },
  {
    title: '10-Year Comprehensive Warranty',
    desc: 'Assured long-term durability and post-handover service support for total peace of mind in your investment.',
  },
];

// Client Testimonials
const testimonialsList = [
  {
    name: 'Mrs. Ananya Reddy',
    location: 'Banjara Hills, Hyderabad',
    text: 'Finding a passionate team to craft our penthouse was crucial. Anjani Infra exceeded every expectation with their factory finish and immaculate design execution.',
    rating: 5,
  },
  {
    name: 'Mr. & Mrs. Prannoy HS',
    location: 'Gachibowli, Hyderabad',
    text: 'Structured, organized, and pleasant to deal with. Delivered our luxury flat interiors exactly as promised on schedule with zero compromises on quality.',
    rating: 5,
  },
  {
    name: 'Mr. Surendra N M',
    location: 'Jubilee Hills, Hyderabad',
    text: 'We are extremely satisfied with the modular kitchen, bespoke wardrobe suites, and on-time handover. Truly top-tier architectural interior craftsmanship.',
    rating: 5,
  },
];

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a]">
      
      {/* ──────────────── 1. HERO SECTION ──────────────── */}
      <ModernMatrixHero />

      {/* ──────────────── 2. ABOUT SECTION ──────────────── */}
      <section id="about" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="mm-eyebrow">ABOUT ANJANI INFRA</div>
              <h2 className="mm-title !mb-6">
                Crafting Exceptional Spaces <br />
                <em>Since Day One</em>
              </h2>
              
              <p className="text-base sm:text-lg text-[#fafaf8] leading-relaxed">
                At Anjani Infra, we believe exceptional design is born from the convergence of architectural integrity, refined material palette, and uncompromising craftsmanship.
              </p>

              <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed">
                Based out of Narsingi, Hyderabad, our multidisciplinary studio unifies architecture, interior fitouts, civil engineering, and automated factory joinery. Whether developing an expansive duplex sky villa in Gandipet or corporate headquarters in the Financial District, we handle every milestone under one turnkey umbrella.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="mm-btn mm-btn-filled py-3 px-8 text-xs tracking-[0.25em]"
                >
                  <span>CONNECT WITH US</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/design-and-build"
                  className="mm-btn py-3 px-8 text-xs tracking-[0.25em]"
                >
                  <span>DESIGN &amp; BUILD METHOD</span>
                </a>
              </div>
            </div>

            {/* Right Metric Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
              
              {/* Stat 1 */}
              <div className="p-6 sm:p-8 rounded bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all shadow-md group">
                <div className="font-serif text-3xl sm:text-5xl font-light text-[#c9a96e] group-hover:scale-105 transition-transform">
                  100+
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#fafaf8] mt-3 font-semibold">
                  Turnkey Projects
                </div>
                <p className="text-xs text-[#d6d3cd] mt-1 font-normal">
                  Delivered across Hyderabad
                </p>
              </div>

              {/* Stat 2 */}
              <div className="p-6 sm:p-8 rounded bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all shadow-md group">
                <div className="font-serif text-3xl sm:text-5xl font-light text-[#c9a96e] group-hover:scale-105 transition-transform">
                  10+
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#fafaf8] mt-3 font-semibold">
                  Years Experience
                </div>
                <p className="text-xs text-[#d6d3cd] mt-1 font-normal">
                  Industry excellence
                </p>
              </div>

              {/* Stat 3 */}
              <div className="p-6 sm:p-8 rounded bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all shadow-md group">
                <div className="font-serif text-3xl sm:text-5xl font-light text-[#c9a96e] group-hover:scale-105 transition-transform">
                  100%
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#fafaf8] mt-3 font-semibold">
                  On-Time Delivery
                </div>
                <p className="text-xs text-[#d6d3cd] mt-1 font-normal">
                  Strict adherence to timeline
                </p>
              </div>

              {/* Stat 4 */}
              <div className="p-6 sm:p-8 rounded bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all shadow-md group">
                <div className="font-serif text-3xl sm:text-5xl font-light text-[#c9a96e] group-hover:scale-105 transition-transform">
                  10-Yr
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#fafaf8] mt-3 font-semibold">
                  Warranty Support
                </div>
                <p className="text-xs text-[#d6d3cd] mt-1 font-normal">
                  Complete peace of mind
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ──────────────── 3. SERVICES SECTION ──────────────── */}
      <section id="services" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="max-w-3xl mb-16">
            <div className="mm-eyebrow">WHAT WE DO</div>
            <h2 className="mm-title !mb-4">
              Complete Interior &amp; <em>Infrastructure</em> Solutions
            </h2>
            <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed">
              End-to-end services tailored to your vision — from residential havens to commercial powerhouses, restaurants to retail spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesList.map((service) => (
              <div
                key={service.num}
                className="bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 p-8 sm:p-10 transition-all duration-300 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="text-xs font-sans tracking-[0.25em] text-[#c9a96e] font-bold mb-6">
                    {service.num}
                  </div>
                  <h3 className="font-serif text-2xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors mb-4 font-normal">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#d6d3cd] leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#c9a96e]">
                  <span className="tracking-wider uppercase font-medium">ANJANI PRECISION</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────── 4. SELECTED PROJECTS (PORTFOLIO + LIGHTBOX) ──────────────── */}
      <ModernMatrixPortfolio projects={projectsData} />

      {/* ──────────────── 5. INFINITE RUNNING MARQUEE ──────────────── */}
      <div className="py-7 bg-[#141414] border-y border-white/10 overflow-hidden select-none">
        <div className="flex w-max animate-marquee gap-8 items-center text-xs sm:text-sm uppercase tracking-[0.3em] font-sans text-[#e8e4de]/80">
          <span>TURNKEY INTERIORS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>MODULAR KITCHENS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>LUXURY SKY VILLAS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>CORPORATE OFFICES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>10-YEAR WARRANTY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>ON-TIME DELIVERY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>GERMAN CNC JOINERY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>FACADE &amp; ACP CLADDING</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />

          {/* Duplicate for infinite loop */}
          <span>TURNKEY INTERIORS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>MODULAR KITCHENS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>LUXURY SKY VILLAS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>CORPORATE OFFICES</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>10-YEAR WARRANTY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>ON-TIME DELIVERY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>GERMAN CNC JOINERY</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
          <span>FACADE &amp; ACP CLADDING</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
        </div>
      </div>

      {/* ──────────────── 6. PROCESS SECTION ──────────────── */}
      <section id="process" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="mm-eyebrow justify-center">OUR PROCESS</div>
            <h2 className="mm-title !mb-4">
              From Enquiry to <em>Delivery</em>
            </h2>
            <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed">
              A transparent, step-by-step journey with a dedicated project manager, complimentary design consultations, and on-time delivery — guaranteed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#161616] border border-white/15 p-8 sm:p-10 relative group hover:border-[#c9a96e]/70 transition-all shadow-lg"
              >
                <div className="font-serif text-3xl sm:text-4xl text-[#c9a96e] font-light mb-5">
                  {step.num}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#fafaf8] mb-3 group-hover:text-[#c9a96e] transition-colors font-medium">
                  {step.title}
                </h3>
                <p className="text-sm text-[#d6d3cd] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────── 7. WHY CHOOSE US SECTION ──────────────── */}
      <section id="why-us" className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="mm-eyebrow">WHY ANJANI INFRA</div>
              <h2 className="mm-title !mb-4">
                Built on Trust, <br />
                <em>Delivered</em> with Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed">
                We combine architectural vision with disciplined engineering execution. We don&apos;t just design spaces — we construct enduring environments where you thrive.
              </p>

              <div className="p-6 rounded bg-[#161616] border border-white/15 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[#c9a96e] text-xs font-sans tracking-widest uppercase font-semibold">
                  <Award className="w-4 h-4" />
                  <span>ISO 9001:2015 CERTIFIED</span>
                </div>
                <p className="text-xs text-[#d6d3cd] leading-relaxed font-normal">
                  Standardized quality checks, digital Measurement Book reconciliations, and dedicated safety compliance across all job sites.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {whyUsPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] border border-white/15 p-6 sm:p-8 flex items-start gap-5 hover:border-[#c9a96e]/70 transition-all group shadow-md"
                >
                  <div className="w-8 h-8 rounded-full border border-[#c9a96e] flex items-center justify-center shrink-0 mt-0.5 text-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#0a0a0a] transition-all">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors mb-2 font-medium">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#d6d3cd] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* ──────────────── 9. WORDS OF TRUST / TESTIMONIALS ──────────────── */}
      <section className="py-24 sm:py-32 bg-[#0a0a0a] text-[#e8e4de] border-t border-white/5 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mm-eyebrow justify-center">TESTIMONIALS</div>
            <h2 className="mm-title !mb-4">
              Voices of <em>Distinction</em>
            </h2>
            <p className="text-sm sm:text-base text-[#d6d3cd]">
              Read how homeowners and business leaders across Hyderabad experienced our turnkey execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonialsList.map((test, i) => (
              <div
                key={i}
                className="bg-[#161616] border border-white/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#c9a96e]/70 transition-all shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#c9a96e] mb-6">
                    {[...Array(test.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="font-serif text-lg sm:text-xl text-[#fafaf8] leading-relaxed italic mb-6 font-normal">
                    &ldquo;{test.text}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/15">
                  <div className="font-sans font-medium text-sm text-[#fafaf8]">
                    {test.name}
                  </div>
                  <div className="text-xs text-[#c9a96e] tracking-wider uppercase font-sans mt-0.5 font-medium">
                    {test.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section ends cleanly before the architectural footer */}
    </div>
  );
}
