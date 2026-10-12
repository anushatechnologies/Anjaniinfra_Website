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
  isPlan?: boolean;
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

// EXACT chronological sequential order matching the 42 pages of the PDF
export const PRESENTATION_SECTIONS: SectionCategory[] = [
  {
    id: 'cover',
    orderNum: 1,
    title: 'Cover & Title',
    floor: 'Overview',
    start: 1,
    end: 1,
    desc: 'One Oak - Sky Villa 12th & 13th Floor Interior Design Presentation by Studio 10.'
  },
  {
    id: 'floor-12-plan',
    orderNum: 2,
    title: '12th Floor Layout Plan',
    floor: '12th Floor',
    start: 2,
    end: 2,
    desc: 'Detailed 2D architectural furniture layout blueprint for 12th floor.'
  },
  {
    id: 'formal-drawing',
    orderNum: 3,
    title: 'Formal Drawing Room',
    floor: '12th Floor',
    start: 3,
    end: 6,
    desc: '32\'0" x 18\'3" double-height formal reception room with custom marble TV backdrop & terrace deck.'
  },
  {
    id: 'dining-lounge',
    orderNum: 4,
    title: 'Double Height Dining Lounge',
    floor: '12th Floor',
    start: 7,
    end: 14,
    desc: '20\'2" x 14\'1" double-height dining volume with floating staircase, credenza & deck overlooking lake.'
  },
  {
    id: 'kitchen',
    orderNum: 5,
    title: 'Modular Kitchen',
    floor: '12th Floor',
    start: 15,
    end: 18,
    desc: '18\'6" x 12\'8" chef-grade modular kitchen with quartz waterfall island, tall pantry units & wet kitchen.'
  },
  {
    id: 'family-lounge',
    orderNum: 6,
    title: 'Family Lounge',
    floor: '12th Floor',
    start: 19,
    end: 21,
    desc: '21\'8" x 12\'0" intimate family entertainment lounge with sectional sofa and private deck access.'
  },
  {
    id: 'guest-bedroom',
    orderNum: 7,
    title: 'Guest Bedroom',
    floor: '12th Floor',
    start: 22,
    end: 24,
    desc: '16\'9" x 12\'6" guest retreat with acoustic wall paneling, king bed, and en-suite washroom.'
  },
  {
    id: 'floor-13-plan',
    orderNum: 8,
    title: '13th Floor Layout Plan',
    floor: '13th Floor',
    start: 25,
    end: 25,
    desc: 'Detailed 2D architectural furniture layout blueprint for upper 13th floor.'
  },
  {
    id: 'reading-nook',
    orderNum: 9,
    title: 'Reading Nook / Study Lounge',
    floor: '13th Floor',
    start: 26,
    end: 30,
    desc: '25\'11" x 12\'3" mezzanine study library overlooking the double-height dining volume.'
  },
  {
    id: 'master-bedroom',
    orderNum: 10,
    title: 'Master Bedroom Suite',
    floor: '13th Floor',
    start: 31,
    end: 34,
    desc: '22\'9" x 17\'3" master sanctuary with fluted timber headboard, walk-in dressing room & private deck.'
  },
  {
    id: 'bedroom-01',
    orderNum: 11,
    title: 'Bedroom 01',
    floor: '13th Floor',
    start: 35,
    end: 37,
    desc: '12\'9" x 18\'7½" designer private bedroom suite with integrated study desk & bespoke wardrobe.'
  },
  {
    id: 'bedroom-02',
    orderNum: 12,
    title: 'Bedroom 02',
    floor: '13th Floor',
    start: 38,
    end: 41,
    desc: '12\'9" x 18\'7½" secondary bedroom with warm wood paneling, study nook & sliding glass wardrobes.'
  },
  {
    id: 'credits',
    orderNum: 13,
    title: 'Credits & Closing',
    floor: 'Overview',
    start: 42,
    end: 42,
    desc: 'Architectural interior design presentation credits by Ar. Rajesh Verma.'
  }
];

