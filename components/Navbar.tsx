'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Building2, Phone, Mail, ChevronRight, Sparkles, Facebook, Linkedin, Instagram } from 'lucide-react';
import { QuickQuoteModal } from './QuickQuoteModal';

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
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
      {/* Top Banner Alert Bar */}
      <div className="bg-[#1A374D] text-[#FCF9EB] text-[10px] sm:text-xs py-1.5 px-4 lg:px-12 font-medium tracking-wide flex items-center justify-between border-b border-[#2B5573]">
        <div className="flex items-center gap-3 mx-auto sm:mx-0">
          <span className="flex items-center gap-1.5 text-[#C5A059] font-bold">
            <Sparkles className="w-3 h-3 animate-pulse" /> Integrated EPC, Civil Superstructure & Luxury Fitout
          </span>
          <span className="hidden md:inline text-white/40">|</span>
          <span className="hidden md:inline text-white/90">✦ Zero-Accident Safety & ISO 9001 Certified</span>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="underline hover:text-[#C5A059] font-bold text-white transition-colors cursor-pointer"
          >
            Get Free Proposal &rarr;
          </button>
          <div className="flex items-center gap-2 text-white/70">
            <a href="#" className="hover:text-[#C5A059] transition-colors"><Facebook className="w-3 h-3" /></a>
            <a href="#" className="hover:text-[#C5A059] transition-colors"><Linkedin className="w-3 h-3" /></a>
            <a href="#" className="hover:text-[#C5A059] transition-colors"><Instagram className="w-3 h-3" /></a>
          </div>
        </div>
      </div>

      {/* ── Fixed Header (Pinned to Top 0px) ── */}
      <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 px-5 lg:px-12 bg-white border-b border-[#BFBFBF]/80 shadow-md ${isScrolled ? 'py-2.5 shadow-lg' : 'py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <img
              src="/logo.png"
              alt="Anjani Infra Logo"
              className="h-11 w-11 object-contain rounded-full bg-white shadow-md transition-all group-hover:scale-105 ring-2 ring-[#C5A059]/40"
            />
            <div>
              <div className="font-serif font-bold text-[18px] tracking-tight text-[#1A374D] leading-none">
                ANJANI INFRA
              </div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-[#C5A059] font-extrabold mt-0.5">
                DREAM • BUILD • GROW
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-widest text-[#1A374D]">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-[#C5A059] transition-colors relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            {/* Quick Proposal Button */}
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] text-[11px] font-extrabold uppercase tracking-wider transition-all shadow-md cursor-pointer border border-[#C5A059]/40"
            >
              <span className="text-xs">🔒</span>
              <span>GET PROPOSAL</span>
            </button>

            {/* Hamburger Button (Mobile & Tablet Only) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden h-10 w-10 border border-[#2B5573]/60 rounded-xl flex items-center justify-center text-[#2B5573] hover:bg-[#2B5573] hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Backdrop ── */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* ── Sliding Drawer ── */}
      <div
        className={`fixed top-0 right-0 z-50 w-full sm:w-[420px] h-full bg-[#F6F4EE] border-l border-[#BFBFBF] flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#BFBFBF]">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Anjani Infra Logo"
              className="h-10 w-10 object-contain rounded-full bg-white shadow-sm ring-1 ring-[#C5A059]/40"
            />
            <div>
              <span className="font-serif font-bold text-base text-[#2B5573]">ANJANI INFRA</span>
              <p className="text-[7px] uppercase tracking-widest text-[#C5A059] font-bold">Dream • Build • Grow</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="h-9 w-9 border border-[#2B5573]/40 rounded-lg flex items-center justify-center text-[#2B5573] hover:bg-[#2B5573] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-7 py-6 space-y-1">
          {navLinks.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between py-4 border-b border-[#BFBFBF]/50 group"
            >
              <div>
                <div className="text-[10px] font-mono text-[#C5A059] mb-0.5">0{i + 1}</div>
                <span className="text-2xl font-serif font-bold text-[#2B5573] group-hover:text-[#1A374D] transition-colors">
                  {item.label}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#2B5573]/40 group-hover:text-[#2B5573] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </nav>

        {/* Drawer Footer */}
        <div className="px-7 py-6 border-t border-[#BFBFBF] bg-[#FCF9EB] space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Corporate Project Inquiries</p>
          <div className="space-y-2 text-xs text-[#383735]">
            <a href="mailto:anjaniinfra4@gmail.com" className="flex items-center gap-2.5 hover:text-[#2B5573] transition-colors">
              <Mail className="w-4 h-4 text-[#2B5573] shrink-0" />
              anjaniinfra4@gmail.com
            </a>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#2B5573] shrink-0" />
              <span className="font-bold text-[#2B5573]">+91 83888 99999</span>
            </div>
            <div className="text-[10px] text-[#383735]/80 leading-relaxed pt-1">
              📍 Jayabheri The Summit, Narsingi, Hyderabad, Telangana (Code: 36)
            </div>
            <div className="text-[10px] font-mono font-bold text-[#C5A059]">
              GSTIN: 36BKIPS0586G1ZT
            </div>
          </div>

          <button
            onClick={() => {
              setIsMenuOpen(false);
              setIsQuoteOpen(true);
            }}
            className="w-full py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#d5b069] text-[#1A374D] font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            Request Architectural Proposal
          </button>
        </div>
      </div>

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />
    </>
  );
}
