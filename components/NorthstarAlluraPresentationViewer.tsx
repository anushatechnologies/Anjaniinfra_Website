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

// 16 sequential sections of Northstar Allura presentation in exact PDF order
export const NORTHSTAR_SECTIONS: SectionCategory[] = [
  {
    id: 'cover',
    orderNum: 1,
    title: 'Cover & Title',
    floor: 'Overview',
    start: 1,
    end: 1,
    desc: 'Northstar Allura Villa Interior Design Presentation Cover.'
  },
  {
    id: 'kitchen',
    orderNum: 2,
    title: 'Modular Kitchen',
    floor: 'Ground Floor',
    start: 2,
    end: 4,
    desc: 'Contemporary modular kitchen with white acrylic cabinetry, marble island counter, and gold-tinted display glass.'
  },
  {
    id: 'wet-kitchen',
    orderNum: 3,
    title: 'Wet Kitchen',
    floor: 'Ground Floor',
    start: 5,
    end: 7,
    desc: 'Heavy prep wet kitchen with granite counters, stainless sink units, and overhead storage.'
  },
  {
    id: 'gf-bedroom',
    orderNum: 4,
    title: 'Ground Floor Bedroom',
    floor: 'Ground Floor',
    start: 8,
    end: 11,
    desc: 'Serene ground floor bedroom suite with warm paneling, upholstered bed, and ambient lighting.'
  },
  {
    id: 'children-bedroom',
    orderNum: 5,
    title: 'Children Bedroom',
    floor: '1st Floor',
    start: 12,
    end: 18,
    desc: 'Vibrant children bedroom suite with bespoke study desk, built-in wardrobes, and playful accent walls.'
  },
  {
    id: 'master-bedroom',
    orderNum: 6,
    title: 'Master Bedroom Suite',
    floor: '1st Floor',
    start: 19,
    end: 25,
    desc: 'Palatial master bedroom suite with fluted acoustic paneling, luxury headboard, dressing area, and cove illumination.'
  },
  {
    id: 'second-floor-bedroom',
    orderNum: 7,
    title: 'Second Floor Bedroom',
    floor: '2nd Floor',
    start: 26,
    end: 29,
    desc: 'Contemporary upper-level guest suite with low-profile bed, wooden accents, and private balcony look-out.'
  },
  {
    id: 'puja-unit',
    orderNum: 8,
    title: 'Puja Unit',
    floor: 'Ground Floor',
    start: 30,
    end: 32,
    desc: 'Traditional-contemporary sanctum with laser-cut jaali backdrop, brass bells, and marble console.'
  },
  {
    id: 'dining',
    orderNum: 9,
    title: 'Luxury Dining Space',
    floor: 'Ground Floor',
    start: 33,
    end: 37,
    desc: 'Grand 8-seater dining room with Italian marble table, designer credenza, and architectural pendant lights.'
  },
  {
    id: 'living-room',
    orderNum: 10,
    title: 'Ground Floor Living Room',
    floor: 'Ground Floor',
    start: 38,
    end: 40,
    desc: 'Formal double-volume living area with plush leather seating, marble media wall, and expansive glazing.'
  },
  {
    id: 'partition-options',
    orderNum: 11,
    title: 'Living Room Partition Options',
    floor: 'Ground Floor',
    start: 41,
    end: 48,
    desc: 'Design variations and screening options between formal living, foyer, and dining spaces.'
  },
  {
    id: 'home-theatre',
    orderNum: 12,
    title: 'Private Home Theatre',
    floor: '2nd Floor',
    start: 49,
    end: 51,
    desc: 'Acoustically engineered private cinema lounge with tiered recliner seating, starlight ceiling, and surround system.'
  },
  {
    id: 'first-floor-lounge',
    orderNum: 13,
    title: '1st Floor Family Lounge',
    floor: '1st Floor',
    start: 52,
    end: 56,
    desc: 'Intimate family entertainment area connecting master suite and children bedroom.'
  },
  {
    id: 'second-floor-lounge',
    orderNum: 14,
    title: '2nd Floor Lounge',
    floor: '2nd Floor',
    start: 57,
    end: 58,
    desc: 'Upper leisure lounge with casual seating and bar credenza.'
  },
  {
    id: 'terrace',
    orderNum: 15,
    title: 'Terrace Deck & Outdoor Lounge',
    floor: 'Terrace',
    start: 59,
    end: 61,
    desc: 'Open sky terrace garden with wooden deck flooring, pergola seating, and lush landscaping.'
  },
  {
    id: 'thank-you',
    orderNum: 16,
    title: 'Closing Slide',
    floor: 'Overview',
    start: 62,
    end: 62,
    desc: 'Architectural Presentation Closing Slide - Thank You.'
  }
];

