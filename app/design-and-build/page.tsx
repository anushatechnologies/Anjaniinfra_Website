import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  DesignConsultationButton,
  DesignEstimateButton,
} from '@/components/DesignAndBuildButtons';

export const metadata: Metadata = {
  title: 'Design & Build Turnkey Home Interiors Hyderabad | Anjani Infra',
  description:
    'Experience end-to-end Design, Factory Production, and On-Site Execution by one trusted enterprise. 350,000 sq.ft manufacturing facility, 40-day delivery, and 10-year warranty.',
  keywords: [
    'Design and Build Hyderabad',
    'Turnkey Interior Contractors Hyderabad',
    'Custom Home Interiors Hyderabad',
    'Anjani Infra Design Build',
  ],
  alternates: {
    canonical: 'https://www.anjaniinfrap.com/design-and-build',
  },
};

const processSteps = [
  {
    id: 1,
    label: 'Talk to our Interior Designer & Get an Estimate',
    icon: (
      <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Detailed Drawing and Approval',
    icon: (
      <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Production at Own Factories',
    icon: (
      <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 4,
    label: 'Material Delivery & Execution',
    icon: (
      <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: 5,
    label: 'On Time Project Hand Over',
    icon: (
      <svg className="w-12 h-12 stroke-current fill-none stroke-[1.5]" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
];

export default function DesignAndBuildPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-20 sm:pt-24">
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-zinc-900 overflow-hidden">
        <img
          src="/design-build-hero.jpg"
          alt="Design, Production & Execution by Anjani Infra - Modern Architectural Landmark"
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-end pb-16 px-6 sm:px-12 lg:px-16">
          <div className="text-white space-y-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
              Design, Production &amp; Execution
            </h1>
            <p className="text-2xl sm:text-4xl lg:text-5xl font-light text-white/90 drop-shadow-md">
              By One Company
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. DESIGN 'N' BUILD INTRO */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-[900px] mx-auto text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fafaf8]">
          Design &apos;N&apos; Build
        </h2>
        <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed">
          Complete customization by qualified and experienced interior designers assigned to the client is the hallmark of Anjani Infra. We provide complete solutions to your interiors including sharp and focused spatial planning, interior design, furnishings, and decoration. First we make the design in discussion with the client, get approval and then build it exactly as per plan. Each branch has expert designers, working closely with clients in cooperation with business development managers, factory and project installation team.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2B. CORE DESIGNING DISCIPLINES & ANCHORS */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-[#F6F4EE] border-t border-b border-[#BFBFBF]/40">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
              ARCHITECTURAL EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A374D]">
              Our Specialized Designing Spectrum
            </h2>
            <p className="text-xs sm:text-sm text-[#a8a5a0] leading-relaxed">
              From initial master concepts to heavy civil engineering and integrated building systems, we deliver uncompromising precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 1. Master Conceptual Design & Planning */}
            <div id="conceptual-design" className="scroll-mt-28 bg-[#0a0a0a] p-7 sm:p-8 rounded-2xl border border-[#BFBFBF]/60 shadow-md hover:border-[#c9a96e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EB] text-[#c9a96e] border border-[#c9a96e]/30 flex items-center justify-center font-serif text-xl font-bold">
                  01
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A374D] leading-snug">
                  Master Conceptual Design &amp; Planning
                </h3>
                <p className="text-xs sm:text-sm text-[#d6d3cd] leading-relaxed font-normal">
                  At <strong>Anjani Infra Projects</strong>, we specialize in delivering comprehensive Master Concept Design &amp; Planning solutions that transform vision into viable layouts. Beginning with in-depth site surveys and spatial analysis, we craft conceptual designs that balance aesthetics, functionality, and feasibility across residential, commercial, and corporate projects.
                </p>
                <div className="pt-1 text-xs text-[#fafaf8] font-bold uppercase tracking-wider">
                  Our planning includes:
                </div>
                <ul className="space-y-1.5 text-xs text-[#d6d3cd]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-1 shrink-0" />
                    <span>Strategic zoning and circulation design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-1 shrink-0" />
                    <span>Integration of access roads and internal loops for seamless connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-1 shrink-0" />
                    <span>Consideration of landscape elements, street furniture, and material palettes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-1 shrink-0" />
                    <span>Harmonization with adjacent structures and urban context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] mt-1 shrink-0" />
                    <span>Proposed FAR, building guidelines, and service allocations</span>
                  </li>
                </ul>
                <div className="pt-2 text-xs italic text-[#1A374D] border-t border-white/5 font-medium">
                  &ldquo;With Anjani Infra Projects, your concept isn&apos;t just a sketch—it&apos;s a strategic blueprint ready to evolve into reality.&rdquo;
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/master-conceptual-design"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c9a96e] hover:underline"
                >
                  <span>Explore Master Planning Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 2. Architectural & Civil Design */}
            <div id="architectural-civil" className="scroll-mt-28 bg-[#0a0a0a] p-7 sm:p-8 rounded-2xl border border-[#BFBFBF]/60 shadow-md hover:border-[#c9a96e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EB] text-[#c9a96e] border border-[#c9a96e]/30 flex items-center justify-center font-serif text-xl font-bold">
                  02
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A374D] leading-snug">
                  Architectural &amp; Civil Design
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a5a0] leading-relaxed font-normal">
                  Heavy RCC structural engineering, load calculations, facade envelope integration, and regulatory approval drawings executed with zero-error precision.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#d6d3cd]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>RCC Superstructures &amp; Post-Tensioned Slabs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>Curtain Wall &amp; Unitized Glazing Elevation Blueprints</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>Municipal Authority Approval &amp; Statutory Drawings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. MEP, Lighting & Acoustical Ceilings */}
            <div id="mep-lighting" className="scroll-mt-28 bg-[#0a0a0a] p-7 sm:p-8 rounded-2xl border border-[#BFBFBF]/60 shadow-md hover:border-[#c9a96e] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FCF9EB] text-[#c9a96e] border border-[#c9a96e]/30 flex items-center justify-center font-serif text-xl font-bold">
                  03
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A374D] leading-snug">
                  MEP, Lighting &amp; Acoustical Ceilings
                </h3>
                <p className="text-xs sm:text-sm text-[#a8a5a0] leading-relaxed font-normal">
                  End-to-end mechanical, electrical, and plumbing infrastructure paired with architectural luminaire design and sound-engineered acoustic ceiling systems.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#d6d3cd]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>Lutron / DALI Smart Automation &amp; Lighting Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>Centralized VRF/HVAC Ducting &amp; Fresh Air Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                    <span>NRC 0.85+ Acoustic Wood Wool &amp; Baffle Drop Ceilings</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. 100% CUSTOMIZED HOME INTERIORS BY EXPERTS – 5 STEP PROCESS */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#fafaf8] text-center mb-16">
            100% Customized Home Interiors By Experts
          </h2>

          <div className="flex flex-col sm:flex-row items-start justify-center gap-0 sm:gap-0">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0 flex-1 min-w-0"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 rounded-full bg-[#161616] border border-[#c9a96e]/40 border-2 border-[#c9a96e] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-200 p-5">
                  {step.icon}
                </div>

                <p className="text-xs sm:text-[11px] lg:text-[12px] font-semibold text-[#e8e4de] leading-snug text-left sm:text-center max-w-[140px] sm:mt-4 sm:px-2">
                  {step.label}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center justify-center mt-[-90px] mb-[60px] pointer-events-none">
            <div className="flex items-center w-full max-w-[1100px] justify-between px-16">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <svg width="48" height="20" viewBox="0 0 48 20" fill="none" className="mx-auto">
                    <path d="M0 10 H38" stroke="#c9a96e" strokeWidth="2" />
                    <path d="M38 4 L46 10 L38 16" stroke="#c9a96e" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. DESIGN PHASE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#0a0a0a] border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[380px] sm:h-[500px] lg:h-[560px] overflow-hidden">
            <img
              src="/design-blueprint-flatlay.jpg"
              alt="Interior Design Planning - Architectural Floor Plan, 3D Renders, and Material Swatches"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex items-center bg-[#0a0a0a] px-8 sm:px-12 lg:px-16 py-14 lg:py-20">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fafaf8]">Design</h2>

              <ul className="space-y-4 text-sm text-[#d6d3cd] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Project is allocated to a designer with clear instructions from the business development manager who initially deals with the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Study the requirements in detail: In discussion with the client, with the help of floor plan, designer understands the space and requirements carefully.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Actual measurements and drawing: Designer visits the house/flat and takes actual measurement of the space as per the requirements discussed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Detailed drawing is prepared and sent to the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Finalization of drawings in mutual agreement. Drawings sent to the factory for production.</span>
                </li>
              </ul>

              <DesignConsultationButton label="Meet Our Interior Designer" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. PRODUCTION PHASE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#FAFAFA] border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-[#FAFAFA] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 order-2 lg:order-1">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fafaf8]">Production</h2>

              <ul className="space-y-4 text-sm text-[#d6d3cd] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Clarifications and confirmations made between factory manager and designer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>A revisit to the house/flat is made to repeat the actual measurements to confirm it with drawings received in the factory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Production is scheduled on a date in agreement with client, as per confirmation of site status by project manager.</span>
                </li>
              </ul>

              <DesignConsultationButton label="Get Customized Home Interiors" />
            </div>
          </div>

          <div className="h-[380px] sm:h-[500px] lg:h-[520px] overflow-hidden order-1 lg:order-2">
            <img
              src="/factory-unit-1.jpg"
              alt="Anjani Infra In-House Manufacturing Facility - German CNC Modular Panel Processing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. EXECUTION PHASE */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#0a0a0a] border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[380px] sm:h-[500px] lg:h-[540px] overflow-hidden">
            <img
              src="/execution-craftsmen-interior.jpg"
              alt="On-Site Execution - Precision Installation of Custom Modular Wardrobe and Joinery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="flex items-center bg-[#0a0a0a] px-8 sm:px-12 lg:px-16 py-14 lg:py-20">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fafaf8]">Execution</h2>

              <ul className="space-y-4 text-sm text-[#d6d3cd] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Project implementation is planned well in advance by the team head. He arranges for the installation immediately upon delivery of products at site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>We have our own logistics team to provide easy and safe transportation for furnishings to site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Number of days expected for installation as per the volume of work is informed to client.</span>
                </li>
              </ul>

              <DesignEstimateButton label="Plan an Interior Project" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. PROJECT HANDOVER */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#FAFAFA] border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center bg-[#FAFAFA] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 order-2 lg:order-1">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#fafaf8]">Project Handover</h2>

              <ul className="space-y-4 text-sm text-[#d6d3cd] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>We are totally committed to on-time &amp; accurate completion of every project.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Our team ensures no debris, noise or disturbance is caused and also guarantees the safety or welfare of the surrounding neighbors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gray-800 shrink-0 mt-2" />
                  <span>Our team will leave your site only after getting the satisfaction report.</span>
                </li>
              </ul>

              <DesignConsultationButton label="Deal Directly with the Company" />
            </div>
          </div>

          <div className="h-[380px] sm:h-[500px] lg:h-[520px] overflow-hidden order-1 lg:order-2">
            <img
              src="/homeowner-handover-joy.jpg"
              alt="Project Handover - Delighted Homeowners in Their Completed Dream Living Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
