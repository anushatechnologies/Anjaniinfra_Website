'use client';

import React, { useState, useEffect, useCallback } from 'react';
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Download
} from 'lucide-react';

export interface SelectedInteriorItem {
  id: string;
  room: 'Living Room & TV Units' | 'Dining Area' | 'Bedroom Interiors' | 'Additional Interior Views';
  image: string;
}

export interface SelectedInteriorRow {
  room: 'Living Room & TV Units' | 'Dining Area' | 'Bedroom Interiors' | 'Additional Interior Views';
  items: SelectedInteriorItem[];
}

export const BHAVYA_ROWS: SelectedInteriorRow[] = [
  {
    room: 'Living Room & TV Units',
    items: [
      { id: 'bhavya-living-01', room: 'Living Room & TV Units', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_01.jpg' },
      { id: 'bhavya-living-02', room: 'Living Room & TV Units', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_02.jpg' },
      { id: 'bhavya-living-03', room: 'Living Room & TV Units', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_03.jpg' },
      { id: 'bhavya-living-04', room: 'Living Room & TV Units', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_04.jpg' }
    ]
  },
  {
    room: 'Dining Area',
    items: [
      { id: 'bhavya-dining-05', room: 'Dining Area', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_05.jpg' },
      { id: 'bhavya-dining-06', room: 'Dining Area', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_06.jpg' }
    ]
  },
  {
    room: 'Bedroom Interiors',
    items: [
      { id: 'bhavya-bed-07', room: 'Bedroom Interiors', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_07.jpg' },
      { id: 'bhavya-bed-08', room: 'Bedroom Interiors', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_08.jpg' },
      { id: 'bhavya-bed-09', room: 'Bedroom Interiors', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_09.jpg' },
      { id: 'bhavya-bed-10', room: 'Bedroom Interiors', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_10.jpg' }
    ]
  },
  {
    room: 'Additional Interior Views',
    items: [
      { id: 'bhavya-extra-11', room: 'Additional Interior Views', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_11.jpg' },
      { id: 'bhavya-extra-12', room: 'Additional Interior Views', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_12.jpg' },
      { id: 'bhavya-extra-13', room: 'Additional Interior Views', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_13.jpg' },
      { id: 'bhavya-extra-14', room: 'Additional Interior Views', image: '/projects/bhavyas-eugen-madhapur/selected/bhavya_selected_14.jpg' }
    ]
  }
];

export const ALL_BHAVYA_INTERIORS: SelectedInteriorItem[] = BHAVYA_ROWS.flatMap(
  (row) => row.items
);

export function BhavyasEugenSelectedInteriorsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < ALL_BHAVYA_INTERIORS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_BHAVYA_INTERIORS.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxItem = lightboxIndex !== null ? ALL_BHAVYA_INTERIORS[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* ──────────────── 4 ROWS DISPLAY (BIG CLEAN IMAGES) ──────────────── */}
      <div className="space-y-8">
        {BHAVYA_ROWS.map((row) => (
          <section
            key={row.room}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
          >
            {/* Room Title Header */}
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">
                {row.room}
              </h3>
            </div>

            {/* Big Simple Images Grid (2 columns on desktop for large luxury display) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {row.items.map((item) => {
                const globalIndex = ALL_BHAVYA_INTERIORS.findIndex((i) => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group bg-slate-100 border border-slate-200/80 hover:border-[#C5A059]"
                  >
                    <img
                      src={item.image}
                      alt={row.room}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />

                    {/* Simple Hover Zoom Icon */}
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-slate-950/85 text-[#C5A059] backdrop-blur shadow-xl transform scale-90 group-hover:scale-100">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* ──────────────── Lightbox Modal ──────────────── */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
        >
          {/* Top Control Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between z-20 py-2 border-b border-white/10"
          >
            <div className="text-white font-serif font-bold text-sm">
              {currentLightboxItem.room}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={currentLightboxItem.image}
                download
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Download High-Res Image"
              >
                <Download className="w-5 h-5" />
              </a>

              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center py-4 my-auto select-none"
          >
            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.room}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
            />

            {/* Left Nav Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_BHAVYA_INTERIORS.length - 1))
              }
              className="absolute left-2 sm:-left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/10 shadow-xl transition-all cursor-pointer hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev !== null && prev < ALL_BHAVYA_INTERIORS.length - 1 ? prev + 1 : 0))
              }
              className="absolute right-2 sm:-right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/10 shadow-xl transition-all cursor-pointer hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Indicators */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-white/60 text-xs tracking-wider z-20 py-1"
          >
            {lightboxIndex + 1} of {ALL_BHAVYA_INTERIORS.length} • Use Arrow Keys to Navigate • Esc to Close
          </div>
        </div>
      )}
    </div>
  );
}
