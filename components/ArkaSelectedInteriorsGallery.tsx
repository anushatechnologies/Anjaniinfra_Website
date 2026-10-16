'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface ArkaInteriorItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export const ARKA_WATERMARKED_IMAGES: ArkaInteriorItem[] = [
  {
    id: 'arka-01',
    title: 'Grand Reception Lobby & Frontal Marble Counter',
    subtitle: 'Lanco Hills • Bookmatched Italian Marble Reception Desk & Backlit ARKA Wall',
    image: '/projects/arka-office/watermarked/arka_01.png',
  },
  {
    id: 'arka-02',
    title: 'Executive Reception Lounge & Acoustic Slatted Wall',
    subtitle: 'Lanco Hills • Acoustic Timber Slat Paneling, Velvet Sofa & Sculpture Pedestals',
    image: '/projects/arka-office/watermarked/arka_02.png',
  },
  {
    id: 'arka-03',
    title: 'Architectural Scale-Model Experience Plinth',
    subtitle: 'Lanco Hills • Circular Marble Miniature Display Plinth, Circular Dome & Biophilic Wall',
    image: '/projects/arka-office/watermarked/arka_03.png',
  },
  {
    id: 'arka-04',
    title: 'In-Office Employee Daycare & Glazed Corridor',
    subtitle: 'Lanco Hills • Progressive Family Activity Zone & Industrial Black Metal Glass Partitions',
    image: '/projects/arka-office/watermarked/arka_04.png',
  },
];

export function ArkaSelectedInteriorsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev !== null && prev < ARKA_WATERMARKED_IMAGES.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : ARKA_WATERMARKED_IMAGES.length - 1
        );
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentItem = lightboxIndex !== null ? ARKA_WATERMARKED_IMAGES[lightboxIndex] : null;

  return (
    <div className="space-y-8">
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-[#BFBFBF]/60 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] sm:text-xs font-sans font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
              LANCO HILLS, HYDERABAD • CORPORATE INTERIORS
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-black text-[#1A374D]">
              Executive Experience Centre &amp; Corporate Spaces
            </h3>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
            {ARKA_WATERMARKED_IMAGES.length} Curated Views
          </span>
        </div>

        {/* 2-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {ARKA_WATERMARKED_IMAGES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-[16/10] w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 group bg-slate-100 border border-slate-200/80 hover:border-[#C5A059] flex flex-col justify-between"
            >
              <div className="relative w-full h-full overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-contain bg-white group-hover:scale-102 transition-transform duration-500"
                />

                {/* Hover overlay with zoom */}
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity p-3 rounded-full bg-slate-950/80 text-[#C5A059] backdrop-blur shadow-xl transform scale-90 group-hover:scale-100">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="p-3 sm:p-4 bg-white border-t border-slate-100">
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1A374D] group-hover:text-[#C5A059] transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-7xl flex items-center justify-between z-20 py-2 border-b border-white/10"
          >
            <div>
              <div className="text-white font-serif font-bold text-sm sm:text-base">
                {currentItem.title}
              </div>
              <div className="text-xs text-[#C5A059] font-sans">
                {currentItem.subtitle}
              </div>
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden"
          >
            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : ARKA_WATERMARKED_IMAGES.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={() =>
                setLightboxIndex((prev) =>
                  prev !== null && prev < ARKA_WATERMARKED_IMAGES.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-xs text-white/50 py-1">
            Photo {lightboxIndex + 1} of {ARKA_WATERMARKED_IMAGES.length} • Press Esc to close
          </div>
        </div>
      )}
    </div>
  );
}
