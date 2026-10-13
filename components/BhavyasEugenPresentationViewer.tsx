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
  UtensilsCrossed,
  BedDouble,
  GraduationCap,
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

// 5 distinct zones across the 3 BHK layout
export const BHAVYAS_SECTIONS: SectionCategory[] = [
  {
    id: 'living-foyer',
    orderNum: 1,
    title: 'Living Hall & Foyer',
    floor: 'Main Living Zone',
    start: 1,
    end: 7,
    desc: 'Grand living room featuring marble floating TV console, prayer niche, fluted oak paneling, emerald armchairs, and floor-to-ceiling balcony glazing.'
  },
  {
    id: 'dining-bar',
    orderNum: 2,
    title: 'Dining & Crockery Bar',
    floor: 'Dining Zone',
    start: 8,
    end: 9,
    desc: '6-seater marble dining suite with linear brass chandelier and illuminated tinted-glass crockery and wine showcase.'
  },
  {
    id: 'master-suite',
    orderNum: 3,
    title: 'Master Bedroom Suite',
    floor: 'Master Wing',
    start: 10,
    end: 11,
    desc: 'Palatial master bedroom with floating king platform bed, fluted grey wall paneling, bay window daybed bench, and walnut TV credenza.'
  },
  {
    id: 'kids-study',
    orderNum: 4,
    title: 'Kids Bedroom & Study',
    floor: "Children's Wing",
    start: 12,
    end: 14,
    desc: 'Modern youth suite with floor-to-ceiling loft wardrobe, butterfly headboard wall art, dual-station executive study desk, and chillout daybed.'
  },
  {
    id: 'parents-suite',
    orderNum: 5,
    title: 'Parents / Guest Bedroom',
    floor: 'Guest Wing',
    start: 15,
    end: 16,
    desc: 'Refined bedroom retreat highlighted by brass metallic grooved paneling, ambient night lamps, and high-gloss sliding wardrobe system.'
  }
];

