'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, Building2, MapPin, Calendar, Ruler, Award, 
  CheckCircle2, ShieldCheck, FileText, ChevronRight, Maximize2, X 
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { QuickQuoteModal } from '@/components/QuickQuoteModal';

export default function ProjectDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params?.id);

  const project = projectsData.find(p => p.id === projectId) || projectsData[0];
  
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#383735] font-sans pt-24 pb-20 overflow-x-hidden">
      
      {/* ───────────────────────────────────────────────────────────── */}
      {/* TOP BREADCRUMB & BACK ACTION */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-4 flex items-center justify-between">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#BFBFBF]/60 text-xs font-bold uppercase tracking-wider text-[#2B5573] hover:bg-[#FCF9EB] transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#C5A059]" />
          <span>Back to All Projects</span>
        </Link>

        <div className="hidden sm:flex items-center gap-2 text-xs text-[#383735]/60 font-semibold">
          <Link href="/" className="hover:text-[#2B5573]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/#projects" className="hover:text-[#2B5573]">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#2B5573] font-bold truncate max-w-[200px]">{project.name}</span>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PROJECT HERO BANNER & CLEAN IMAGE SHOWCASE */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-4 space-y-6">
        
        {/* Clean Image Card - No Text Overlay */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-4 border-white shadow-xl h-80 sm:h-[460px] w-full">
          <img
            src={project.image}
            alt={project.name}
            onError={(e) => {
              const fallback = project.category === 'Civil'
                ? '/projects/civil.jpg'
                : project.category === 'Interior Fitout'
                ? '/projects/interior.jpg'
                : '/projects/facade.jpg';
              (e.target as HTMLImageElement).src = fallback;
            }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Executive Project Details Header - Placed BELOW Image */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-md space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[10px] font-extrabold uppercase tracking-widest shadow-xs">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FCF9EB] text-[#1A374D] text-[10px] font-extrabold uppercase tracking-wider border border-[#C5A059]/40">
                {project.type}
              </span>
            </div>

            <div className="text-xs font-mono font-bold text-[#C5A059] flex items-center gap-1.5">
              <span>PROJECT ID #{project.id}</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-black text-[#1A374D] leading-tight">
            {project.name}
          </h1>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-[#BFBFBF]/40 text-[#383735] text-xs">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FCF9EB]/70 border border-[#C5A059]/30">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[9px] uppercase font-extrabold text-[#383735]/60">Location</div>
                <div className="font-serif font-bold text-[#1A374D] text-sm">{project.location}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FCF9EB]/70 border border-[#C5A059]/30">
              <Ruler className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[9px] uppercase font-extrabold text-[#383735]/60">Built-Up Area</div>
                <div className="font-serif font-bold text-[#1A374D] text-sm">{project.area}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FCF9EB]/70 border border-[#C5A059]/30">
              <Award className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[9px] uppercase font-extrabold text-[#383735]/60">Client</div>
                <div className="font-serif font-bold text-[#1A374D] text-sm truncate max-w-[140px]">{project.client}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#FCF9EB]/70 border border-[#C5A059]/30">
              <Calendar className="w-5 h-5 text-[#C5A059] shrink-0" />
              <div>
                <div className="text-[9px] uppercase font-extrabold text-[#383735]/60">Year Completed</div>
                <div className="font-serif font-bold text-[#1A374D] text-sm">{project.year}</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* MAIN PROJECT DETAILS & TECHNICAL SPECS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 8 Cols: Overview, Specs & Photo Gallery */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Executive Overview */}
          <div className="bg-white p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-4">
            <h2 className="text-xl font-serif font-bold text-[#1A374D] flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#C5A059]" /> Project Overview & Scope
            </h2>
            <p className="text-sm text-[#383735]/85 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>



          {/* High-Resolution Construction & Site Gallery */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-serif font-bold text-[#1A374D]">
                Site Photo Gallery ({project.gallery.length} High-Res Shots)
              </h2>
              <span className="text-xs text-[#383735]/60 font-semibold">Click photo to enlarge</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPhoto(imgUrl)}
                  className="relative h-48 rounded-2xl overflow-hidden group cursor-pointer border border-[#BFBFBF]/60 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-900"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.name} site photo ${i+1}`}
                    onError={(e) => {
                      const fallback = project.category === 'Civil'
                        ? 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?w=800&q=80'
                        : project.category === 'Interior Fitout'
                        ? 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80'
                        : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80';
                      (e.target as HTMLImageElement).src = fallback;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-6 h-6 text-[#C5A059]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 4 Cols: Project Summary & Quote CTA Card */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-[#1A374D] text-white p-7 rounded-3xl shadow-xl space-y-6 border border-[#2B5573]">
            <div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5A059]">Project Summary</div>
              <h3 className="font-serif font-bold text-lg text-white mt-1">{project.name}</h3>
            </div>

            <div className="space-y-3 text-xs border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Discipline:</span>
                <span className="font-bold text-[#C5A059]">{project.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Built-Up Area:</span>
                <span className="font-bold">{project.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Client:</span>
                <span className="font-bold">{project.client}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Year Completed:</span>
                <span className="font-bold">{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60 font-medium">Location:</span>
                <span className="font-bold">{project.location}</span>
              </div>
            </div>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="w-full py-4 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>Inquire Similar Project</span>
            </button>
          </div>

        </div>

      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PHOTO LIGHTBOX MODAL */}
      {/* ───────────────────────────────────────────────────────────── */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 h-10 w-10 bg-slate-900/80 text-white rounded-full flex items-center justify-center hover:bg-slate-950 transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto}
              alt="Project detail photo"
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={{ scope: `PROJECT CONSULTATION: ${project.name}` }}
      />

    </div>
  );
}
