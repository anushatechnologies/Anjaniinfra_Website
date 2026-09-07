'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, ArrowRight, ShieldCheck, Clock, Award, Home } from 'lucide-react';

interface InteriorEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

export function InteriorEstimateModal({ isOpen, onClose, defaultPackage }: InteriorEstimateModalProps) {
  const [bhk, setBhk] = useState<'2BHK' | '3BHK' | '4BHK' | 'Villa'>('2BHK');
  const [tier, setTier] = useState<'ESSENTIAL' | 'ELEGANZA' | 'ELEGANZA_PLUS'>('ELEGANZA');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Bengaluru');
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Anjani Infra,\nI calculated an estimate on your website and would like to proceed with a design consultation.\n\n*Client Name:* ${name}\n*Phone:* ${phone}\n*Floor Plan:* ${bhk}\n*Package Tier:* ${tier.replace('_', ' ')}\n*Estimated Package Offer:* ${currentPrice.offer}\n*Original Price:* ${currentPrice.original}`;
    const waUrl = `https://wa.me/918388899999?text=${encodeURIComponent(waText)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
        
        {/* Top Header */}
        <div className="bg-[#132B3E] text-white px-6 py-4 flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/10 border border-[#C5A059]/40">
              <Sparkles className="w-5 h-5 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Get Your Free Interior Estimate</h3>
              <p className="text-xs text-[#C5A059]">Instant quotation with 40-Day Delivery & 10-Year Warranty</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Estimate Sent via WhatsApp!</h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>! Your <strong>{bhk} ({tier.replace('_', ' ')})</strong> estimate of <span className="text-[#132B3E] font-bold">{currentPrice.offer}</span> has been forwarded to our WhatsApp helpline at <strong className="text-emerald-700">+91 83888 99999</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/918388899999?text=${encodeURIComponent(
                    `Hello Anjani Infra,\nI calculated an estimate on your website and would like to discuss it.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Floor Plan:* ${bhk}\n*Package:* ${tier.replace('_', ' ')}\n*Offer:* ${currentPrice.offer}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Chat on WhatsApp (+91 83888 99999)</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Select Home Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  1. Select Floor Plan / Size
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['2BHK', '3BHK', '4BHK', 'Villa'] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBhk(item)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        bhk === item
                          ? 'bg-[#132B3E] text-white border-[#132B3E] shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Package Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  2. Choose Package Range
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTier('ESSENTIAL')}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      tier === 'ESSENTIAL'
                        ? 'bg-amber-50/60 border-[#C5A059] ring-2 ring-[#C5A059]/20'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-900">EVERYTHING ESSENTIAL</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Core woodwork & wardrobes</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('ELEGANZA')}
                    className={`p-3 rounded-xl text-left border transition-all relative ${
                      tier === 'ELEGANZA'
                        ? 'bg-amber-50/60 border-[#C5A059] ring-2 ring-[#C5A059]/20'
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
                    className={`p-3 rounded-xl text-left border transition-all ${
                      tier === 'ELEGANZA_PLUS'
                        ? 'bg-amber-50/60 border-[#C5A059] ring-2 ring-[#C5A059]/20'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <p className="font-bold text-xs text-gray-900">ELEGANZA PLUS</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Luxury false ceiling & accents</p>
                  </button>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-gradient-to-r from-amber-50/80 via-[#FFFDF8] to-amber-50/80 border border-[#C5A059]/40 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#C5A059]">Special Offer Price</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-gray-400 line-through text-sm">{currentPrice.original}</span>
                    <span className="text-2xl sm:text-3xl font-black text-[#132B3E]">{currentPrice.offer}</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">You Save {currentPrice.save} with this package offer</p>
                </div>
                <div className="flex sm:flex-col gap-3 sm:gap-1 text-[11px] text-gray-600">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#C5A059]" /> 40 Working Days Delivery</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" /> 10 Years Warranty</span>
                </div>
              </div>

              {/* Contact Information Form */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                  3. Enter Details to Receive Detailed Quotation & 3D Plan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Mobile / WhatsApp Number *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                  />
                </div>
                <div>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white text-gray-700"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Coimbatore">Coimbatore</option>
                    <option value="Mangaluru">Mangaluru</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai / Navi Mumbai</option>
                    <option value="Gurgaon">Gurgaon / Noida</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Kerala">Kerala (Kochi / Trivandrum)</option>
                    <option value="UAE">UAE (Dubai)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Complete Estimate & Book Free Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
