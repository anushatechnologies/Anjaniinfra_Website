'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { InteriorEstimateModal } from './InteriorEstimateModal';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);

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

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'PROCESS', href: '#process' },
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
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="bg-white/10 p-1.5 rounded border border-[#c9a96e]/30 group-hover:border-[#c9a96e] transition-colors">
              <img
                src="/anjani-logo.png"
                alt="Anjani Infra Projects"
                className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-serif font-light text-[15px] sm:text-[17px] tracking-[0.18em] text-[#fafaf8] uppercase leading-tight group-hover:text-[#c9a96e] transition-colors">
                ANJANI INFRA PROJECTS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-medium tracking-[0.22em] text-[#e8e4de]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-2 hover:text-[#fafaf8] transition-colors group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c9a96e] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919848088998"
              className="flex items-center gap-2 px-4 py-2 text-[11px] font-medium tracking-[0.2em] uppercase text-[#e8e4de] border border-[#c9a96e]/40 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#c9a96e]" />
              <span>CALL NOW</span>
            </a>
          </div>

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
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 sm:p-10 animate-fade-in">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <img
                  src="/anjani-logo.png"
                  alt="Anjani Infra Projects"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-sm tracking-wider text-[#fafaf8] uppercase">
                    ANJANI INFRA PROJECTS
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#fafaf8] hover:text-[#c9a96e]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-8 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-2xl text-[#e8e4de] hover:text-[#c9a96e] transition-colors"
                >
                  {link.label}
                </a>
              ))}
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
