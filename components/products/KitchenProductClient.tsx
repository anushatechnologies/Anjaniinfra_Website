'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface KitchenDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface KitchenType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: KitchenDesignItem[];
}

const KITCHEN_TYPES: KitchenType[] = [
  {
    id: 'island',
    name: 'Island Kitchen',
    description:
      'Kitchens should be elegant looking as well as serve our purpose of storage, convenient cooking, and a part of comfortable living. Island kitchen series of modern designs from Anjani Infra are 100% customized to fit your space. An island kitchen works best when you have an open floor plan and ample space. Our designers incorporate client requirements into suitable designs as per the shape and size of the kitchen. Sandy, orchid, mauve, ivory, niagara, excalibur etc. are some of the samples under island kitchens.',
    images: [
      '/category-kitchen.jpg',
      '/kitchen/island_kitchen_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Sandy Island Kitchen', image: '/kitchen/kitchen_hero_banner.jpg', finish: 'Gloss Acrylic & Natural Oak Island' },
      { name: 'Orchid Island Kitchen', image: '/kitchen/l_shape_kitchen_2.jpg', finish: 'Matte PU Orchid White & Quartz' },
      { name: 'Mauve Island Kitchen', image: '/kitchen/u_shape_kitchen_1.jpg', finish: 'Textured Soft Taupe & Quartz Waterfall' },
      { name: 'Ivory Island Kitchen', image: '/kitchen/parallel_kitchen_2.jpg', finish: 'Champagne Ivory High Gloss with Breakfast Counter' },
      { name: 'Niagara Island Kitchen', image: '/kitchen/island_kitchen_2.jpg', finish: 'Deep Marine Navy & Polished Brass Trims' },
      { name: 'Excalibur Island Kitchen', image: '/kitchen/straight_kitchen_2.jpg', finish: 'Smoked Oak & Charcoal Marquina Marble' },
    ],
  },
  {
    id: 'l-shape',
    name: 'L Shape Kitchen',
    description:
      'Kitchen of a house should be made and maintained in proper shape, design and color. Everything should be arranged perfectly to match the requirements. L-shaped kitchens from Anjani Infra are 100% customized to fit the space. Various options are given below which can further be modified and made as per a design finalized. These L shape kitchen models are available to visit and view in our showrooms across Hyderabad. Beige, cocoa, cedar, cyclone, ebony, talisman etc. are some of the samples under L shape.',
    images: [
      '/kitchen/l_shape_kitchen_1.jpg',
      '/kitchen/l_shape_kitchen_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Beige L Shape Kitchen', image: '/kitchen/l_shape_kitchen_1.jpg', finish: 'Warm Cashmere Beige Lacquer Worktop' },
      { name: 'Cocoa L Shape Kitchen', image: '/kitchen/u_shape_kitchen_1.jpg', finish: 'Cocoa Walnut Woodgrain & Overhead Lift-ups' },
      { name: 'Cedar L Shape Kitchen', image: '/kitchen/straight_kitchen_1.jpg', finish: 'Natural Cedar & Matte Anthracite' },
      { name: 'Cyclone L Shape Kitchen', image: '/kitchen/parallel_kitchen_1.jpg', finish: 'Slate Storm Grey & Mirror Backsplash' },
      { name: 'Ebony L Shape Kitchen', image: '/kitchen/island_kitchen_2.jpg', finish: 'Ebony Matte Acrylic with LED Channel Profiles' },
      { name: 'Talisman L Shape Kitchen', image: '/kitchen/l_shape_kitchen_2.jpg', finish: 'Nordic Elm & Pure White Quartz Counter' },
    ],
  },
  {
    id: 'parallel',
    name: 'Parallel Kitchen',
    description:
      'Parallel kitchen is the concept of making cabinets on both the longer sides, especially as per the suitability to the space measured. Our interior designer would be able to help you decide the shape, color, and finish by giving suggestions. Visit our nearest showroom to view the designs below and select as per your preference and then let us discuss further. Some of the samples of parallel modular kitchen made by Anjani Infra are pearl, misty, coral and turmeric.',
    images: [
      '/kitchen/parallel_kitchen_1.jpg',
      '/kitchen/parallel_kitchen_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Pearl Parallel Kitchen', image: '/kitchen/parallel_kitchen_2.jpg', finish: 'Pearl White Satin Polygloss' },
      { name: 'Misty Parallel Kitchen', image: '/kitchen/parallel_kitchen_1.jpg', finish: 'Misty Fog Grey Handleless Cabinets' },
      { name: 'Coral Parallel Kitchen', image: '/kitchen/u_shape_kitchen_1.jpg', finish: 'Terracotta Accents & Sintered Stone' },
      { name: 'Turmeric Parallel Kitchen', image: '/kitchen/straight_kitchen_1.jpg', finish: 'Warm Mustard Accent & Charcoal Profiles' },
      { name: 'Walnut Parallel Kitchen', image: '/kitchen/straight_kitchen_2.jpg', finish: 'American Walnut & Quartzite Counters' },
      { name: 'Amber Parallel Kitchen', image: '/customized-home-kitchen.jpg', finish: 'Golden Amber Lami-glass with Under-cabinet LEDs' },
    ],
  },
  {
    id: 'straight',
    name: 'Straight Kitchen',
    description:
      'A big space can accommodate a straight kitchen with differences from commonly used styles. Best of the efforts are made by our team of interior designers to provide unique ideas and concepts in making modular kitchens to suit the space. Glossy, mystic, blackcurrant, siam, moroccan, tanned etc are some of the sample designs under a straight kitchen that can be made and installed across Hyderabad.',
    images: [
      '/kitchen/straight_kitchen_1.jpg',
      '/kitchen/straight_kitchen_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Glossy Straight Kitchen', image: '/kitchen/straight_kitchen_1.jpg', finish: 'Ultra Gloss Diamond Finish' },
      { name: 'Mystic Straight Kitchen', image: '/kitchen/straight_kitchen_2.jpg', finish: 'Mystic Emerald & Gold Profiles' },
      { name: 'Blackcurrant Straight Kitchen', image: '/kitchen/island_kitchen_2.jpg', finish: 'Deep Purple Blackcurrant Gloss' },
      { name: 'Siam Straight Kitchen', image: '/kitchen/parallel_kitchen_2.jpg', finish: 'Teakwood Veneer & Ceramic Backsplash' },
      { name: 'Moroccan Straight Kitchen', image: '/kitchen/l_shape_kitchen_2.jpg', finish: 'Handcrafted Mosaic Motif & Pure White' },
      { name: 'Tanned Straight Kitchen', image: '/category-kitchen.jpg', finish: 'Sun-Tanned Oak & White Corian Worktop' },
    ],
  },
  {
    id: 'u-shape',
    name: 'U Shape Kitchen',
    description:
      "A U-shaped kitchen is a kitchen design with work-spaces on three sides with cabinets. It's an efficient design that provides plenty of work space and allows for ample storage. Designed to be user-friendly and clutter-free, this kitchen design keeps all your appliances or cooking essentials perfectly in place. U-shaped kitchens from Anjani Infra are 100% customized to fit the space. You can visit one of our showrooms in Hyderabad to view and discuss with our interior designers. Have a look at some of our stunning U-shaped kitchen designs below.",
    images: [
      '/kitchen/u_shape_kitchen_1.jpg',
      '/kitchen/u_shape_kitchen_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Alpine U Shape Kitchen', image: '/kitchen/u_shape_kitchen_2.jpg', finish: 'Alpine Pure White & Solid Wood Accents' },
      { name: 'Urban Slate U Shape Kitchen', image: '/kitchen/u_shape_kitchen_1.jpg', finish: 'Slate Texture Anti-Fingerprint' },
      { name: 'Royal Walnut U Shape Kitchen', image: '/kitchen/straight_kitchen_2.jpg', finish: 'Dark Royal Walnut & Brushed Brass' },
      { name: 'Nordic U Shape Kitchen', image: '/kitchen/l_shape_kitchen_1.jpg', finish: 'Scandinavian Bleached Oak & White Quartz' },
      { name: 'Cashmere U Shape Kitchen', image: '/customized-home-kitchen.jpg', finish: 'Cashmere Silk Touch & Granite' },
      { name: 'Charcoal Oak U Shape Kitchen', image: '/kitchen/parallel_kitchen_1.jpg', finish: 'Charcoal Oak & Integrated LED Spotlights' },
    ],
  },
];

