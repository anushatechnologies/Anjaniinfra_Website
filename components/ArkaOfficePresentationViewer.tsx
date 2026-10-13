'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  Sparkles,
  Grid,
  Film,
  ZoomIn,
  Compass,
  CheckCircle2,
  BookOpen,
  Building2,
  Users
} from 'lucide-react';

export interface PresentationPageItem {
  pageNumber: number;
  image: string;
  heading: string;
  sectionId: string;
  floor: string;
  description: string;
}

export interface SectionCategory {
  id: string;
  orderNum: number;
  title: string;
  floor: string;
  start: number;
  end: number;
  desc: string;
}

// 4 distinct corporate zones of Team 4 Arka Office
export const ARKA_SECTIONS: SectionCategory[] = [
  {
    id: 'reception',
    orderNum: 1,
    title: 'Corporate Reception Lobby',
    floor: 'Main Lobby',
    start: 1,
    end: 3,
    desc: 'Grand corporate reception with bookmatched marble desk, backlit ARKA branding wall, acoustic wood slats, and visitor lounge.'
  },
  {
    id: 'scale-model',
    orderNum: 2,
    title: 'Scale-Model Experience Zone',
    floor: 'Experience Centre',
    start: 4,
    end: 4,
    desc: 'Circular Italian marble architectural model display plinth featuring circular recessed dome lighting and biophilic styling.'
  },
  {
    id: 'corridor-lounge',
    orderNum: 3,
    title: 'Executive Corridor & Lounge',
    floor: 'Office Wing',
    start: 5,
    end: 5,
    desc: 'Linear glass-partitioned corporate hallway paired with a relaxed breakout lounge and modular geometric bookcase partition.'
  },
  {
    id: 'creche-activity',
    orderNum: 4,
    title: 'Crèche & Family Activity Zone',
    floor: 'Amenity Wing',
    start: 6,
    end: 7,
    desc: 'Progressive corporate amenity providing an in-office kids play suite, soft cushioned safety paneling, and collaborative lounge.'
  }
];

export const ARKA_PAGES: PresentationPageItem[] = [
  {
    pageNumber: 1,
    image: '/projects/arka-office/pages/page_01.jpg',
    heading: 'Grand Corporate Reception Lobby — Front Elevation',
    sectionId: 'reception',
    floor: 'Main Entrance Lobby',
    description:
      'Frontal elevation of the flagship reception desk clad in bookmatched Italian statuario marble with an illuminated ARKA brand backdrop, linear recessed ceiling tracks, and organic stone lounge tables.'
  },
  {
    pageNumber: 2,
    image: '/projects/arka-office/pages/page_02.jpg',
    heading: 'Reception Lobby & Executive Lounge — Left Perspective',
    sectionId: 'reception',
    floor: 'Main Entrance Lobby',
    description:
      'Three-quarter angled view highlighting the warm acoustic vertical timber slat paneling, plush executive sofa seating, architectural sculpture pedestals, and seamless marble flooring.'
  },
  {
    pageNumber: 3,
    image: '/projects/arka-office/pages/page_03.jpg',
    heading: 'Reception & Entrance Portal — Right Perspective',
    sectionId: 'reception',
    floor: 'Main Entrance Lobby',
    description:
      'Opposite angled perspective showcasing the frameless glass entrance portal, full-scale masterplan architectural mural wall, and contemporary seating cluster.'
  },
  {
    pageNumber: 4,
    image: '/projects/arka-office/pages/page_04.jpg',
    heading: 'Master Scale-Model Experience Plinth & Dome Lighting',
    sectionId: 'scale-model',
    floor: 'Experience Centre Wing',
    description:
      'Custom curved Italian marble architectural scale-model plinth with indirect LED base cove wash, overhead circular acoustic dome fixture, and fluted timber wall backdrop.'
  },
  {
    pageNumber: 5,
    image: '/projects/arka-office/pages/page_05.jpg',
    heading: 'Executive Circulation Corridor & Creative Breakout Lounge',
    sectionId: 'corridor-lounge',
    floor: 'Corporate Office Wing',
    description:
      'Expansive linear office corridor bordered by industrial black steel-framed acoustic glass partitions, anchored by a colorful modular cubic bookcase dividing the casual collaboration lounge.'
  },
  {
    pageNumber: 6,
    image: '/projects/arka-office/pages/page_06.jpg',
    heading: 'In-Office Kids Activity Zone & Executive Cabins',
    sectionId: 'creche-activity',
    floor: 'Amenity & Wellness Wing',
    description:
      'Innovative workplace amenity featuring a dedicated play and learning crèche for employee families, acoustic wall tiles, and adjacent executive office suites.'
  },
  {
    pageNumber: 7,
    image: '/projects/arka-office/pages/page_07.jpg',
    heading: 'Kids Playroom & Informal Collaboration Suite',
    sectionId: 'creche-activity',
    floor: 'Amenity & Wellness Wing',
    description:
      'Comprehensive perspective showing the modular geometric room divider unit separating the informal employee sofa lounge from the vibrant kids creative playroom.'
  }
];

