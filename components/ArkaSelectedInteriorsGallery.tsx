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
  room: 'Reception & Entrance Lobby' | 'Architectural Experience Plinth' | 'Employee Breakout & Daycare';
  image: string;
}

export interface SelectedInteriorRow {
  room: 'Reception & Entrance Lobby' | 'Architectural Experience Plinth' | 'Employee Breakout & Daycare';
  items: SelectedInteriorItem[];
}

export const ARKA_ROWS: SelectedInteriorRow[] = [
  {
    room: 'Reception & Entrance Lobby',
    items: [
      { id: 'arka-rec-01', room: 'Reception & Entrance Lobby', image: '/projects/arka-office/selected/arka_selected_01.jpg' },
      { id: 'arka-rec-02', room: 'Reception & Entrance Lobby', image: '/projects/arka-office/selected/arka_selected_02.jpg' },
      { id: 'arka-rec-03', room: 'Reception & Entrance Lobby', image: '/projects/arka-office/selected/arka_selected_03.jpg' }
    ]
  },
  {
    room: 'Architectural Experience Plinth',
    items: [
      { id: 'arka-exp-04', room: 'Architectural Experience Plinth', image: '/projects/arka-office/selected/arka_selected_04.jpg' }
    ]
  },
  {
    room: 'Employee Breakout & Daycare',
    items: [
      { id: 'arka-brk-05', room: 'Employee Breakout & Daycare', image: '/projects/arka-office/selected/arka_selected_05.jpg' },
      { id: 'arka-day-06', room: 'Employee Breakout & Daycare', image: '/projects/arka-office/selected/arka_selected_06.jpg' },
      { id: 'arka-day-07', room: 'Employee Breakout & Daycare', image: '/projects/arka-office/selected/arka_selected_07.jpg' }
    ]
  }
];

export const ALL_ARKA_INTERIORS: SelectedInteriorItem[] = ARKA_ROWS.flatMap(
  (row) => row.items
);

export function ArkaSelectedInteriorsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < ALL_ARKA_INTERIORS.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : ALL_ARKA_INTERIORS.length - 1));
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentLightboxItem = lightboxIndex !== null ? ALL_ARKA_INTERIORS[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      {/* ──────────────── CATEGORY ROWS DISPLAY ──────────────── */}
      <div className="space-y-8">
        {ARKA_ROWS.map((row) => (
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

            {/* Big Simple Images Grid */}
            <div className={`grid gap-6 sm:gap-8 ${row.items.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
              {row.items.map((item) => {
                const globalIndex = ALL_ARKA_INTERIORS.findIndex((i) => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group bg-slate-100 border border-slate-200/80 hover:border-[#C5A059]"
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
          {/* Top Bar with Category & Controls */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between z-20 py-2 border-b border-white/10"
          >
            <div>
              <div className="text-white font-serif font-bold text-sm sm:text-base">
                {currentLightboxItem.room}
              </div>
              <div className="text-xs text-[#C5A059] font-sans">
                Team 4 Arka • Lanco Hills, Manikonda, Hyderabad
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={currentLightboxItem.image}
                download
                target="_blank"
                rel="noreferrer"
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                title="Download high-resolution image"
              >
                <Download className="w-5 h-5" />
              </a>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Image with Prev / Next */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
          >
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ALL_ARKA_INTERIORS.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-slate-950/85 text-white hover:bg-black transition-all cursor-pointer shadow-lg"
              title="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentLightboxItem.image}
              alt={currentLightboxItem.room}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ALL_ARKA_INTERIORS.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-slate-950/85 text-white hover:bg-black transition-all cursor-pointer shadow-lg"
              title="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Counter */}
          <div className="text-center text-xs text-white/50 py-1 font-sans">
            Photo {lightboxIndex + 1} of {ALL_ARKA_INTERIORS.length} • Press Esc or click outside to close
          </div>
        </div>
      )}
    </div>
  );
}
