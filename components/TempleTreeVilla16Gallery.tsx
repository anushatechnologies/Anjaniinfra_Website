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
  room: string;
  image: string;
}

export interface SelectedInteriorRow {
  room: string;
  items: SelectedInteriorItem[];
}

export const TEMPLE_TREE_ROWS: SelectedInteriorRow[] = [
  {
    room: 'Living',
    items: [
      { id: 'villa16-living-1', room: 'Living', image: '/projects/temple-tree-villa-16/watermarked/villa16_02.jpg' },
      { id: 'villa16-living-2', room: 'Living', image: '/projects/temple-tree-villa-16/watermarked/villa16_05.jpg' },
      { id: 'villa16-living-3', room: 'Living', image: '/projects/temple-tree-villa-16/watermarked/villa16_06.jpg' },
      { id: 'villa16-living-4', room: 'Living', image: '/projects/temple-tree-villa-16/watermarked/villa16_07.jpg' },
      { id: 'villa16-living-5', room: 'Living', image: '/projects/temple-tree-villa-16/watermarked/villa16_08.jpg' },
    ]
  },
  {
    room: 'Dining',
    items: [
      { id: 'villa16-dining-1', room: 'Dining', image: '/projects/temple-tree-villa-16/watermarked/villa16_12.jpg' },
      { id: 'villa16-dining-2', room: 'Dining', image: '/projects/temple-tree-villa-16/watermarked/villa16_13.jpg' },
    ]
  },
  {
    room: 'Kitchen',
    items: [
      { id: 'villa16-kitchen-1', room: 'Kitchen', image: '/projects/temple-tree-villa-16/watermarked/villa16_11.jpg' },
      { id: 'villa16-kitchen-2', room: 'Kitchen', image: '/projects/temple-tree-villa-16/watermarked/villa16_09.jpg' },
      { id: 'villa16-kitchen-3', room: 'Kitchen', image: '/projects/temple-tree-villa-16/watermarked/villa16_10.jpg' },
    ]
  },
  {
    room: 'Lounge',
    items: [
      { id: 'villa16-lounge-1', room: 'Lounge', image: '/projects/temple-tree-villa-16/watermarked/villa16_01.jpg' },
      { id: 'villa16-lounge-2', room: 'Lounge', image: '/projects/temple-tree-villa-16/watermarked/villa16_03.jpg' },
      { id: 'villa16-lounge-3', room: 'Lounge', image: '/projects/temple-tree-villa-16/watermarked/villa16_04.jpg' },
      { id: 'villa16-lounge-4', room: 'Lounge', image: '/projects/temple-tree-villa-16/watermarked/villa16_14.jpg' },
      { id: 'villa16-lounge-5', room: 'Lounge', image: '/projects/temple-tree-villa-16/watermarked/villa16_15.jpg' },
    ]
  }
];

export const ALL_TEMPLE_TREE_INTERIORS: SelectedInteriorItem[] = TEMPLE_TREE_ROWS.flatMap(
  (row) => row.items
);

export function TempleTreeVilla16Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < ALL_TEMPLE_TREE_INTERIORS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_TEMPLE_TREE_INTERIORS.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxItem =
    lightboxIndex !== null ? ALL_TEMPLE_TREE_INTERIORS[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* ──────────────── 4 ROWS DISPLAY (BIG SIMPLE IMAGES) ──────────────── */}
      <div className="space-y-8">
        {TEMPLE_TREE_ROWS.map((row) => (
          <section
            key={row.room}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
          >
            {/* Simple Room Title Header (No numbers, no badges) */}
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">
                {row.room}
              </h3>
            </div>

            {/* Big Simple Images Grid (2 columns on desktop for large luxury display) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {row.items.map((item) => {
                const globalIndex = ALL_TEMPLE_TREE_INTERIORS.findIndex((i) => i.id === item.id);
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
                      className="w-full h-full object-cover bg-white group-hover:scale-102 transition-transform duration-500"
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
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Room Title, Counter & Actions */}
          <div
            className="flex items-center justify-between text-white max-w-7xl mx-auto w-full pt-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#C5A059] text-slate-950 text-xs font-black uppercase tracking-wider">
                {currentLightboxItem.room}
              </span>
              <span className="text-white/70 text-xs sm:text-sm font-medium">
                {lightboxIndex + 1} of {ALL_TEMPLE_TREE_INTERIORS.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={currentLightboxItem.image}
                download
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-slate-950 text-white transition-all cursor-pointer"
                title="Download High-Res"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-5 h-5" />
              </a>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-red-500 hover:text-white text-white transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev / Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ALL_TEMPLE_TREE_INTERIORS.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-10 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-sm"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.room}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl select-none"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ALL_TEMPLE_TREE_INTERIORS.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-10 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-sm"
              title="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Thumbnail Strip */}
          <div
            className="max-w-4xl mx-auto w-full overflow-x-auto no-scrollbar flex items-center justify-center gap-2 py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {ALL_TEMPLE_TREE_INTERIORS.map((thumb, idx) => (
              <button
                key={thumb.id}
                onClick={() => setLightboxIndex(idx)}
                className={`relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  idx === lightboxIndex
                    ? 'border-[#C5A059] scale-105 shadow-md'
                    : 'border-white/20 opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={thumb.image}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
