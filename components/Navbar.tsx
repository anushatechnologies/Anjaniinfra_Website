'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown, Sparkles, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

const locationsList = [
  'BENGALURU', 'KERALA', 'CHENNAI', 'COIMBATORE', 'MANGALURU',
  'HYDERABAD', 'PUNE', 'NAVI MUMBAI', 'MUMBAI', 'UAE', 'AHMEDABAD', 'GURGAON', 'NOIDA'
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#hamburger-more-menu')) {
        setIsMoreMenuOpen(false);
      }
    };
    if (isMoreMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMoreMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* ──────────────── 1. Top Ribbon ──────────────── */}
      <div className="bg-[#132B3E] text-gray-200 text-[11px] font-semibold tracking-wider py-1.5 px-4 lg:px-10 border-b border-white/10 relative z-50">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-white uppercase font-bold tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] inline-block animate-pulse"></span>
              HYDERABAD
            </span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300 hidden md:inline">BANJARA HILLS</span>
            <span className="text-gray-500 hidden md:inline">•</span>
            <span className="text-gray-300 hidden md:inline">GACHIBOWLI</span>
            <span className="text-gray-500 hidden md:inline">•</span>
            <span className="text-gray-300 hidden md:inline">KOMPALLY</span>
            <span className="text-gray-500 hidden md:inline">•</span>
            <span className="text-gray-300 hidden md:inline">LB NAGAR</span>
          </div>

          {/* Call Now Button (Luxury Gold Button matching website theme) */}
          <a
            href="tel:+918388899999"
            className="shrink-0 flex items-center gap-1.5 bg-[#C5A059] hover:bg-[#DFBA73] text-[#132B3E] px-4 py-1 rounded-full text-[11px] font-extrabold tracking-wider transition-all shadow-sm"
          >
            <Phone className="w-3 h-3 fill-current" />
            <span>CALL NOW</span>
          </a>

        </div>
      </div>

      {/* ──────────────── 2. Main Sticky Navigation ──────────────── */}
      <header
        className={`sticky top-0 left-0 w-full z-40 bg-white border-b border-gray-200 transition-all duration-200 ${
          isScrolled ? 'shadow-md py-0' : 'py-0'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-8">
          
          {/* Left: Anjani Infra Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 py-2 group">
            <img
              src="/anjani-logo.png"
              alt="Anjani Infra — Dream • Build • Grow"
              className="h-11 sm:h-13 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Center / Right: Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[12px] font-bold uppercase tracking-wider text-gray-800">
            <Link href="/" className="hover:text-[#2B5573] py-5 transition-colors">
              HOME
            </Link>

            <Link href="/company" className="hover:text-[#2B5573] py-5 transition-colors">
              COMPANY
            </Link>

            {/* WHAT WE DO Dropdown */}
            <div 
              className="relative group py-5"
              onMouseEnter={() => setActiveDropdown('whatwedo')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#2B5573] transition-colors uppercase font-bold tracking-wider">
                <span>WHAT WE DO</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Gold accent indicator bar above dropdown */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C5A059] hidden group-hover:block" />

              {/* Dropdown Menu matching website style */}
              <div className="absolute top-full left-0 w-64 bg-white border-t-2 border-[#C5A059] border-x border-b border-gray-100 shadow-2xl py-0 hidden group-hover:block animate-fade-in z-50">
                <Link 
                  href="/customized-interiors" 
                  className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors"
                >
                  CUSTOMIZED INTERIORS
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link 
                  href="/design-and-build" 
                  className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors"
                >
                  DESIGN AND BUILD
                </Link>
              </div>
            </div>

            {/* PRODUCTS Dropdown */}
            <div 
              className="relative group py-5"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 hover:text-[#2B5573] transition-colors uppercase font-bold tracking-wider">
                <span>PRODUCTS</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Gold accent indicator bar above dropdown */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C5A059] hidden group-hover:block" />

              {/* Dropdown matching website style */}
              <div className="absolute top-full left-0 w-64 bg-white border-t-2 border-[#C5A059] border-x border-b border-gray-100 shadow-2xl py-0 hidden group-hover:block animate-fade-in z-50">
                <Link href="/products/kitchen" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  KITCHEN
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link href="/products/bedroom" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  BEDROOM
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link href="/products/dining-room" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  DINING ROOM
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link href="/products/living-room" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  LIVING ROOM
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link href="/products/decorative-units" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  DECORATIVE UNITS
                </Link>
                <div className="h-[1px] bg-gray-200 w-full" />
                <Link href="/products/kids-room" className="block px-6 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-900 hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors">
                  KIDS ROOM
                </Link>
              </div>
            </div>

            <Link href="/gallery" className="hover:text-[#2B5573] py-5 transition-colors">
              GALLERY
            </Link>

            <Link href="/blogs" className="hover:text-[#2B5573] py-5 transition-colors">
              BLOGS
            </Link>

            <Link href="/contact" className="hover:text-[#2B5573] py-5 transition-colors">
              CONTACT
            </Link>

            {/* 3 Horizontal Lines Menu Dropdown */}
            <div id="hamburger-more-menu" className="relative py-5 group">
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMoreMenuOpen(!isMoreMenuOpen);
                }}
                className="p-1.5 text-gray-800 hover:text-[#2B5573] transition-colors cursor-pointer flex flex-col items-center justify-center"
                aria-label="Toggle Extended Menu"
              >
                <div className="w-7 space-y-1.5">
                  <div className={`w-7 h-[2.5px] transition-colors ${isMoreMenuOpen ? 'bg-[#C5A059]' : 'bg-gray-800 group-hover:bg-[#C5A059]'}`} />
                  <div className={`w-7 h-[2.5px] transition-colors ${isMoreMenuOpen ? 'bg-[#C5A059]' : 'bg-gray-800 group-hover:bg-[#C5A059]'}`} />
                  <div className={`w-7 h-[2.5px] transition-colors ${isMoreMenuOpen ? 'bg-[#C5A059]' : 'bg-gray-800 group-hover:bg-[#C5A059]'}`} />
                </div>
              </button>

              {/* Dropdown Menu matching exact user screenshot */}
              <div
                className={`absolute top-full right-0 w-72 bg-white border-t-2 border-[#C5A059] border-x border-b border-gray-200 shadow-2xl z-50 animate-fade-in ${
                  isMoreMenuOpen ? 'block' : 'hidden group-hover:block'
                }`}
              >
                {[
                  { label: 'PLATINUM MEMBERSHIP', href: '/platinum-membership' },
                  { label: 'SILVER ENVOY PROGRAMME', href: '/platinum-membership#silver-envoy' },
                  { label: "FAQ'S", href: '/faq' },
                  { label: 'CAREERS', href: '/company' },
                  { label: 'CSR', href: '/company' },
                  { label: 'ANNUAL RETURNS', href: '/company' },
                ].map((item, index, arr) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMoreMenuOpen(false)}
                    className={`block px-7 py-4 text-[13px] font-bold uppercase tracking-wide text-black hover:text-[#2B5573] hover:bg-amber-50/50 transition-colors ${
                      index !== arr.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 xl:hidden">
            <button
              onClick={() => setIsEstimateOpen(true)}
              className="px-3.5 py-1.5 bg-[#2B5573] hover:bg-[#1A374D] text-white text-[11px] font-bold rounded-lg uppercase tracking-wider shadow-sm transition-colors"
            >
              Free Estimate
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:text-[#2B5573]"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* ──────────────── Mobile Navigation Drawer ──────────────── */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden animate-fade-in">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-up">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <img
                  src="/anjani-logo.png"
                  alt="Anjani Infra — Dream • Build • Grow"
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 rounded-lg text-gray-500 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-4 space-y-2 text-sm font-bold text-gray-800">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-amber-50/60 hover:text-[#2B5573]"
                >
                  HOME
                </Link>
                <Link
                  href="/company"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-amber-50/60 hover:text-[#2B5573]"
                >
                  COMPANY
                </Link>
                <div className="space-y-1">
                  <span className="block py-1.5 px-3 text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                    WHAT WE DO
                  </span>
                  <Link
                    href="/customized-interiors"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-amber-50/60 hover:text-[#2B5573]"
                  >
                    CUSTOMIZED INTERIORS
                  </Link>
                  <Link
                    href="/design-and-build"
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-amber-50/60 hover:text-[#2B5573]"
                  >
                    DESIGN AND BUILD
                  </Link>
                </div>
                <div className="space-y-1">
                  <span className="block py-1.5 px-3 text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                    PRODUCTS
                  </span>
                  {[
                    { label: 'KITCHEN', href: '/products/kitchen' },
                    { label: 'BEDROOM', href: '/products/bedroom' },
                    { label: 'DINING ROOM', href: '/products/dining-room' },
                    { label: 'LIVING ROOM', href: '/products/living-room' },
                    { label: 'DECORATIVE UNITS', href: '/products/decorative-units' },
                    { label: 'KIDS ROOM', href: '/products/kids-room' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-6 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-amber-50/60 hover:text-[#2B5573]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/gallery"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-amber-50/60 hover:text-[#2B5573]"
                >
                  GALLERY
                </Link>
                <Link
                  href="/blogs"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-amber-50/60 hover:text-[#2B5573]"
                >
                  BLOGS
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2.5 px-3 rounded-lg hover:bg-amber-50/60 hover:text-[#2B5573]"
                >
                  CONTACT
                </Link>

                <div className="pt-2 border-t border-gray-100 space-y-1">
                  {[
                    { label: 'PLATINUM MEMBERSHIP', href: '/platinum-membership' },
                    { label: 'SILVER ENVOY PROGRAMME', href: '/platinum-membership#silver-envoy' },
                    { label: "FAQ'S", href: '/faq' },
                    { label: 'CAREERS', href: '/company' },
                    { label: 'CSR', href: '/company' },
                    { label: 'ANNUAL RETURNS', href: '/company' },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-amber-50/60 hover:text-[#2B5573]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsEstimateOpen(true);
                }}
                className="w-full py-3 bg-[#2B5573] hover:bg-[#1A374D] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md text-center transition-colors"
              >
                Get Free Estimate
              </button>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+918388899999"
                  className="py-2.5 border border-[#2B5573] text-[#2B5573] text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 text-center hover:bg-blue-50/50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra%2C%20I%20am%20interested%20in%20interior%20design%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-1.5 text-center hover:bg-[#20bd5a]"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
