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
  BookOpen
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

// 6 sequential sections of Vellanki Penthouse presentation in exact PDF order
export const VELLANKI_SECTIONS: SectionCategory[] = [
  {
    id: 'cover',
    orderNum: 1,
    title: 'Cover & Title',
    floor: 'Overview',
    start: 1,
    end: 1,
    desc: 'Vellanki Penthouse Luxury Interior Design Presentation Cover.'
  },
  {
    id: 'kitchen',
    orderNum: 2,
    title: 'Modular Kitchen',
    floor: 'Penthouse Level',
    start: 2,
    end: 4,
    desc: 'Bespoke modular kitchen with seamless cabinetry, breakfast counter, and integrated high-end appliances.'
  },
  {
    id: 'kids-bedroom',
    orderNum: 3,
    title: 'Kids Bedroom Suite',
    floor: 'Penthouse Level',
    start: 5,
    end: 9,
    desc: 'Vibrant kids bedroom featuring ergonomic study station, custom bed with playful back wall, and built-in wardrobe.'
  },
  {
    id: 'guest-bedroom',
    orderNum: 4,
    title: 'Guest Bedroom Suite',
    floor: 'Penthouse Level',
    start: 10,
    end: 12,
    desc: 'Contemporary guest bedroom suite with upholstered headboard, vertical slat cladding, and full-height wardrobe.'
  },
  {
    id: 'master-bedroom',
    orderNum: 5,
    title: 'Master Bedroom Suite',
    floor: 'Penthouse Level',
    start: 13,
    end: 17,
    desc: 'Ultra-luxury master bedroom suite with fluted acoustic paneling, ambient LED coves, walk-in dressing, and floating nightstands.'
  },
  {
    id: 'living-dining',
    orderNum: 6,
    title: 'Living & Dining Lounge',
    floor: 'Penthouse Level',
    start: 18,
    end: 24,
    desc: 'Expansive open-plan living and dining lounge featuring architectural TV media wall, luxury dining suite, and panoramic terrace integration.'
  }
];

