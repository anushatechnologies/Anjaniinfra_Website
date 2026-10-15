'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface DecorativeDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface DecorativeType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: DecorativeDesignItem[];
}

const DECORATIVE_TYPES: DecorativeType[] = [
  {
    id: 'partitions',
    name: 'Architectural Partitions & CNC Jalis',
    description:
      'Seamlessly divide living zones while adding striking sculptural character. At Anjani Infra, we design bespoke room dividers and CNC laser-cut jali panels crafted from brass, solid teak, fluted charcoal battens, and tempered architectural glass. Whether defining your foyer from the living hall or screening the dining area, our dividers allow natural ambient light and ventilation to flow freely while bestowing privacy and acoustic balance.',
    images: [
      '/category-partition.jpg',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Geometric Brass Inlay Jali', image: '/category-partition.jpg', finish: 'Laser-Cut Brushed Brass Inlay with Solid Walnut Framing' },
      { name: 'Rotatable Timber Louver Screen', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: '360-Degree Swivel Teak Battens for Dynamic Light Control' },
      { name: 'Ribbed Glass & Metal Grid Divider', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Moro Ribbed Glass in Matte Black Aluminum Profiles' },
      { name: 'Planter Credenza Partition', image: '/category-partition.jpg', finish: 'Low Storage Cabinet with Indoor Self-Watering Planter Bed' },
      { name: 'Arch Carved Screen with Gold Accent', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', finish: 'Contemporary Curved Arch with Soft Gold Leaf Details' },
      { name: 'Dual-Sided Open Cubby Screen', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Asymmetric Display Shelves Accessible from Both Sides' },
    ],
  },
  {
    id: 'wall-paneling',
    name: 'Wall Paneling & Illuminated Display Ledges',
    description:
      'Transform plain flat walls into commanding architectural statements. We fabricate precision wall cladding featuring acoustic fluted charcoal panels, bookmatched natural wood veneers, sintered stone slabs, and integrated warm 3000K LED linear profiles. Floating display ledges provide an illuminated stage for showcasing sculptures, family memorabilia, and curated art pieces.',
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Acoustic Charcoal Fluted Wall', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', finish: 'High-Density Acoustic Charcoal Felt with Smoked Oak Battens' },
      { name: 'Smoked Walnut Veneer Cladding', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', finish: 'Bookmatched American Walnut with Concealed Flush Doors' },
      { name: 'Floating Marble Display Ledge', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Statuario Quartz Cantilevered Shelf with Hidden Steel Brackets' },
      { name: 'Geometric Metallic Grooved Paneling', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'PU Matte Finish with Embedded Champagne Brass Accent Strips' },
      { name: 'Warm Backlit Travertine Niche', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80', finish: 'Honed Roman Travertine with Perimeter Concealed Cove LEDs' },
      { name: 'Fabric Acoustic Padded Accent Wall', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Textured Linen & Leatherette Acoustic Hexagonal Tiles' },
    ],
  },
  {
    id: 'curio-cabinets',
    name: 'Curio Cabinets & Artifact Showcases',
    description:
      'Cherished travel souvenirs, heirloom artifacts, and fine collectibles deserve museum-grade presentation. We build bespoke curio cabinets with ultra-clear toughened glass shutters, dust-proof magnetic gaskets, velvet-lined drawers, and directional micro-spotlights. Available as freestanding glass towers or built into structural alcoves, our showcases exhibit your prized possessions in breathtaking clarity.',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Minimalist Bronze Glass Tower', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Ultra-Slim Anodized Bronze Profile with Dimmable Spotlight Array' },
      { name: 'Alcove Integrated Display Niche', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Recessed Wall Vitrine with Floating Tempered Glass Shelves' },
      { name: 'Velvet-Lined Collector Credenza', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', finish: 'Push-to-Open Glass Top Drawers for Watches & Fine Jewelry' },
      { name: 'Double-Sided See-Through Curio', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Glass Partition Showcase Connecting Living and Dining Rooms' },
      { name: 'Teakwood Handcrafted Trophy Case', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80', finish: 'Burmese Teak Framing with Soft Anti-Reflective Optical Glass' },
      { name: 'Hexagonal Geometric Display Cubes', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', finish: 'Staggered Wall-Mounted Hexagon Boxes with Metallic Rims' },
    ],
  },
  {
    id: 'foyer-consoles',
    name: 'Foyer Statement Consoles & Accent Mirrors',
    description:
      'Welcome your guests with an extraordinary entryway statement. We craft bespoke floating foyer consoles, full-length illuminated vanity mirrors, and luxury catch-all credenzas. Combining marble slab table tops, fluted brass bases, and touch-sensor backlight mirrors, our foyer pieces combine functional drop-zone utility for keys and accessories with dramatic designer flair.',
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
      '/living/foyer_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Halo Backlit Circular Mirror Console', image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80', finish: '48-Inch Rimless Mirror with Floating Statuario Marble Console' },
      { name: 'Fluted Brass & Teak Entry Table', image: '/living/foyer_2.jpg', finish: 'Curved Solid Teak Fluting with Champagne Brass Foot Caps' },
      { name: 'Full-Length Pivot Dressing Mirror', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'Rotatable Floor-to-Ceiling Mirror with Hidden Jewelry Organizer' },
      { name: 'Nero Marquina Floating Drawer Unit', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', finish: 'Black Marble Floating Box with Push-to-Open Velvet Tray' },
      { name: 'Arch Niche Foyer Showcase', image: '/living/foyer_1.jpg', finish: 'Plaster Textured Arch with Uplighting & Artifact Plinth' },
      { name: 'Compact Wall-Hung Key & Mail Credenza', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Space-Saving 6-Inch Depth Console with Brass Catchall Bowls' },
    ],
  },
  {
    id: 'pooja-mandirs',
    name: 'Modern Pooja Units & Sacred Niches',
    description:
      'Imbue your living environment with spiritual serenity through our handcrafted mandir sanctums. Designed to honor sacred rituals while harmonizing with contemporary architecture, our pooja units feature CNC laser-cut Om and floral backlights, solid cast brass temple bells, smooth pull-out bhog and diya trays, and concealed storage drawers for pooja samagri.',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Backlit Translucent Corian Mandir', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', finish: 'CNC Laser-Carved Corian Om Motif with Warm Yellow LED Backlight' },
      { name: 'Burma Teak Temple with Suspended Bells', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Solid Teak Carved Pillars with Pure Brass Temple Ghantis' },
      { name: 'Wall-Hung Floating Sacred Shrine', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', finish: 'Compact Glass & Teakwood Niche with Heat-Resistant Diya Shelf' },
      { name: 'Statuario Marble & Walnut Mandir', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'Italian Marble Base with Fluted Walnut Side Enclosure' },
      { name: 'Brass Lattice Gopuram Shrine', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Laser-Cut Brass Screens with Traditional Gopuram Top Accent' },
      { name: 'Minimalist Frost Glass Temple Door', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', finish: 'Lotus Etched Frosted Glass Folding Doors with Brass Latches' },
    ],
  },
];

export default function DecorativeUnitsPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Track expanded state for each decorative section
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    partitions: false,
    'wall-paneling': false,
    'curio-cabinets': false,
    'foyer-consoles': false,
    'pooja-mandirs': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'partitions' | 'wall-paneling' | 'curio-cabinets' | 'foyer-consoles' | 'pooja-mandirs'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDesigns = activeFilter === 'all'
    ? DECORATIVE_TYPES.flatMap((d) => d.relatedDesigns.map((item) => ({ ...item, category: d.name })))
    : (DECORATIVE_TYPES.find((d) => d.id === activeFilter)?.relatedDesigns || []).map((item) => ({
        ...item,
        category: DECORATIVE_TYPES.find((d) => d.id === activeFilter)?.name || '',
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
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-[#fafaf8] flex items-center justify-center hover:bg-[#c9a96e] hover:text-black border border-white/10 transition-colors cursor-pointer"
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
          style={{ backgroundImage: "url('/category-partition.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 z-10">
          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fafaf8] leading-tight">
              Customized Decorative Units
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#d6d3cd] italic font-light">
              Exquisite Partitions, Wall Cladding & Architectural Accents
            </p>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-3.5">
          <nav className="flex items-center gap-1 text-xs text-[#999999] tracking-wider uppercase font-sans">
            <Link href="/" className="hover:text-[#c9a96e] transition-colors">Anjani Infra</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-[#c9a96e] font-medium">Decorative Units</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-white/5">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal text-center mb-6">
          Custom-made Decorative Units
        </h2>
        <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed max-w-4xl mx-auto text-center font-light">
          The true signature of an extraordinary home lies in its bespoke architectural details. At Anjani Infra,
          we create customized decorative units that infuse individuality and finesse into apartments and luxury villas
          across Hyderabad. From laser-cut CNC brass partitions and acoustic fluted wall claddings to floating illuminated
          display ledges, museum-grade curio vitrines, and handcrafted pooja mandirs, our artisans craft every element
          to millimeter perfection. Produced in our automated manufacturing center and installed on site with turnkey
          reliability, we deliver within 35-40 days. Discover the 5 core decorative unit categories we specialize in below.
        </p>
      </section>

      {/* ── DECORATIVE CATEGORY SECTIONS ── */}
      {DECORATIVE_TYPES.map((item, index) => {
        const isExpanded = !!expandedSections[item.id];
        return (
          <section
            key={item.id}
            id={item.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'} border-b border-white/5`}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fafaf8] font-normal leading-snug">{item.name}</h3>
                  <p className="text-sm sm:text-[15px] text-[#d6d3cd] leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(item.id)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-[0.2em] uppercase rounded transition-all shadow-lg cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Related Designs' : 'View More Designs'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEstimateOpen(true)}
                      className="px-4 py-2.5 border border-[#c9a96e]/60 hover:border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e]/10 text-xs font-bold font-sans tracking-[0.2em] uppercase rounded transition-all"
                    >
                      Get Estimate
                    </button>
                  </div>
                </div>

                {/* Right: 2 Photos side-by-side */}
                <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {item.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${item.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-xl bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 aspect-[4/3] group shadow-xl cursor-pointer transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`${item.name} design ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Zoom Icon on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#c9a96e] text-[#c9a96e] flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                          <ZoomIn className="w-5 h-5" />
                        </div>
                      </div>
                      {/* Watermark overlay */}
                      <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                        <span className="text-[#fafaf8]/80 text-[10px] font-sans tracking-wider">© Anjani Infra Projects</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── EXPANDABLE RELATED DESIGNS FOR THIS CATEGORY ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-[#c9a96e]/20 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#c9a96e]" />
                      <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8]">
                        Related Designs for {item.name} ({item.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-[#999999] tracking-wider uppercase hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {item.relatedDesigns.map((rel, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage({ url: rel.image, title: rel.name, subtitle: rel.finish })}
                        className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-[#c9a96e]/70 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] bg-black overflow-hidden">
                          <img
                            src={rel.image}
                            alt={rel.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="px-3 py-1.5 bg-[#132B3E] text-[#c9a96e] text-xs font-bold rounded shadow-md flex items-center gap-1.5 border border-[#C5A059]/30">
                              <Eye className="w-3.5 h-3.5" /> View Photo
                            </span>
                          </div>
                        </div>
                        <div className="p-4 flex items-center justify-between bg-[#161616] border-t border-white/5">
                          <div>
                            <h5 className="font-bold text-[#fafaf8] text-sm group-hover:text-[#c9a96e] transition-colors">
                              {rel.name}
                            </h5>
                            <p className="text-xs text-[#999999]">{rel.finish}</p>
                          </div>
                          <span className="text-[10px] text-[#c9a96e] bg-[#c9a96e]/10 border border-[#c9a96e]/30 font-mono font-semibold px-2.5 py-1 rounded uppercase tracking-wider">
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

      {/* ── ALL RELATED DECORATIVE DESIGNS GALLERY SECTION ── */}
      <section className="bg-[#0e0e0e] py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#c9a96e] uppercase">Decorative Showcase</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal">
              Explore All Related Decorative Designs
            </h2>
            <p className="text-[#d6d3cd] text-sm leading-relaxed font-light mt-2">
              Browse our curated collection of architectural partitions, fluted wall cladding, curio vitrines, and mandir shrines in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Decorative Designs', value: 'all' },
                { label: 'Partitions & Jalis', value: 'partitions' },
                { label: 'Wall Paneling', value: 'wall-paneling' },
                { label: 'Curio Showcases', value: 'curio-cabinets' },
                { label: 'Foyer Consoles', value: 'foyer-consoles' },
                { label: 'Pooja Mandirs', value: 'pooja-mandirs' },
              ].map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value as any)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/70 text-white text-[10px] font-bold rounded">
                    {item.category.split(' ')[0]}
                  </div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 py-1 px-2 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <span className="text-white/70 text-[9px]">© Anjani Infra</span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between bg-[#161616]">
                  <div>
                    <h4 className="font-bold text-[#fafaf8] text-sm group-hover:text-[#c9a96e] transition-colors line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#999999] mt-0.5 line-clamp-1">{item.finish}</p>
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
            Design Your Custom Decorative Units
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert interior architects in Hyderabad.
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