'use client';

import React, { useState } from 'react';
import { X, ZoomIn, Play, ChevronDown, Sparkles, MapPin, Eye, ArrowRight, Video, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { InteriorEstimateModal } from '@/components/InteriorEstimateModal';

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Living Room' | 'Modular Kitchen' | 'Bedroom & Wardrobe' | 'Dining & Pooja';
  location: string;
  src: string;
  alt: string;
}

export interface VideoGalleryItem {
  id: number;
  title: string;
  duration: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

/* ─── 100% VERIFIED HIGH-RES INTERIOR PHOTOGRAPHS WITH BEST TITLES ─── */
const ALL_INTERIOR_IMAGES: GalleryItem[] = [
  {
    id: 1,
    title: 'Chef-Grade Parallel Island Kitchen with Quartz Counter',
    category: 'Modular Kitchen',
    location: 'Banjara Hills, Hyderabad',
    src: '/category-kitchen.jpg',
    alt: 'Luxury Modular Kitchen with Quartz Island and Soft-Close Acrylic Cabinets',
  },
  {
    id: 2,
    title: 'Contemporary Open-Concept Living Room with Bouclé Sofa',
    category: 'Living Room',
    location: 'Jubilee Hills, Hyderabad',
    src: '/category-living.jpg',
    alt: 'Modern Living Room with Textured Boucle Sofa and Marble Coffee Table',
  },
  {
    id: 3,
    title: 'Luxury Master Suite with Full-Height Acoustic Headboard',
    category: 'Bedroom & Wardrobe',
    location: 'Gachibowli, Hyderabad',
    src: '/category-bedroom.jpg',
    alt: 'Master Bedroom with Bespoke Fluted Headboard and Warm Cove Lighting',
  },
  {
    id: 4,
    title: 'Modern 8-Seater Quartz Dining Room with Chandelier',
    category: 'Dining & Pooja',
    location: 'Kokapet, Hyderabad',
    src: '/category-dining.jpg',
    alt: 'Architectural Dining Room with Designer Pendant Lighting',
  },
  {
    id: 5,
    title: 'Floor-to-Ceiling Tinted Glass Sliding Wardrobe',
    category: 'Bedroom & Wardrobe',
    location: 'Financial District, Hyderabad',
    src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85',
    alt: 'Custom Built-in Sliding Wardrobe with Bronze Tinted Glass Panels',
  },
  {
    id: 6,
    title: 'Statuario Marble & Fluted Charcoal TV Media Wall',
    category: 'Living Room',
    location: 'Tellapur, Hyderabad',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
    alt: 'Custom Floating TV Entertainment Unit with Concealed LED Backlighting',
  },
  {
    id: 7,
    title: 'Dual-Tone Acrylic Modular Kitchen with Breakfast Bar',
    category: 'Modular Kitchen',
    location: 'Manikonda, Hyderabad',
    src: '/customized-home-kitchen.jpg',
    alt: 'Bespoke Acrylic Finish Modular Kitchen with Integrated Pantry Pull-Outs',
  },
  {
    id: 8,
    title: 'Whimsical Kids Bedroom with Study Suite and Loft Storage',
    category: 'Bedroom & Wardrobe',
    location: 'Kompally, Hyderabad',
    src: '/category-kids-room.jpg',
    alt: 'Custom Kids Bedroom with Ergonomic Study Table and Bunk Bed',
  },
  {
    id: 9,
    title: 'Architectural Fluted Room Divider with Brass Planters',
    category: 'Living Room',
    location: 'Madhapur, Hyderabad',
    src: '/category-partition.jpg',
    alt: 'Decorative Wooden Slat Room Divider between Foyer and Living Room',
  },
  {
    id: 10,
    title: 'Backlit Translucent Corian & Brass Jaali Pooja Mandir',
    category: 'Dining & Pooja',
    location: 'Nallagandla, Hyderabad',
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85',
    alt: 'Custom CNC Laser Cut Pooja Room with Warm Halo Ambient Illumination',
  },
  {
    id: 11,
    title: 'Minimalist Japandi Living Room with Travertine Table',
    category: 'Living Room',
    location: 'Jubilee Hills, Hyderabad',
    src: '/contemporary-interior-hyderabad.jpg',
    alt: 'Japandi Style Living Room with Natural Teak Wood and Warm Neutral Palette',
  },
  {
    id: 12,
    title: 'Scandinavian Walk-In Dresser with Backlit Vanity Mirror',
    category: 'Bedroom & Wardrobe',
    location: 'Hitec City, Hyderabad',
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    alt: 'Walk-In Wardrobe with Integrated LED Shelves and Island Jewelry Drawer',
  },
  {
    id: 13,
    title: 'L-Shaped Handleless Matte Black & Warm Oak Kitchen',
    category: 'Modular Kitchen',
    location: 'Kondapur, Hyderabad',
    src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85',
    alt: 'Modern Kitchen with Soft-Close Blum Drawers and Quartz Backsplash',
  },
  {
    id: 14,
    title: 'Hotel-Luxury Guest Bedroom with Wood Slat Wall & Sconces',
    category: 'Bedroom & Wardrobe',
    location: 'Banjara Hills, Hyderabad',
    src: '/faq-bedroom-hero.jpg',
    alt: 'Luxury Bedroom with Accent Timber Paneling and Designer Pendant Lighting',
  },
  {
    id: 15,
    title: 'Monochromatic Marble Dining Area with Wine Console Bar',
    category: 'Dining & Pooja',
    location: 'Kokapet, Hyderabad',
    src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1000&q=85',
    alt: 'Open Concept Dining Room with Custom Bar Cabinet and Wine Rack',
  },
  {
    id: 16,
    title: 'Modern Living Space with Linear False Ceiling Cove Lighting',
    category: 'Living Room',
    location: 'Gachibowli, Hyderabad',
    src: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=85',
    alt: 'Gypsum False Ceiling with Indirect Cove Lighting and Magnetic Track Spots',
  },
  {
    id: 17,
    title: 'Bespoke Foyer Entryway Console with Backlit Circular Mirror',
    category: 'Living Room',
    location: 'Jubilee Hills, Hyderabad',
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    alt: 'Floating Foyer Console Table with Fluted Base and LED Mirror',
  },
  {
    id: 18,
    title: 'Compact German Modular Kitchen with Tall Pantry Pullout',
    category: 'Modular Kitchen',
    location: 'Miyapur, Hyderabad',
    src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=85',
    alt: 'Ergonomic 2BHK Modular Kitchen with Overhead Hydraulic Lift-Up Shutters',
  },
  {
    id: 19,
    title: 'Primary Bedroom Suite with Integrated Dressing Unit',
    category: 'Bedroom & Wardrobe',
    location: 'Tellapur, Hyderabad',
    src: 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1000&q=85',
    alt: 'Contemporary Bedroom with Wooden Flooring and Tailored Dresser Console',
  },
  {
    id: 20,
    title: 'Luxury Villa Formal Lounge with Velvet Armchairs',
    category: 'Living Room',
    location: 'Gandipet, Hyderabad',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Bespoke Living Lounge with Emerald Green Velvet Chairs and Coffee Table',
  },
  {
    id: 21,
    title: 'Contemporary Island Kitchen with Smoked Glass Cabinets',
    category: 'Modular Kitchen',
    location: 'Financial District, Hyderabad',
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=85',
    alt: 'High-Gloss Island Kitchen with Fluted Smoked Glass Lift-Up Modules',
  },
  {
    id: 22,
    title: 'Minimalist Teak Wood Mandir with CNC Floral Lattice Screen',
    category: 'Dining & Pooja',
    location: 'Banjara Hills, Hyderabad',
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85',
    alt: 'Sacred Pooja Unit with Solid Teakwood Pillars and Integrated Diya Drawers',
  },
  {
    id: 23,
    title: 'Master Bedroom with Velvet Acoustic Tufted Wall Paneling',
    category: 'Bedroom & Wardrobe',
    location: 'Kokapet, Hyderabad',
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85',
    alt: 'Luxury Master Bedroom with Custom Acoustic Wall Padding and Soft Drapes',
  },
  {
    id: 24,
    title: 'Turnkey Family Living Lounge with Italian Marble Floor',
    category: 'Living Room',
    location: 'Manikonda, Hyderabad',
    src: '/personalized-dream-home.jpg',
    alt: 'Family Living Area with Comfortable Seating and Natural Lighting',
  },
];

/* ─── PROJECT WISE APARTMENT & VILLA HANDOVERS ─── */
const ALL_PROJECT_IMAGES: GalleryItem[] = [
  {
    id: 101,
    title: '4BHK Signature Villa Handover — Jayabheri The Summit',
    category: 'Living Room',
    location: 'Narsingi, Hyderabad',
    src: '/personalized-dream-home.jpg',
    alt: 'Luxury 4BHK Villa Project Handover at Jayabheri The Summit Narsingi',
  },
  {
    id: 102,
    title: '3BHK High-Rise Apartment — My Home Bhooja',
    category: 'Modular Kitchen',
    location: 'Hitec City, Hyderabad',
    src: '/customized-home-kitchen.jpg',
    alt: 'Completed 3BHK Modular Kitchen and Woodwork at My Home Bhooja',
  },
  {
    id: 103,
    title: 'Bespoke Penthouse Master Suite — Aparna One',
    category: 'Bedroom & Wardrobe',
    location: 'Shaikpet, Hyderabad',
    src: '/category-bedroom.jpg',
    alt: 'Luxury Master Bedroom at Aparna One Shaikpet',
  },
  {
    id: 104,
    title: 'Turnkey Luxury Villa — Boulder Hills Golf Community',
    category: 'Living Room',
    location: 'Gachibowli, Hyderabad',
    src: '/category-living.jpg',
    alt: 'Completed Living Room at Boulder Hills Gachibowli',
  },
  {
    id: 105,
    title: 'Modern 3.5BHK Apartment — Rajapushpa Atria',
    category: 'Dining & Pooja',
    location: 'Kokapet, Hyderabad',
    src: '/category-dining.jpg',
    alt: 'Dining Space and Pooja Room at Rajapushpa Atria Kokapet',
  },
  {
    id: 106,
    title: 'Contemporary 4BHK Villa — Muppa Alankrita',
    category: 'Bedroom & Wardrobe',
    location: 'Tellapur, Hyderabad',
    src: '/faq-bedroom-hero.jpg',
    alt: 'Contemporary Bedroom at Muppa Alankrita Tellapur',
  },
  {
    id: 107,
    title: 'Gourmet Acrylic Modular Kitchen — DSR The First',
    category: 'Modular Kitchen',
    location: 'Gachibowli, Hyderabad',
    src: '/category-kitchen.jpg',
    alt: 'Acrylic Kitchen at DSR The First Gachibowli',
  },
  {
    id: 108,
    title: 'Full-Height Sliding Wardrobes — Prestige High Fields',
    category: 'Bedroom & Wardrobe',
    location: 'Financial District, Hyderabad',
    src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=85',
    alt: 'Sliding Wardrobes at Prestige High Fields Financial District',
  },
  {
    id: 109,
    title: 'Executive Living Room & Entertainment Lounge — SAS Crown',
    category: 'Living Room',
    location: 'Kokapet, Hyderabad',
    src: '/contemporary-interior-hyderabad.jpg',
    alt: 'Executive Entertainment Lounge at SAS Crown Kokapet',
  },
  {
    id: 110,
    title: 'Custom Kids Fantasy Bedroom — My Home Avatar',
    category: 'Bedroom & Wardrobe',
    location: 'Narsingi, Hyderabad',
    src: '/category-kids-room.jpg',
    alt: 'Custom Kids Bedroom at My Home Avatar Narsingi',
  },
  {
    id: 111,
    title: 'Designer Foyer Partition & Shoe Suite — Lansum Etania',
    category: 'Living Room',
    location: 'Gachibowli, Hyderabad',
    src: '/category-partition.jpg',
    alt: 'Foyer Partition and Shoe Storage at Lansum Etania',
  },
  {
    id: 112,
    title: 'Happy Homeowners Handover Ceremony — Anjani Infra',
    category: 'Living Room',
    location: 'Hyderabad Experience Center',
    src: '/homeowner-handover-joy.jpg',
    alt: 'Client Handover Celebration by Anjani Infra Team',
  },
];

/* ─── VIDEO WALKTHROUGHS & CLIENT PROJECT STORIES ─── */
const VIDEO_GALLERY_ITEMS: VideoGalleryItem[] = [
  {
    id: 201,
    title: '4BHK Luxury Villa Interior Walkthrough — Jubilee Hills',
    duration: '4:15 min',
    location: 'Jubilee Hills, Hyderabad',
    thumbnail: '/contemporary-interior-hyderabad.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Take a cinematic walk through this 5,500 sq.ft villa featuring custom Italian Statuario marble, acoustic media louvers, and German motorized kitchen cabinetry.',
  },
  {
    id: 202,
    title: '3BHK Contemporary Apartment Handover — Gachibowli',
    duration: '3:45 min',
    location: 'Gachibowli, Hyderabad',
    thumbnail: '/customized-home-kitchen.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'See how our design team optimized compact spaces with floor-to-ceiling tinted sliding wardrobes, pull-out tandem pantries, and cove lighting.',
  },
  {
    id: 203,
    title: 'Master Suite & Walk-In Wardrobe Tour — Kokapet',
    duration: '2:50 min',
    location: 'Kokapet, Hyderabad',
    thumbnail: '/category-bedroom.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Explore the master bedroom with fluted acoustic paneling, integrated dressing console, and jewelry organizer drawers with soft-close motion sensors.',
  },
  {
    id: 204,
    title: 'Gourmet Acrylic Modular Kitchen Showcase — Banjara Hills',
    duration: '3:10 min',
    location: 'Banjara Hills, Hyderabad',
    thumbnail: '/category-kitchen.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Detailed inspection of Blum servo-drive motorized lift-ups, boiling waterproof marine plywood, and 40mm Calacatta quartz countertops.',
  },
  {
    id: 205,
    title: 'Bespoke Dining Suite & Backlit Pooja Mandir — Tellapur',
    duration: '2:30 min',
    location: 'Tellapur, Hyderabad',
    thumbnail: '/category-dining.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Walkthrough of a sacred CNC Corian pooja mandir and 8-seater live-edge dining table tailored for a joint family.',
  },
  {
    id: 206,
    title: 'Client Testimonial & 40-Day Delivery Experience — Narsingi',
    duration: '3:20 min',
    location: 'Narsingi, Hyderabad',
    thumbnail: '/homeowner-handover-joy.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Listen to Mr. & Mrs. Sharma share their turnkey interior experience from 3D designs to final on-time key handover with Anjani Infra.',
  },
];

const GALLERY_CATEGORIES = [
  {
    id: 'video',
    label: 'VIDEO',
    sublabel: 'GALLERY',
    description: 'Experience photorealistic 3D virtual walkthroughs and real video handovers of completed luxury apartments and villas across Hyderabad.',
    image: '/contemporary-interior-hyderabad.jpg',
    isVideo: true,
  },
  {
    id: 'interior',
    label: 'INTERIOR',
    sublabel: 'GALLERY',
    description: 'Explore 100% customized modular kitchens, bespoke master suites, modern living spaces, and luxury wardrobes crafted for contemporary homes.',
    image: '/category-kitchen.jpg',
    isVideo: false,
  },
  {
    id: 'project',
    label: 'PROJECT WISE',
    sublabel: 'GALLERY',
    description: 'Browse turnkey completed projects room-by-room across Hyderabad premier communities in Banjara Hills, Gachibowli, Jubilee Hills, and Kokapet.',
    image: '/category-bedroom.jpg',
    isVideo: false,
  },
];

const ROOM_FILTERS = ['All', 'Living Room', 'Modular Kitchen', 'Bedroom & Wardrobe', 'Dining & Pooja'] as const;

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'video' | 'interior' | 'project'>('interior');
  const [roomFilter, setRoomFilter] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [lightboxImg, setLightboxImg] = useState<GalleryItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoGalleryItem | null>(null);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

