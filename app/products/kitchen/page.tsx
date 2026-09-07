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
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Sandy Island Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', finish: 'Gloss Acrylic & Natural Oak' },
      { name: 'Orchid Island Kitchen', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Matte PU Orchid White' },
      { name: 'Mauve Island Kitchen', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80', finish: 'Textured Soft Mauve & Quartz' },
      { name: 'Ivory Island Kitchen', image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&w=800&q=80', finish: 'Champagne Ivory High Gloss' },
      { name: 'Niagara Island Kitchen', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'Deep Marine & Brass Trims' },
      { name: 'Excalibur Island Kitchen', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80', finish: 'Smoked Oak & Charcoal Marble' },
    ],
  },
  {
    id: 'l-shape',
    name: 'L Shape Kitchen',
    description:
      'Kitchen of a house should be made and maintained in proper shape, design and color. Everything should be arranged perfectly to match the requirements. L-shaped kitchens from Anjani Infra are 100% customized to fit the space. Various options are given below which can further be modified and made as per a design finalized. These L shape kitchen models are available to visit and view in our showrooms across Hyderabad. Beige, cocoa, cedar, cyclone, ebony, talisman etc. are some of the samples under L shape.',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Beige L Shape Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', finish: 'Warm Cashmere Beige Lacquer' },
      { name: 'Cocoa L Shape Kitchen', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', finish: 'Cocoa Walnut Woodgrain' },
      { name: 'Cedar L Shape Kitchen', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80', finish: 'Natural Cedar & Matte Black' },
      { name: 'Cyclone L Shape Kitchen', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80', finish: 'Slate Storm Grey & Mirror Finish' },
      { name: 'Ebony L Shape Kitchen', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'Ebony Matte Acrylic with LED Profiles' },
      { name: 'Talisman L Shape Kitchen', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', finish: 'Nordic Elm & Pure Porcelain' },
    ],
  },
  {
    id: 'parallel',
    name: 'Parallel Kitchen',
    description:
      'Parallel kitchen is the concept of making cabinets on both the longer sides, especially as per the suitability to the space measured. Our interior designer would be able to help you decide the shape, color, and finish by giving suggestions. Visit our nearest showroom to view the designs below and select as per your preference and then let us discuss further. Some of the samples of parallel modular kitchen made by Anjani Infra are pearl, misty, coral and turmeric.',
    images: [
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Pearl Parallel Kitchen', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80', finish: 'Pearl White Satin Polygloss' },
      { name: 'Misty Parallel Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', finish: 'Misty Fog Grey Handleless' },
      { name: 'Coral Parallel Kitchen', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Coral Terracotta & Terrazzo' },
      { name: 'Turmeric Parallel Kitchen', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80', finish: 'Warm Mustard Accent & Charcoal' },
      { name: 'Walnut Parallel Kitchen', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', finish: 'American Walnut & Quartzite' },
      { name: 'Amber Parallel Kitchen', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80', finish: 'Golden Amber Lami-glass' },
    ],
  },
  {
    id: 'straight',
    name: 'Straight Kitchen',
    description:
      'A big space can accommodate a straight kitchen with differences from commonly used styles. Best of the efforts are made by our team of interior designers to provide unique ideas and concepts in making modular kitchens to suit the space. Glossy, mystic, blackcurrant, siam, moroccan, tanned etc are some of the sample designs under a straight kitchen that can be made and installed across Hyderabad.',
    images: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Glossy Straight Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', finish: 'Ultra Gloss Diamond Finish' },
      { name: 'Mystic Straight Kitchen', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'Mystic Emerald & Gold Profiles' },
      { name: 'Blackcurrant Straight Kitchen', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', finish: 'Deep Purple Blackcurrant Gloss' },
      { name: 'Siam Straight Kitchen', image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?auto=format&fit=crop&w=800&q=80', finish: 'Teakwood Veneer & Ceramic Backsplash' },
      { name: 'Moroccan Straight Kitchen', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Handcrafted Moroccan Mosaic Motif' },
      { name: 'Tanned Straight Kitchen', image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80', finish: 'Sun-Tanned Oak & White Corian' },
    ],
  },
  {
    id: 'u-shape',
    name: 'U Shape Kitchen',
    description:
      "A U-shaped kitchen is a kitchen design with work-spaces on three sides with cabinets. It's an efficient design that provides plenty of work space and allows for ample storage. Designed to be user-friendly and clutter-free, this kitchen design keeps all your appliances or cooking essentials perfectly in place. U-shaped kitchens from Anjani Infra are 100% customized to fit the space. You can visit one of our showrooms in Hyderabad to view and discuss with our interior designers. Have a look at some of our stunning U-shaped kitchen designs below.",
    images: [
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Alpine U Shape Kitchen', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80', finish: 'Alpine Pure White & Solid Wood' },
      { name: 'Urban Slate U Shape Kitchen', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80', finish: 'Slate Texture Anti-Fingerprint' },
      { name: 'Royal Walnut U Shape Kitchen', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80', finish: 'Dark Royal Walnut & Brushed Brass' },
      { name: 'Nordic U Shape Kitchen', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80', finish: 'Scandinavian Bleached Oak' },
      { name: 'Cashmere U Shape Kitchen', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', finish: 'Cashmere Silk Touch & Granite' },
      { name: 'Charcoal Oak U Shape Kitchen', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'Charcoal Oak & Integrated Lighting' },
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
    <main className="min-h-screen bg-white text-gray-800">
      <InteriorEstimateModal isOpen={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#C5A059] transition-colors cursor-pointer"
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
            <div className="p-4 sm:p-6 bg-gray-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">{lightboxImage.title}</h4>
                {lightboxImage.subtitle && (
                  <p className="text-xs text-[#C5A059] mt-0.5">{lightboxImage.subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setLightboxImage(null);
                  setIsEstimateOpen(true);
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs font-black rounded-md uppercase tracking-wider transition-all shadow-md shrink-0"
              >
                Get Free Estimate for this Design
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] overflow-hidden bg-gray-900 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1800&q=85')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 z-10">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Customized Modular Kitchen
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 italic">
              Your Dream Home Deserves
            </p>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 py-3">
          <nav className="flex items-center gap-1 text-xs text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#2B5573] transition-colors">Anjani Infra</Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-800 font-bold">Kitchen</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Custom-made Modular Kitchen
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
          We offer modular kitchen designs for flat (apartment), or villas anywhere in Hyderabad as per client's
          requirements. Customized modular kitchen designs suits the client's lifestyle and fits perfectly in the space.
          An experienced interior designer from Anjani Infra visits the site, takes measurements and understands
          requirements through several discussions. Our designer incorporates client's requirements into suitable design
          as per shape and size of the kitchen. Once the client is completely satisfied with the drawings and
          specifications, the company produces a modular kitchen from its own factory. A team of experienced technicians
          perform installation on site with perfect coordination. This professional interior design company can execute a
          work within 35-40 days of finalization of drawings. Below are the 5 most popular types of modular kitchen
          designs by Anjani Infra.
        </p>
      </section>

      {/* ── KITCHEN TYPE SECTIONS ── */}
      {KITCHEN_TYPES.map((kitchen, index) => {
        const isExpanded = !!expandedSections[kitchen.id];
        return (
          <section
            key={kitchen.id}
            id={kitchen.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{kitchen.name}</h3>
                  <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {kitchen.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(kitchen.id)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#132B3E] hover:bg-[#2B5573] text-white text-sm font-bold rounded transition-colors shadow-md cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Related Designs' : 'View More Designs'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="px-4 py-2.5 border border-[#C5A059] text-[#132B3E] hover:bg-amber-50 text-xs font-bold rounded transition-colors"
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>

                {/* Right: 2 Photos side-by-side */}
                <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {kitchen.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${kitchen.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] group shadow cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={`${kitchen.name} design ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-11 h-11 rounded-full bg-white/90 text-[#132B3E] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                      {/* Watermark overlay */}
                      <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white/80 text-[9px] font-light">© Anjani Infra. All Rights Reserved.</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── EXPANDABLE RELATED IMAGES FOR THIS KITCHEN TYPE ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-amber-200/60 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C5A059]" />
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        Related Designs for {kitchen.name} ({kitchen.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {kitchen.relatedDesigns.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage({ url: item.image, title: item.name, subtitle: item.finish })}
                        className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-3 py-1.5 bg-[#132B3E] text-[#C5A059] text-xs font-bold rounded shadow-md flex items-center gap-1.5 border border-[#C5A059]/30">
                              <Eye className="w-3.5 h-3.5" /> View Photo
                            </span>
                          </div>
                        </div>
                        <div className="p-3.5 flex items-center justify-between bg-white">
                          <div>
                            <h5 className="font-bold text-gray-900 text-sm group-hover:text-[#2B5573] transition-colors">
                              {item.name}
                            </h5>
                            <p className="text-[11px] text-gray-500">{item.finish}</p>
                          </div>
                          <span className="text-[10px] text-[#132B3E] bg-amber-100/70 font-bold px-2 py-0.5 rounded uppercase">
                            Sample
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
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Design Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Explore All Related Kitchen Designs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Browse our curated collection of sample kitchen layouts and finishes crafted by professional designers in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
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
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    activeFilter === filter.value
                      ? 'bg-[#132B3E] text-white shadow-md border-b-2 border-[#C5A059]'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of designs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredDesigns.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setLightboxImage({ url: item.image, title: item.name, subtitle: `${item.category} • ${item.finish}` })}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] font-bold rounded">
                    {item.category}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white/70 text-[9px]">© Anjani Infra</span>
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#2B5573] transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{item.finish}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEstimateOpen(true);
                    }}
                    className="mt-3 w-full py-1.5 text-center text-xs font-bold text-[#132B3E] hover:text-[#132B3E] bg-amber-50 hover:bg-[#DFBA73] border border-[#C5A059]/40 rounded transition-colors"
                  >
                    Enquire This Style
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TALK TO EXPERT BUTTON — matching D'LIFE screenshot ── */}
      <section className="bg-white py-12 text-center border-t border-gray-100">
        <button
          type="button"
          onClick={() => setIsEstimateOpen(true)}
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-sm font-black rounded-md transition-all shadow-lg hover:scale-105 cursor-pointer tracking-wide"
        >
          Talk to our Interior designing expert
        </button>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#132B3E] py-14 text-center border-t-2 border-[#C5A059]">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Design Your Dream Modular Kitchen
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert kitchen interior designers in Hyderabad.
          </p>
          <button
            type="button"
            onClick={() => setIsEstimateOpen(true)}
            className="mt-2 px-10 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-sm rounded-lg shadow-lg hover:scale-105 transition-all cursor-pointer"
          >
            GET FREE CONSULTATION
          </button>
        </div>
      </section>
    </main>
  );
}