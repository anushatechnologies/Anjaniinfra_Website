'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ProjectItem } from '@/data/projects';
import { X, ChevronLeft, ChevronRight, ExternalLink, Eye, Sparkles, Maximize2 } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

interface ModernMatrixPortfolioProps {
  projects: ProjectItem[];
}

interface ProjectPhotoDetail {
  title: string;
  subtitle: string;
}

const PROJECT_PHOTO_DETAILS: Record<number, ProjectPhotoDetail[]> = {
  // 1: One Oak - Sky Villa
  1: [
    { title: 'Grand Entrance Foyer & Vestibule', subtitle: 'Gandipet • Italian Statuario Marble & Ambient Lighting' },
    { title: 'Double-Height Lakeview Drawing Room', subtitle: 'Gandipet • 32ft Formal Lounge Overlooking Lake' },
    { title: 'Italian Statuario Marble Living Salon', subtitle: 'Gandipet • Custom Bouclé Seating & Low Profiles' },
    { title: 'Floating TV Credenza & Feature Wall', subtitle: 'Gandipet • Fluted Acoustic Timber Slat Paneling' },
    { title: 'Panoramic Mezzanine Terrace Deck', subtitle: 'Gandipet • Lake Gandipet Viewing Balcony' },
    { title: 'Architectural Staircase & Reading Lounge', subtitle: 'Gandipet • Cantilevered Metal Stair & Library' },
    { title: 'Double-Height Dining Suite', subtitle: 'Gandipet • 8-Seater Suite Overlooking Lake Deck' },
    { title: 'Statuario Marble Dining Table', subtitle: 'Gandipet • Custom Brass Trestle & Upholstered Chairs' },
    { title: 'Full-Height Bronze Glass Crockery Showcase', subtitle: 'Gandipet • Sensor Activated LED Illumination' },
    { title: 'Chef-Grade Modular Kitchen with Island', subtitle: 'Gandipet • Quartz Waterfall Island Counter' },
    { title: 'Secondary Wet Kitchen & Utility Area', subtitle: 'Gandipet • Stainless Steel Fittings & Storage' },
    { title: 'Intimate Upper Level Family Lounge', subtitle: 'Gandipet • Plush Velvet Sectional Seating' },
    { title: 'Palatial Master Bedroom Sanctuary', subtitle: 'Gandipet • Floating King Platform & Acoustic Wall' },
    { title: 'Walk-In Dressing Area & Wardrobes', subtitle: 'Gandipet • Bronze Tinted Glass & Internal LEDs' },
    { title: 'Luxury Guest Bedroom & Study Suite', subtitle: 'Gandipet • Integrated Workspace & Tailored Joinery' },
  ],
  // 2: Northstar Allura
  2: [
    { title: 'Double-Height Grand Living Salon', subtitle: 'Kokapet • Statuario TV Wall & Wall Mouldings' },
    { title: 'Formal Living Media Console', subtitle: 'Kokapet • Plush Velvet Sectional & Designer Lighting' },
    { title: 'Luxury 8-Seater Dining Space', subtitle: 'Kokapet • Sculptural Chandelier & Curved Back Seating' },
    { title: 'Dining Suite & Designer Mirror', subtitle: 'Kokapet • Arched Backlit Mirror & Built-in Buffet' },
    { title: 'Gourmet Dining Panorama', subtitle: 'Kokapet • Full Height Drapes & Marble Credenza' },
    { title: 'Dining Area & Service Counter', subtitle: 'Kokapet • Bespoke Joinery & Designer Pendants' },
    { title: 'Designer Modular Wet Kitchen', subtitle: 'Kokapet • Precision Acrylic Cabinetry & Dishwasher' },
    { title: 'Cooking Prep Station & Hob', subtitle: 'Kokapet • Quartz Waterfall Counter & Tile Backsplash' },
    { title: 'Contemporary Teak & Brass Mandir', subtitle: 'Kokapet • Laser-Cut Jaali Screen & Marble Altar' },
    { title: 'Private Home Cinema Lounge', subtitle: 'Kokapet • Acoustically Engineered Fabric Wall Panels' },
    { title: 'Cinema Seating & Downlights', subtitle: 'Kokapet • Tiered Motorised Recliner Seating' },
    { title: '1st Floor Family Gathering Suite', subtitle: 'Kokapet • Curved Bouclé Sofa & Cove Lighting' },
    { title: 'Central Family Retreat & Arch', subtitle: 'Kokapet • Arched French Door Feature & Sheer Drapes' },
    { title: 'Entertainment Lounge Corner', subtitle: 'Kokapet • Warm Accent Lighting & Circular Rug' },
    { title: 'Living & Transition Corridor', subtitle: 'Kokapet • Concealed Architectural HVAC & Clean Joinery' },
    { title: 'Children Theme Suite (Spider-Man)', subtitle: 'Kokapet • Backlit 3D Wall Art & Custom Wardrobes' },
    { title: 'Second Floor Bedroom Suite', subtitle: 'Kokapet • Tufted Headboard & Ambient Cove Illumination' },
    { title: '2nd Floor Reading Lounge', subtitle: 'Kokapet • Low-Profile Seating & Panoramic Glazing' },
    { title: 'Wooden Decked Terrace Garden', subtitle: 'Kokapet • Weatherproof Decking & Outdoor Pergola' },
    { title: 'Open-Air Sunset Terrace Lounge', subtitle: 'Kokapet • Designer Outdoor Lounge Furniture' },
  ],
  // 3: Vellanki Penthouse
  3: [
    { title: 'Grand Living Room TV Media Wall', subtitle: 'Kondapur • Bookmatched Italian Marble & Backlit Niches' },
    { title: 'Full Living Salon & Sectional Lounge', subtitle: 'Kondapur • Bespoke Seating & Sculptural Chandelier' },
    { title: 'Living Lounge & Balcony Deck', subtitle: 'Kondapur • Skyline Views & Double-Glazed Sliding Doors' },
    { title: 'Designer Dining Lounge Suite', subtitle: 'Kondapur • Marble Top Dining Table & Contemporary Chairs' },
    { title: 'Master Bedroom Sanctuary', subtitle: 'Kondapur • Botanical Wall Mural & King Platform Bed' },
    { title: 'Master Dressing Table & Media Unit', subtitle: 'Kondapur • Arched Backlit Mirror & Floating Console' },
    { title: 'Guest Bedroom Sanctuary', subtitle: 'Kondapur • Fluted Acoustic Wall & Upholstered Headboard' },
    { title: 'Guest Suite Tinted Glass Wardrobe', subtitle: 'Kondapur • Full-Height Bronze Glass Sliding Wardrobe' },
    { title: 'Guest Suite Floating Nightstands', subtitle: 'Kondapur • Concealed Cove Lighting & Side Console' },
    { title: 'Contemporary Bedroom Suite', subtitle: 'Kondapur • Hexagonal Geometric Accent Wall & Platform Bed' },
    { title: 'Integrated Study Workstation', subtitle: 'Kondapur • Ergonomic Desk & Illuminated Bookshelves' },
    { title: 'Walk-In Shoe & Vanity Storage', subtitle: 'Kondapur • Custom Glass-Front Cabinetry' },
    { title: 'Custom Wardrobe Joinery Suite', subtitle: 'Kondapur • Full-Height Minimalist Wardrobe Units' },
    { title: 'Bedroom Suite Lighting & Detail', subtitle: 'Kondapur • Warm Architectural Downlights & Paneling' },
    { title: 'Modular Kitchen & Breakfast Bar', subtitle: 'Kondapur • Quartz Waterfall Counter & German Joinery' },
    { title: 'Kitchen Prep Station & Tall Units', subtitle: 'Kondapur • Built-in Oven & Acrylic Soft-Close Cabinetry' },
  ],
  // 4: Team 4 Arka
  4: [
    { title: 'Frontal Reception Lobby & Marble Desk', subtitle: 'Lanco Hills • Bookmatched Italian Marble & ARKA Wall' },
    { title: 'Executive Reception Lounge & Acoustic Slats', subtitle: 'Lanco Hills • Timber Slats & Velvet Seating' },
    { title: 'Scale-Model Experience Plinth', subtitle: 'Lanco Hills • Circular Marble Plinth & Recessed Dome' },
    { title: 'In-Office Employee Daycare & Play Zone', subtitle: 'Lanco Hills • Family Activity Zone & Glass Partitions' },
  ],
  // 5: Jayabheri Temple Tree
  5: [
    { title: 'Entrance Foyer & Planters', subtitle: 'Kokapet • Fluted Acoustic Wall Cladding & Planter Console' },
    { title: 'Formal Drawing Room & Biophilic Wall', subtitle: 'Kokapet • Preserved Moss Wall & Armchair Seating' },
    { title: 'Grand Living Area Panorama', subtitle: 'Kokapet • Double-Height Void & Italian Marble Flooring' },
    { title: 'Living Salon & Screen Partition', subtitle: 'Kokapet • Teakwood Wall Feature & Open Display' },
    { title: 'Living Lounge Seating Perspective', subtitle: 'Kokapet • Sectional Seating & Circular Art Feature' },
    { title: 'Floating TV Credenza & Media Wall', subtitle: 'Kokapet • Fluted Wood Slat Paneling & Marble Console' },
    { title: 'Private Bar Island & Stemware Showcase', subtitle: 'Kokapet • Backlit Wine Display & Quartz Counter' },
    { title: 'Bar Lounge Social Entertainment Area', subtitle: 'Kokapet • Ambient Lighting & Adjoining Living Area' },
    { title: 'Upper Floor Lift Lounge & Feature Wall', subtitle: 'Kokapet • Sculptural Travertine Wall Art & Staircase' },
    { title: 'Upper Floor Lift Lounge Seating Area', subtitle: 'Kokapet • Relaxed Seating & Ambient Downlighting' },
    { title: 'Gourmet Kitchen & Dining Suite', subtitle: 'Kokapet • Quartz Waterfall Island & 8-Seater Dining' },
  ],
  // 6: Bhavya's Eugen
  6: [
    { title: 'Italian Marble TV Credenza & Mandir', subtitle: 'Madhapur • Sacred Prayer Niche & Stone Finish' },
    { title: 'Formal Seating Lounge', subtitle: 'Madhapur • Fluted Oak Cladding & Acoustic Wing Wall' },
    { title: 'Living Hall TV Feature Wall', subtitle: 'Madhapur • Fluted Timber Slat Paneling & Media Console' },
    { title: 'Living Hall & Dining Partition', subtitle: 'Madhapur • Minimalist Screen Partition & Italian Tiles' },
    { title: 'Opulent 6-Seater Dining Suite', subtitle: 'Madhapur • Marble Top Dining Table & Modern Chandelier' },
    { title: 'Dining Showcase & Bar Unit', subtitle: 'Madhapur • Full-Height Backlit Tinted-Glass Cabinetry' },
    { title: 'Palatial Master Bedroom Suite', subtitle: 'Madhapur • Floating King Bed & Curved LED Cove' },
    { title: 'Master Bedroom Study Station', subtitle: 'Madhapur • Executive Workstation & Accent Seating' },
    { title: 'Master Dressing Table & Wardrobes', subtitle: 'Madhapur • Integrated Joinery & Mood Lighting' },
    { title: 'Master Suite Architectural Perspective', subtitle: 'Madhapur • Fluted Panelling & Ambient Cove' },
    { title: 'Emerald Lounge Suite', subtitle: 'Madhapur • Curated Curved Armchairs & Circular Area Rug' },
    { title: 'Living Lounge Slat Feature Wall', subtitle: 'Madhapur • Fluted Timber & Concealed Air Conditioning' },
    { title: 'Turnkey Living Hall Panorama', subtitle: 'Madhapur • Open Plan Luxury Architectural Layout' },
    { title: 'Second Bedroom Designer Suite', subtitle: 'Madhapur • Custom Soft-Panelled Headboard & Wardrobes' },
  ],
};


