'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface DiningDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface DiningType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: DiningDesignItem[];
}

const DINING_TYPES: DiningType[] = [
  {
    id: 'dining-tables',
    name: 'Designer Dining Tables & Chairs',
    description:
      'The dining table is the heart of family celebrations and warm hospitality. At Anjani Infra, we create custom dining table sets tailored to your family size and spatial dimensions — from intimate 4-seaters to grand 8 and 10-seater dining suites. Choose from premium Italian Statuario marble, heat-resistant sintered stone, solid teakwood, or smoked tempered glass tops paired with custom steel or wooden pedestal legs. Ergonomically contoured upholstered dining chairs and space-efficient upholstered bench seating bring plush comfort to every meal.',
    images: [
      '/category-dining.jpg',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Statuario Marble 6-Seater', image: '/category-dining.jpg', finish: 'White Statuario Italian Marble & Champagne Brass Frame' },
      { name: 'Solid Teak Trestle Suite', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80', finish: 'Natural Burmese Teakwood with Linen Upholstered Chairs' },
      { name: 'Sintered Stone Extendable Table', image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80', finish: 'Scratch-Proof Matte Black Slate & Charcoal Velvet Seats' },
      { name: 'Round Onyx Pedestal Set', image: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80', finish: 'Honey Onyx Translucent Stone with Fluted Walnut Base' },
      { name: 'Smoked Glass 8-Seater', image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80', finish: 'Tempered Smoked Bronze Glass with Curved Oak Legs' },
      { name: 'Scandinavian Bench Dining', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80', finish: 'Nordic Bleached Oak Table with Dual Upholstered Benches' },
    ],
  },
  {
    id: 'crockery-units',
    name: 'Crockery Units & Display Consoles',
    description:
      'Showcase your exquisite glassware, fine porcelain, and dining service with custom-crafted crockery cabinets. We manufacture floor-to-ceiling crockery displays, floating buffet sideboards, and sleek corner credenzas. Featuring fluted or tinted toughened glass shutters, internal warm LED strip lighting, soft-touch pull drawers with felt silverware organizers, and durable quartz serving counter tops, our units effortlessly marry sophisticated display with generous storage.',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Fluted Glass Luxe Cabinet', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Fluted Reeded Glass with Slim Bronze Profiles & Strip LEDs' },
      { name: 'Floating Buffet Credenza', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'Calacatta Marble Serving Counter with Matte Charcoal Drawers' },
      { name: 'Dual Tower Backlit Showcase', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', finish: 'Twin Glass Towers Flanking a Central Wine & Serving Niche' },
      { name: 'Champagne Gold Bar-Crockery', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'Champagne Lacquer with Mirror Backing & Glass Shelves' },
      { name: 'Minimalist Walnut Buffet', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80', finish: 'American Walnut Veneer with Seamless Push-to-Open Shutters' },
      { name: 'Full-Wall Dining Wall Unit', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Floor-to-Ceiling Storage with Center Display Aperture' },
    ],
  },
  {
    id: 'bar-counters',
    name: 'Home Bar Counters & Wine Displays',
    description:
      'Elevate your hosting experience with a statement home bar tailored to your entertainment style. Whether you desire an integrated bar counter adjoining your dining space, an ambient backlit onyx island, or a compact speakeasy corner cabinet, Anjani Infra crafts bespoke bars. Equipped with suspended brass stemware holders, hidden wine cooler niches, lockable bottle drawers, and spill-resistant quartz surfaces, our bars turn any dinner party into a memorable celebration.',
    images: [
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Cascade Marble Bar Island', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80', finish: 'Waterfall Marble Edge with Integrated Footrest & Leather Bar Stools' },
      { name: 'Curved Fluted Wood Bar', image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80', finish: 'Curved Fluted Solid Teak with Nano-Coated Black Granite Top' },
      { name: 'Backlit Translucent Onyx Bar', image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=800&q=80', finish: 'Warm Honey Onyx with Diffused Concealed LED Illumination' },
      { name: 'Compact Speakeasy Corner', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80', finish: 'Fold-out Cocktail Bar Cabinet with Antique Mirror Interior' },
      { name: 'Industrial Brass Glass Rack', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80', finish: 'Ceiling-Hung Brushed Brass Wine & Stemware Suspension' },
      { name: 'Bespoke Wine Showcase Nook', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80', finish: 'Temperature-Tolerant Oak Lattice Wine Racks with Glass Enclosure' },
    ],
  },
  {
    id: 'partitions',
    name: 'Dining Partitions & Jali Dividers',
    description:
      'Demarcate your dining room from the living hall or foyer with graceful architectural partitions. Our custom room dividers provide privacy while maintaining seamless airflow and natural light. We design CNC laser-cut decorative jalis in wood and brass, vertical acoustic fluted louvers that rotate on pivots, tempered glass partitions with metal grid framing, and built-in indoor planter boxes that bring refreshing greenery into your dining experience.',
    images: [
      '/category-partition.jpg',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Geometric Brass & Wood Jali', image: '/category-partition.jpg', finish: 'Laser-Cut Geometric Brass Inlay with Solid Walnut Framing' },
      { name: 'Acoustic Fluted Oak Louvers', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Rotatable Vertical Timber Battens for Adjustable Openness' },
      { name: 'Glass & Matte Black Pivot Screen', image: '/category-partition.jpg', finish: 'Floor-to-Ceiling Ribbed Glass with Industrial Aluminum Grid' },
      { name: 'Planter Box Divider Credenza', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', finish: 'Low-Height Cabinet with Integrated Self-Watering Planter Bed' },
      { name: 'Archway Carved Screen', image: '/category-partition.jpg', finish: 'Contemporary Curved Arch Profile with Soft Gold Metallic Finish' },
      { name: 'Dual-Sided Display Partition', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Open Cubby Partition Serving Both Living & Dining Sides' },
    ],
  },
  {
    id: 'hand-wash',
    name: 'Dining Hand-Wash Vanity Units',
    description:
      'A dedicated dining wash area should be as stunning as the rest of your home. We craft bespoke dining hand-wash units that blend hygiene with high design. Featuring tabletop stone and ceramic vessel basins, touchless sensor brass faucets, circular or arch LED backlit mirrors, waterproof vanity under-cabinets for towels and hand cleansers, and mosaic tiled backsplashes that prevent water seepage while looking magnificent.',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Terrazzo Basin Vanity Counter', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', finish: 'Handcrafted Terrazzo Vessel with Matte Black Wall Faucet' },
      { name: 'Granite Floating Wash Unit', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80', finish: 'Absolute Black Leather Granite with Waterproof Teak Drawer' },
      { name: 'Backlit Arch Mirror Vanity', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', finish: 'Warm Halo Lit Arch Mirror over White Quartz Undermount Sink' },
      { name: 'Fluted Teak Dining Vanity', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80', finish: 'Marine-Grade Fluted Wood with Brushed Brass Sensor Mixer' },
      { name: 'Compact Corner Dining Wash', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80', finish: 'Triangular Space-Optimized Cabinet with Round Copper Basin' },
      { name: 'Statuario Marble Wash Pedestal', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'Freestanding Monolithic Marble Basin with Concealed Plumbing' },
    ],
  },
];

export default function DiningRoomPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Track expanded state for each dining section
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'dining-tables': false,
    'crockery-units': false,
    'bar-counters': false,
    partitions: false,
    'hand-wash': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'dining-tables' | 'crockery-units' | 'bar-counters' | 'partitions' | 'hand-wash'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDesigns = activeFilter === 'all'
    ? DINING_TYPES.flatMap((d) => d.relatedDesigns.map((item) => ({ ...item, category: d.name })))
    : (DINING_TYPES.find((d) => d.id === activeFilter)?.relatedDesigns || []).map((item) => ({
        ...item,
        category: DINING_TYPES.find((d) => d.id === activeFilter)?.name || '',
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
          style={{ backgroundImage: "url('/category-dining.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 z-10">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Customized Dining Room Interiors
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 italic">
              Where Memorable Conversations & Feasts Begin
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
            <span className="text-gray-800 font-bold">Dining Room</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Custom-made Dining Room Interiors
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
          The dining room brings family and loved ones together in shared warmth and celebration. At Anjani Infra,
          we design and build bespoke dining spaces that blend majestic aesthetics with everyday practicality for
          apartments, independent villas, and penthouses across Hyderabad. From Italian marble dining tables, contoured
          ergonomic seating, and illuminated crockery cabinets to sleek bar counters and architectural partition screens,
          our team delivers precision engineering directly from our modern manufacturing facility. Each element is installed
          on site by master craftsmen within 35-40 days of design finalization. Below are the 5 core dining room
          specializations crafted by Anjani Infra.
        </p>
      </section>

      {/* ── DINING CATEGORY SECTIONS ── */}
      {DINING_TYPES.map((dining, index) => {
        const isExpanded = !!expandedSections[dining.id];
        return (
          <section
            key={dining.id}
            id={dining.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{dining.name}</h3>
                  <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {dining.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(dining.id)}
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
                  {dining.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${dining.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] group shadow cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={`${dining.name} design ${i + 1}`}
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

              {/* ── EXPANDABLE RELATED DESIGNS FOR THIS DINING CATEGORY ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-amber-200/60 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C5A059]" />
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        Related Designs for {dining.name} ({dining.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {dining.relatedDesigns.map((item, idx) => (
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

      {/* ── ALL RELATED DINING ROOM DESIGNS GALLERY SECTION ── */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Dining Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Explore All Related Dining Room Designs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Browse our curated collection of luxury dining suites, custom bar counters, crockery consoles, and wash areas in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Dining Designs', value: 'all' },
                { label: 'Dining Tables', value: 'dining-tables' },
                { label: 'Crockery Units', value: 'crockery-units' },
                { label: 'Bar Counters', value: 'bar-counters' },
                { label: 'Partitions & Jali', value: 'partitions' },
                { label: 'Hand-Wash Vanities', value: 'hand-wash' },
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
                    {item.category.split(' ')[0]}
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

      {/* ── TALK TO EXPERT BUTTON ── */}
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
            Design Your Dream Dining Room
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert dining interior architects in Hyderabad.
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