// All 62 pages in exact 1-to-62 sequential order
export const NORTHSTAR_ALL_62_PAGES: PresentationPageItem[] = [
  { pageNumber: 1, image: '/projects/northstar-allura/pages/page_01.jpg', heading: 'Cover & Title', sectionId: 'cover', floor: 'Overview', description: 'Northstar Allura Villa Renders Presentation Cover' },
  { pageNumber: 2, image: '/projects/northstar-allura/pages/page_02.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: 'Ground Floor', description: 'Kitchen Title Slide' },
  { pageNumber: 3, image: '/projects/northstar-allura/pages/page_03.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: 'Ground Floor', description: 'Kitchen - Island Counter & Breakfast Bar' },
  { pageNumber: 4, image: '/projects/northstar-allura/pages/page_04.jpg', heading: 'Modular Kitchen', sectionId: 'kitchen', floor: 'Ground Floor', description: 'Kitchen - Tall Units & Hob Counter View' },
  { pageNumber: 5, image: '/projects/northstar-allura/pages/page_05.jpg', heading: 'Wet Kitchen', sectionId: 'wet-kitchen', floor: 'Ground Floor', description: 'Wet Kitchen Title Slide' },
  { pageNumber: 6, image: '/projects/northstar-allura/pages/page_06.jpg', heading: 'Wet Kitchen', sectionId: 'wet-kitchen', floor: 'Ground Floor', description: 'Wet Kitchen - Granite Counter & Prep Sink' },
  { pageNumber: 7, image: '/projects/northstar-allura/pages/page_07.jpg', heading: 'Wet Kitchen', sectionId: 'wet-kitchen', floor: 'Ground Floor', description: 'Wet Kitchen - Overhead Cabinets & Utility' },
  { pageNumber: 8, image: '/projects/northstar-allura/pages/page_08.jpg', heading: 'Ground Floor Bedroom', sectionId: 'gf-bedroom', floor: 'Ground Floor', description: 'Ground Floor Bedroom Title Slide' },
  { pageNumber: 9, image: '/projects/northstar-allura/pages/page_09.jpg', heading: 'Ground Floor Bedroom', sectionId: 'gf-bedroom', floor: 'Ground Floor', description: 'Ground Floor Bedroom - Upholstered Bed & Backlit Headboard' },
  { pageNumber: 10, image: '/projects/northstar-allura/pages/page_10.jpg', heading: 'Ground Floor Bedroom', sectionId: 'gf-bedroom', floor: 'Ground Floor', description: 'Ground Floor Bedroom - Wardrobe & Dresser View' },
  { pageNumber: 11, image: '/projects/northstar-allura/pages/page_11.jpg', heading: 'Ground Floor Bedroom', sectionId: 'gf-bedroom', floor: 'Ground Floor', description: 'Ground Floor Bedroom - TV Wall & Console Unit' },
  { pageNumber: 12, image: '/projects/northstar-allura/pages/page_12.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom Title Slide' },
  { pageNumber: 13, image: '/projects/northstar-allura/pages/page_13.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - Playful Headboard & Bed Design' },
  { pageNumber: 14, image: '/projects/northstar-allura/pages/page_14.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - Study Desk & Bookcase' },
  { pageNumber: 15, image: '/projects/northstar-allura/pages/page_15.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - Wardrobe & Display Niche' },
  { pageNumber: 16, image: '/projects/northstar-allura/pages/page_16.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - TV Console & Play Area' },
  { pageNumber: 17, image: '/projects/northstar-allura/pages/page_17.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - Angle View with Window Seating' },
  { pageNumber: 18, image: '/projects/northstar-allura/pages/page_18.jpg', heading: 'Children Bedroom', sectionId: 'children-bedroom', floor: '1st Floor', description: 'Children Bedroom - Ceiling Detail & Ambient Lighting' },
  { pageNumber: 19, image: '/projects/northstar-allura/pages/page_19.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom Title Slide' },
  { pageNumber: 20, image: '/projects/northstar-allura/pages/page_20.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - King Bed with Fluted Paneling' },
  { pageNumber: 21, image: '/projects/northstar-allura/pages/page_21.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - Bedside Louvers & Cove Lighting' },
  { pageNumber: 22, image: '/projects/northstar-allura/pages/page_22.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - TV Media Wall & Credenza' },
  { pageNumber: 23, image: '/projects/northstar-allura/pages/page_23.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - Walk-in Wardrobe Transition' },
  { pageNumber: 24, image: '/projects/northstar-allura/pages/page_24.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - Dressing Vanity & Mirror' },
  { pageNumber: 25, image: '/projects/northstar-allura/pages/page_25.jpg', heading: 'Master Bedroom Suite', sectionId: 'master-bedroom', floor: '1st Floor', description: 'Master Bedroom - Balcony Glazing & Seating' },
  { pageNumber: 26, image: '/projects/northstar-allura/pages/page_26.jpg', heading: 'Second Floor Bedroom', sectionId: 'second-floor-bedroom', floor: '2nd Floor', description: 'Second Floor Bedroom Title Slide' },
  { pageNumber: 27, image: '/projects/northstar-allura/pages/page_27.jpg', heading: 'Second Floor Bedroom', sectionId: 'second-floor-bedroom', floor: '2nd Floor', description: 'Second Floor Bedroom - Low Platform Bed View' },
  { pageNumber: 28, image: '/projects/northstar-allura/pages/page_28.jpg', heading: 'Second Floor Bedroom', sectionId: 'second-floor-bedroom', floor: '2nd Floor', description: 'Second Floor Bedroom - Sliding Wardrobe & Study' },
  { pageNumber: 29, image: '/projects/northstar-allura/pages/page_29.jpg', heading: 'Second Floor Bedroom', sectionId: 'second-floor-bedroom', floor: '2nd Floor', description: 'Second Floor Bedroom - Ceiling Accent & Illumination' },
  { pageNumber: 30, image: '/projects/northstar-allura/pages/page_30.jpg', heading: 'Puja Unit', sectionId: 'puja-unit', floor: 'Ground Floor', description: 'Puja Unit Title Slide' },
  { pageNumber: 31, image: '/projects/northstar-allura/pages/page_31.jpg', heading: 'Puja Unit', sectionId: 'puja-unit', floor: 'Ground Floor', description: 'Puja Unit - CNC Jaali Backdrop & Mandir Sanctum' },
  { pageNumber: 32, image: '/projects/northstar-allura/pages/page_32.jpg', heading: 'Puja Unit', sectionId: 'puja-unit', floor: 'Ground Floor', description: 'Puja Unit - Marble Console & Brass Accents' },
  { pageNumber: 33, image: '/projects/northstar-allura/pages/page_33.jpg', heading: 'Luxury Dining Space', sectionId: 'dining', floor: 'Ground Floor', description: 'Dining Space Title Slide' },
  { pageNumber: 34, image: '/projects/northstar-allura/pages/page_34.jpg', heading: 'Luxury Dining Space', sectionId: 'dining', floor: 'Ground Floor', description: 'Dining Space - 8-Seater Marble Dining Table' },
  { pageNumber: 35, image: '/projects/northstar-allura/pages/page_35.jpg', heading: 'Luxury Dining Space', sectionId: 'dining', floor: 'Ground Floor', description: 'Dining Space - Crockery Console & Mirror Backdrop' },
  { pageNumber: 36, image: '/projects/northstar-allura/pages/page_36.jpg', heading: 'Luxury Dining Space', sectionId: 'dining', floor: 'Ground Floor', description: 'Dining Space - Chandelier & Double Height Void' },
  { pageNumber: 37, image: '/projects/northstar-allura/pages/page_37.jpg', heading: 'Luxury Dining Space', sectionId: 'dining', floor: 'Ground Floor', description: 'Dining Space - Kitchen & Living Room Connection' },
  { pageNumber: 38, image: '/projects/northstar-allura/pages/page_38.jpg', heading: 'Ground Floor Living Room', sectionId: 'living-room', floor: 'Ground Floor', description: 'Ground Floor Living Room Title Slide' },
  { pageNumber: 39, image: '/projects/northstar-allura/pages/page_39.jpg', heading: 'Ground Floor Living Room', sectionId: 'living-room', floor: 'Ground Floor', description: 'Living Room - Formal Sofa Seating & Center Table' },
  { pageNumber: 40, image: '/projects/northstar-allura/pages/page_40.jpg', heading: 'Ground Floor Living Room', sectionId: 'living-room', floor: 'Ground Floor', description: 'Living Room - Marble TV Unit & Ambient Wall Lights' },
  { pageNumber: 41, image: '/projects/northstar-allura/pages/page_41.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Living Room Partition Options Title Slide' },
  { pageNumber: 42, image: '/projects/northstar-allura/pages/page_42.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option A - Metal Fluted Screen' },
  { pageNumber: 43, image: '/projects/northstar-allura/pages/page_43.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option B - Geometric Brass Jaali' },
  { pageNumber: 44, image: '/projects/northstar-allura/pages/page_44.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option C - Acoustic Wood Slat Divider' },
  { pageNumber: 45, image: '/projects/northstar-allura/pages/page_45.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option D - Floating Display Shelving' },
  { pageNumber: 46, image: '/projects/northstar-allura/pages/page_46.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option E - Fluted Glass Frame' },
  { pageNumber: 47, image: '/projects/northstar-allura/pages/page_47.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option F - Marble & Timber Accent Screen' },
  { pageNumber: 48, image: '/projects/northstar-allura/pages/page_48.jpg', heading: 'Partition Options', sectionId: 'partition-options', floor: 'Ground Floor', description: 'Partition Option G - Integrated Planter Screen' },
  { pageNumber: 49, image: '/projects/northstar-allura/pages/page_49.jpg', heading: 'Private Home Theatre', sectionId: 'home-theatre', floor: '2nd Floor', description: 'Home Theatre Title Slide' },
  { pageNumber: 50, image: '/projects/northstar-allura/pages/page_50.jpg', heading: 'Private Home Theatre', sectionId: 'home-theatre', floor: '2nd Floor', description: 'Home Theatre - Acoustic Fabric Walls & Recliner Seating' },
  { pageNumber: 51, image: '/projects/northstar-allura/pages/page_51.jpg', heading: 'Private Home Theatre', sectionId: 'home-theatre', floor: '2nd Floor', description: 'Home Theatre - Projection Screen Wall & Starlight Ceiling' },
  { pageNumber: 52, image: '/projects/northstar-allura/pages/page_52.jpg', heading: '1st Floor Family Lounge', sectionId: 'first-floor-lounge', floor: '1st Floor', description: '1st Floor Family Lounge Title Slide' },
  { pageNumber: 53, image: '/projects/northstar-allura/pages/page_53.jpg', heading: '1st Floor Family Lounge', sectionId: 'first-floor-lounge', floor: '1st Floor', description: 'Family Lounge - Sectional Sofa & Media Console' },
  { pageNumber: 54, image: '/projects/northstar-allura/pages/page_54.jpg', heading: '1st Floor Family Lounge', sectionId: 'first-floor-lounge', floor: '1st Floor', description: 'Family Lounge - Double Height Overlook Balcony' },
  { pageNumber: 55, image: '/projects/northstar-allura/pages/page_55.jpg', heading: '1st Floor Family Lounge', sectionId: 'first-floor-lounge', floor: '1st Floor', description: 'Family Lounge - Backlit Wall Paneling' },
  { pageNumber: 56, image: '/projects/northstar-allura/pages/page_56.jpg', heading: '1st Floor Family Lounge', sectionId: 'first-floor-lounge', floor: '1st Floor', description: 'Family Lounge - Coffee Table & Lounge Chairs' },
  { pageNumber: 57, image: '/projects/northstar-allura/pages/page_57.jpg', heading: '2nd Floor Lounge', sectionId: 'second-floor-lounge', floor: '2nd Floor', description: '2nd Floor Lounge Title Slide' },
  { pageNumber: 58, image: '/projects/northstar-allura/pages/page_58.jpg', heading: '2nd Floor Lounge', sectionId: 'second-floor-lounge', floor: '2nd Floor', description: '2nd Floor Lounge - Upper Floor Leisure Seating' },
  { pageNumber: 59, image: '/projects/northstar-allura/pages/page_59.jpg', heading: 'Terrace Deck', sectionId: 'terrace', floor: 'Terrace', description: 'Terrace Deck Title Slide' },
  { pageNumber: 60, image: '/projects/northstar-allura/pages/page_60.jpg', heading: 'Terrace Deck', sectionId: 'terrace', floor: 'Terrace', description: 'Terrace Deck - Pergola & Outdoor Seating Arrangement' },
  { pageNumber: 61, image: '/projects/northstar-allura/pages/page_61.jpg', heading: 'Terrace Deck', sectionId: 'terrace', floor: 'Terrace', description: 'Terrace Deck - Wooden Decking & Planters' },
  { pageNumber: 62, image: '/projects/northstar-allura/pages/page_62.jpg', heading: 'Thank You', sectionId: 'thank-you', floor: 'Overview', description: 'Architectural Presentation Closing - Thank You' }
];

export function NorthstarAlluraPresentationViewer() {
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
        setLightboxIndex((prev) => (prev !== null && prev < NORTHSTAR_ALL_62_PAGES.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : NORTHSTAR_ALL_62_PAGES.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxPage = lightboxIndex !== null ? NORTHSTAR_ALL_62_PAGES[lightboxIndex] : null;

  // Sections to display in flow mode
  const sectionsToDisplay = selectedSectionId === 'all'
    ? NORTHSTAR_SECTIONS
    : NORTHSTAR_SECTIONS.filter((s) => s.id === selectedSectionId);

  return (
    <div className="space-y-8">
      {/* ──────────────── 1. Header Banner ──────────────── */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#C5A059]">
              <BookOpen className="w-3.5 h-3.5" /> Architectural Presentation • Complete 62 Pages
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1A374D] mt-1">
              Northstar Allura, Kokapet — Luxury Villa Renders Presentation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl font-sans leading-relaxed">
              Presented in the <strong>exact sequential order of the revised presentation</strong> (Pages 01 to 62). Browse all 16 interior zones spanning the Ground Floor, First Floor, Second Floor, and Terrace Garden.
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
                <Grid className="w-3.5 h-3.5" /> Complete Flow
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

        {/* ──────────────── 2. Table of Contents in PDF Order ──────────────── */}
        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              Villa Areas &amp; Sections (In Exact PDF Order)
            </span>
            <span className="text-[11px] text-[#C5A059] font-bold">
              Total 62 Pages • 16 Sequential Sections
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Show All Pages Button */}
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
                62
              </span>
            </button>

            {/* Section Buttons in Strict PDF Order */}
            {NORTHSTAR_SECTIONS.map((sec) => {
              const isSelected = selectedSectionId === sec.id;
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

      {/* ──────────────── 3. View Mode: Complete Flow ──────────────── */}
      {viewMode === 'flow' && (
        <div className="space-y-12">
          {sectionsToDisplay.map((sec) => {
            const secPages = NORTHSTAR_ALL_62_PAGES.filter((p) => p.sectionId === sec.id);
            const rangeStr = sec.start === sec.end ? `Page ${sec.start}` : `Pages ${sec.start} to ${sec.end}`;

            return (
              <section
                key={sec.id}
                id={`sec-${sec.id}`}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
              >
                {/* Section Header */}
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
                          {rangeStr} of 62
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
                        <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                          <img
                            src={page.image}
                            alt={`${sec.title} - Page ${page.pageNumber}`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                          {/* Top Badges */}
                          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                            <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur border border-white/20 text-[#C5A059] text-[10px] font-black tracking-wider">
                              PAGE {String(page.pageNumber).padStart(2, '0')} / 62
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur text-white text-[10px] font-bold">
                              {page.floor}
                            </span>
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

      {/* ──────────────── 4. View Mode: Slideshow ──────────────── */}
      {viewMode === 'slideshow' && (
        <div className="bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 p-4 sm:p-6 space-y-4 shadow-2xl">
          <div className="relative aspect-[4/3] max-h-[70vh] w-full rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center mx-auto">
            <img
              src={NORTHSTAR_ALL_62_PAGES[slideshowIndex].image}
              alt={NORTHSTAR_ALL_62_PAGES[slideshowIndex].description}
              className="w-full h-full object-contain"
            />

            {/* Prev */}
            <button
              onClick={() =>
                setSlideshowIndex((prev) => (prev > 0 ? prev - 1 : NORTHSTAR_ALL_62_PAGES.length - 1))
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg"
              title="Previous Page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setSlideshowIndex((prev) => (prev < NORTHSTAR_ALL_62_PAGES.length - 1 ? prev + 1 : 0))
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
                  {NORTHSTAR_ALL_62_PAGES[slideshowIndex].floor} • {NORTHSTAR_ALL_62_PAGES[slideshowIndex].heading}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {NORTHSTAR_ALL_62_PAGES[slideshowIndex].description}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-300 font-mono">
                  Page {NORTHSTAR_ALL_62_PAGES[slideshowIndex].pageNumber} of 62
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
            {NORTHSTAR_ALL_62_PAGES.map((page, idx) => {
              const isSelected = idx === slideshowIndex;
              return (
                <button
                  key={page.pageNumber}
                  onClick={() => setSlideshowIndex(idx)}
                  className={`shrink-0 w-24 aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all relative ${
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

      {/* ──────────────── 5. Fullscreen Lightbox Modal (Pages 1 to 62) ──────────────── */}
      {lightboxIndex !== null && currentLightboxPage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white border-b border-white/10 pb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-xs font-black tracking-wider">
                PAGE {String(currentLightboxPage.pageNumber).padStart(2, '0')} / 62
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
            {/* Prev */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : NORTHSTAR_ALL_62_PAGES.length - 1
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

            {/* Next */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < NORTHSTAR_ALL_62_PAGES.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-6 z-20 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-[#C5A059] text-white hover:text-slate-950 border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl"
              title="Next Page (Arrow Right)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Thumbnail Strip */}
          <div
            className="border-t border-white/10 pt-3 flex items-center gap-2 overflow-x-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {NORTHSTAR_ALL_62_PAGES.map((p, idx) => {
              const isCurrent = idx === lightboxIndex;
              return (
                <button
                  key={p.pageNumber}
                  onClick={() => setLightboxIndex(idx)}
                  className={`shrink-0 w-16 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all relative ${
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