export const BHAVYAS_PAGES: PresentationPageItem[] = [
  {
    pageNumber: 1,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_01.jpg',
    heading: 'Living Room TV Unit & Sacred Prayer Niche',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Sleek floating TV credenza with bookmatched stone backing, display ledge, and an integrated sacred prayer niche with arched frame and subtle spotlighting.'
  },
  {
    pageNumber: 2,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_02.jpg',
    heading: 'Formal Living Seating & Wing Accent Wall',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Luxurious formal conversation lounge featuring low-slung plush sofa, marble nesting coffee tables, minimalist wing sculpture art, and sheer floor-to-ceiling drapes.'
  },
  {
    pageNumber: 3,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_03.jpg',
    heading: 'Living Foyer & Entrance Perspective',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Perspective viewing from the entrance corridor into the bright, airy living room with indoor planter styling and ambient warm cove lighting.'
  },
  {
    pageNumber: 4,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_04.jpg',
    heading: 'Living Hall Fluted Paneling & Emerald Lounge',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Grand open hall highlighted by vertical warm oak fluted paneling, an emerald green velvet statement armchair, curved perimeter cove ceiling, and concealed cassette AC.'
  },
  {
    pageNumber: 5,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_05.jpg',
    heading: 'Living Room Balcony Vista & Circular Carpet Seating',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Spacious living area oriented towards the sunlit balcony, featuring circular plush rug, twin emerald armchairs, and charcoal modular sofa.'
  },
  {
    pageNumber: 6,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_06.jpg',
    heading: 'Living to Dining Open Circulation Corridor',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Fluid architectural flow between living room and dining zone, unified by warm timber door portals and continuous light-toned Italian marble flooring.'
  },
  {
    pageNumber: 7,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_07.jpg',
    heading: 'Living Media Console & Metal Display Shelf',
    sectionId: 'living-foyer',
    floor: 'Main Living Zone',
    description: 'Straight elevation of the living entertainment wall with slatted wood accents, low-profile media unit, and an open metal-frame room divider shelf.'
  },
  {
    pageNumber: 8,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_08.jpg',
    heading: 'Formal 6-Seater Dining & Illuminated Crockery Bar',
    sectionId: 'dining-bar',
    floor: 'Dining Zone',
    description: 'Opulent dining room with stone-top dining table, upholstered chairs, linear pendant lighting, and full-height backlit tinted-glass crockery showcase.'
  },
  {
    pageNumber: 9,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_09.jpg',
    heading: 'Dining Table Vista & Circular Stone Art Mirrors',
    sectionId: 'dining-bar',
    floor: 'Dining Zone',
    description: 'Intimate perspective of the dining table centered against a textured masonry feature wall adorned with triple convex circular art mirrors.'
  },
  {
    pageNumber: 10,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_10.jpg',
    heading: 'Master Bedroom Suite & Bay Window Seating',
    sectionId: 'master-suite',
    floor: 'Master Wing',
    description: 'Palatial master bedroom with floating king platform bed, fluted grey feature wall, soft cove lighting, and a cozy bay window daybed reading bench.'
  },
  {
    pageNumber: 11,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_11.jpg',
    heading: 'Master Suite TV Credenza & Decorative Screen',
    sectionId: 'master-suite',
    floor: 'Master Wing',
    description: 'Frontal perspective of the master bedroom entertainment credenza with rich walnut wood grain and a modern decorative jali privacy partition.'
  },
  {
    pageNumber: 12,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_12.jpg',
    heading: 'Kids Bedroom Suite & Modular Loft Wardrobe',
    sectionId: 'kids-study',
    floor: "Children's Wing",
    description: "Contemporary youth bedroom with tailored grey headboard, sculpted wall accents, and seamless floor-to-ceiling modular wardrobe with open display niches."
  },
  {
    pageNumber: 13,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_13.jpg',
    heading: 'Kids Room Integrated Study Desk & Vanity',
    sectionId: 'kids-study',
    floor: "Children's Wing",
    description: 'Ergonomic study corner featuring a floating white desk, overhead open bookshelves, upholstered study chair, and warm ambient illumination.'
  },
  {
    pageNumber: 14,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_14.jpg',
    heading: 'Dedicated Twin Study Station & Lounge Daybed',
    sectionId: 'kids-study',
    floor: "Children's Wing",
    description: 'Dual-seat executive study setup with desktop PC station, wall-mounted storage cabinets, relaxed low-profile lounge daybed, and soft sheer window treatments.'
  },
  {
    pageNumber: 15,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_15.jpg',
    heading: 'Parents / Guest Bedroom with Brass Metallic Inlay',
    sectionId: 'parents-suite',
    floor: 'Guest Wing',
    description: 'Sophisticated bedroom suite styled with warm vertical brass-grooved paneling, twin ambient night lamps, luxury bed dressing, and glossy sliding wardrobe.'
  },
  {
    pageNumber: 16,
    image: '/projects/bhavyas-eugen-madhapur/pages/page_16.jpg',
    heading: 'Parents Suite Sliding Wardrobe & Gallery Corridor',
    sectionId: 'parents-suite',
    floor: 'Guest Wing',
    description: 'Wide angle showing the bedroom entrance with curated wall art frame gallery, sleek sliding wardrobe panels, and cozy bedside vanity desk.'
  }
];

