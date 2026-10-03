'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface KidsDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface KidsType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: KidsDesignItem[];
}

const KIDS_TYPES: KidsType[] = [
  {
    id: 'bunk-beds',
    name: 'Modular Bunk Beds & Loft Sleepers',
    description:
      'Turn sleep and play into an everyday adventure while conserving valuable floor space. At Anjani Infra, we craft modular bunk beds and loft systems tailored for growing children and siblings. Designed with high safety guardrails, sturdy steps that double as pull-out toy drawers, and pull-out trundle beds for sleepovers, our beds are engineered with non-toxic, child-safe rounded edges and scratch-resistant European laminates that withstand decades of active use.',
    images: [
      '/category-kids-room.jpg',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Nordic Castle Loft Bed', image: '/category-kids-room.jpg', finish: 'Bleached Pine & Pastel Blue with Storage Staircase' },
      { name: 'Twin Bunk with Bookcase Steps', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Clean Alpine White with Integrated Reading Nooks' },
      { name: 'Adventure Slide Bunk Suite', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Natural Ashwood with Detachable Wooden Play Slide' },
      { name: 'Pastel Princess Canopy Loft', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Soft Blush Pink with Sheer Fairy Canopy & LED Garland' },
      { name: 'Montessori Low Floor Bed', image: '/category-kids-room.jpg', finish: 'Organic Beechwood House-Frame Floor Bed for Toddlers' },
      { name: 'Space Shuttle Dual Bunk', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Midnight Navy & Starlight Glow with Under-Bed Study Bay' },
    ],
  },
  {
    id: 'study-desks',
    name: 'Ergonomic Study Stations & Bookcases',
    description:
      'Nurture healthy posture and inspiring study habits with customized study units. We build dual-sibling workstations and compact floating desks equipped with ergonomic height settings, glare-free LED under-cabinet illumination, magnetic pinboards, organized pencil grooves, and cable management ports. Matching floor-to-ceiling bookshelves keep academic books, encyclopedias, and trophies neatly organized and readily accessible.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Dual-Sibling Study Station', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: '8-Foot Shared Desk with Central Divider Drawer Tower' },
      { name: 'Treehouse Bookcase Desk', image: '/category-kids-room.jpg', finish: 'Whimsical Tree Silhouette Shelving with Integrated Writing Pad' },
      { name: 'Floating Minimalist Study Wall', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Wall-Hung Desk with Soft Corkboard & Magnetic Chalk Strip' },
      { name: 'Corner Ergonomic Workstation', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'L-Shaped Corner Unit with Overhead Lockable Book Cabinets' },
      { name: 'Reading Nook Window Bench', image: '/category-kids-room.jpg', finish: 'Cushioned Bay Window Seat with Under-Bench Book Storage' },
      { name: 'Color-Pop Junior Study Desk', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Sunshine Yellow Accents with Scratch-Proof Matte White Laminate' },
    ],
  },
  {
    id: 'themed-rooms',
    name: 'Themed Bedrooms & Creative Murals',
    description:
      'Fuel your child’s boundless imagination with our immersive themed bedroom concepts. Whether your child dreams of racing across circuits, exploring the cosmos, sailing on high-seas adventures, or roaming an enchanted woodland, our designers bring their passions to life. We integrate custom 3D wall art, cloud-shaped acoustic wall pads, fiber-optic starlight ceilings, and themed furniture elements that make bedtime magical.',
    images: [
      '/category-kids-room.jpg',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Cosmic Galaxy Starlight Suite', image: '/category-kids-room.jpg', finish: 'Fiber-Optic Constellation Ceiling with Astronaut Murals' },
      { name: 'Enchanted Forest Haven', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Botanical Leaf Greenery Wallpaper with Birch Wood Furniture' },
      { name: 'Formula-1 Racing Bed Chamber', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Gloss Red Sports Car Bed Frame with Checkered Flag Accents' },
      { name: 'Oceanic Sailor Yacht Room', image: '/category-kids-room.jpg', finish: 'Navy Blue & Crisp White with Rope Trim and Porthole Mirrors' },
      { name: 'Safari Explorer Junior Suite', image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=800&q=80', finish: 'Earthy Khaki & Jungle Wallpaper with Bamboo Accent Poles' },
      { name: 'Pastel Rainbow Cloud Bedroom', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Illuminated Cloud Headboard with Gradient Pastel Wall Paneling' },
    ],
  },
  {
    id: 'wardrobes-storage',
    name: 'Child-Safe Wardrobes & Toy Storage',
    description:
      'Teaching tidiness becomes effortless with smart, child-accessible storage solutions. We create customized wardrobes with low-height hanging rods, pull-out wire baskets for toys, chalkboard door fronts for creative doodling, and anti-slam soft-closing dampers that protect little fingers. Modular toy storage towers with removable colorful tubs keep building blocks, board games, and sports equipment neatly stowed away.',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Multi-Color Modular Wardrobe', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Trio Pastel Shutters with Recessed Star & Heart Cutout Handles' },
      { name: 'Lego & Toy Storage Showcase', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Open Cubby Matrix with Pull-out Bins and Display Ledges' },
      { name: 'Chalkboard Panel Wardrobe', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', finish: 'Magnetic Blackboard Center Door for Freehand Chalk Art' },
      { name: 'Deep Hydraulic Toy Drawers', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Under-Bed Heavy Duty Tandem Drawers for Sports Gear' },
      { name: 'Animal Silhouette Cupboard', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80', finish: 'Giraffe and Bear Laser Engravings on Matte Laminate' },
      { name: 'Full-Height Wardrobe with Upper Lofts', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80', finish: 'Floor-to-Ceiling Storage with Upper Lofts for Seasonal Bedding' },
    ],
  },
  {
    id: 'play-zones',
    name: 'Indoor Play Zones & Activity Corners',
    description:
      'Transform a corner of the room into an energizing activity haven. We design indoor canvas teepee reading retreats, wooden Swedish ladder climbing walls with crash mats, arts & craft tables with spill-proof washable surfaces, and ceiling-anchored hanging cocoon swings. All installations are tested rigorously for structural load capacity and safe anchor points, ensuring total peace of mind for parents.',
    images: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Indoor Canvas Teepee Corner', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', finish: 'Organic Cotton Canvas Tent with Fairy Lights & Plush Floor Pillows' },
      { name: 'Swedish Climbing Wall & Gym Mat', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Solid Birch Wall Rungs with Safety Landing Crash Cushion' },
      { name: 'Round Craft & Lego Activity Table', image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80', finish: 'Washable Polyurethane Top with Central Mesh Toy Catch Net' },
      { name: 'Suspended Cocoon Pod Swing', image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80', finish: 'Ceiling Anchored Woven Fabric Swing Chair with Swivel Shackle' },
      { name: 'Pegboard Creative Display Wall', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Full-Wall Modular Wooden Pegboard with Moveable Shelves and Dowels' },
      { name: 'Soft Sensory Foam Play Pit', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80', finish: 'Foldable Velvet Foam Modular Blocks for Construction Play' },
    ],
  },
];

export default function KidsRoomPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Track expanded state for each kids section
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'bunk-beds': false,
    'study-desks': false,
    'themed-rooms': false,
    'wardrobes-storage': false,
    'play-zones': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'bunk-beds' | 'study-desks' | 'themed-rooms' | 'wardrobes-storage' | 'play-zones'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDesigns = activeFilter === 'all'
    ? KIDS_TYPES.flatMap((k) => k.relatedDesigns.map((item) => ({ ...item, category: k.name })))
    : (KIDS_TYPES.find((k) => k.id === activeFilter)?.relatedDesigns || []).map((item) => ({
        ...item,
        category: KIDS_TYPES.find((k) => k.id === activeFilter)?.name || '',
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
          style={{ backgroundImage: "url('/category-kids-room.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 z-10">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Customized Kids Bedroom Interiors
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 italic">
              Playful, Inspiring & Safe Sanctuaries That Grow With Your Child
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
            <span className="text-gray-800 font-bold">Kids Room</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
          Custom-made Kids Bedroom Interiors
        </h2>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
          A child's room should inspire creativity, cultivate healthy study routines, and provide deep restful sleep.
          At Anjani Infra, we design and build bespoke kids and teen bedrooms tailored to your child's age, passions,
          and evolving requirements in Hyderabad. Our designs emphasize non-toxic eco-friendly finishes, rounded safety
          edges, modular bunk beds with step storage, dedicated ergonomic study stations with eye-friendly lighting, and
          intelligent toy organization systems. Manufactured using high-precision German equipment, we deliver and install
          within 35-40 days of design approval. Explore the 5 core kids interior categories we specialize in below.
        </p>
      </section>

      {/* ── KIDS CATEGORY SECTIONS ── */}
      {KIDS_TYPES.map((kids, index) => {
        const isExpanded = !!expandedSections[kids.id];
        return (
          <section
            key={kids.id}
            id={kids.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{kids.name}</h3>
                  <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed text-justify">
                    {kids.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(kids.id)}
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
                  {kids.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${kids.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[4/3] group shadow cursor-pointer"
                    >
                      <img
                        src={src}
                        alt={`${kids.name} design ${i + 1}`}
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

              {/* ── EXPANDABLE RELATED DESIGNS FOR THIS KIDS CATEGORY ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-amber-200/60 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#C5A059]" />
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        Related Designs for {kids.name} ({kids.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {kids.relatedDesigns.map((item, idx) => (
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

      {/* ── ALL RELATED KIDS ROOM DESIGNS GALLERY SECTION ── */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#C5A059] uppercase">Kids Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
              Explore All Related Kids Room Designs
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Browse our curated collection of child-safe bunk beds, study stations, creative themed rooms, and play areas in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Kids Designs', value: 'all' },
                { label: 'Bunk & Loft Beds', value: 'bunk-beds' },
                { label: 'Study Desks', value: 'study-desks' },
                { label: 'Themed Rooms', value: 'themed-rooms' },
                { label: 'Wardrobes & Storage', value: 'wardrobes-storage' },
                { label: 'Play Zones', value: 'play-zones' },
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
            Design Your Child's Dream Bedroom
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert kids interior architects in Hyderabad.
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