  // Filter items based on active tab and room category
  const rawList = activeTab === 'project' ? ALL_PROJECT_IMAGES : ALL_INTERIOR_IMAGES;
  const filteredImages = roomFilter === 'All'
    ? rawList
    : rawList.filter((item) => item.category === roomFilter);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleTabChange = (tabId: 'video' | 'interior' | 'project') => {
    setActiveTab(tabId);
    setRoomFilter('All');
    setVisibleCount(8);
    setTimeout(() => {
      document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <InteriorEstimateModal isOpen={isEstimateOpen} onClose={() => setIsEstimateOpen(false)} />

      {/* ── Lightbox for Photos with Best Title & Room Details ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="w-full flex-1 overflow-hidden max-h-[70vh] bg-black/50 flex items-center justify-center">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Caption & Details matching user request */}
            <div className="w-full p-5 sm:p-6 bg-gradient-to-r from-[#132B3E] to-[#1F3D55] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059] text-[#132B3E] font-black text-[10px] uppercase tracking-wider">
                    {lightboxImg.category}
                  </span>
                  <span className="text-xs text-[#DFBA73] font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {lightboxImg.location}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {lightboxImg.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setLightboxImg(null);
                    setIsEstimateOpen(true);
                  }}
                  className="px-5 py-2 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-bold text-xs uppercase tracking-wider rounded-lg shadow transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Get Free 3D Estimate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Video Player Modal ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 bg-[#132B3E] text-white space-y-2">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider">
                <Video className="w-4 h-4" />
                <span>{activeVideo.duration}</span>
                <span>•</span>
                <span>{activeVideo.location}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{activeVideo.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── 1. HERO BANNER MATCHING SCREENSHOT 1 ── */}
      <section className="relative w-full h-[420px] sm:h-[500px] lg:h-[560px] overflow-hidden bg-gray-900 flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/category-living.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />
        </div>

        <div className="relative max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 z-10">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight font-sans">
              Your Home. Our Designs
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-100">
              Expertly Crafted Interiors by Professionals
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. ACTUAL PROJECT PHOTOGRAPHS CARDS MATCHING SCREENSHOT 2 & 3 ── */}
      <section className="bg-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">
          
