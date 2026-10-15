'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles, Eye, Phone, Maximize2 } from 'lucide-react';

export interface CategoryPhoto {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

export interface CategoryData {
  key: string;
  name: string;
  tagline: string;
  description: string;
  photos: CategoryPhoto[];
}

export const CATEGORY_GALLERIES: Record<string, CategoryData> = {
  kitchen: {
    key: 'kitchen',
    name: 'Modular & Island Kitchens',
    tagline: 'Precision German Joinery & Chef-Grade Layouts',
    description: 'Explore 20 bespoke modular kitchen architecture designs featuring marble waterfall islands, handleless Blum joinery, and smart pantry suites.',
    photos: [
      { id: 1, title: 'One Oak Duplex Chef Kitchen', subtitle: 'Gandipet • Double Island with Quartz Waterfall', src: '/projects/one-oak/pages/page_12.jpg' },
      { id: 2, title: 'Northstar Allura Luxury Kitchen', subtitle: 'Kokapet • High-Gloss Acrylic & Statuario Marble', src: '/projects/northstar-allura/watermarked/northstar_12.jpg' },
      { id: 3, title: 'Northstar Allura Chef Suite', subtitle: 'Kokapet • Handleless Soft-Close German Cabinetry', src: '/projects/northstar-allura/watermarked/northstar_13.jpg' },
      { id: 4, title: 'Temple Tree Villa 16 Kitchen', subtitle: 'Narsingi • Upper Ground Gourmet Island Counter', src: '/projects/temple-tree-villa-16/watermarked/villa16_07.jpg' },
      { id: 5, title: 'Temple Tree Villa 16 Pantry', subtitle: 'Narsingi • Built-in German Appliances & Breakfast Bar', src: '/projects/temple-tree-villa-16/watermarked/villa16_08.jpg' },
      { id: 6, title: 'Parallel Island Kitchen', subtitle: 'Banjara Hills • Dual Preparation Zones & Quartz', src: '/category-kitchen.jpg' },
      { id: 7, title: 'Sandy Natural Oak Island', subtitle: 'Jubilee Hills • Natural Fluted Timber & White Quartz', src: '/kitchen/kitchen_hero_banner.jpg' },
      { id: 8, title: 'Niagara Deep Navy Island', subtitle: 'Financial District • Marine Blue & Polished Brass Trims', src: '/kitchen/island_kitchen_2.jpg' },
      { id: 9, title: 'Beige Cashmere L-Shape Kitchen', subtitle: 'Hitec City • Lacquer Worktops & Overhead Lift-Ups', src: '/kitchen/l_shape_kitchen_1.jpg' },
      { id: 10, title: 'Talisman Nordic Elm Kitchen', subtitle: 'Kondapur • Pure White Quartz & Concealed LEDs', src: '/kitchen/l_shape_kitchen_2.jpg' },
      { id: 11, title: 'Mauve Textured U-Shape Kitchen', subtitle: 'Tellapur • Soft Taupe Cabinetry & Waterfall Island', src: '/kitchen/u_shape_kitchen_1.jpg' },
      { id: 12, title: 'Misty Fog Grey Parallel Kitchen', subtitle: 'Gachibowli • Handleless Channels & Sintered Stone', src: '/kitchen/parallel_kitchen_1.jpg' },
      { id: 13, title: 'Ivory High-Gloss Parallel Suite', subtitle: 'Kokapet • Champagne Ivory Polygloss & Counter', src: '/kitchen/parallel_kitchen_2.jpg' },
      { id: 14, title: 'Glossy Diamond Straight Kitchen', subtitle: 'Madhapur • Ultra Gloss Finish & Backlit Backsplash', src: '/kitchen/straight_kitchen_1.jpg' },
      { id: 15, title: 'Excalibur Smoked Oak Kitchen', subtitle: 'Manikonda • Charcoal Marquina Marble & Fluted Wood', src: '/kitchen/straight_kitchen_2.jpg' },
      { id: 16, title: 'Dual-Tone Acrylic Modular Kitchen', subtitle: 'Nallagandla • Integrated Pantry Pull-Out Units', src: '/customized-home-kitchen.jpg' },
      { id: 17, title: 'Matte Anthracite German Joinery', subtitle: 'Banjara Hills • Soft-Close Blum Hardware & Island', src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85' },
      { id: 18, title: 'Ergonomic High-Rise Kitchen', subtitle: 'Miyapur • Overhead Hydraulic Lift-Up Cabinets', src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85' },
      { id: 19, title: 'Smoked Glass Showcase Kitchen', subtitle: 'Kokapet • Fluted Bronze Glass & Backlit Niches', src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=85' },
      { id: 20, title: 'One Oak Secondary Wet Kitchen', subtitle: 'Gandipet • Chef Utility & Stainless Steel Fittings', src: '/projects/one-oak/pages/page_13.jpg' }
    ]
  },
  living: {
    key: 'living',
    name: 'Luxury Living Lounges & Salons',
    tagline: 'Double-Height Volumes & Italian Marble Paneling',
    description: 'Explore 20 curated formal drawing rooms, double-height living salons, and bespoke entertainment media walls.',
    photos: [
      { id: 1, title: 'One Oak Double-Height Drawing Room', subtitle: 'Gandipet • 32ft Formal Lounge & Lake View Deck', src: '/projects/one-oak/pages/page_03.jpg' },
      { id: 2, title: 'One Oak Penthouse Living Salon', subtitle: 'Gandipet • Italian Statuario Marble & Low Profiles', src: '/projects/one-oak/pages/page_04.jpg' },
      { id: 3, title: 'One Oak Floating Marble TV Credenza', subtitle: 'Gandipet • Fluted Acoustic Wall & Ambient Cove LEDs', src: '/projects/one-oak/pages/page_05.jpg' },
      { id: 4, title: 'One Oak Mezzanine Terrace Viewing Deck', subtitle: 'Gandipet • Panoramic Lake Gandipet Balcony Deck', src: '/projects/one-oak/pages/page_06.jpg' },
      { id: 5, title: 'One Oak Reading Nook & Staircase', subtitle: 'Gandipet • Cantilevered Metal Stair & Study Library', src: '/projects/one-oak/pages/page_07.jpg' },
      { id: 6, title: 'Northstar Allura Double-Height Living', subtitle: 'Kokapet • Statuario Feature Wall & 20ft Chandelier', src: '/projects/northstar-allura/watermarked/northstar_01.jpg' },
      { id: 7, title: 'Northstar Allura Marble TV Console', subtitle: 'Kokapet • Fluted Timber Louvers & Concealed Cable Ducts', src: '/projects/northstar-allura/watermarked/northstar_02.jpg' },
      { id: 8, title: 'Northstar Allura CNC Jaali Partition', subtitle: 'Kokapet • Foyer Transition & Custom Brass Planters', src: '/projects/northstar-allura/watermarked/northstar_03.jpg' },
      { id: 9, title: 'Northstar Allura Upper Family Lounge', subtitle: 'Kokapet • Plush Velvet Seating & Mood Downlights', src: '/projects/northstar-allura/watermarked/northstar_04.jpg' },
      { id: 10, title: 'Northstar Allura Acoustic Home Cinema', subtitle: 'Kokapet • Fabric Sound Panels & Tiered Recliners', src: '/projects/northstar-allura/watermarked/northstar_05.jpg' },
      { id: 11, title: 'Northstar Allura Formal Grand Saloon', subtitle: 'Kokapet • Bespoke Coffee Tables & Curated Rugs', src: '/projects/northstar-allura/watermarked/northstar_06.jpg' },
      { id: 12, title: 'Temple Tree Villa 16 Grand Living', subtitle: 'Narsingi • Double-Height Void & Marble Flooring', src: '/projects/temple-tree-villa-16/watermarked/villa16_01.jpg' },
      { id: 13, title: 'Temple Tree Villa 16 Entertainment Wall', subtitle: 'Narsingi • Floating TV Console & Fluted Acoustic Slat', src: '/projects/temple-tree-villa-16/watermarked/villa16_02.jpg' },
      { id: 14, title: 'Temple Tree Villa 16 Sectional Lounge', subtitle: 'Narsingi • Low-Profile Designer Velvet Couches', src: '/projects/temple-tree-villa-16/watermarked/villa16_03.jpg' },
      { id: 15, title: 'Temple Tree Villa 16 Biophilic Foyer', subtitle: 'Narsingi • Vertical Preserved Moss Wall Cladding', src: '/projects/temple-tree-villa-16/watermarked/villa16_04.jpg' },
      { id: 16, title: 'Temple Tree Villa 16 Bar & Party Lounge', subtitle: 'Narsingi • Quartz Island Bar & Stemware Cabinetry', src: '/projects/temple-tree-villa-16/watermarked/villa16_13.jpg' },
      { id: 17, title: 'Temple Tree Villa 16 Private Bar Counter', subtitle: 'Narsingi • High-Gloss Finish & Under-Counter Chillers', src: '/projects/temple-tree-villa-16/watermarked/villa16_14.jpg' },
      { id: 18, title: 'Temple Tree Villa 16 Mood Lounge', subtitle: 'Narsingi • Ambient Cove Lighting & Leather Barstools', src: '/projects/temple-tree-villa-16/watermarked/villa16_15.jpg' },
      { id: 19, title: 'Contemporary Open-Concept Living Room', subtitle: 'Jubilee Hills • Textured Bouclé Sofa & Travertine', src: '/category-living.jpg' },
      { id: 20, title: 'Waterfront Estate Living Pavilion', subtitle: 'Gandipet • Double-Height Glass Curtain Elevation', src: '/luxury-home-interior-living-room.jpg' }
    ]
  },
  dining: {
    key: 'dining',
    name: 'Dining Suites & Crockery Architecture',
    tagline: 'Banquet Spaces, Crockery Units & Sacred Pooja Sanctums',
    description: 'Explore 20 bespoke dining environments featuring bookmatched marble tables, full-height crockery showcases, and teakwood pooja mandirs.',
    photos: [
      { id: 1, title: 'One Oak Lake-Facing Open Dining Room', subtitle: 'Gandipet • Panoramic Lake Deck & 8-Seater Suite', src: '/projects/one-oak/pages/page_09.jpg' },
      { id: 2, title: 'One Oak Statuario Marble Dining Table', subtitle: 'Gandipet • Custom Brass Trestle & Upholstered Chairs', src: '/projects/one-oak/pages/page_10.jpg' },
      { id: 3, title: 'One Oak Backlit Crockery Showcase', subtitle: 'Gandipet • Full-Height Bronze Glass & LED Shelves', src: '/projects/one-oak/pages/page_11.jpg' },
      { id: 4, title: 'Northstar Allura Formal 8-Seater Dining', subtitle: 'Kokapet • Sculptural Chandelier & Marble Inlay Floor', src: '/projects/northstar-allura/watermarked/northstar_07.jpg' },
      { id: 5, title: 'Northstar Allura Dining Bar Console', subtitle: 'Kokapet • Integrated Wine Refrigerator & Fluted Storage', src: '/projects/northstar-allura/watermarked/northstar_08.jpg' },
      { id: 6, title: 'Temple Tree Villa 16 Formal Dining', subtitle: 'Narsingi • 8-Seater Suite Facing Courtyard Garden', src: '/projects/temple-tree-villa-16/watermarked/villa16_09.jpg' },
      { id: 7, title: 'Temple Tree Villa 16 Crystal Chandelier', subtitle: 'Narsingi • Architectural False Ceiling Halo Cove', src: '/projects/temple-tree-villa-16/watermarked/villa16_10.jpg' },
      { id: 8, title: 'Temple Tree Villa 16 Dining Perspective', subtitle: 'Narsingi • Garden Glazing & Custom Sideboards', src: '/projects/temple-tree-villa-16/watermarked/villa16_11.jpg' },
      { id: 9, title: 'Temple Tree Villa 16 Crockery Showcase', subtitle: 'Narsingi • Illuminated Display with Mirrored Backing', src: '/projects/temple-tree-villa-16/watermarked/villa16_12.jpg' },
      { id: 10, title: 'Modern Quartz Dining Suite', subtitle: 'Kokapet • Contemporary Oval Table with Brass Accents', src: '/category-dining.jpg' },
      { id: 11, title: 'Floating Marble Top 6-Seater Table', subtitle: 'Madhapur • Walnut Base with Ergonomic Highback Chairs', src: '/projects/bhavyas-eugen-madhapur/pages/page_05.jpg' },
      { id: 12, title: 'Tinted-Glass Crockery & Bar Showcase', subtitle: 'Madhapur • Warm Architectural 3000K Lighting', src: '/projects/bhavyas-eugen-madhapur/pages/page_06.jpg' },
      { id: 13, title: 'Monochromatic Marble Dining & Wine Bar', subtitle: 'Tellapur • Open Plan Wine Console & Stemware Storage', src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85' },
      { id: 14, title: 'Backlit Corian & Brass Pooja Mandir', subtitle: 'Banjara Hills • CNC Laser Lattice & Spiritual Niches', src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
      { id: 15, title: 'Teakwood CNC Floral Lattice Mandir', subtitle: 'Jubilee Hills • Solid Teak Pillars & Integrated Diya Drawers', src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85' },
      { id: 16, title: 'Palatial 10-Seater Banquet Dining', subtitle: 'Financial District • Executive Entertaining Suite', src: '/dining/dining_hero_banner.jpg' },
      { id: 17, title: 'Solid Teak 8-Seater Architectural Set', subtitle: 'Gachibowli • Natural Matte Finish & Beveled Edge', src: '/dining/dining_8seater.jpg' },
      { id: 18, title: 'Compact 6-Seater Modern Dining', subtitle: 'Kondapur • Quartz Surface with Slim Tapered Legs', src: '/dining/dining_6seater.jpg' },
      { id: 19, title: 'Wall-Mounted Fluted Crockery Credenza', subtitle: 'Tellapur • Soft-Touch Handleless Drawers & Marble Top', src: '/dining/crockery_unit.jpg' },
      { id: 20, title: 'Traditional Sacred Brass Mandir Sanctum', subtitle: 'Kokapet • Intricate Jali Detailing & Holy Altar', src: '/dining/pooja_unit.jpg' }
    ]
  },
  bedroom: {
    key: 'bedroom',
    name: 'Master Bedroom & Wardrobe Suites',
    tagline: 'Private Sanctuaries, Walk-In Closets & Slat Paneling',
    description: 'Explore 20 bespoke bedroom suites, walk-in dressing salons, fluted timber headboards, and children study workstations.',
    photos: [
      { id: 1, title: 'One Oak Palatial Master Suite', subtitle: 'Gandipet • Floating King Platform Bed & Slat Paneling', src: '/projects/one-oak/pages/page_21.jpg' },
      { id: 2, title: 'One Oak Acoustic Fluted Timber Wall', subtitle: 'Gandipet • Integrated Bedside Lighting & Reading Lights', src: '/projects/one-oak/pages/page_22.jpg' },
      { id: 3, title: 'One Oak Bronze Glass Walk-In Wardrobe', subtitle: 'Gandipet • Sensor Activated Internal LED Profiles', src: '/projects/one-oak/pages/page_23.jpg' },
      { id: 4, title: 'One Oak Master Dressing Vanity Salon', subtitle: 'Gandipet • Touch-Sensor Illuminated Circular Mirror', src: '/projects/one-oak/pages/page_24.jpg' },
      { id: 5, title: 'One Oak Junior Suite Bay Window Bed', subtitle: 'Gandipet • Window Daybed Seating & Study Workstation', src: '/projects/one-oak/pages/page_25.jpg' },
      { id: 6, title: 'One Oak Guest Bedroom Suite', subtitle: 'Gandipet • Neutral Upholstered Acoustic Slat Paneling', src: '/projects/one-oak/pages/page_26.jpg' },
      { id: 7, title: 'One Oak Floor-to-Ceiling Wardrobes', subtitle: 'Gandipet • High-Gloss Acrylic Finish with Loft Storage', src: '/projects/one-oak/pages/page_27.jpg' },
      { id: 8, title: 'One Oak Bedside Nook & Floating Drawers', subtitle: 'Gandipet • Teakwood Veneer Details & Wireless Chargers', src: '/projects/one-oak/pages/page_28.jpg' },
      { id: 9, title: 'Northstar Allura Master Bedroom Suite', subtitle: 'Kokapet • Fluted Timber Acoustic Headboard & Louvers', src: '/projects/northstar-allura/watermarked/northstar_09.jpg' },
      { id: 10, title: 'Northstar Allura Walk-In Dressing Area', subtitle: 'Kokapet • Tinted Glass Sliding Wardrobes & Island', src: '/projects/northstar-allura/watermarked/northstar_10.jpg' },
      { id: 11, title: 'Master Suite with Full-Height Headboard', subtitle: 'Gachibowli • Bespoke Fluted Headboard & Warm Lighting', src: '/category-bedroom.jpg' },
      { id: 12, title: 'Whimsical Children Study & Bedroom Suite', subtitle: 'Kompally • Ergonomic Dual Workstation & Bunk Storage', src: '/category-kids-room.jpg' },
      { id: 13, title: 'Hotel-Luxury Guest Suite with Sconces', subtitle: 'Banjara Hills • Accent Timber Cladding & Pendant Lamps', src: '/faq-bedroom-hero.jpg' },
      { id: 14, title: 'Grand Master Suite with Private Balcony', subtitle: 'Jubilee Hills • French Windows & Tufted King Bed', src: '/bedroom/bedroom_hero_banner.jpg' },
      { id: 15, title: 'Contemporary King Platform Bed Suite', subtitle: 'Tellapur • Suede Headboard & Integrated Nightstands', src: '/bedroom/master_bedroom_1.jpg' },
      { id: 16, title: 'Minimalist Walnut Bedroom Suite', subtitle: 'Financial District • Warm Woodgrains & Drop Pendants', src: '/bedroom/master_bedroom_2.jpg' },
      { id: 17, title: 'Full-Height Tinted Glass Sliding Wardrobe', subtitle: 'Kokapet • Bronze Anodized Frames & Soft-Close Sliders', src: '/bedroom/wardrobe_sliding_1.jpg' },
      { id: 18, title: 'Walk-In Wardrobe with Jewelry Island', subtitle: 'Hitec City • Glass-Top Pullouts & Velvet Organizers', src: '/bedroom/wardrobe_walkin_1.jpg' },
      { id: 19, title: 'Serene Guest Bedroom Suite', subtitle: 'Madhapur • Neutral Acoustic Padding & Warm Cove Lights', src: '/bedroom/guest_bedroom_1.jpg' },
      { id: 20, title: 'Ergonomic Dual-Station Children Bedroom', subtitle: 'Nallagandla • Integrated Bookcases & Geometry Desks', src: '/bedroom/kids_bedroom_1.jpg' }
    ]
  },
  commercial: {
    key: 'commercial',
    name: 'Corporate Commercial Workplaces',
    tagline: 'High-Performance Offices, Boardrooms & Experience Centres',
    description: 'Explore 20 corporate workspaces featuring Italian marble receptions, executive suites, conference facilities, and collaborative pods.',
    photos: [
      { id: 1, title: 'Team 4 Arka Reception Lobby', subtitle: 'Lanco Hills • Italian Marble Desk & Backlit Feature', src: '/projects/arka-office/pages/page_01.jpg' },
      { id: 2, title: 'Team 4 Arka Corporate Brand Feature', subtitle: 'Lanco Hills • Illuminated Architectural Brand Wall', src: '/projects/arka-office/pages/page_02.jpg' },
      { id: 3, title: 'Team 4 Arka Scale-Model Display Plinth', subtitle: 'Lanco Hills • Custom Circular Marble Presentation Plinth', src: '/projects/arka-office/pages/page_03.jpg' },
      { id: 4, title: 'Team 4 Arka Executive Boardroom Suite', subtitle: 'Lanco Hills • Smart Glass & Integrated Video Conference', src: '/projects/arka-office/pages/page_04.jpg' },
      { id: 5, title: 'Team 4 Arka Acoustic Executive Cabins', subtitle: 'Lanco Hills • Fluted Timber Paneling & Black Metal Glass', src: '/projects/arka-office/pages/page_05.jpg' },
      { id: 6, title: 'Team 4 Arka Casual Breakout Lounge', subtitle: 'Lanco Hills • Geometric Bookcase & Soft Seating Clusters', src: '/projects/arka-office/pages/page_06.jpg' },
      { id: 7, title: 'Team 4 Arka Employee Daycare Suite', subtitle: 'Lanco Hills • Progressive In-Office Family Activity Zone', src: '/projects/arka-office/pages/page_07.jpg' },
      { id: 8, title: 'Collaborative Open-Plan Workstation Floor', subtitle: 'Hitec City • Linear Architectural Track LED Profiles', src: '/commercial-interior-office.jpg' },
      { id: 9, title: 'Commercial Structural Curtain Wall Facade', subtitle: 'Financial District • High-Performance Double Glazed System', src: '/commercial-glass-elevation.jpg' },
      { id: 10, title: 'Corporate Headquarters Civil Engineering', subtitle: 'Gachibowli • High-Rise Concrete Frame Superstructure', src: '/hero-civil-construction.jpg' },
      { id: 11, title: 'Tech Headquarters Modern Atrium', subtitle: 'Madhapur • Triple-Height Reception & Glass Elevator', src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85' },
      { id: 12, title: 'Agile Collaborative Workspace', subtitle: 'Hitec City • Ergonomic Desks & Acoustic Ceiling Baffles', src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85' },
      { id: 13, title: 'Executive Conference Room', subtitle: 'Kokapet • 24-Seater Table & Overhead Linear Luminaires', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85' },
      { id: 14, title: 'C-Suite Executive Cabin', subtitle: 'Financial District • American Walnut Desk & Leather Sofa', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85' },
      { id: 15, title: 'Corporate Townhall Auditorium', subtitle: 'Jubilee Hills • Tiered Upholstered Seating & Audio Stage', src: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=85' },
      { id: 16, title: 'Focus Pod & Brainstorming Niche', subtitle: 'Gachibowli • Soundproof Glass Enclosure & Screen', src: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=1200&q=85' },
      { id: 17, title: 'Corporate Cafeteria & Lounge', subtitle: 'Kondapur • Industrial Chic Finishes & Communal Seating', src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=85' },
      { id: 18, title: 'Biophilic Living Wall Waiting Area', subtitle: 'Tellapur • Natural Air-Purifying Plants & Teak Benches', src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=85' },
      { id: 19, title: 'High-Tech Financial Trading Floor', subtitle: 'Nanakramguda • Dual-Monitor Ergonomic Desking System', src: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=85' },
      { id: 20, title: 'Corporate Training Suite', subtitle: 'Banjara Hills • Reconfigurable Modular Desks & Projector', src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85' }
    ]
  },
  retail: {
    key: 'retail',
    name: 'Flagship Retail & Boutique Showrooms',
    tagline: 'Luxury Experience Centres, Boutiques & Commercial Showrooms',
    description: 'Explore 20 luxury commercial retail spaces featuring frameless structural glazing, brass vitrines, and custom terrazzo flooring.',
    photos: [
      { id: 1, title: 'Anjani Infra Experience Showroom', subtitle: 'Narsingi • Flagship Materials Library & Mockups', src: '/anjani-branch-showroom.jpg' },
      { id: 2, title: 'AURA Luxury Retail Flagship', subtitle: 'Road No. 36 Jubilee Hills • Structural Glazing & Terrazzo', src: '/luxury-interior-fitout-jubilee-hills.jpg' },
      { id: 3, title: 'Couture Fashion Flagship Boutique', subtitle: 'Jubilee Hills • Solid Brass Inlays & Curved Portals', src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85' },
      { id: 4, title: 'Fine Jewellery Private Salon', subtitle: 'Banjara Hills • Anti-Reflective Glass & Velvet Displays', src: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=85' },
      { id: 5, title: 'Designer Apparel Experience Store', subtitle: 'Gachibowli • Terrazzo Flooring & Brushed Gold Fixtures', src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=85' },
      { id: 6, title: 'Haute Horlogerie Timepiece Salon', subtitle: 'Kokapet • Micro-Spotlights & Security Vitrines', src: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=85' },
      { id: 7, title: 'Minimalist Architectural Flagship', subtitle: 'Hitec City • Continuous Monolithic Microtopping Floors', src: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85' },
      { id: 8, title: 'Luxury Perfumery & Cosmetics Bar', subtitle: 'Tellapur • Backlit Fluted Acrylic Display Shelves', src: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1200&q=85' },
      { id: 9, title: 'Bespoke Furniture Display Gallery', subtitle: 'Madhapur • Architectural Vignette Room Settings', src: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1200&q=85' },
      { id: 10, title: 'Artisanal Delicatessen & Wine Cellar', subtitle: 'Jubilee Hills • Climate Controlled Display Cases', src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=85' },
      { id: 11, title: 'Showroom Cash Desk Reception', subtitle: 'Banjara Hills • Floating Italian Marble Counter & Logo Wall', src: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=85' },
      { id: 12, title: 'Handcrafted Footwear & Leather Suite', subtitle: 'Financial District • Soft Under-Shelf Illumination', src: 'https://images.unsplash.com/photo-1519642918688-7e43b19245d8?auto=format&fit=crop&w=1200&q=85' },
      { id: 13, title: 'Luxury Wellness Experience Suite', subtitle: 'Tellapur • Ambient Water Features & Slat Walls', src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85' },
      { id: 14, title: 'Sanitaryware & Tile Showroom Gallery', subtitle: 'Kondapur • Sliding Exhibition Screens & Samples', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=85' },
      { id: 15, title: 'VIP Styling Suite & Fitting Salon', subtitle: 'Jubilee Hills • Plush Velvet Curtains & Full-Height Mirrors', src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85' },
      { id: 16, title: 'Frameless Glass Shopfront Portal', subtitle: 'Kokapet • Double-Height Entryway & Recessed Lighting', src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85' },
      { id: 17, title: 'Illuminated Product Display Plinths', subtitle: 'Banjara Hills • Geometric Lacquered Pedestals', src: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=85' },
      { id: 18, title: 'Showroom Consultation Lounge', subtitle: 'Narsingi • Fluted Oak Cladding & Marble Coffee Table', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85' },
      { id: 19, title: 'Boutique Foyer & Brand Feature Wall', subtitle: 'Madhapur • Brushed Brass Lettering & Warm Backlight', src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85' },
      { id: 20, title: 'Home Automation Experience Showroom', subtitle: 'Kokapet • Interactive DALI Lighting & Smart Control Demos', src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' }
    ]
  }
};

interface CategoryGalleryModalProps {
  isOpen: boolean;
  activeCategoryKey: string | null;
  onClose: () => void;
  onOpenEstimate: (categoryTitle: string) => void;
}

export function CategoryGalleryModal({
  isOpen,
  activeCategoryKey,
  onClose,
  onOpenEstimate,
}: CategoryGalleryModalProps) {
  const [selectedKey, setSelectedKey] = useState<string>('kitchen');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  // Sync selected key when modal opens with a specific category
  useEffect(() => {
    if (activeCategoryKey && CATEGORY_GALLERIES[activeCategoryKey]) {
      setSelectedKey(activeCategoryKey);
    }
    setLightboxIdx(null);
  }, [activeCategoryKey, isOpen]);

  const activeCategory = CATEGORY_GALLERIES[selectedKey] || CATEGORY_GALLERIES.kitchen;
  const photos = activeCategory.photos;

  const handleNextPhoto = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? (prev + 1) % photos.length : 0));
  }, [photos.length]);

  const handlePrevPhoto = useCallback(() => {
    setLightboxIdx((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : 0));
  }, [photos.length]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setLightboxIdx(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIdx !== null) {
          setLightboxIdx(null);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight' && lightboxIdx !== null) {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft' && lightboxIdx !== null) {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, lightboxIdx, handleNextPhoto, handlePrevPhoto, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-between text-[#e8e4de] animate-fade-in select-none">
      
      {/* ── Fixed Sticky Top Header Bar ── */}
      <header className="px-5 sm:px-8 py-5 border-b border-white/10 bg-[#0c0c0c] flex items-center justify-between gap-4 shrink-0 z-30 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
            <span>SELECTED ARCHITECTURAL ARCHIVE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#fafaf8] font-normal leading-tight mt-0.5">
            {activeCategory.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#b8b3ab] mt-0.5 hidden sm:block font-light">
            {activeCategory.description}
          </p>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          <div className="text-xs font-mono text-[#c9a96e] px-3 py-1.5 rounded-full border border-[#c9a96e]/30 bg-[#c9a96e]/10 hidden md:inline-block">
            {photos.length} PHOTOGRAPHS
          </div>

          <button
            type="button"
            onClick={() => onOpenEstimate(activeCategory.name)}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-widest uppercase transition-all shadow-md cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get Estimate</span>
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#181818] hover:bg-[#c9a96e] text-[#fafaf8] hover:text-black transition-colors border border-white/10 cursor-pointer shadow-md"
            aria-label="Close Gallery"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ── Main Scrollable Area: 2 Large Photos Side-by-Side ("One by One Beside") ── */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 space-y-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Side-by-Side 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setLightboxIdx(idx)}
                className="group relative bg-[#121212] border border-white/10 hover:border-[#c9a96e] rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
              >
                {/* Large Photo Display (Side-by-Side) */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-black overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-100 contrast-105"
                  />
                  
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                  {/* Photo Index Badge */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#c9a96e] font-semibold shadow-md">
                    #{String(idx + 1).padStart(2, '0')} / {photos.length}
                  </div>

                  {/* Zoom Action on Hover */}
                  <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[#c9a96e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Label Panel */}
                <div className="p-4 sm:p-5 bg-[#121212] flex flex-col justify-between border-t border-white/10 group-hover:bg-[#161616] transition-colors">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors font-medium">
                      {photo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#b8b3ab] font-sans tracking-wide mt-1">
                      {photo.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#c9a96e]">
                    <span className="tracking-widest uppercase font-semibold text-[11px]">CLICK TO ZOOM FULLSCREEN</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#c9a96e]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="text-[11px] font-mono text-[#c9a96e] tracking-widest uppercase mb-1">
                EXCLUSIVELY CUSTOMIZED FOR HYDERABAD RESIDENCES
              </div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8]">
                Ready to execute this {activeCategory.name} concept in your home?
              </h4>
              <p className="text-xs sm:text-sm text-[#b8b3ab] mt-1">
                Book a consultation with our principal architects for direct factory pricing &amp; 3D visualization.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenEstimate(activeCategory.name)}
              className="px-8 py-3.5 rounded bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-[0.2em] uppercase transition-all shadow-xl shrink-0 cursor-pointer"
            >
              BOOK ARCHITECT CONSULTATION
            </button>
          </div>

        </div>
      </div>

      {/* ── Fullscreen High-Resolution Zoom Lightbox (When any image is clicked) ── */}
      {lightboxIdx !== null && photos[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[10000] bg-black/98 flex flex-col justify-between animate-fade-in select-none"
          onClick={() => setLightboxIdx(null)}
        >
          {/* Lightbox Topbar */}
          <div
            className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 bg-black/80 backdrop-blur-md z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#c9a96e]">
                <span>PHOTO {lightboxIdx + 1} OF {photos.length}</span>
                <span>•</span>
                <span>{activeCategory.name}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-2xl text-[#fafaf8] mt-0.5">
                {photos[lightboxIdx].title}
              </h3>
              <p className="text-xs text-[#999999] mt-0.5">
                {photos[lightboxIdx].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenEstimate(`${activeCategory.name} - ${photos[lightboxIdx].title}`)}
                className="px-4 py-2 rounded bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-lg hidden sm:inline-flex"
              >
                Enquire This Design
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c9a96e] hover:text-black text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Fullscreen View"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image with Prev/Next buttons */}
          <div
            className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-4 sm:left-8 z-30 w-12 h-12 rounded-full bg-black/75 hover:bg-[#c9a96e] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative max-w-[92vw] max-h-[78vh] flex items-center justify-center">
              <img
                src={photos[lightboxIdx].src}
                alt={photos[lightboxIdx].title}
                className="max-w-full max-h-[78vh] object-contain rounded shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-4 sm:right-8 z-30 w-12 h-12 rounded-full bg-black/75 hover:bg-[#c9a96e] text-white hover:text-black border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Footer */}
          <div
            className="p-4 bg-black/80 border-t border-white/10 text-center text-xs text-[#999999] flex flex-col sm:flex-row items-center justify-between px-6 z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="hidden sm:inline">Use Arrow Keys (← / →) to navigate • ESC to return</span>
            <span className="text-[#c9a96e] font-sans font-semibold tracking-wider">
              {photos[lightboxIdx].title} &bull; {photos[lightboxIdx].subtitle}
            </span>
            <button
              type="button"
              onClick={() => onOpenEstimate(`${activeCategory.name} - ${photos[lightboxIdx].title}`)}
              className="mt-2 sm:mt-0 text-[#c9a96e] hover:text-white font-bold uppercase tracking-wider cursor-pointer"
            >
              Get Free Estimate &rarr;
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