export function ArkaOfficePresentationViewer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('reception');
  const [activeViewMode, setActiveViewMode] = useState<'SLIDESHOW' | 'GRID'>('SLIDESHOW');

  const totalPages = ARKA_PAGES.length;
  const currentSlide = ARKA_PAGES[currentPage - 1];

  // Sync active section category tab when current page changes
  useEffect(() => {
    const sec = ARKA_SECTIONS.find((s) => currentPage >= s.start && currentPage <= s.end);
    if (sec && sec.id !== activeSectionId) {
      setActiveSectionId(sec.id);
    }
  }, [currentPage, activeSectionId]);

  // Navigate functions
  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  }, [totalPages]);

  const jumpToSection = (section: SectionCategory) => {
    setCurrentPage(section.start);
    setActiveSectionId(section.id);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNextPage();
      } else if (e.key === 'ArrowLeft') {
        goToPrevPage();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage, isLightboxOpen]);

  return (
    <div className="bg-[#0F1E2A] text-white rounded-3xl p-4 sm:p-8 lg:p-10 shadow-2xl border border-white/10 space-y-8">
      {/* ──────────────── 1. Header & Navigation Controls ──────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-1">
            <Building2 className="w-4 h-4 text-[#C5A059]" />
            <span>Corporate Interior Architecture • Lanco Hills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
            Team 4 Arka Corporate Office Presentation
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Browse through all 7 high-definition architectural presentation renders of the corporate headquarters.
          </p>
        </div>

        {/* View mode toggle & Fullscreen trigger */}
        <div className="flex items-center gap-3">
          <div className="bg-slate-900/80 p-1 rounded-xl border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setActiveViewMode('SLIDESHOW')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeViewMode === 'SLIDESHOW'
                  ? 'bg-[#C5A059] text-slate-950 shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Slideshow</span>
            </button>
            <button
              onClick={() => setActiveViewMode('GRID')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeViewMode === 'GRID'
                  ? 'bg-[#C5A059] text-slate-950 shadow-sm'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All 7 Slides</span>
            </button>
          </div>

          <button
            onClick={() => setIsLightboxOpen(true)}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#C5A059] transition-all border border-white/10 flex items-center gap-1.5 text-xs font-bold cursor-pointer"
            title="Open Fullscreen Lightbox"
          >
            <Maximize2 className="w-4 h-4" />
            <span className="hidden sm:inline">Fullscreen</span>
          </button>
        </div>
      </div>

      {/* ──────────────── 2. Section Jump Tabs ──────────────── */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Jump to Corporate Zone</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {ARKA_SECTIONS.map((section) => {
            const isActive = activeSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => jumpToSection(section)}
                className={`text-left p-3 rounded-2xl transition-all border cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-slate-950 border-[#C5A059] shadow-lg scale-[1.02]'
                    : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-0.5">
                  <span className={isActive ? 'text-slate-900 font-black' : 'text-[#C5A059]'}>
                    Slides {section.start === section.end ? `0${section.start}` : `0${section.start} - 0${section.end}`}
                  </span>
                  <span className={`text-[9px] font-bold ${isActive ? 'text-slate-800' : 'text-white/40'}`}>
                    {section.floor}
                  </span>
                </div>
                <div className="text-xs font-bold leading-tight line-clamp-1">{section.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ──────────────── 3. Main Slideshow View ──────────────── */}
      {activeViewMode === 'SLIDESHOW' && (
        <div className="space-y-6">
          {/* Main Slide Stage */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl group">
            {/* The Presentation Image */}
            <div
              className="relative aspect-[16/10] w-full flex items-center justify-center cursor-zoom-in overflow-hidden"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img
                src={currentSlide.image}
                alt={currentSlide.heading}
                className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Watermark/badge */}
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-mono text-[#C5A059] font-bold flex items-center gap-2">
                <span>SLIDE {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/90">{currentSlide.floor}</span>
              </div>

              {/* Click to zoom indicator */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[11px] font-semibold text-white/90 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Click to Expand</span>
              </div>
            </div>

            {/* Left/Right floating navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevPage();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all border border-white/20 backdrop-blur shadow-xl cursor-pointer"
              title="Previous Slide (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextPage();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-950/70 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all border border-white/20 backdrop-blur shadow-xl cursor-pointer"
              title="Next Slide (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Slide Description & Details */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-[#C5A059]/20 text-[#C5A059] text-[10px] font-mono font-bold uppercase">
                  Slide {String(currentPage).padStart(2, '0')}
                </span>
                <span className="text-xs text-white/60 font-semibold">• {currentSlide.floor}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-black text-white">
                {currentSlide.heading}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-3xl leading-relaxed">
                {currentSlide.description}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <button
                onClick={goToPrevPage}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>
              <button
                onClick={goToNextPage}
                className="px-4 py-2 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-slate-950 text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ──────────────── Thumbnail Strip Reel ──────────────── */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-white/60">
              <span className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#C5A059]" /> All Presentation Slides (1 to 7)
              </span>
              <span>Slide {currentPage} of {totalPages}</span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x">
              {ARKA_PAGES.map((page) => {
                const isSelected = page.pageNumber === currentPage;
                return (
                  <button
                    key={page.pageNumber}
                    onClick={() => setCurrentPage(page.pageNumber)}
                    className={`shrink-0 w-28 sm:w-36 rounded-xl overflow-hidden border-2 transition-all cursor-pointer relative group snap-start ${
                      isSelected
                        ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 scale-105 shadow-xl'
                        : 'border-white/15 opacity-70 hover:opacity-100 hover:border-white/40'
                    }`}
                  >
                    <div className="aspect-[16/10] bg-slate-900 relative">
                      <img
                        src={page.image}
                        alt={`Slide ${page.pageNumber}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-1 left-1 bg-slate-950/80 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold text-white">
                        {String(page.pageNumber).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="p-1.5 bg-slate-900/90 text-left">
                      <div className="text-[10px] font-bold text-white truncate">{page.heading}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ──────────────── 4. All Slides Grid View ──────────────── */}
      {activeViewMode === 'GRID' && (
        <div className="space-y-8 animate-fade-in">
          {ARKA_SECTIONS.map((section) => {
            const sectionPages = ARKA_PAGES.filter(
              (p) => p.pageNumber >= section.start && p.pageNumber <= section.end
            );
            return (
              <div key={section.id} className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <h3 className="text-base font-serif font-black text-white">{section.title}</h3>
                    <span className="text-xs text-white/50">({section.floor})</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#C5A059]">
                    {section.start === section.end ? `Slide ${section.start}` : `Slides ${section.start} - ${section.end}`}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectionPages.map((page) => (
                    <div
                      key={page.pageNumber}
                      onClick={() => {
                        setCurrentPage(page.pageNumber);
                        setActiveViewMode('SLIDESHOW');
                      }}
                      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/60 hover:shadow-xl transition-all cursor-pointer flex flex-col"
                    >
                      <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden">
                        <img
                          src={page.image}
                          alt={page.heading}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-slate-950/80 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#C5A059]">
                          Slide {String(page.pageNumber).padStart(2, '0')}
                        </div>
                      </div>
                      <div className="p-3.5 flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                            {page.heading}
                          </h4>
                          <p className="text-[11px] text-white/60 line-clamp-2 mt-1">
                            {page.description}
                          </p>
                        </div>
                        <div className="mt-2 text-[10px] font-bold text-[#C5A059] flex items-center gap-1">
                          <span>View Slide</span> <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ──────────────── 5. Fullscreen Lightbox Modal ──────────────── */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#C5A059] text-slate-950 text-xs font-black">
                SLIDE {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>
              <div className="text-sm font-serif font-bold truncate max-w-md sm:max-w-xl">
                {currentSlide.heading}
              </div>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Stage */}
          <div className="relative flex-1 flex items-center justify-center p-2 my-2 overflow-hidden">
            <img
              src={currentSlide.image}
              alt={currentSlide.heading}
              className="max-h-[85vh] max-w-full object-contain select-none shadow-2xl"
            />

            <button
              onClick={goToPrevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all border border-white/20 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all border border-white/20 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="border-t border-white/10 pt-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/80">
            <p className="text-xs text-white/70 truncate max-w-2xl">
              {currentSlide.description}
            </p>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span>Press ESC to exit</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevPage}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={goToNextPage}
                  className="px-3 py-1 rounded bg-[#C5A059] text-slate-950 font-bold cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
