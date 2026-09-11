'use client';

import React, { useState } from 'react';
import { X, Sparkles, Phone, ShieldCheck, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface InteriorEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export function InteriorEstimateModal({ isOpen, onClose }: InteriorEstimateModalProps) {
  const [bhk, setBhk] = useState<'2BHK' | '3BHK' | '4BHK' | 'Villa'>('2BHK');
  const [tier, setTier] = useState<'ESSENTIAL' | 'ELEGANZA' | 'ELEGANZA_PLUS'>('ELEGANZA');

  if (!isOpen) return null;

  // Pricing Matrix based on D'LIFE package offers
  const pricingTable = {
    '2BHK': {
      ESSENTIAL: { original: '₹8.85 Lac', offer: '₹6.37 Lac*', save: '₹2.48 Lac' },
      ELEGANZA: { original: '₹12.50 Lac', offer: '₹8.95 Lac*', save: '₹3.55 Lac' },
      ELEGANZA_PLUS: { original: '₹17.80 Lac', offer: '₹12.40 Lac*', save: '₹5.40 Lac' },
    },
    '3BHK': {
      ESSENTIAL: { original: '₹11.20 Lac', offer: '₹7.95 Lac*', save: '₹3.25 Lac' },
      ELEGANZA: { original: '₹15.84 Lac', offer: '₹11.41 Lac*', save: '₹4.43 Lac' },
      ELEGANZA_PLUS: { original: '₹22.50 Lac', offer: '₹15.80 Lac*', save: '₹6.70 Lac' },
    },
    '4BHK': {
      ESSENTIAL: { original: '₹16.50 Lac', offer: '₹11.80 Lac*', save: '₹4.70 Lac' },
      ELEGANZA: { original: '₹21.00 Lac', offer: '₹14.90 Lac*', save: '₹6.10 Lac' },
      ELEGANZA_PLUS: { original: '₹24.03 Lac', offer: '₹16.82 Lac*', save: '₹7.21 Lac' },
    },
    'Villa': {
      ESSENTIAL: { original: '₹22.00 Lac', offer: '₹15.50 Lac*', save: '₹6.50 Lac' },
      ELEGANZA: { original: '₹29.50 Lac', offer: '₹21.00 Lac*', save: '₹8.50 Lac' },
      ELEGANZA_PLUS: { original: '₹38.00 Lac', offer: '₹26.90 Lac*', save: '₹11.10 Lac' },
    },
  };

  const currentPrice = pricingTable[bhk][tier];
  const tierName = tier === 'ESSENTIAL' ? 'Everything Essential' : tier === 'ELEGANZA' ? 'Eleganza' : 'Eleganza Plus';
  const waText = `Hello Anjani Infra,\nI calculated an estimate on your website and would like to claim this offer.\n\n*Floor Plan:* ${bhk}\n*Package:* ${tierName}\n*Estimated Offer Price:* ${currentPrice.offer}\n*Original Price:* ${currentPrice.original}\n*Savings:* ${currentPrice.save}\n\nPlease share the detailed BOQ, 3D design catalog, and consultation details.`;
  const waUrl = `https://wa.me/918388899999?text=${encodeURIComponent(waText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
        
        {/* Top Header */}
        <div className="bg-[#132B3E] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/10 border border-[#C5A059]/40">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Get Your Free Interior Estimate</h3>
              <p className="text-xs text-[#C5A059]">Instant quotation with 40-Day Delivery &amp; 10-Year Warranty</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center transition-transform hover:scale-105 text-white shadow cursor-pointer"
              title="Chat on WhatsApp (+91 83888 99999)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a
              href="tel:+918388899999"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-105 text-[#C5A059] shadow cursor-pointer"
              title="Call Consultant Directly (+91 83888 99999)"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto max-h-[85vh] space-y-5">
          
          {/* Step 1: Select Home Type */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                1. Select Floor Plan / Size
              </label>
              <span className="text-[11px] text-gray-400">Tap to switch</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {(['2BHK', '3BHK', '4BHK', 'Villa'] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setBhk(item)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    bhk === item
                      ? 'bg-[#132B3E] text-white border-[#132B3E] shadow-md scale-[1.02]'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Package Tier */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                2. Choose Package Range
              </label>
              <span className="text-[11px] text-[#C5A059] font-medium">Selected: {tierName}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => setTier('ESSENTIAL')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  tier === 'ESSENTIAL'
                    ? 'bg-amber-50/70 border-[#C5A059] ring-2 ring-[#C5A059]/30 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-bold text-xs text-gray-900">EVERYTHING ESSENTIAL</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Core woodwork &amp; wardrobes</p>
              </button>

              <button
                type="button"
                onClick={() => setTier('ELEGANZA')}
                className={`p-3 rounded-xl text-left border transition-all relative cursor-pointer ${
                  tier === 'ELEGANZA'
                    ? 'bg-amber-50/70 border-[#C5A059] ring-2 ring-[#C5A059]/30 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <span className="absolute -top-2 right-2 bg-[#C5A059] text-[#132B3E] text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase shadow-xs">
                  Popular
                </span>
                <p className="font-bold text-xs text-[#132B3E]">ELEGANZA</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Modular kitchen + full woodwork</p>
              </button>

              <button
                type="button"
                onClick={() => setTier('ELEGANZA_PLUS')}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                  tier === 'ELEGANZA_PLUS'
                    ? 'bg-amber-50/70 border-[#C5A059] ring-2 ring-[#C5A059]/30 shadow-sm'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <p className="font-bold text-xs text-gray-900">ELEGANZA PLUS</p>
                <p className="text-[10px] text-gray-500 mt-0.5">Luxury false ceiling &amp; accents</p>
              </button>
            </div>
          </div>

          {/* Price Calculation Box */}
          <div className="bg-gradient-to-r from-amber-50/90 via-[#FFFDF8] to-amber-50/90 border border-[#C5A059]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C5A059]">Special Offer Price</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-gray-400 line-through text-sm">{currentPrice.original}</span>
                <span className="text-2xl sm:text-3xl font-black text-[#132B3E]">{currentPrice.offer}</span>
              </div>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5">You Save {currentPrice.save} with this package offer</p>
            </div>
            <div className="flex sm:flex-col gap-3 sm:gap-1 text-xs text-gray-600">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C5A059]" /> 40 Working Days Delivery</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C5A059]" /> 10 Years Warranty</span>
            </div>
          </div>

          {/* Direct Action Options (Zero Form) */}
          <div className="space-y-3 pt-1">
            <p className="text-xs text-gray-600 text-center font-medium">
              Connect directly to receive your personalized <strong className="text-[#132B3E]">{bhk} ({tierName})</strong> 3D design plan &amp; itemized BOQ:
            </p>

            {/* Option 1: WhatsApp */}
            <a
              href={waUrl}
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
                    +91 83888 99999 • Get 3D Layout &amp; {currentPrice.offer} Offer
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
                    +91 83888 99999 • Speak with a Senior Interior Designer
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-[#132B3E] group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all" />
            </a>
          </div>

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
              <span>100% Customized Factory Production (Zero Retail Markup)</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
