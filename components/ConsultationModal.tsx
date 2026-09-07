'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone, Calendar, Clock, MapPin, User, Mail, Home } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    propertyType: '3 BHK Flat',
    preferredDate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Hello Anjani Infra,\nI would like to book a free 3D design consultation.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Property Type:* ${formData.propertyType}\n*Preferred Date:* ${formData.preferredDate || 'Earliest available'}`;
    const waUrl = `https://wa.me/918388899999?text=${encodeURIComponent(waText)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 flex flex-col relative animate-scale-in">
        
        {/* Header */}
        <div className="bg-[#132B3E] text-white px-6 py-5 flex items-center justify-between border-b-2 border-[#C5A059]">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <span>Talk to Our Design Consultant</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </h3>
            <p className="text-xs text-amber-100/80 mt-0.5">Complimentary 1-on-1 personalized 3D design consultation</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">Consultation Scheduled via WhatsApp!</h4>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Thank you <strong>{formData.name}</strong>! Your inquiry has been forwarded to our WhatsApp hotline at <strong className="text-emerald-700">+91 83888 99999</strong>.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/918388899999?text=${encodeURIComponent(
                    `Hello Anjani Infra,\nI would like to confirm my design consultation.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*City:* ${formData.city}\n*Property:* ${formData.propertyType}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Chat on WhatsApp (+91 83888 99999)</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 83888 99999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    City *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white text-gray-700"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Gurgaon">Gurgaon / Noida</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white text-gray-700"
                  >
                    <option value="2 BHK Flat">2 BHK Apartment</option>
                    <option value="3 BHK Flat">3 BHK Apartment</option>
                    <option value="4 BHK Flat">4 BHK Apartment</option>
                    <option value="Villa / Independent">Independent Villa</option>
                    <option value="Renovation">Home Renovation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#C5A059] bg-white text-gray-700"
                  />
                </div>
              </div>

              <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200/60 flex items-center gap-2.5 text-xs text-[#132B3E]">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Zero obligation, 100% free expert interior space planning & estimate.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A059] to-[#DFBA73] hover:from-[#b59049] hover:to-[#cfab63] text-[#132B3E] font-black text-xs uppercase tracking-widest shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                Book Free Consultation
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
