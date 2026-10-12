'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/data/projects';
import {
  Building2,
  Search,
  Filter,
  ArrowUpRight,
  MapPin,
  Ruler,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

interface ProjectsClientViewProps {
  projects: ProjectItem[];
}

export function ProjectsClientView({ projects }: ProjectsClientViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteScope, setQuoteScope] = useState('');

  const featuredProject = projects.find((p) => p.featured && p.id === 1) || projects[0];

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory =
      activeCategory === 'All' || proj.category.toLowerCase() === activeCategory.toLowerCase();
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      proj.name.toLowerCase().includes(q) ||
      proj.location.toLowerCase().includes(q) ||
      proj.client.toLowerCase().includes(q) ||
      proj.type.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24 font-sans">
      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="bg-[#1A374D] text-white pt-16 pb-20 px-4 sm:px-8 lg:px-12 relative overflow-hidden border-b border-[#2B5573]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-extrabold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" /> Landmark Portfolio & Turnkey Engineering
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black leading-tight text-white max-w-4xl tracking-tight">
            Curated Architectural Landmarks & Luxury Turnkey Projects
          </h1>

          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            From the sky-high duplex penthouses of Gandipet to heavy commercial RCC superstructures and unitized glass facades across India — experience Anjani Infra’s precision execution.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-white/90 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> 100% Quality Snagging
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Gandipet Penthouse Showcase
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C5A059]" /> Interactive Before &amp; After
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. Featured Project Spotlight (One Oak Sky Villa) ──────────────── */}
      {featuredProject && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 -mt-10 relative z-20">
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#BFBFBF]/60 shadow-2xl transition-all hover:shadow-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Image with Before/After Badge */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden group h-[320px] sm:h-[420px] bg-slate-950">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                    FEATURED LANDMARK
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-900/90 text-white text-[10px] font-bold tracking-wide border border-white/20 shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" /> BEFORE &amp; AFTER AVAILABLE
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">
                    {featuredProject.location}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                    {featuredProject.name}
                  </h3>
                </div>
              </div>

              {/* Right Column: Project Highlights & Action */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-[#2B5573] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C5A059]" /> Gandipet, Hyderabad • 12th &amp; 13th Floors
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D] leading-snug">
                  {featuredProject.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#383735]/85 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Key Specs Pills */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/40">
                    <div className="text-[10px] uppercase font-bold text-[#383735]/60">Built-Up Area</div>
                    <div className="font-bold text-[#1A374D] mt-0.5">{featuredProject.area}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/40">
                    <div className="text-[10px] uppercase font-bold text-[#383735]/60">Discipline</div>
                    <div className="font-bold text-[#1A374D] mt-0.5">{featuredProject.category}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/40">
                    <div className="text-[10px] uppercase font-bold text-[#383735]/60">Client / Design</div>
                    <div className="font-bold text-[#1A374D] mt-0.5 truncate">{featuredProject.client}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/40">
                    <div className="text-[10px] uppercase font-bold text-[#383735]/60">Handover Year</div>
                    <div className="font-bold text-[#1A374D] mt-0.5">{featuredProject.year}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <Link
                    href={`/projects/${featuredProject.id}`}
                    className="flex-1 px-6 py-3.5 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>View Before &amp; After &amp; Full Details</span>
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </Link>

                  <button
                    onClick={() => {
                      setQuoteScope(`PROJECT INQUIRY: ${featuredProject.name}`);
                      setIsQuoteModalOpen(true);
                    }}
                    className="px-5 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Inquire Scope
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ──────────────── 3. Filter & Search Controls ──────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mt-14 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#BFBFBF]/60 shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['All', ...Array.from(new Set(projects.map((p) => p.category)))].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#1A374D] text-[#C5A059] shadow-sm'
                    : 'bg-[#FCF9EB] text-[#1A374D] hover:bg-[#1A374D]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#383735]/50 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search Kokapet, Gandipet, Sky Villa, civil..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/60 text-xs font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
            />
          </div>
        </div>

        {/* ──────────────── 4. Project Cards Grid ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => {
            const hasBeforeAfter = proj.beforeAfter && proj.beforeAfter.length > 0;
            return (
              <div
                key={proj.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#BFBFBF]/60 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-xs">
                        {proj.category}
                      </span>
                      {hasBeforeAfter && (
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/90 text-[#C5A059] text-[10px] font-bold border border-white/20">
                          Before &amp; After
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-serif font-black text-[#1A374D] group-hover:text-[#C5A059] transition-colors leading-snug">
                      {proj.name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#383735]/80 font-bold">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> {proj.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Ruler className="w-3.5 h-3.5 text-[#C5A059]" /> {proj.area}
                      </span>
                    </div>

                    <p className="text-xs text-[#383735]/85 line-clamp-3 leading-relaxed font-normal pt-1">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 border-t border-[#BFBFBF]/40 bg-[#FCF9EB]/60 flex items-center justify-between">
                  <div className="text-[11px] font-bold text-[#383735]/70 truncate max-w-[160px]">
                    Client: <span className="text-[#1A374D]">{proj.client}</span>
                  </div>
                  
                  <Link
                    href={`/projects/${proj.slug || proj.id}`}
                    className="px-4 py-2 rounded-xl bg-[#1A374D] hover:bg-[#C5A059] hover:text-slate-950 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
                  >
                    <span>{isOneOak ? 'Before & After' : 'Details'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#BFBFBF]/60">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#1A374D]">No projects found</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search query or choosing another category.</p>
          </div>
        )}
      </section>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={{ scope: quoteScope || 'PROJECT CONSULTATION' }}
      />
    </main>
  );
}
