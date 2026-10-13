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
  Home,
  Wine,
  UtensilsCrossed,
  Flame
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

// 6 distinct zones across Lower Ground and Upper Ground Floors
export const VILLA16_SECTIONS: SectionCategory[] = [
  {
    id: 'entrance-drawing',
    orderNum: 1,
    title: 'Entrance & Formal Drawing Room',
    floor: 'Lower Ground Floor',
    start: 1,
    end: 4,
    desc: 'Grand entrance foyer with vertical fluted cladding, stone planters, and formal drawing room featuring moss accent wall.'
  },
  {
    id: 'living-lounge',
    orderNum: 2,
    title: 'Lower Living Lounge',
    floor: 'Lower Ground Floor',
    start: 5,
    end: 8,
    desc: 'Expansive double-height living room with Italian marble flooring, designer coffee tables, and contemporary TV media console.'
  },
  {
    id: 'bar-party',
    orderNum: 3,
    title: 'Private Bar & Party Zone',
    floor: 'Lower Ground Floor',
    start: 9,
    end: 10,
    desc: 'Bespoke entertainment lounge with high-gloss bar counter, mood lighting, and plush velvet lounge seating.'
  },
  {
    id: 'upper-layout-lift',
    orderNum: 4,
    title: 'Upper Floor & Lift Lounge',
    floor: 'Upper Ground Floor',
    start: 11,
    end: 13,
    desc: 'Upper ground floor architectural layout plan (Slide 11) followed by serene private lift foyer perspectives.'
  },
  {
    id: 'kitchen-dining',
    orderNum: 5,
    title: 'Kitchen & Fine Dining',
    floor: 'Upper Ground Floor',
    start: 14,
    end: 16,
    desc: 'Modular chef kitchen with breakfast counter island and opulent 8-seater dining room overlooking the garden courtyard.'
  },
  {
    id: 'pooja-family',
    orderNum: 6,
    title: 'Pooja Room & Family Lounge',
    floor: 'Upper Ground Floor',
    start: 17,
    end: 18,
    desc: 'Sacred pooja enclave designed with traditional brass and timber accents paired with a cozy family living suite.'
  }
];

