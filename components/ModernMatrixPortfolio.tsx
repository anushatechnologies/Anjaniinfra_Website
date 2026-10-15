'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/data/projects';
import { X, ChevronLeft, ChevronRight, ExternalLink, Eye } from 'lucide-react';

interface ModernMatrixPortfolioProps {
  projects: ProjectItem[];
}

export function ModernMatrixPortfolio({ projects }: ModernMatrixPortfolioProps) {
  // Lightbox state
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState<number>(0);

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;
  const projectImages = activeProject ? (activeProject.gallery && activeProject.gallery.length > 0 ? activeProject.gallery : [activeProject.image]) : [];

  const handleOpenLightbox = (projectIndex: number, imgIndex: number = 0) => {
    setActiveProjectIdx(projectIndex);
    setActiveImageIdx(imgIndex);
  };

  const handleCloseLightbox = () => {
    setActiveProjectIdx(null);
    setActiveImageIdx(0);
  };

  const handleNextImage = useCallback(() => {
    if (!projectImages.length) return;
    setActiveImageIdx((prev) => (prev + 1) % projectImages.length);
  }, [projectImages.length]);

  const handlePrevImage = useCallback(() => {
    if (!projectImages.length) return;
    setActiveImageIdx((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  }, [projectImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeProjectIdx === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIdx, handleNextImage, handlePrevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeProjectIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeProjectIdx]);

  return (
    <>
      {/* ──────────────── PORTFOLIO SECTION ──────────────── */}
      <section id="portfolio" className="py-10 sm:py-14 bg-[#0a0a0a] text-[#e8e4de] relative overflow-hidden scroll-mt-20">
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <div className="mm-eyebrow">SELECTED PROJECTS</div>
              <h2 className="mm-title !mb-3">
                Spaces We&apos;ve <em>Transformed</em>
              </h2>
              <p className="text-sm sm:text-base text-[#d6d3cd] max-w-xl leading-relaxed">
                Explore our portfolio of bespoke penthouses, architectural villas, and corporate headquarters crafted across Hyderabad.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/projects"
                className="mm-btn py-3 px-6 text-[11px]"
              >
                <span>VIEW ALL ARCHIVES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => {
              const photoCount = project.gallery?.length || 1;
              return (
                <div
                  key={project.id}
                  onClick={() => handleOpenLightbox(index, 0)}
                  className="group relative bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col shadow-lg"
                >
                  {/* Image Container - 100% Crystal Clear Without Dark/Fuzzy Overlays */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle bottom gradient only for subtle edge separation */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                    {/* Photo count badge */}
                    <div className="absolute top-4 right-4 bg-[#0a0a0a]/90 border border-white/20 text-[#e8e4de] px-3 py-1 text-[11px] font-sans font-medium tracking-wider rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                      <span>{photoCount} photos</span>
                    </div>

                    {/* Hover Quick Action Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/25">
                      <div className="bg-[#0a0a0a] border border-[#c9a96e] text-[#c9a96e] px-4 py-2 text-xs font-sans tracking-[0.2em] uppercase flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-xl">
                        <Eye className="w-3.5 h-3.5" />
                        <span>EXPLORE GALLERY</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 bg-[#161616] flex flex-col justify-between flex-grow border-t border-white/10">
                    <div>
                      <div className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e] font-sans font-semibold mb-1.5">
                        {project.location} &bull; {project.category}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors leading-snug font-normal">
                        {project.name}
                      </h3>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#d6d3cd]">
                      <span className="tracking-wider font-normal">{project.area || 'Turnkey Execution'}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightbox(index, 0);
                        }}
                        className="text-[#c9a96e] hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1.5 font-semibold cursor-pointer"
                      >
                        <span>VIEW PHOTOS</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────── FULLSCREEN LIGHTBOX MODAL ──────────────── */}
      {activeProject && (
        <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-between text-[#e8e4de] animate-fade-in">
          
          {/* Top Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-[#0a0a0a]">
            <div>
              <h4 className="font-serif text-lg sm:text-2xl text-[#fafaf8]">
                {activeProject.name}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#c9a96e] tracking-wider uppercase font-sans">
                {activeProject.location} &bull; {activeProject.category}
              </p>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">

              {/* Counter */}
              <div className="text-xs sm:text-sm font-sans tracking-widest text-[#e8e4de] px-3 py-1 border border-white/20 rounded bg-[#141414]">
                {activeImageIdx + 1} / {projectImages.length}
              </div>

              {/* Close Button */}
              <button
                onClick={handleCloseLightbox}
                className="p-2 sm:p-2.5 rounded-full bg-[#141414] hover:bg-white/10 text-[#fafaf8] hover:text-[#c9a96e] transition-colors border border-white/10"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Visual Stage */}
          <div className="relative flex-grow flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none bg-black">
            
            {/* Prev Button */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 sm:left-8 z-20 p-3 sm:p-4 rounded-full bg-[#141414] hover:bg-[#c9a96e] text-[#fafaf8] hover:text-[#0a0a0a] border border-white/20 transition-all shadow-xl"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image - 100% Crisp & High-Definition */}
            <div className="relative max-w-7xl max-h-[80vh] w-full h-full flex items-center justify-center">
              <img
                key={projectImages[activeImageIdx]}
                src={projectImages[activeImageIdx]}
                alt={`${activeProject.name} - slide ${activeImageIdx + 1}`}
                className="max-h-[80vh] max-w-full object-contain rounded shadow-2xl transition-all duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 sm:right-8 z-20 p-3 sm:p-4 rounded-full bg-[#141414] hover:bg-[#c9a96e] text-[#fafaf8] hover:text-[#0a0a0a] border border-white/20 transition-all shadow-xl"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div className="p-3 sm:p-4 border-t border-white/10 bg-[#0a0a0a]">
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-5xl mx-auto py-1 px-2 scrollbar-thin">
              {projectImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIdx(i)}
                  className={`shrink-0 w-14 sm:w-20 aspect-video rounded overflow-hidden border transition-all duration-200 ${
                    i === activeImageIdx
                      ? 'border-[#c9a96e] ring-2 ring-[#c9a96e]/60 scale-105 opacity-100'
                      : 'border-white/20 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </>
  );
}
