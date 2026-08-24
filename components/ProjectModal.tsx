'use client';

import React, { useState } from 'react';
import {
  X,
  MapPin,
  Building2,
  Calendar,
  Layers,
  ShieldCheck,
  ArrowRight,
  Camera,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Award,
  HardHat,
  Ruler,
  Info
} from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: number;
    name: string;
    location: string;
    type: string;
    area: string;
    category: string;
    image: string;
    client?: string;
    year?: string;
    specs?: string[];
    description?: string;
    gallery?: string[];
  } | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export function ProjectModal({ project, onClose, onRequestQuote }: ProjectModalProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'GALLERY' | 'MATTER' | 'SPECS'>('GALLERY');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!project) return null;

  const defaultSpecs = [
    'Post-Tensioned RCC Slab Construction & Deep Bored Piling',
    'Unitized Double Glazed Curtain Wall Facade (28mm Low-E Glass)',
    'Custom German CNC Precision Joinery & Modular Ergonomic Layouts',
    'Zero-Accident HSE Safety Protocols & Green Building Certification',
    'Digital Measurement Book (MB) Reconciliation & Quality Acceptance'
  ];

  const defaultGallery = [
    project.image,
    'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?w=1600&q=85',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=85',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
  ];

  const specsList = project.specs || defaultSpecs;
  const galleryList = project.gallery || defaultGallery;
  const currentPhoto = galleryList[activePhotoIndex] || project.image;

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % galleryList.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + galleryList.length) % galleryList.length);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in">
        <div
          className="bg-[#F6F4EE] border border-[#BFBFBF] rounded-3xl w-full max-w-5xl max-h-[94vh] overflow-y-auto shadow-2xl flex flex-col relative animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Floating Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-30 h-10 w-10 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center backdrop-blur transition-all shadow-xl border border-white/20"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Main Hero Viewer with Next/Prev Arrows */}
          <div className="relative h-80 sm:h-[420px] w-full overflow-hidden rounded-t-3xl bg-slate-950 group">
            <img
              src={currentPhoto}
              alt={project.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Previous Photo Button */}
            {galleryList.length > 1 && (
              <button
                onClick={handlePrevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur transition-all border border-white/20"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Photo Button */}
            {galleryList.length > 1 && (
              <button
                onClick={handleNextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur transition-all border border-white/20"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Fullscreen Lightbox Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 backdrop-blur transition-all border border-white/20"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" /> Fullscreen HD View
            </button>

            {/* Hero Overlay Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059] text-slate-950 text-[11px] font-extrabold uppercase tracking-wider mb-2.5 shadow-md">
                {project.category}
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white tracking-tight leading-tight">
                {project.name}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/90 mt-2 font-medium">
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#C5A059]" /> {project.location}</span>
                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-[#C5A059]" /> {project.area}</span>
                <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-[#C5A059]" /> {project.type}</span>
                {project.client && <span className="flex items-center gap-1.5 text-amber-300 font-bold">• Client: {project.client}</span>}
              </div>
            </div>

            {/* Photo Counter Pill */}
            <div className="absolute bottom-6 right-6 z-20 bg-black/70 text-white text-xs font-mono font-bold px-3 py-1 rounded-full border border-white/20">
              {activePhotoIndex + 1} / {galleryList.length}
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-[#1A374D] px-6 py-3 border-b border-[#2B5573] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('GALLERY')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                  activeTab === 'GALLERY'
                    ? 'bg-[#C5A059] text-slate-950 shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Camera className="w-4 h-4" /> Construction Photo Gallery ({galleryList.length})
              </button>

              <button
                onClick={() => setActiveTab('MATTER')}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                  activeTab === 'MATTER'
                    ? 'bg-[#C5A059] text-slate-950 shadow-md'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Info className="w-4 h-4" /> Scope Overview & Matter
              </button>


            </div>

            <div className="text-[11px] text-[#C5A059] font-serif font-bold italic hidden sm:block">
              Anjani Infra Engineering & Execution
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 lg:p-8 space-y-8 text-[#383735]">

            {/* TAB 1: PHOTO GALLERY GRID */}
            {activeTab === 'GALLERY' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#2B5573] flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#C5A059]" /> High-Resolution Site Inspections & Photo Gallery
                  </h3>
                  <span className="text-xs text-[#383735]/70 font-semibold">Click any image to set active view</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {galleryList.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIndex(idx)}
                      className={`relative h-32 rounded-2xl overflow-hidden border-2 transition-all group ${
                        activePhotoIndex === idx
                          ? 'border-[#C5A059] ring-4 ring-[#C5A059]/30 shadow-lg scale-[1.02]'
                          : 'border-white hover:border-[#2B5573]'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`Construction photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                        Site Photo {idx + 1}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: DETAILED MATTER */}
            {activeTab === 'MATTER' && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">Complete Project Execution Matter</h3>
                <div className="bg-white p-6 rounded-2xl border border-[#BFBFBF]/60 space-y-4 shadow-xs">
                  <p className="text-sm lg:text-base text-[#383735]/90 leading-relaxed">
                    {project.description ||
                      `The ${project.name} represents Anjani Infra's end-to-end execution excellence. Constructed as a ${project.type} spanning ${project.area} in ${project.location}, the scope integrated heavy RCC foundation works, high-performance exterior double-glazed facade glazing, custom joinery, and executive workplace fitouts.`}
                  </p>
                  <p className="text-sm text-[#383735]/80 leading-relaxed border-t border-[#BFBFBF]/30 pt-4">
                    All site construction was monitored using our digital Measurement Book (MB) reconciliation workflow, ensuring zero schedule slippage and full ISO 9001 quality assurance compliance.
                  </p>
                </div>
              </div>
            )}

            {/* Footer Call to Action */}
            <div className="pt-4 border-t border-[#BFBFBF]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#383735]/80 font-medium">
                Want a similar architectural specification or civil estimate for your project site?
              </div>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href={`/projects/${project.id}`}
                  className="px-5 py-3 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] text-xs font-extrabold tracking-wide uppercase flex items-center gap-1.5 shadow-md transition-all"
                >
                  <span>View Full Page</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => {
                    onClose();
                    onRequestQuote();
                  }}
                  className="px-6 py-3 rounded-xl bg-[#2B5573] hover:bg-[#1A374D] text-white text-xs font-bold tracking-wide uppercase flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Inquire For Similar Scope</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 h-12 w-12 bg-white/20 hover:bg-white text-white rounded-full flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={currentPhoto}
            alt={project.name}
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