export const VILLA16_PAGES: PresentationPageItem[] = [
  {
    pageNumber: 1,
    image: '/projects/temple-tree-villa-16/pages/page_01.jpg',
    heading: 'Jayabheri Temple Tree East Face Villa 16 — Title & Entrance View',
    sectionId: 'entrance-drawing',
    floor: 'Lower Ground Floor',
    description:
      'Proposed architectural interior design presentation cover for Jayabheri Temple Tree, East Face Villa 16, Narsingi / Kokapet corridor, Hyderabad.'
  },
  {
    pageNumber: 2,
    image: '/projects/temple-tree-villa-16/pages/page_02.jpg',
    heading: 'Lower Ground Floor Furniture Layout Plan',
    sectionId: 'entrance-drawing',
    floor: 'Lower Ground Floor',
    description:
      'Architectural blueprint detailing Entrance Lobby (15\'4" x 15\'4"), Living Lounge (18\'5" x 16\'8"), Drawing Room (12\'7" x 7\'6"), Bar & Party Area (18\'5" x 14\'9"), Lift, Parking, and Landscaped Court.'
  },
  {
    pageNumber: 3,
    image: '/projects/temple-tree-villa-16/pages/page_03.jpg',
    heading: 'View from Entrance — Grand Foyer & Corridor',
    sectionId: 'entrance-drawing',
    floor: 'Lower Ground Floor',
    description:
      'Sweeping view from the villa main entrance showcasing Italian marble floors, architectural linear LED track profiles, and vertical acoustic fluted wall panels.'
  },
  {
    pageNumber: 4,
    image: '/projects/temple-tree-villa-16/pages/page_04.jpg',
    heading: 'View of Drawing Room — Formal Reception & Moss Accent Wall',
    sectionId: 'entrance-drawing',
    floor: 'Lower Ground Floor',
    description:
      'Refined formal drawing lounge featuring luxury blush lounge armchairs, gold brass coffee table, and an illuminated vertical biophilic moss panel backdrop.'
  },
  {
    pageNumber: 5,
    image: '/projects/temple-tree-villa-16/pages/page_05.jpg',
    heading: 'View of Living Area — Primary Seating & TV Console',
    sectionId: 'living-lounge',
    floor: 'Lower Ground Floor',
    description:
      'Comprehensive frontal elevation of the lower ground living lounge with tailored low-profile sectional sofas, marble coffee table, and fluted paneling.'
  },
  {
    pageNumber: 6,
    image: '/projects/temple-tree-villa-16/pages/page_06.jpg',
    heading: 'View from Living Area — Double-Height Volume & Daylighting',
    sectionId: 'living-lounge',
    floor: 'Lower Ground Floor',
    description:
      'Angled perspective highlighting floor-to-ceiling panoramic glass fenestration, sheer drapery, and contemporary statement furniture.'
  },
  {
    pageNumber: 7,
    image: '/projects/temple-tree-villa-16/pages/page_07.jpg',
    heading: 'View from Living Area — Staircase & Passage Integration',
    sectionId: 'living-lounge',
    floor: 'Lower Ground Floor',
    description:
      'Seamless transition view connecting the central living lounge with the floating architectural staircase and executive private lift vestibule.'
  },
  {
    pageNumber: 8,
    image: '/projects/temple-tree-villa-16/pages/page_08.jpg',
    heading: 'View from Living Room — Wide Angle Lounge Perspective',
    sectionId: 'living-lounge',
    floor: 'Lower Ground Floor',
    description:
      'Expansive wide perspective framing custom geometric wool area rugs, designer lounge recliners, and bespoke display cabinetry.'
  },
  {
    pageNumber: 9,
    image: '/projects/temple-tree-villa-16/pages/page_09.jpg',
    heading: 'View of Bar Area — Party Lounge & Entertainment Counter',
    sectionId: 'bar-party',
    floor: 'Lower Ground Floor',
    description:
      'Dedicated private entertainment bar featuring backlit quartz counter island, high bar stools, and custom glass bar shelving.'
  },
  {
    pageNumber: 10,
    image: '/projects/temple-tree-villa-16/pages/page_10.jpg',
    heading: 'View from Bar Area — Reverse Perspective toward Lounge',
    sectionId: 'bar-party',
    floor: 'Lower Ground Floor',
    description:
      'Looking out from the party bar counter across the sunken entertainment lounge, highlighting rich textured fabrics and accent mood lighting.'
  },
  {
    pageNumber: 11,
    image: '/projects/temple-tree-villa-16/pages/page_11.jpg',
    heading: 'Upper Ground Floor Furniture Layout Plan',
    sectionId: 'upper-layout-lift',
    floor: 'Upper Ground Floor',
    description:
      'Comprehensive architectural blueprint showing Lift Lobby, Kitchen, Dining Room, Family Lounge, Pooja Room, and Outdoor Deck balconies.'
  },
  {
    pageNumber: 12,
    image: '/projects/temple-tree-villa-16/pages/page_12.jpg',
    heading: 'View from Lift Lounge — Upper Level Private Foyer',
    sectionId: 'upper-layout-lift',
    floor: 'Upper Ground Floor',
    description:
      'Upper level private lift foyer clad in bookmatched Italian marble wall panels with bronze metallic accents and warm perimeter cove lighting.'
  },
  {
    pageNumber: 13,
    image: '/projects/temple-tree-villa-16/pages/page_13.jpg',
    heading: 'View from Lift Lounge — Circulation Corridor & Passage',
    sectionId: 'upper-layout-lift',
    floor: 'Upper Ground Floor',
    description:
      'Opposite angled perspective connecting the upper lift lobby with the open-plan dining and gourmet show kitchen.'
  },
  {
    pageNumber: 14,
    image: '/projects/temple-tree-villa-16/pages/page_14.jpg',
    heading: 'View from Kitchen Counter — Breakfast Island & Preparation Hub',
    sectionId: 'kitchen-dining',
    floor: 'Upper Ground Floor',
    description:
      'Sleek German-engineered modular kitchen featuring handleless push-to-open cabinets, quartz breakfast bar, and integrated appliances.'
  },
  {
    pageNumber: 15,
    image: '/projects/temple-tree-villa-16/pages/page_15.jpg',
    heading: 'View from Dining — Opulent 8-Seater Formal Dining Table',
    sectionId: 'kitchen-dining',
    floor: 'Upper Ground Floor',
    description:
      'Palatial dining room with marble top dining table, contemporary upholstered dining chairs, and bespoke crystal chandelier overhead.'
  },
  {
    pageNumber: 16,
    image: '/projects/temple-tree-villa-16/pages/page_16.jpg',
    heading: 'View from Dining — Credenza Unit & Courtyard Glazing',
    sectionId: 'kitchen-dining',
    floor: 'Upper Ground Floor',
    description:
      'Dining room perspective framing the floating marble credenza console, accent wall mirrors, and expansive floor-to-ceiling glass fenestration.'
  },
  {
    pageNumber: 17,
    image: '/projects/temple-tree-villa-16/pages/page_17.jpg',
    heading: 'View from Pooja Room — Sacred Sanctum with Traditional Craft',
    sectionId: 'pooja-family',
    floor: 'Upper Ground Floor',
    description:
      'Sacred pooja room designed with intricate CNC-cut jali screens, carved teakwood altar doors, and brass spiritual fixtures.'
  },
  {
    pageNumber: 18,
    image: '/projects/temple-tree-villa-16/pages/page_18.jpg',
    heading: 'View from Family Lounge — Informal Upper Living Suite',
    sectionId: 'pooja-family',
    floor: 'Upper Ground Floor',
    description:
      'Intimate family lounge dedicated to private relaxation, featuring plush deep-seated sofas, low-glare warm cove lighting, and media cabinetry.'
  }
];