export function BhavyasEugenPresentationViewer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'slideshow' | 'grid'>('slideshow');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const totalPages = BHAVYAS_PAGES.length;
  const currentItem = BHAVYAS_PAGES.find((p) => p.pageNumber === currentPage) || BHAVYAS_PAGES[0];

  const filteredPages = activeFilter === 'all'
    ? BHAVYAS_PAGES
    : BHAVYAS_PAGES.filter((p) => p.sectionId === activeFilter);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
    setImageLoaded(false);
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
    setImageLoaded(false);
  }, [totalPages]);

  const goToPage = (num: number) => {
    setCurrentPage(num);
    setImageLoaded(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, isLightboxOpen]);

  const currentSection = BHAVYAS_SECTIONS.find((s) => s.id === currentItem.sectionId);

  return (
    <div className="bg-[#0b1622] border border-[#C5A059]/25 rounded-2xl overflow-hidden shadow-2xl text-white">
      {/* Top Header Bar */}
      <div className="bg-[#0f1f2e] border-b border-white/10 px-6 py-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30">
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
                Architectural 3D Presentation
              </span>
              <span className="text-xs text-gray-400 font-mono">
                16 High-Definition Renders
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-serif text-white tracking-wide">
              Bhavya&apos;s Eugen — 3 BHK Luxury Residence
            </h3>
            <p className="text-xs text-gray-300 mt-0.5">
              Madhapur, Hyderabad • Full Turnkey Interior Architecture Presentation
            </p>
          </div>

          {/* View Mode Toggle & Counter */}
          <div className="flex items-center gap-3">
            <div className="bg-[#13283a] border border-white/10 rounded-xl p-1 flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('slideshow')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'slideshow'
                    ? 'bg-[#C5A059] text-slate-950 shadow-md font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                Slideshow
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  viewMode === 'grid'
                    ? 'bg-[#C5A059] text-slate-950 shadow-md font-bold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                All 16 Slides
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition"
              title="View full screen"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Zone Filter Tabs */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeFilter === 'all'
                ? 'bg-[#C5A059] text-slate-950 font-bold shadow-md'
                : 'bg-[#13283a] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            All Slides ({totalPages})
          </button>

          {BHAVYAS_SECTIONS.map((sec) => {
            const count = BHAVYAS_PAGES.filter((p) => p.sectionId === sec.id).length;
            const isActive = activeFilter === sec.id;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => {
                  setActiveFilter(sec.id);
                  const firstPage = BHAVYAS_PAGES.find((p) => p.sectionId === sec.id);
                  if (firstPage) goToPage(firstPage.pageNumber);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#C5A059] text-slate-950 font-bold shadow-md'
                    : 'bg-[#13283a] text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {sec.id === 'living-foyer' && <Home className="w-3.5 h-3.5" />}
                {sec.id === 'dining-bar' && <UtensilsCrossed className="w-3.5 h-3.5" />}
                {sec.id === 'master-suite' && <BedDouble className="w-3.5 h-3.5" />}
                {sec.id === 'kids-study' && <GraduationCap className="w-3.5 h-3.5" />}
                {sec.id === 'parents-suite' && <Users className="w-3.5 h-3.5" />}
                {sec.title}
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-black/20 text-slate-950' : 'bg-white/10 text-gray-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Slideshow View */}
      {viewMode === 'slideshow' ? (
        <div className="p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Slide Presentation Canvas */}
            <div className="lg:col-span-9 space-y-4">
              <div className="relative bg-black rounded-xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10] group">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentItem.image}
                  alt={currentItem.heading}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-contain transition-opacity duration-300 cursor-pointer ${
                    imageLoaded ? 'opacity-100' : 'opacity-80'
                  }`}
                  onClick={() => setIsLightboxOpen(true)}
                />

                {/* Left/Right Overlaid Arrow Buttons */}
                <button
                  type="button"
                  onClick={goToPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 hover:border-transparent flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 backdrop-blur-sm shadow-lg"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 hover:border-transparent flex items-center justify-center transition-all opacity-80 group-hover:opacity-100 backdrop-blur-sm shadow-lg"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Slide Number Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-xs font-mono font-bold text-[#C5A059]">
                  Slide {String(currentItem.pageNumber).padStart(2, '0')} / {totalPages}
                </div>

                {/* Click to Zoom hint */}
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md hover:bg-[#C5A059] text-gray-200 hover:text-slate-950 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-semibold flex items-center gap-1.5 transition"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  Full Size Lightbox
                </button>
              </div>

              {/* Slide Meta Bar */}
              <div className="bg-[#0f1f2e] border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                      {currentItem.floor}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-[11px] font-medium text-gray-400">
                      Zone: {currentSection?.title}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {currentItem.heading}
                  </h4>
                  <p className="text-xs text-gray-300 max-w-3xl leading-relaxed">
                    {currentItem.description}
                  </p>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={goToPrev}
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1 border border-white/10 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Prev
                  </button>
                  <span className="text-xs text-gray-400 font-mono px-1">
                    {currentPage} of {totalPages}
                  </span>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="px-3.5 py-2 rounded-lg bg-[#C5A059] hover:bg-[#b08e4d] text-slate-950 text-xs font-bold flex items-center gap-1 shadow-md transition"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Zone Breakdown & Quick Navigation */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-[#0f1f2e] border border-white/10 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                  <Compass className="w-4 h-4 text-[#C5A059]" />
                  <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                    Layout Zones
                  </h5>
                </div>
                <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
                  {BHAVYAS_SECTIONS.map((sec) => {
                    const isCurrentSection = sec.id === currentItem.sectionId;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => {
                          const p = BHAVYAS_PAGES.find((item) => item.sectionId === sec.id);
                          if (p) goToPage(p.pageNumber);
                        }}
                        className={`w-full text-left p-2.5 rounded-lg border transition ${
                          isCurrentSection
                            ? 'bg-[#C5A059]/15 border-[#C5A059] text-white'
                            : 'bg-[#13283a]/60 border-white/5 hover:bg-white/5 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px] font-bold">
                          <span className={isCurrentSection ? 'text-[#C5A059]' : 'text-gray-200'}>
                            {sec.title}
                          </span>
                          <span className="text-[10px] text-gray-400 font-mono">
                            {sec.start === sec.end ? `P.${sec.start}` : `P.${sec.start}-${sec.end}`}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 line-clamp-2 leading-tight">
                          {sec.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Architectural Highlights Info Card */}
              <div className="bg-[#0f1f2e] border border-white/10 rounded-xl p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                  <Layers className="w-4 h-4" />
                  Key Features
                </div>
                <ul className="text-[11px] text-gray-300 space-y-2">
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Living room prayer niche with arched backlighting and floating stone credenza.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Vertical oak fluted wall cladding integrated with concealed air conditioning.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Backlit tinted-glass bar & crockery vitrine with ambient profile illumination.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Master suite bay window chillout seating and walnut media credenza.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span>Dual-station children&apos;s executive study desk with overhead modular cabinetry.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Presentation Reel ({filteredPages.length} Slides)
              </span>
              <span className="text-xs text-[#C5A059] font-mono">
                Click any slide to jump
              </span>
            </div>
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {filteredPages.map((page) => {
                const isSelected = page.pageNumber === currentPage;
                return (
                  <button
                    key={page.pageNumber}
                    type="button"
                    onClick={() => goToPage(page.pageNumber)}
                    className={`relative shrink-0 w-28 md:w-32 aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all group ${
                      isSelected
                        ? 'border-[#C5A059] scale-[1.03] shadow-lg ring-2 ring-[#C5A059]/40'
                        : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={page.image}
                      alt={page.heading}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-1 text-left">
                      <span className="text-[10px] font-mono font-bold text-white">
                        #{String(page.pageNumber).padStart(2, '0')}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Grid Gallery View (All 16 Slides) */
        <div className="p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPages.map((page) => (
              <div
                key={page.pageNumber}
                onClick={() => {
                  goToPage(page.pageNumber);
                  setViewMode('slideshow');
                }}
                className="bg-[#0f1f2e] border border-white/10 hover:border-[#C5A059]/60 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="relative aspect-[16/10] bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={page.image}
                    alt={page.heading}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#C5A059]">
                    Slide {String(page.pageNumber).padStart(2, '0')}
                  </div>
                </div>
                <div className="p-3.5 space-y-1">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#C5A059]">
                    {page.floor}
                  </span>
                  <h5 className="text-xs font-bold text-white group-hover:text-[#C5A059] transition line-clamp-1">
                    {page.heading}
                  </h5>
                  <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                    {page.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal (Fullscreen) */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6 animate-fadeIn">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#C5A059]">
                  SLIDE {String(currentItem.pageNumber).padStart(2, '0')} / {totalPages}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-gray-300">{currentItem.floor}</span>
              </div>
              <h4 className="text-base font-bold text-white mt-0.5">
                {currentItem.heading}
              </h4>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Body (Image & Arrows) */}
          <div className="relative flex-1 flex items-center justify-center my-3 max-h-[82vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentItem.image}
              alt={currentItem.heading}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />

            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 flex items-center justify-center transition border border-white/20 backdrop-blur-sm"
              aria-label="Previous"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 flex items-center justify-center transition border border-white/20 backdrop-blur-sm"
              aria-label="Next"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="text-center text-xs text-gray-400 border-t border-white/10 pt-3 flex items-center justify-between">
            <span className="hidden sm:inline">Use Arrow keys (Left / Right) to navigate, Esc to close</span>
            <span className="text-gray-300 mx-auto">{currentItem.description}</span>
            <span className="font-mono text-[#C5A059]">Bhavya&apos;s Eugen, Madhapur</span>
          </div>
        </div>
      )}
    </div>
  );
}