export const VELLANKI_PAGES: PresentationPageItem[] = [
  {
    pageNumber: 1,
    image: '/projects/vellanki-penthouse/pages/page_01.jpg',
    heading: 'Penthouse Design Presentation Cover',
    sectionId: 'cover',
    floor: 'Overview',
    description: 'Title presentation for Vellanki Penthouse, Kondapur, Hyderabad. Curated architectural luxury interiors by Anjani Infra.'
  },
  {
    pageNumber: 2,
    image: '/projects/vellanki-penthouse/pages/page_02.jpg',
    heading: 'Modular Kitchen Concept & Title',
    sectionId: 'kitchen',
    floor: 'Penthouse Level',
    description: 'Kitchen section introduction highlighting contemporary layout, ergonomic work triangle, and custom modular finish palette.'
  },
  {
    pageNumber: 3,
    image: '/projects/vellanki-penthouse/pages/page_03.jpg',
    heading: 'Modular Kitchen 3D View — Island & Cabinetry',
    sectionId: 'kitchen',
    floor: 'Penthouse Level',
    description: 'Photorealistic 3D render showing quartz countertops, dual-tone acrylic shutters, overhead glass display cabinets, and integrated cooktop.'
  },
  {
    pageNumber: 4,
    image: '/projects/vellanki-penthouse/pages/page_04.jpg',
    heading: 'Modular Kitchen 3D Angle — Storage & Appliances',
    sectionId: 'kitchen',
    floor: 'Penthouse Level',
    description: 'Detailed perspective showing appliance tall unit, microwave oven niche, concealed handles, and under-cabinet task lighting.'
  },
  {
    pageNumber: 5,
    image: '/projects/vellanki-penthouse/pages/page_05.jpg',
    heading: 'Kids Bedroom Suite Title Slide',
    sectionId: 'kids-bedroom',
    floor: 'Penthouse Level',
    description: 'Kids bedroom conceptual introduction designed for growing children with functional zoning for sleep, play, and study.'
  },
  {
    pageNumber: 6,
    image: '/projects/vellanki-penthouse/pages/page_06.jpg',
    heading: 'Kids Bedroom 3D Perspective — Bed & Wall Decor',
    sectionId: 'kids-bedroom',
    floor: 'Penthouse Level',
    description: 'Photorealistic perspective highlighting custom kids platform bed, artistic wallpaper panel, and ambient warm night lighting.'
  },
  {
    pageNumber: 7,
    image: '/projects/vellanki-penthouse/pages/page_07.jpg',
    heading: 'Kids Bedroom 3D Angle — Study Desk & Storage',
    sectionId: 'kids-bedroom',
    floor: 'Penthouse Level',
    description: 'Ergonomic study workstation with open wall shelves, multi-drawer console, and integrated pinboard.'
  },
  {
    pageNumber: 8,
    image: '/projects/vellanki-penthouse/pages/page_08.jpg',
    heading: 'Kids Bedroom 3D View — Modular Wardrobe',
    sectionId: 'kids-bedroom',
    floor: 'Penthouse Level',
    description: 'Floor-to-ceiling wardrobe unit with customized interior organizers, matte laminate finish, and sleek profile hardware.'
  },
  {
    pageNumber: 9,
    image: '/projects/vellanki-penthouse/pages/page_09.jpg',
    heading: 'Kids Bedroom 3D Overview — Comprehensive Suite',
    sectionId: 'kids-bedroom',
    floor: 'Penthouse Level',
    description: 'Full room spatial overview showcasing false ceiling detail, wooden flooring warmth, and seamless circulation space.'
  },
  {
    pageNumber: 10,
    image: '/projects/vellanki-penthouse/pages/page_10.jpg',
    heading: 'Guest Bedroom Suite Title Slide',
    sectionId: 'guest-bedroom',
    floor: 'Penthouse Level',
    description: 'Guest bedroom design introduction combining hospitality luxury with residential comfort.'
  },
  {
    pageNumber: 11,
    image: '/projects/vellanki-penthouse/pages/page_11.jpg',
    heading: 'Guest Bedroom 3D Perspective — Bed & Slat Paneling',
    sectionId: 'guest-bedroom',
    floor: 'Penthouse Level',
    description: 'Plush upholstered king-size bed set against vertical charcoal and wood slat paneling with brass pendant lighting.'
  },
  {
    pageNumber: 12,
    image: '/projects/vellanki-penthouse/pages/page_12.jpg',
    heading: 'Guest Bedroom 3D View — Wardrobe & Dressing Unit',
    sectionId: 'guest-bedroom',
    floor: 'Penthouse Level',
    description: 'Full-height modular wardrobe with tinted glass accents, integrated dressing mirror console, and cove lighting.'
  },
  {
    pageNumber: 13,
    image: '/projects/vellanki-penthouse/pages/page_13.jpg',
    heading: 'Master Bedroom Suite Title Slide',
    sectionId: 'master-bedroom',
    floor: 'Penthouse Level',
    description: 'Master bedroom suite title slide marking the sanctuary of the penthouse owner.'
  },
  {
    pageNumber: 14,
    image: '/projects/vellanki-penthouse/pages/page_14.jpg',
    heading: 'Master Suite 3D Perspective — Fluted Headboard Wall',
    sectionId: 'master-bedroom',
    floor: 'Penthouse Level',
    description: 'Dramatic master bedroom feature wall showcasing floor-to-ceiling fluted timber paneling, backlit marble inlays, and king bed.'
  },
  {
    pageNumber: 15,
    image: '/projects/vellanki-penthouse/pages/page_15.jpg',
    heading: 'Master Suite 3D Angle — Floating Consoles & Coves',
    sectionId: 'master-bedroom',
    floor: 'Penthouse Level',
    description: 'Floating cantilevered nightstands with concealed wireless charging, soft LED base illumination, and minimalist drop pendants.'
  },
  {
    pageNumber: 16,
    image: '/projects/vellanki-penthouse/pages/page_16.jpg',
    heading: 'Master Suite 3D View — TV Media & Dressing Console',
    sectionId: 'master-bedroom',
    floor: 'Penthouse Level',
    description: 'Low-profile media wall with acoustic paneling, fluted drawers, and full-length dressing mirror with ambient perimeter glow.'
  },
  {
    pageNumber: 17,
    image: '/projects/vellanki-penthouse/pages/page_17.jpg',
    heading: 'Master Suite 3D Perspective — Walk-in Wardrobe',
    sectionId: 'master-bedroom',
    floor: 'Penthouse Level',
    description: 'Walk-in wardrobe with bronze-tinted glass sliding doors, sensor-activated shelf illumination, and velvet accessory drawers.'
  },
  {
    pageNumber: 18,
    image: '/projects/vellanki-penthouse/pages/page_18.jpg',
    heading: 'Living & Dining Room Title Slide',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Grand living and dining room section introduction showcasing open-plan penthouse architectural grandeur.'
  },
  {
    pageNumber: 19,
    image: '/projects/vellanki-penthouse/pages/page_19.jpg',
    heading: 'Grand Living & Dining 3D Lounge Perspective',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Expansive open-plan penthouse volume connecting formal conversation lounge, luxury dining table, and panoramic floor-to-ceiling glazing.'
  },
  {
    pageNumber: 20,
    image: '/projects/vellanki-penthouse/pages/page_20.jpg',
    heading: 'Formal Living Room 3D Angle — TV Feature Wall',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Italian marble TV backdrop with bookmatched stone veins, acoustic charcoal slats, and low-slung media credenza.'
  },
  {
    pageNumber: 21,
    image: '/projects/vellanki-penthouse/pages/page_21.jpg',
    heading: 'Luxury Dining Area 3D Perspective — Marble Table & Chandelier',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Designer marble dining table with upholstered dining chairs, modern ring pendant chandelier, and crockery display unit.'
  },
  {
    pageNumber: 22,
    image: '/projects/vellanki-penthouse/pages/page_22.jpg',
    heading: 'Living Space 3D Perspective — Balcony & Terrace View',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Seamless glass sliding door transition from the interior lounge to the open-air penthouse deck with Kondapur skyline views.'
  },
  {
    pageNumber: 23,
    image: '/projects/vellanki-penthouse/pages/page_23.jpg',
    heading: 'Foyer & Lounge Transition — Architectural Screen',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'Custom metal and fluted glass partition screen creating refined entry foyer privacy while preserving visual flow.'
  },
  {
    pageNumber: 24,
    image: '/projects/vellanki-penthouse/pages/page_24.jpg',
    heading: 'Presentation Closing Slide & Design Summary',
    sectionId: 'living-dining',
    floor: 'Penthouse Level',
    description: 'End slide of Vellanki Penthouse 24-page presentation portfolio by Anjani Infra Projects.'
  }
];