export function JayabheriVilla16PresentationViewer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('entrance-drawing');
  const [activeViewMode, setActiveViewMode] = useState<'SLIDESHOW' | 'GRID'>('SLIDESHOW');

  const totalPages = VILLA16_PAGES.length;
  const currentSlide = VILLA16_PAGES[currentPage - 1];

  // Sync active section category tab when current page changes
  useEffect(() => {
    const sec = VILLA16_SECTIONS.find((s) => currentPage >= s.start && currentPage <= s.end);
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
      {/* ──────────────── 1. Header & Controls ──────────────── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] mb-1">
            <Home className="w-4 h-4 text-[#C5A059]" />
            <span>Turnkey Villa Interior Architecture • Kokapet / Narsingi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
            Jayabheri Temple Tree (Villa 16) Design Presentation
          </h2>
          <p className="text-xs sm:text-sm text-white/70 mt-1">
            Browse through all 18 high-resolution architectural layout plans and 3D visualization renders.
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
              <span>All 18 Slides</span>
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
          <span>Jump to Villa Zone</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {VILLA16_SECTIONS.map((section) => {
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
                    Slides {section.start === section.end ? `0${section.start}` : `0${section.start} - ${String(section.end).padStart(2, '0')}`}
                  </span>
                </div>
                <div className="text-[10px] font-bold text-white/50 line-clamp-1 mb-0.5">
                  {section.floor}
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
            <div
              className="relative aspect-[16/9] w-full flex items-center justify-center cursor-zoom-in overflow-hidden"
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
                <Film className="w-3.5 h-3.5 text-[#C5A059]" /> All Presentation Slides (1 to 18)
              </span>
              <span>Slide {currentPage} of {totalPages}</span>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x">
              {VILLA16_PAGES.map((page) => {
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
                    <div className="aspect-[16/9] bg-slate-900 relative">
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
          {VILLA16_SECTIONS.map((section) => {
            const sectionPages = VILLA16_PAGES.filter(
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
                      <div className="aspect-[16/9] bg-slate-950 relative overflow-hidden">
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