export function ModernMatrixPortfolio({ projects }: ModernMatrixPortfolioProps) {
  // Modal & Lightbox state
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [isEstimateOpen, setIsEstimateOpen] = useState<boolean>(false);
  const [estimateScope, setEstimateScope] = useState<string>('Luxury Villa Interior');

  const activeProject = activeProjectIdx !== null ? projects[activeProjectIdx] : null;
  const projectImages = activeProject
    ? activeProject.gallery && activeProject.gallery.length > 0
      ? activeProject.gallery
      : [activeProject.image]
    : [];

  const photoDetails = activeProject ? PROJECT_PHOTO_DETAILS[activeProject.id] || [] : [];

  const handleOpenProjectModal = (projectIndex: number) => {
    setActiveProjectIdx(projectIndex);
    setLightboxIdx(null);
  };

  const handleCloseProjectModal = () => {
    setActiveProjectIdx(null);
    setLightboxIdx(null);
  };

  const handleNextPhoto = useCallback(() => {
    if (!projectImages.length) return;
    setLightboxIdx((prev) => (prev !== null ? (prev + 1) % projectImages.length : 0));
  }, [projectImages.length]);

  const handlePrevPhoto = useCallback(() => {
    if (!projectImages.length) return;
    setLightboxIdx((prev) =>
      prev !== null ? (prev - 1 + projectImages.length) % projectImages.length : projectImages.length - 1
    );
  }, [projectImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (activeProjectIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (lightboxIdx !== null) {
          setLightboxIdx(null);
        } else {
          handleCloseProjectModal();
        }
      } else if (e.key === 'ArrowRight' && lightboxIdx !== null) {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft' && lightboxIdx !== null) {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectIdx, lightboxIdx, handleNextPhoto, handlePrevPhoto]);

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    if (activeProjectIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeProjectIdx]);

  return (
    <>
      {/* ──────────────── PORTFOLIO SECTION ──────────────── */}
      <section id="portfolio" className="py-10 sm:py-14 bg-[#0a0a0a] text-[#e8e4de] relative overflow-hidden scroll-mt-20">
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <div className="mm-eyebrow">SELECTED PROJECTS</div>
              <h2 className="mm-title !mb-3">
                Spaces We&apos;ve <em>Transformed</em>
              </h2>
              <p className="text-sm sm:text-base text-[#d6d3cd] max-w-xl leading-relaxed">
                Explore our portfolio of bespoke penthouses, architectural villas, and corporate headquarters crafted across Hyderabad.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/projects"
                className="mm-btn py-3 px-6 text-[11px]"
              >
                <span>VIEW ALL ARCHIVES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Portfolio Display: Centerpiece showcase when 1 project, 2-col balanced when 2, 3-col grid when 3+ */}
          <div className={projects.length === 1 ? "max-w-2xl mx-auto w-full" : projects.length === 2 ? "grid grid-cols-2 max-w-5xl mx-auto gap-3 sm:gap-6 lg:gap-8" : "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"}>
            {projects.slice(0, 6).map((project, index) => {
              const photoCount = project.gallery?.length || 1;
              return (
                <div
                  key={project.id}
                  onClick={() => handleOpenProjectModal(index)}
                  className="group relative bg-[#161616] border border-white/15 hover:border-[#c9a96e]/70 transition-all duration-300 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-xl hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
                >
                  {/* Image Container - 100% Crystal Clear Without Dark/Fuzzy Overlays */}
                  <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Subtle bottom gradient only for edge separation */}
                    <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

                    {/* Curated Photo count badge */}
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#0a0a0a]/90 border border-white/20 text-[#e8e4de] px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-sans font-medium tracking-wider rounded-full flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                      <span>{photoCount} photos</span>
                    </div>

                    {/* Hover Quick Action Badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/25">
                      <div className="bg-[#0a0a0a] border border-[#c9a96e] text-[#c9a96e] px-4 py-2 text-xs font-sans tracking-[0.2em] uppercase flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-xl">
                        <Eye className="w-3.5 h-3.5" />
                        <span>EXPLORE GALLERY</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-3 sm:p-6 bg-[#161616] flex flex-col justify-between flex-grow border-t border-white/10 group-hover:bg-[#181818] transition-colors">
                    <div>
                      <div className="text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#c9a96e] font-sans font-semibold mb-1 truncate">
                        {project.location} &bull; {project.category}
                      </div>
                      <h3 className="font-serif text-sm sm:text-xl lg:text-2xl text-[#fafaf8] group-hover:text-[#c9a96e] transition-colors leading-snug font-normal line-clamp-1">
                        {project.name}
                      </h3>
                    </div>

                    <div className="pt-2 sm:pt-4 mt-2 sm:mt-4 border-t border-white/10 flex items-center justify-between text-[10px] sm:text-xs text-[#d6d3cd]">
                      <span className="tracking-wider font-normal truncate">{project.area || 'Turnkey Execution'}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenProjectModal(index);
                        }}
                        className="text-[#c9a96e] hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 font-semibold cursor-pointer shrink-0 ml-1"
                      >
                        <span className="hidden sm:inline">VIEW PHOTOS</span>
                        <span>&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────── 2-COLUMN SIDE-BY-SIDE PROJECT PHOTOS MODAL ──────────────── */}
      {/* Opens like curated projects, NOT like raw PDF slides */}
      {activeProject && (
        <div className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-between text-[#e8e4de] animate-fade-in select-none">
          
          {/* ── Fixed Sticky Top Header Bar ── */}
          <header className="px-5 sm:px-8 py-5 border-b border-white/10 bg-[#0c0c0c] flex items-center justify-between gap-4 shrink-0 z-30 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#c9a96e] uppercase">
                <span className="w-2 h-2 rounded-full bg-[#c9a96e] animate-pulse" />
                <span>PROJECT ARCHITECTURAL ARCHIVE</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#fafaf8] font-normal leading-tight mt-0.5">
                {activeProject.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#b8b3ab] mt-0.5 hidden sm:block font-light">
                {activeProject.location} &bull; {activeProject.area || activeProject.type}
              </p>
            </div>

            {/* Right Action Controls */}
            <div className="flex items-center gap-3">


              <button
                type="button"
                onClick={() => {
                  setEstimateScope(activeProject.name);
                  setIsEstimateOpen(true);
                }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-widest uppercase transition-all shadow-md cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={handleCloseProjectModal}
                className="p-2.5 rounded-full bg-[#181818] hover:bg-[#c9a96e] text-[#fafaf8] hover:text-black transition-colors border border-white/10 cursor-pointer shadow-md"
                aria-label="Close Project Gallery"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </header>

          {/* ── Main Scrollable Area: 2 Large Photos Side-by-Side ("One by One Beside") ── */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 space-y-8">
            <div className="max-w-7xl mx-auto">
              
              {/* Side-by-Side 2-Column Grid (2 per row on mobile & desktop) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8">
                {projectImages.map((imgSrc, idx) => {
                  const detail = photoDetails[idx] || {
                    title: `${activeProject.name} - Space ${idx + 1}`,
                    subtitle: `${activeProject.location} • Turnkey Interior Execution`,
                  };

                  return (
                    <div
                      key={idx}
                      onClick={() => setLightboxIdx(idx)}
                      className="group relative aspect-[16/10] sm:aspect-[16/11] w-full bg-black border border-white/10 hover:border-[#c9a96e] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,169,110,0.3)]"
                    >
                      <img
                        src={imgSrc}
                        alt={detail.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-100 contrast-105"
                      />

                      {/* Zoom Action on Hover */}
                      <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-[#c9a96e] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Consultation CTA */}
              <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1a1a1a] to-[#141414] border border-[#c9a96e]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                <div>
                  <div className="text-[11px] font-mono text-[#c9a96e] tracking-widest uppercase mb-1">
                    EXCLUSIVELY CUSTOMIZED FOR HYDERABAD RESIDENCES
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#fafaf8]">
                    Ready to execute this {activeProject.name} concept in your home?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#b8b3ab] mt-1">
                    Book a consultation with our principal architects for direct factory pricing &amp; 3D visualization.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEstimateScope(activeProject.name);
                    setIsEstimateOpen(true);
                  }}
                  className="px-8 py-3.5 rounded bg-[#c9a96e] hover:bg-[#dfc698] text-black text-xs font-bold font-sans tracking-[0.2em] uppercase transition-all shadow-xl shrink-0 cursor-pointer"
                >
                  BOOK ARCHITECT CONSULTATION
                </button>
              </div>

            </div>
          </div>

          {/* ── Fullscreen High-Resolution Zoom Lightbox (When any image is clicked) ── */}
          {lightboxIdx !== null && projectImages[lightboxIdx] && (
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
                    <span>PHOTO {lightboxIdx + 1} OF {projectImages.length}</span>
                    <span>•</span>
                    <span>{activeProject.name}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl text-[#fafaf8] mt-0.5">
                    {photoDetails[lightboxIdx]?.title || `${activeProject.name} - Space ${lightboxIdx + 1}`}
                  </h3>
                  <p className="text-xs text-[#999999] mt-0.5">
                    {photoDetails[lightboxIdx]?.subtitle || `${activeProject.location} • Turnkey Interior Fitout`}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setEstimateScope(`${activeProject.name} - Photo ${lightboxIdx + 1}`);
                      setIsEstimateOpen(true);
                    }}
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
                    src={projectImages[lightboxIdx]}
                    alt={photoDetails[lightboxIdx]?.title || activeProject.name}
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
                <span className="hidden sm:inline">Use Arrow Keys (&larr; / &rarr;) to navigate &bull; ESC to return</span>
                <span className="text-[#c9a96e] font-sans font-semibold tracking-wider">
                  {photoDetails[lightboxIdx]?.title || activeProject.name} &bull; {photoDetails[lightboxIdx]?.subtitle || activeProject.location}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEstimateScope(`${activeProject.name} - Photo ${lightboxIdx + 1}`);
                    setIsEstimateOpen(true);
                  }}
                  className="mt-2 sm:mt-0 text-[#c9a96e] hover:text-white font-bold uppercase tracking-wider cursor-pointer"
                >
                  Get Free Estimate &rarr;
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* ── Estimate Consultation Modal ── */}
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
        defaultPackage={estimateScope}
      />
    </>
  );
}