export default function KitchenPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  // Track which kitchen section has expanded related designs
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    island: false,
    'l-shape': false,
    parallel: false,
    straight: false,
    'u-shape': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for the bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'island' | 'l-shape' | 'parallel' | 'straight' | 'u-shape'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Compute all related designs for the bottom gallery filter
  const filteredDesigns = activeFilter === 'all'
    ? KITCHEN_TYPES.flatMap((k) => k.relatedDesigns.map((d) => ({ ...d, category: k.name })))
    : (KITCHEN_TYPES.find((k) => k.id === activeFilter)?.relatedDesigns || []).map((d) => ({
        ...d,
        category: KITCHEN_TYPES.find((k) => k.id === activeFilter)?.name || '',
      }));

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e4de] font-sans selection:bg-[#c9a96e] selection:text-[#0a0a0a] pt-20 sm:pt-24">
      <InteriorEstimateModal isOpen={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#c9a96e]/40"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-[#fafaf8] flex items-center justify-center hover:bg-[#c9a96e] hover:text-black transition-all cursor-pointer border border-white/10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-[#161616] text-[#fafaf8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
              <div>
                <h4 className="font-serif text-lg sm:text-xl text-[#fafaf8]">{lightboxImage.title}</h4>
                {lightboxImage.subtitle && (
                  <p className="text-xs text-[#c9a96e] font-sans tracking-wider mt-1">{lightboxImage.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  setIsEstimateOpen(true);
                }}
                className="px-6 py-3 bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans rounded uppercase tracking-[0.2em] transition-all shadow-lg shrink-0 cursor-pointer"
              >
                Get Free Estimate for this Design
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative w-full h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden bg-black flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/kitchen/kitchen_hero_banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase block">
              PRECISION GERMAN JOINERY &amp; LUXURY FITOUTS
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fafaf8] leading-tight">
              Customized Modular Kitchens
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#d6d3cd] italic font-light">
              Architecturally crafted for the finest homes across Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-3.5">
          <nav className="flex items-center gap-2 text-xs text-[#999999] tracking-wider uppercase font-sans">
            <Link href="/" className="hover:text-[#c9a96e] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/services" className="hover:text-[#c9a96e] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-[#c9a96e] font-medium">Modular Kitchens</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
            DIRECT FACTORY PRECISION
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal">
            Bespoke Chef-Grade Modular Kitchens
          </h2>
          <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed font-light">
            We deliver bespoke modular kitchens for luxury apartments, penthouses, and triplex villas across Hyderabad. Every kitchen is custom-engineered to your exact floor plan, lifestyle, and aesthetic desires. Our senior interior architects visit your residence, conduct precision laser measurements, and present complete 3D architectural renders. Once finalized, precision joinery is manufactured in our automated factory and installed on-site within 35–40 days with a comprehensive 10-year warranty.
          </p>
        </div>
      </section>

      {/* ── KITCHEN TYPE SECTIONS ── */}
      {KITCHEN_TYPES.map((kitchen, index) => {
        const isExpanded = !!expandedSections[kitchen.id];
        return (
          <section
            key={kitchen.id}
            id={kitchen.id}
            className={`py-14 sm:py-20 transition-colors border-b border-white/5 ${
              index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'
            }`}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

                {/* Left: Text */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
                    LAYOUT SERIES {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fafaf8] font-normal leading-snug">
                    {kitchen.name}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#d6d3cd] leading-relaxed font-light">
                    {kitchen.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3.5 pt-3">
                    <button
                      type="button"
                      onClick={() => toggleSection(kitchen.id)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-[0.2em] uppercase rounded transition-all shadow-lg cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Designs' : 'View More Designs'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="px-5 py-3 border border-[#c9a96e]/60 hover:border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 text-xs font-bold font-sans tracking-[0.2em] uppercase rounded transition-all cursor-pointer"
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>

                {/* Right: 2 Photos side-by-side */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {kitchen.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${kitchen.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-xl bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 aspect-[4/3] group shadow-xl cursor-pointer transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`${kitchen.name} design ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#c9a96e] text-[#c9a96e] flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                      {/* Watermark overlay */}
                      <div className="absolute bottom-0 left-0 right-0 py-2 px-3 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <span className="text-[#fafaf8]/80 text-[10px] font-sans tracking-wider">© Anjani Infra Projects</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── EXPANDABLE RELATED IMAGES FOR THIS KITCHEN TYPE ── */}
              {isExpanded && (
                <div className="mt-12 pt-10 border-t border-[#c9a96e]/20 animate-fade-in">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-5 h-5 text-[#c9a96e]" />
                      <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8]">
                        Related Designs for {kitchen.name} ({kitchen.relatedDesigns.length} Curated Concepts)
                      </h4>
                    </div>
                    <span className="text-xs text-[#999999] tracking-wider uppercase hidden sm:inline">
                      Click any image to enlarge
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kitchen.relatedDesigns.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage({ url: item.image, title: item.name, subtitle: item.finish })}
                        className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-[#c9a96e]/70 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
                      >
                        <div className="relative aspect-[4/3] bg-black overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-4 py-2 bg-[#0a0a0a] text-[#c9a96e] text-xs font-bold tracking-widest uppercase rounded border border-[#c9a96e] shadow-xl flex items-center gap-1.5">
                              <Eye className="w-3.5 h-3.5" /> View Photo
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-[#161616] border-t border-white/5">
                          <div>
                            <h5 className="font-serif text-base text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors">
                              {item.name}
                            </h5>
                            <p className="text-xs text-[#999999] mt-0.5">{item.finish}</p>
                          </div>
                          <span className="text-[10px] text-[#c9a96e] bg-[#c9a96e]/10 border border-[#c9a96e]/30 font-mono font-semibold px-2.5 py-1 rounded uppercase tracking-wider">
                            Concept
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        );
      })}

      {/* ── ALL RELATED DESIGNS GALLERY SECTION ── */}
      <section className="bg-[#0e0e0e] py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
              ARCHITECTURAL SHOWCASE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal">
              Explore All Kitchen Concepts
            </h2>
            <p className="text-[#d6d3cd] text-sm leading-relaxed font-light">
              Browse our complete library of bespoke modular kitchen layouts and premium finishes crafted for Hyderabad residences.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
              {[
                { label: 'All Layouts', value: 'all' },
                { label: 'Island', value: 'island' },
                { label: 'L Shape', value: 'l-shape' },
                { label: 'Parallel', value: 'parallel' },
                { label: 'Straight', value: 'straight' },
                { label: 'U Shape', value: 'u-shape' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value as any)}
                  className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    activeFilter === filter.value
                      ? 'bg-[#c9a96e] text-black shadow-lg font-bold'
                      : 'bg-[#181818] text-[#d6d3cd] hover:text-white border border-white/10 hover:border-[#c9a96e]/50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of designs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesigns.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage({ url: item.image, title: item.name, subtitle: `${item.category} • ${item.finish}` })}
                className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-[#c9a96e]/70 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[#c9a96e] text-[10px] font-sans font-semibold tracking-wider rounded uppercase">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#0a0a0a] border border-[#c9a96e] text-[#c9a96e] flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-1.5 px-3 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white/60 text-[9px] font-sans">© Anjani Infra</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#161616]">
                  <div>
                    <h4 className="font-serif text-base text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#999999] mt-1 line-clamp-1">{item.finish}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEstimateOpen(true);
                    }}
                    className="mt-4 w-full py-2 text-center text-xs font-sans font-bold tracking-widest uppercase text-[#c9a96e] hover:text-black bg-transparent hover:bg-[#c9a96e] border border-[#c9a96e]/50 rounded transition-all"
                  >
                    Enquire This Style
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALK TO EXPERT & CTA STRIP ── */}
      <section className="bg-[#121212] py-16 sm:py-20 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <div className="text-xs font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
            LET'S CRAFT YOUR SPACE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal">
            Design Your Dream Modular Kitchen
          </h2>
          <p className="text-sm sm:text-base text-[#d6d3cd] font-light max-w-xl mx-auto leading-relaxed">
            Schedule a complimentary consultation with our principal interior architects in Hyderabad. Direct factory pricing, German precision, and 10-year warranty.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsEstimateOpen(true)}
              className="px-8 py-3.5 bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-sans font-bold tracking-[0.25em] uppercase rounded shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              TALK TO OUR KITCHEN EXPERT
            </button>
            <a
              href="tel:+919848088998"
              className="px-8 py-3.5 border border-[#c9a96e]/60 hover:border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 text-xs font-sans font-bold tracking-[0.25em] uppercase rounded transition-all"
            >
              CALL +91 98480 88998
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}