'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface LivingDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface LivingType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: LivingDesignItem[];
}

const LIVING_TYPES: LivingType[] = [
  {
    id: 'tv-units',
    name: 'TV Entertainment Units & Media Walls',
    description:
      'The entertainment center serves as the visual anchor of any modern living room. At Anjani Infra, we build bespoke TV units and floor-to-ceiling media backdrops tailored to your screen size and entertainment setup. Featuring bookmatched Italian marble or sintered stone slabs, acoustic fluted charcoal panels, concealed cable raceways, floating drawer consoles with soft-closing hardware, and indirect LED strip backlighting, our designs create a true cinematic centerpiece in your home.',
    images: [
      '/contemporary-interior-hyderabad.jpg',
      '/project-handover-interior.jpg',
    ],
    relatedDesigns: [
      { name: 'Calacatta Gold Media Wall', image: '/contemporary-interior-hyderabad.jpg', finish: 'Bookmatched Calacatta Quartz with Warm Perimeter Backlighting' },
      { name: 'Acoustic Charcoal Fluted Unit', image: '/project-handover-interior.jpg', finish: 'Sound-Dampening Charcoal Battens with Walnut Floating Shelf' },
      { name: 'Minimalist Teak Floating Console', image: '/contemporary-interior-hyderabad.jpg', finish: 'Seamless Handleless Teak Drawers with Concealed Subwoofer Bay' },
      { name: 'Travertine Curved Media Backdrop', image: '/category-living.jpg', finish: 'Honed Roman Travertine Stone with Curved Plaster Columns' },
      { name: 'Dual-Tone Matte & Brass Unit', image: '/living/coffee_table_1.jpg', finish: 'Super-Matte Anthracite with Brushed Brass Edge Profile' },
      { name: 'Full-Height Library Entertainment Unit', image: '/living/sofa_2.jpg', finish: 'Open Lit Display Niches for Artifacts and Books Surrounding Screen' },
    ],
  },
  {
    id: 'sofas',
    name: 'Custom Sofas & Sectional Seating',
    description:
      'Sink into luxurious comfort crafted just for your family. We design and manufacture custom sofas, L-shaped sectional recliners, and accent lounge chairs engineered with kiln-dried solid hardwood internal frames, 40-density high-resilience foam cushions, and pocketed spring seating. Choose from stain-resistant European velvet, bouclé, breathable linen, or authentic top-grain Italian leather tailored in exact dimensions to suit your floor space.',
    images: [
      '/category-living.jpg',
      '/living/sofa_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Italian Cognac Leather Sectional', image: '/category-living.jpg', finish: 'Top-Grain Aniline Cognac Leather with Feather Down Topping' },
      { name: 'Curved Bouclé Cloud Sofa', image: '/living/sofa_2.jpg', finish: 'Textured Ivory Bouclé with Organic Sculptural Curves' },
      { name: 'Emerald Velvet Chesterfield', image: '/category-living.jpg', finish: 'Deep Button-Tufted Forest Emerald Velvet with Castor Legs' },
      { name: 'Modular Nordic Linen Lounger', image: '/living/coffee_table_1.jpg', finish: 'Neutral Oatmeal Linen with Reconfigurable Ottoman Sections' },
      { name: 'Minimalist Low-Profile Couch', image: '/contemporary-interior-hyderabad.jpg', finish: 'Charcoal Weave Fabric with Smoked Steel Stiletto Base' },
      { name: 'Dual-Recliner Home Cinema Couch', image: '/living/sofa_2.jpg', finish: 'Electric Motorized Reclining Seats with USB Charging Ports' },
    ],
  },
  {
    id: 'foyer-consoles',
    name: 'Foyer Consoles & Shoe Cabinets',
    description:
      'Your entryway sets the tone for your entire home. Anjani Infra crafts bespoke foyer consoles and concealed shoe cabinets that offer functional storage while welcoming guests with understated grandeur. Featuring ventilated louvers that keep footwear fresh, soft-closing hydraulic drop-down doors, integrated cushioned sitting benches for wearing footwear, illuminated mirror accents, and dedicated niches for keys and mail, our foyer solutions make coming home a delightful experience.',
    images: [
      '/living/foyer_1.jpg',
      '/living/foyer_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Floating Foyer Mirror & Console', image: '/living/foyer_1.jpg', finish: 'Statuario Marble Floating Top with Backlit Circular Mirror' },
      { name: 'Fluted Teak Entryway Bench', image: '/living/foyer_2.jpg', finish: 'Solid Teak Fluted Base with Leatherette Upholstered Seat Cushion' },
      { name: 'Full-Height Shoe Tower Suite', image: '/living/sofa_2.jpg', finish: '50-Pair Ventilated Rotating Shoe Rack with Full-Length Mirror Door' },
      { name: 'Brass Inlay Geometric Console', image: '/contemporary-interior-hyderabad.jpg', finish: 'Geometric CNC Brass Inlay in Smoked Oak Veneer' },
      { name: 'Arch Niche Entryway Vanity', image: '/living/foyer_1.jpg', finish: 'Recessed Arch with Warm Halo Lighting & Quartz Catchall Dish' },
      { name: 'Compact Wall-Mounted Shoe Drop', image: '/living/foyer_2.jpg', finish: 'Ultra-Slim 7-Inch Depth Tilt-Out Shoe Organizer for Apartments' },
    ],
  },
  {
    id: 'coffee-tables',
    name: 'Designer Coffee & Accent Tables',
    description:
      'Complete your living ensemble with bespoke coffee tables that harmonize texture and form. We handcraft nested circular table pairs, sculptural organic solid wood center tables, sintered stone tops with brushed champagne metal frames, and versatile mobile side tables that slide smoothly over sofa arms. Each piece is custom finished to pair seamlessly with your sofa upholstery and rug palette.',
    images: [
      '/living/coffee_table_1.jpg',
      '/living/coffee_table_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Nesting Marble & Glass Duo', image: '/living/coffee_table_1.jpg', finish: 'White Carrara Marble High Table with Smoked Fluted Glass Low Table' },
      { name: 'Sculptural Organic Solid Oak Table', image: '/living/coffee_table_2.jpg', finish: 'Freeform Live-Edge White Oak with Matte Polyurethane Seal' },
      { name: 'Black Marquina & Brass Cylinders', image: '/living/coffee_table_1.jpg', finish: 'Monolithic Nero Marquina Marble Cylinder with Brushed Brass Band' },
      { name: 'Fluted Tambour Oval Coffee Table', image: '/category-living.jpg', finish: 'Curved Solid Ash Tambour Slats with Lift-Up Concealed Storage' },
      { name: 'Terrazzo & Steel Geometric Set', image: '/contemporary-interior-hyderabad.jpg', finish: 'Pastel Flecked Terrazzo Slab with Matte Black Powder-Coated Base' },
      { name: 'C-Shape Sliding Sofa Side Tables', image: '/living/sofa_2.jpg', finish: 'Cantilevered Teak and Brass Laptop & Beverage Table' },
    ],
  },
  {
    id: 'pooja-units',
    name: 'Pooja Units & Sacred Mandirs',
    description:
      'Infuse your home with divine tranquility through a customized pooja mandir designed with devotion and precision. At Anjani Infra, we create traditional teakwood carved temples as well as contemporary backlit Corian mandirs. Featuring laser-cut Om and Gayatri Mantra backlights, solid brass bells, smooth pull-out bhog trays, anti-tarnish brass hardware, and concealed drawers for incense and sacred accessories, our pooja units create a sanctified haven within your living space.',
    images: [
      '/living/pooja_1.jpg',
      '/living/pooja_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Backlit Corian Om Mandir', image: '/living/pooja_2.jpg', finish: 'CNC Translucent Corian Stone with Golden Warm LED Illumination' },
      { name: 'Teakwood Temple with Brass Bells', image: '/living/pooja_1.jpg', finish: 'Hand-Carved Burma Teak Pillars with Suspended Temple Bells' },
      { name: 'Floating Wall-Mounted Pooja Niche', image: '/living/pooja_1.jpg', finish: 'Compact Glass & Teak Shrine with Pull-Out Diya Tray' },
      { name: 'Brass Jaali Pillar Mandir', image: '/living/pooja_1.jpg', finish: 'Laser-Cut Brass Screens with Dome Gopuram & Soft Spotlights' },
      { name: 'Statuario Marble & Wood Shrine', image: '/living/pooja_2.jpg', finish: 'Italian White Marble Sanctum with Fluted Walnut Side Enclosure' },
      { name: 'Contemporary Minimalist Pooja Room', image: '/living/pooja_2.jpg', finish: 'Frosted Glass Sliding Doors with Lotus Motif Frosting' },
    ],
  },
];

