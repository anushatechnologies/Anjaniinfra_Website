'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Building2, Search, Filter, ArrowUpRight, MapPin, Ruler } from 'lucide-react';
import { projectsData } from '@/data/projects';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

export default function ProjectsPortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const filteredProjects = projectsData.filter(proj => {
    const matchesCategory = activeCategory === 'All' || proj.category === activeCategory;
    const matchesSearch = proj.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#383735] pb-24">
      {/* Hero Banner */}
      <section className="bg-[#1A374D] text-white py-20 px-5 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-extrabold uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5" /> Landmark Portfolio Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white max-w-3xl">
            Commercial Landmarks & Architectural Engineering
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Explore our completed and ongoing Turnkey EPC projects spanning Civil Superstructures, Luxury Workplace Fitouts, and High-Performance Facades across India.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#BFBFBF]/60 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['All', 'Civil', 'Interior Fitout', 'Exterior Facade'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#1A374D] text-white shadow-sm'
                    : 'bg-[#FCF9EB] text-[#1A374D] hover:bg-[#1A374D]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#383735]/50 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search project, city or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#FCF9EB] border border-[#BFBFBF]/60 text-xs font-medium text-[#383735] focus:outline-none focus:border-[#1A374D]"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(proj => (
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
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-xs">
                      {proj.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif font-black text-[#1A374D] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#383735]/80 font-bold">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> {proj.location}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Ruler className="w-3.5 h-3.5 text-[#C5A059]" /> {proj.area}</span>
                  </div>
                  <p className="text-xs text-[#383735]/85 line-clamp-3 leading-relaxed font-normal pt-1">
                    {proj.description}
                  </p>
                </div>
              </div>

              <div className="p-5 border-t border-[#BFBFBF]/40 bg-[#FCF9EB]/60 flex items-center justify-between">
                <div className="text-[11px] font-bold text-[#383735]/70">
                  Client: <span className="text-[#1A374D]">{proj.client}</span>
                </div>
                <Link
                  href={`/projects/${proj.id}`}
                  className="px-4 py-2 rounded-xl bg-[#1A374D] hover:bg-[#C5A059] hover:text-slate-950 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-xs"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <QuickQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