// All 42 pages in exact 1-to-42 sequential order
export const ALL_42_PAGES: PresentationPageItem[] = [
  // Page 1: Cover
  { pageNumber: 1, image: '/projects/one-oak/pages/page_01.jpg', heading: 'Cover & Title', sectionId: 'cover', floor: 'Overview', description: 'One Oak - Sky Villa 12th & 13th Floor Interior Design Presentation' },
  
  // Page 2: 12th Floor Furniture Layout
  { pageNumber: 2, image: '/projects/one-oak/pages/page_02.jpg', heading: '12th Floor - Furniture Layout Plan', sectionId: 'floor-12-plan', floor: '12th Floor', description: '2D Architectural Furniture Layout Blueprint of 12th Floor', isPlan: true },
  
  // Pages 3-6: Formal Drawing Room
  { pageNumber: 3, image: '/projects/one-oak/pages/page_03.jpg', heading: 'Formal Drawing Room', sectionId: 'formal-drawing', floor: '12th Floor', description: 'Formal Drawing Room - Section Cover & Grand Lake View Salon' },
  { pageNumber: 4, image: '/projects/one-oak/pages/page_04.jpg', heading: 'Formal Drawing Room', sectionId: 'formal-drawing', floor: '12th Floor', description: 'Formal Drawing Room - Custom Marble TV Backdrop & Credenza' },
  { pageNumber: 5, image: '/projects/one-oak/pages/page_05.jpg', heading: 'Formal Drawing Room', sectionId: 'formal-drawing', floor: '12th Floor', description: 'Formal Drawing Room - Sculptural Seating & Terrace Glazing' },
  { pageNumber: 6, image: '/projects/one-oak/pages/page_06.jpg', heading: 'Formal Drawing Room', sectionId: 'formal-drawing', floor: '12th Floor', description: 'Formal Drawing Room - Foyer Transition & Screen Partition' },
  
  // Pages 7-14: Double Height Dining Lounge
  { pageNumber: 7, image: '/projects/one-oak/pages/page_07.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Section Cover & 8-Seater Dining Space' },
  { pageNumber: 8, image: '/projects/one-oak/pages/page_08.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Overview towards Terrace Deck' },
  { pageNumber: 9, image: '/projects/one-oak/pages/page_09.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Credenza & Marble Wall Art' },
  { pageNumber: 10, image: '/projects/one-oak/pages/page_10.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Vertical Chandelier & Double-Height Wall' },
  { pageNumber: 11, image: '/projects/one-oak/pages/page_11.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Floating Mezzanine Staircase Integration' },
  { pageNumber: 12, image: '/projects/one-oak/pages/page_12.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Staircase Under-Rise Timber Joinery' },
  { pageNumber: 13, image: '/projects/one-oak/pages/page_13.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Deck - Outdoor Deck with Gandipet Lake Views' },
  { pageNumber: 14, image: '/projects/one-oak/pages/page_14.jpg', heading: 'Double Height Dining Lounge', sectionId: 'dining-lounge', floor: '12th Floor', description: 'Double Height Dining Lounge - Warm Architectural Evening Illumination' },
  
  // Pages 15-18: Modular Kitchen
  { pageNumber: 15, image: '/projects/one-oak/pages/page_15.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: '12th Floor', description: 'Modular Kitchen - Section Cover & Quartz Waterfall Island Counter' },
  { pageNumber: 16, image: '/projects/one-oak/pages/page_16.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: '12th Floor', description: 'Modular Kitchen - Integrated Appliance Tall Units & Storage' },
  { pageNumber: 17, image: '/projects/one-oak/pages/page_17.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: '12th Floor', description: 'Modular Kitchen - Wet Kitchen Prep Zone & Utility Store' },
  { pageNumber: 18, image: '/projects/one-oak/pages/page_18.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: '12th Floor', description: 'Modular Kitchen - Breakfast Bar Counter & High Stools' },
  
  // Pages 19-21: Family Lounge
  { pageNumber: 19, image: '/projects/one-oak/pages/page_19.jpg', heading: 'Family Lounge', sectionId: 'family-lounge', floor: '12th Floor', description: 'Family Lounge - Section Cover & Sectional Sofa Seating' },
  { pageNumber: 20, image: '/projects/one-oak/pages/page_20.jpg', heading: 'Family Lounge', sectionId: 'family-lounge', floor: '12th Floor', description: 'Family Lounge - Entertainment Media Unit & Display Shelving' },
  { pageNumber: 21, image: '/projects/one-oak/pages/page_21.jpg', heading: 'Family Lounge', sectionId: 'family-lounge', floor: '12th Floor', description: 'Family Lounge - Balcony Sliding Door Connection' },
  
  // Pages 22-24: Guest Bedroom
  { pageNumber: 22, image: '/projects/one-oak/pages/page_22.jpg', heading: 'Guest Bedroom', sectionId: 'guest-bedroom', floor: '12th Floor', description: 'Guest Bedroom - Section Cover & Platform King Bed' },
  { pageNumber: 23, image: '/projects/one-oak/pages/page_23.jpg', heading: 'Guest Bedroom', sectionId: 'guest-bedroom', floor: '12th Floor', description: 'Guest Bedroom - Sliding Glass Wardrobe & Vanity Unit' },
  { pageNumber: 24, image: '/projects/one-oak/pages/page_24.jpg', heading: 'Guest Bedroom', sectionId: 'guest-bedroom', floor: '12th Floor', description: 'Guest Bedroom - Acoustic Wall Paneling & Lighting' },
  
  // Page 25: 13th Floor Furniture Layout
  { pageNumber: 25, image: '/projects/one-oak/pages/page_25.jpg', heading: '13th Floor - Furniture Layout Plan', sectionId: 'floor-13-plan', floor: '13th Floor', description: '2D Architectural Furniture Layout Blueprint of 13th Floor', isPlan: true },
  
  // Pages 26-30: Reading Nook / Study Lounge
  { pageNumber: 26, image: '/projects/one-oak/pages/page_26.jpg', heading: 'Reading Nook / Study Lounge', sectionId: 'reading-nook', floor: '13th Floor', description: 'Reading Nook / Study Lounge - Section Cover & Mezzanine Library' },
  { pageNumber: 27, image: '/projects/one-oak/pages/page_27.jpg', heading: 'Reading Nook / Study Lounge', sectionId: 'reading-nook', floor: '13th Floor', description: 'Reading Nook / Study Lounge - Floor-to-Ceiling Bookshelf Joinery' },
  { pageNumber: 28, image: '/projects/one-oak/pages/page_28.jpg', heading: 'Reading Nook / Study Lounge', sectionId: 'reading-nook', floor: '13th Floor', description: 'Reading Nook / Study Lounge - Overlook Perspective down to Dining' },
  { pageNumber: 29, image: '/projects/one-oak/pages/page_29.jpg', heading: 'Reading Nook / Study Lounge', sectionId: 'reading-nook', floor: '13th Floor', description: 'Reading Nook / Study Lounge - Lounge Armchair & Reading Light' },
  { pageNumber: 30, image: '/projects/one-oak/pages/page_30.jpg', heading: 'Reading Nook / Study Lounge', sectionId: 'reading-nook', floor: '13th Floor', description: 'Reading Nook / Study Lounge - Fluted Acoustic Timber Paneling' },
  
  // Pages 31-34: Master Bedroom Suite
  { pageNumber: 31, image: '/projects/one-oak/pages/page_31.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '13th Floor', description: 'Master Bedroom Suite - Section Cover & Palatial Master Suite' },
  { pageNumber: 32, image: '/projects/one-oak/pages/page_32.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '13th Floor', description: 'Master Bedroom Suite - Bedside Fluted Timber Wall & Ambient Lighting' },
  { pageNumber: 33, image: '/projects/one-oak/pages/page_33.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '13th Floor', description: 'Master Bedroom Suite - Bronze Glass Walk-in Wardrobe Dressing Room' },
  { pageNumber: 34, image: '/projects/one-oak/pages/page_34.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '13th Floor', description: 'Master Bedroom Suite - Private Balcony Terrace Deck' },
  
  // Pages 35-37: Bedroom 01
  { pageNumber: 35, image: '/projects/one-oak/pages/page_35.jpg', heading: 'Bedroom 01', sectionId: 'bedroom-01', floor: '13th Floor', description: 'Bedroom 01 - Section Cover & Backlit Accent Headboard' },
  { pageNumber: 36, image: '/projects/one-oak/pages/page_36.jpg', heading: 'Bedroom 01', sectionId: 'bedroom-01', floor: '13th Floor', description: 'Bedroom 01 - Integrated Ergonomic Study Desk & Shelving' },
  { pageNumber: 37, image: '/projects/one-oak/pages/page_37.jpg', heading: 'Bedroom 01', sectionId: 'bedroom-01', floor: '13th Floor', description: 'Bedroom 01 - Custom Wardrobe Storage & Soft Ambient Lighting' },
  
  // Pages 38-41: Bedroom 02
  { pageNumber: 38, image: '/projects/one-oak/pages/page_38.jpg', heading: 'Bedroom 02', sectionId: 'bedroom-02', floor: '13th Floor', description: 'Bedroom 02 - Section Cover & Contemporary Bed Design' },
  { pageNumber: 39, image: '/projects/one-oak/pages/page_39.jpg', heading: 'Bedroom 02', sectionId: 'bedroom-02', floor: '13th Floor', description: 'Bedroom 02 - Textured Accent Wall & Architectural Ceiling Cove' },
  { pageNumber: 40, image: '/projects/one-oak/pages/page_40.jpg', heading: 'Bedroom 02', sectionId: 'bedroom-02', floor: '13th Floor', description: 'Bedroom 02 - Study Desk Console & Book Display' },
  { pageNumber: 41, image: '/projects/one-oak/pages/page_41.jpg', heading: 'Bedroom 02', sectionId: 'bedroom-02', floor: '13th Floor', description: 'Bedroom 02 - Sliding Wardrobe System with Mirrored Accents' },
  
  // Page 42: Credits & Closing
  { pageNumber: 42, image: '/projects/one-oak/pages/page_42.jpg', heading: 'Credits & Closing', sectionId: 'credits', floor: 'Overview', description: 'Design Presentation by Ar. Rajesh Verma - Thank You' }
];

export function OneOakPresentationViewer() {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'flow' | 'slideshow'>('flow');
  const [slideshowIndex, setSlideshowIndex] = useState<number>(0);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < ALL_42_PAGES.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_42_PAGES.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxPage = lightboxIndex !== null ? ALL_42_PAGES[lightboxIndex] : null;

  // Sections to display in flow mode
  const sectionsToDisplay = selectedSectionId === 'all'
    ? PRESENTATION_SECTIONS
    : PRESENTATION_SECTIONS.filter((s) => s.id === selectedSectionId);

  return (
    <div className="space-y-8">
      {/* ──────────────── 1. Header Banner ──────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#C5A059]">
              <BookOpen className="w-3.5 h-3.5" /> Architectural Presentation • Exact PDF Flow
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D] mt-1">
              One Oak Sky Villa — Complete 42-Page Design Presentation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl font-sans leading-relaxed">
              Presented in the <strong>exact sequential order of the original PDF</strong> (Pages 01 to 42) designed by <strong>Ar. Rajesh Verma</strong>. Use the section index below to jump directly to any room, or browse from cover to closing.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200 text-xs font-bold text-slate-700">
              <button
                onClick={() => setViewMode('flow')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'flow' ? 'bg-[#1A374D] text-[#C5A059] shadow-xs' : 'hover:text-slate-950'
                }`}
              >
                <Grid className="w-3.5 h-3.5" /> Complete PDF Flow
              </button>
              <button
                onClick={() => setViewMode('slideshow')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'slideshow' ? 'bg-[#1A374D] text-[#C5A059] shadow-xs' : 'hover:text-slate-950'
                }`}
              >
                <Film className="w-3.5 h-3.5" /> Page-by-Page Slider
              </button>
            </div>
          </div>
        </div>

        {/* ──────────────── 2. Exact Table of Contents in PDF Order ──────────────── */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              Table of Contents (In Exact PDF Order)
            </span>
            <span className="text-[11px] text-[#C5A059] font-bold">
              Total 42 Pages • 13 Sequential Sections
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* All Pages Button */}
            <button
              onClick={() => setSelectedSectionId('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedSectionId === 'all'
                  ? 'bg-[#1A374D] text-[#C5A059] shadow-md border border-[#C5A059]/40'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              <span>Show All Pages</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                selectedSectionId === 'all' ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-slate-200 text-slate-600'
              }`}>
                42
              </span>
            </button>

            {/* Individual Section Buttons in Strict PDF Order */}
            {PRESENTATION_SECTIONS.map((sec) => {
              const isSelected = selectedSectionId === sec.id;
              const pageCount = sec.end - sec.start + 1;
              const rangeStr = sec.start === sec.end ? `P.${sec.start}` : `P.${sec.start}-${sec.end}`;

              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setSelectedSectionId(sec.id);
                    setSlideshowIndex(sec.start - 1);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1A374D] text-[#C5A059] shadow-md border border-[#C5A059]/40'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                  title={`${sec.title} (${rangeStr})`}
                >
                  <span className="text-[10px] font-mono text-slate-400">#{sec.orderNum}</span>
                  <span>{sec.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-[#C5A059]/20 text-[#C5A059]' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {rangeStr}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ──────────────── 3. View Mode: Complete Sequential PDF Flow ──────────────── */}
      {viewMode === 'flow' && (
        <div className="space-y-12">
          {sectionsToDisplay.map((sec) => {
            const secPages = ALL_42_PAGES.filter((p) => p.sectionId === sec.id);
            const rangeStr = sec.start === sec.end ? `Page ${sec.start}` : `Pages ${sec.start} to ${sec.end}`;

            return (
              <section
                key={sec.id}
                id={`sec-${sec.id}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
              >
                {/* Section Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#1A374D] text-[#C5A059] font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-sm">
                      {String(sec.orderNum).padStart(2, '0')}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059] bg-[#1A374D]/10 px-2 py-0.5 rounded">
                          {sec.floor}
                        </span>
                        <span className="text-xs font-mono text-slate-400 font-bold">
                          {rangeStr} of 42
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D] mt-0.5">
                        {sec.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 max-w-md font-sans">
                    {sec.desc}
                  </p>
                </div>

                {/* Section Pages Grid */}
                <div className={`grid gap-6 ${
                  secPages.length === 1
                    ? 'grid-cols-1 max-w-3xl mx-auto'
                    : secPages.length === 2
                    ? 'grid-cols-1 md:grid-cols-2'
                    : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {secPages.map((page) => {
                    const globalIdx = page.pageNumber - 1;
                    return (
                      <div
                        key={page.pageNumber}
                        onClick={() => setLightboxIndex(globalIdx)}
                        className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#C5A059] transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer flex flex-col"
                      >
                        {/* Page Preview Image */}
                        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                          <img
                            src={page.image}
                            alt={`${sec.title} - Page ${page.pageNumber}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur border border-white/20 text-[#C5A059] text-[10px] font-black tracking-wider">
                              PAGE {String(page.pageNumber).padStart(2, '0')} / 42
                            </span>
                            {page.isPlan && (
                              <span className="px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-bold shadow-sm">
                                📐 2D Layout Plan
                              </span>
                            )}
                          </div>

                          {/* Hover Zoom Button */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="px-4 py-2 rounded-xl bg-[#C5A059] text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                              <ZoomIn className="w-4 h-4" /> View Fullscreen
                            </div>
                          </div>
                        </div>

                        {/* Caption Bar */}
                        <div className="p-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
                          <div>
                            <div className="text-[10px] font-bold text-[#C5A059] uppercase tracking-wide">
                              Page {page.pageNumber} • {sec.title}
                            </div>
                            <div className="text-xs font-bold text-[#1A374D] mt-0.5 line-clamp-1">
                              {page.description}
                            </div>
                          </div>
                          <span className="text-[#C5A059] font-bold text-xs group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* ──────────────── 4. View Mode: Page-by-Page Slideshow ──────────────── */}
      {viewMode === 'slideshow' && (
        <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 p-4 sm:p-6 space-y-4 shadow-2xl">
          {/* Main Slide Viewport */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
            <img
              src={ALL_42_PAGES[slideshowIndex].image}
              alt={ALL_42_PAGES[slideshowIndex].description}
              className="w-full h-full object-contain"
            />

            {/* Prev Button */}
            <button
              onClick={() =>
                setSlideshowIndex((prev) => (prev > 0 ? prev - 1 : ALL_42_PAGES.length - 1))
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              title="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setSlideshowIndex((prev) => (prev < ALL_42_PAGES.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              title="Next Page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/85 backdrop-blur px-5 py-3 rounded-2xl border border-white/10 text-white text-xs">
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">
                  {ALL_42_PAGES[slideshowIndex].floor} • {ALL_42_PAGES[slideshowIndex].heading}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {ALL_42_PAGES[slideshowIndex].description}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-300 font-mono">
                  Page {ALL_42_PAGES[slideshowIndex].pageNumber} of 42
                </span>
                <button
                  onClick={() => setLightboxIndex(slideshowIndex)}
                  className="px-3 py-1.5 rounded-xl bg-[#C5A059] text-slate-950 text-xs font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Fullscreen
                </button>
              </div>
            </div>
          </div>

          {/* Sequential Thumbnail Strip */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {ALL_42_PAGES.map((page, idx) => {
              const isSelected = idx === slideshowIndex;
              return (
                <button
                  key={page.pageNumber}
                  onClick={() => setSlideshowIndex(idx)}
                  className={`shrink-0 w-24 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all relative ${
                    isSelected
                      ? 'border-[#C5A059] scale-105 shadow-md shadow-[#C5A059]/20'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={page.image} alt="" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 bg-slate-950/80 text-[#C5A059] text-[9px] font-mono px-1 rounded">
                    {page.pageNumber}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ──────────────── 5. Fullscreen Lightbox Modal (Pages 1 to 42 in order) ──────────────── */}
      {lightboxIndex !== null && currentLightboxPage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Header */}
          <div
            className="flex items-center justify-between text-white border-b border-white/10 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-xs font-black tracking-wider">
                PAGE {String(currentLightboxPage.pageNumber).padStart(2, '0')} / 42
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-serif font-black text-white">
                  {currentLightboxPage.heading}
                </h4>
                <div className="text-[11px] text-slate-400">
                  {currentLightboxPage.floor} • {currentLightboxPage.description}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 hidden sm:inline">
                Use ← → arrow keys to navigate | Esc to exit
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Central Image Viewport */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ALL_42_PAGES.length - 1
                )
              }
              className="absolute left-2 sm:left-6 z-20 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl"
              title="Previous Page (Arrow Left)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* High-res Image */}
            <div className="max-w-6xl max-h-[80vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={currentLightboxPage.image}
                alt={currentLightboxPage.description}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ALL_42_PAGES.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl"
              title="Next Page (Arrow Right)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip (Pages 1 to 42 in order) */}
          <div
            className="border-t border-white/10 pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {ALL_42_PAGES.map((p, idx) => {
              const isCurrent = idx === lightboxIndex;
              return (
                <button
                  key={p.pageNumber}
                  onClick={() => setLightboxIndex(idx)}
                  className={`shrink-0 w-16 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all relative ${
                    isCurrent
                      ? 'border-[#C5A059] scale-110 shadow-lg'
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={p.image} alt="" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-[8px] font-mono text-[#C5A059] px-0.5 rounded">
                    {p.pageNumber}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
