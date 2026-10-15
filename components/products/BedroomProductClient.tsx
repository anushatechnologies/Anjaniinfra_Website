'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, ChevronUp, X, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

interface BedroomDesignItem {
  name: string;
  image: string;
  finish: string;
}

interface BedroomType {
  id: string;
  name: string;
  description: string;
  images: string[];
  relatedDesigns: BedroomDesignItem[];
}

const BEDROOM_TYPES: BedroomType[] = [
  {
    id: 'master-bedroom',
    name: 'Master Bedroom Interiors',
    description:
      'The master bedroom is the sanctuary of your home — a tranquil space where comfort meets timeless luxury. At Anjani Infra, we tailor every master bedroom suite to reflect your personal lifestyle and relaxation preferences. From custom-crafted king-size cots with plush upholstered acoustic headboards to seamless floor-to-ceiling wardrobes with loft storage, our designers create harmonious spaces. Integrated bedside consoles, concealed LED cove ambient lighting, and dedicated vanity dressing spaces complete the executive suite aesthetic.',
    images: [
      '/bedroom/master_bedroom_1.jpg',
      '/bedroom/master_bedroom_2.jpg',
    ],
    relatedDesigns: [
      { name: 'Imperial Walnut Suite', image: '/bedroom/bedroom_hero_banner.jpg', finish: 'Smoked American Walnut & Velvet Headboard' },
      { name: 'Celeste Champagne Master', image: '/bedroom/master_bedroom_2.jpg', finish: 'Champagne Lacquer & Fluted Wall Panels' },
      { name: 'Nordic Oak Sanctuary', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80', finish: 'Natural White Oak with Linear Sconce Lights' },
      { name: 'Monochrome Luxe Bedroom', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', finish: 'Charcoal Matte Acrylic & Leatherette Panels' },
      { name: 'Tuscan Gold King Suite', image: '/bedroom/master_bedroom_1.jpg', finish: 'Warm Gold Accents with Calacatta Headboard' },
      { name: 'Serenity Ivory Master', image: '/category-bedroom.jpg', finish: 'Ivory Polygloss & Floating Side Consoles' },
    ],
  },
  {
    id: 'wardrobes',
    name: 'Custom Wardrobes & Walk-in Closets',
    description:
      'A thoughtfully engineered wardrobe transforms your everyday dressing experience with supreme order and beauty. We engineer floor-to-ceiling customized wardrobes available in sliding glass doors, soft-close hinged profiles, and expansive walk-in closets. Featuring intelligent inner partitions, soft-closing Blum hardware, built-in sensor strip lighting, jewelry pull-out drawers, trouser racks, and concealed vanity mirrors, our wardrobes utilize every millimetre of your bedroom height.',
    images: [
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Frosted Glass Slider', image: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&w=800&q=80', finish: 'Fluted Glass with Slim Black Aluminum Frames' },
      { name: 'Lacquered Mirror Wardrobe', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=800&q=80', finish: 'Bronze Tinted Mirror Panels & Rose Gold Edge' },
      { name: 'Executive Walk-in Closet', image: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=800&q=80', finish: 'Open Island Accessory Counter with Dual Hanging Bays' },
      { name: 'Matte Ash 4-Door Hinged', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80', finish: 'Super-Matte Anti-Fingerprint Ash Finish' },
      { name: 'Dual Tone Loft Wardrobe', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Warm Cashmere & Walnut Woodgrain Contrast' },
      { name: 'Modern Minimalist Slider', image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&w=800&q=80', finish: 'Integrated J-Pull Handles & Hidden Soft-Dampers' },
    ],
  },
  {
    id: 'guest-bedroom',
    name: 'Guest Bedroom Designs',
    description:
      'Make visiting family and guests feel warmly welcomed with a serene, uncluttered guest bedroom designed for maximum comfort and spatial versatility. Anjani Infra crafts custom guest room sets featuring compact queen beds with easy-lift hydraulic storage, space-efficient 3-door wardrobes with built-in dressing mirrors, and versatile floating multi-utility study corners. Our soothing neutral color palettes ensure every guest enjoys a calming, five-star hospitality stay.',
    images: [
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Warm Teakwood Guest Suite', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80', finish: 'Burmese Teak Laminate & Cream Linen Fabric' },
      { name: 'Serene Pebble Grey Guest', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80', finish: 'Pebble Grey PU Finish & Minimalist Floating Nightstands' },
      { name: 'Minimalist Birch Room', image: '/category-bedroom.jpg', finish: 'Scandinavian Birch Wood with Floating Shelves' },
      { name: 'Cotswold White Elegance', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', finish: 'Cotswold Off-White Acrylic & Brushed Brass Handles' },
      { name: 'Urban Taupe Hospitality Set', image: '/faq-bedroom-hero.jpg', finish: 'Warm Taupe Laminate with Ergonomic Compact Workstation' },
      { name: 'Zen Minimalist Platform Bed', image: '/bedroom/master_bedroom_2.jpg', finish: 'Low-Height Japanese Inspired Platform with Tatami Texture' },
    ],
  },
  {
    id: 'kids-bedroom',
    name: 'Kids & Teen Bedroom Interiors',
    description:
      'Children need bedrooms that spark creativity, inspire learning, and grow alongside them. Our kids and teen bedroom designs blend playful aesthetics with safety and smart organization. We construct customized study desks with pinboards, modular bunk beds with safety stairs, pull-out trundle beds for sleepovers, and deep toy storage cabinets with child-safe soft-closing mechanisms. Vibrant, durable, easy-to-clean finishes keep the room lively and clutter-free for years to come.',
    images: [
      '/category-kids-room.jpg',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Adventure Bunk & Study Station', image: '/category-kids-room.jpg', finish: 'Dual Bunk with Integrated Bookcase & Guard Rails' },
      { name: 'Skyline Blue Teen Suite', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Cobalt & White Matte with Magnetic Study Wall' },
      { name: 'Pastel Meadow Girls Room', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Blush Pink & Sage Green with Canopy Accent' },
      { name: 'Montessori Play & Study Room', image: '/category-kids-room.jpg', finish: 'Low Access Bookshelf & Beechwood Floor Bed' },
      { name: 'Urban Gamer & Study Loft', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', finish: 'Matte Anthracite with Neon RGB Backlight Profiles' },
      { name: 'Twin Bed Siblings Suite', image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=800&q=80', finish: 'Symmetrical Twin Cots with Shared Central Desk' },
    ],
  },
  {
    id: 'dressing-units',
    name: 'Dressing Units & Bedside Consoles',
    description:
      'Elevate your daily routine with custom vanity dressing units and matching bedside consoles designed to complement your bedroom furniture. We craft wall-mounted floating dressing tables, full-length illuminated mirrors with touch-sensor LED lights, dedicated drawer organizers for cosmetics and accessories, and coordinating nightstands featuring discreet cable management channels and soft-glide drawers.',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    ],
    relatedDesigns: [
      { name: 'Hollywood Illuminated Vanity', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', finish: 'Touch-Sensor LED Perimeter Mirror & Glass Top' },
      { name: 'Floating Fluted Wood Console', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80', finish: 'Curved Fluted Wood with Concealed Drawers' },
      { name: 'Full-Length Hidden Storage Mirror', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80', finish: 'Swivel Mirror with Hidden Jewelry Organizer Behind' },
      { name: 'Marble Top Dual Nightstands', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80', finish: 'Statuario Quartz Top with Brass Hairpin Base' },
      { name: 'Scandinavian Floating Nightstand', image: '/bedroom/master_bedroom_1.jpg', finish: 'Solid Oak Single Drawer with Chamfered Edges' },
      { name: 'Bespoke Wardrobe Integrated Vanity', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', finish: 'Seamlessly Built-in Between Twin Wardrobe Towers' },
    ],
  },
];

export default function BedroomPage() {
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Track expanded state for each bedroom section
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'master-bedroom': false,
    wardrobes: false,
    'guest-bedroom': false,
    'kids-bedroom': false,
    'dressing-units': false,
  });

  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; subtitle?: string } | null>(null);

  // Active filter for bottom all-in-one gallery
  const [activeFilter, setActiveFilter] = useState<'all' | 'master-bedroom' | 'wardrobes' | 'guest-bedroom' | 'kids-bedroom' | 'dressing-units'>('all');

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDesigns = activeFilter === 'all'
    ? BEDROOM_TYPES.flatMap((b) => b.relatedDesigns.map((d) => ({ ...d, category: b.name })))
    : (BEDROOM_TYPES.find((b) => b.id === activeFilter)?.relatedDesigns || []).map((d) => ({
        ...d,
        category: BEDROOM_TYPES.find((b) => b.id === activeFilter)?.name || '',
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
          style={{ backgroundImage: "url('/bedroom/bedroom_hero_banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        </div>
        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 z-10">
          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fafaf8] leading-tight">
              Customized Bedroom Interiors
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#d6d3cd] italic font-light">
              Your Personal Sanctuary of Comfort & Elegance
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
            <span className="text-[#c9a96e] font-medium">Bedroom</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 border-b border-white/5">
        <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal text-center mb-6">
          Custom-made Bedroom Interiors
        </h2>
        <p className="text-sm sm:text-base text-[#d6d3cd] leading-relaxed max-w-4xl mx-auto text-center font-light">
          Your bedroom is where every day begins and ends. At Anjani Infra, we craft customized bedroom interior solutions
          for apartments, independent houses, and luxury villas across Hyderabad. Our seasoned interior architects visit
          your site to take precise measurements and listen attentively to your lifestyle aspirations. Whether you require
          spacious sliding wardrobes with floor-to-ceiling lofts, cushioned acoustic headboards, bespoke dressing consoles
          with touch-sensor illuminated mirrors, or space-saving bunk beds for children, we bring your vision to life from
          our own state-of-the-art manufacturing facility. All bedroom furniture is installed seamlessly on site with
          turnkey handover guaranteed within 35-40 days. Below are the 5 core bedroom interior elements we specialize in.
        </p>
      </section>

      {/* ── BEDROOM CATEGORY SECTIONS ── */}
      {BEDROOM_TYPES.map((bedroom, index) => {
        const isExpanded = !!expandedSections[bedroom.id];
        return (
          <section
            key={bedroom.id}
            id={bedroom.id}
            className={`py-12 sm:py-16 transition-colors ${index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#111111]'} border-b border-white/5`}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left: Text */}
                <div className="lg:col-span-4 space-y-5">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#fafaf8] font-normal leading-snug">{bedroom.name}</h3>
                  <p className="text-sm sm:text-[15px] text-[#d6d3cd] leading-relaxed font-light">
                    {bedroom.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => toggleSection(bedroom.id)}
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
                  {bedroom.images.map((src, i) => (
                    <div
                      key={i}
                      onClick={() => setLightboxImage({ url: src, title: `${bedroom.name} - Sample Design ${i + 1}` })}
                      className="relative overflow-hidden rounded-xl bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 aspect-[4/3] group shadow-xl cursor-pointer transition-all duration-300"
                    >
                      <img
                        src={src}
                        alt={`${bedroom.name} design ${i + 1}`}
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

              {/* ── EXPANDABLE RELATED DESIGNS FOR THIS BEDROOM CATEGORY ── */}
              {isExpanded && (
                <div className="mt-10 pt-8 border-t border-[#c9a96e]/20 animate-fade-in">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-[#c9a96e]" />
                      <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8]">
                        Related Designs for {bedroom.name} ({bedroom.relatedDesigns.length} Samples)
                      </h4>
                    </div>
                    <span className="text-xs text-[#999999] tracking-wider uppercase hidden sm:inline">Click any photo to view full resolution</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {bedroom.relatedDesigns.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => setLightboxImage({ url: item.image, title: item.name, subtitle: item.finish })}
                        className="bg-[#161616] rounded-xl overflow-hidden border border-white/10 hover:border-[#c9a96e]/70 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                      >
                        <div className="relative aspect-[4/3] bg-black overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
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
                              {item.name}
                            </h5>
                            <p className="text-xs text-[#999999]">{item.finish}</p>
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

      {/* ── ALL RELATED BEDROOM DESIGNS GALLERY SECTION ── */}
      <section className="bg-[#0e0e0e] py-16 sm:py-24 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest text-[#c9a96e] uppercase">Bedroom Gallery</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fafaf8] font-normal">
              Explore All Related Bedroom Designs
            </h2>
            <p className="text-[#d6d3cd] text-sm leading-relaxed font-light mt-2">
              Browse our curated collection of bedroom layouts, bespoke wardrobes, dressing units, and kids suites in Hyderabad.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { label: 'All Bedroom Designs', value: 'all' },
                { label: 'Master Bedroom', value: 'master-bedroom' },
                { label: 'Wardrobes', value: 'wardrobes' },
                { label: 'Guest Bedroom', value: 'guest-bedroom' },
                { label: 'Kids & Teens', value: 'kids-bedroom' },
                { label: 'Dressing & Consoles', value: 'dressing-units' },
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
            Design Your Dream Bedroom
          </h2>
          <p className="text-amber-100/80 text-sm sm:text-base">
            Get a free consultation with our expert bedroom interior architects in Hyderabad.
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