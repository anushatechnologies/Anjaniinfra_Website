'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowDown,
  Plus,
  Minus,
  Building2,
  Hammer,
  Palette,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Star,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Play,
  TrendingUp,
  Layers,
  Zap,
  ArrowUp,
  Camera,
  Maximize2
} from 'lucide-react';

import { ProjectModal } from '@/components/ProjectModal';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';
import { projectsData } from '@/data/projects';

// ─────────────────────────────────────────────────────────────────────
// DATA CONSTANTS
// ─────────────────────────────────────────────────────────────────────


const clientLogos = [
  'DLF Commercial', 'Prestige Group', 'GMR Infrastructure', 'L&T Realty', 'Bharti Realty', 'Max Estates'
];



export default function PublicWebsitePage() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [productCategory, setProductCategory] = useState<string>('ALL');
  const [productsList, setProductsList] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<{ scope?: string; area?: number; tier?: string; estCost?: string } | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setProductsList([
      { id: 'P001', sku: 'INT-BRM-001', name: 'Executive Boardroom Suite', category: 'Interior', subCategory: 'Millwork', description: 'Custom CNC-routed boardroom table set with walnut veneer & cable management.', baseRate: 850000, unit: 'Set', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80' },
      { id: 'P002', sku: 'INT-WKS-001', name: 'Modular Workstation System', category: 'Interior', subCategory: 'Furniture', description: 'Height-adjustable modular workstations with privacy screens & storage.', baseRate: 48000, unit: 'Seat', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
      { id: 'P007', sku: 'EXT-CW-001', name: 'Unitized Glass Curtain Wall', category: 'Exterior', subCategory: 'Curtain Wall', description: 'AAMA 501.2 tested unitized stick curtain wall with 28mm DGU Low-E glass.', baseRate: 2800, unit: 'Sq.Ft.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80' },
      { id: 'P008', sku: 'EXT-ACP-001', name: '4mm PVDF ACP Cladding System', category: 'Exterior', subCategory: 'Cladding', description: 'Premium 4mm PVDF-coated aluminum composite panel system with concealed fixing.', baseRate: 650, unit: 'Sq.Ft.', image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?w=400&q=80' },
    ]);
  }, []);

  const filteredProjects = activeCategory === 'ALL'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] font-sans overflow-x-hidden">
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-5 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#F6F4EE] via-[#FCF9EB] to-[#F6F4EE] overflow-hidden">
        
        {/* Abstract Architectural Backdrop */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2B5573_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#2B5573]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Hero Left Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#FCF9EB] border border-[#C5A059]/40 text-[#2B5573] text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-wider sm:tracking-widest shadow-sm max-w-full">
              <span className="h-2 w-2 rounded-full bg-[#C5A059] animate-pulse shrink-0" />
              <span className="truncate">INTEGRATED CONSTRUCTION & INDUSTRIAL FITOUT</span>
            </div>

            {/* Headline matching mockup */}
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-[#1A374D] leading-[1.08]">
              Building Tomorrow. <br />
              <span className="font-serif italic font-normal text-[#C5A059]">Delivering Excellence Today.</span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-lg text-[#383735]/85 max-w-xl font-normal leading-relaxed">
              India&apos;s trusted EPC &amp; Fitout partner delivering <strong className="text-[#2B5573]">Civil Engineering</strong>, <strong className="text-[#2B5573]">Luxury Interiors &amp; Exterior Glazing</strong> with precision and passion.
            </p>

            {/* Action Buttons matching mockup */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>REQUEST PROJECT CONSULTATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C5A059]" />
              </button>

              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-[#FCF9EB] text-[#2B5573] border border-[#C5A059]/60 font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm"
              >
                <Building2 className="w-4 h-4 text-[#C5A059]" />
                EXPLORE PORTFOLIO
              </a>
            </div>

            {/* Micro Stats Bar matching mockup */}
            <div className="pt-8 border-t border-[#BFBFBF]/50 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#FCF9EB] border border-[#C5A059]/40 flex items-center justify-center text-lg text-[#C5A059] font-bold shadow-sm">
                  👑
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">15+</div>
                  <div className="text-[10px] font-extrabold text-[#383735]/60 uppercase tracking-wider">Years Excellence</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#FCF9EB] border border-[#C5A059]/40 flex items-center justify-center text-lg text-[#C5A059] font-bold shadow-sm">
                  👥
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-[#C5A059]">500+</div>
                  <div className="text-[10px] font-extrabold text-[#383735]/60 uppercase tracking-wider">Expert Engineers</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#FCF9EB] border border-[#C5A059]/40 flex items-center justify-center text-lg text-[#C5A059] font-bold shadow-sm">
                  🏢
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">2.5M+</div>
                  <div className="text-[10px] font-extrabold text-[#383735]/60 uppercase tracking-wider">Sq.Ft Handed Over</div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Showcase matching mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85"
                alt="Luxury Architectural Interior Fitout"
                className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Overlaid Floating Card matching mockup image */}
              <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-80 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-2xl space-y-3">
                
                <div className="relative h-32 w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=85"
                    alt="Grand Riviera Facade"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-[#FCF9EB] text-[#1A374D] text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                    FEATURED PROJECT
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1A374D] leading-tight">
                      Grand Riviera Commercial Plaza
                    </h4>
                    <p className="text-[10px] text-[#383735]/70 font-semibold mt-0.5">
                      Civil Construction • Glazing • Interiors
                    </p>
                  </div>

                  {/* Circular Radial Progress Meter */}
                  <div className="h-11 w-11 rounded-full border-2 border-[#C5A059] bg-[#FCF9EB] flex flex-col items-center justify-center shrink-0 shadow-sm">
                    <span className="text-[11px] font-extrabold text-[#1A374D]">98%</span>
                    <span className="text-[6px] uppercase font-bold text-[#C5A059]">PROGRESS</span>
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-[#FCF9EB] border border-[#C5A059]/30 flex items-center gap-2 text-[10px] text-[#1A374D] font-bold">
                  <Shield className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <div>Zero-Accident Site</div>
                    <div className="text-[8px] text-[#383735]/70 font-normal">ISO 9001:2015 Certified</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ───────────────────────────────────────────────────────────── */}
      {/* OUR EXPERTISE: END-TO-END SOLUTIONS (6 HORIZONTAL CARDS STRIP) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-5 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059] mb-1">
            OUR EXPERTISE
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif font-black text-[#1A374D]">
            End-to-End Solutions
          </h2>
          <p className="text-xs sm:text-sm text-[#383735]/75 mt-1 font-medium">
            From concept to completion, we deliver excellence at every step.
          </p>
        </div>

        {/* 6 Capability Cards Row matching mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { title: 'Civil Engineering', icon: Building2, desc: 'Robust & sustainable civil construction solutions.' },
            { title: 'EPC Projects', icon: Hammer, desc: 'Integrated Engineering, Procurement & Construction.' },
            { title: 'Luxury Interiors', icon: Palette, desc: 'Crafting elegant & functional interior spaces.' },
            { title: 'Exterior Glazing', icon: Sparkles, desc: 'High performance glazing for modern architecture.' },
            { title: 'Industrial Fitout', icon: Layers, desc: 'Complete industrial fitout & turnkey solutions.' },
            { title: 'Project Management', icon: Shield, desc: 'Expert planning, execution & delivery assurance.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-[#BFBFBF]/50 shadow-xs hover:shadow-lg hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between space-y-3 group text-left"
            >
              <div className="h-10 w-10 rounded-xl bg-[#FCF9EB] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] group-hover:bg-[#1A374D] group-hover:text-white transition-colors shadow-xs">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs text-[#1A374D] group-hover:text-[#C5A059] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-[10px] text-[#383735]/70 mt-1 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>








      {/* ───────────────────────────────────────────────────────────── */}
      {/* PROJECTS SHOWCASE WITH DISCIPLINE FILTERS & GALLERY MODAL */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 px-5 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059] mb-1">
              OUR PROJECTS
            </div>
            <h2 className="text-3xl lg:text-4xl font-serif font-black text-[#1A374D] tracking-tight">
              Building Landmarks, Creating Value
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Discipline Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-[#BFBFBF]/60 shadow-sm shrink-0">
              {['ALL', 'Civil', 'Interior Fitout', 'Exterior Facade'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-2 rounded-xl text-xs font-extrabold transition-all ${
                    activeCategory === cat
                      ? 'bg-[#1A374D] text-white shadow-sm'
                      : 'text-[#383735] hover:text-[#2B5573] hover:bg-[#FCF9EB]'
                  }`}
                >
                  {cat === 'ALL' ? 'All Projects' : cat}
                </button>
              ))}
            </div>

            <a href="#projects" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-[#C5A059] hover:text-[#1A374D] transition-colors uppercase tracking-wider shrink-0">
              <span>VIEW ALL PROJECTS</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl border border-[#BFBFBF]/60 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div className="cursor-pointer" onClick={() => setSelectedProject(proj)}>
                <div className="relative h-64 w-full overflow-hidden bg-slate-950 group">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    onError={(e) => {
                      const fallback = proj.category === 'Civil'
                        ? 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?w=800&q=80'
                        : proj.category === 'Interior Fitout'
                        ? 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80'
                        : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80';
                      (e.target as HTMLImageElement).src = fallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-[#C5A059] text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    {proj.category}
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                    <Camera className="w-3 h-3 text-[#C5A059]" />
                    {proj.gallery?.length || 4} HD Photos
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-serif font-bold group-hover:text-[#C5A059] transition-colors leading-snug">
                      {proj.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-white/80 mt-1 font-medium">
                      <span>📍 {proj.location}</span>
                      <span>• {proj.area}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-[#383735]/85 line-clamp-2 leading-relaxed font-normal">
                    {proj.description}
                  </p>
                  

                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3 px-5 flex items-center justify-between text-xs font-extrabold bg-[#FCF9EB]/60 border-t border-[#BFBFBF]/40">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex items-center gap-1.5 text-[#2B5573] hover:text-[#C5A059] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Inspect Gallery &amp; Specs</span>
                </button>

                <a
                  href={`/projects/${proj.id}`}
                  className="inline-flex items-center gap-1 text-[#2B5573] hover:text-[#C5A059] transition-colors font-bold"
                >
                  <span>View Full Details</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>








      {/* ───────────────────────────────────────────────────────────── */}
      {/* FLOATING ACTION BUTTONS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Floating Proposal CTA */}
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="px-4 py-3 rounded-full bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] font-extrabold text-xs uppercase tracking-wider shadow-2xl flex items-center gap-2 transition-all hover:scale-105 border-2 border-[#1A374D]"
        >
          <Building2 className="w-4 h-4" />
          <span>Get Free Proposal</span>
        </button>

        {/* Scroll To Top */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-10 w-10 bg-[#2B5573] hover:bg-[#1A374D] text-white rounded-full flex items-center justify-center shadow-lg transition-all mx-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Project Detail & Photo Gallery Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={() => setIsQuoteModalOpen(true)}
      />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => {
          setIsQuoteModalOpen(false);
          setQuoteInitialData(undefined);
        }}
        initialData={quoteInitialData}
      />

    </main>
  );
}
