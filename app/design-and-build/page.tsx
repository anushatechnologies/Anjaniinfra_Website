'use client';

import React, { useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { FloatingActions } from '@/components/FloatingActions';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';
import { ConsultationModal } from '@/components/ConsultationModal';

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
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Floating Action Controls */}
      <FloatingActions
        onOpenEstimate={() => setIsEstimateOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />
      <InteriorEstimateModal isOpen={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO BANNER */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] bg-zinc-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Design, Production & Execution By One Company"
          className="w-full h-full object-cover object-center brightness-60"
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
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Design &apos;N&apos; Build
        </h2>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          Complete customization by qualified and experienced interior designers assigned to the client is the system of D&apos;LIFE. We provide complete solutions to your interiors including sharp and focused spatial planning, interior design, furnishings, and decoration. First we make the design in discussion with the client, get approval and then build it exactly as per plan. Each branch has expert designers, working closely with clients in cooperation with business development managers, factory and project installation team.
        </p>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. 100% CUSTOMIZED HOME INTERIORS BY EXPERTS – 5 STEP PROCESS */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8">

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-16">
            100% Customized Home Interiors By Experts
          </h2>

          {/* 5-Step Process Row with Arrow Connectors */}
          <div className="flex flex-col sm:flex-row items-start justify-center gap-0 sm:gap-0">
            {processSteps.map((step, idx) => (
              <div key={step.id} className="flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-0 flex-1 min-w-0">
                {/* Circle */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 shrink-0 rounded-full bg-[#132B3E] border-2 border-[#C5A059] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-200 p-5">
                  {step.icon}
                </div>

                {/* Label */}
                <p className="text-xs sm:text-[11px] lg:text-[12px] font-semibold text-gray-800 leading-snug text-left sm:text-center max-w-[140px] sm:mt-4 sm:px-2">
                  {step.label}
                </p>

                {/* Arrow (between steps, not after last) */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center absolute">
                    {/* handled via relative positioning below */}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop arrow row — overlaid between circles */}
          <div className="hidden sm:flex items-center justify-center mt-[-90px] mb-[60px] pointer-events-none">
            <div className="flex items-center w-full max-w-[1100px] justify-between px-16">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <svg width="48" height="20" viewBox="0 0 48 20" fill="none" className="mx-auto">
                    <path d="M0 10 H38" stroke="#C5A059" strokeWidth="2" />
                    <path d="M38 4 L46 10 L38 16" stroke="#C5A059" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. DESIGN PHASE  —  Image LEFT, Text RIGHT */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-white border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Blueprint / Design Image */}
          <div className="h-[380px] sm:h-[500px] lg:h-[560px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
              alt="Interior Design Blueprint and Color Swatches"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Design bullet points */}
          <div className="flex items-center bg-white px-8 sm:px-12 lg:px-16 py-14 lg:py-20">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Design</h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
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

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                Meet Our Interior Designer
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. PRODUCTION PHASE  —  Text LEFT, Image RIGHT */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#FAFAFA] border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Production bullet points */}
          <div className="flex items-center bg-[#FAFAFA] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 order-2 lg:order-1">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Production</h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
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

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                Get Customized Home Interiors
              </button>
            </div>
          </div>

          {/* Right: Factory / Production Image */}
          <div className="h-[380px] sm:h-[500px] lg:h-[520px] overflow-hidden order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85"
              alt="Production at Own Factory with German Machinery"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. EXECUTION PHASE  —  Image LEFT, Text RIGHT */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-white border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Execution Team Image (Purple uniforms installing) */}
          <div className="h-[380px] sm:h-[500px] lg:h-[540px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&w=1200&q=85"
              alt="Execution Team Installing Interior Furniture"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Execution bullet points */}
          <div className="flex items-center bg-white px-8 sm:px-12 lg:px-16 py-14 lg:py-20">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Execution</h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
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

              <button
                onClick={() => setIsEstimateOpen(true)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                Plan an Interior Project
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. PROJECT HANDOVER  —  Text LEFT, Image RIGHT */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="py-0 bg-[#FAFAFA] border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Left: Project Handover bullet points */}
          <div className="flex items-center bg-[#FAFAFA] px-8 sm:px-12 lg:px-16 py-14 lg:py-20 order-2 lg:order-1">
            <div className="space-y-6 max-w-[520px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Project Handover</h2>

              <ul className="space-y-4 text-sm text-gray-700 leading-relaxed">
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

              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                Deal Directly with the Company
              </button>
            </div>
          </div>

          {/* Right: Handover Image */}
          <div className="h-[380px] sm:h-[500px] lg:h-[520px] overflow-hidden order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85"
              alt="Project Handover - Team and Client at Completed Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>
      </section>

    </div>
  );
}