export default function LivingRoomPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Track expanded state for each living room section
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'tv-units': false,
    sofas: false,
    'foyer-consoles': false,
    'coffee-tables': false,
    'pooja-units': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'tv-units' | 'sofas' | 'foyer-consoles' | 'coffee-tables' | 'pooja-units'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDesigns = activeFilter === 'all'
    ? LIVING_TYPES.flatMap((l) => l.relatedDesigns.map((item) => ({ ...item, category: l.name })))
    : (LIVING_TYPES.find((l) => l.id === activeFilter)?.relatedDesigns || []).map((item) => ({
        ...item,
        category: LIVING_TYPES.find((l) => l.id === activeFilter)?.name || '',
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
          style={{ backgroundImage: "url('/category-living.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 z-10">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Customized Living Room Interiors
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 italic">
              The Ultimate Statement of Elegance, Comfort & Warmth
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
            <span className="text-gray-800 font-bold">Living Room</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Custom-made Living Room Interiors
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
          Your living room creates the defining first impression of your home. At Anjani Infra, we craft bespoke
          living spaces tailored to your personal aesthetic and hospitality rituals across Hyderabad. From floor-to-ceiling
          Italian marble media walls, plush customized sectional seating, and sculptural center tables to functional foyer
          shoe consoles and serene pooja shrines, our interior architects engineer every detail with perfection.
          Manufactured using state-of-the-art European machinery and installed with turnkey precision, we guarantee
          handover within 35-40 days of design sign-off. Explore our 5 core living room interior specializations below.
        </p>
      </section>

      {/* ── LIVING CATEGORY SECTIONS ── */}
      {LIVING_TYPES.map((living, index) => {
        const isExpanded = !!expandedSections[living.id];
        return (
          <section
            key={living.id}
            id={living.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{living.name}</h3>
                  <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {living.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(living.id)}
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
                  {living.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${living.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] group shadow cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={`${living.name} design ${i + 1}`}
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

              {/* ── EXPANDABLE RELATED DESIGNS FOR THIS LIVING CATEGORY ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-amber-200/60 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C5A059]" />
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        Related Designs for {living.name} ({living.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {living.relatedDesigns.map((item, idx) => (
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

      {/* ── ALL RELATED LIVING ROOM DESIGNS GALLERY SECTION ── */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Living Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Explore All Related Living Room Designs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Browse our curated collection of luxury TV media units, custom sofas, designer foyer consoles, and pooja shrines in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Living Designs', value: 'all' },
                { label: 'TV Units & Media', value: 'tv-units' },
                { label: 'Sofas & Seating', value: 'sofas' },
                { label: 'Foyer & Shoe Units', value: 'foyer-consoles' },
                { label: 'Coffee Tables', value: 'coffee-tables' },
                { label: 'Pooja Units', value: 'pooja-units' },
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
            Design Your Dream Living Room
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert living room interior architects in Hyderabad.
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