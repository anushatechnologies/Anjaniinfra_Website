'use client';

import React from 'react';
import { X, Sparkles, Phone, ShieldCheck, Clock, MapPin, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiscountModal({ isOpen, onClose }: DiscountModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
        
        {/* Header */}
        <div className="bg-[#132B3E] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#C5A059]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/50 text-[#C5A059] text-[10px] font-bold uppercase tracking-wider mb-1">
              <Tag className="w-3 h-3" />
              <span>30% Factory Discount</span>
            </div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span>Reach Us &amp; Avail 30% Off</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </h3>
            <p className="text-xs text-amber-100/80 mt-0.5">
              Direct from Hyderabad automated factory with zero retail markup
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-gray-600 text-center leading-relaxed">
            Choose your preferred way to connect with our senior design consultants and lock in your <strong className="text-[#132B3E]">30% factory discount</strong> for your home interior in Hyderabad:
          </p>

          {/* Option 1: WhatsApp */}
          <a
            href="https://wa.me/918388899999?text=Hi%20Anjani%20Infra%2C%20I%20would%20like%20to%20avail%20the%2030%25%20factory%20discount%20for%20my%20flat%2Fvilla%20interior%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center justify-between p-4 bg-[#25D366]/10 hover:bg-[#25D366] border border-[#25D366]/40 hover:border-[#25D366] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow group-hover:scale-105 group-hover:bg-white group-hover:text-[#25D366] transition-all shrink-0">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Chat on WhatsApp</span>
                  <span className="text-[10px] bg-[#25D366] text-white px-1.5 py-0.5 rounded-full font-semibold group-hover:bg-white group-hover:text-[#25D366]">Fastest</span>
                </div>
                <div className="text-xs text-gray-500 group-hover:text-white/90 transition-colors">
                  +91 83888 99999 • Instant 30% Quote
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#25D366] group-hover:text-white group-hover:translate-x-1 transition-all" />
          </a>

          {/* Option 2: Phone Call */}
          <a
            href="tel:+918388899999"
            onClick={onClose}
            className="group flex items-center justify-between p-4 bg-[#132B3E]/5 hover:bg-[#132B3E] border border-[#132B3E]/20 hover:border-[#132B3E] rounded-xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#132B3E] text-[#C5A059] flex items-center justify-center shadow group-hover:scale-105 group-hover:bg-[#C5A059] group-hover:text-[#132B3E] transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 group-hover:text-white transition-colors">
                  Call Consultant Directly
                </div>
                <div className="text-xs text-gray-500 group-hover:text-amber-100/90 transition-colors">
                  +91 83888 99999 • Direct Line
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-[#132B3E] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
          </a>

          {/* Guarantee Highlights */}
          <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-[11px] text-gray-600">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>10-Year Warranty</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
              <span>40 Days Handover</span>
            </div>
            <div className="flex items-center gap-1.5 col-span-2 text-gray-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>100% Customized Factory Production</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
