'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
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
    room: 'Foyer & Drawing Room',
    items: [
      { id: 'villa16-foyer', room: 'Foyer & Drawing Room', image: '/projects/temple-tree-villa-16/selected/villa16_03.jpg' },
      { id: 'villa16-drawing', room: 'Foyer & Drawing Room', image: '/projects/temple-tree-villa-16/selected/villa16_04.jpg' },
    ]
  },
  {
    room: 'Grand Living Salon',
    items: [
      { id: 'villa16-living-05', room: 'Grand Living Salon', image: '/projects/temple-tree-villa-16/selected/villa16_05.jpg' },
      { id: 'villa16-living-06', room: 'Grand Living Salon', image: '/projects/temple-tree-villa-16/selected/villa16_06.jpg' },
      { id: 'villa16-living-07', room: 'Grand Living Salon', image: '/projects/temple-tree-villa-16/selected/villa16_07.jpg' },
      { id: 'villa16-living-08', room: 'Grand Living Salon', image: '/projects/temple-tree-villa-16/selected/villa16_08.jpg' },
    ]
  },
  {
    room: 'Private Bar & Lounge',
    items: [
      { id: 'villa16-bar-09', room: 'Private Bar & Lounge', image: '/projects/temple-tree-villa-16/selected/villa16_09.jpg' },
      { id: 'villa16-bar-10', room: 'Private Bar & Lounge', image: '/projects/temple-tree-villa-16/selected/villa16_10.jpg' },
    ]
  },
  {
    room: 'Upper Floor Lift Lounge',
    items: [
      { id: 'villa16-lounge-12', room: 'Upper Floor Lift Lounge', image: '/projects/temple-tree-villa-16/selected/villa16_12.jpg' },
      { id: 'villa16-lounge-13', room: 'Upper Floor Lift Lounge', image: '/projects/temple-tree-villa-16/selected/villa16_13.jpg' },
    ]
  },
  {
    room: 'Kitchen & Dining Suite',
    items: [
      { id: 'villa16-kitchen-14', room: 'Kitchen & Dining Suite', image: '/projects/temple-tree-villa-16/selected/villa16_14.jpg' },
    ]
  }
];

export const ALL_TEMPLE_TREE_INTERIORS: SelectedInteriorItem[] = TEMPLE_TREE_ROWS.flatMap(
  (row) => row.items
);

export function TempleTreeVilla16Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* ──────────────── ROOM ROWS DISPLAY (FULL UNCLIPPED IMAGES) ──────────────── */}
      <div className="space-y-8">
        {TEMPLE_TREE_ROWS.map((row) => (
          <section
            key={row.room}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6"
          >
            {/* Simple Room Title Header (No badges, clean aesthetic) */}
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">
                {row.room}
              </h3>
            </div>

            {/* Big Simple Images Grid (2 columns on desktop, uncropped natural aspect ratio) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {row.items.map((item) => {
                const globalIndex = ALL_TEMPLE_TREE_INTERIORS.findIndex((i) => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group bg-slate-100 border border-slate-200/80 hover:border-[#C5A059]"
                  >
                    <img
                      src={item.image}
                      alt={row.room}
                      loading="lazy"
                      className="w-full h-auto block group-hover:scale-102 transition-transform duration-500"
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
      {mounted && lightboxIndex !== null && currentLightboxItem && typeof document !== 'undefined' && createPortal(
        <div
          style={{ zIndex: 999999 }}
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Room Title, Counter & Actions */}
          <div
            className="w-full max-w-7xl flex items-center justify-between z-20 py-2 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="text-white font-serif font-bold text-sm sm:text-base">
                {currentLightboxItem.room}
              </div>
              <div className="text-xs text-[#C5A059] font-sans">
                Jayabheri Temple Tree • Kokapet, Hyderabad
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/70 text-xs sm:text-sm font-medium mr-2">
                {lightboxIndex + 1} / {ALL_TEMPLE_TREE_INTERIORS.length}
              </span>

              <a
                href={currentLightboxItem.image}
                download
                target="_blank"
                rel="noreferrer"
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                title="Download high-resolution image"
                onClick={(e) => e.stopPropagation()}
              >
                <Download className="w-5 h-5" />
              </a>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev / Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-7xl mx-auto w-full my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ALL_TEMPLE_TREE_INTERIORS.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-slate-950/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-md shadow-2xl"
              title="Previous"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Full Image */}
            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.room}
              className="max-h-[85vh] max-w-[92vw] w-auto h-auto object-contain rounded-xl shadow-2xl transition-all duration-300"
            />

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ALL_TEMPLE_TREE_INTERIORS.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-slate-950/60 hover:bg-[#C5A059] text-white hover:text-slate-950 transition-all cursor-pointer backdrop-blur-md shadow-2xl"
              title="Next"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
