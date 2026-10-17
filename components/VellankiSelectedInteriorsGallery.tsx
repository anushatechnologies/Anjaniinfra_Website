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
  room: 'Living' | 'Dining' | 'Bedroom' | 'Kitchen';
  image: string;
}

export interface SelectedInteriorRow {
  room: 'Living' | 'Dining' | 'Bedroom' | 'Kitchen';
  items: SelectedInteriorItem[];
}

export const VELLANKI_ROWS: SelectedInteriorRow[] = [
  {
    room: 'Living',
    items: [
      { id: 'vellanki-living-13', room: 'Living', image: '/projects/vellanki-penthouse/top16/vellanki_top_13.jpg' },
      { id: 'vellanki-living-14', room: 'Living', image: '/projects/vellanki-penthouse/top16/vellanki_top_14.jpg' },
      { id: 'vellanki-living-15', room: 'Living', image: '/projects/vellanki-penthouse/top16/vellanki_top_15.jpg' }
    ]
  },
  {
    room: 'Dining',
    items: [
      { id: 'vellanki-dining-16', room: 'Dining', image: '/projects/vellanki-penthouse/top16/vellanki_top_16.jpg' }
    ]
  },
  {
    room: 'Bedroom',
    items: [
      { id: 'vellanki-bed-08', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_08.jpg' },
      { id: 'vellanki-bed-09', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_09.jpg' },
      { id: 'vellanki-bed-10', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_10.jpg' },
      { id: 'vellanki-bed-11', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_11.jpg' },
      { id: 'vellanki-bed-12', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_12.jpg' },
      { id: 'vellanki-bed-03', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_03.jpg' },
      { id: 'vellanki-bed-04', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_04.jpg' },
      { id: 'vellanki-bed-05', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_05.jpg' },
      { id: 'vellanki-bed-06', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_06.jpg' },
      { id: 'vellanki-bed-07', room: 'Bedroom', image: '/projects/vellanki-penthouse/top16/vellanki_top_07.jpg' }
    ]
  },
  {
    room: 'Kitchen',
    items: [
      { id: 'vellanki-kitchen-01', room: 'Kitchen', image: '/projects/vellanki-penthouse/top16/vellanki_top_01.jpg' },
      { id: 'vellanki-kitchen-02', room: 'Kitchen', image: '/projects/vellanki-penthouse/top16/vellanki_top_02.jpg' }
    ]
  }
];

export const ALL_VELLANKI_INTERIORS: SelectedInteriorItem[] = VELLANKI_ROWS.flatMap(
  (row) => row.items
);

export function VellankiSelectedInteriorsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < ALL_VELLANKI_INTERIORS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_VELLANKI_INTERIORS.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxItem = lightboxIndex !== null ? ALL_VELLANKI_INTERIORS[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* ──────────────── 4 ROWS DISPLAY (BIG CLEAN IMAGES) ──────────────── */}
      <div className="space-y-8">
        {VELLANKI_ROWS.map((row) => (
          <section
            key={row.room}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
          >
            {/* Simple Clean Room Title Header */}
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">
                {row.room}
              </h3>
            </div>

            {/* Big Simple Images Grid (2 columns on desktop for large luxury display) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {row.items.map((item) => {
                const globalIndex = ALL_VELLANKI_INTERIORS.findIndex((i) => i.id === item.id);
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
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-slate-950/80 text-[#C5A059] backdrop-blur shadow-xl transform scale-90 group-hover:scale-100">
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

            <div className="flex items-center gap-2">
              <a
                href={currentLightboxItem.image}
                download
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 border border-white/20 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={() => setLightboxIndex(null)}
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Middle Main Preview */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-7xl flex items-center justify-center my-3 overflow-hidden"
          >
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ALL_VELLANKI_INTERIORS.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-20 h-12 w-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-2xl"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-[#C5A059]" />
            </button>

            <div className="relative max-h-full max-w-full flex items-center justify-center rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-black">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.room}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ALL_VELLANKI_INTERIORS.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-20 h-12 w-12 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-2xl"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-[#C5A059]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
