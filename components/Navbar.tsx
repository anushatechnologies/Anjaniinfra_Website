'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

interface SubNavItem {
  title: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubNavItem[];
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu((prev) => (prev === label ? null : label));
  };

  const navLinks: NavItem[] = [
    { label: 'ABOUT', href: '/#about' },
    {
      label: 'DESIGNING',
      href: '/design-and-build',
      children: [
        {
          title: 'Master Conceptual Design & Planning',
          href: '/master-conceptual-design',
        },
        {
          title: 'Architectural & Civil Design Services',
          href: '/architectural-civil-design',
        },
        {
          title: 'MEP, Lighting & Acoustical Ceilings',
          href: '/mep-lighting-acoustical-ceilings',
        },
      ],
    },
    {
      label: 'SERVICES',
      href: '/services',
      children: [
        {
          title: 'Turnkey Interior Projects',
          href: '/turnkey-interior-projects',
        },
        {
          title: 'Luxury Residential & Villa Architecture',
          href: '/luxury-residential-villa-architecture',
        },
        {
          title: 'Corporate & Commercial Workplaces',
          href: '/corporate-commercial-workplaces',
        },
        {
          title: 'Modular Kitchens & Wardrobes',
          href: '/modular-kitchens-wardrobes',
        },
        {
          title: 'General Safety & EHS',
          href: '/safety-ehs',
        },
      ],
    },
    { label: 'PORTFOLIO', href: '/#portfolio' },
    { label: 'PROCESS', href: '/#process' },
    {
      label: 'PROJECTS',
      href: '/projects',
      children: [
        {
          title: 'Villas',
          href: '/projects?category=villas',
        },
        {
          title: 'Apartments',
          href: '/projects?category=apartments',
        },
        {
          title: 'Commercial Offices',
          href: '/projects?category=commercial-offices',
        },
        {
          title: 'Retail & Shops',
          href: '/projects?category=retail-shops',
        },
      ],
    },
  ];

  return (
    <>
      <InteriorEstimateModal
        isOpen={isEstimateOpen}
        onClose={() => setIsEstimateOpen(false)}
      />

      {/* ──────────────── ModernMatrix Style Sticky Navigation ──────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl py-3 border-b border-[#c9a96e]/15 shadow-2xl'
            : 'bg-[#0a0a0a]/60 backdrop-blur-md py-4 sm:py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* Brand Logo & Name - High Clarity & Bold Presence */}
          <Link href="/" className="flex items-center gap-3.5 group py-1">
            <div className="relative shrink-0 rounded-md overflow-hidden shadow-md border border-[#c9a96e]/40 group-hover:border-[#c9a96e] group-hover:shadow-lg transition-all duration-300 bg-white">
              <img
                src="/anjani-logo.png"
                alt="Anjani Infra Projects"
                className="h-11 sm:h-13 w-auto object-contain block transition-transform duration-300 group-hover:scale-102"
              />
            </div>

            {/* Caption shown beside logo - Clear, Thick & High Contrast */}
            <div className="flex flex-col text-left justify-center">
              <span className="font-serif font-bold text-[15px] sm:text-[18px] tracking-[0.16em] uppercase leading-tight transition-colors text-white brand-title">
                ANJANI INFRA PROJECTS
              </span>
              <span className="text-[8.5px] sm:text-[10px] font-sans font-bold text-[#c9a96e] tracking-[0.26em] uppercase mt-0.5 brand-subtitle">
                LUXURY INTERIOR &amp; ARCHITECTURE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] font-medium tracking-[0.22em] text-[#e8e4de]">
            {navLinks.map((link) => {
              if (link.children) {
                const isProjects = link.label === 'PROJECTS';
                return (
                  <div key={link.label} className="relative group py-2">
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 hover:text-[#fafaf8] transition-colors whitespace-nowrap"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#c9a96e] transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />

                    {/* Clean Dropdown with Requested Items */}
                    <div
                      className={`absolute top-full ${
                        isProjects ? 'right-0' : 'left-0'
                      } pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto z-[999]`}
                    >
                      <div className="w-[280px] bg-[#0c0c0c] border border-[#c9a96e]/50 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.95)] py-1.5 overflow-hidden">
                        {link.children.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="block px-4 py-3 text-[13px] font-sans font-medium text-[#e8e4de] hover:text-[#c9a96e] hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0 leading-snug"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative py-2 hover:text-[#fafaf8] transition-colors group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <a
              href="tel:+919848088998"
              className="sm:hidden p-2 text-[#c9a96e] border border-[#c9a96e]/30 rounded"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#fafaf8] hover:text-[#c9a96e] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* ──────────────── Mobile Navigation Drawer ──────────────── */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 sm:p-10 animate-fade-in overflow-y-auto">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <div className="bg-white rounded-md overflow-hidden border border-[#c9a96e]/40 shadow-md shrink-0">
                  <img
                    src="/anjani-logo.png"
                    alt="Anjani Infra Projects"
                    className="h-10 w-auto object-contain block"
                  />
                </div>
                <div className="flex flex-col text-left justify-center">
                  <span className="font-serif font-bold text-[14px] tracking-wider text-white uppercase leading-tight brand-title">
                    ANJANI INFRA PROJECTS
                  </span>
                  <span className="text-[8.5px] font-sans font-bold text-[#c9a96e] tracking-widest uppercase mt-0.5 brand-subtitle">
                    LUXURY INTERIOR &amp; ARCHITECTURE
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#fafaf8] hover:text-[#c9a96e]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-8 flex flex-col gap-5">
              {navLinks.map((link) => {
                if (link.children) {
                  const isOpen = openMobileSubmenu === link.label;
                  return (
                    <div key={link.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-serif text-2xl text-[#e8e4de] hover:text-[#c9a96e] transition-colors"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(link.label)}
                          className="p-2 text-[#c9a96e] hover:text-[#fafaf8]"
                          aria-label={`Toggle ${link.label} Submenu`}
                        >
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {isOpen && (
                        <div className="pl-4 space-y-1 pt-1 border-l border-[#c9a96e]/30">
                          {link.children.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block py-2 text-sm font-sans font-medium text-[#e8e4de] hover:text-[#c9a96e] transition-colors"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-2xl text-[#e8e4de] hover:text-[#c9a96e] transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/10">
            <a
              href="tel:+919848088998"
              className="w-full mm-btn mm-btn-filled py-3 text-center text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>CALL +91 98480 88998</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
