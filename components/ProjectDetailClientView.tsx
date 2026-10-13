'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/data/projects';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import {
  MapPin,
  Building2,
  Calendar,
  Layers,
  Award,
  ChevronLeft,
  X,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
  FileText,
  Camera,
  Grid,
  ShieldCheck,
  Phone,
  BookOpen
} from 'lucide-react';
import { OneOakPresentationViewer } from '@/components/OneOakPresentationViewer';
import { NorthstarAlluraPresentationViewer } from '@/components/NorthstarAlluraPresentationViewer';
import { VellankiPenthousePresentationViewer } from '@/components/VellankiPenthousePresentationViewer';
import { ArkaOfficePresentationViewer } from '@/components/ArkaOfficePresentationViewer';
import { JayabheriVilla16PresentationViewer } from '@/components/JayabheriVilla16PresentationViewer';
import { BhavyasEugenPresentationViewer } from '@/components/BhavyasEugenPresentationViewer';

interface ProjectDetailClientViewProps {
  project: ProjectItem;
}

export function ProjectDetailClientView({ project }: ProjectDetailClientViewProps) {
  const isOneOak = project.slug === 'one-oak-sky-villa' || project.id === 1;
  const isNorthstar = project.slug === 'northstar-allura-kokapet' || project.id === 2;
  const isVellanki = project.slug === 'vellanki-penthouse-kondapur' || project.id === 3;
  const isArka = project.slug === 'team-4-arka-lanco-hills' || project.id === 4;
  const isVilla16 = project.slug === 'jayabheri-temple-tree-villa-16' || project.id === 5;
  const isBhavyas = project.slug === 'bhavyas-eugen-madhapur' || project.id === 6;
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'PRESENTATION' | 'TRANSFORMATION' | 'PLANS' | 'SPECS'>('PRESENTATION');

  const hasBeforeAfter = project.beforeAfter && project.beforeAfter.length > 0;
  const hasFloorPlans = project.floorPlans && project.floorPlans.length > 0;

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] font-sans pb-24">
      {/* ──────────────── 1. Top Breadcrumb & Navigation Bar ──────────────── */}
      <div className="bg-[#132B3E] text-white py-3 px-4 sm:px-8 border-b border-[#2B5573]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-white/80 hover:text-[#C5A059] transition-colors uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 text-[#C5A059]" />
            <span>Back to All Projects</span>
          </Link>

          <div className="text-[11px] text-[#C5A059] font-bold tracking-widest uppercase hidden sm:block">
            {project.category} • {project.location}
          </div>
        </div>
      </div>

      {/* ──────────────── 2. Hero Header ──────────────── */}
      <section className="bg-[#1A374D] text-white pt-10 pb-16 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3.5 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[10px] font-black uppercase tracking-widest shadow-md">
              {project.category}
            </span>
            {hasBeforeAfter && (
              <span className="px-3.5 py-1 rounded-full bg-slate-900/90 text-[#C5A059] text-[10px] font-bold tracking-wider border border-[#C5A059]/40 flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> BEFORE &amp; AFTER ACTIVE
              </span>
            )}
            <span className="px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-[10px] font-semibold border border-white/20">
              {project.year} Handover
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-tight text-white max-w-4xl tracking-tight">
            {project.name}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm text-white/90 font-medium">
            <span className="flex items-center gap-1.5 text-[#C5A059]">
              <MapPin className="w-4 h-4" /> {project.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#C5A059]" /> {project.area}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#C5A059]" /> {project.type}
            </span>
            {project.client && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-amber-200">
                  <Award className="w-4 h-4 text-[#C5A059]" /> Client: {project.client}
                </span>
              </>
            )}
          </div>

          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/60">Location</div>
              <div className="font-serif font-bold text-[#C5A059] text-sm sm:text-base mt-0.5 truncate">
                {project.location}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/60">Built-Up Area</div>
              <div className="font-serif font-bold text-white text-sm sm:text-base mt-0.5 truncate">
                {project.area}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/60">Handover Year</div>
              <div className="font-serif font-bold text-white text-sm sm:text-base mt-0.5">
                {project.year}
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
              <div className="text-[10px] uppercase font-bold text-white/60">Execution Quality</div>
              <div className="font-serif font-bold text-emerald-400 text-sm sm:text-base mt-0.5">
                100% Verified Snag-Free
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ──────────────── 3. Navigation Tabs ──────────────── */}
      <div className="sticky top-[58px] z-30 bg-white border-b border-[#BFBFBF]/60 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between overflow-x-auto no-scrollbar gap-2 py-2.5">
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('PRESENTATION')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'PRESENTATION'
                  ? 'bg-[#1A374D] text-[#C5A059] shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>
                {isNorthstar
                  ? 'Design Presentation (All 62 Pages)'
                  : isVellanki
                  ? 'Design Presentation (All 24 Pages)'
                  : isArka
                  ? 'Design Presentation (All 7 Slides)'
                  : isVilla16
                  ? 'Design Presentation (All 18 Slides)'
                  : isBhavyas
                  ? 'Design Presentation (All 16 Slides)'
                  : 'Design Presentation (All 42 Pages)'}
              </span>
            </button>

            {hasBeforeAfter && (
              <button
                onClick={() => setActiveTab('TRANSFORMATION')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'TRANSFORMATION'
                    ? 'bg-[#1A374D] text-[#C5A059] shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Layout Plan vs 3D Design</span>
              </button>
            )}

            {hasFloorPlans && (
              <button
                onClick={() => setActiveTab('PLANS')}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === 'PLANS'
                    ? 'bg-[#1A374D] text-[#C5A059] shadow-md'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Floor Layouts ({project.floorPlans!.length})</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('SPECS')}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'SPECS'
                  ? 'bg-[#1A374D] text-[#C5A059] shadow-md'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Scope &amp; Credits</span>
            </button>
          </div>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="shrink-0 px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-sm hidden md:flex items-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5" /> Inquire Similar Project
          </button>
        </div>
      </div>

      {/* ──────────────── 4. Main Body Content ──────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-10 space-y-12">
        
        {/* ──── TAB 0: DESIGN PRESENTATION VIEWER ──── */}
        {activeTab === 'PRESENTATION' && (
          <section className="animate-fade-in">
            {isOneOak && <OneOakPresentationViewer />}
            {isNorthstar && <NorthstarAlluraPresentationViewer />}
            {isVellanki && <VellankiPenthousePresentationViewer />}
            {isArka && <ArkaOfficePresentationViewer />}
            {isVilla16 && <JayabheriVilla16PresentationViewer />}
            {isBhavyas && <BhavyasEugenPresentationViewer />}
          </section>
        )}

        {/* ──── TAB 1: BEFORE & AFTER TRANSFORMATION ──── */}
        {activeTab === 'TRANSFORMATION' && hasBeforeAfter && (
          <section className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#C5A059]">
                    <Sparkles className="w-3.5 h-3.5" /> Precision Plan to Execution
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D] mt-1">
                    2D Layout Plan vs Completed 3D Interior Design
                  </h2>
                </div>
                <div className="text-xs text-[#383735]/70 max-w-md font-sans">
                  Slide or drag horizontally to compare the original 2D architectural furniture layout against the completed photorealistic 3D interior architecture design for each space.
                </div>
              </div>

              {/* The Slider Component */}
              <BeforeAfterSlider pairs={project.beforeAfter!} />
            </div>
          </section>
        )}

        {/* ──── TAB 2: ROOM-BY-ROOM CURATED SHOWCASE ──── */}
        {/* ──── TAB 2: FLOOR PLANS ──── */}
        {activeTab === 'PLANS' && hasFloorPlans && (
          <section className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-2xl font-serif font-black text-[#1A374D]">
                Architectural Furniture Layout Plans
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Precision 2D blueprints executed for {project.name}.
              </p>
            </div>

            <div className="space-y-8">
              {project.floorPlans!.map((plan, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-lg space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] bg-[#1A374D] px-2.5 py-1 rounded-md">
                        {plan.floor}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D] mt-2">
                        {plan.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedPhoto(plan.image)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center gap-2 cursor-pointer self-start sm:self-auto"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" /> Zoom Blueprint
                    </button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {plan.description}
                  </p>

                  <div
                    onClick={() => setSelectedPhoto(plan.image)}
                    className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group cursor-pointer bg-slate-900"
                  >
                    <img
                      src={plan.image}
                      alt={plan.title}
                      className="w-full h-auto max-h-[600px] object-contain mx-auto group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                      <div className="px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur text-white text-xs font-bold flex items-center gap-2 shadow-xl border border-white/20">
                        <Maximize2 className="w-4 h-4 text-[#C5A059]" /> Click to inspect high-resolution blueprint
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ──── TAB 5: SPECS & SCOPE ──── */}
        {activeTab === 'SPECS' && (
          <section className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left 8 Cols: Overview & Specs */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-4">
                  <h2 className="text-xl font-serif font-black text-[#1A374D] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#C5A059]" /> Executive Scope &amp; Architectural Matter
                  </h2>
                  <p className="text-sm text-[#383735]/90 leading-relaxed font-normal">
                    {project.description}
                  </p>
                  <p className="text-xs text-[#383735]/80 leading-relaxed border-t border-[#BFBFBF]/30 pt-4">
                    The {project.name} located at {project.location} was constructed under Anjani Infra’s comprehensive turnkey project management workflow. All milestone sign-offs, digital Measurement Book (MB) reconciliations, and snagging inspections were executed in seamless coordination with the principal architect and client representatives.
                  </p>
                </div>

                {/* Technical Specs List */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#2B5573] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> Architectural Engineering &amp; Material Specifications
                  </h3>

                  <div className="space-y-3 pt-2">
                    {project.specs.map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#383735]">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 4 Cols: Project Summary Card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-[#1A374D] text-white p-7 rounded-3xl shadow-xl space-y-6 border border-[#2B5573]">
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059]">
                      Project Summary
                    </div>
                    <h3 className="font-serif font-bold text-lg text-white mt-1">
                      {project.name}
                    </h3>
                  </div>

                  <div className="space-y-3 text-xs border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/60 font-medium">Location:</span>
                      <span className="font-bold text-[#C5A059]">{project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 font-medium">Discipline:</span>
                      <span className="font-bold">{project.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 font-medium">Built-Up Area:</span>
                      <span className="font-bold">{project.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 font-medium">Client / Design:</span>
                      <span className="font-bold truncate max-w-[150px]">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60 font-medium">Handover Year:</span>
                      <span className="font-bold">{project.year}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="w-full py-4 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Inquire For Similar Scope</span>
                  </button>
                </div>
              </div>

            </div>
          </section>
        )}

      </div>

      {/* ──────────────── 5. Fullscreen Lightbox Modal ──────────────── */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-6xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 h-11 w-11 bg-slate-900/90 text-white rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors z-20 border border-white/20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="High-resolution view"
              className="max-h-[88vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={{ scope: `PROJECT INQUIRY: ${project.name} (${project.location})` }}
      />
    </main>
  );
}