          <div className="text-center mb-12 sm:mb-16 space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-widest uppercase font-sans">
              Actual Project Photographs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-xl mx-auto">
              Real homes designed and delivered with precision German engineering, 10-year warranty, and 40-day handover guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {cat.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-[#C5A059] text-[#132B3E] shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-7 h-7 fill-current ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider border border-white/20">
                      {cat.label}
                    </span>
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-1 items-center text-center space-y-4">
                  <h3 className="text-2xl font-black text-gray-900 tracking-wider uppercase leading-tight font-sans group-hover:text-[#2B5573] transition-colors">
                    {cat.label}<br />{cat.sublabel}
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed flex-1">
                    {cat.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleTabChange(cat.id as any)}
                    className="mt-2 px-8 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] text-xs font-black uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>View Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. GALLERY PHOTO GRID WITH BEST TITLE & RELATED IMAGES ── */}
      <section id="gallery-grid" className="bg-gray-50/70 py-16 sm:py-24">
        <div className="max-w-[1340px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Title + Main Category Tabs (VIDEO / INTERIOR / PROJECT WISE) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {activeTab === 'interior' && (<>Interior <strong className="text-[#C5A059]">Gallery</strong></>)}
                {activeTab === 'project'  && (<>Project Wise <strong className="text-[#C5A059]">Gallery</strong></>)}
                {activeTab === 'video'    && (<>Video Walkthrough <strong className="text-[#C5A059]">Gallery</strong></>)}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {activeTab === 'video'
                  ? 'Click any video card below to watch the client project walkthrough'
                  : `Showing ${filteredImages.length} curated luxury photographs with best titles`}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id as any)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    activeTab === cat.id
                      ? 'bg-[#132B3E] text-[#C5A059] border-[#132B3E] shadow-sm'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-[#C5A059] hover:text-[#2B5573]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Room Sub-filters for Interior & Project Tabs */}
          {activeTab !== 'video' && (
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
              <span className="text-xs font-bold uppercase text-gray-400 mr-2 shrink-0">Filter By Room:</span>
              {ROOM_FILTERS.map((room) => (
                <button
                  key={room}
                  type="button"
                  onClick={() => {
                    setRoomFilter(room);
                    setVisibleCount(8);
                  }}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer shrink-0 border ${
                    roomFilter === room
                      ? 'bg-[#C5A059] text-[#132B3E] border-[#C5A059] shadow-xs'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {room}
                </button>
              ))}
            </div>
          )}

          {/* ──────────────── Video Gallery View (When Video Tab Selected) ──────────────── */}
          {activeTab === 'video' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {VIDEO_GALLERY_ITEMS.map((vid) => (
                <div
                  key={vid.id}
                  onClick={() => setActiveVideo(vid)}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-900">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#C5A059] text-[#132B3E] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-bold">
                      <Video className="w-3 h-3 text-[#C5A059]" />
                      <span>{vid.duration}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-xs text-[#DFBA73] font-semibold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{vid.location}</span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {vid.description}
                    </p>
                    <div className="pt-2 text-xs font-bold text-[#C5A059] flex items-center gap-1">
                      <span>Watch Full Walkthrough</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ──────────────── Photo Gallery Grid with Best Titles & Related Images ──────────────── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {displayedImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxImg(img)}
                  className="group bg-white rounded-xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Room Category Badge on Top Left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider border border-white/20">
                        {img.category}
                      </span>
                    </div>

                    {/* Hover Zoom Overlay matching D'LIFE */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 w-12 h-12 rounded-full bg-[#132B3E]/90 border border-[#C5A059] text-white flex items-center justify-center shadow-lg">
                        <ZoomIn className="w-5 h-5 text-[#C5A059]" />
                      </div>
                    </div>

                    {/* Discreet Watermark */}
                    <div className="absolute bottom-1.5 left-2 text-white/70 text-[9px] font-light tracking-tight pointer-events-none select-none drop-shadow">
                      © Anjani Infra
                    </div>
                  </div>

                  {/* Best Title & Location Card Footer matching user request */}
                  <div className="p-3.5 bg-white space-y-1 border-t border-gray-100">
                    <div className="text-[11px] font-semibold text-[#C5A059] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
                      <span className="truncate">{img.location}</span>
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 group-hover:text-[#2B5573] transition-colors leading-snug line-clamp-2">
                      {img.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── LOAD MORE BUTTON — matching D'LIFE screenshot ── */}
          {activeTab !== 'video' && hasMore && (
            <div className="flex justify-center sm:justify-end mt-10">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Load More</span>
                <ChevronDown className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── 4. FREE DESIGN CONSULTATION CALL TO ACTION ── */}
      <section className="bg-gradient-to-r from-[#132B3E] via-[#1A374D] to-[#132B3E] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DFBA73] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Turnkey Home Interiors Across Hyderabad</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Inspired by Our Actual Project Photographs?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get 100% customized modular furniture tailored to your floor plan with 3D virtual walkthroughs, 10-year comprehensive warranty, and direct factory manufacturing.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsEstimateOpen(true)}
              className="px-8 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-wider rounded-lg shadow-xl hover:scale-105 transition-all cursor-pointer"
            >
              Get Free Design &amp; Cost Estimate
            </button>
            <a
              href="tel:+918388899999"
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-white/20 transition-colors"
            >
              Call +91 83888 99999
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}