'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ProjectItem } from '@/data/projects';
import {
  Building2,
  Search,
  ArrowUpRight,
  MapPin,
  Ruler,
  Calendar,
  Sparkles,
  LayoutList,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

const projectCategories = ['All', 'Villas', 'Apartments', 'Commercial Offices', 'Retail & Shops'];

interface ProjectsClientViewProps {
  projects: ProjectItem[];
}

export function ProjectsClientView({ projects }: ProjectsClientViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteScope, setQuoteScope] = useState('');

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    if (categoryParam) {
      const clean = categoryParam.toLowerCase().replace(/-/g, ' ');
      if (clean.includes('villa')) {
        setActiveCategory('Villas');
      } else if (clean.includes('apartment') || clean.includes('aportment')) {
        setActiveCategory('Apartments');
      } else if (clean.includes('commercial') || clean.includes('commersal') || clean.includes('office')) {
        setActiveCategory('Commercial Offices');
      } else if (clean.includes('retail') || clean.includes('retal') || clean.includes('shop') || clean.includes('shope')) {
        setActiveCategory('Retail & Shops');
      } else {
        const match = projectCategories.find((c) => c.toLowerCase() === clean);
        if (match) setActiveCategory(match);
      }
    }
  }, [categoryParam]);

  const filteredProjects = projects.filter((proj) => {
    const isVilla =
      activeCategory === 'Villas' &&
      (proj.category.toLowerCase().includes('villa') ||
        proj.name.toLowerCase().includes('villa') ||
        proj.type.toLowerCase().includes('villa'));

    const isApartment =
      activeCategory === 'Apartments' &&
      (proj.category.toLowerCase().includes('apartment') ||
        proj.category.toLowerCase().includes('residential') ||
        proj.name.toLowerCase().includes('sky villa') ||
        proj.name.toLowerCase().includes('penthouse') ||
        proj.name.toLowerCase().includes('bhk') ||
        proj.type.toLowerCase().includes('penthouse') ||
        proj.type.toLowerCase().includes('duplex') ||
        proj.type.toLowerCase().includes('residence'));

    const isCommercial =
      activeCategory === 'Commercial Offices' &&
      (proj.category.toLowerCase().includes('commercial') ||
        proj.category.toLowerCase().includes('office') ||
        proj.name.toLowerCase().includes('office') ||
        proj.name.toLowerCase().includes('arka') ||
        proj.type.toLowerCase().includes('office') ||
        proj.type.toLowerCase().includes('commercial'));

    const isRetail =
      activeCategory === 'Retail & Shops' &&
      (proj.category.toLowerCase().includes('retail') ||
        proj.name.toLowerCase().includes('retail') ||
        proj.name.toLowerCase().includes('showroom') ||
        proj.name.toLowerCase().includes('shop') ||
        proj.type.toLowerCase().includes('retail') ||
        proj.type.toLowerCase().includes('showroom'));

    const matchesCategory =
      activeCategory === 'All' ||
      (activeCategory === 'Villas' && isVilla) ||
      (activeCategory === 'Apartments' && isApartment) ||
      (activeCategory === 'Commercial Offices' && isCommercial) ||
      (activeCategory === 'Retail & Shops' && isRetail) ||
      proj.category.toLowerCase() === activeCategory.toLowerCase();

    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      proj.name.toLowerCase().includes(q) ||
      proj.location.toLowerCase().includes(q) ||
      proj.client.toLowerCase().includes(q) ||
      proj.type.toLowerCase().includes(q);

    return matchesCategory && matchesSearch;
  });

  const getCategoryTitle = () => {
    if (activeCategory === 'Villas') return 'Luxury Villa Projects';
    if (activeCategory === 'Apartments') return 'Luxury Apartment & Penthouse Projects';
    if (activeCategory === 'Commercial Offices') return 'Corporate & Commercial Office Projects';
    if (activeCategory === 'Retail & Shops') return 'Flagship Retail & Boutique Projects';
    return 'Curated Architectural Landmarks & Projects';
  };

  const getCategorySubtitle = () => {
    if (activeCategory === 'Villas') {
      return 'Bespoke private villas, duplex estates, and gated community residences crafted with architectural precision across Hyderabad.';
    }
    if (activeCategory === 'Apartments') {
      return 'Sky penthouses, luxury duplex suites, and high-rise residences finished to the highest international specifications.';
    }
    if (activeCategory === 'Commercial Offices') {
      return 'Modern corporate headquarters, high-tech conference suites, and agile collaborative workspaces across Hyderabad.';
    }
    if (activeCategory === 'Retail & Shops') {
      return 'Bespoke fashion flagship boutiques, commercial experience showrooms, and retail fitouts.';
    }
    return 'From private duplex villas in Gandipet to corporate headquarters and high-rise luxury fitouts across Hyderabad.';
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-28 pb-20 lg:pt-36 lg:pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#999999]">
          <Link href="/" className="hover:text-[#c9a96e] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#c9a96e] transition-colors">
            PROJECTS
          </Link>
          {activeCategory !== 'All' && (
            <>
              <span>/</span>
              <span className="text-[#c9a96e]">{activeCategory.toUpperCase()}</span>
            </>
          )}
        </div>

        {/* Dynamic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase block">
              OUR PORTFOLIO • {activeCategory.toUpperCase()}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#fafaf8] font-normal leading-tight">
              {getCategoryTitle()}
            </h1>
            <p className="text-sm sm:text-base text-[#d6d3cd] font-light leading-relaxed">
              {getCategorySubtitle()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setQuoteScope(`PROJECT CONSULTATION: ${activeCategory}`);
                setIsQuoteModalOpen(true);
              }}
              className="px-6 py-3 rounded bg-[#c9a96e] text-black text-xs font-sans font-bold tracking-widest uppercase hover:bg-[#dfc698] transition-all shadow-xl cursor-pointer"
            >
              BOOK CONSULTATION
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {projectCategories.map((cat) => {
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    if (cat === 'Villas') {
                      setViewMode('list');
                    }
                    if (typeof window !== 'undefined') {
                      if (cat === 'All') {
                        window.history.replaceState(null, '', '/projects');
                      } else {
                        const slug = cat.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
                        window.history.replaceState(null, '', `/projects?category=${slug}`);
                      }
                    }
                  }}
                  className={`px-4 py-2 rounded-lg text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#c9a96e] text-black font-bold shadow-md'
                      : 'bg-black/40 text-[#d6d3cd] hover:text-white border border-white/10 hover:border-[#c9a96e]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-lg bg-black/60 border border-white/10 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`p-1.5 px-3 rounded flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#c9a96e] text-black font-bold shadow'
                    : 'text-[#999999] hover:text-white'
                }`}
                title="List View"
              >
                <LayoutList className="w-4 h-4" />
                <span className="text-[11px]">List</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`p-1.5 px-3 rounded flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#c9a96e] text-black font-bold shadow'
                    : 'text-[#999999] hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="text-[11px]">Grid</span>
              </button>
            </div>

            {/* Search Box */}
            <div className="relative flex-grow lg:w-80">
              <Search className="w-4 h-4 text-[#999999] absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Search Gandipet, Villa, Penthouse..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/50 border border-white/15 text-xs text-[#fafaf8] placeholder-[#999999] focus:outline-none focus:border-[#c9a96e]"
              />
            </div>
          </div>
        </div>

        {/* Projects Render: List View or Grid View */}
        {viewMode === 'list' ? (
          /* ── ARCHITECTURAL LIST VIEW ── */
          <div className="space-y-6 pt-2">
            {filteredProjects.map((proj) => {
              const hasBeforeAfter = proj.beforeAfter && proj.beforeAfter.length > 0;
              const isVilla =
                proj.name.toLowerCase().includes('villa') ||
                proj.type.toLowerCase().includes('villa') ||
                proj.category.toLowerCase() === 'villas';

              return (
                <div
                  key={proj.id}
                  className="rounded-2xl bg-[#121212] border border-white/10 hover:border-[#c9a96e]/70 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col lg:flex-row group"
                >
                  {/* Left Column: Crystal Clear Architectural Photograph */}
                  <div className="lg:w-5/12 relative aspect-[16/10] lg:aspect-auto min-h-[260px] lg:min-h-[320px] overflow-hidden bg-black shrink-0">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />



                    {/* Bottom Photo Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#fafaf8]">
                      <span className="flex items-center gap-1.5 text-[#c9a96e] text-xs font-sans font-medium">
                        <MapPin className="w-4 h-4" /> {proj.location}
                      </span>
                      {proj.area && (
                        <span className="flex items-center gap-1.5 text-[#fafaf8] text-xs font-sans bg-black/60 px-2.5 py-1 rounded border border-white/10">
                          <Ruler className="w-3.5 h-3.5 text-[#c9a96e]" /> {proj.area}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Villa Details, Specs & Actions */}
                  <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[11px] font-sans font-semibold tracking-[0.25em] text-[#c9a96e] uppercase">
                          {isVilla ? 'SIGNATURE VILLA RESIDENCE' : proj.category.toUpperCase()} • {proj.year || '2026'}
                        </span>
                        <span className="text-[10px] font-sans tracking-widest uppercase px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#d6d3cd]">
                          TURNKEY ARCHITECTURE
                        </span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors leading-tight font-normal">
                        {proj.name}
                      </h2>

                      <p className="text-xs sm:text-[13px] text-[#c9a96e] font-sans font-medium tracking-wide">
                        {proj.type}
                      </p>

                      <p className="text-xs sm:text-sm text-[#d6d3cd] font-light leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>

                      {/* Specs Highlights */}
                      {proj.specs && proj.specs.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-2">
                          {proj.specs.slice(0, 4).map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-sans text-[#e8e4de] bg-black/50 border border-[#c9a96e]/20 flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                              <span className="truncate max-w-[260px]">{spec}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-[#999999] font-sans">
                        Client: <span className="text-[#fafaf8] font-medium">{proj.client}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <Link
                          href={`/projects/${proj.slug || proj.id}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c9a96e] text-black text-xs font-sans font-bold tracking-wider uppercase hover:bg-[#dfc698] transition-all shadow-xl cursor-pointer"
                        >
                          <span>VIEW DETAILS</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── ARCHITECTURAL GRID VIEW (2 per row on mobile, 3 on desktop) ── */
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-2">
            {filteredProjects.map((proj) => {
              const hasBeforeAfter = proj.beforeAfter && proj.beforeAfter.length > 0;
              const isVilla =
                proj.name.toLowerCase().includes('villa') ||
                proj.type.toLowerCase().includes('villa') ||
                proj.category.toLowerCase() === 'villas';

              return (
                <div
                  key={proj.id}
                  className="rounded-xl sm:rounded-2xl bg-[#121212] border border-white/10 hover:border-[#c9a96e]/70 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-black">
                      <img
                        src={proj.image}
                        alt={proj.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-100 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3.5 sm:right-3.5 flex items-center justify-between text-[10px] sm:text-xs text-[#fafaf8]">
                        <span className="flex items-center gap-1 text-[#c9a96e] text-[9px] sm:text-[11px] font-sans font-medium truncate">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" /> {proj.location}
                        </span>
                        {proj.area && (
                          <span className="hidden sm:flex items-center gap-1 text-[#d6d3cd] text-[11px] font-sans shrink-0">
                            <Ruler className="w-3.5 h-3.5 text-[#c9a96e]" /> {proj.area}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                      <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors leading-snug font-normal line-clamp-1">
                        {proj.name}
                      </h3>
                      
                      <p className="text-[10px] sm:text-sm text-[#d6d3cd] font-light line-clamp-2 sm:line-clamp-3 leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-5 border-t border-white/10 bg-black/40 flex items-center justify-between">
                    <div className="text-[9px] sm:text-[11px] font-sans text-[#999999] truncate max-w-[120px] sm:max-w-[170px]">
                      Client: <span className="text-[#fafaf8] font-medium">{proj.client}</span>
                    </div>
                    
                    <Link
                      href={`/projects/${proj.slug || proj.id}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded bg-[#c9a96e] text-black text-[10px] sm:text-xs font-sans font-bold tracking-wider uppercase hover:bg-[#dfc698] transition-all shadow-md shrink-0"
                    >
                      <span className="hidden sm:inline">VIEW DETAILS</span>
                      <span className="sm:hidden">VIEW</span>
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#121212] rounded-2xl border border-white/10">
            <Building2 className="w-12 h-12 text-[#c9a96e]/40 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-[#fafaf8]">No projects found</h3>
            <p className="text-xs text-[#999999] mt-1">Try clearing your search query or selecting another category.</p>
          </div>
        )}

      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={{ scope: quoteScope || 'PROJECT CONSULTATION' }}
      />
    </main>
  );
}