export function VellankiPenthousePresentationViewer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');

  const totalPages = VELLANKI_PAGES.length;
  const currentItem = VELLANKI_PAGES[currentPage - 1] || VELLANKI_PAGES[0];

  const filteredPages =
    selectedSection === 'all'
      ? VELLANKI_PAGES
      : VELLANKI_PAGES.filter((p) => p.sectionId === selectedSection);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  }, [totalPages]);

  // Autoplay presentation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoplay && !isLightboxOpen) {
      timer = setInterval(() => {
        goToNextPage();
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isAutoplay, isLightboxOpen, goToNextPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextPage();
      if (e.key === 'ArrowLeft') goToPrevPage();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextPage, goToPrevPage]);

  return (
    <div className="space-y-8">
      {/* ──────────────── 1. Header & Quick Controls ──────────────── */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A374D] text-[#C5A059] text-[10px] font-black uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5" /> Full 24-Page Penthouse Presentation
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D]">
              Vellanki Penthouse — Turnkey Interior Design Portfolio
            </h2>
            <p className="text-xs sm:text-sm text-[#383735]/70 max-w-2xl font-sans">
              Browse all 24 slides of the architectural presentation for Vellanki Penthouse, Kondapur.
              Spanning modular kitchen, kids bedroom, guest bedroom, master suite, and grand living/dining room.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isAutoplay
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>{isAutoplay ? 'Pause Slideshow' : 'Autoplay Slides'}</span>
            </button>

            <button
              onClick={() => setViewMode(viewMode === 'single' ? 'grid' : 'single')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
            >
              <Grid className="w-4 h-4" />
              <span>{viewMode === 'single' ? 'Grid View (24)' : 'Slide View'}</span>
            </button>

            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-[#C5A059] text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>

        {/* ──────────────── Section Category Tabs ──────────────── */}
        <div className="pt-2 border-t border-slate-100">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Jump to Room / Zone ({VELLANKI_SECTIONS.length} Sections):
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
              onClick={() => {
                setSelectedSection('all');
                setViewMode('single');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all cursor-pointer ${
                selectedSection === 'all'
                  ? 'bg-[#1A374D] text-[#C5A059] shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Slides (24)
            </button>

            {VELLANKI_SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  setSelectedSection(sec.id);
                  setCurrentPage(sec.start);
                  setViewMode('single');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedSection === sec.id
                    ? 'bg-[#1A374D] text-[#C5A059] shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{sec.title}</span>
                <span className="text-[10px] opacity-70">
                  (P{sec.start}–{sec.end})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────────── 2. Main Slide Presentation View ──────────────── */}
      {viewMode === 'single' ? (
        <div className="bg-white rounded-3xl border border-[#BFBFBF]/60 shadow-lg overflow-hidden">
          {/* Top Slide Meta Bar */}
          <div className="bg-[#1A374D] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 font-black text-xs">
                Page {currentPage} of {totalPages}
              </span>
              <span className="text-xs sm:text-sm font-bold text-white">
                {currentItem.heading}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/80">
              <span className="hidden sm:inline bg-white/10 px-3 py-1 rounded-full">
                {currentItem.floor}
              </span>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-1.5 hover:text-[#C5A059] transition-colors cursor-pointer"
                title="Open in High-Res Fullscreen"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Slide Image Display Area */}
          <div className="relative aspect-[16/10] bg-slate-950 flex items-center justify-center group overflow-hidden">
            <img
              src={currentItem.image}
              alt={`Vellanki Penthouse - Page ${currentItem.pageNumber}: ${currentItem.heading}`}
              className="w-full h-full object-contain select-none transition-transform duration-300"
            />

            {/* Left Chevron */}
            <button
              onClick={goToPrevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Chevron */}
            <button
              onClick={goToNextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md text-white p-3 sm:p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/15">
              <div className="space-y-0.5">
                <div className="text-[11px] text-[#C5A059] font-bold uppercase tracking-wider">
                  {currentItem.heading}
                </div>
                <div className="text-xs text-white/90 font-light max-w-3xl line-clamp-2">
                  {currentItem.description}
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-2 text-[11px] text-white/60">
                <span>Use ← and → keys</span>
              </div>
            </div>
          </div>

          {/* Slide Navigation Strip / Pagination Buttons */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevPage}
                className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </button>

              <button
                onClick={goToNextPage}
                className="px-4 py-2 rounded-xl bg-[#1A374D] hover:bg-[#2B5573] text-[#C5A059] text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Page Jump Slider */}
            <div className="flex items-center gap-3 w-full sm:w-72">
              <span className="text-[11px] font-bold text-slate-500 shrink-0">
                P{currentPage}
              </span>
              <input
                type="range"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={(e) => setCurrentPage(parseInt(e.target.value, 10))}
                className="w-full accent-[#C5A059] cursor-pointer"
              />
              <span className="text-[11px] font-bold text-slate-500 shrink-0">
                P{totalPages}
              </span>
            </div>

            {/* Jump to specific section indicator */}
            <div className="text-xs text-slate-600 font-medium hidden lg:block">
              Section:{' '}
              <span className="font-bold text-[#1A374D]">
                {VELLANKI_SECTIONS.find((s) => s.id === currentItem.sectionId)?.title}
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ──────────────── 3. Grid View Mode (All 24 Pages) ──────────────── */
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-slate-800">
              Showing {filteredPages.length} Slides ({selectedSection === 'all' ? 'All' : 'Selected Zone'})
            </div>
            <button
              onClick={() => setViewMode('single')}
              className="text-xs font-bold text-[#1A374D] hover:text-[#C5A059] underline cursor-pointer"
            >
              Back to Large Slide View
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPages.map((item) => (
              <div
                key={item.pageNumber}
                onClick={() => {
                  setCurrentPage(item.pageNumber);
                  setViewMode('single');
                }}
                className={`group cursor-pointer rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${
                  currentPage === item.pageNumber
                    ? 'ring-2 ring-[#C5A059] border-[#C5A059]'
                    : 'border-slate-200 hover:border-[#C5A059]'
                }`}
              >
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white font-bold text-[10px]">
                    P{item.pageNumber}
                  </div>
                </div>

                <div className="p-3 space-y-1 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      {item.floor}
                    </div>
                    <div className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-[#2B5573]">
                      {item.heading}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 font-light pt-1">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ──────────────── 4. Horizontal Thumbnail Reel ──────────────── */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#BFBFBF]/60 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C5A059]" /> Thumbnail Reel ({totalPages} Pages)
          </div>
          <span className="text-xs text-slate-400">Click any slide to jump</span>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
          {VELLANKI_PAGES.map((page) => (
            <button
              key={page.pageNumber}
              onClick={() => setCurrentPage(page.pageNumber)}
              className={`shrink-0 w-28 sm:w-36 rounded-xl overflow-hidden border transition-all text-left group cursor-pointer ${
                currentPage === page.pageNumber
                  ? 'border-[#C5A059] ring-2 ring-[#C5A059] shadow-md scale-105'
                  : 'border-slate-200 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative aspect-[16/10] bg-slate-900">
                <img
                  src={page.image}
                  alt={`P${page.pageNumber}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-bold text-white">
                  P{page.pageNumber}
                </span>
              </div>
              <div className="p-1.5 bg-white">
                <div className="text-[10px] font-bold text-slate-700 truncate">
                  {page.heading}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ──────────────── 5. Fullscreen Lightbox Modal ──────────────── */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 font-black text-xs">
                Page {currentPage} / {totalPages}
              </span>
              <span className="text-sm sm:text-base font-bold text-white">
                {currentItem.heading}
              </span>
              <span className="text-xs text-white/60 hidden sm:inline">
                • {currentItem.floor}
              </span>
            </div>

            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Fullscreen"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Central Image */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={currentItem.image}
              alt={`Fullscreen Page ${currentItem.pageNumber}`}
              className="max-w-full max-h-full object-contain select-none"
            />

            {/* Left Chevron */}
            <button
              onClick={goToPrevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110 shadow-2xl cursor-pointer"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Chevron */}
            <button
              onClick={goToNextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all hover:scale-110 shadow-2xl cursor-pointer"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Lightbox Bottom Info */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/80 text-xs">
            <p className="font-light">{currentItem.description}</p>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span>Press ESC to exit</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrevPage}
                  className="px-3 py-1 rounded bg-white/10 hover:bg-white/20"
                >
                  Prev
                </button>
                <button
                  onClick={goToNextPage}
                  className="px-3 py-1 rounded bg-[#C5A059] text-slate-950 font-bold"
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
