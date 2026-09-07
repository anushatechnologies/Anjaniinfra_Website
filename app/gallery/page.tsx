'use client';

import React, { useState } from 'react';
import { X, ZoomIn, Play, ChevronDown } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

/* ─── ALL INTERIOR IMAGES (32 total — loads 8 at a time) ─── */
const ALL_INTERIOR_IMAGES = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', alt: 'Modern Kitchen Dining Area with Pendant Lights' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Contemporary Living Room with Leather Sofa' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', alt: 'Sleek White Modular Kitchen Interior' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', alt: 'Luxury Master Bedroom with Wood Panelling' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', alt: 'Elegant TV Unit with Decorative Wall' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', alt: 'Cosy Bedroom with Wardrobe and Study Corner' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80', alt: 'Modern Open Plan Living Room Design' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', alt: 'Minimalist Bedroom Suite Interior' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80', alt: 'Luxury Dining Room Chandelier Setup' },
  { id: 10, src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', alt: 'Premium Bedroom with Upholstered Headboard' },
  { id: 11, src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', alt: 'Warm Tone Living Room with Cove Ceiling' },
  { id: 12, src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', alt: 'Elegant Dining Room with Pendant Lights' },
  { id: 13, src: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=800&q=80', alt: 'Contemporary Living Area with Grey Sofa' },
  { id: 14, src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', alt: 'Compact Modular Kitchen with Breakfast Counter' },
  { id: 15, src: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=800&q=80', alt: 'Scandinavian Bedroom Interior Design' },
  { id: 16, src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', alt: 'Open Concept Living Room Kitchen Combo' },
  { id: 17, src: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80', alt: 'Sleek Bathroom Vanity with Double Sink' },
  { id: 18, src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80', alt: 'Floor to Ceiling Sliding Wardrobe Design' },
  { id: 19, src: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80', alt: 'Kids Bedroom with Study Table and Loft Bed' },
  { id: 20, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', alt: 'Neutral Toned Master Bedroom with Drapes' },
  { id: 21, src: 'https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?auto=format&fit=crop&w=800&q=80', alt: 'Dark Luxe Living Room with Accent Wall' },
  { id: 22, src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80', alt: 'Scandinavian White Living Room Design' },
  { id: 23, src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80', alt: 'Grey Modular Sofa with Accent Pillows' },
  { id: 24, src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', alt: 'Warm Bedroom with Wooden Flooring' },
  { id: 25, src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', alt: 'Pastel Kitchen Interior with Island' },
  { id: 26, src: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&w=800&q=80', alt: 'Compact Kitchen with Smart Storage Solutions' },
  { id: 27, src: 'https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80', alt: 'Contemporary Master Suite with Lounge Area' },
  { id: 28, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80', alt: 'Minimalist Dining Table Design' },
  { id: 29, src: 'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=800&q=80', alt: 'Industrial Style Loft Living Room' },
  { id: 30, src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80', alt: 'White Marble Kitchen with Gold Fixtures' },
  { id: 31, src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80', alt: 'Luxury Bedroom with Neon Cove Lighting' },
  { id: 32, src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80', alt: 'Modern False Ceiling with Indirect Lighting' },
];

const ALL_PROJECT_IMAGES = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', alt: 'Villa Interior — Banjara Hills' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80', alt: '3BHK Apartment — Gachibowli' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', alt: 'Modular Kitchen — Kompally' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', alt: 'Master Bedroom — LB Nagar' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', alt: 'Dining Room — Kokapet' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', alt: 'Living Room — Tellapur' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', alt: 'Open Plan 4BHK — Manikonda' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', alt: 'TV Unit Design — Kondapur' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=800&q=80', alt: 'Contemporary Living Area — Jubilee Hills' },
  { id: 10, src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', alt: 'L-Shape Kitchen — Nallagandla' },
  { id: 11, src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80', alt: 'Villa Living Room — Shamshabad' },
  { id: 12, src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', alt: '2BHK Bedroom — Miyapur' },
  { id: 13, src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', alt: 'Master Suite — Bachupally' },
  { id: 14, src: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800&q=80', alt: 'Nordic Living Room — Kukatpally' },
  { id: 15, src: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80', alt: 'Chandelier Dining — Secunderabad' },
  { id: 16, src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80', alt: 'False Ceiling Design — Madhapur' },
];

const GALLERY_CATEGORIES = [
  {
    id: 'video',
    label: 'VIDEO',
    sublabel: 'GALLERY',
    description: 'If you are looking for clearly laid out answers and realistic inspirations to your questions over interior design, the design process, and how much our clients love our works, take the time to understand why we are the best for your dream home.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    isVideo: true,
  },
  {
    id: 'interior',
    label: 'INTERIOR',
    sublabel: 'GALLERY',
    description: 'We have worked on a wide range of residential projects including apartments, luxury villas, family homes, and holiday homes. Having worked on residential projects for over 20 years we know what adds value and what you are looking for.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    isVideo: false,
  },
  {
    id: 'project',
    label: 'PROJECT WISE',
    sublabel: 'GALLERY',
    description: 'We have designed interiors for modern family homes to luxury residential projects across Hyderabad. From initial consultation to a completely finished home, we provide our clients with the best possible interior designs that are comfortable, affordable, and livable.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    isVideo: false,
  },
];

const LOAD_COUNT = 8;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<string>('interior');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  const allImages = activeTab === 'project' ? ALL_PROJECT_IMAGES : ALL_INTERIOR_IMAGES;
  const displayedImages = allImages.slice(0, visibleCount);
  const hasMore = visibleCount < allImages.length;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setVisibleCount(LOAD_COUNT);
    setTimeout(() => {
      document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <InteriorEstimateModal isOpen={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-5 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImg(null)}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImg.src}
            alt={lightboxImg.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden bg-gray-900 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 z-10">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Your Home. Our Designs
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-100">
              Expertly Crafted Interiors by Professionals
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY CARDS ── */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 text-center tracking-widest uppercase mb-12 sm:mb-16">
            Actual Project Photographs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {GALLERY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100">
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
                  {cat.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/50 transition-colors cursor-pointer">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-7 flex flex-col flex-1 items-center text-center space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 tracking-wider uppercase leading-tight">
                    {cat.label}<br />{cat.sublabel}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed flex-1">{cat.description}</p>
                  <button
                    type="button"
                    onClick={() => handleTabChange(cat.id)}
                    className="mt-2 px-8 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-sm font-bold rounded transition-colors shadow-md cursor-pointer"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section id="gallery-grid" className="bg-gray-50 py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Title + Tabs Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <h2 className="text-2xl sm:text-3xl font-normal text-gray-900">
              {activeTab === 'interior' && (<>Interior <strong>Gallery</strong></>)}
              {activeTab === 'project'  && (<>Project Wise <strong>Gallery</strong></>)}
              {activeTab === 'video'   && (<>Video <strong>Gallery</strong></>)}
            </h2>
            <div className="flex flex-wrap gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                    activeTab === cat.id
                      ? 'bg-[#132B3E] text-white border-[#C5A059]'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-[#C5A059] hover:text-[#2B5573]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {displayedImages.map((img) => (
              <div
                key={img.id}
                className="relative group overflow-hidden rounded-sm bg-gray-200 aspect-square cursor-pointer"
                onClick={() => setLightboxImg({ src: img.src, alt: img.alt })}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay with magnify icon — matching D'LIFE */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                {/* Watermark */}
                <div className="absolute bottom-1.5 left-2 text-white/60 text-[9px] font-light tracking-tight pointer-events-none select-none">
                  © Anjani Infra. All Rights Reserved.
                </div>
              </div>
            ))}
          </div>

          {/* ── LOAD MORE BUTTON — matching D'LIFE screenshot ── */}
          {hasMore && (
            <div className="flex justify-end mt-8">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + LOAD_COUNT)}
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded transition-colors shadow-sm cursor-pointer"
              >
                Load More
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* All loaded message */}
          {!hasMore && (
            <div className="text-center mt-8 text-xs text-gray-400 font-medium">
              ✦ All {allImages.length} photos loaded
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#132B3E] py-12 text-center border-t-2 border-[#C5A059]">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Ready to Transform Your Home?</h2>
          <p className="text-amber-100/80 text-sm sm:text-base">Get a free consultation with our expert interior designers in Hyderabad.</p>
          <button
            type="button"
            onClick={() => setIsEstimateOpen(true)}
            className="mt-2 px-10 py-3 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-sm rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </section>
    </main>
  );
}